import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { JsonLd } from '../components/JsonLd';
import { buildServiceSchema, buildFaqSchema, buildBreadcrumbSchema } from '../lib/schema-helpers';
import { SEO } from '../components/SEO';

export function SocialMediaMarketing() {
  const serviceSchema = buildServiceSchema({
    name: "Social Media Marketing",
    description: "Engaging organic social media management and community building.",
    url: "/digital-marketing/smm",
    serviceType: "Digital Marketing"
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Digital Marketing", url: "/digital-marketing" },
    { name: "Social Media Marketing", url: "/digital-marketing/smm" }
  ]);

  return (
    <div className="w-full relative z-10 min-h-screen bg-brand-black">
      <SEO 
        title="Social Media Management | Mints Global" 
        description="Engage your audience and build brand loyalty with expert Social Media Management from Mints Global. Meta, LinkedIn, TikTok, and X strategies."
        keywords={["social media management Dubai", "community building strategy", "social media marketing agency", "B2B social media", "Meta LinkedIn TikTok marketing"]} 
      />
      <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-black mb-8 uppercase leading-[0.9] text-white">
            Social Media Management
          </h1>
          <p className="text-brand-white-70 text-lg md:text-xl max-w-3xl leading-relaxed mb-12">
            Turn your social platforms into powerful community-building and lead-generation engines. We craft compelling narratives, stunning visuals, and engaging content calendars tailored to your specific audience.
          </p>
          <div className="flex gap-4">
             <Link to="/contact" className="bg-olive-500 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-olive-400 transition-colors inline-flex items-center gap-2 relative z-20">
               Discuss Your Project <ArrowRight size={18} />
             </Link>
          </div>
        </motion.div>
      </section>
      
      <section className="py-24 bg-olive-950 border-t border-white/5">
         <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-display text-3xl font-black uppercase mb-12 text-white">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div key={0} className="bg-brand-black-light border border-white/5 p-8 rounded-3xl hover:border-olive-500/30 transition-colors">
                     <CheckCircle2 className="text-olive-500 mb-6" size={32} />
                     <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Platform-Specific Strategy</h3>
                     <p className="text-brand-white-70 text-sm leading-relaxed">
                        Tailored content plans for LinkedIn, Instagram, TikTok, and more, ensuring your message aligns perfectly with the platform’s culture and algorithm.
                     </p>
                  </div>
                  <div key={1} className="bg-brand-black-light border border-white/5 p-8 rounded-3xl hover:border-olive-500/30 transition-colors">
                     <CheckCircle2 className="text-olive-500 mb-6" size={32} />
                     <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Community Management</h3>
                     <p className="text-brand-white-70 text-sm leading-relaxed">
                        Proactive engagement, fast response times, and sentiment tracking to build a loyal community and protect your brand reputation online.
                     </p>
                  </div>
                  <div key={2} className="bg-brand-black-light border border-white/5 p-8 rounded-3xl hover:border-olive-500/30 transition-colors">
                     <CheckCircle2 className="text-olive-500 mb-6" size={32} />
                     <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Influencer & Creator Partnerships</h3>
                     <p className="text-brand-white-70 text-sm leading-relaxed">
                        Identify, vet, and collaborate with industry creators and influencers to amplify your reach and drive authentic engagement.
                     </p>
                  </div>
            </div>
         </div>
      </section>

      <section className="py-24 bg-brand-black-light border-t border-white/5">
         <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
               <h2 className="font-display text-4xl font-black uppercase mb-6 text-white">Why Choose Mints?</h2>
               <p className="text-brand-white-70 text-lg leading-relaxed mb-8">
                 We take a bespoke approach to every project, ensuring that our deliverables match your unique operational requirements. 
                 By combining deep expertise with a focus on sustainable growth, we build frameworks that scale.
               </p>
               <ul className="space-y-4 text-brand-white-90 font-medium tracking-wide">
                  <li key={0} className="flex items-center gap-3"><span className="w-6 h-6 flex items-center justify-center rounded-full bg-olive-500/20"><ArrowRight size={14} className="text-olive-500" /></span> Data-Backed Content Pillars and Posting Schedules</li>
                  <li key={1} className="flex items-center gap-3"><span className="w-6 h-6 flex items-center justify-center rounded-full bg-olive-500/20"><ArrowRight size={14} className="text-olive-500" /></span> High-End Visual Production & Copywriting</li>
                  <li key={2} className="flex items-center gap-3"><span className="w-6 h-6 flex items-center justify-center rounded-full bg-olive-500/20"><ArrowRight size={14} className="text-olive-500" /></span> Comprehensive Social Listening and Sentiment Analysis</li>
               </ul>
            </div>
            <div className="flex-1 bg-olive-900 border border-white/10 p-10 lg:p-14 rounded-[3rem] relative overflow-hidden min-w-[300px]">
               <div className="absolute top-0 right-0 w-48 h-48 bg-olive-500/20 blur-[60px] -translate-y-1/2 translate-x-1/2" />
               <h3 className="font-display font-bold text-3xl uppercase mb-4 text-white relative z-10">Ready to start?</h3>
               <p className="text-brand-white-70 text-base mb-10 relative z-10 max-w-sm">
                 Our team is ready to analyze your needs and propose a strategic roadmap.
               </p>
               <Link to="/contact" className="bg-white text-olive-950 px-8 py-4 rounded-full font-black uppercase tracking-widest hover:bg-olive-500 hover:text-white transition-all shadow-xl block w-fit relative z-10">
                  Contact Us
               </Link>
            </div>
         </div>
      </section>
    
      {/* Related Services */}
      <section className="py-16 border-t border-white/5 bg-olive-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h3 className="font-display text-2xl font-black uppercase mb-8 text-white">Related Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/digital-marketing/seo" className="text-olive-500 hover:text-white font-bold transition-colors">SEO Optimization &rarr;</Link>
            <Link to="/digital-marketing/branding" className="text-olive-500 hover:text-white font-bold transition-colors">Brand Strategy &rarr;</Link>
            <Link to="/digital-marketing/performance-marketing" className="text-olive-500 hover:text-white font-bold transition-colors">Performance Marketing &rarr;</Link>
          </div>
        </div>
      </section>
      
      <JsonLd data={serviceSchema} />
      
      <JsonLd data={breadcrumbSchema} />
    </div>
  );
}