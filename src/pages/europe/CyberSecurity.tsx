import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { SEO } from '../../components/SEO';

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
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="w-full relative z-10 min-h-screen bg-brand-black">
      <SEO 
        title="Cyber Security Services in Europe | Mints Global" 
        description="Protecting European businesses from modern cyber threats — end to end. We provide advanced threat defense, red teaming, and strategic advisory." 
        keywords={["cyber security Europe", "penetration testing Europe", "GDPR compliance consulting", "ISO 27001 Europe", "incident response Europe"]}
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
             <Link to="/contact" className="bg-olive-500 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-olive-400 transition-colors inline-flex items-center gap-2 relative z-20">
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
              Protect your European enterprise against sophisticated threats with proactive, intelligence-led defense strategies.
            </p>
            <Link to="/contact" className="bg-white text-olive-950 px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-olive-500 hover:text-white transition-all shadow-xl block w-fit mx-auto">
              Contact Us Today
            </Link>
         </div>
      </section>
    </div>
  );
}