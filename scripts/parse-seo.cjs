const fs = require('fs');
const data = JSON.parse(fs.readFileSync('lighthouse-report.json', 'utf8'));

console.log('--- SEO AUDITS ---');
Object.values(data.audits)
  .filter(a => data.categories['seo'].auditRefs.find(r => r.id === a.id))
  .forEach(a => {
    console.log(`[${a.score === null ? 'N/A' : Math.round(a.score * 100)}] ${a.title}`);
  });
