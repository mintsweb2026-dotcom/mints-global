const fs = require('fs');
['seo-audit.json', 'lighthouse-report.json', 'lighthouse-live.json', 'pa11y-report.json'].forEach(file => {
  if (fs.existsSync(file)) {
    try {
      const data = JSON.parse(fs.readFileSync(file, 'utf8'));
      console.log(`\n--- ${file} ---`);
      if (data.categories) {
        Object.keys(data.categories).forEach(k => {
          console.log(`${data.categories[k].title}: ${Math.round(data.categories[k].score * 100)}`);
        });
      } else if (file === 'pa11y-report.json') {
          console.log(`Issues found: ${data.length || data.issues?.length || 0}`);
      } else {
        console.log('No categories found.');
      }
    } catch (e) {
      console.log(`Error parsing ${file}: ${e.message}`);
    }
  }
});
