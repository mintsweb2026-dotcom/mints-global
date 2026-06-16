import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { JsonLd } from '../components/JsonLd';
import { SEO } from '../components/SEO';
import { SafeImage } from '../components/SafeImage';
import { ServicesAccordion } from '../components/ServicesAccordion';

const faqs = [
  {
    "q": "What does professional branding include?",
    "a": "Professional branding encompasses logo design, brand strategy development, visual identity creation, color palette selection, typography guidelines, and complete brand guidelines documentation."
  },
  {
    "q": "How long does the branding process take?",
    "a": "A comprehensive branding project typically takes 4-8 weeks depending on scope, revisions, and complexity. Mints Global customizes timelines based on your specific requirements."
  },
  {
    "q": "Why choose Mints Global for branding services?",
    "a": "Mints Global provides expert branding solutions with a creative team of designers, strategists, and digital specialists. We deliver custom brand identities that reflect your business values and resonate with your target audience."
  },
  {
    "q": "Do you provide branding services for startups?",
    "a": "Yes, we specialize in creating strong brand identities for startups and established businesses. Our services are tailored to different budgets and business stages."
  }
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Professional Branding Services",
  "description": "Expert branding agency offering logo design, brand strategy, visual identity creation and brand guidelines development for businesses in Dubai and UAE",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Mints Global",
    "image": "https://www.mintsglobal.ae/logo.png",
    "telephone": "+971502943916",
    "email": "info@mintsglobal.ae",
    "url": "https://www.mintsglobal.ae",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office #315, 3rd Floor, Bank Street Building",
      "addressLocality": "Bur Dubai",
      "addressRegion": "Dubai",
      "postalCode": "00000",
      "addressCountry": "AE"
    },
    "priceRange": "$$"
  },
  "areaServed": {
    "@type": "City",
    "name": "Dubai"
  },
  "serviceType": "Branding Services",
  "hasOfferingDetails": [
    {
      "@type": "OfferingDetails",
      "name": "Logo Design"
    },
    {
      "@type": "OfferingDetails",
      "name": "Brand Strategy"
    },
    {
      "@type": "OfferingDetails",
      "name": "Visual Identity Design"
    },
    {
      "@type": "OfferingDetails",
      "name": "Brand Guidelines"
    }
  ],
  "url": "https://www.mintsglobal.ae/digital-marketing/branding"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.mintsglobal.ae"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Digital Marketing",
      "item": "https://www.mintsglobal.ae/digital-marketing"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Branding",
      "item": "https://www.mintsglobal.ae/digital-marketing/branding"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a
    }
  }))
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Mints Global",
  "url": "https://www.mintsglobal.ae",
  "logo": "https://www.mintsglobal.ae/logo.png",
  "description": "Digital marketing agency in Dubai offering branding, SEO, software development, cybersecurity and IT services",
  "telephone": "+971502943916",
  "email": "info@mintsglobal.ae",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Office #315, 3rd Floor, Bank Street Building",
    "addressLocality": "Bur Dubai",
    "addressRegion": "Dubai",
    "addressCountry": "AE"
  },
  "sameAs": [
    "https://www.facebook.com/mintsglobal",
    "https://www.instagram.com/mintsglobal",
    "https://www.linkedin.com/company/mints-global"
  ]
};

export function BrandStrategy() {
  return (
    <div className="w-full relative z-10 min-h-screen bg-brand-black">
      <SEO 
        title="Professional Branding Agency Dubai | Mints Global" 
        description="Expert branding services in Dubai. Logo design, brand strategy & visual identity. Contact Mints Global today."
        keywords={['branding agency dubai', 'brand identity', 'brand strategy uae', 'corporate branding', 'logo design']}
        canonical="/digital-marketing/branding"
        ogTitle="Professional Branding Agency Dubai | Logo & Brand Identity Design | Mints Global"
        ogDescription="Transform your brand identity with Mints Global's expert branding services. Logo design, brand strategy & visual identity creation for UAE businesses."
        ogImage="https://www.mintsglobal.ae/images/branding-hero.jpg"
        twitterTitle="Professional Branding Agency Dubai | Logo & Brand Design | Mints Global"
        twitterDescription="Expert branding services including logo design, brand strategy & visual identity. Transform your brand with Mints Global."
        twitterImage="https://www.mintsglobal.ae/images/branding-hero.jpg"
        geoTarget={true}
        rawTitle={true}
      />
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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

          <div className="relative w-full aspect-[12/6] rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-olive-950 via-transparent to-transparent z-10 pointer-events-none opacity-40" />
            <SafeImage
              src="https://www.mintsglobal.ae/images/branding-hero.jpg"
              fallbackSrc="/hero.png"
              alt="Professional branding services and logo design process at Mints Global Dubai"
              title="Branding & Logo Design Services"
              width="1200"
              height="600"
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
      <JsonLd data={faqSchema} />
      <JsonLd data={organizationSchema} />
    </div>
  );
}