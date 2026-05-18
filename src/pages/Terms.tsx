import { motion } from 'motion/react';
import { SEO } from '../components/SEO';

export function Terms() {
  return (
    <div className="w-full relative z-10 min-h-screen bg-brand-black pt-32 pb-24">
      <SEO 
        title="Terms of Service | Mints Global" 
        description="The terms, rules, and guidelines governing the use of Mints Global services, website, and digital products."
        keywords={["terms and conditions", "terms of service", "Mints Global terms", "website usage terms", "legal terms"]} 
      />
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-8 uppercase text-white">
            Terms of Service
          </h1>
          <div className="prose prose-invert prose-lg max-w-none text-brand-white-70">
            
      <h2 className="text-white text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
      <p className="mb-4">By accessing and using this website, and by engaging Mints Global for any services (Software Development, Cyber Security, Digital Marketing, or otherwise), you accept and agree to be bound by the terms and provisions of this agreement. Furthermore, specific client engagements are governed by formal Master Service Agreements (MSAs) which supersede these general terms in the event of a conflict.</p>

      <h2 className="text-white text-2xl font-bold mt-8 mb-4">2. Intellectual Property Rights</h2>
      <p className="mb-4">Unless otherwise stated within a specific, signed commercial contract:</p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>All materials on this website, including text, graphics, and logos, are the intellectual property of Mints Global.</li>
        <li>Upon successful delivery and full payment for distinct development/design projects, Intellectual Property rights of the delivered source code and final assets are transferred to the client, as strictly detailed in the Statement of Work (SoW).</li>
      </ul>

      <h2 className="text-white text-2xl font-bold mt-8 mb-4">3. Confidentiality</h2>
      <p className="mb-4">Both Mints Global and the Client agree to maintain extreme confidentiality regarding proprietary business processes, trade secrets, sensitive security data, and any materials marked as confidential. Mints Global executes strict Non-Disclosure Agreements (NDAs) prior to accessing any sensitive client environments.</p>

      <h2 className="text-white text-2xl font-bold mt-8 mb-4">4. Limitation of Liability</h2>
      <p className="mb-4">While we execute highly professional cybersecurity testing and software development using enterprise best practices, Mints Global shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, use, goodwill, or other intangible losses resulting from your access to or utilization of our services.</p>

      <h2 className="text-white text-2xl font-bold mt-8 mb-4">5. Governing Law</h2>
      <p className="mb-4">These Terms shall be governed and construed in accordance with the laws of the United Arab Emirates, specifically the courts of Dubai. Any dispute arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the Dubai Courts.</p>
    
          </div>
        </motion.div>
      </div>

      {/* FAQ Section */}
      <section className="py-24 bg-brand-black border-t border-white/5 mt-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-display text-3xl font-black uppercase mb-4 text-white">Legal FAQs</h2>
            <p className="text-brand-white-70 text-lg">Common questions regarding our Terms of Service.</p>
          </div>
          <div className="space-y-8">
            
            <div>
              <h3 className="font-bold text-xl text-white mb-3">What happens if we cancel a project midway?</h3>
              <p className="text-brand-white-70 leading-relaxed">Project cancellation terms are explicitly defined in your specific Master Services Agreement (MSA). Generally, you are liable for all billable hours and infrastructure costs incurred up to the exact point of written cancellation.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl text-white mb-3">Are NDAs required before discussions?</h3>
              <p className="text-brand-white-70 leading-relaxed">We highly encourage mutual Non-Disclosure Agreements. We are happy to sign yours, or we can provide our standard Mutual NDA before any sensitive technical discussions begin.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl text-white mb-3">Who handles disputes over delivered code?</h3>
              <p className="text-brand-white-70 leading-relaxed">Disputes are handled first through our structured escalation matrix (Project Manager -&gt; Director). We implement rigid User Acceptance Testing (UAT) sign-offs at each milestone to prevent disputes upon final delivery.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}