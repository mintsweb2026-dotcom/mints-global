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
    "q": "What is cloud security?",
    "a": "Cloud security encompasses the policies, controls, and technologies used to protect data, applications, and infrastructure in cloud environments."
  },
  {
    "q": "Which cloud platforms do you support?",
    "a": "We provide security solutions for Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP), and hybrid/private cloud environments."
  }
];

export function CloudSecurity() {
  return (
    <div className="w-full relative z-10 min-h-screen bg-brand-black">
      <SEO 
        title="Cloud Security Services in Dubai | Mints Global" 
        description="Expert cloud security solutions protecting your data across AWS, Azure & private clouds. Compliant, scalable protection from Mints Global."
        keywords={["cloud security auditing", "AWS security posture", "Azure security configuration", "Google Cloud security", "cloud misconfiguration prevention"]}
        canonical="/cyber-security/cloud-security"
        ogTitle="Cloud Security Services in Dubai | Mints Global"
        ogDescription="Expert cloud security solutions protecting your data across AWS, Azure & private clouds. Compliant, scalable protection from Mints Global."
        ogType="website"
        ogImage="https://www.mintsglobal.ae/images/cloud-security-banner-1200x630.jpg"
        twitterTitle="Cloud Security Services in Dubai | Mints Global"
        twitterDescription="Expert cloud security solutions protecting your data across AWS, Azure & private clouds. Compliant, scalable protection from Mints Global."
        twitterImage="https://www.mintsglobal.ae/images/cloud-security-banner-1200x630.jpg"
        rawTitle={true}
      />
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex items-center gap-4 mb-6">
            <span className="px-4 py-1 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-brand-white-70">
              Cloud Native Protection
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-black mb-8 uppercase leading-[0.9] text-white">
            Cloud<br/>
            <span className="text-olive-500">Security.</span>
          </h1>
          <p className="text-brand-white-70 text-lg md:text-xl max-w-3xl leading-relaxed mb-12">
            Cloud misconfiguration is the leading cause of data breaches. We secure your AWS, Azure, and Google Cloud environments, ensuring your infrastructure is resilient, compliant, and correctly architected.
          </p>
          
          <div className="flex flex-wrap gap-4">
             <Link to="/contact" className="bg-olive-500 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-olive-400 transition-colors inline-flex items-center gap-2 relative z-20">
               Secure Your Cloud <ArrowRight size={18} />
             </Link>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-olive-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-black uppercase mb-6 text-white">Cloud Protection Services</h2>
            <p className="text-brand-white-70 text-lg max-w-3xl">Comprehensive visibility, configuration hardening, and threat protection for your entire cloud journey.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Cloud Security Assessments</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Deep-dive reviews of your cloud architecture against CIS foundations benchmarks and vendor best practices to uncover critical misconfigurations.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Identity & Access Management (IAM)</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Implementing Principle of Least Privilege (PoLP), strict MFA, and auditing permissions to prevent privilege escalation.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Container & Kubernetes Security</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Securing your microservices architecture, scanning Docker images for vulnerabilities, and hardening your K8s clusters.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Cloud Security Posture Management (CSPM)</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Setting up automated, continuous scanning tools to alert you immediately if a developer spins up an unprotected asset.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">DevSecOps Integration</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Embedding security testing (SAST/DAST) directly into your CI/CD pipelines so code is verified before it ever reaches production.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Data Protection & Encryption</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Ensuring sensitive data is encrypted horizontally (at rest and in transit) using robust Key Management Services (KMS).</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-brand-black border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-black uppercase mb-4 text-white">Frequently Asked Questions</h2>
            <p className="text-brand-white-70 text-lg">Everything you need to know about our cloud security services.</p>
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
              Your cloud is only as safe as its weakest misconfiguration. Let's harden it.
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
            <Link to="/cyber-security/ot-iot-security" className="text-olive-500 hover:text-white font-bold transition-colors">OT/IoT Security &rarr;</Link>
          </div>
        </div>
      </section>
      
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Cloud Security Services",
        "description": "Expert cloud security solutions protecting your data across AWS, Azure & private clouds with enterprise-grade encryption, threat detection, and compliance.",
        "provider": {
          "@type": "Organization",
          "name": "Mints Global",
          "url": "https://www.mintsglobal.ae",
          "logo": "https://www.mintsglobal.ae/images/logo.png",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Office #315, 3rd Floor, Bank Street Building",
            "addressLocality": "Bur Dubai",
            "addressCountry": "AE"
          }
        },
        "serviceType": "Cloud Security",
        "areaServed": "UAE, Middle East",
        "hasOfferingType": "B2B",
        "availableLanguage": "en"
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Mints Global",
        "url": "https://www.mintsglobal.ae",
        "telephone": "+971502943916",
        "email": "info@mintsglobal.ae",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office #315, 3rd Floor, Bank Street Building",
          "addressLocality": "Bur Dubai",
          "postalCode": "00000",
          "addressCountry": "AE"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        },
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": "25.2048, 55.2708",
          "geoRadius": "500000 m"
        }
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
            "name": "Cybersecurity",
            "item": "https://www.mintsglobal.ae/cyber-security"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Cloud Security",
            "item": "https://www.mintsglobal.ae/cyber-security/cloud-security"
          }
        ]
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }} />
    </div>
  );
}