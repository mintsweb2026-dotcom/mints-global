const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const srcPath = 'C:/Users/anand/.gemini/antigravity-ide/brain/1154b6b6-7497-4a16-8e7a-6c5eec4d912b/hero_astronaut_4k_1789570221947.jpg';
const publicImagesDir = path.resolve(__dirname, '../public/images');
const publicDir = path.resolve(__dirname, '../public');

async function processHeroImages() {
  const metadata = await sharp(srcPath).metadata();
  console.log('Source image dimensions:', metadata.width, 'x', metadata.height);

  // 1. Save 4K source archive
  const savedSource = path.join(publicImagesDir, 'hero-astronaut-4k-source.jpg');
  fs.copyFileSync(srcPath, savedSource);
  console.log('Saved 4K source archive to:', savedSource);

  // 2. Export main 3840x2160 WebP at quality 84 (cwebp -q 82-85 equivalent)
  const mainTarget = path.join(publicImagesDir, 'hero-digital-agency-dubai.webp');
  await sharp(srcPath)
    .resize(3840, 2160, {
      fit: 'cover',
      kernel: sharp.kernel.lanczos3
    })
    .sharpen({ sigma: 0.8, m1: 0.5, m2: 1.5 })
    .webp({ quality: 84, effort: 6, smartSubsample: false })
    .toFile(mainTarget);

  const mainStat = fs.statSync(mainTarget);
  console.log('Main hero-digital-agency-dubai.webp size: ' + (mainStat.size / 1024).toFixed(1) + ' KB');

  // Also copy to public/hero.webp
  fs.copyFileSync(mainTarget, path.join(publicDir, 'hero.webp'));

  // 3. Responsive sizes: 400, 800, 1200, 1920, 2560, 3840
  const sizes = [
    { width: 400, height: 225 },
    { width: 800, height: 450 },
    { width: 1200, height: 675 },
    { width: 1920, height: 1080 },
    { width: 2560, height: 1440 },
    { width: 3840, height: 2160 }
  ];

  for (const s of sizes) {
    const targetFile = path.join(publicImagesDir, 'hero-digital-agency-dubai-' + s.width + 'w.webp');
    await sharp(srcPath)
      .resize(s.width, s.height, {
        fit: 'cover',
        kernel: sharp.kernel.lanczos3
      })
      .sharpen({ sigma: 0.7, m1: 0.5, m2: 1.5 })
      .webp({ quality: 84, effort: 6, smartSubsample: false })
      .toFile(targetFile);

    const stat = fs.statSync(targetFile);
    console.log('Generated ' + path.basename(targetFile) + ': ' + (stat.size / 1024).toFixed(1) + ' KB');

    if (s.width === 400 || s.width === 800) {
      fs.copyFileSync(targetFile, path.join(publicDir, 'hero-' + s.width + 'w.webp'));
    }
  }

  // 4. Update 2K enhanced version
  fs.copyFileSync(
    path.join(publicImagesDir, 'hero-digital-agency-dubai-2560w.webp'),
    path.join(publicImagesDir, 'hero-enhanced-2k.webp')
  );

  // Clean up any test images if present
  ['test-original-3840.webp', 'test-rerender-3840.webp'].forEach(file => {
    const f = path.join(publicImagesDir, file);
    if (fs.existsSync(f)) fs.unlinkSync(f);
  });

  console.log('All hero image exports successfully completed!');
}

processHeroImages().catch(err => {
  console.error('Error processing hero images:', err);
  process.exit(1);
});
