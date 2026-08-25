import fs from 'node:fs';
import path from 'node:path';
import express from 'express';
import puppeteer from 'puppeteer';

const DOMAIN = 'https://www.mintsglobal.ae';
const PORT = 3001;
const LOCAL_URL = `http://localhost:${PORT}`;

async function prerender() {
  if (process.env.VERCEL || process.env.CI) {
    console.log('Skipping Puppeteer prerender in CI/Vercel environment. Serving as SPA.');
    return;
  }
  
  console.log('Starting prerender process...');

  // 1. Start local Express server for dist/client
  const app = express();
  const distPath = path.resolve(process.cwd(), 'dist/client');
  
  if (!fs.existsSync(distPath)) {
    console.error('dist/client not found. Make sure to run build:client first.');
    process.exit(1);
  }

  // Serve static files, but fallback to index.html for SPA routing
  app.use(express.static(distPath));
  app.use((req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });

  const server = app.listen(PORT, () => {
    console.log(`Server listening on ${LOCAL_URL} for prerendering...`);
  });

  try {
    // 2. Read sitemap to get all routes
    const sitemapPath = path.join(distPath, 'sitemap.xml');
    if (!fs.existsSync(sitemapPath)) {
      throw new Error('sitemap.xml not found in dist/client. Make sure generate-sitemap.ts ran.');
    }

    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    const urlMatches = sitemapContent.matchAll(/<loc>(.*?)<\/loc>/g);
    const routes: string[] = [];
    
    for (const match of urlMatches) {
      const url = match[1];
      if (url.startsWith(DOMAIN)) {
        routes.push(url.replace(DOMAIN, ''));
      }
    }

    console.log(`Found ${routes.length} routes to prerender.`);

    // 3. Launch Puppeteer
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    // 4. Visit each route and save HTML
    for (const route of routes) {
      // Skip the index route as we'll overwrite it at the end to prevent issues during crawling
      if (route === '/') continue;

      console.log(`Prerendering ${route}...`);
      const page = await browser.newPage();
      
      // Speed up rendering by not loading external non-essential resources if desired, 
      // but we need Firebase to load, so we let it load normally.
      
      // Go to page and wait for network to be idle (so Firebase fetches complete)
      await page.goto(`${LOCAL_URL}${route}`, { waitUntil: 'networkidle2', timeout: 30000 });
      
      // Optional: wait an extra second for any React animations or Suspense fallbacks to settle
      await new Promise(r => setTimeout(r, 1000));

      // Get the full HTML
      const html = await page.content();
      
      // Save the HTML to dist/client/<route>/index.html
      const routeDir = path.join(distPath, route);
      if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
      }
      fs.writeFileSync(path.join(routeDir, 'index.html'), html);
      
      await page.close();
    }

    // Finally, prerender the home page (route === '/')
    console.log(`Prerendering / (Home)...`);
    const page = await browser.newPage();
    await page.goto(`${LOCAL_URL}/`, { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(r => setTimeout(r, 1000));
    const homeHtml = await page.content();
    fs.writeFileSync(path.join(distPath, 'index.html'), homeHtml);
    await page.close();

    await browser.close();
    console.log('✅ Prerendering complete!');
  } catch (error) {
    console.error('Error during prerendering:', error);
    process.exit(1);
  } finally {
    server.close();
  }
}

prerender();
