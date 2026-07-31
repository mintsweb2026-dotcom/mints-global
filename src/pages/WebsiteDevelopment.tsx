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
    "q": "What website development services does Mints Global offer?",
    "a": "Mints Global offers custom website development, WordPress development, Shopify development, eCommerce websites, and corporate website solutions."
  },
  {
    "q": "Do you build SEO-friendly websites?",
    "a": "Yes, all websites are built with SEO best practices, fast loading speed, mobile responsiveness, and optimized site structure."
  },
  {
    "q": "Can you redesign an existing website?",
    "a": "Yes, we provide website redesign services to improve performance, design, user experience, and search engine visibility."
  }
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Website Development Services",
  "provider": {
    "@type": "Organization",
    "name": "Mints Global",
    "url": "https://www.mintsglobal.ae"
  },
  "serviceType": "Website Development",
  "description": "Professional website development services in Dubai including custom websites, WordPress development, Shopify stores, eCommerce websites and business web solutions.",
  "areaServed": {
    "@type": "Country",
    "name": "United Arab Emirates"
  },
  "url": "https://www.mintsglobal.ae/software-development/website-development"
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Mints Global",
  "url": "https://www.mintsglobal.ae",
  "logo": "https://www.mintsglobal.ae/logo.png",
  "email": "info@mintsglobal.ae",
  "telephone": "+971502943916",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Bank Street Building, Bur Dubai",
    "addressLocality": "Dubai",
    "addressCountry": "AE"
  }
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
      "name": "Website Development",
      "item": "https://www.mintsglobal.ae/software-development/website-development"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What website development services does Mints Global offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mints Global offers custom website development, WordPress development, Shopify development, eCommerce websites, and corporate website solutions."
      }
    },
    {
      "@type": "Question",
      "name": "Do you build SEO-friendly websites?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all websites are built with SEO best practices, fast loading speed, mobile responsiveness, and optimized site structure."
      }
    },
    {
      "@type": "Question",
      "name": "Can you redesign an existing website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide website redesign services to improve performance, design, user experience, and search engine visibility."
      }
    }
  ]
};

export function WebsiteDevelopment() {
  return (
    <div className="w-full relative z-10 min-h-screen bg-brand-black">
      <SEO 
        title="Custom Web Design & Development in Dubai , UAE | Mints Global" 
        rawTitle={true}
        description="Need a website in Dubai? We build fast, responsive and SEO-friendly websites, WordPress sites and eCommerce solutions for businesses."
        canonical="/software-development/website-development"
        ogTitle="Website Development Company Dubai | Custom Web Design & Development UAE"
        ogDescription="Professional website development services in Dubai. Custom business websites, WordPress, Shopify, eCommerce and SEO-friendly web solutions."
        ogImage="https://www.mintsglobal.ae/images/website-development-dubai.jpg"
        twitterTitle="Website Development Company Dubai | Custom Web Design UAE"
        twitterDescription="Build high-performing websites with Mints Global. Expert WordPress, Shopify, eCommerce and custom website development services in Dubai."
        twitterImage="https://www.mintsglobal.ae/images/website-development-dubai.jpg"
      />
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-1 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-brand-white-70">
                Digital Presence
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-black mb-8 uppercase leading-[0.9] text-white">
              Website<br/>
              <span className="text-olive-500">Development.</span>
            </h1>
            <p className="text-brand-white-70 text-lg md:text-xl max-w-3xl leading-relaxed mb-12">
              Highly performant, SEO-optimized, and visually stunning corporate websites and landing pages built to convert visitors into leads.
            </p>
            
            <div className="flex flex-wrap gap-4">
               <Link to="/contact" className="bg-olive-500 text-brand-black px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-olive-400 transition-colors inline-flex items-center gap-2 relative z-20">
                 Upgrade Your Website <ArrowRight size={18} />
               </Link>
            </div>
          </motion.div>

          <div className="relative w-full aspect-[12/8] rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-olive-950 via-transparent to-transparent z-10 pointer-events-none opacity-40" />
            <SafeImage
              src="/images/website-development-dubai.webp"
              fallbackSrc="/hero.webp"
              alt="Website Development Company in Dubai Creating Custom Business Websites"
              title="Custom Website Development Services Dubai"
              width={1200}
              height={800}
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
            <h2 className="font-display text-4xl lg:text-5xl font-black uppercase mb-6 text-white">Web Services</h2>
            <p className="text-brand-white-70 text-lg max-w-3xl">We do not just build websites; we build marketing assets that act as your hardest-working sales representative.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Corporate Websites</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Professional, multi-page websites that clearly communicate your brand value, services, and corporate governance to stakeholders.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Landing Page Creation</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">High-converting, single-page sites explicitly designed for focused ad campaigns and lead generation.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Headless CMS Solutions</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Decoupled architectures using Sanity, Contentful, or Strapi to give you lightning-fast frontends with flexible management.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">WordPress Development</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Custom theme development and advanced plugin integration on the world's most popular CMS platform.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Web Animation & Interactions</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Engaging scroll animations, WebGL, and micro-interactions that elevate the user experience using Framer Motion and GSAP.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Website Audit & Optimization</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Comprehensive audits to fix slow loading speeds, broken links, and core web vital issues on your existing site.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-brand-black border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-black uppercase mb-4 text-white">Frequently Asked Questions</h2>
            <p className="text-brand-white-70 text-lg">Everything you need to know about our web development services.</p>
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
              Your website is your 24/7 salesperson. Let's build one that converts.
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