import dotenv from 'dotenv';
// Load environment variables before importing firebase
dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env' });

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { collection, getDocs } from 'firebase/firestore';

// Dynamically import local modules after dotenv has loaded env variables
const { db } = await import('../src/lib/firebase');
const { getPosts } = await import('../src/data/posts');
const { projects: staticProjects } = await import('../src/data/projects');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://mintsglobal.ae';

const staticRoutes = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/services', changefreq: 'weekly', priority: 0.8 },
  { url: '/digital-marketing', changefreq: 'monthly', priority: 0.8 },
  { url: '/digital-marketing/seo', changefreq: 'monthly', priority: 0.7 },
  { url: '/digital-marketing/performance-marketing', changefreq: 'monthly', priority: 0.7 },
  { url: '/digital-marketing/smm', changefreq: 'monthly', priority: 0.7 },
  { url: '/digital-marketing/branding', changefreq: 'monthly', priority: 0.7 },
  { url: '/digital-marketing/video-production', changefreq: 'monthly', priority: 0.7 },
  { url: '/digital-marketing/photography-graphics', changefreq: 'monthly', priority: 0.7 },
  { url: '/software-development', changefreq: 'monthly', priority: 0.8 },
  { url: '/software-development/web-apps', changefreq: 'monthly', priority: 0.7 },
  { url: '/software-development/mobile-apps', changefreq: 'monthly', priority: 0.7 },
  { url: '/software-development/website-development', changefreq: 'monthly', priority: 0.7 },
  { url: '/software-development/erp-solutions', changefreq: 'monthly', priority: 0.7 },
  { url: '/software-development/crm-development', changefreq: 'monthly', priority: 0.7 },
  { url: '/software-development/ecommerce', changefreq: 'monthly', priority: 0.7 },
  { url: '/cyber-security', changefreq: 'monthly', priority: 0.8 },
  { url: '/cyber-security/offensive-security', changefreq: 'monthly', priority: 0.7 },
  { url: '/cyber-security/incident-response', changefreq: 'monthly', priority: 0.7 },
  { url: '/cyber-security/managed-advisory', changefreq: 'monthly', priority: 0.7 },
  { url: '/cyber-security/compliance-grc', changefreq: 'monthly', priority: 0.7 },
  { url: '/cyber-security/cloud-security', changefreq: 'monthly', priority: 0.7 },
  { url: '/cyber-security/ot-iot-security', changefreq: 'monthly', priority: 0.7 },
  { url: '/europe-services/software-development', changefreq: 'monthly', priority: 0.7 },
  { url: '/europe-services/digital-marketing', changefreq: 'monthly', priority: 0.7 },
  { url: '/europe-services/cyber-security', changefreq: 'monthly', priority: 0.7 },
  { url: '/privacy-policy', changefreq: 'monthly', priority: 0.5 },
  { url: '/terms-of-service', changefreq: 'monthly', priority: 0.5 },
  { url: '/work', changefreq: 'weekly', priority: 0.8 },
  { url: '/about', changefreq: 'monthly', priority: 0.7 },
  { url: '/blog', changefreq: 'weekly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
];

async function generateSitemap() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  let dynamicWorks: any[] = [];
  try {
    const worksSnapshot = await getDocs(collection(db, 'works'));
    dynamicWorks = worksSnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        _id: doc.id,
        updatedAt: data.updatedAt ? new Date(data.updatedAt.toDate()).toISOString() : new Date().toISOString()
      };
    });
  } catch (err) {
    console.error('Error fetching dynamic works:', err);
  }

  const allProjects = [...dynamicWorks, ...staticProjects];

  // Determine latest work update
  let workLastMod = '';
  if (allProjects && allProjects.length > 0) {
    const sortedProjects = [...allProjects].sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
    try {
      workLastMod = new Date(sortedProjects[0].updatedAt).toISOString().split('T')[0];
    } catch {}
  }

  // Add static routes (includes the 19 sub-service and legal pages)
  const TODAY = new Date().toISOString().split('T')[0];
  staticRoutes.forEach(route => {
    let lastmodStr = `<lastmod>${TODAY}</lastmod>`;
    if (route.url === '/work' && workLastMod) {
      lastmodStr = `<lastmod>${workLastMod}</lastmod>`;
    }
    xml += `  <url>
    <loc>${DOMAIN}${route.url}</loc>
    ${lastmodStr}
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>
`;
  });

  // Fetch dynamic blog posts
  const posts = await getPosts();

  posts.forEach(post => {
    let lastmod = '';
    if (post.updatedAtIso) {
      lastmod = post.updatedAtIso.split('T')[0];
    } else {
      try {
        lastmod = new Date(post.date).toISOString().split('T')[0];
      } catch {
        lastmod = TODAY;
      }
    }
    
    xml += `  <url>
    <loc>${DOMAIN}/blog/${post.slug}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
`;
  });

  // Add individual works (even if using anchor links, it signals structured content endpoints)
  allProjects.forEach(proj => {
    let lastmod = '';
    try {
      lastmod = new Date(proj.updatedAt).toISOString().split('T')[0];
    } catch {}

    xml += `  <url>
    <loc>${DOMAIN}/work/${proj._id}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
`;
  });

  xml += `</urlset>`;

  const outputPath = path.join(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(outputPath, xml, 'utf8');
  console.log(`✅ Sitemap successfully generated at ${outputPath} with ${staticRoutes.length + posts.length + allProjects.length} URLs.`);
  process.exit(0);
}

generateSitemap();
