import fs from 'fs';
import path from 'path';

const pageData = {
  "PerformanceMarketing": { name: "Performance Marketing", category: "Digital Marketing", categoryUrl: "/digital-marketing", url: "/digital-marketing/performance-marketing" },
  "SeoOptimization": { name: "SEO Optimization", category: "Digital Marketing", categoryUrl: "/digital-marketing", url: "/digital-marketing/seo" },
  "SocialMediaMarketing": { name: "Social Media Marketing", category: "Digital Marketing", categoryUrl: "/digital-marketing", url: "/digital-marketing/smm" },
  "BrandStrategy": { name: "Brand Strategy", category: "Digital Marketing", categoryUrl: "/digital-marketing", url: "/digital-marketing/branding" },
  "VideoProduction": { name: "Video Production", category: "Digital Marketing", categoryUrl: "/digital-marketing", url: "/digital-marketing/video-production" },
  "PhotographyGraphics": { name: "Photography & Graphics", category: "Digital Marketing", categoryUrl: "/digital-marketing", url: "/digital-marketing/photography-graphics" },
  "WebApps": { name: "Web Apps", category: "Software Development", categoryUrl: "/software-development", url: "/software-development/web-apps" },
  "MobileApps": { name: "Mobile Apps", category: "Software Development", categoryUrl: "/software-development", url: "/software-development/mobile-apps" },
  "WebsiteDevelopment": { name: "Website Development", category: "Software Development", categoryUrl: "/software-development", url: "/software-development/website-development" },
  "CRMDevelopment": { name: "CRM Development", category: "Software Development", categoryUrl: "/software-development", url: "/software-development/crm-development" },
  "ERPSolutions": { name: "ERP Solutions", category: "Software Development", categoryUrl: "/software-development", url: "/software-development/erp-solutions" },
  "Ecommerce": { name: "E-Commerce", category: "Software Development", categoryUrl: "/software-development", url: "/software-development/ecommerce" },
  "OffensiveSecurity": { name: "Offensive Security", category: "Cyber Security", categoryUrl: "/cyber-security", url: "/cyber-security/offensive-security" },
  "IncidentResponse": { name: "Incident Response", category: "Cyber Security", categoryUrl: "/cyber-security", url: "/cyber-security/incident-response" },
  "ManagedAdvisory": { name: "Managed Advisory", category: "Cyber Security", categoryUrl: "/cyber-security", url: "/cyber-security/managed-advisory" },
  "ComplianceGRC": { name: "Compliance & GRC", category: "Cyber Security", categoryUrl: "/cyber-security", url: "/cyber-security/compliance-grc" },
  "CloudSecurity": { name: "Cloud Security", category: "Cyber Security", categoryUrl: "/cyber-security", url: "/cyber-security/cloud-security" },
  "OTIoTSecurity": { name: "OT/IoT Security", category: "Cyber Security", categoryUrl: "/cyber-security", url: "/cyber-security/ot-iot-security" }
};

const pages = Object.keys(pageData).map(k => k + '.tsx');
const dir = path.join(process.cwd(), 'src/pages');

for (const page of pages) {
  const p = path.join(dir, page);
  if (!fs.existsSync(p)) continue;
  
  let content = fs.readFileSync(p, 'utf8');
  let data = pageData[page.replace('.tsx', '')];
  
  const bcStr = `
        <div className="mb-8">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: '${data.category}', href: '${data.categoryUrl}' },
            { label: '${data.name}', href: '${data.url}' }
          ]} />
        </div>`;
        
  // check if Breadcrumbs renderer is already there
  if (!content.includes('<Breadcrumbs items=')) {
     // inject it right after <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
     content = content.replace(/(<section[^>]*pt-32[^>]*>\s*)(<motion\.div)/, `$1${bcStr}\n        $2`);
     // fallback if motion div matches differently
     if (!content.includes(bcStr)) {
        content = content.replace(/({\/\* Hero Section \*\/}\s*<section[^>]*>\s*)/, `$1${bcStr}\n        `);
     }
     
     // add import if missing
     if (!content.includes("import { Breadcrumbs }")) {
         content = content.replace("import { SEO", "import { Breadcrumbs } from '../components/Breadcrumbs';\nimport { SEO");
     }
     
     fs.writeFileSync(p, content, 'utf8');
     console.log('Added Breadcrumbs to', page);
  }
}
