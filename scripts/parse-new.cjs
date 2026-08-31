const fs = require('fs');
const data = JSON.parse(fs.readFileSync('lighthouse-new.json', 'utf8'));

console.log('--- SCORE OVERVIEW ---');
Object.keys(data.categories).forEach(k => {
  console.log(`${data.categories[k].title}: ${Math.round(data.categories[k].score * 100)}`);
});
