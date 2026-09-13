const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const src = 'C:/Users/anand/.gemini/antigravity-ide/brain/e02036d4-56da-4679-a3d3-7f1f02107b28/.user_uploaded/media_1789308293584.jpg';
const destDir = path.resolve(__dirname, '../public/images');

async function processImage() {
  const metadata = await sharp(src).metadata();
  console.log('Source:', metadata.width, 'x', metadata.height);

  // Backup original
  fs.copyFileSync(src, path.join(destDir, 'data-driven-marketing-dubai-original.jpg'));

  const baseName = 'data-driven-marketing-dubai';
  const mainPath = path.join(destDir, `${baseName}.webp`);
  
  await sharp(src)
    .webp({ quality: 82, effort: 6 })
    .toFile(mainPath);
  console.log('Main:', fs.statSync(mainPath).size, 'bytes');

  const sizes = [400, 800, 1200, 1920];
  for (const size of sizes) {
    const p = path.join(destDir, `${baseName}-${size}w.webp`);
    await sharp(src)
      .resize({ width: size, withoutEnlargement: false })
      .webp({ quality: 82, effort: 6 })
      .toFile(p);
    console.log(`Size ${size}w:`, fs.statSync(p).size, 'bytes');
  }
}

processImage().catch(err => {
  console.error(err);
  process.exit(1);
});
