import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { JsonLd } from '../components/JsonLd';
import { SEO } from '../components/SEO';
import { SafeImage } from '../components/SafeImage';
import { ServicesAccordion } from '../components/ServicesAccordion';

const faqs = [
  {
    "q": "What is performance marketing?",
    "a": "Performance marketing is a results-driven form of digital advertising where brands only pay for specific actions — such as clicks, leads, or sales. It includes paid search, paid social, affiliate marketing, and programmatic ads."
  },
  {
    "q": "How does Mints Global approach performance marketing in the UAE?",
    "a": "Mints Global builds data-driven performance marketing campaigns tailored to the UAE market, combining Google Ads, Meta, TikTok, programmatic display, and CRO strategies to maximise ROI and reduce cost-per-acquisition."
  },
  {
    "q": "What performance marketing channels do you specialise in?",
    "a": "We specialise in Google Ads (Search & Display), Meta Ads (Facebook & Instagram), TikTok Ads, LinkedIn Ads, programmatic advertising, affiliate marketing, and conversion rate optimisation (CRO)."
  },
  {
    "q": "Do you offer performance marketing services for businesses outside Dubai?",
    "a": "Yes. While based in Dubai, Mints Global provides performance marketing services to businesses across Abu Dhabi, Sharjah, and the wider UAE and GCC region."
  },
  {
    "q": "How do you measure performance marketing success?",
    "a": "We track KPIs including ROAS (Return on Ad Spend), CPA (Cost Per Acquisition), CTR, conversion rate, and revenue attribution using real-time dashboards and multi-touch attribution modelling."
  }
];

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Mints Global — Performance Marketing Agency",
  "url": "https://www.mintsglobal.ae/digital-marketing/performance-marketing",
  "logo": "https://www.mintsglobal.ae/assets/images/mints-global-logo.png",
  "image": "https://www.mintsglobal.ae/assets/images/performance-marketing-agency-dubai.webp",
  "description": "Mints Global is a performance marketing agency in Dubai, UAE offering paid search, paid social, programmatic advertising, affiliate marketing, and conversion rate optimisation services to businesses across the UAE and GCC.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Office #315, 3rd Floor, Bank Street Building, Bur Dubai, Dubai",
    "addressLocality": "Dubai",
    "addressRegion": "Dubai",
    "postalCode": "00000",
    "addressCountry": "AE"
  },
  "telephone": "+971 502943916",
  "email": "info@mintsglobal.ae",
  "priceRange": "$$",
  "areaServed": [
    {"@type": "City", "name": "Dubai"},
    {"@type": "City", "name": "Abu Dhabi"},
    {"@type": "Country", "name": "United Arab Emirates"}
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Performance Marketing Services",
    "itemListElement": [
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Paid Search (Google Ads)"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Paid Social (Meta, TikTok, LinkedIn)"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Programmatic Display Advertising"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Affiliate Marketing UAE"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Conversion Rate Optimisation (CRO)"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Performance Analytics & ROI Reporting"}}
    ]
  },
  "sameAs": [
    "https://www.linkedin.com/company/mintsglobal",
    "https://www.instagram.com/mintsglobal",
    "https://www.facebook.com/mintsglobal"
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
      "name": "Performance Marketing",
      "item": "https://www.mintsglobal.ae/digital-marketing/performance-marketing"
    }
  ]
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Performance Marketing Agency in Dubai & UAE | Mints Global",
  "url": "https://www.mintsglobal.ae/digital-marketing/performance-marketing",
  "description": "Drive measurable ROI with Mints Global — a results-driven performance marketing agency in Dubai & UAE. Specialising in paid search, paid social, programmatic ads & conversion optimisation.",
  "inLanguage": "en",
  "isPartOf": {
    "@type": "WebSite",
    "url": "https://www.mintsglobal.ae",
    "name": "Mints Global"
  },
  "about": {
    "@type": "Service",
    "name": "Performance Marketing",
    "provider": {
      "@type": "Organization",
      "name": "Mints Global",
      "url": "https://www.mintsglobal.ae"
    }
  },
  "datePublished": "2024-01-01",
  "dateModified": "2026-06-01"
};

