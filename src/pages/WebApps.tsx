import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { JsonLd } from '../components/JsonLd';
import { SEO } from '../components/SEO';
import { ServicesAccordion } from '../components/ServicesAccordion';
import { SafeImage } from '../components/SafeImage';

const faqs = [
  {
    "q": "What types of web applications does MINTS Global develop?",
    "a": "We develop SaaS platforms, CRM systems, ERP software, customer portals, enterprise applications, dashboards, and custom business web applications."
  },
  {
    "q": "Do you provide custom web application development in Dubai?",
    "a": "Yes, MINTS Global provides custom web application development services for startups, SMEs, and enterprises across Dubai and the UAE."
  },
  {
    "q": "Which technologies do you use for web application development?",
    "a": "We use modern technologies such as React, Next.js, Node.js, Laravel, Python, .NET, and cloud-based architectures."
  }
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Web Application Development Services",
  "serviceType": "Custom Web Application Development",
  "provider": {
    "@type": "Organization",
    "name": "MINTS Global",
    "url": "https://www.mintsglobal.ae",
    "logo": "https://www.mintsglobal.ae/logo.png"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United Arab Emirates"
  },
  "description": "Custom web application development services including SaaS applications, enterprise software, CRM systems, ERP solutions, and scalable business web platforms.",
  "url": "https://www.mintsglobal.ae/software-development/web-apps",
  "category": "Software Development"
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "MINTS Global",
  "url": "https://www.mintsglobal.ae",
  "logo": "https://www.mintsglobal.ae/logo.png",
  "email": "info@mintsglobal.ae",
  "telephone": "+971502943916",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Bank Street Building, Bur Dubai",
    "addressLocality": "Dubai",
    "addressCountry": "AE"
  },
  "sameAs": [
    "https://www.linkedin.com/company/mints-dubai"
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
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
      "item": "https://www.mintsglobal.ae/software-development"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Web Applications",
      "item": "https://www.mintsglobal.ae/software-development/web-apps"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What types of web applications does MINTS Global develop?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We develop SaaS platforms, CRM systems, ERP software, customer portals, enterprise applications, dashboards, and custom business web applications."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide custom web application development in Dubai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, MINTS Global provides custom web application development services for startups, SMEs, and enterprises across Dubai and the UAE."
      }
    },
    {
      "@type": "Question",
      "name": "Which technologies do you use for web application development?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We use modern technologies such as React, Next.js, Node.js, Laravel, Python, .NET, and cloud-based architectures."
      }
    }
  ]
};

