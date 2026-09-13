const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const srcPath = 'C:/Users/anand/.gemini/antigravity-ide/brain/e02036d4-56da-4679-a3d3-7f1f02107b28/.user_uploaded/media_1789307663485.jpg';
const publicImagesDir = path.resolve(__dirname, '../public/images');
const publicDir = path.resolve(__dirname, '../public');

async function convert() {
  const metadata = await sharp(srcPath).metadata();
  console.log('Source image dimensions:', metadata.width, 'x', metadata.height);

  // Backup original
  fs.copyFileSync(srcPath, path.join(publicImagesDir, 'hero-astronaut-original.jpg'));

  // Main webp (1024 or full original)
  const mainTarget = path.join(publicImagesDir, 'hero-digital-agency-dubai.webp');
  await sharp(srcPath)
    .webp({ quality: 80, effort: 6 })
    .toFile(mainTarget);

  // Fallback hero.webp
  fs.copyFileSync(mainTarget, path.join(publicDir, 'hero.webp'));

  // Responsive sizes: 400, 800, 1200, 1920
  const sizes = [400, 800, 1200, 1920];
  for (const size of sizes) {
    const targetFile = path.join(publicImagesDir, `hero-digital-agency-dubai-${size}w.webp`);
    await sharp(srcPath)
      .resize({ width: size, withoutEnlargement: false })
      .webp({ quality: 80, effort: 6 })
      .toFile(targetFile);

    const stat = fs.statSync(targetFile);
    console.log(`Created hero-digital-agency-dubai-${size}w.webp: ${(stat.size / 1024).toFixed(1)} KB`);

    if (size === 400 || size === 800) {
      fs.copyFileSync(targetFile, path.join(publicDir, `hero-${size}w.webp`));
    }
  }

  const mainStat = fs.statSync(mainTarget);
  console.log(`Created main webp: ${(mainStat.size / 1024).toFixed(1)} KB`);
}

convert().catch(err => {
  console.error('Error optimizing hero image:', err);
  process.exit(1);
});
