const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/**/*.tsx');
files.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  let orig = c;
  
  // Replace fallbackSrc
  c = c.replace(/fallbackSrc=["'](.*?(?:\.png|\.jpg|\.jpeg))["']/gi, (match, p1) => {
    return `fallbackSrc="${p1.replace(/\.(png|jpg|jpeg)$/i, '.webp')}"`;
  });

  // Replace src attribute for images
  c = c.replace(/src=["'](.*?(?:\.png|\.jpg|\.jpeg))["']/gi, (match, p1) => {
    // avoid OG images if somehow they ended up in a src tag, though usually they don't.
    if (p1.includes('og-') || p1.includes('twitter-') || p1.includes('favicon')) return match;
    return `src="${p1.replace(/\.(png|jpg|jpeg)$/i, '.webp')}"`;
  });

  if(c !== orig) {
    fs.writeFileSync(f, c, 'utf8');
    console.log('Updated', f);
  }
});
