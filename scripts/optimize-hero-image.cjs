const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const srcPath = 'C:/Users/anand/.gemini/antigravity-ide/brain/0ea5546f-1a20-4dfc-9640-567891030d7b/.user_uploaded/media_1789566258755.jpg';
const publicImagesDir = path.resolve(__dirname, '../public/images');
const publicDir = path.resolve(__dirname, '../public');

async function convert() {
  const metadata = await sharp(srcPath).metadata();
  console.log('Source image dimensions:', metadata.width, 'x', metadata.height);

  // Backup original
  fs.copyFileSync(srcPath, path.join(publicImagesDir, 'hero-astronaut-original.jpg'));

  // Main webp (original resolution) with 4:4:4 full chroma preservation and maximum fidelity (quality 95)
  const mainTarget = path.join(publicImagesDir, 'hero-digital-agency-dubai.webp');
  await sharp(srcPath)
    .webp({ quality: 95, effort: 6, smartSubsample: false })
    .toFile(mainTarget);

  // Fallback hero.webp in public
  fs.copyFileSync(mainTarget, path.join(publicDir, 'hero.webp'));

  // Responsive sizes: 400, 800, 1200, 1920, 2560
  const sizes = [400, 800, 1200, 1920, 2560];
  for (const size of sizes) {
    const targetFile = path.join(publicImagesDir, `hero-digital-agency-dubai-${size}w.webp`);
    await sharp(srcPath)
      .resize({ width: size, withoutEnlargement: false, kernel: sharp.kernel.lanczos3 })
      .sharpen({ sigma: 0.8, m1: 0.5, m2: 1.5 })
      .webp({ quality: 95, effort: 6, smartSubsample: false })
      .toFile(targetFile);

    const stat = fs.statSync(targetFile);
    console.log(`Created hero-digital-agency-dubai-${size}w.webp: ${(stat.size / 1024).toFixed(1)} KB`);

    if (size === 400 || size === 800) {
      fs.copyFileSync(targetFile, path.join(publicDir, `hero-${size}w.webp`));
    }
  }

  // Also create hero-enhanced-2k.webp for high-res Retina displays (2560px)
  const enhancedTarget = path.join(publicImagesDir, 'hero-enhanced-2k.webp');
  fs.copyFileSync(path.join(publicImagesDir, 'hero-digital-agency-dubai-2560w.webp'), enhancedTarget);

  const mainStat = fs.statSync(mainTarget);
  console.log(`Created main webp: ${(mainStat.size / 1024).toFixed(1)} KB`);
}

convert().catch(err => {
  console.error('Error optimizing hero image:', err);
  process.exit(1);
});
