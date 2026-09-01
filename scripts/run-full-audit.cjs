const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, '../src/pages');
const pages = [];

function walk(dir) {
  fs.readdirSync(dir).forEach(f => {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) walk(full);
    else if (f.endsWith('.tsx') && !f.includes('NotFound') && !f.includes('AdminPanel')) pages.push(full);
  });
}

walk(pagesDir);

const results = [];

pages.forEach(filePath => {
  const relPath = path.relative(pagesDir, filePath);
  const content = fs.readFileSync(filePath, 'utf8');

  const hasSEO = content.includes('<SEO');
  const titleMatch = content.match(/title="([^"]+)"/);
  const descMatch = content.match(/description="([^"]+)"/);
  const h1Matches = content.match(/<h1[\s>]/g) || [];
  const jsonLdMatch = content.includes('JsonLd') || content.includes('schema');
  const imagesWithoutAlt = (content.match(/<img\s+((?!alt=)[^>])*>/g) || []).length;
  const safeImagesWithoutAlt = (content.match(/<SafeImage\s+((?!alt=)[^>])*>/g) || []).length;

  results.push({
    file: relPath,
    hasSEO,
    title: titleMatch ? titleMatch[1] : (content.includes('meta.title') ? 'Dynamic (meta.title)' : 'MISSING'),
    desc: descMatch ? descMatch[1] : (content.includes('meta.description') ? 'Dynamic (meta.description)' : 'MISSING'),
    h1Count: h1Matches.length,
    hasJsonLd: jsonLdMatch,
    missingAltCount: imagesWithoutAlt + safeImagesWithoutAlt
  });
});

console.log('====================================================');
console.log('              MINTS GLOBAL SEO AUDIT SUMMARY        ');
console.log('====================================================');
console.log(`Total Pages Scanned: ${results.length}\n`);

let passedCount = 0;
results.forEach(r => {
  const isOk = r.hasSEO && r.h1Count === 1 && r.missingAltCount === 0;
  if (isOk) passedCount++;
  console.log(`PAGE: ${r.file}`);
  console.log(`  - SEO Component: ${r.hasSEO ? '✅ Present' : '❌ Missing'}`);
  console.log(`  - Title: "${r.title}"`);
  console.log(`  - H1 Tag Count: ${r.h1Count} ${r.h1Count === 1 ? '✅' : (r.h1Count === 0 ? '⚠️ None' : '⚠️ Multiple')}`);
  console.log(`  - Structured Data (JSON-LD): ${r.hasJsonLd ? '✅ Present' : 'ℹ️ None'}`);
  console.log(`  - Missing Image Alt Attributes: ${r.missingAltCount === 0 ? '✅ 0' : '⚠️ ' + r.missingAltCount}`);
  console.log('----------------------------------------------------');
});

console.log(`\nOVERALL COMPLIANCE SCORE: ${Math.round((passedCount / results.length) * 100)}% (${passedCount}/${results.length} pages 100% compliant)`);
