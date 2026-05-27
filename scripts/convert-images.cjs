const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const https = require('https');

async function processImage(inputPath, outputPath, isUrl = false) {
  try {
    if (isUrl) {
      console.log(`Downloading ${inputPath}...`);
      const tempPath = path.join(__dirname, '../public/temp.jpg');
      await new Promise((resolve, reject) => {
        const file = fs.createWriteStream(tempPath);
        https.get(inputPath, response => {
          response.pipe(file);
          file.on('finish', () => {
            file.close(resolve);
          });
        }).on('error', err => {
          fs.unlink(tempPath, () => {});
          reject(err);
        });
      });
      
      console.log(`Converting to ${outputPath}...`);
      await sharp(tempPath).webp({ quality: 80 }).toFile(path.join(__dirname, '..', outputPath));
      fs.unlinkSync(tempPath);
    } else {
      console.log(`Converting ${inputPath} to ${outputPath}...`);
      await sharp(path.join(__dirname, '..', inputPath)).webp({ quality: 80 }).toFile(path.join(__dirname, '..', outputPath));
    }
    console.log(`Success: ${outputPath}`);
  } catch (err) {
    console.error(`Error processing ${inputPath}:`, err);
  }
}

async function run() {
  await processImage('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop', 'public/hero.webp', true);
  await processImage('public/Optimizing Next.js Applications for Core Web Vitals.png', 'public/optimizing-nextjs.webp');
  await processImage('public/The Future of Zero-Trust Security in Finance.png', 'public/zero-trust-security.webp');
  await processImage('public/crm-blog-image.jpg', 'public/crm-blog-image.webp');
}

run();