export function WebApps() {
  return (
    <div className="w-full relative z-10 min-h-screen bg-brand-black">
      <SEO 
        title="Custom Web Application Development Company in Dubai, UAE" 
        description="Build scalable, secure web applications with MINTS Global. Web apps, SaaS, CRM & ERP solutions in Dubai, UAE."
        keywords={["custom web app development", "enterprise web applications", "scalable web apps", "SaaS development agency", "React Nextjs development"]}
        canonical="/software-development/web-apps"
        ogTitle="Custom Web Application Development Company in Dubai, UAE | MINTS Global"
        twitterTitle="Custom Web Application Development Company in Dubai, UAE | MINTS Global"
        rawTitle={true}
      />
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-1 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-brand-white-70">
                Scalable Engineering
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-black mb-8 uppercase leading-[0.9] text-white">
              Web App<br/>
              <span className="text-olive-500">Engineering.</span>
            </h1>
            <p className="text-brand-white-70 text-lg md:text-xl max-w-3xl leading-relaxed mb-12">
              Custom web application development. Your vision deserves more than a template — we engineer high-performance SaaS platforms, portals, and progressive web apps.
            </p>
            
            <div className="flex flex-wrap gap-4">
               <Link to="/contact" className="bg-olive-500 text-brand-black px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-olive-400 transition-colors inline-flex items-center gap-2 relative z-20">
                 Start Your Build <ArrowRight size={18} />
               </Link>
            </div>
          </motion.div>

          <div className="relative w-full aspect-[12/6] rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-olive-950 via-transparent to-transparent z-10 pointer-events-none opacity-40" />
            <SafeImage
              src="/images/web-application-development-services-dubai.webp"
              fallbackSrc="/hero.webp"
              alt="Custom web application development services in Dubai UAE by MINTS Global"
              title="Web Application Development Company Dubai"
              width={1200}
              height={600}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-olive-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-black uppercase mb-6 text-white">Engineering Focus</h2>
            <p className="text-brand-white-70 text-lg max-w-3xl">We build digital products that are secure by design, scalable by nature, and optimized for unparalleled user experiences.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Custom Web Apps</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Tailor-made solutions that solve specific business problems, from complex dashboards to data management tools.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">SaaS Platforms</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Architecting multi-tenant Software-as-a-Service platforms complete with subscription billing and advanced tiering.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Progressive Web Apps (PWA)</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Web applications that feel and behave like native mobile apps, offering offline capabilities and push notifications.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Enterprise Portals</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Secure internal tools, partner portals, and customer dashboards built to integrate with existing legacy systems.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">API Development</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Designing and building robust REST & GraphQL APIs to power your integrations and front-end applications.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Web Modernization</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Refactoring and migrating legacy codebases (like old PHP/jQuery apps) to modern stacks like React and Node.js.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-brand-black-light border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          <div className="flex-1">
            <span className="text-olive-500 text-sm font-bold tracking-widest uppercase block mb-4">
              Our Development Team
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-black uppercase mb-6 text-white leading-tight">
              Engineered for Scalability
            </h2>
            <p className="text-brand-white-70 text-lg leading-relaxed mb-8">
              Our certified software engineers design and develop custom solutions optimized for speed, performance, and cross-platform reliability. From robust database schema designs to modern API integrations, we handle the full development life cycle.
            </p>
          </div>
          <div className="flex-1 relative w-full aspect-[16/10] rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-olive-950 via-transparent to-transparent z-10 pointer-events-none opacity-40" />
            <SafeImage
              src="/images/web-application-developers-dubai.webp"
              fallbackSrc="/crm-blog-image.webp"
              alt="Web application developers building scalable business software solutions"
              title="MINTS Global Software Development Team"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            />
          </div>
        </div>
      </section>

      {/* CRM & ERP Solutions Section */}
      <section className="py-24 bg-olive-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row-reverse items-center justify-between gap-12 lg:gap-16">
          <div className="flex-1">
            <span className="text-olive-500 text-sm font-bold tracking-widest uppercase block mb-4">
              Enterprise Workflows
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-black uppercase mb-6 text-white leading-tight">
              Bespoke CRM & ERP Integrations
            </h2>
            <p className="text-brand-white-70 text-lg leading-relaxed mb-8">
              Consolidate your customer databases, track pipelines, and automate administrative tasks with proprietary portal software. We specialize in building secure, custom CRM and ERP web systems tailored around your operational processes.
            </p>
          </div>
          <div className="flex-1 relative w-full aspect-[16/10] rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-olive-950 via-transparent to-transparent z-10 pointer-events-none opacity-40" />
            <SafeImage
              src="/images/crm-erp-web-applications-dubai.webp"
              fallbackSrc="/hero.webp"
              alt="Custom CRM and ERP web application solutions in Dubai"
              title="Bespoke CRM & ERP Web Applications"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-brand-black border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-black uppercase mb-4 text-white">Frequently Asked Questions</h2>
            <p className="text-brand-white-70 text-lg">Everything you need to know about our web app services.</p>
          </div>
          <div className="space-y-4">
            <ServicesAccordion items={faqs.map(f => ({ title: f.q, content: f.a }))} />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-olive-900 border-t border-white/5 text-center">
         <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <h2 className="font-display text-4xl lg:text-5xl font-black uppercase mb-6 text-white leading-tight">
              Ready To Get Started?
            </h2>
            <p className="text-brand-white-70 text-lg leading-relaxed mb-10">
              Ready to build software that scales with your ambition? Let's engineer it.
            </p>
            <Link to="/contact" className="bg-white text-olive-950 px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-olive-500 hover:text-white transition-all shadow-xl block w-fit mx-auto">
              Contact Us Today
            </Link>
         </div>
      </section>
    
      {/* Related Services */}
      <section className="py-16 border-t border-white/5 bg-olive-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h3 className="font-display text-2xl font-black uppercase mb-8 text-white">Related Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/software-development/mobile-apps" className="text-olive-500 hover:text-white font-bold transition-colors">Mobile Apps &rarr;</Link>
            <Link to="/software-development/website-development" className="text-olive-500 hover:text-white font-bold transition-colors">Website Development &rarr;</Link>
            <Link to="/software-development/erp-solutions" className="text-olive-500 hover:text-white font-bold transition-colors">ERP Solutions &rarr;</Link>
          </div>
        </div>
      </section>
      
      <JsonLd data={organizationSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
    </div>
  );
}