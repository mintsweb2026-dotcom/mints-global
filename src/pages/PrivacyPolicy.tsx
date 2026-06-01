import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { JsonLd } from '../components/JsonLd';
import { buildFaqSchema } from '../lib/schema-helpers';
import { ServicesAccordion } from '../components/ServicesAccordion';

const faqs = [
  {
    "q": "Is Mints Global GDPR compliant?",
    "a": "Yes. We strictly adhere to the General Data Protection Regulation (GDPR) standards for all European citizens and apply those robust privacy standards universally across our company operations."
  },
  {
    "q": "Do you sell my data to third parties?",
    "a": "Absolutely not. Mints Global does not and will never sell your personal data to marketing agencies or third-party data brokers."
  },
  {
    "q": "Where is my data stored?",
    "a": "We utilize Tier-1 cloud providers (AWS, Azure, GCP). Data residency can be specifically mapped within the EU or UAE data centers depending on your contractual requirements."
  }
];

export function PrivacyPolicy() {
  return (
    <div className="w-full relative z-10 min-h-screen bg-brand-black pt-32 pb-24">
      <SEO 
        title="Privacy Policy | Mints Global" 
        description="Learn how Mints Global collects, uses, and protects your personal data in compliance with global privacy regulations."
        keywords={["privacy policy", "data protection policy", "Mints Global privacy", "GDPR data privacy", "information security policy"]} 
      />
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-8 uppercase text-white">
            Privacy Policy
          </h1>
          <div className="prose prose-invert prose-lg max-w-none text-brand-white-70">
            
      <h2 className="text-white text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
      <p className="mb-4">At Mints Global, we are committed to protecting the privacy and security of our clients, users, and website visitors. This Privacy Policy outlines our practices concerning the collection, use, and disclosure of personal data when you use our website, IT services, and platforms.</p>
      
      <h2 className="text-white text-2xl font-bold mt-8 mb-4">2. Data We Collect</h2>
      <p className="mb-4">We may collect personal identification information including, but not limited to:</p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li><strong className="text-white">Contact Information:</strong> Name, email address, phone number, and physical business address.</li>
        <li><strong className="text-white">Technical Data:</strong> IP address, browser type, operating system, and analytics mapping user interactions on our website.</li>
        <li><strong className="text-white">Project Data:</strong> Information specifically provided by you during the consultation and execution phases of our software development or cybersecurity engagements.</li>
      </ul>

      <h2 className="text-white text-2xl font-bold mt-8 mb-4">3. How We Use Your Data</h2>
      <p className="mb-4">Your data is strictly utilized to:</p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Provide, operate, and maintain our services.</li>
        <li>Improve, personalize, and expand our website operations.</li>
        <li>Understand and analyze how you use our digital platforms.</li>
        <li>Communicate with you, either directly or through our partners, including for customer service and project management updates.</li>
        <li>Comply with our legal and regulatory obligations, including GDPR and UAE Data Protection laws.</li>
      </ul>

      <h2 className="text-white text-2xl font-bold mt-8 mb-4">4. Data Storage and Security</h2>
      <p className="mb-4">We implement rigid, industry-standard technical and organizational security measures to protect your personal data against unauthorized access, destruction, or alteration. Data is stored on highly secure, encrypted cloud servers specifically configured by our internal cybersecurity teams.</p>

      <h2 className="text-white text-2xl font-bold mt-8 mb-4">5. Your Data Protection Rights</h2>
      <p className="mb-4">Depending on your location, you may have specific rights regarding your personal data:</p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>The right to access, update, or delete the information we have on you.</li>
        <li>The right of rectification if your information is inaccurate.</li>
        <li>The right to object to or restrict processing of your personal data.</li>
        <li>The right to data portability.</li>
      </ul>
      <p className="mb-4">To exercise any of these rights, please contact our compliance team at privacy@mintsglobal.ae.</p>
    
          </div>
        </motion.div>
      </div>

      {/* FAQ Section */}
      <section className="py-24 bg-brand-black border-t border-white/5 mt-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-display text-3xl font-black uppercase mb-4 text-white">Legal FAQs</h2>
            <p className="text-brand-white-70 text-lg">Common questions regarding our Privacy Policy.</p>
          </div>
          <div className="space-y-4">
            <ServicesAccordion items={faqs.map(f => ({ title: f.q, content: f.a }))} />
          </div>
        </div>
      </section>
      
      <JsonLd data={buildFaqSchema(faqs)} />
    </div>
  );
}