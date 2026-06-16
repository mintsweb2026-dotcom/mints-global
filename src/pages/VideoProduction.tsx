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
    "q": "Do you formulate the concept, or do we?",
    "a": "We can do both! If you have a script or concept ready, we can execute it. If you are starting from scratch, our creative team will develop concepts, storyboards, and scripts."
  },
  {
    "q": "Do you provide equipment and crew?",
    "a": "Yes. Our production packages include all necessary professional cinema cameras, lighting, audio equipment, and a full crew (directors, DOPs, gaffers, sound engineers)."
  },
  {
    "q": "How long is the editing process?",
    "a": "Standard post-production takes roughly 1 to 3 weeks depending on the length of the video and the complexity of the editing, motion graphics, and color grading required."
  },
  {
    "q": "Can we use the video for broadcast TV?",
    "a": "Yes, if required, we can export your final videos in specific broadcast-safe formats meeting all loudness and color space requirements for television networks."
  }
];

export function VideoProduction() {
  const serviceSchema = buildServiceSchema({
    name: "Video Production",
    description: "Words tell, but video sells. Let's capture your story in motion.",
    url: "/digital-marketing/video-production",
    serviceType: "Digital Marketing"
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Digital Marketing", url: "/digital-marketing" },
    { name: "Video Production", url: "/digital-marketing/video-production" }
  ]);

  return (
    <div className="w-full relative z-10 min-h-screen bg-brand-black">
      <SEO 
        title="Video Production | Mints Global" 
        description="Engage your audience with high-quality, cinematic video content. From brand films and commercials to social media shorts, we handle end-to-end production."
        keywords={["video production agency", "corporate video Dubai", "commercial video production", "explainer videos", "high-end video assets"]}
        canonical="/digital-marketing/video-production"
      />
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex items-center gap-4 mb-6">
            <span className="px-4 py-1 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-brand-white-70">
              Cinematic Storytelling
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-black mb-8 uppercase leading-[0.9] text-white">
            Video<br/>
            <span className="text-olive-500">Production.</span>
          </h1>
          <p className="text-brand-white-70 text-lg md:text-xl max-w-3xl leading-relaxed mb-12">
            Engage your audience with high-quality, cinematic video content. From brand films and commercials to social media shorts, we handle end-to-end production.
          </p>
          
          <div className="flex flex-wrap gap-4">
             <Link to="/contact" className="bg-olive-500 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-olive-400 transition-colors inline-flex items-center gap-2 relative z-20">
               Tell Your Story <ArrowRight size={18} />
             </Link>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-olive-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-black uppercase mb-6 text-white">Production Capabilities</h2>
            <p className="text-brand-white-70 text-lg max-w-3xl">We provide complete, end-to-end video services — handling concept development, filming, and post-production under one roof.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Brand Films</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Cinematic, documentary-style films that tell the story of your business, your mission, and your values.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Commercial Production</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">High-end commercials designed for TV, YouTube, or social media advertising, optimized for conversions.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Corporate Videos</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Professional internal communications, training videos, and executive interviews filmed with premium setups.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Social Media Reels</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Short, engaging, and vertically-optimized videos designed specifically for Instagram Reels and TikTok.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Event Coverage</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Capture the energy and scale of your corporate events, conferences, and product launches with dynamic highlight reels.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Post-Production</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Expert video editing, color grading, sound design, and motion graphics to polish your raw footage into a masterpiece.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-brand-black border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-black uppercase mb-4 text-white">Frequently Asked Questions</h2>
            <p className="text-brand-white-70 text-lg">Everything you need to know about our video production services.</p>
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
              Words tell, but video sells. Let's capture your story in motion.
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
            <Link to="/digital-marketing/branding" className="text-olive-500 hover:text-white font-bold transition-colors">Brand Strategy &rarr;</Link>
          </div>
        </div>
      </section>
      
      <JsonLd data={serviceSchema} />
      <JsonLd data={buildFaqSchema(faqs)} />
      
      <JsonLd data={breadcrumbSchema} />
    </div>
  );
}