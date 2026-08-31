const fs = require('fs');

function replaceInFile(filePath, replacements) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  for (const { search, replace } of replacements) {
    if (content.includes(search)) {
      content = content.replace(new RegExp(search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), replace);
      changed = true;
    }
  }
  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

// Home.tsx
replaceInFile('src/pages/Home.tsx', [
  {
    search: '<span aria-hidden="true">{t(\'capabilities.learnMore\')}</span><span className="sr-only"> about {t(\'capabilities.s1.title\', {defaultValue: \'Digital Marketing Services\'})}</span>',
    replace: 'Learn More'
  },
  {
    search: '<Link to="/digital-marketing" className="text-sm font-black uppercase tracking-widest flex items-center gap-2 hover:text-olive-500 transition-colors w-max mt-auto">',
    replace: '<Link to="/digital-marketing" aria-label="Learn more about Digital Marketing Services" className="text-sm font-black uppercase tracking-widest flex items-center gap-2 hover:text-olive-500 transition-colors w-max mt-auto">'
  }
]);

// Footer.tsx
replaceInFile('src/components/layout/Footer.tsx', [
  {
    search: 'className="max-w-7xl mx-auto px-6 lg:px-8 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brand-white-40"',
    replace: 'className="max-w-7xl mx-auto px-6 lg:px-8 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brand-white-70"'
  },
  {
    search: '<p>© {new Date().getFullYear()} Mints Global. All rights reserved.</p>',
    replace: '<p suppressHydrationWarning>© {new Date().getFullYear()} Mints Global. All rights reserved.</p>'
  }
]);

// Services.tsx
replaceInFile('src/pages/Services.tsx', [
  {
    search: '<span aria-hidden="true">Learn More</span>\n                   <span className="sr-only"> about {grp.title}</span>',
    replace: 'Learn More'
  }
]);

// DigitalMarketing.tsx
replaceInFile('src/pages/DigitalMarketing.tsx', [
  {
    search: '<span aria-hidden="true">Learn More</span>\n                  <span className="sr-only"> about {srv.name}</span>',
    replace: 'Learn More'
  }
]);

// SoftwareDevelopment.tsx
replaceInFile('src/pages/SoftwareDevelopment.tsx', [
  {
    search: '<span aria-hidden="true">Learn More</span>\n                  <span className="sr-only"> about {srv.name}</span>',
    replace: 'Learn More'
  }
]);

// CyberSecurity.tsx
replaceInFile('src/pages/CyberSecurity.tsx', [
  {
    search: '<span aria-hidden="true">Learn More</span>\n                  <span className="sr-only"> about {srv.name}</span>',
    replace: 'Learn More'
  },
  {
    search: '<span aria-hidden="true">Learn More</span>\n               <span className="sr-only"> about {pkg.title}</span>',
    replace: 'Learn More'
  }
]);

