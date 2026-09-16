const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const srcPath = 'C:/Users/anand/.gemini/antigravity-ide/brain/0ea5546f-1a20-4dfc-9640-567891030d7b/.user_uploaded/media_1789563343173.jpg';
const publicImagesDir = path.resolve(__dirname, '../public/images');
const publicDir = path.resolve(__dirname, '../public');

async function convert() {
  const metadata = await sharp(srcPath).metadata();
  console.log('Source image dimensions:', metadata.width, 'x', metadata.height);

  // Backup original
  fs.copyFileSync(srcPath, path.join(publicImagesDir, 'hero-astronaut-original.jpg'));

  // Main webp (original resolution)
  const mainTarget = path.join(publicImagesDir, 'hero-digital-agency-dubai.webp');
  await sharp(srcPath)
    .webp({ quality: 88, effort: 6 })
    .toFile(mainTarget);

  // Fallback hero.webp in public
  fs.copyFileSync(mainTarget, path.join(publicDir, 'hero.webp'));

  // Responsive sizes: 400, 800, 1200, 1920, 2560
  const sizes = [400, 800, 1200, 1920];
  for (const size of sizes) {
    const targetFile = path.join(publicImagesDir, `hero-digital-agency-dubai-${size}w.webp`);
    await sharp(srcPath)
      .resize({ width: size, withoutEnlargement: false, kernel: sharp.kernel.lanczos3 })
      .webp({ quality: 88, effort: 6 })
      .toFile(targetFile);

    const stat = fs.statSync(targetFile);
    console.log(`Created hero-digital-agency-dubai-${size}w.webp: ${(stat.size / 1024).toFixed(1)} KB`);

    if (size === 400 || size === 800) {
      fs.copyFileSync(targetFile, path.join(publicDir, `hero-${size}w.webp`));
    }
  }

  // Also create hero-enhanced-2k.webp for high-res displays
  const enhancedTarget = path.join(publicImagesDir, 'hero-enhanced-2k.webp');
  await sharp(srcPath)
    .resize({ width: 2560, withoutEnlargement: false, kernel: sharp.kernel.lanczos3 })
    .webp({ quality: 90, effort: 6 })
    .toFile(enhancedTarget);

  const mainStat = fs.statSync(mainTarget);
  console.log(`Created main webp: ${(mainStat.size / 1024).toFixed(1)} KB`);
}

convert().catch(err => {
  console.error('Error optimizing hero image:', err);
  process.exit(1);
});
