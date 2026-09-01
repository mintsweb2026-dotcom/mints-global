import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distClientPath = path.resolve(__dirname, '../dist/client');

function checkFile(filePath, route) {
  if (!fs.existsSync(filePath)) {
    return { route, ok: false, error: 'File missing' };
  }

  const html = fs.readFileSync(filePath, 'utf8');

  // Body text length
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  const bodyText = bodyMatch ? bodyMatch[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim() : '';

  // Title
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  const title = titleMatch ? titleMatch[1] : 'NONE';

  // Description
  const descMatch = html.match(/<meta[^>]*name="description"[^>]*content="([^"]+)"/i) || html.match(/<meta[^>]*content="([^"]+)"[^>]*name="description"/i);
  const description = descMatch ? descMatch[1] : 'NONE';

  // H1 count
  const h1Matches = html.match(/<h1[\s>]/gi) || [];

  // Canonical
  const canonicalMatch = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/i);

  // Schema JSON-LD
  const hasSchema = html.includes('application/ld+json');

  return {
    route,
    ok: bodyText.length > 500 && title !== 'NONE' && h1Matches.length === 1,
    bodyTextLength: bodyText.length,
    title,
    descriptionLength: description.length,
    h1Count: h1Matches.length,
    canonical: canonicalMatch ? canonicalMatch[1] : 'NONE',
    hasSchema
  };
}

console.log('========================================================================');
console.log('               VERIFYING PRE-RENDERED STATIC HTML FILES                 ');
console.log('========================================================================');

const sampleRoutes = [
  '/',
  '/cyber-security',
  '/digital-marketing',
  '/software-development',
  '/services',
  '/about',
  '/contact',
  '/blog',
  '/blog/iso-27001-certification-in-dubai',
  '/blog/ai-powered-vapt-uae',
  '/cyber-security/offensive-security',
  '/software-development/web-apps'
];

let totalPassed = 0;

sampleRoutes.forEach(r => {
  const filePath = r === '/'
    ? path.join(distClientPath, 'index.html')
    : path.join(distClientPath, r.slice(1), 'index.html');

  const res = checkFile(filePath, r);
  if (res.ok) totalPassed++;

  console.log(`\nROUTE: ${r}`);
  console.log(`  - Status: ${res.ok ? '✅ PASSED (Static Content Present)' : '❌ FAILED'}`);
  console.log(`  - Body Text Length: ${res.bodyTextLength} chars ${res.bodyTextLength > 500 ? '✅' : '⚠️ Too short'}`);
  console.log(`  - Page Title: "${res.title}"`);
  console.log(`  - Meta Description Length: ${res.descriptionLength} chars`);
  console.log(`  - H1 Count: ${res.h1Count} ${res.h1Count === 1 ? '✅' : '⚠️'}`);
  console.log(`  - Canonical URL: ${res.canonical}`);
  console.log(`  - Structured Data (JSON-LD): ${res.hasSchema ? '✅ Present' : 'ℹ️ None'}`);
});

console.log('\n========================================================================');
console.log(`SUMMARY: ${totalPassed}/${sampleRoutes.length} key routes verified 100% crawlable with full static HTML!`);
console.log('========================================================================');
