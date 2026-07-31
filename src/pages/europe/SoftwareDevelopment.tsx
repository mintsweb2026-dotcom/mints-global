import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { SEO } from '../../components/SEO';
import { ServicesAccordion } from '../../components/ServicesAccordion';
import { JsonLd } from '../../components/JsonLd';
import { buildFaqSchema } from '../../lib/schema-helpers';

const faqs = [
  {
    "q": "Why choose a Dubai-based team for European software development?",
    "a": "Mints Global offers European businesses cost-efficient development capacity with strong English-language communication, overlapping working hours with most EU time zones, and enterprise-grade delivery standards."
  },
  {
    "q": "What types of software development services does Mints Global offer?",
    "a": "Services include custom software development, enterprise application development, dedicated development team augmentation, and full-cycle product engineering for European clients."
  },
  {
    "q": "How does pricing compare to hiring a European development agency?",
    "a": "Mints Global typically offers more competitive rates than Western European agencies while maintaining enterprise-grade quality, similar to the value positioning of nearshore and offshore development hubs."
  }
];

export function SoftwareDevelopmentEurope() {

  return (
    <div className="w-full relative z-10 min-h-screen bg-brand-black">
      <SEO 
        title="Software Development Services for Europe | Mints Global" 
        description="Scale your software roadmap with Mints Global's European-focused development team. Custom builds, enterprise apps & dedicated resourcing." 
        canonical="/europe-services/software-development"
        ogTitle="Software Development Services for Europe | Mints Global"
        ogDescription="Partner with Mints Global for custom software development built for European businesses. Dedicated teams, enterprise-grade delivery & transparent pricing."
        ogImage="https://www.mintsglobal.ae/images/og/software-development-europe.jpg"
        ogType="website"
        twitterTitle="Software Development Services for Europe | Mints Global"
        twitterDescription="Custom software development & dedicated teams for European businesses. Enterprise-grade delivery, transparent pricing. Get a free quote from Mints Global."
        twitterImage="https://www.mintsglobal.ae/images/og/software-development-europe.jpg"
      />
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex items-center gap-4 mb-6">
            <span className="px-4 py-1 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-brand-white-70">
              European Market Focus
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-black mb-8 uppercase leading-[0.9] text-white">
            SOFTWARE DEVELOPMENT<br/>
            <span className="text-olive-500">IN EUROPE.</span>
          </h1>
          <p className="text-brand-white-70 text-lg md:text-xl max-w-3xl leading-relaxed mb-12">
            Custom software, powerful applications, and scalable digital solutions — built for European businesses.
          </p>
          
          <div className="flex flex-wrap gap-4">
             <Link to="/contact" className="bg-olive-500 text-brand-black px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-olive-400 transition-colors inline-flex items-center gap-2 relative z-20">
               Start The Conversation <ArrowRight size={18} />
             </Link>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-olive-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-black uppercase mb-6 text-white">Our Services In Europe</h2>
            <p className="text-brand-white-70 text-lg max-w-3xl">We offer a complete range of software development services. Each service below is available as a standalone engagement or as part of a broader digital transformation project.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Mobile Application Development</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Your customers live on their phones. We build fast, intuitive, and reliable mobile applications for iOS and Android that deliver outstanding user experiences and drive real business results.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Web Application Development</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">A web application is more than a website — it is a digital product that your users log into, interact with, and rely on daily. We build scalable, secure, and high-performing web applications tailored to your business logic.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Website Development</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Your website is your most important marketing asset. We build websites that look exceptional, load fast, rank on Google, and convert visitors into customers.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">ERP Development</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Running your business on disconnected spreadsheets and siloed software is costly. We implement solutions that unify your operations — finance, HR, inventory, procurement — into a single platform.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">CRM Development</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Your relationships with customers are your most valuable business asset. We develop and customise CRM systems that help your sales, marketing, and support teams manage every customer interaction.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">E-Commerce Solutions</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">E-commerce in Europe is a competitive, high-stakes arena. Your online store needs to be fast, secure, localised for European buyers, and built to convert.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-brand-black border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-black uppercase mb-4 text-white">Frequently Asked Questions</h2>
            <p className="text-brand-white-70 text-lg">Everything you need to know about our software development services.</p>
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
              Architect resilient, scalable software systems that accelerate your European digital transformation.
            </p>
            <Link to="/contact" className="bg-white text-olive-950 px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-olive-500 hover:text-white transition-all shadow-xl block w-fit mx-auto">
              Contact Us Today
            </Link>
         </div>
      </section>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Software Development",
        "name": "Software Development Services for Europe",
        "provider": {
          "@type": "Organization",
          "name": "Mints Global",
          "url": "https://www.mintsglobal.ae",
          "logo": "https://www.mintsglobal.ae/images/logo.png",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Dubai",
            "addressCountry": "AE"
          }
        },
        "areaServed": {
          "@type": "Place",
          "name": "Europe"
        },
        "audience": {
          "@type": "BusinessAudience",
          "audienceType": "European businesses and enterprises"
        },
        "description": "Custom software development, enterprise application development, and dedicated development teams for European businesses, delivered by Mints Global from Dubai, UAE.",
        "url": "https://www.mintsglobal.ae/europe-services/software-development"
      }} />
      <JsonLd data={{
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
            "name": "Europe Services",
            "item": "https://www.mintsglobal.ae/europe-services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Software Development",
            "item": "https://www.mintsglobal.ae/europe-services/software-development"
          }
        ]
      }} />
      <JsonLd data={buildFaqSchema(faqs)} />

    </div>
  );
}