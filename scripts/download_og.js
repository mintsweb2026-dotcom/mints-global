import fs from 'fs';
import https from 'https';
import path from 'path';

const url = "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?q=80&w=1200&h=630&auto=format&fit=crop"; // Dubai skyline for OG image
const dest = path.join(process.cwd(), 'public', 'og-image.jpg');

const file = fs.createWriteStream(dest);
https.get(url, (response) => {
  response.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Downloaded og-image.jpg');
  });
}).on('error', (err) => {
  fs.unlink(dest, () => {});
  console.error('Error downloading image:', err.message);
});
