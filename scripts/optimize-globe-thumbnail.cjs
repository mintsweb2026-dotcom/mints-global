const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const src = 'C:/Users/anand/.gemini/antigravity-ide/brain/e02036d4-56da-4679-a3d3-7f1f02107b28/.user_uploaded/media_1789308652834.png';
const destDir = path.resolve(__dirname, '../public/images');

async function processGlobeImage() {
  // Crop Y: 180 to 830 -> height = 650 (globe is from Y: 230 to 785)
  // Target 16:10 width for height 650 = 650 * 1.6 = 1040
  // Source width is 819 -> horizontal pad needed = 1040 - 819 = 221 (110 left, 111 right)
  const croppedAndPadded = sharp(src)
    .extract({ left: 0, top: 180, width: 819, height: 650 })
    .extend({
      top: 0,
      bottom: 0,
      left: 110,
      right: 111,
      background: { r: 0, g: 0, b: 0, alpha: 1 }
    });

  const baseName = 'business-software-solutions-globe';
  const mainPath = path.join(destDir, `${baseName}.webp`);

  await croppedAndPadded
    .clone()
    .webp({ quality: 85, effort: 6 })
    .toFile(mainPath);
  console.log('Main 16:10 webp:', fs.statSync(mainPath).size, 'bytes');

  const sizes = [400, 800, 1200, 1920];
  for (const size of sizes) {
    const targetFile = path.join(destDir, `${baseName}-${size}w.webp`);
    await croppedAndPadded
      .clone()
      .resize({ width: size, withoutEnlargement: false })
      .webp({ quality: 85, effort: 6 })
      .toFile(targetFile);

    const stat = fs.statSync(targetFile);
    console.log(`Size ${size}w: ${stat.size} bytes (${(stat.size / 1024).toFixed(1)} KB)`);
  }
}

processGlobeImage().catch(err => {
  console.error(err);
  process.exit(1);
});
