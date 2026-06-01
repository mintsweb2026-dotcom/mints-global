import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const SIZES = [400, 800, 1200, 1920];
const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png'];

async function scanDirectory(dir: string): Promise<string[]> {
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === 'ENOENT') {
      console.warn(`Directory not found: ${dir}`);
      return [];
    }
    throw err;
  }

  const files: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    // Ignore node_modules, .git, etc., although they shouldn't be in public/
    if (entry.isDirectory()) {
      files.push(...(await scanDirectory(fullPath)));
    } else {
      const ext = path.extname(fullPath).toLowerCase();
      if (SUPPORTED_FORMATS.includes(ext)) {
        files.push(fullPath);
      }
    }
  }

  return files;
}

async function optimizeImage(filePath: string) {
  try {
    const dir = path.dirname(filePath);
    const ext = path.extname(filePath);
    const name = path.basename(filePath, ext);

    console.log(`Processing: ${name}${ext}`);

    const image = sharp(filePath);
    const metadata = await image.metadata();

    if (!metadata.width) {
      console.warn(`Could not determine width for ${filePath}`);
      return;
    }

    // Convert to webp with original size optimized
    const optimizedWebpPath = path.join(dir, `${name}.webp`);
    
    // Check if webp file already exists
    let skipOriginalWebp = false;
    try {
      await fs.access(optimizedWebpPath);
      skipOriginalWebp = true; // file exists
    } catch {
      // file does not exist, proceed
    }

    if (!skipOriginalWebp) {
      await image.webp({ quality: 80, effort: 6 }).toFile(optimizedWebpPath);
      console.log(`✓ Generated optimized original: ${name}.webp`);
    }

    // Generate resized versions
    for (const size of SIZES) {
      if (metadata.width > size) {
        const resizedPath = path.join(dir, `${name}-${size}w.webp`);
        
        let skipResized = false;
        try {
           await fs.access(resizedPath);
           skipResized = true;
        } catch { }

        if (!skipResized) {
          await image
            .resize({ width: size, withoutEnlargement: true })
            .webp({ quality: 80, effort: 6 })
            .toFile(resizedPath);
          console.log(`  ✓ Generated size: ${size}w -> ${name}-${size}w.webp`);
        }
      }
    }
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err);
  }
}

async function run() {
  console.log(`Scanning directory: ${PUBLIC_DIR}...`);
  const files = await scanDirectory(PUBLIC_DIR);

  if (files.length === 0) {
    console.log('No supported images found.');
    return;
  }

  console.log(`Found ${files.length} images to process.`);

  for (const file of files) {
    await optimizeImage(file);
  }

  console.log('Optimization complete!');
}

run().catch(console.error);
