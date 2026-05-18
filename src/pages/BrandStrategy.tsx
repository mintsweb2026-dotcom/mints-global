import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { JsonLd } from '../components/JsonLd';
import { buildServiceSchema, buildFaqSchema, buildBreadcrumbSchema } from '../lib/schema-helpers';
import { SEO } from '../components/SEO';

const faqs = [
  {
    "q": "How long does a branding project take?",
    "a": "A comprehensive brand identity project typically takes between 4 to 8 weeks, depending on the complexity and the number of deliverables required."
  },
  {
    "q": "Will we own the final designs?",
    "a": "Yes, upon project completion and final payment, you receive full intellectual property rights to all final brand assets and source files."
  },
  {
    "q": "We only need a logo, can you help?",
    "a": "While we specialize in holistic brand systems, we can execute standalone logo projects for select early-stage businesses. However, we strongly recommend investing in a full identity system."
  },
  {
    "q": "Do you also implement the brand on our website?",
    "a": "Absolutely. Our web development and design teams work closely with our branding specialists to seamlessly integrate your new brand identity into your digital platforms."
  }
];

export function BrandStrategy() {
  const serviceSchema = buildServiceSchema({
    name: "Brand Strategy",
    description: "Your brand is your most valuable asset. Let's make it unforgettable.",
    url: "/digital-marketing/branding",
    serviceType: "Digital Marketing"
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Digital Marketing", url: "/digital-marketing" },
    { name: "Brand Strategy", url: "/digital-marketing/branding" }
  ]);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="w-full relative z-10 min-h-screen bg-brand-black">
      <SEO 
        title="Brand Strategy & Design | Mints Global" 
        description="Your brand is more than a logo. We build compelling brand identities, messaging frameworks, and visual systems that differentiate your business and resonate with your audience."
        keywords={['branding agency dubai', 'brand identity', 'brand strategy uae', 'corporate branding', 'logo design']}
      />
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex items-center gap-4 mb-6">
            <span className="px-4 py-1 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-brand-white-70">
              Creative Excellence
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-black mb-8 uppercase leading-[0.9] text-white">
            Brand<br/>
            <span className="text-olive-500">Strategy.</span>
          </h1>
          <p className="text-brand-white-70 text-lg md:text-xl max-w-3xl leading-relaxed mb-12">
            Your brand is more than a logo. We build compelling brand identities, messaging frameworks, and visual systems that differentiate your business and resonate with your audience.
          </p>
          
          <div className="flex flex-wrap gap-4">
             <Link to="/contact" className="bg-olive-500 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-olive-400 transition-colors inline-flex items-center gap-2 relative z-20">
               Build Your Brand <ArrowRight size={18} />
             </Link>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-olive-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-black uppercase mb-6 text-white">Complete Brand Ecosystems</h2>
            <p className="text-brand-white-70 text-lg max-w-3xl">From fundamental positioning to final visual assets, we craft brands that are built to last and designed to engage.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Brand Positioning</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Define your unique value proposition, target audience, and market positioning to stand out from competitors.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Visual Identity</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Complete logo design, color palettes, typography, and visual guidelines that create a cohesive and professional image.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Brand Messaging</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Develop your brand voice, tone, and core messaging pillars to ensure consistent communication across all channels.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Rebranding Strategies</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Breathe new life into an outdated brand with a strategic refresh that honors your legacy while modernizing your appeal.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Brand Guidelines</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Comprehensive brand books that dictate how your brand should be used by internal teams and external partners.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Corporate Materials</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Design of essential collateral including pitch decks, business cards, letterheads, and digital templates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-brand-black border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-black uppercase mb-4 text-white">Frequently Asked Questions</h2>
            <p className="text-brand-white-70 text-lg">Everything you need to know about our branding services.</p>
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
              Your brand is your most valuable asset. Let's make it unforgettable.
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
            <Link to="/digital-marketing/seo" className="text-olive-500 hover:text-white font-bold transition-colors">SEO Optimization &rarr;</Link>
            <Link to="/digital-marketing/smm" className="text-olive-500 hover:text-white font-bold transition-colors">Social Media Marketing &rarr;</Link>
            <Link to="/digital-marketing/performance-marketing" className="text-olive-500 hover:text-white font-bold transition-colors">Performance Marketing &rarr;</Link>
          </div>
        </div>
      </section>
      
      <JsonLd data={serviceSchema} />
      
      <JsonLd data={breadcrumbSchema} />
    </div>
  );
}