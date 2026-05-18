import * as fs from 'fs';
import * as path from 'path';

const pages = [
  "src/pages/PerformanceMarketing.tsx",
  "src/pages/BrandStrategy.tsx",
  "src/pages/VideoProduction.tsx",
  "src/pages/PhotographyGraphics.tsx",
  "src/pages/WebApps.tsx",
  "src/pages/MobileApps.tsx",
  "src/pages/WebsiteDevelopment.tsx",
  "src/pages/ERPSolutions.tsx",
  "src/pages/CRMDevelopment.tsx",
  "src/pages/Ecommerce.tsx",
  "src/pages/OffensiveSecurity.tsx",
  "src/pages/IncidentResponse.tsx",
  "src/pages/ManagedAdvisory.tsx",
  "src/pages/ComplianceGRC.tsx",
  "src/pages/CloudSecurity.tsx",
  "src/pages/OTIoTSecurity.tsx",
  "src/pages/europe/SoftwareDevelopment.tsx",
  "src/pages/europe/DigitalMarketing.tsx",
  "src/pages/europe/CyberSecurity.tsx"
];

for (const pagePath of pages) {
    if (!fs.existsSync(pagePath)) {
        console.warn(`File not found: ${pagePath}`);
        continue;
    }

    let content = fs.readFileSync(pagePath, 'utf8');
    let changed = false;

    // Check if Breadcrumbs is already imported
    if (!content.includes('Breadcrumbs')) {
        // Determine the correct import path
        let importPath = "'../components/Breadcrumbs'";
        if (pagePath.includes('europe/')) {
            importPath = "'../../components/Breadcrumbs'";
        }

        // Add import after last import statement
        const importMatch = content.match(/import.*?;?\n(?=.*import)/g);
        if (content.includes('import { SEO }')) {
             content = content.replace(/import \{ SEO \} (.*?)\n/, `import { SEO } $1\nimport { Breadcrumbs } from ${importPath};\n`);
        } else {
             // Fallback
             content = `import { Breadcrumbs } from ${importPath};\n` + content;
        }
        changed = true;
    }

    // Check if Breadcrumbs is used
    if (!content.includes('<Breadcrumbs />')) {
        // Find hero section
        const heroRegex = /(<section className="relative w-full[^>]*>)/;
        if (heroRegex.test(content)) {
            content = content.replace(
                heroRegex,
                `$1\n        <div className="mb-8">\n          <Breadcrumbs />\n        </div>`
            );
            changed = true;
        }
    }

    if (changed) {
        fs.writeFileSync(pagePath, content, 'utf8');
        console.log(`Updated: ${pagePath}`);
    } else {
        console.log(`Already has breadcrumbs: ${pagePath}`);
    }
}
