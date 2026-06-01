import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getPosts } from '../src/data/posts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateSeoReport() {
  console.log('Scanning all blog posts for SEO metadata...');
  const posts = await getPosts();
  
  const missingSeoPosts = posts.filter(
    post => !post.seoTitle || !post.seoDescription
  );

  const report = {
    generatedAt: new Date().toISOString(),
    totalPosts: posts.length,
    postsMissingSeoMetadata: missingSeoPosts.length,
    details: missingSeoPosts.map(post => ({
      id: post.id,
      title: post.title,
      slug: post.slug,
      missingFields: [
        !post.seoTitle ? 'seoTitle' : null,
        !post.seoDescription ? 'seoDescription' : null
      ].filter(Boolean)
    }))
  };

  const outputPath = path.join(__dirname, '../seo-report.json');
  fs.writeFileSync(outputPath, JSON.stringify(report, null, 2), 'utf8');
  
  console.log(`✅ SEO Report generated at seo-report.json`);
  console.log(`Summary: ${report.postsMissingSeoMetadata} out of ${report.totalPosts} posts are missing SEO metadata.`);
  
  // Also log the items directly to console for immediate visibility
  if (missingSeoPosts.length > 0) {
    console.log('\nPosts needing attention:');
    report.details.forEach(item => {
      console.log(`- "${item.title}" (Slug: ${item.slug}) - Missing: ${item.missingFields.join(', ')}`);
    });
  }

  process.exit(0);
}

generateSeoReport();
