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
    "q": "Can Mints Global deliver cyber security services remotely across Europe?",
    "a": "Yes. Our cloud audits, external penetration tests, and vCISO operations are performed seamlessly across borders. For critical internal network testing or incident response, we can deploy engineers on-site within Europe."
  },
  {
    "q": "Are your services aligned with GDPR and NIS2?",
    "a": "Absolute alignment is our foundation. Our GRC consultants specialize in mapping technical controls directly back to GDPR Articles and the essential requirements of the NIS2 Directive."
  },
  {
    "q": "Do you work with businesses that have no in-house security team?",
    "a": "Yes. Our Managed Advisory and vCISO services are specifically designed to act as your fully externalized security department, guiding your IT team tactically."
  },
  {
    "q": "What certifications do your team hold?",
    "a": "Our offensive and defensive engineers hold globally recognized, elite certifications from bodies including CREST, OSCP, CISSP, CISM, and highly specialized cloud architecture credentials."
  }
];

export function CyberSecurityEurope() {

  return (
    <div className="w-full relative z-10 min-h-screen bg-brand-black">
      <SEO 
        title="Cyber Security Services Europe | MINTS Global" 
        rawTitle={true}
        description="MINTS Global provides cyber security services in Europe including threat protection, cloud security, testing, and compliance solutions." 
        canonical="/europe-services/cyber-security"
        ogTitle="Cyber Security Services | Mints Global"
        ogDescription="Protect your business with expert cyber security services in UAE. Incident response, threat detection, and managed security solutions."
        ogType="website"
        ogImage="https://www.mintsglobal.ae/images/cyber-security-og.jpg"
        twitterTitle="Cyber Security Services | Mints Global"
        twitterDescription="Protect your business with expert cyber security services in UAE. Incident response, threat detection, and managed security solutions."
        twitterImage="https://www.mintsglobal.ae/images/cyber-security-twitter.jpg"
        twitterSite="@MintsBrandsDXB"
        twitterCreator="@MintsBrandsDXB"
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
            CYBER SECURITY<br/>
            <span className="text-olive-500">IN EUROPE.</span>
          </h1>
          <p className="text-brand-white-70 text-lg md:text-xl max-w-3xl leading-relaxed mb-12">
            Protecting European businesses from modern cyber threats — end to end. We provide advanced threat defense, red teaming, and strategic advisory.
          </p>
          
          <div className="flex flex-wrap gap-4">
             <Link to="/contact" className="bg-olive-500 text-brand-black px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-olive-400 transition-colors inline-flex items-center gap-2 relative z-20">
               Talk to our Europe Team <ArrowRight size={18} />
             </Link>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-olive-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-black uppercase mb-6 text-white">Our Cyber Security In Europe</h2>
            <p className="text-brand-white-70 text-lg max-w-3xl">From proactively testing your defences to responding to live incidents, managing compliance, and training your people — we cover every layer of your security posture.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Offensive Security</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Simulating real-world cyberattacks against your systems to expose weaknesses before threat actors exploit them. Delivered with detailed remediation maps.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Incident Response / DFIR</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">When a breach happens, every hour matters. We mobilize quickly to contain the threat and conduct deep digital forensics.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Cloud Security</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Assessing and hardening your AWS, Azure, and Google Cloud environments against misconfigurations and advanced persistence.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Compliance / GRC</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Navigating European regulatory requirements effortlessly. We help you achieve and maintain compliance with GDPR, NIS2, and ISO 27001.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Managed Security</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Providing access to senior cyber security expertise on a flexible basis, including Virtual CISO services and continuous monitoring architectures.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">OT / IoT Security</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Specialized evaluations of Operational Technology environments to prevent cyber-kinetic attacks against European manufacturing and utilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-brand-black border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-black uppercase mb-4 text-white">Frequently Asked Questions</h2>
            <p className="text-brand-white-70 text-lg">Everything you need to know about our cyber security services.</p>
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
              Protect your European enterprise against sophisticated threats with proactive, intelligence-led defense strategies.
            </p>
            <Link to="/contact" className="bg-white text-olive-950 px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-olive-500 hover:text-white transition-all shadow-xl block w-fit mx-auto">
              Contact Us Today
            </Link>
         </div>
      </section>
      <JsonLd data={buildFaqSchema(faqs)} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Cyber Security Services",
        "description": "Expert cyber security services including incident response, threat detection, and managed security solutions",
        "url": "https://www.mintsglobal.ae/europe-services/cyber-security",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Mints Global",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Office #315, 3rd Floor, Bank Street Building",
            "addressLocality": "Bur Dubai",
            "addressRegion": "Dubai",
            "postalCode": "00000",
            "addressCountry": "AE"
          },
          "telephone": "+971502943916",
          "email": "info@mintsglobal.ae",
          "url": "https://www.mintsglobal.ae"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Cyber Security Services",
          "itemListElement": [
            { "@type": "Offer", "name": "Incident Response Services" },
            { "@type": "Offer", "name": "Managed Security Services" },
            { "@type": "Offer", "name": "Threat Detection & Assessment" },
            { "@type": "Offer", "name": "Compliance & Security Audit" }
          ]
        },
        "areaServed": ["AE", "EU"],
        "serviceType": "Cyber Security",
        "image": "https://www.mintsglobal.ae/images/cyber-security-service.jpg"
      }} />
      <JsonLd data={{
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
            "name": "Services",
            "item": "https://www.mintsglobal.ae/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Cyber Security",
            "item": "https://www.mintsglobal.ae/europe-services/cyber-security"
          }
        ]
      }} />

    </div>
  );
}