import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { JsonLd } from '../components/JsonLd';
import { buildFaqSchema } from '../lib/schema-helpers';
import { SEO } from '../components/SEO';
import { ServicesAccordion } from '../components/ServicesAccordion';

const faqs = [
  {
    "q": "Do you build custom CRMs or sell existing ones?",
    "a": "We do both. For businesses looking for quick deployment, we configure platforms like HubSpot. For companies with highly specific, non-standard processes or data privacy requirements, we build proprietary bespoke CRMs."
  },
  {
    "q": "Can you migrate our data from our old CRM?",
    "a": "Yes. Data migration—including contacts, deals, notes, and historical communication logs—is a critical part of our onboarding process. We ensure zero data loss."
  },
  {
    "q": "Is the CRM accessible on mobile devices?",
    "a": "Our custom CRMs are built as responsive web applications or dedicated PWAs, meaning your sales team can access full functionality from their tablets or smartphones in the field."
  },
  {
    "q": "Can the CRM automate my marketing emails?",
    "a": "Yes. We can integrate powerful marketing automation capabilities to run drip campaigns, triggered emails, and behavioral tracking directly alongside your sales pipelines."
  }
];

export function CRMDevelopment() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.mintsglobal.ae/software-development/crm-development",
    "name": "CRM Development",
    "provider": {
      "@type": "Organization",
      "@id": "https://www.mintsglobal.ae",
      "name": "Mints Global",
      "url": "https://www.mintsglobal.ae",
      "telephone": "+971-50-2943916",
      "email": "info@mintsglobal.ae",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Office #315, 3rd Floor, Bank Street Building, Bur Dubai",
        "addressLocality": "Dubai",
        "addressRegion": "Dubai",
        "postalCode": "00000",
        "addressCountry": "AE"
      }
    },
    "serviceType": "CRM Development & Implementation",
    "description": "Custom CRM development solutions including Salesforce, HubSpot and bespoke CRM systems designed to streamline business workflows and enhance customer relationships.",
    "areaServed": ["Dubai", "Abu Dhabi", "Sharjah", "UAE"],
    "availableLanguage": ["en", "ar"],
    "image": "https://www.mintsglobal.ae/images/crm-development-og.jpg"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.mintsglobal.ae"
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
        "name": "CRM Development",
        "item": "https://www.mintsglobal.ae/software-development/crm-development"
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.mintsglobal.ae",
    "name": "Mints Global",
    "alternateName": "Mints Global Digital Agency",
    "url": "https://www.mintsglobal.ae",
    "logo": "https://www.mintsglobal.ae/logo.png",
    "description": "Leading digital marketing and software development agency in Dubai providing SEO, web development, custom solutions, and IT services.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office #315, 3rd Floor, Bank Street Building, Bur Dubai",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "postalCode": "00000",
      "addressCountry": "AE"
    },
    "telephone": "+971-50-2943916",
    "email": "info@mintsglobal.ae",
    "sameAs": [
      "https://www.facebook.com/mintsglobal",
      "https://www.linkedin.com/company/mintsglobal",
      "https://twitter.com/mintsglobal",
      "https://www.instagram.com/mintsglobal"
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  return (
    <div className="w-full relative z-10 min-h-screen bg-brand-black">
      <SEO 
        title="CRM Development Services Dubai | Custom Solutions" 
        description="Custom CRM development solutions for Dubai & UAE. Salesforce, Streamline workflows, boost productivity. Expert implementation & support."
        canonical="/software-development/crm-development"
        ogTitle="CRM Development Services Dubai | Custom Solutions"
        ogDescription="Custom CRM development solutions for Dubai & UAE. Salesforce, HubSpot & bespoke systems. Expert implementation."
        ogImage="https://www.mintsglobal.ae/images/crm-development-og.jpg"
        twitterTitle="CRM Development Services Dubai | Custom Solutions"
        twitterDescription="Custom CRM development solutions for Dubai & UAE. Salesforce, HubSpot & bespoke systems. Expert implementation."
        twitterImage="https://www.mintsglobal.ae/images/crm-development-twitter.jpg"
        rawTitle={true}
      />
      <Helmet>
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex items-center gap-4 mb-6">
            <span className="px-4 py-1 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-brand-white-70">
              Customer Relationships
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-black mb-8 uppercase leading-[0.9] text-white">
            CRM<br/>
            <span className="text-olive-500">Development.</span>
          </h1>
          <p className="text-brand-white-70 text-lg md:text-xl max-w-3xl leading-relaxed mb-12">
            Manage your sales pipeline, enhance customer retention, and automate marketing. We build custom CRMs and implement elite enterprise platforms tailored to your sales process.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-16">
             <Link to="/contact" className="bg-olive-500 text-brand-black px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-olive-400 transition-colors inline-flex items-center gap-2 relative z-20">
               Empower Your Sales <ArrowRight size={18} />
             </Link>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <img src="/images/crm-development-og.webp" alt="CRM development specialist implementing custom solutions on computer screen" title="CRM Development Solutions from Mints Global" width="1200" height="630" loading="lazy" className="w-full h-auto object-cover" />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-olive-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-black uppercase mb-6 text-white">CRM Services</h2>
            <p className="text-brand-white-70 text-lg max-w-3xl">Centralize your customer data and give your team the tools they need to close deals and build relationships.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Salesforce & HubSpot Consulting</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Expert configuration, automation, and onboarding for industry-leading third-party CRM platforms.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Custom CRM Builds</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Developing proprietary Customer Relationship Management software specifically tailored to niche industries with unique sales cycles.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Sales Pipeline Automation</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Automating lead capturing, assignment, follow-ups, and notifications to ensure no prospect falls through the cracks.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Customer Support Portals</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Integrated ticketing systems to track support requests, measure SLA compliance, and boost customer satisfaction.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Third-Party Integrations</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Connecting your CRM with your email marketing tools, VoIP phone systems, payment gateways, and ERP.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Analytics & Dashboarding</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Custom dashboards that give executives real-time insight into sales performance, forecasting, and team KPIs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-brand-black border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-black uppercase mb-4 text-white">Frequently Asked Questions</h2>
            <p className="text-brand-white-70 text-lg">Everything you need to know about our CRM services.</p>
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
              Stop losing leads to bad processes. Let's build a CRM that drives sales.
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
            <Link to="/software-development/web-apps" className="text-olive-500 hover:text-white font-bold transition-colors">Web Apps &rarr;</Link>
            <Link to="/software-development/mobile-apps" className="text-olive-500 hover:text-white font-bold transition-colors">Mobile Apps &rarr;</Link>
            <Link to="/software-development/website-development" className="text-olive-500 hover:text-white font-bold transition-colors">Website Development &rarr;</Link>
          </div>
        </div>
      </section>
      
      <JsonLd data={serviceSchema} />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={buildFaqSchema(faqs)} />
      
    </div>
  );
}