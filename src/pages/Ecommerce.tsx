import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { JsonLd } from '../components/JsonLd';
import { buildServiceSchema, buildFaqSchema, buildBreadcrumbSchema } from '../lib/schema-helpers';
import { SEO } from '../components/SEO';

const faqs = [
  {
    "q": "Which e-commerce platform is right for me?",
    "a": "If you prioritize ease-of-use and fast deployment, Shopify is excellent. If you need complete control over the backend, complex product variations, and no monthly fees, WooCommerce is better. For vast, enterprise-grade scale, we recommend Headless solutions."
  },
  {
    "q": "Do you integrate with local shipping providers?",
    "a": "Yes. We regularly integrate with regional shipping carriers, fulfillment centers, and aggregators (like Aramex or DHL) to automate shipping cost calculation and waybill generation."
  },
  {
    "q": "Can the store support multiple languages?",
    "a": "Absolutely. We build robust multilingual architectures enabling your store to serve native content—such as Right-To-Left (RTL) Arabic alongside English—from a single dashboard."
  },
  {
    "q": "Will our customer data be secure?",
    "a": "Yes. We adhere to PCI-DSS compliance standards. Credit card data is never stored on your servers, and all transaction data is routed through highly encrypted, compliant payment gateways."
  }
];

export function Ecommerce() {
  const serviceSchema = buildServiceSchema({
    name: "E-Commerce",
    description: "Ready to turn visitors into buyers? Let's build your digital storefront.",
    url: "/software-development/ecommerce",
    serviceType: "Software Development"
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Software Development", url: "/software-development" },
    { name: "E-Commerce", url: "/software-development/ecommerce" }
  ]);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="w-full relative z-10 min-h-screen bg-brand-black">
      <SEO 
        title="E-Commerce Development | Mints Global" 
        description="Launch powerful, high-converting online stores. We specialize in Shopify, WooCommerce, and massive custom headless commerce solutions that drive global sales."
        keywords={["ecommerce development agency", "custom ecommerce platforms", "scalable ecommerce solutions", "B2B ecommerce development", "high converting ecommerce"]}
      />
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex items-center gap-4 mb-6">
            <span className="px-4 py-1 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-brand-white-70">
              Digital Retail
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-black mb-8 uppercase leading-[0.9] text-white">
            E-Commerce<br/>
            <span className="text-olive-500">Development.</span>
          </h1>
          <p className="text-brand-white-70 text-lg md:text-xl max-w-3xl leading-relaxed mb-12">
            Launch powerful, high-converting online stores. We specialize in Shopify, WooCommerce, and massive custom headless commerce solutions that drive global sales.
          </p>
          
          <div className="flex flex-wrap gap-4">
             <Link to="/contact" className="bg-olive-500 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-olive-400 transition-colors inline-flex items-center gap-2 relative z-20">
               Start Selling Online <ArrowRight size={18} />
             </Link>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-olive-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-black uppercase mb-6 text-white">E-Commerce Capabilities</h2>
            <p className="text-brand-white-70 text-lg max-w-3xl">We build secure, scalable retail experiences that turn casual browsers into loyal customers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Shopify & Shopify Plus</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Rapid deployment of beautiful, high-performing commerce stores utilizing the Shopify ecosystem and custom Liquid development.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">WooCommerce Development</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Flexible, deeply customizable enterprise e-commerce built on WordPress, offering total control and ownership.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Headless Commerce</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Decoupling the frontend (Next.js/React) from the backend (Shopify/Magento) for blazing fast speeds and limitless omnichannel UX.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Payment Gateway Integration</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Secure implementation of local and global gateways (Stripe, PayPal, Payfort, Checkout.com) with multi-currency support.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">B2B Wholesale Portals</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Secure portals for your distributors and B2B clients featuring custom tier pricing, bulk ordering, and credit terms.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Conversion Rate Optimization (CRO)</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Analyzing checkout flows, addressing cart abandonment, and optimizing UX to maximize your revenue per visitor.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-brand-black border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-black uppercase mb-4 text-white">Frequently Asked Questions</h2>
            <p className="text-brand-white-70 text-lg">Everything you need to know about our e-commerce services.</p>
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
              Ready to turn visitors into buyers? Let's build your digital storefront.
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
      
      <JsonLd data={breadcrumbSchema} />
    </div>
  );
}