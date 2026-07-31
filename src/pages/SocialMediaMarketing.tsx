import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { JsonLd } from '../components/JsonLd';
import { SEO } from '../components/SEO';
import { SafeImage } from '../components/SafeImage';
import { ServicesAccordion } from '../components/ServicesAccordion';

const faqs = [
  {
    "q": "What services does your SMM agency include?",
    "a": "Our social media marketing services include Instagram management, Facebook advertising, TikTok content creation, LinkedIn strategy, community management, and professional content creation for all social platforms."
  },
  {
    "q": "How long does it take to see results from SMM?",
    "a": "Most clients see initial engagement improvements within 4-6 weeks. Significant growth in followers and conversions typically appear within 3-6 months, depending on your goals and industry."
  },
  {
    "q": "Do you provide social media management for all platforms?",
    "a": "Yes, we manage all major platforms including Instagram, Facebook, TikTok, LinkedIn, Twitter, and YouTube. We also develop platform-specific strategies based on your target audience."
  },
  {
    "q": "Can SMM help boost my sales and conversions?",
    "a": "Absolutely. Our data-driven SMM strategies focus on targeted advertising, audience segmentation, and conversion optimization to directly impact your bottom line."
  }
];

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
      "name": "Social Media Marketing",
      "item": "https://www.mintsglobal.ae/digital-marketing/smm"
    }
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.mintsglobal.ae/digital-marketing/smm",
  "name": "Mints Global - Social Media Marketing Services Dubai",
  "description": "Professional social media marketing agency in Dubai offering SMM services, Instagram marketing, Facebook advertising, TikTok management, and content creation for UAE businesses.",
  "url": "https://www.mintsglobal.ae/digital-marketing/smm",
  "telephone": "+971502943916",
  "email": "info@mintsglobal.ae",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Office #315, 3rd Floor, Bank Street Building, Bur Dubai",
    "addressLocality": "Dubai",
    "addressRegion": "Dubai",
    "postalCode": "00000",
    "addressCountry": "AE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 25.2628,
    "longitude": 55.2975
  },
  "priceRange": "$$",
  "areaServed": [
    "Dubai",
    "Abu Dhabi",
    "Sharjah",
    "United Arab Emirates"
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Social Media Marketing (SMM) Services",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Mints Global",
    "url": "https://www.mintsglobal.ae"
  },
  "serviceType": "Digital Marketing",
  "areaServed": [
    {
      "@type": "Country",
      "name": "United Arab Emirates"
    }
  ],
  "url": "https://www.mintsglobal.ae/digital-marketing/smm",
  "description": "Comprehensive social media marketing services including Instagram management, Facebook advertising, TikTok content creation, LinkedIn marketing, and community engagement.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "SMM Service Packages",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Instagram Marketing",
        "description": "Profile optimization, content creation, paid advertising, and audience growth strategies on Instagram."
      },
      {
        "@type": "Offer",
        "name": "Facebook Advertising",
        "description": "Targeted ad campaigns, audience segmentation, and conversion optimization on Facebook and Instagram ads."
      },
      {
        "@type": "Offer",
        "name": "TikTok Marketing",
        "description": "Viral content creation, influencer partnerships, and TikTok advertising for brand awareness."
      },
      {
        "@type": "Offer",
        "name": "LinkedIn Management",
        "description": "B2B social media strategy, content marketing, and professional networking on LinkedIn."
      },
      {
        "@type": "Offer",
        "name": "Content Creation",
        "description": "Professional copywriting, graphic design, and video content for all social platforms."
      },
      {
        "@type": "Offer",
        "name": "Community Management",
        "description": "Daily monitoring, engagement, and customer support across all social media channels."
      }
    ]
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Mints Global",
  "url": "https://www.mintsglobal.ae",
  "logo": "https://www.mintsglobal.ae/logo.png",
  "description": "Digital marketing agency in Dubai providing SMM, web development, branding, cybersecurity, and IT services.",
  "telephone": "+971502943916",
  "email": "info@mintsglobal.ae",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Office #315, 3rd Floor, Bank Street Building, Bur Dubai",
    "addressLocality": "Dubai",
    "addressRegion": "Dubai",
    "addressCountry": "AE"
  },
  "sameAs": [
    "https://www.facebook.com/mintsglobal",
    "https://www.instagram.com/mintsglobal",
    "https://www.linkedin.com/company/mintsglobal",
    "https://www.twitter.com/mintsglobal"
  ],
  "knowsAbout": [
    "Social Media Marketing",
    "Digital Marketing",
    "Content Marketing",
    "SEO",
    "Web Development",
    "Branding",
    "Cybersecurity"
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

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Social Media Marketing Services Dubai | Mints Global",
  "url": "https://www.mintsglobal.ae/digital-marketing/smm",
  "description": "Professional SMM services in Dubai. Boost your brand on Instagram, Facebook & TikTok with data-driven social media marketing strategies.",
  "dateModified": "2026-06-15",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Mints Global",
    "url": "https://www.mintsglobal.ae"
  },
  "mainEntity": {
    "@type": "Service",
    "name": "Social Media Marketing"
  }
};

