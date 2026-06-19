import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { JsonLd } from '../components/JsonLd';
import { buildServiceSchema, buildFaqSchema, buildBreadcrumbSchema } from '../lib/schema-helpers';
import { SEO } from '../components/SEO';
import { ServicesAccordion } from '../components/ServicesAccordion';

const faqs = [
  {
    "q": "Why hire a vCISO instead of a full-time CISO?",
    "a": "A vCISO provides the same high-level strategic expertise at a fraction of the cost. It is ideal for mid-sized enterprises that need boardroom-level security leadership but do not require (or cannot afford) a $200k+ full-time executive."
  },
  {
    "q": "Does your SOC operate 24/7?",
    "a": "Yes, our Managed Detection and Response (MDR) service provides true 'follow the sun' 24/7/365 coverage powered by state-of-the-art SOAR and SIEM technologies."
  },
  {
    "q": "Do you sell security software/hardware?",
    "a": "Mints Global is entirely vendor-agnostic. Our advisory services are focused solely on what is best for your security architecture, not on chasing reseller margins. We recommend tools based on merit."
  },
  {
    "q": "How do you handle reporting to the board?",
    "a": "Our vCISO team excels at translating highly technical cyber risks into clear, business-focused language, ensuring the executive board understands risk exposure, ROI on security spend, and compliance posture."
  }
];

export function ManagedAdvisory() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Cyber Security", url: "/cyber-security" },
    { name: "Managed Advisory", url: "/cyber-security/managed-advisory" }
  ]);

  return (
    <div className="w-full relative z-10 min-h-screen bg-brand-black">
      <SEO 
        title="Cybersecurity Managed Advisory Services | Mints Global" 
        description="Expert managed cybersecurity advisory services to protect your business. 24/7 monitoring, threat intelligence & compliance support from Mints Global UAE."
        keywords={["managed security advisory", "virtual CISO services", "vCISO Dubai", "strategic cyber security", "ongoing security guidance"]}
        canonical="/cyber-security/managed-advisory"
        ogTitle="Cybersecurity Managed Advisory Services | Mints Global"
        ogDescription="Expert managed cybersecurity advisory services to protect your business. 24/7 monitoring, threat intelligence, and compliance support."
        ogImage="https://www.mintsglobal.ae/images/cybersecurity-managed-advisory-og.jpg"
        ogType="website"
        twitterTitle="Cybersecurity Managed Advisory Services | Mints Global"
        twitterDescription="Expert managed cybersecurity advisory services to protect your business. 24/7 monitoring, threat intelligence, and compliance support."
        twitterImage="https://www.mintsglobal.ae/images/cybersecurity-managed-advisory-twitter.jpg"
        rawTitle={true}
      />
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex items-center gap-4 mb-6">
            <span className="px-4 py-1 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-brand-white-70">
              Strategic Guidance
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-black mb-8 uppercase leading-[0.9] text-white">
            Managed &<br/>
            <span className="text-olive-500">Advisory.</span>
          </h1>
          <p className="text-brand-white-70 text-lg md:text-xl max-w-3xl leading-relaxed mb-12">
            Access elite, boardroom-level cybersecurity leadership and 24/7 managed defense. We act as an extension of your team to oversee and execute your security strategy.
          </p>
          
          <div className="flex flex-wrap gap-4">
             <Link to="/contact" className="bg-olive-500 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-olive-400 transition-colors inline-flex items-center gap-2 relative z-20">
               Enhance Your Security <ArrowRight size={18} />
             </Link>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-olive-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-black uppercase mb-6 text-white">Advisory & Managed Services</h2>
            <p className="text-brand-white-70 text-lg max-w-3xl">Bridge the talent gap with our scalable security operations and virtual executive leadership.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Virtual CISO (vCISO)</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Fractional Chief Information Security Officer services providing strategic leadership, board reporting, and budget definition without the full-time cost.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Managed SOC (MDR)</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">24/7/365 monitoring, detection, and real-time response to threats across your endpoints, network, and cloud environment.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Security Architecture Review</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Expert, vendor-agnostic review of your IT infrastructure to ensure your security controls are properly designed to mitigate modern risks.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Third-Party Risk Management</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Assessing and auditing the security posture of your vendors and supply chain partners to prevent catastrophic third-party breaches.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Security Awareness Training</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Interactive, engaging training platforms and simulated phishing campaigns to build a resilient 'human firewall'.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">M&A Cyber Diligence</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Conducting deep technical and strategic cyber risk assessments prior to mergers and acquisitions to uncover hidden liabilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-brand-black border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-black uppercase mb-4 text-white">Frequently Asked Questions</h2>
            <p className="text-brand-white-70 text-lg">Everything you need to know about our managed advisory services.</p>
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
              Need a strategic security partner? Let our vCISOs guide your cyber maturity.
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
            <Link to="/cyber-security/offensive-security" className="text-olive-500 hover:text-white font-bold transition-colors">Offensive Security &rarr;</Link>
            <Link to="/cyber-security/incident-response" className="text-olive-500 hover:text-white font-bold transition-colors">Incident Response &rarr;</Link>
            <Link to="/cyber-security/cloud-security" className="text-olive-500 hover:text-white font-bold transition-colors">Cloud Security &rarr;</Link>
          </div>
        </div>
      </section>
      
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Mints Global",
        "url": "https://www.mintsglobal.ae",
        "logo": "https://www.mintsglobal.ae/logo.png",
        "description": "Digital Agency offering Digital Marketing, Software Development, Branding, Cybersecurity, and IT Services",
        "foundingDate": "2015",
        "telephone": "+971502943916",
        "email": "info@mintsglobal.ae",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office #315, 3rd Floor, Bank Street Building",
          "addressLocality": "Bur Dubai",
          "addressRegion": "Dubai",
          "postalCode": "",
          "addressCountry": "AE"
        },
        "sameAs": [
          "https://www.facebook.com/mintsglobal",
          "https://www.linkedin.com/company/mintsglobal",
          "https://www.instagram.com/mintsglobal"
        ]
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Cybersecurity Managed Advisory",
        "description": "Expert managed cybersecurity advisory services to protect your business",
        "provider": {
          "@type": "Organization",
          "name": "Mints Global",
          "url": "https://www.mintsglobal.ae",
          "logo": "https://www.mintsglobal.ae/logo.png",
          "telephone": "+971502943916",
          "email": "info@mintsglobal.ae",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Office #315, 3rd Floor, Bank Street Building",
            "addressLocality": "Bur Dubai",
            "addressRegion": "Dubai",
            "postalCode": "",
            "addressCountry": "AE"
          }
        },
        "areaServed": {
          "@type": "Country",
          "name": "UAE"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Managed Cybersecurity Advisory Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "24/7 Security Monitoring"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Threat Intelligence"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Compliance Support"
              }
            }
          ]
        }
      }} />
      <JsonLd data={buildFaqSchema(faqs)} />
      
      <JsonLd data={breadcrumbSchema} />
    </div>
  );
}