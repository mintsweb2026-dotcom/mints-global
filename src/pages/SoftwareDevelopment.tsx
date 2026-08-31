import { ArrowRight, Code2, Smartphone, Globe, Database, Network, ShoppingCart, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';
import { SEO } from '../components/SEO';
import { SEO_DATA } from '../lib/seo-data';
import { JsonLd } from '../components/JsonLd';
import { ServicesAccordion } from '../components/ServicesAccordion';
import { SafeImage } from '../components/SafeImage';

const subServices = [
  { icon: Code2, name: "Custom Web Apps", desc: "Scalable, high-performance web applications built with modern frontend and backend frameworks." },
  { icon: Smartphone, name: "Mobile Ecosystems", desc: "Native and cross-platform mobile applications for iOS and Android tailored to your business. Contact us for a consultation today." },
  { icon: Globe, name: "Website Development", desc: "Corporate sites, portals, and landing pages optimized for speed and maximum conversion." },
  { icon: Database, name: "ERP Solutions", desc: "Bespoke Enterprise Resource Planning systems to unify your business operations." },
  { icon: Network, name: "CRM Development", desc: "Custom Customer Relationship Management platforms that empower your sales teams." },
  { icon: ShoppingCart, name: "E-Commerce Platforms", desc: "Secure, scalable, and high-converting e-commerce experiences on modern architectures." }
];

const faqs = [
  {
    q: "What software development services does Mints Global offer in Dubai?",
    a: "Mints Global offers a full range of software development services in Dubai including custom web application development, iOS and Android mobile app development, ERP and CRM solutions, API integrations, cloud-based software, UI/UX design, QA testing, and ongoing maintenance and support."
  },
  {
    q: "How long does it take to develop a custom software solution?",
    a: "Project timelines vary based on scope and complexity. A typical MVP web application takes 6–12 weeks, while complex ERP or enterprise solutions may take 3–6 months. Mints Global provides a detailed project roadmap before development begins."
  },
  {
    q: "Does Mints Global develop mobile apps for both iOS and Android?",
    a: "Yes. Mints Global develops mobile applications for both iOS (Apple App Store) and Android (Google Play Store), including cross-platform solutions for businesses in Dubai and across the UAE."
  },
  {
    q: "Can Mints Global integrate custom software with existing business systems?",
    a: "Absolutely. Mints Global specialises in API integration and third-party software connectivity, ensuring your new solution works seamlessly with your existing CRM, ERP, payment gateways, or other business tools."
  },
  {
    q: "Does Mints Global provide post-launch software support and maintenance?",
    a: "Yes. Mints Global offers ongoing software maintenance, updates, performance monitoring, and technical support after launch to ensure your application remains secure and up to date."
  }
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Custom Software Development Services in Dubai",
  "serviceType": "Software Development",
  "description": "Mints Global offers custom software development in Dubai including web applications, mobile apps, ERP, CRM, API integrations, cloud solutions, UI/UX design, and QA testing for businesses across the UAE and UK.",
  "url": "https://www.mintsglobal.ae/software-development/",
  "provider": {
    "@type": "Organization",
    "name": "Mints Global",
    "url": "https://www.mintsglobal.ae",
    "logo": "https://www.mintsglobal.ae/images/mints-global-logo.png",
    "telephone": "+971502943916",
    "email": "info@mintsglobal.ae",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office #315, 3rd Floor, Bank Street Building",
      "addressLocality": "Bur Dubai",
      "addressRegion": "Dubai",
      "addressCountry": "AE"
    },
    "sameAs": [
      "https://www.linkedin.com/company/mintsglobal",
      "https://twitter.com/mintsglobal"
    ]
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Dubai"
    },
    {
      "@type": "Country",
      "name": "United Arab Emirates"
    },
    {
      "@type": "Country",
      "name": "United Kingdom"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Software Development Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Application Development",
          "description": "Custom web app development using modern frameworks for UAE businesses."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile App Development",
          "description": "iOS and Android mobile app development for startups and enterprises in Dubai."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "ERP & CRM Solutions",
          "description": "Custom ERP and CRM software tailored for UAE business operations."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "API Integration",
          "description": "Third-party API and system integration services in Dubai."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cloud-Based Software Solutions",
          "description": "Cloud software development and deployment for scalable UAE business solutions."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "UI/UX Design",
          "description": "User experience and interface design for web and mobile applications."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "QA & Software Testing",
          "description": "Quality assurance and software testing services for enterprise applications."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Software Maintenance & Support",
          "description": "Ongoing software support, maintenance, and upgrade services in Dubai."
        }
      }
    ]
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Mints Global",
  "url": "https://www.mintsglobal.ae",
  "logo": "https://www.mintsglobal.ae/images/mints-global-logo.png",
  "description": "Dubai-based premium digital agency offering software development, digital marketing, cybersecurity, branding and IT services.",
  "telephone": "+971502943916",
  "email": "info@mintsglobal.ae",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Office #315, 3rd Floor, Bank Street Building",
    "addressLocality": "Bur Dubai",
    "addressRegion": "Dubai",
    "addressCountry": "AE"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+971502943916",
      "contactType": "customer service",
      "areaServed": "AE",
      "availableLanguage": "English"
    },
    {
      "@type": "ContactPoint",
      "telephone": "+447899727950",
      "contactType": "customer service",
      "areaServed": "GB",
      "availableLanguage": "English"
    }
  ]
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Software Development Company in Dubai | Custom Solutions – Mints Global",
  "url": "https://www.mintsglobal.ae/software-development/",
  "description": "Mints Global is a leading software development company in Dubai offering custom web apps, mobile apps, ERP, CRM, and enterprise solutions.",
  "inLanguage": "en",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Mints Global",
    "url": "https://www.mintsglobal.ae"
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.mintsglobal.ae/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Software Development",
        "item": "https://www.mintsglobal.ae/software-development/"
      }
    ]
  }
};