export function SocialMediaMarketing() {
  return (
    <div className="w-full relative z-10 min-h-screen bg-brand-black">
      <SEO 
        title="Social Media Marketing Services Dubai | Mints Global" 
        description="Expert SMM services in Dubai. Boost your brand on Facebook, Instagram & TikTok. Strategic social media management for UAE businesses."
        keywords={["social media management Dubai", "community building strategy", "social media marketing agency", "B2B social media", "Meta LinkedIn TikTok marketing"]} 
        canonical="/digital-marketing/smm"
        ogTitle="Social Media Marketing Agency Dubai | SMM Services UAE – MINTS Global"
        ogDescription="Expert SMM services in Dubai. Boost your brand on Facebook, Instagram & TikTok. Strategic social media management for UAE businesses."
        ogImage="https://www.mintsglobal.ae/assets/images/social-media-marketing-agency-dubai.webp"
        twitterTitle="Social Media Marketing Agency Dubai | MINTS Global"
        twitterDescription="Expert SMM services in Dubai. Boost your brand on Facebook, Instagram & TikTok. Strategic social media management for UAE businesses."
        twitterImage="https://www.mintsglobal.ae/assets/images/social-media-marketing-agency-dubai.webp"
        geoTarget={true}
        rawTitle={true}
      />
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-black mb-8 uppercase leading-[0.9] text-white">
              Social Media<br/>
              <span className="text-olive-500">Marketing.</span>
            </h1>
            <p className="text-brand-white-70 text-lg md:text-xl max-w-3xl leading-relaxed mb-12">
              Turn your social platforms into powerful community-building and lead-generation engines. We craft compelling narratives, stunning visuals, and engaging content calendars tailored to your specific audience.
            </p>
            <div className="flex gap-4">
               <Link to="/contact" className="bg-olive-500 text-brand-black px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-olive-400 transition-colors inline-flex items-center gap-2 relative z-20">
                 Discuss Your Project <ArrowRight size={18} />
               </Link>
            </div>
          </motion.div>

          <div className="relative w-full aspect-[16/9] md:aspect-[16/10] lg:aspect-square rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-olive-950 via-transparent to-transparent z-10 pointer-events-none opacity-40" />
            <SafeImage
              src="/assets/images/social-media-marketing-agency-dubai.webp"
              fallbackSrc="/hero.png"
              alt="Social media marketing agency in Dubai providing SMM services"
              title="Social Media Marketing Services Dubai - MINTS Global"
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

      {/* FAQ Accordion Section */}
      <section className="py-24 bg-brand-black border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-black uppercase mb-4 text-white">Frequently Asked Questions</h2>
            <p className="text-brand-white-70 text-lg">Everything you need to know about our social media marketing services.</p>
          </div>
          <div className="space-y-4">
            <ServicesAccordion items={faqs.map(f => ({ title: f.q, content: f.a }))} />
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
      
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={organizationSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={webPageSchema} />
    </div>
  );
}