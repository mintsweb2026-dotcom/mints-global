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
    "q": "Why should we choose a custom ERP over standard software?",
    "a": "Standard ERPs force you to adapt your established business processes to their software. A custom or highly tailored ERP adapts to you, providing exactly the features you need without bloated, unnecessary modules."
  },
  {
    "q": "How long does ERP implementation take?",
    "a": "ERP deployment is a major business transformation. Process mapping, development, testing, and training typically range from 6 to 12 months, depending on organizational complexity."
  },
  {
    "q": "Will the ERP integrate with our CRM?",
    "a": "Yes, integrating your ERP with your CRM (like Salesforce or HubSpot) is highly recommended and part of our core offering to ensure seamless data flow between sales and operations."
  },
  {
    "q": "How do you handle employee training?",
    "a": "We don't just hand over the login details. We provide comprehensive change management, extensive user documentation, and hands-on training sessions for your department heads."
  }
];

export function ERPSolutions() {
  const serviceSchema = buildServiceSchema({
    name: "ERP Solutions",
    description: "Fragmented systems are costing you time. Let's architect your single source of truth.",
    url: "/software-development/erp-solutions",
    serviceType: "Software Development"
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Software Development", url: "/software-development" },
    { name: "ERP Solutions", url: "/software-development/erp-solutions" }
  ]);

  return (
    <div className="w-full relative z-10 min-h-screen bg-brand-black">
      <SEO
        title="ERP Solutions | Mints Global"
        description="Unify your business operations. We customize, integrate, and deploy Enterprise Resource Planning systems to give you total control over your resources, finance, and supply chain."
        keywords={["ERP development company", "custom ERP solutions", "enterprise resource planning software", "business process automation", "ERP integration"]}
      />
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">


        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex items-center gap-4 mb-6">
            <span className="px-4 py-1 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-brand-white-70">
              Business Intelligence
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-black mb-8 uppercase leading-[0.9] text-white">
            ERP<br />
            <span className="text-olive-500">Solutions.</span>
          </h1>
          <p className="text-brand-white-70 text-lg md:text-xl max-w-3xl leading-relaxed mb-12">
            Unify your business operations. We customize, integrate, and deploy Enterprise Resource Planning systems to give you total control over your resources, finance, and supply chain.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="bg-olive-500 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-olive-400 transition-colors inline-flex items-center gap-2 relative z-20">
              Streamline Operations <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-olive-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-black uppercase mb-6 text-white">ERP Capabilities</h2>
            <p className="text-brand-white-70 text-lg max-w-3xl">Transition away from disconnected spreadsheets into a single source of truth for your entire enterprise.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Custom ERP Development</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Building from the ground up to perfectly map your unique, complex operational workflows when off-the-shelf software fails.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">System Integration</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Connecting your standalone accounting, HR, supply chain, and inventory systems into one unified data lake.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Odoo & ERPNext Implementation</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Expert setup, customization, and deployment of open-source ERP systems tailored for your business.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Supply Chain & Inventory Management</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Real-time tracking of assets, stock levels, procurement flows, and logistics across multiple warehouses.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Finance & Accounting Modules</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Automated billing, invoicing, payroll integration, and comprehensive financial reporting complying with regional tax laws.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Data Migration</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Securely transferring years of disjointed historical data from your old systems into your new ERP environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-brand-black border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-black uppercase mb-4 text-white">Frequently Asked Questions</h2>
            <p className="text-brand-white-70 text-lg">Everything you need to know about our ERP services.</p>
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
            Fragmented systems are costing you time. Let's architect your single source of truth.
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
            <Link to="/software-development/web-apps" className="text-olive-500 hover:text-white font-bold transition-colors">Web Apps &rarr;</Link>
            <Link to="/software-development/mobile-apps" className="text-olive-500 hover:text-white font-bold transition-colors">Mobile Apps &rarr;</Link>
            <Link to="/software-development/website-development" className="text-olive-500 hover:text-white font-bold transition-colors">Website Development &rarr;</Link>
          </div>
        </div>
      </section>

      <JsonLd data={serviceSchema} />
      <JsonLd data={buildFaqSchema(faqs)} />

      <JsonLd data={breadcrumbSchema} />
    </div>
  );
}