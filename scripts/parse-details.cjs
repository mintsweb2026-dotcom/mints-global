const fs = require('fs');
const data = JSON.parse(fs.readFileSync('lighthouse-report.json', 'utf8'));

console.log('--- SCORE OVERVIEW ---');
Object.keys(data.categories).forEach(k => {
  console.log(`${data.categories[k].title}: ${Math.round(data.categories[k].score * 100)}`);
});

console.log('\n--- TOP FAILED AUDITS ---');
Object.values(data.audits)
  .filter(a => a.score !== null && a.score < 0.9 && a.scoreDisplayMode !== 'manual' && a.scoreDisplayMode !== 'notApplicable' && a.scoreDisplayMode !== 'informative')
  .sort((a, b) => a.score - b.score)
  .slice(0, 15)
  .forEach(a => {
    console.log(`[${Math.round(a.score * 100)}] ${a.title}`);
    if (a.displayValue) console.log(`    -> ${a.displayValue}`);
  });
