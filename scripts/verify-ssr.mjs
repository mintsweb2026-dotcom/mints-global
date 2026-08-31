const routes = [
  '/', 
  '/cyber-security', 
  '/digital-marketing', 
  '/digital-marketing/seo', 
  '/digital-marketing/smm',
  '/digital-marketing/branding',
  '/digital-marketing/performance-marketing',
  '/digital-marketing/video-production',
  '/digital-marketing/photography-graphics',
  '/software-development',
  '/software-development/crm-development',
  '/software-development/mobile-apps',
  '/software-development/erp',
  '/about', 
  '/contact', 
  '/services',
  '/blog',
  '/work'
];

const BASE = process.env.CHECK_URL || 'http://localhost:3000'; 

async function run() {
  let failures = [];
  for (const route of routes) {
    try {
      const res = await fetch(BASE + route);
      const html = await res.text();
      const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
      const textContent = bodyMatch ? bodyMatch[1].replace(/<[^>]+>/g, '').trim() : '';
      if (res.status !== 200 || textContent.length < 200) {
        failures.push(`${route} — status ${res.status}, body text length ${textContent.length}`);
      }
    } catch (e) {
      failures.push(`${route} — Error fetching: ${e.message}`);
    }
  }

  if (failures.length) {
    console.error('SSR content check failed:\n' + failures.join('\n'));
    process.exit(1);
  }
  console.log(`SSR content check passed for ${routes.length} routes.`);
}

run();
