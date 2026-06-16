import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { JsonLd } from '../components/JsonLd';
import { SEO } from '../components/SEO';
import { ServicesAccordion } from '../components/ServicesAccordion';
import { SafeImage } from '../components/SafeImage';

const faqs = [
  {
    "q": "How much does mobile app development cost in Dubai?",
    "a": "The cost depends on app complexity, features, integrations, and development platform. Custom mobile applications typically vary based on project requirements."
  },
  {
    "q": "Do you develop both iOS and Android apps?",
    "a": "Yes, we develop native iOS apps, Android apps, and cross-platform mobile applications using modern frameworks."
  },
  {
    "q": "How long does it take to build a mobile app?",
    "a": "Most mobile app projects take between 8 and 24 weeks depending on features, integrations and testing requirements."
  }
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Mobile App Development Services",
  "serviceType": "Mobile Application Development",
  "provider": {
    "@type": "Organization",
    "name": "MINTS Global",
    "url": "https://www.mintsglobal.ae",
    "logo": "https://www.mintsglobal.ae/logo.png"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United Arab Emirates"
  },
  "description": "Custom mobile app development services in Dubai including iOS app development, Android app development, cross-platform applications, enterprise mobility solutions and ongoing support.",
  "url": "https://www.mintsglobal.ae/software-development/mobile-apps",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock"
  }
};

const organizationSchema = {
 "@context": "https://schema.org",
 "@type": "Organization",
 "name": "MINTS Global",
 "url": "https://www.mintsglobal.ae",
 "logo": "https://www.mintsglobal.ae/logo.png",
 "email": "info@mintsglobal.ae",
 "telephone": "+971502943916",
 "address": {
   "@type": "PostalAddress",
   "streetAddress": "Office #315, 3rd Floor, Bank Street Building",
   "addressLocality": "Bur Dubai",
   "addressRegion": "Dubai",
   "addressCountry": "AE"
 },
 "sameAs": [
   "https://www.linkedin.com/company/mints-global",
   "https://www.facebook.com/mintsglobal",
   "https://www.instagram.com/mintsglobal"
 ]
};

const breadcrumbSchema = {
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 "itemListElement": [
   {
     "@type": "ListItem",
     "position": 1,
     "name": "Home",
     "item": "https://www.mintsglobal.ae/"
   },
   {
     "@type": "ListItem",
     "position": 2,
     "name": "Software Development",
     "item": "https://www.mintsglobal.ae/software-development"
   },
   {
     "@type": "ListItem",
     "position": 3,
     "name": "Mobile Apps",
     "item": "https://www.mintsglobal.ae/software-development/mobile-apps"
   }
 ]
};

const faqSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [
   {
     "@type": "Question",
     "name": "How much does mobile app development cost in Dubai?",
     "acceptedAnswer": {
       "@type": "Answer",
       "text": "The cost depends on app complexity, features, integrations, and development platform. Custom mobile applications typically vary based on project requirements."
     }
   },
   {
     "@type": "Question",
     "name": "Do you develop both iOS and Android apps?",
     "acceptedAnswer": {
       "@type": "Answer",
       "text": "Yes, we develop native iOS apps, Android apps, and cross-platform mobile applications using modern frameworks."
     }
   },
   {
     "@type": "Question",
     "name": "How long does it take to build a mobile app?",
     "acceptedAnswer": {
       "@type": "Answer",
       "text": "Most mobile app projects take between 8 and 24 weeks depending on features, integrations and testing requirements."
     }
   }
 ]
};

export function MobileApps() {
  return (
    <div className="w-full relative z-10 min-h-screen bg-brand-black">
      <SEO 
        title="Mobile App Developers Dubai UAE | MINTS Global" 
        rawTitle={true}
        description="Dubai mobile app development company building custom iOS, Android and cross-platform apps for businesses across the UAE."
        canonical="/software-development/mobile-apps"
        ogTitle="Mobile App Development Company Dubai | iOS & Android App Developers UAE"
        ogDescription="Custom mobile app development services in Dubai. We build scalable iOS, Android and cross-platform applications for startups, enterprises and growing businesses."
        ogImage="https://www.mintsglobal.ae/images/mobile-app-development-dubai.webp"
        twitterTitle="Mobile App Development Company Dubai | iOS & Android App Developers UAE"
        twitterDescription="Custom mobile app development services in Dubai. Build powerful iOS, Android and enterprise mobile applications with MINTS Global."
        twitterImage="https://www.mintsglobal.ae/images/mobile-app-development-dubai.webp"
      />
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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

          <div className="relative w-full aspect-[12/7] rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-olive-950 via-transparent to-transparent z-10 pointer-events-none opacity-40" />
            <SafeImage
              src="/images/mobile-app-development-dubai.webp"
              fallbackSrc="/hero.webp"
              alt="Mobile App Development Company in Dubai UAE"
              title="Mobile App Development Dubai"
              width={1200}
              height={700}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            />
          </div>
        </div>
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
      
      <JsonLd data={organizationSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
    </div>
  );
}