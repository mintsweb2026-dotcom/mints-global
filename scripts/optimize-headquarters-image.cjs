const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const src = 'C:/Users/anand/.gemini/antigravity-ide/brain/e02036d4-56da-4679-a3d3-7f1f02107b28/.user_uploaded/media_1789309784325.jpg';
const destDir = path.resolve(__dirname, '../public/images');

async function processImage() {
  const metadata = await sharp(src).metadata();
  console.log('Source:', metadata.width, 'x', metadata.height);

  // Backup original
  fs.copyFileSync(src, path.join(destDir, 'dubai-architecture-original.jpg'));

  // 16:10 crop (819 x 512) centered on architectural crown
  const baseCrop = sharp(src).extract({
    left: 0,
    top: 50,
    width: 819,
    height: 512
  });

  const targets = [
    'mints-global-team-dubai',
    'dubai-headquarters-architecture'
  ];

  for (const baseName of targets) {
    const mainPath = path.join(destDir, `${baseName}.webp`);
    await baseCrop
      .clone()
      .webp({ quality: 85, effort: 6 })
      .toFile(mainPath);
    console.log(`Main webp (${baseName}):`, fs.statSync(mainPath).size, 'bytes');

    const sizes = [400, 800, 1200, 1920];
    for (const size of sizes) {
      const targetFile = path.join(destDir, `${baseName}-${size}w.webp`);
      await baseCrop
        .clone()
        .resize({ width: size, withoutEnlargement: false })
        .webp({ quality: 85, effort: 6 })
        .toFile(targetFile);

      const stat = fs.statSync(targetFile);
      console.log(`Size ${size}w (${baseName}): ${stat.size} bytes (${(stat.size / 1024).toFixed(1)} KB)`);
    }
  }
}

processImage().catch(err => {
  console.error(err);
  process.exit(1);
});
