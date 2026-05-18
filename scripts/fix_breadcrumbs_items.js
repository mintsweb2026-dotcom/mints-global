import fs from 'fs';
import path from 'path';

const pageData = {
  "PerformanceMarketing": true,
  "SeoOptimization": true,
  "SocialMediaMarketing": true,
  "BrandStrategy": true,
  "VideoProduction": true,
  "PhotographyGraphics": true,
  "WebApps": true,
  "MobileApps": true,
  "WebsiteDevelopment": true,
  "CRMDevelopment": true,
  "ERPSolutions": true,
  "Ecommerce": true,
  "OffensiveSecurity": true,
  "IncidentResponse": true,
  "ManagedAdvisory": true,
  "ComplianceGRC": true,
  "CloudSecurity": true,
  "OTIoTSecurity": true
};

const pages = Object.keys(pageData).map(k => k + '.tsx');
const dir = path.join(process.cwd(), 'src/pages');

for (const page of pages) {
  const p = path.join(dir, page);
  if (!fs.existsSync(p)) continue;
  
  let content = fs.readFileSync(p, 'utf8');
  
  // replace <Breadcrumbs items={[...]} /> with <Breadcrumbs />
  content = content.replace(/<Breadcrumbs items=\{\[\s*\{[\s\S]*?\}\s*\]\} \/>/g, '<Breadcrumbs />');
  
  fs.writeFileSync(p, content, 'utf8');
  console.log('Fixed Breadcrumbs in', page);
}