export function PerformanceMarketing() {
  return (
    <div className="w-full relative z-10 min-h-screen bg-brand-black">
      <SEO 
        title="Performance Marketing Agency in Dubai & UAE | Mints Global" 
        description="A results-driven performance marketing agency in Dubai & UAE. Specialising in paid search, paid social, programmatic ads & conversion optimisation."
        keywords={["performance marketing", "PPC agency Dubai", "ROI driven marketing", "paid media buying", "biddable media Europe"]}
        canonical="/digital-marketing/performance-marketing"
        ogTitle="Performance Marketing Agency in Dubai & UAE | Mints Global"
        ogDescription="Drive measurable ROI with Mints Global — a results-driven performance marketing agency in Dubai & UAE. Paid search, paid social, programmatic ads & CRO."
        ogImage="https://www.mintsglobal.ae/assets/og/performance-marketing-og.jpg"
        twitterTitle="Performance Marketing Agency in Dubai & UAE | Mints Global"
        twitterDescription="Drive measurable ROI with Mints Global — performance marketing specialists in Dubai & UAE. Paid search, social, programmatic & CRO."
        twitterImage="https://www.mintsglobal.ae/assets/og/performance-marketing-og.jpg"
        geoTarget={true}
        rawTitle={true}
      />
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-1 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-brand-white-70">
                Data-Driven ROI
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-black mb-8 uppercase leading-[0.9] text-white">
              Performance<br/>
              <span className="text-olive-500">Marketing.</span>
            </h1>
            <p className="text-brand-white-70 text-lg md:text-xl max-w-3xl leading-relaxed mb-12">
              Scale your revenue with highly targeted, data-driven performance marketing campaigns. We leverage Google Ads, Meta, and LinkedIn to acquire high-value customers.
            </p>
            
            <div className="flex flex-wrap gap-4">
               <Link to="/contact" className="bg-olive-500 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-olive-400 transition-colors inline-flex items-center gap-2 relative z-20">
                 Increase Your ROI <ArrowRight size={18} />
               </Link>
            </div>
          </motion.div>

          <div className="relative w-full aspect-[16/9] md:aspect-[16/10] lg:aspect-square rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-olive-950 via-transparent to-transparent z-10 pointer-events-none opacity-40" />
            <SafeImage
              src="/assets/images/performance-marketing-agency-dubai.webp"
              fallbackSrc="/hero.png"
              alt="Performance marketing agency in Dubai helping brands drive ROI through paid campaigns"
              title="Performance Marketing Agency Dubai - Mints Global"
              width="1440"
              height="720"
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
            <h2 className="font-display text-4xl lg:text-5xl font-black uppercase mb-6 text-white">Our Performance Channels</h2>
            <p className="text-brand-white-70 text-lg max-w-3xl">We run measurable, scalable campaigns across the most effective platforms to maximize your return on ad spend.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Google Ads (PPC)</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Capture high-intent search traffic with hyper-optimized Google Ads campaigns. We handle keyword strategy, ad copy, and bidding.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Meta Advertising</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Scale consumer brands and generate B2B leads using Facebook and Instagram's powerful demographic and behavioral targeting.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">LinkedIn Ads</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Target decision-makers directly with B2B LinkedIn campaigns designed to fill your sales pipeline with qualified accounts.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Conversion Rate Optimization</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">We don't just drive traffic; we ensure your landing pages are built to convert visitors into paying customers.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Retargeting Campaigns</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Re-engage lost visitors with strategic retargeting ads that bring them back to your website to complete their purchase.</p>
            </div>
            <div className="bg-brand-black border border-white/5 p-10 rounded-3xl hover:border-olive-500/30 transition-colors">
              <CheckCircle2 className="text-olive-500 mb-6" size={32} />
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">Data & Analytics</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed">Complete transparency with advanced tracking, regular reporting, and continuous A/B testing to lower CPA.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-brand-black border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-black uppercase mb-4 text-white">Frequently Asked Questions</h2>
            <p className="text-brand-white-70 text-lg">Everything you need to know about our performance marketing services.</p>
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
              Ready to scale your ad spend into predictable revenue? Let's build your growth engine.
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
      
      <JsonLd data={professionalServiceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={webPageSchema} />
    </div>
  );
}