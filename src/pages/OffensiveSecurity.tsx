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
    "q": "What is the difference between a vulnerability assessment and a penetration test?",
    "a": "A vulnerability assessment is a broad, automated scan to identify known flaws. A penetration test goes much deeper; our engineers manually try to exploit those vulnerabilities to verify the risk and chain exploits together to simulate a real breach."
  },
  {
    "q": "Will penetration testing disrupt our systems?",
    "a": "We coordinate closely with your team. We can perform testing during off-hours, and we throttle our tools to avoid causing Denial of Service (DoS). Our goal is to safely exploit, not disrupt."
  },
  {
    "q": "What do we receive at the end of the test?",
    "a": "You will receive a comprehensive report containing an executive summary, a detailed technical breakdown of every vulnerability found, proof of concept (PoC) screenshots, and step-by-step remediation guidance."
  },
  {
    "q": "How often should we perform penetration tests?",
    "a": "It is industry best practice to perform comprehensive penetration tests at least annually, or immediately following any significant changes to your IT infrastructure or application code."
  }
];

export function OffensiveSecurity() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Cyber Security", url: "/cyber-security" },
    { name: "Offensive Security", url: "/cyber-security/offensive-security" }
  ]);

  return (
    <div className="w-full relative z-10 min-h-screen bg-brand-black">
      <SEO 
        title="Offensive Security & Penetration Testing UAE | MINTS GLOBAL" 
        description="Uncover security vulnerabilities with Mints Global's offensive security services. Expert penetration testing & ethical hacking in UAE."
        keywords={["offensive security services", "penetration testing Dubai", "red teaming services", "vulnerability assessment", "ethical hacking agency"]}
        canonical="/cyber-security/offensive-security"
        ogTitle="Offensive Security Testing | Penetration Testing UAE"
        ogDescription="Uncover security vulnerabilities with Mints Global's offensive security services. Expert penetration testing, vulnerability assessment & ethical hacking."
        ogType="website"
        ogImage="https://www.mintsglobal.ae/images/offensive-security-og.jpg"
        twitterTitle="Offensive Security & Penetration Testing Services"
        twitterDescription="Strengthen your security posture with expert penetration testing & vulnerability assessments from Mints Global. UAE-based cybersecurity experts."
        twitterImage="https://www.mintsglobal.ae/images/offensive-security-twitter.jpg"
        rawTitle={true}
      />
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex items-center gap-4 mb-6">
            <span className="px-4 py-1 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-brand-white-70">
              Proactive Defense
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-black mb-8 uppercase leading-[0.9] text-white">
            Offensive<br/>
            <span className="text-olive-500">Security.</span>
          </h1>
          <p className="text-brand-white-70 text-lg md:text-xl max-w-3xl leading-relaxed mb-12">
            Identify your vulnerabilities before advanced threat actors do. We provide CREST-aligned penetration testing, Red Teaming, and vulnerability assessments.
          </p>
          
          <div className="flex flex-wrap gap-4">
             <Link to="/contact" className="bg-olive-500 text-brand-black px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-olive-400 transition-colors inline-flex items-center gap-2 relative z-20">
               Test Your Defenses <ArrowRight size={18} />
             </Link>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-olive-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-black uppercase mb-6 text-white">Testing & Simulation</h2>
            <p className="text-brand-white-70 text-lg max-w-3xl">We mimic real-world adversaries to find the weaknesses in your infrastructure, applications, and human layer.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Network Penetration Testing</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Comprehensive scanning and exploitation attempts on your external perimeter (IPs, firewalls) and internal local networks.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Web & Mobile App Pentesting</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Deep-dive assessments to uncover OWASP Top 10 vulnerabilities (SQLi, XSS, IDOR) in your custom applications and APIs.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Red Teaming Simulations</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Full-scale, objective-based assessments designed to evaluate your organization's detection and response capabilities against a simulated, stealthy adversary.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Social Engineering</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Testing the human perimeter through targeted phishing campaigns, vishing (voice phishing), and physical facility breach attempts.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Cloud Security Assessments</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Reviewing your AWS, Azure, or GCP environments for critical misconfigurations and IAM privilege escalations.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Vulnerability Management</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Continuous, automated scanning combined with expert validation to track and remediate vulnerabilities year-round.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-brand-black border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-black uppercase mb-4 text-white">Frequently Asked Questions</h2>
            <p className="text-brand-white-70 text-lg">Everything you need to know about our offensive security services.</p>
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
              Don't wait for a breach. Let our red team find the gaps before attackers do.
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
            <Link to="/cyber-security/incident-response" className="text-olive-500 hover:text-white font-bold transition-colors">Incident Response &rarr;</Link>
            <Link to="/cyber-security/cloud-security" className="text-olive-500 hover:text-white font-bold transition-colors">Cloud Security &rarr;</Link>
            <Link to="/cyber-security/ot-iot-security" className="text-olive-500 hover:text-white font-bold transition-colors">OT/IoT Security &rarr;</Link>
          </div>
        </div>
      </section>
      
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Offensive Security Testing",
        "description": "Expert penetration testing, vulnerability assessment, and ethical hacking services",
        "provider": {
          "@type": "Organization",
          "name": "Mints Global",
          "url": "https://www.mintsglobal.ae"
        },
        "serviceType": "Cybersecurity",
        "areaServed": "AE"
      }} />
      <JsonLd data={buildFaqSchema(faqs)} />
      
      <JsonLd data={breadcrumbSchema} />
    </div>
  );
}