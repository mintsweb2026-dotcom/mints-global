const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../src');
const publicDir = path.join(__dirname, '../public');

let brokenImages = [];

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

const imageRegex = /(?:<img|<SafeImage)[^>]*?src=["'](.*?)["']/g;
const fallbackRegex = /(?:<img|<SafeImage)[^>]*?fallbackSrc=["'](.*?)["']/g;

walkDir(srcDir, (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find all src
    let match;
    while ((match = imageRegex.exec(content)) !== null) {
      const src = match[1];
      if (src.startsWith('http') || src.startsWith('data:')) continue;
      
      const fullPath = path.join(publicDir, src);
      if (!fs.existsSync(fullPath)) {
        brokenImages.push({ file: filePath, type: 'src missing', src });
      } else if (content.substring(match.index, match.index + 12).includes('SafeImage') && src.includes('/images/')) {
        // Check if -400w variant exists for SafeImage
        const ext = path.extname(src);
        const basePath = src.substring(0, src.length - ext.length);
        const variantPath = path.join(publicDir, `${basePath}-400w.webp`);
        if (!fs.existsSync(variantPath)) {
           brokenImages.push({ file: filePath, type: 'SafeImage variant missing', src, variant: `${basePath}-400w.webp` });
        }
      }
    }

    // Find all fallbackSrc
    while ((match = fallbackRegex.exec(content)) !== null) {
      const src = match[1];
      if (src.startsWith('http') || src.startsWith('data:')) continue;
      
      const fullPath = path.join(publicDir, src);
      if (!fs.existsSync(fullPath)) {
        brokenImages.push({ file: filePath, type: 'fallbackSrc missing', src });
      }
    }
  }
});

if (brokenImages.length > 0) {
  console.log("Broken images found:");
  brokenImages.forEach(b => {
    console.log(`- [${b.type}] in ${path.relative(srcDir, b.file)}: ${b.src} ${b.variant ? '(Missing: ' + b.variant + ')' : ''}`);
  });
} else {
  console.log("No broken images found in source files!");
}
