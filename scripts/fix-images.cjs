const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir(path.join(__dirname, '../src'), (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace src="https://www.mintsglobal.ae/images/...
    // Note: We only want to replace it for actual src="" or fallbackSrc="", 
    // NOT for ogImage="", twitterImage="", or JSON-LD which require absolute URLs.
    let newContent = content
      .replace(/src="https:\/\/www\.mintsglobal\.ae\/images\//g, 'src="/images/')
      .replace(/fallbackSrc="https:\/\/www\.mintsglobal\.ae\/images\//g, 'fallbackSrc="/images/');
      
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Updated images in ${filePath}`);
    }
  }
});