function buildFaqSchema(faqsData: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqsData.map(({ q, a }) => ({
      "@type": "Question",
      "name": q,
      "acceptedAnswer": { "@type": "Answer", "text": a }
    }))
  };
}

export function SoftwareDevelopment() {
  const { i18n } = useTranslation();
  const lang = (i18n.language as 'en' | 'ar' | 'de') || 'en';
  const meta = SEO_DATA.softwareDev[lang] || SEO_DATA.softwareDev.en;

  return (
    <div className="w-full">
      <SEO 
        title={meta.title}
        description={meta.description}
        keywords={["software engineering Dubai", "enterprise software development", "scalable web applications", "mobile app ecosystem", "custom software solutions"]}
        canonical="/software-development/"
        ogTitle={lang === 'en' ? "Software Development Company in Dubai | Custom Solutions – Mints Global" : undefined}
        ogDescription={lang === 'en' ? "Custom software, web & mobile apps, ERP and CRM solutions built for UAE businesses. Mints Global — Dubai's trusted tech development partner." : undefined}
        ogImage="https://www.mintsglobal.ae/images/software-development-dubai-mints-global.jpg"
        twitterTitle={lang === 'en' ? "Software Development Company in Dubai | Mints Global" : undefined}
        twitterDescription={lang === 'en' ? "Custom web apps, mobile apps, ERP & enterprise software solutions in Dubai, UAE. Partner with Mints Global." : undefined}
        twitterImage="https://www.mintsglobal.ae/images/software-development-dubai-mints-global.jpg"
      />
      <JsonLd data={serviceSchema} />
      <JsonLd data={organizationSchema} />
      <JsonLd data={webPageSchema} />
      <JsonLd data={buildFaqSchema(faqs)} />
      <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-black mb-6 uppercase leading-tight">
              SOFTWARE <br/><span className="text-olive-500">DEVELOPMENT.</span>
            </h1>
            <p className="text-brand-white-70 max-w-2xl text-lg md:text-xl font-medium leading-relaxed mb-10">
              Scalable, resilient web, mobile, and enterprise applications that drive operational excellence and future-proof your business.
            </p>
            <Link to="/contact" className="inline-flex bg-olive-500 text-brand-black px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-olive-400 transition-colors items-center gap-2">
              Discuss Your Specs <ArrowRight size={18} />
            </Link>
          </div>
          <div className="relative w-full aspect-[16/9] md:aspect-[16/10] lg:aspect-square rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-olive-950 via-transparent to-transparent z-10 pointer-events-none opacity-40" />
            <SafeImage
              src="/images/software-development-company-dubai.webp"
              fallbackSrc="/crm-blog-image.webp"
              alt="Custom software development services by Mints Global in Dubai, UAE"
              title="Software Development Company Dubai – Mints Global"
              width="1920"
              height="800"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            />
          </div>
        </div>
      </section>

      <section className="bg-olive-900 border-y border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-4xl font-black mb-16 uppercase">Core <span className="text-olive-500">Capabilities</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subServices.map((srv, i) => (
              <div key={i} className="bg-olive-950/50 border border-white/5 rounded-2xl p-8 hover:border-olive-500/50 transition-colors group">
                <srv.icon className="text-olive-500 mb-6" size={36} strokeWidth={1.5} />
                <h3 className="text-xl font-display font-bold mb-3 group-hover:text-olive-500 transition-colors">{srv.name}</h3>
                <p className="text-brand-white-70 text-sm leading-relaxed mb-8">{srv.desc}</p>
                <Link to="/contact" aria-label={`Learn more about ${srv.name}`} className="text-sm font-bold flex items-center gap-2 hover:text-white transition-colors uppercase tracking-wider">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div>
             <h2 className="font-display text-4xl font-black mb-6 uppercase">Why <span className="text-olive-500">Mints Global?</span></h2>
             <p className="text-brand-white-70 mb-8 leading-relaxed">
               We treat code as a craft. Guided by agile methodologies and modern DevOps principles, we build software that scales securely to millions of users with near-zero downtime.
             </p>
             <ul className="space-y-4">
               {['Agile Delivery Sprints', 'Test-Driven Development (TDD)', 'Secure By Design (DevSecOps)', 'Cloud-Native Architectures'].map(item => (
                 <li key={item} className="flex items-center gap-3 font-bold text-sm uppercase tracking-wide">
                   <CheckCircle2 className="text-olive-500" size={20} /> {item}
                 </li>
               ))}
             </ul>
           </div>
           <div className="bg-olive-900 border border-white/5 rounded-3xl p-10 relative overflow-hidden aspect-square flex items-center justify-center">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-olive-500 via-olive-900 to-olive-950"></div>
              <div className="relative text-center">
                <div className="font-display text-4xl md:text-5xl lg:text-7xl font-black text-white mb-2">
                  <CountUp end={99.9} decimals={1} duration={2.5} enableScrollSpy />%
                </div>
                <div className="font-bold text-olive-500 uppercase tracking-widest text-sm mt-4">Uptime & Reliability</div>
              </div>
           </div>
        </div>
      </section>

      <section className="bg-olive-900 border-t border-white/5 py-24">
         <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <h2 className="font-display text-4xl md:text-5xl font-black mb-16 text-center uppercase tracking-tight">Frequently Asked <span className="text-olive-500">Questions</span></h2>
            <ServicesAccordion items={faqs.map(f => ({ title: f.q, content: f.a }))} />
         </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 text-center py-20 md:py-32">
         <h2 className="font-display text-4xl md:text-5xl font-black mb-8 leading-tight">BUILD YOUR NEXT<br />BIG IDEA.</h2>
         <Link to="/contact" className="inline-flex items-center gap-3 bg-brand-white text-olive-950 px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-olive-500 hover:text-white transition-all hover:scale-105">
           Talk to an Architect <ArrowRight size={20} />
         </Link>
      </section>
    </div>
  );
}
