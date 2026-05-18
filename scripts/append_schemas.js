import fs from 'fs';
import path from 'path';

const pageData = {
  "PerformanceMarketing": {
     "name": "Performance Marketing",
     "description": "Data-driven PPC, Meta, and LinkedIn campaigns to maximise ROAS for UAE and global brands.",
     "url": "/digital-marketing/performance-marketing",
     "category": "Digital Marketing",
     "categoryUrl": "/digital-marketing"
  },
  "SeoOptimization": {
     "name": "SEO Optimization",
     "description": "Increase organic visibility with technical SEO and bilingual content strategies.",
     "url": "/digital-marketing/seo",
     "category": "Digital Marketing",
     "categoryUrl": "/digital-marketing"
  },
  "SocialMediaMarketing": {
     "name": "Social Media Marketing",
     "description": "Engaging organic social media management and community building.",
     "url": "/digital-marketing/smm",
     "category": "Digital Marketing",
     "categoryUrl": "/digital-marketing"
  },
  "BrandStrategy": {
     "name": "Brand Strategy",
     "description": "Your brand is your most valuable asset. Let's make it unforgettable.",
     "url": "/digital-marketing/branding",
     "category": "Digital Marketing",
     "categoryUrl": "/digital-marketing"
  },
  "VideoProduction": {
     "name": "Video Production",
     "description": "Words tell, but video sells. Let's capture your story in motion.",
     "url": "/digital-marketing/video-production",
     "category": "Digital Marketing",
     "categoryUrl": "/digital-marketing"
  },
  "PhotographyGraphics": {
     "name": "Photography & Graphics",
     "description": "First impressions matter. Let's make your visuals impossible to ignore.",
     "url": "/digital-marketing/photography-graphics",
     "category": "Digital Marketing",
     "categoryUrl": "/digital-marketing"
  },
  "WebApps": {
     "name": "Web Apps",
     "description": "Ready to build software that scales with your ambition? Let's engineer it.",
     "url": "/software-development/web-apps",
     "category": "Software Development",
     "categoryUrl": "/software-development"
  },
  "MobileApps": {
     "name": "Mobile Apps",
     "description": "Your audience is on mobile. Let's give them an app they'll love to use.",
     "url": "/software-development/mobile-apps",
     "category": "Software Development",
     "categoryUrl": "/software-development"
  },
  "WebsiteDevelopment": {
     "name": "Website Development",
     "description": "Your website is your 24/7 salesperson. Let's build one that converts.",
     "url": "/software-development/website-development",
     "category": "Software Development",
     "categoryUrl": "/software-development"
  },
  "CRMDevelopment": {
     "name": "CRM Development",
     "description": "Stop losing leads to bad processes. Let's build a CRM that drives sales.",
     "url": "/software-development/crm-development",
     "category": "Software Development",
     "categoryUrl": "/software-development"
  },
  "ERPSolutions": {
     "name": "ERP Solutions",
     "description": "Fragmented systems are costing you time. Let's architect your single source of truth.",
     "url": "/software-development/erp-solutions",
     "category": "Software Development",
     "categoryUrl": "/software-development"
  },
  "Ecommerce": {
     "name": "E-Commerce",
     "description": "Ready to turn visitors into buyers? Let's build your digital storefront.",
     "url": "/software-development/ecommerce",
     "category": "Software Development",
     "categoryUrl": "/software-development"
  },
  "OffensiveSecurity": {
     "name": "Offensive Security",
     "description": "Don't wait for a breach. Let our red team find the gaps before attackers do.",
     "url": "/cyber-security/offensive-security",
     "category": "Cyber Security",
     "categoryUrl": "/cyber-security"
  },
  "IncidentResponse": {
     "name": "Incident Response",
     "description": "Under attack? Our rapid response team is ready to contain and recover.",
     "url": "/cyber-security/incident-response",
     "category": "Cyber Security",
     "categoryUrl": "/cyber-security"
  },
  "ManagedAdvisory": {
     "name": "Managed Advisory",
     "description": "Need a strategic security partner? Let our vCISOs guide your cyber maturity.",
     "url": "/cyber-security/managed-advisory",
     "category": "Cyber Security",
     "categoryUrl": "/cyber-security"
  },
  "ComplianceGRC": {
     "name": "Compliance & GRC",
     "description": "Compliance doesn't have to be complex. Let's simplify your path to certification.",
     "url": "/cyber-security/compliance-grc",
     "category": "Cyber Security",
     "categoryUrl": "/cyber-security"
  },
  "CloudSecurity": {
     "name": "Cloud Security",
     "description": "Your cloud is only as safe as its weakest misconfiguration. Let's harden it.",
     "url": "/cyber-security/cloud-security",
     "category": "Cyber Security",
     "categoryUrl": "/cyber-security"
  },
  "OTIoTSecurity": {
     "name": "OT/IoT Security",
     "description": "Your critical infrastructure needs specialized protection. Let's secure your operational tech.",
     "url": "/cyber-security/ot-iot-security",
     "category": "Cyber Security",
     "categoryUrl": "/cyber-security"
  }
};

