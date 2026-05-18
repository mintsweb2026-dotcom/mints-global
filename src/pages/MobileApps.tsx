import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { JsonLd } from '../components/JsonLd';
import { buildServiceSchema, buildFaqSchema, buildBreadcrumbSchema } from '../lib/schema-helpers';
import { SEO } from '../components/SEO';

const faqs = [
  {
    "q": "Should I choose Native or Cross-Platform?",
    "a": "If your app requires heavy device-specific hardware integration, complex 3D graphics, or maximum performance, Native is best. If you need a faster time-to-market and lower budget for a standard utility/social app, React Native or Flutter is ideal."
  },
  {
    "q": "How long does it take to build an app?",
    "a": "A standard MVP (Minimum Viable Product) typically takes 3 to 4 months. Complex applications with numerous integrations and screens can take 6 months or longer."
  },
  {
    "q": "Will you help upload the app to the stores?",
    "a": "Yes, App Store and Google Play submission is included in our development process. We handle the provisioning profiles, certificates, and compliance checks."
  },
  {
    "q": "Do you support the app after launch?",
    "a": "Absolutely. We offer tailored SLA (Service Level Agreement) packages to monitor crashes, update APIs, and fix bugs post-launch."
  }
];

export function MobileApps() {
  const serviceSchema = buildServiceSchema({
    name: "Mobile Apps",
    description: "Your audience is on mobile. Let's give them an app they'll love to use.",
    url: "/software-development/mobile-apps",
    serviceType: "Software Development"
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Software Development", url: "/software-development" },
    { name: "Mobile Apps", url: "/software-development/mobile-apps" }
  ]);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="w-full relative z-10 min-h-screen bg-brand-black">
      <SEO 
        title="Mobile App Development | Mints Global" 
        description="Engaging and high-performing iOS and Android applications. From consumer fintech apps to enterprise mobility solutions, we build mobile experiences that connect."
        keywords={["mobile app development Dubai", "iOS app development", "Android app developers", "cross-platform app development", "Flutter React Native apps"]}
      />
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex items-center gap-4 mb-6">
            <span className="px-4 py-1 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-brand-white-70">
              Native & Cross-Platform
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-black mb-8 uppercase leading-[0.9] text-white">
            Mobile App<br/>
            <span className="text-olive-500">Development.</span>
          </h1>
          <p className="text-brand-white-70 text-lg md:text-xl max-w-3xl leading-relaxed mb-12">
            Engaging and high-performing iOS and Android applications. From consumer fintech apps to enterprise mobility solutions, we build mobile experiences that connect.
          </p>
          
          <div className="flex flex-wrap gap-4">
             <Link to="/contact" className="bg-olive-500 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-olive-400 transition-colors inline-flex items-center gap-2 relative z-20">
               Build Your App <ArrowRight size={18} />
             </Link>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-olive-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-black uppercase mb-6 text-white">Mobile Solutions</h2>
            <p className="text-brand-white-70 text-lg max-w-3xl">Whether native or cross-platform, we engineer mobile applications that deliver smooth performance and native feel.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">iOS Development</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Native application development for Apple devices using Swift and Objective-C, strictly adhering to Apple's Human Interface Guidelines.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Android Development</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Native Android apps written in Kotlin, optimized for the vast fragmentation of Android devices and screen sizes.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Cross-Platform (React Native / Flutter)</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Build once, deploy everywhere. High-performance cross-platform frameworks to reduce time to market and development costs.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">UI/UX Design for Mobile</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Intuitive, gesture-driven interface design that ensures your app is as easy to use as it is powerful.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">App Store Deployment</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">We manage the complex process of deploying your app to the Apple App Store and Google Play Store, managing reviews and compliance.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">App Maintenance & Updates</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Ongoing support to ensure compatibility with new OS updates, bug fixes, and feature enhancements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-brand-black border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-black uppercase mb-4 text-white">Frequently Asked Questions</h2>
            <p className="text-brand-white-70 text-lg">Everything you need to know about our mobile app services.</p>
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
              Your audience is on mobile. Let's give them an app they'll love to use.
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
            <Link to="/software-development/website-development" className="text-olive-500 hover:text-white font-bold transition-colors">Website Development &rarr;</Link>
            <Link to="/software-development/erp-solutions" className="text-olive-500 hover:text-white font-bold transition-colors">ERP Solutions &rarr;</Link>
          </div>
        </div>
      </section>
      
      <JsonLd data={serviceSchema} />
      
      <JsonLd data={breadcrumbSchema} />
    </div>
  );
}