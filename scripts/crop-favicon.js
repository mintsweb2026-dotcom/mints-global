import sharp from 'sharp';
import path from 'path';

const inputPath = 'C:\\Users\\anand\\.gemini\\antigravity-ide\\brain\\15216451-df8c-4a9e-8dc3-489f94a12880\\media__1786353417167.png';
const outputPath = 'public/favicon.png';

async function processFavicon() {
  try {
    // Take the tightly cropped transparent image
    const image = sharp(inputPath);
    
    // We want to flatten it onto a cream circle or just a square cream background.
    // Let's create a 512x512 cream background
    const background = sharp({
      create: {
        width: 512,
        height: 512,
        channels: 4,
        background: '#f4f6ec' // light cream/greenish background matching their brand
      }
    });

    // Resize the logo to fit nicely within the 512x512, leaving some padding (e.g. 400x400)
    const logo = await image.resize(400, 400, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }).toBuffer();

    // Composite the logo onto the background
    await background
      .composite([{ input: logo, gravity: 'center' }])
      .png()
      .toFile(outputPath);

    console.log('Successfully generated public/favicon.png');
    
    // Also generate apple-touch-icon and web-app-manifest versions
    await sharp(outputPath).resize(96, 96).toFile('public/favicon-96x96.png');
    await sharp(outputPath).resize(180, 180).toFile('public/apple-touch-icon.png');
    await sharp(outputPath).resize(192, 192).toFile('public/web-app-manifest-192x192.png');
    await sharp(outputPath).resize(512, 512).toFile('public/web-app-manifest-512x512.png');
    console.log('Successfully generated all other sizes');

  } catch (error) {
    console.error('Error processing favicon:', error);
  }
}

processFavicon();
