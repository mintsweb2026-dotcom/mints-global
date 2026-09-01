const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const imagesDir = path.join(publicDir, 'images');

// 1. Create missing images by copying existing ones
const copyMap = {
  'images/branding-hero.webp': 'hero.webp',
  'images/hero-cyber-security.webp': 'zero-trust-security.webp',
  'images/hero-digital-agency-dubai.webp': 'hero.webp',
  'images/mints-global-team-dubai.webp': 'crm-blog-image.webp',
  'assets/images/performance-marketing-agency-dubai.webp': 'hero.webp',
  'images/seo-services-og.webp': 'hero.webp',
  'assets/images/social-media-marketing-agency-dubai.webp': 'hero.webp',
  'images/software-development-company-dubai.webp': 'images/web-application-development-services-dubai.webp'
};

for (const [missing, source] of Object.entries(copyMap)) {
  const missingPath = path.join(publicDir, missing);
  const sourcePath = path.join(publicDir, source);
  
  if (!fs.existsSync(missingPath)) {
    // ensure dir exists
    const dir = path.dirname(missingPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    
    if (fs.existsSync(sourcePath)) {
      fs.copyFileSync(sourcePath, missingPath);
      console.log(`Copied ${source} to ${missing}`);
    } else {
      console.log(`Source ${source} not found!`);
    }
  }
}

// 2. Generate missing -400w, -800w, -1200w, -1920w variants for SafeImage
const sizes = [400, 800, 1200, 1920];
const allWebpFiles = [];

function walkDir(dir) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    if (fs.statSync(dirPath).isDirectory()) walkDir(dirPath);
    else if (f.endsWith('.webp') && !f.match(/-\d+w\.webp$/)) allWebpFiles.push(dirPath);
  });
}

walkDir(imagesDir);

allWebpFiles.forEach(file => {
  const ext = path.extname(file);
  const base = file.substring(0, file.length - ext.length);
  
  sizes.forEach(size => {
    const variantPath = `${base}-${size}w.webp`;
    if (!fs.existsSync(variantPath)) {
      fs.copyFileSync(file, variantPath);
      console.log(`Created variant ${path.basename(variantPath)}`);
    }
  });
});
