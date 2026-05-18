import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { JsonLd } from '../components/JsonLd';
import { buildServiceSchema, buildFaqSchema, buildBreadcrumbSchema } from '../lib/schema-helpers';
import { SEO } from '../components/SEO';

const faqs = [
  {
    "q": "Do you provide the actual ISO 27001 certification?",
    "a": "No, as an advisory firm, we implement the framework and prepare you for the audit. Certification MUST be performed by an independent, accredited external auditor to maintain objective neutrality."
  },
  {
    "q": "How long does it take to achieve ISO 27001?",
    "a": "For an average mid-sized organization starting from scratch, the preparation and implementation process typically takes between 6 to 9 months before passing the stage 1 and 2 audits."
  },
  {
    "q": "Does GDPR apply to my UAE business?",
    "a": "If your business offers goods or services to residents within the European Union, or monitors their behavior (e.g., tracking cookies), you are legally required to comply with GDPR, regardless of your physical location."
  },
  {
    "q": "How much time will this take away from my IT team?",
    "a": "We handle the heavy lifting: documentation drafting, gap analyses, and roadmapping. However, we do require collaboration with your IT team to verify configurations and implement the required technical controls."
  }
];

export function ComplianceGRC() {
  const serviceSchema = buildServiceSchema({
    name: "Compliance & GRC",
    description: "Compliance doesn't have to be complex. Let's simplify your path to certification.",
    url: "/cyber-security/compliance-grc",
    serviceType: "Cyber Security"
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Cyber Security", url: "/cyber-security" },
    { name: "Compliance & GRC", url: "/cyber-security/compliance-grc" }
  ]);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="w-full relative z-10 min-h-screen bg-brand-black">
      <SEO 
        title="Compliance & GRC | Mints Global" 
        description="Turn regulatory compliance into a competitive advantage. We guide organizations through the complexities of ISO 27001, GDPR, NIS2, and local UAE mandates (NESA, ISR)."
        keywords={["NESA compliance UAE", "ISO 27001 certification", "GDPR compliance services", "cyber security GRC", "PDPL compliance Dubai"]}
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
             <Link to="/contact" className="bg-olive-500 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-olive-400 transition-colors inline-flex items-center gap-2 relative z-20">
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
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-brand-black-light border border-white/10 rounded-2xl overflow-hidden"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-bold text-lg text-white">{faq.q}</span>
                  <ChevronDown className={"text-olive-500 transition-transform duration-300 " + (openFaq === index ? 'rotate-180' : '')} size={24} />
                </button>
                <div 
                  className={"px-8 pb-6 text-brand-white-70 leading-relaxed transition-all duration-300 " + (openFaq === index ? 'block' : 'hidden')}
                >
                  {faq.a}
                </div>
              </div>
            ))}
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
      
      <JsonLd data={serviceSchema} />
      
      <JsonLd data={breadcrumbSchema} />
    </div>
  );
}