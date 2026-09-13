const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const src = 'C:/Users/anand/.gemini/antigravity-ide/brain/e02036d4-56da-4679-a3d3-7f1f02107b28/.user_uploaded/media_1789309058003.jpg';
const destDir = path.resolve(__dirname, '../public/images');

async function processCyberImage() {
  const metadata = await sharp(src).metadata();
  console.log('Source:', metadata.width, 'x', metadata.height);

  // Backup original
  fs.copyFileSync(src, path.join(destDir, 'cybersecurity-threat-intelligence-original.jpg'));

  // 16:10 crop (1024 x 640) centered on holographic display
  const baseCrop = sharp(src).extract({
    left: 0,
    top: 90,
    width: 1024,
    height: 640
  });

  const baseName = 'cybersecurity-threat-intelligence-dubai';
  const mainPath = path.join(destDir, `${baseName}.webp`);

  await baseCrop
    .clone()
    .webp({ quality: 85, effort: 6 })
    .toFile(mainPath);
  console.log('Main webp:', fs.statSync(mainPath).size, 'bytes');

  const sizes = [400, 800, 1200, 1920];
  for (const size of sizes) {
    const targetFile = path.join(destDir, `${baseName}-${size}w.webp`);
    await baseCrop
      .clone()
      .resize({ width: size, withoutEnlargement: false })
      .webp({ quality: 85, effort: 6 })
      .toFile(targetFile);

    const stat = fs.statSync(targetFile);
    console.log(`Size ${size}w: ${stat.size} bytes (${(stat.size / 1024).toFixed(1)} KB)`);
  }
}

processCyberImage().catch(err => {
  console.error(err);
  process.exit(1);
});
