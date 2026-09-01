const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const brainDir = 'C:\\Users\\anand\\.gemini\\antigravity-ide\\brain\\e9cfd3dd-9093-4a60-bb69-e8a3a1a84dfb';
const publicDir = path.join(__dirname, '../public');

const mapping = [
  {
    source: 'mints_global_team_dubai_1788261716877.jpg',
    targets: ['images/mints-global-team-dubai.webp']
  },
  {
    source: 'seo_services_og_1788261734936.jpg',
    targets: ['images/seo-services-og.webp']
  },
  {
    source: 'performance_marketing_agency_dubai_1788261752452.jpg',
    targets: ['assets/images/performance-marketing-agency-dubai.webp']
  },
  {
    source: 'social_media_marketing_agency_dubai_1788261773127.jpg',
    targets: ['assets/images/social-media-marketing-agency-dubai.webp']
  },
  {
    source: 'branding_hero_1788261794841.jpg',
    targets: ['images/branding-hero.webp']
  },
  {
    source: 'hero_digital_agency_dubai_1788261812733.jpg',
    targets: ['images/hero-digital-agency-dubai.webp']
  }
];

const sizes = [400, 800, 1200, 1920];

async function processAll() {
  for (const item of mapping) {
    const srcPath = path.join(brainDir, item.source);
    if (!fs.existsSync(srcPath)) {
      console.error(`Source missing: ${srcPath}`);
      continue;
    }

    for (const relativeTarget of item.targets) {
      const fullTarget = path.join(publicDir, relativeTarget);
      const targetDir = path.dirname(fullTarget);
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }

      // Convert main image to webp
      await sharp(srcPath)
        .webp({ quality: 85 })
        .toFile(fullTarget);
      console.log(`Saved main webp: ${relativeTarget}`);

      // Generate resized variants
      const ext = path.extname(fullTarget);
      const baseNoExt = fullTarget.slice(0, -ext.length);

      for (const size of sizes) {
        const variantPath = `${baseNoExt}-${size}w.webp`;
        await sharp(srcPath)
          .resize(size, null, { fit: 'inside', withoutEnlargement: false })
          .webp({ quality: 82 })
          .toFile(variantPath);
        console.log(`Generated variant: ${path.basename(variantPath)}`);
      }
    }
  }

  // Also optimize any other images in public/images that don't have properly resized variants
  const imagesDir = path.join(publicDir, 'images');
  const files = fs.readdirSync(imagesDir);
  for (const file of files) {
    if (file.endsWith('.webp') && !file.match(/-\d+w\.webp$/)) {
      const fullPath = path.join(imagesDir, file);
      const baseNoExt = fullPath.slice(0, -5);
      for (const size of sizes) {
        const variantPath = `${baseNoExt}-${size}w.webp`;
        if (!fs.existsSync(variantPath)) {
          await sharp(fullPath)
            .resize(size, null, { fit: 'inside', withoutEnlargement: false })
            .webp({ quality: 82 })
            .toFile(variantPath);
          console.log(`Created missing variant: ${path.basename(variantPath)}`);
        }
      }
    }
  }

  console.log('All image processing complete!');
}

processAll().catch(err => {
  console.error('Error processing images:', err);
  process.exit(1);
});
