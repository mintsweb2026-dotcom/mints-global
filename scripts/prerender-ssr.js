import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://www.mintsglobal.ae';
const distClientPath = path.resolve(__dirname, '../dist/client');
const distServerPath = path.resolve(__dirname, '../dist/server/entry-server.js');

async function runPrerender() {
  console.log('🚀 Starting pure SSR static pre-rendering...');

  if (!fs.existsSync(distServerPath)) {
    console.error('❌ dist/server/entry-server.js not found. Run vite build --ssr first.');
    process.exit(1);
  }

  if (!fs.existsSync(distClientPath)) {
    console.error('❌ dist/client not found. Run vite build first.');
    process.exit(1);
  }

  // 1. Read index.html template
  const templatePath = path.join(distClientPath, 'index.html');
  const template = fs.readFileSync(templatePath, 'utf8');

  // 2. Import entry-server render function using file:// URL for Windows support
  const serverModuleUrl = pathToFileURL(distServerPath).href;
  const { render } = await import(serverModuleUrl);

  // 3. Get routes from sitemap.xml
  const sitemapPath = path.join(distClientPath, 'sitemap.xml');
  const routes = ['/'];

  if (fs.existsSync(sitemapPath)) {
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    const matches = sitemapContent.matchAll(/<loc>(.*?)<\/loc>/g);
    for (const match of matches) {
      const url = match[1];
      if (url.startsWith(DOMAIN)) {
        const routePath = url.replace(DOMAIN, '') || '/';
        if (!routes.includes(routePath)) routes.push(routePath);
      }
    }
  }

  console.log(`Found ${routes.length} routes to pre-render.`);

  let renderedCount = 0;

  for (const route of routes) {
    try {
      const { html, helmet } = render(route);

      // Replace app-html placeholder
      let pageHtml = template.includes('<!--app-html-->')
        ? template.replace('<!--app-html-->', html)
        : template.replace('<div id="root"></div>', `<div id="root">${html}</div>`);

      // Replace app-head placeholder
      if (helmet) {
        if (pageHtml.includes('<!--app-head-->')) {
          pageHtml = pageHtml.replace('<!--app-head-->', helmet);
        } else {
          pageHtml = pageHtml.replace('</head>', `${helmet}\n</head>`);
        }

        // Remove default title/desc if helmet provided a page-specific title/desc
        if (helmet.includes('<title')) {
          pageHtml = pageHtml.replace(/<title>Best Digital Marketing Agency Dubai \| Mints Global<\/title>/g, '');
        }
        if (helmet.includes('name="description"')) {
          pageHtml = pageHtml.replace(/<meta name="description" content="Mints Global is Dubai's best digital marketing agency delivering ROI-driven marketing, software development & cybersecurity solutions\. Get a free consultation today!" \/>/g, '');
        }
      }

      if (route === '/') {
        fs.writeFileSync(templatePath, pageHtml, 'utf8');
      } else {
        const routeDir = path.join(distClientPath, route.slice(1));
        if (!fs.existsSync(routeDir)) {
          fs.mkdirSync(routeDir, { recursive: true });
        }
        fs.writeFileSync(path.join(routeDir, 'index.html'), pageHtml, 'utf8');
      }

      renderedCount++;
      console.log(`  ✅ Pre-rendered: ${route}`);
    } catch (err) {
      console.error(`  ❌ Error pre-rendering ${route}:`, err.message);
    }
  }

  console.log(`🎉 Successfully pre-rendered ${renderedCount}/${routes.length} routes into static HTML!`);
}

runPrerender().catch(err => {
  console.error('Fatal pre-render error:', err);
  process.exit(1);
});
