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
    "q": "How is OT security different from regular IT security?",
    "a": "In IT, the priority is Data Confidentiality. In OT, the absolute priority is Safety and Availability (uptime). A scanner that works safely in IT might crash a fragile legacy PLC causing a plant shutdown. OT security requires highly specialized, passive methodologies."
  },
  {
    "q": "Can you test our operational systems while they are running?",
    "a": "We primarily utilize entirely passive monitoring and network traffic analysis. For active testing, we require duplicate testing environments, digital twins, or strictly scheduled maintenance windows to ensure zero impact on production."
  },
  {
    "q": "What framework do you use for OT Security?",
    "a": "Our OT capability is heavily aligned with the ISA/IEC 62443 series of standards, which is the global consensus standard for industrial automation and control systems security."
  },
  {
    "q": "Do you audit the firmware on connected devices?",
    "a": "Yes. For IoT manufacturers, we extract firmware, decompile binaries, hunt for hardcoded credentials, and analyze how the device communicates with its companion cloud applications."
  }
];

export function OTIoTSecurity() {
  const serviceSchema = buildServiceSchema({
    name: "OT/IoT Security",
    description: "Your critical infrastructure needs specialized protection. Let's secure your operational tech.",
    url: "/cyber-security/ot-iot-security",
    serviceType: "Cyber Security"
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Cyber Security", url: "/cyber-security" },
    { name: "OT/IoT Security", url: "/cyber-security/ot-iot-security" }
  ]);

  return (
    <div className="w-full relative z-10 min-h-screen bg-brand-black">
      <SEO 
        title="OT & IoT Security | Mints Global" 
        description="Safeguard critical infrastructure, manufacturing plants, and smart devices. We secure the boundary where the digital world meets the physical world."
        keywords={["OT security services", "IoT security framework", "industrial control systems security", "critical infrastructure protection", "smart device security"]}
      />
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex items-center gap-4 mb-6">
            <span className="px-4 py-1 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-brand-white-70">
              Industrial Protection
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-black mb-8 uppercase leading-[0.9] text-white">
            OT & IoT<br/>
            <span className="text-olive-500">Security.</span>
          </h1>
          <p className="text-brand-white-70 text-lg md:text-xl max-w-3xl leading-relaxed mb-12">
            Safeguard critical infrastructure, manufacturing plants, and smart devices. We secure the boundary where the digital world meets the physical world.
          </p>
          
          <div className="flex flex-wrap gap-4">
             <Link to="/contact" className="bg-olive-500 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-olive-400 transition-colors inline-flex items-center gap-2 relative z-20">
               Secure Your Assets <ArrowRight size={18} />
             </Link>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-olive-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-black uppercase mb-6 text-white">Industrial & Device Security</h2>
            <p className="text-brand-white-70 text-lg max-w-3xl">Protecting SCADA systems, PLCs, and connected devices from cyber-kinetic attacks that threaten safety and operations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">OT Security Posture Assessments</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Evaluating the security of your industrial control systems (ICS) without disrupting fragile legacy operations, aligned with IEC 62443.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">IT/OT Network Segmentation</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Architecting robust boundaries and jump servers (DMZ) to ensure a breach in the corporate IT network cannot reach the physical plant.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">IoT Device Penetration Testing</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Reverse engineering device firmware, assessing hardware interfaces, and testing communication protocols (MQTT, CoAP) of smart devices.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Asset Discovery & Visibility</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Deploying passive monitoring solutions to construct a complete inventory of every connected industrial asset and detect anomalous traffic.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Industrial Incident Response</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Specialized response plans and highly trained teams ready to contain and remediate infections within highly sensitive operational environments.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">OT Security Governance</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Developing specific policies, procedures, and disaster recovery plans designed strictly around industrial safety and uptime requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-brand-black border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-black uppercase mb-4 text-white">Frequently Asked Questions</h2>
            <p className="text-brand-white-70 text-lg">Everything you need to know about our OT & IoT security services.</p>
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
              Your critical infrastructure needs specialized protection. Let's secure your operational tech.
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
      <JsonLd data={buildFaqSchema(faqs)} />
      
      <JsonLd data={breadcrumbSchema} />
    </div>
  );
}