const pages = Object.keys(pageData).map(k => k + '.tsx');

for (const page of pages) {
  const p = path.join(process.cwd(), 'src/pages', page);
  if (!fs.existsSync(p)) continue;
  
  let content = fs.readFileSync(p, 'utf8');
  let data = pageData[page.replace('.tsx', '')];
  
  const relatedServices = {
          "Digital Marketing": [
              {name: 'SEO Optimization', url: '/digital-marketing/seo'},
              {name: 'Social Media Marketing', url: '/digital-marketing/smm'},
              {name: 'Brand Strategy', url: '/digital-marketing/branding'},
              {name: 'Performance Marketing', url: '/digital-marketing/performance-marketing'}
          ],
          "Software Development": [
              {name: 'Web Apps', url: '/software-development/web-apps'},
              {name: 'Mobile Apps', url: '/software-development/mobile-apps'},
              {name: 'Website Development', url: '/software-development/website-development'},
              {name: 'ERP Solutions', url: '/software-development/erp-solutions'}
          ],
          "Cyber Security": [
              {name: 'Offensive Security', url: '/cyber-security/offensive-security'},
              {name: 'Incident Response', url: '/cyber-security/incident-response'},
              {name: 'Cloud Security', url: '/cyber-security/cloud-security'},
              {name: 'OT/IoT Security', url: '/cyber-security/ot-iot-security'}
          ]
      };
      
  const related = relatedServices[data.category].filter(c => c.name !== data.name) || relatedServices[data.category].slice(0, 3);
  if (related.length < 3) related.push(relatedServices[data.category].find(c => !related.includes(c) && c.name !== data.name));
  if (related.length < 3) related.push(relatedServices[data.category][0]);
  
  const relatedSectionStr = `
      {/* Related Services */}
      <section className="py-16 border-t border-white/5 bg-olive-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h3 className="font-display text-2xl font-black uppercase mb-8 text-white">Related Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="${related[0].url}" className="text-olive-500 hover:text-white font-bold transition-colors">${related[0].name} &rarr;</Link>
            <Link to="${related[1].url}" className="text-olive-500 hover:text-white font-bold transition-colors">${related[1].name} &rarr;</Link>
            <Link to="${related[2] ? related[2].url : related[0].url}" className="text-olive-500 hover:text-white font-bold transition-colors">${related[2] ? related[2].name : related[0].name} &rarr;</Link>
          </div>
        </div>
      </section>
      
      <JsonLd data={serviceSchema} />
      {typeof faqs !== 'undefined' && <JsonLd data={buildFaqSchema(faqs)} />}
      <JsonLd data={breadcrumbSchema} />
    </div>
  );
}`;

  if (!content.includes('Related Services')) {
     const lastIndex = content.lastIndexOf('</div>\n  );\n}');
     if (lastIndex !== -1) {
         content = content.substring(0, lastIndex) + relatedSectionStr;
         fs.writeFileSync(p, content, 'utf8');
         console.log('Appended Related Services and JsonLd to', page);
     }
  }
}
