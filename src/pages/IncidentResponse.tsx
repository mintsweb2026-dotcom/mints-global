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
    "q": "Do you offer an SLA for Incident Response?",
    "a": "Yes, for clients on an Incident Response Retainer, we offer strict SLAs guaranteeing remote intervention within 1 hour and on-site support if necessary."
  },
  {
    "q": "We think we've been breached right now. What should we do?",
    "a": "Do not turn off or reboot the affected machines (this destroys forensic evidence in RAM). Disconnect the machine from the network (unplug the ethernet cable or disable Wi-Fi) and contact our emergency hotline immediately."
  },
  {
    "q": "Can you guarantee recovery from ransomware?",
    "a": "No reputable firm can guarantee 100% data recovery without viable backups. However, we maximize the chances of recovery through negotiation, finding flaws in the attacker's encryption, and expert system restoration."
  },
  {
    "q": "How does an Incident Response Retainer work?",
    "a": "You pay a baseline fee to ensure our team is familiar with your environment and ready to deploy instantly. Retainer hours can often be repurposed for proactive services (like table-top exercises or pentesting) if no incident occurs during the year."
  }
];

export function IncidentResponse() {
  const serviceSchema = buildServiceSchema({
    name: "Incident Response",
    description: "Under attack? Our rapid response team is ready to contain and recover.",
    url: "/cyber-security/incident-response",
    serviceType: "Cyber Security"
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Cyber Security", url: "/cyber-security" },
    { name: "Incident Response", url: "/cyber-security/incident-response" }
  ]);

  return (
    <div className="w-full relative z-10 min-h-screen bg-brand-black">
      <SEO 
        title="Incident Response & DFIR | Mints Global" 
        description="When a breach occurs, every minute matters. Our Digital Forensics and Incident Response (DFIR) team is available 24/7 to contain, eradicate, and recover from cyberattacks."
        keywords={["incident response services", "cyber breach remediation", "digital forensics", "emergency cyber response Dubai", "active threat containment"]}
      />
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex items-center gap-4 mb-6">
            <span className="px-4 py-1 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-brand-white-70">
              Crisis Management
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-black mb-8 uppercase leading-[0.9] text-white">
            Incident<br/>
            <span className="text-olive-500">Response.</span>
          </h1>
          <p className="text-brand-white-70 text-lg md:text-xl max-w-3xl leading-relaxed mb-12">
            When a breach occurs, every minute matters. Our Digital Forensics and Incident Response (DFIR) team is available 24/7 to contain, eradicate, and recover from cyberattacks.
          </p>
          
          <div className="flex flex-wrap gap-4">
             <Link to="/contact" className="bg-olive-500 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-olive-400 transition-colors inline-flex items-center gap-2 relative z-20">
               Get Emergency Help <ArrowRight size={18} />
             </Link>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-olive-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-black uppercase mb-6 text-white">DFIR Capabilities</h2>
            <p className="text-brand-white-70 text-lg max-w-3xl">Rapid mobilization, expert investigation, and strategic recovery to minimize business impact during a cyber crisis.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Emergency Breach Response</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Immediate remote or on-site deployment to stop the bleeding, isolate infected systems, and secure your network against active attackers.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Ransomware Negotiation & Recovery</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Expert guidance during ransomware incidents, including secure communication with threat actors, decryption assistance, and complete systems rebuild.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Digital Forensics</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Deep forensic imaging and analysis of memory, disk, and network logs to determine patient zero, lateral movement, and data exfiltration.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Malware Reverse Engineering</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Dissecting custom or evasive malware strains found in your environment to understand their capabilities and generate exact Indicators of Compromise (IoCs).</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Post-Incident Reporting</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Providing legally sound, highly detailed reports that can be used for regulatory compliance, law enforcement collaboration, and insurance claims.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Compromise Assessments</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Proactive, specialized hunting across your environment to find stealthy threat actors that have bypassed your existing security controls.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-brand-black border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-black uppercase mb-4 text-white">Frequently Asked Questions</h2>
            <p className="text-brand-white-70 text-lg">Everything you need to know about our incident response services.</p>
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
              Under attack? Our rapid response team is ready to contain and recover.
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
            <Link to="/cyber-security/cloud-security" className="text-olive-500 hover:text-white font-bold transition-colors">Cloud Security &rarr;</Link>
            <Link to="/cyber-security/ot-iot-security" className="text-olive-500 hover:text-white font-bold transition-colors">OT/IoT Security &rarr;</Link>
          </div>
        </div>
      </section>
      
      <JsonLd data={serviceSchema} />
      <JsonLd data={buildFaqSchema(faqs)} />
      
      <JsonLd data={breadcrumbSchema} />
    </div>
  );
}