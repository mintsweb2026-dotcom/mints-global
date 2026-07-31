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
    "q": "What is GRC and why is it important?",
    "a": "GRC stands for Governance, Risk, and Compliance. It is essential for organizations to manage regulatory requirements, mitigate risks, and maintain effective governance frameworks."
  },
  {
    "q": "How can GRC solutions help our enterprise?",
    "a": "Our GRC solutions streamline compliance processes, reduce risk exposure, enhance governance practices, and ensure regulatory adherence across your organization."
  }
];

export function ComplianceGRC() {
  return (
    <div className="w-full relative z-10 min-h-screen bg-brand-black">
      <SEO 
        title="Compliance Management & GRC Solutions Dubai | Mints Global" 
        description="Implement comprehensive compliance and GRC solutions. Manage enterprise risk, governance, and regulatory requirements with expert-led strategies."
        keywords={["NESA compliance UAE", "ISO 27001 certification", "GDPR compliance services", "cyber security GRC", "PDPL compliance Dubai"]}
        canonical="/cyber-security/compliance-grc"
        ogTitle="Compliance & GRC Solutions | Enterprise Risk Management"
        ogDescription="Implement comprehensive compliance and GRC solutions. Manage enterprise risk, governance, and regulatory requirements with expert-led strategies."
        ogImage="https://www.mintsglobal.ae/images/grc-governance-framework.jpg"
        ogType="website"
        twitterTitle="Compliance & GRC Solutions | Enterprise Risk Management"
        twitterDescription="Implement comprehensive compliance and GRC solutions. Manage enterprise risk, governance, and regulatory requirements with expert-led strategies."
        twitterImage="https://www.mintsglobal.ae/images/grc-governance-framework.jpg"
        rawTitle={true}
      />
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex items-center gap-4 mb-6">
            <span className="px-4 py-1 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-brand-white-70">
              Framework Alignment
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-black mb-8 uppercase leading-[0.9] text-white">
            Compliance<br/>
            <span className="text-olive-500">& GRC.</span>
          </h1>
          <p className="text-brand-white-70 text-lg md:text-xl max-w-3xl leading-relaxed mb-12">
            Turn regulatory compliance into a competitive advantage. We guide organizations through the complexities of ISO 27001, GDPR, NIS2, and local UAE mandates (NESA, ISR).
          </p>
          
          <div className="flex flex-wrap gap-4">
             <Link to="/contact" className="bg-olive-500 text-brand-black px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-olive-400 transition-colors inline-flex items-center gap-2 relative z-20">
               Achieve Compliance <ArrowRight size={18} />
             </Link>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-olive-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-black uppercase mb-6 text-white">Governance, Risk & Compliance</h2>
            <p className="text-brand-white-70 text-lg max-w-3xl">We simplify the path to certification and ensure you meet stringent legal requirements across all jurisdictions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">ISO/IEC 27001 readiness</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">End-to-end guidance to establish, implement, and operate an Information Security Management System (ISMS) ready for certification.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">GDPR & Data Privacy</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Comprehensive data mapping, privacy impact assessments (DPIA), and implementation of controls to meet European data protection laws.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">UAE Regulations (NESA / ISR)</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Tailored alignment and gap analyses for critical UAE national frameworks, ensuring government entities and contractors remain compliant.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">NIS2 Directive Alignment</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Assisting European critical infrastructure and essential entities in meeting the strict cybersecurity and reporting requirements of NIS2.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Risk Assessments</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Formal methodology-driven identification, quantification, and treatment planning for cyber risks facing your operational capabilities.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Policy & Procedure Drafting</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Developing clear, comprehensive, and legally sound security policies, acceptable use guidelines, and incident response plans.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-brand-black border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-black uppercase mb-4 text-white">Frequently Asked Questions</h2>
            <p className="text-brand-white-70 text-lg">Everything you need to know about our compliance services.</p>
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
              Compliance doesn't have to be complex. Let's simplify your path to certification.
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
        "description": "Leading digital agency providing compliance and GRC solutions",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office #315, 3rd Floor, Bank Street Building",
          "addressLocality": "Bur Dubai",
          "addressRegion": "Dubai",
          "postalCode": "",
          "addressCountry": "AE"
        },
        "telephone": "+971502943916",
        "email": "info@mintsglobal.ae",
        "sameAs": [
          "https://www.facebook.com/mintsglobal",
          "https://www.linkedin.com/company/mints-global",
          "https://twitter.com/MintsBrandsDXB",
          "https://www.instagram.com/mintsglobal"
        ]
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Compliance & GRC Solutions",
        "description": "Comprehensive governance, risk, and compliance management solutions for enterprise organizations",
        "provider": {
          "@type": "Organization",
          "name": "Mints Global",
          "url": "https://www.mintsglobal.ae",
          "telephone": "+971502943916"
        },
        "areaServed": ["AE", "UAE", "Middle East"],
        "hasOfferingDescription": "GRC Strategy & Assessment, Risk Management, Regulatory Compliance, Governance Framework, Compliance Audit, Internal Controls"
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
            "item": "https://www.mintsglobal.ae/cyber-security"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Compliance & GRC",
            "item": "https://www.mintsglobal.ae/cyber-security/compliance-grc"
          }
        ]
      }} />
      <JsonLd data={buildFaqSchema(faqs)} />
    </div>
  );
}