import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { SafeCountUp as CountUp } from '../components/SafeCountUp';
import { ShieldCheck, Zap, LineChart, Globe2, Rocket, Headphones, ChevronLeft, ChevronRight, Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SEO } from '../components/SEO';
import { SEO_DATA } from '../lib/seo-data';
import { JsonLd } from '../components/JsonLd';
import { AnimatedChars } from '../components/AnimatedChars';
import { Magnetic } from '../components/Magnetic';
import { useWorks } from '../hooks/useWorks';
import { getPosts, BlogPost, STATIC_POSTS } from '../data/posts';
import { SafeImage } from '../components/SafeImage';
import { organizationSchema, professionalServiceSchema, localBusinessSchema } from '../lib/schema-helpers';


const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What services does Mints Global offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mints Global offers digital marketing, SEO, social media marketing, PPC advertising, enterprise software development, mobile app development, and cybersecurity solutions in Dubai."
      }
    },
    {
      "@type": "Question",
      "name": "Is Mints Global the best digital marketing agency in Dubai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mints Global is a premium Dubai-based digital agency delivering ROI-driven marketing and tech solutions that bridge Middle Eastern and European markets for global brands."
      }
    },
    {
      "@type": "Question",
      "name": "How can I get started with Mints Global?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can contact Mints Global through the website at mintsglobal.ae to book a free consultation with our Dubai marketing experts."
      }
    }
  ]
};

const Marquee = () => {
  const { t } = useTranslation();
  const rawTicker = t('marquee', { returnObjects: true });
  const TICKER = Array.isArray(rawTicker) ? rawTicker : [
    "STRATEGIC BRANDING",
    "ENTERPRISE SOFTWARE",
    "CYBER SECURITY",
    "AI INTEGRATION",
    "SEO & GROWTH MARKETING",
    "CLOUD ARCHITECTURE"
  ];

  return (
  <div className="w-full overflow-hidden border-y border-white/5 py-10 my-0 relative z-20 bg-olive-900">
    <div className="whitespace-nowrap animate-marquee inline-flex items-center gap-12 opacity-80">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="flex items-center gap-12">
          {TICKER.map((item, idx) => (
            <div key={idx} className="flex items-center gap-12">
             <span className={idx % 2 === 0 
               ? "text-white font-black text-4xl md:text-6xl uppercase tracking-widest cursor-default"
               : "text-transparent [-webkit-text-stroke:1.5px_white] font-black text-4xl md:text-6xl uppercase tracking-widest cursor-default"
             }>
               {item}
             </span>
              <span className="text-olive-500 text-3xl">✦</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
  );
};

export function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const { t, i18n } = useTranslation();
  const lang = (i18n.language as 'en' | 'ar' | 'de') || 'en';
  const meta = SEO_DATA.home[lang] || SEO_DATA.home.en;

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 0.6, 0]);
  const astronautScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const astronautY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const astronautRotate = useTransform(scrollYProgress, [0, 1], [0, 2]);

  const testimonials = [
    { name: t('testimonials.i1.name'), role: t('testimonials.i1.role'), doc: t('testimonials.i1.doc') },
    { name: t('testimonials.i2.name'), role: t('testimonials.i2.role'), doc: t('testimonials.i2.doc') },
    { name: t('testimonials.i3.name'), role: t('testimonials.i3.role'), doc: t('testimonials.i3.doc') },
    { name: t('testimonials.i4.name'), role: t('testimonials.i4.role'), doc: t('testimonials.i4.doc') }
  ];

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const { works } = useWorks();
  const featuredWorks = works.filter(w => w.featured);
  const recentProjects = featuredWorks.length > 0 ? featuredWorks : works.slice(0, 4);
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>(() => STATIC_POSTS.slice(0, 3));

  useEffect(() => {
    getPosts().then(fetched => setRecentPosts(fetched.slice(0, 3)));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev === 3 ? 0 : prev + 1)); // 4 testimonials
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative flex flex-col w-full overflow-x-hidden pt-[116px]">
      <SEO 
        title={meta.title}
        description={meta.description}
        keywords={["digital agency Dubai", "software development company UAE", "cyber security agency", "digital marketing agency", "Mints Global"]}
        canonical="/"
        ogTitle={lang === 'en' ? "Best Digital Marketing Agency Dubai | Mints Global" : undefined}
        ogDescription={lang === 'en' ? "Mints Global is Dubai's best digital marketing agency delivering ROI-driven marketing, software & cybersecurity solutions. Get a free consultation today!" : undefined}
        ogImage={lang === 'en' ? "https://www.mintsglobal.ae/images/og-mintsglobal-1200x630.jpg" : undefined}
        twitterTitle={lang === 'en' ? "Best Digital Marketing Agency Dubai | Mints Global" : undefined}
        twitterDescription={lang === 'en' ? "Dubai's best digital marketing agency. ROI-driven marketing, software & cybersecurity for global brands. Book your free consultation now!" : undefined}
        twitterImage={lang === 'en' ? "https://www.mintsglobal.ae/images/twitter-mintsglobal-1200x628.jpg" : undefined}
      />
      <JsonLd data={organizationSchema} />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={professionalServiceSchema} />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full min-h-[100svh] -mt-[116px] overflow-hidden bg-[#050a06]">
        {/* Background Parallax Image — full-width centered, no horizontal offset */}
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0 w-full h-full overflow-hidden"
        >
          {/* Full-bleed hero image, centered */}
          <motion.div
            style={{ 
              scale: astronautScale, 
              y: astronautY, 
              rotate: astronautRotate 
            }}
            className="absolute inset-0 w-full h-full will-change-transform pointer-events-none"
          >
            <SafeImage
              src="/web-1.webp"
              fallbackSrc="/web 1.webp"
              alt="Mints Global creative digital agency hero"
              width="3840"
              height="2160"
              sizes="100vw"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="w-full h-full object-cover object-center pointer-events-none [image-rendering:high-quality]"
            />
          </motion.div>

          {/* Top vignette — dark fade at top to blend with navbar */}
          <div className="absolute inset-x-0 top-0 h-[30%] bg-gradient-to-b from-[#050a06]/75 via-[#050a06]/20 to-transparent z-10 pointer-events-none" />
          {/* Bottom vignette — moderate fade so image shows but content readable */}
          <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#050a06]/90 via-[#050a06]/40 to-transparent z-10 pointer-events-none" />
          {/* Subtle left + right edge darkening */}
          <div className="absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-[#050a06]/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-[#050a06]/50 to-transparent z-10 pointer-events-none" />

          {/* Particle Grid Overlay */}
          <div className="absolute inset-0 z-10 pointer-events-none opacity-10 bg-[radial-gradient(#4d7a3c_1px,transparent_1px)] [background-size:40px_40px]" />

          {/* Noise overlay */}
          <div className="absolute inset-0 z-10 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48ZmlsdGVyIGlkPSJub2lzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ0cmFuc3BhcmVudCIgZmlsdGVyPSJ1cmwoI25vaXNlKSIvPjwvc3ZnPg==')] pointer-events-none" />
          
          {/* Atmospheric glow — centered behind image subject */}
          <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[55vw] h-[55vw] bg-radial from-olive-500/15 via-emerald-950/10 to-transparent rounded-full blur-[140px] z-0 pointer-events-none" />
        </motion.div>

        {/* FOREGROUND HERO CONTENT — absolutely pinned to bottom-center, matching reference */}
        <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28">
          <h1 className="sr-only">Best Digital Marketing Agency in Dubai</h1>

          {/* Giant centered headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black tracking-tight flex flex-col items-center gap-0 leading-none mb-4 sm:mb-5"
            aria-hidden="true"
          >
            <span className="text-white text-[clamp(1.8rem,4.5vw,5rem)] leading-[0.9] tracking-[-0.02em] uppercase block drop-shadow-[0_2px_24px_rgba(0,0,0,0.7)]">
              {t('hero.line1')}
            </span>
            <span className="text-white text-[clamp(1.8rem,4.5vw,5rem)] leading-[0.9] tracking-[-0.02em] uppercase block drop-shadow-[0_2px_24px_rgba(0,0,0,0.7)]">
              {t('hero.line2')}
            </span>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-white/60 max-w-[400px] text-sm sm:text-[15px] font-normal leading-relaxed mb-8 sm:mb-10 text-center"
          >
            {t('hero.desc')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 items-center justify-center"
          >
            <Magnetic>
              <div className="inline-block">
                <Link
                  to="/contact"
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3.5 rounded-full font-bold uppercase tracking-[0.12em] text-xs hover:bg-white/20 hover:border-white/40 transition-all duration-300 flex items-center gap-2"
                >
                  {t('hero.startProject')}
                </Link>
              </div>
            </Magnetic>
            <Magnetic>
              <div className="inline-block">
                <Link
                  to="/work"
                  className="bg-transparent border border-white/20 text-white px-8 py-3.5 rounded-full font-bold uppercase tracking-[0.12em] text-xs hover:border-white/40 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm block"
                >
                  {t('hero.viewWork')}
                </Link>
              </div>
            </Magnetic>
          </motion.div>
        </div>

        {/* Scroll indicator — fades out before reaching next section to prevent overlap */}
        <motion.button 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 2 }}
          style={{ opacity: useTransform(scrollYProgress, [0, 0.55, 0.75], [1, 0.4, 0]) }}
          onClick={() => window.scrollTo({ top: window.innerHeight - 100, behavior: 'smooth' })}
          className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-white/40 z-20 hover:text-white/70 transition-colors cursor-pointer pointer-events-auto"
        >
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}>
            ↓
          </motion.div>
          <span>Scroll</span>
        </motion.button>
      </section>

      <Marquee />

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 w-full relative z-10 bg-olive-950">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-20 gap-8">
           <div>
             <span className="text-olive-500 text-sm font-bold tracking-widest uppercase block mb-4">{t('capabilities.badge')}</span>
             <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight">{t('capabilities.title')}</h2>
           </div>
           <Magnetic>
             <div className="inline-block">
               <Link to="/services" className="shrink-0 flex items-center gap-2 text-brand-white hover:text-olive-500 transition-colors font-bold group pb-2 block">
                 {t('capabilities.explore')} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
               </Link>
             </div>
           </Magnetic>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group bg-brand-black-light border border-white/5 hover:border-olive-500/30 rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 lg:p-10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden relative flex flex-col justify-between"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-olive-500/10 rounded-full blur-[50px] group-hover:bg-olive-500/20 transition-all duration-500 -translate-y-1/2 translate-x-1/2" />
             <div>
               <div className="w-16 h-16 bg-olive-950/50 rounded-2xl mb-8 flex items-center justify-center text-olive-500 text-2xl font-black shadow-inner border border-white/5 group-hover:scale-110 transition-all duration-500">
                 <span className="group-hover:animate-bob inline-block">01</span>
               </div>
               
               <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 border border-white/10">
                  <SafeImage 
                    src="/images/data-driven-marketing-dubai.webp" 
                    fallbackSrc="/images/photography-graphics-services-dubai.webp"
                    alt="Marketing team reviewing performance analytics" 
                    width="800" 
                    height="500" 
                    loading="lazy" 
                    decoding="async"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
               </div>

               <h2 className="text-3xl font-display font-black mb-6 uppercase leading-tight text-white">{t('capabilities.s1.title', {defaultValue: 'Digital Marketing Services That Drive Real ROI'})}</h2>
               <p className="text-brand-white-70 mb-8 text-sm leading-loose tracking-wide">
                 {t('capabilities.s1.desc')}
               </p>

               <div className="space-y-6 mb-10">
                 <div className="flex gap-4 items-start">
                   <SafeImage 
                     src="/images/website-development-dubai.webp" fallbackSrc="/favicon-96x96.webp" 
                     alt="Search rankings and organic traffic dashboard" 
                     width="800" 
                     height="600" 
                     loading="lazy" 
                     decoding="async"
                     className="w-16 h-12 object-cover rounded-lg border border-white/10 shrink-0"
                   />
                   <div>
                     <h3 className="text-sm font-bold text-white uppercase tracking-wider leading-snug">SEO & Search Marketing for UAE Businesses</h3>
                     <h4 className="text-[10px] text-olive-500 font-bold uppercase tracking-widest mt-1">Local SEO for Dubai & GCC Markets</h4>
                   </div>
                 </div>

                 <div className="flex gap-4 items-start">
                   <SafeImage 
                     src="/images/mobile-app-development-dubai.webp" fallbackSrc="/favicon-96x96.webp" 
                     alt="Social campaign creative and ad manager metrics" 
                     width="800" 
                     height="600" 
                     loading="lazy" 
                     decoding="async"
                     className="w-16 h-12 object-cover rounded-lg border border-white/10 shrink-0"
                   />
                   <div>
                     <h3 className="text-sm font-bold text-white uppercase tracking-wider leading-snug">Social Media Marketing & Paid Advertising</h3>
                     <h4 className="text-[10px] text-olive-500 font-bold uppercase tracking-widest mt-1">Meta Ads, Google Ads & LinkedIn Campaigns</h4>
                   </div>
                 </div>

                 <div className="flex gap-4 items-start">
                   <div className="w-16 h-12 rounded-lg border border-dashed border-white/10 flex items-center justify-center shrink-0 text-olive-500">✍️</div>
                   <div>
                     <h3 className="text-sm font-bold text-white uppercase tracking-wider leading-snug">Content Marketing & Brand Storytelling</h3>
                   </div>
                 </div>
               </div>
             </div>
             <Link to="/digital-marketing" aria-label="Learn more about Digital Marketing Services" className="text-sm font-black uppercase tracking-widest flex items-center gap-2 hover:text-olive-500 transition-colors w-max mt-auto">{t('capabilities.learnMore')} <span className="sr-only">about Digital Marketing</span> <ArrowRight size={16} /></Link>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group bg-brand-black-light border border-white/5 hover:border-olive-500/30 rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 lg:p-10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden relative flex flex-col justify-between"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-olive-500/10 rounded-full blur-[50px] group-hover:bg-olive-500/20 transition-all duration-500 -translate-y-1/2 translate-x-1/2" />
             <div>
               <div className="w-16 h-16 bg-olive-950/50 rounded-2xl mb-8 flex items-center justify-center text-olive-500 text-2xl font-black shadow-inner border border-white/5 group-hover:scale-110 transition-all duration-500">
                 <span className="group-hover:animate-bob inline-block delay-75">02</span>
               </div>

               <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 border border-white/10">
                  <SafeImage 
                    src="/images/business-software-solutions-globe.webp" 
                    fallbackSrc="/images/web-application-development-services-dubai.webp"
                    alt="Web and mobile software architecture overview" 
                    width="800" 
                    height="500" 
                    loading="lazy" 
                    decoding="async"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
               </div>

               <h2 className="text-3xl font-display font-black mb-6 uppercase leading-tight text-white">{t('capabilities.s2.title', {defaultValue: 'Enterprise Software Development Dubai'})}</h2>
               <p className="text-brand-white-70 mb-8 text-sm leading-loose tracking-wide">
                 {t('capabilities.s2.desc')}
               </p>

               <div className="space-y-6 mb-10">
                 <div>
                   <h3 className="text-sm font-bold text-white uppercase tracking-wider leading-snug">Scalable Web & Mobile Architectures</h3>
                   <h4 className="text-[10px] text-olive-500 font-bold uppercase tracking-widest mt-1">Next.js, React Native & Microservices</h4>
                 </div>

                 <div>
                   <h3 className="text-sm font-bold text-white uppercase tracking-wider leading-snug">ERP & Custom Business Systems</h3>
                 </div>

                 <div>
                   <h3 className="text-sm font-bold text-white uppercase tracking-wider leading-snug">E-Commerce Solutions for Middle East Markets</h3>
                 </div>
               </div>
             </div>
             <Link to="/software-development" aria-label="Learn more about Enterprise Software Development Dubai" className="text-sm font-black uppercase tracking-widest flex items-center gap-2 hover:text-olive-500 transition-colors w-max mt-auto">{t('capabilities.learnMore')} <span className="sr-only">about Software Development</span> <ArrowRight size={16} /></Link>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group bg-brand-black-light border border-white/5 hover:border-olive-500/30 rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 lg:p-10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden relative flex flex-col justify-between"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-olive-500/10 rounded-full blur-[50px] group-hover:bg-olive-500/20 transition-all duration-500 -translate-y-1/2 translate-x-1/2" />
             <div>
               <div className="w-16 h-16 bg-olive-950/50 rounded-2xl mb-8 flex items-center justify-center text-olive-500 text-2xl font-black shadow-inner border border-white/5 group-hover:scale-110 transition-all duration-500">
                 <span className="group-hover:animate-bob inline-block delay-150">03</span>
               </div>

               <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 border border-white/10">
                  <SafeImage 
                    src="/images/cybersecurity-threat-intelligence-dubai.webp" 
                    fallbackSrc="/images/iso-27001-certification-in-dubai.webp" 
                    alt="Security team monitoring threat intelligence feed" 
                    width="800" 
                    height="500" 
                    loading="lazy" 
                    decoding="async" 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
               </div>

               <h2 className="text-3xl font-display font-black mb-6 uppercase leading-tight text-white">{t('capabilities.s3.title', {defaultValue: 'Cybersecurity Solutions for Global Brands'})}</h2>
               <p className="text-brand-white-70 mb-8 text-sm leading-loose tracking-wide">
                 {t('capabilities.s3.desc')}
               </p>

               <div className="space-y-6 mb-10">
                 <div>
                   <h3 className="text-sm font-bold text-white uppercase tracking-wider leading-snug">Military-Grade Cyber Protection Services</h3>
                   <h4 className="text-[10px] text-olive-500 font-bold uppercase tracking-widest mt-1">Threat Detection & Incident Response</h4>
                 </div>

                 <div>
                   <h3 className="text-sm font-bold text-white uppercase tracking-wider leading-snug">Compliance & Data Privacy Consulting</h3>
                 </div>
               </div>
             </div>
             <Link to="/cyber-security" aria-label="Learn more about Cybersecurity Solutions for Global Brands" className="text-sm font-black uppercase tracking-widest flex items-center gap-2 hover:text-olive-500 transition-colors w-max mt-auto">{t('capabilities.learnMore')} <span className="sr-only">about Cyber Security</span> <ArrowRight size={16} /></Link>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-16 sm:py-24 lg:py-32 w-full bg-olive-950 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-20 gap-8">
            <div>
              <span className="text-olive-500 text-sm font-bold tracking-widest uppercase block mb-4">Selected Work</span>
              <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight">Our Work</h2>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <Magnetic>
                <div className="inline-block">
                  <a 
                    href="https://portfolio.mintsglobal.tech/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-olive-500 text-white px-5 sm:px-6 py-3 rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm hover:bg-olive-400 transition-colors shrink-0"
                  >
                    Interactive Demos & Products <ArrowRight size={18} />
                  </a>
                </div>
              </Magnetic>
              <Magnetic>
                <div className="inline-block">
                  <Link to="/work" className="shrink-0 flex items-center gap-2 text-brand-white hover:text-olive-500 transition-colors font-bold group pb-2 block mt-2 sm:mt-0">
                    View All Projects <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Magnetic>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {recentProjects.map((project, idx) => (
              <motion.div 
                key={project._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`group relative ${idx % 2 === 1 ? 'md:mt-24' : ''}`}
              >
                <Link to={`/work/${project._id}`} className="block overflow-hidden rounded-2xl sm:rounded-[2rem] aspect-[4/3] bg-olive-900 border border-white/5 mb-6">
                   <img 
                     src={project.titleImage} 
                     alt={project.title} 
                     className="w-full h-full object-cover group-hover:scale-105 group-hover:opacity-80 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                     loading="lazy"
                   />
                </Link>
                <div className="flex flex-col items-start px-2">
                  <span className="text-olive-500 text-xs font-bold uppercase tracking-widest mb-3 border border-olive-500/30 px-3 py-1 rounded-full">{project.category.name}</span>
                  <Link to={`/work/${project._id}`} className="inline-block">
                    <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl hover:text-olive-500 transition-colors uppercase tracking-tight mb-4">{project.title}</h3>
                  </Link>
                  {(project.duration || project.kpi) && (
                    <div className="flex flex-wrap items-center gap-3 w-full text-xs font-medium uppercase tracking-wider text-white">
                      {project.duration && <span className="bg-white/5 px-2 py-1 rounded-md border border-white/10">⏱ {project.duration}</span>}
                      {project.kpi && <span className="text-olive-400 bg-olive-500/10 px-2 py-1 rounded-md border border-olive-500/20">🚀 {project.kpi}</span>}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About + Stats Section combined */}
      <section className="py-16 sm:py-24 lg:py-32 w-full bg-olive-900/60 overflow-hidden relative z-10 border-t border-white/5">
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-olive-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
             {/* Left Column: Narrative & Values */}
             <div className="flex flex-col">
                <span className="text-olive-500 text-sm font-bold tracking-widest uppercase block mb-4">Who We Are</span>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-6 leading-tight text-white">
                  Why Mints Global is Dubai's Most Trusted Digital Agency
                </h2>
                <p className="text-brand-white-70 text-lg leading-relaxed mb-8">
                  We are an independent digital agency based in Dubai. Our engineers, designers, and marketing strategists work directly with founding teams and enterprise leaders to build things that work and scale.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                    <h3 className="text-base font-bold text-white uppercase tracking-wider mb-2">Dual-Market Grounding: Dubai & Europe</h3>
                    <p className="text-brand-white-70 text-xs leading-relaxed">Cross-border engineering and marketing, adapting international execution standards to GCC regulatory environments like NESA and PDPL.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                    <h3 className="text-base font-bold text-white uppercase tracking-wider mb-2">Engineers & Marketers, Not Account Managers</h3>
                    <p className="text-brand-white-70 text-xs leading-relaxed">You speak directly to the specialists writing the code and managing your spend. No communication layers, no fluff, just measurable results.</p>
                  </div>
                </div>

                <Magnetic>
                  <div className="inline-block">
                    <Link to="/about" className="inline-flex items-center gap-3 border border-white/20 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:border-olive-500 hover:text-olive-500 transition-all block">
                      About Us <ArrowRight size={18} className="inline ml-1" />
                    </Link>
                  </div>
                </Magnetic>
             </div>
             
             {/* Right Column: Visual Team & Clean 2x2 Stats */}
             <div className="flex flex-col gap-8 w-full">
                {/* Team photo */}
                <div className="w-full aspect-[16/10] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl relative">
                  <SafeImage 
                    src="/images/mints-global-team-dubai.webp" fallbackSrc="/hero.webp" 
                    alt="The Mints Global team at our Dubai office" 
                    width="900" 
                    height="600" 
                    loading="lazy" 
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* 2x2 Stats Grid aligned cleanly */}
                <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full">
                   <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-center">
                      <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-olive-500 mb-1 leading-none">
                        <CountUp end={250} duration={2.5} enableScrollSpy />+
                      </div>
                      <div className="font-bold text-xs sm:text-sm text-brand-white uppercase tracking-wider mt-2">Projects Delivered</div>
                   </div>

                   <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-center">
                      <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-olive-500 mb-1 leading-none">
                        <CountUp end={35} duration={2.5} enableScrollSpy />+
                      </div>
                      <div className="font-bold text-xs sm:text-sm text-brand-white uppercase tracking-wider mt-2">Enterprise Clients</div>
                   </div>

                   <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-center">
                      <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-1 leading-none">
                        <CountUp end={5} duration={2.5} enableScrollSpy />
                      </div>
                      <div className="font-bold text-xs sm:text-sm text-brand-white-70 uppercase tracking-wider mt-2">Years Experience</div>
                   </div>

                   <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-center">
                      <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-1 leading-none">
                        <CountUp end={99} duration={2.5} enableScrollSpy />%
                      </div>
                      <div className="font-bold text-xs sm:text-sm text-brand-white-70 uppercase tracking-wider mt-2">Client Retention</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Client Logos Strip */}
      <section className="py-24 border-t border-white/5 bg-brand-black overflow-hidden relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
          <p className="text-center text-brand-white-70 text-sm font-bold uppercase tracking-widest">{t('trusted')}</p>
        </div>
        <div className="relative w-full flex">
          <div className="absolute inset-y-0 left-0 w-24 md:w-32 bg-gradient-to-r from-brand-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 md:w-32 bg-gradient-to-l from-brand-black to-transparent z-10 pointer-events-none"></div>
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
             {[...Array(2)].map((_, i) => (
               <div key={i} className="flex items-center">
                 <div className="px-10 md:px-16 flex items-center justify-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110">
                    <div className="flex flex-col items-center justify-center font-sans tracking-tighter">
                      <div className="flex items-center text-5xl font-black leading-none bg-white/5 py-2 px-4 rounded-xl border border-white/10 group-hover:bg-white transition-colors duration-500">
                         <span className="text-[#184d28]">H</span>
                         <span className="text-[#4d7a3c] -mt-1 text-6xl">D</span>
                         <span className="text-[#184d28]">F</span>
                      </div>
                      <div className="flex flex-col text-center mt-2 group-hover:opacity-100 opacity-60 transition-opacity">
                        <span className="text-[0.6rem] font-bold text-white tracking-[0.2em] leading-none">BUSINESS</span>
                        <span className="text-[0.6rem] font-bold text-white tracking-[0.2em] leading-none mt-1">SERVICES</span>
                      </div>
                    </div>
                 </div>
                 <div className="px-10 md:px-16 flex items-center justify-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110">
                    <div className="flex flex-col items-center justify-center font-serif">
                      <span className="text-5xl font-medium tracking-wider" style={{ background: 'linear-gradient(to bottom, #FFDF73, #B8860B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Lavessi</span>
                      <span className="text-[0.5rem] tracking-[0.25em] text-[#D4AF37] mt-1 whitespace-nowrap font-sans font-medium">LADIES CLOTHES TAILORING</span>
                    </div>
                 </div>
                 <div className="px-10 md:px-16 flex items-center justify-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110 group">
                    <div className="flex flex-col items-center justify-center font-sans tracking-tight">
                      <div className="flex items-center">
                        <span className="text-4xl font-extrabold text-[#7c3aed]">WISE</span>
                        <span className="text-4xl font-black text-[#e879f9] ml-1">CAT</span>
                      </div>
                      <span className="text-[0.5rem] tracking-[0.3em] text-[#a78bfa] mt-1 whitespace-nowrap font-sans font-medium uppercase font-bold">Business Solutions</span>
                    </div>
                 </div>
                 <div className="px-10 md:px-16 flex items-center justify-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110 group">
                    <div className="flex flex-col items-center justify-center font-serif">
                      <span className="text-5xl font-light italic tracking-widest text-[#fb923c]">Nohemi</span>
                      <span className="text-[0.5rem] tracking-[0.25em] text-[#fdba74] mt-1 whitespace-nowrap font-sans font-bold uppercase">E-COMMERCE BRAND</span>
                    </div>
                 </div>
                 <div className="px-10 md:px-16 flex items-center justify-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110 group">
                    <div className="flex flex-col items-center justify-center font-sans tracking-tight">
                      <div className="flex items-center">
                        <span className="text-4xl font-extrabold text-slate-300">GULF</span>
                        <span className="text-4xl font-black text-slate-500 ml-1">STEEL</span>
                      </div>
                      <span className="text-[0.5rem] tracking-[0.4em] text-slate-400 mt-1 whitespace-nowrap font-sans font-medium uppercase font-bold">Industrial Solutions</span>
                    </div>
                 </div>
                 <div className="px-10 md:px-16 flex items-center justify-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110 group">
                    <div className="flex flex-col items-center justify-center font-sans tracking-tight">
                      <div className="flex items-center">
                        <span className="text-4xl font-extrabold text-[#f43f5e]">N</span>
                        <span className="text-4xl font-light text-[#fb7185] ml-1">UX</span>
                      </div>
                      <span className="text-[0.5rem] tracking-[0.4em] text-[#fda4af] mt-1 whitespace-nowrap font-sans font-medium uppercase font-bold">Branding</span>
                    </div>
                 </div>
                 <div className="px-10 md:px-16 flex items-center justify-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110 group">
                    <div className="flex flex-col items-center justify-center font-serif">
                      <span className="text-4xl font-bold tracking-widest text-[#fbbf24]">IDUKKI GOLD</span>
                      <span className="text-[0.4rem] tracking-[0.5em] text-[#fcd34d] mt-1 whitespace-nowrap font-sans uppercase">Premium Jewellers</span>
                    </div>
                 </div>
                 <div className="px-10 md:px-16 flex items-center justify-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110 group">
                    <div className="flex flex-col items-center justify-center font-serif">
                      <span className="text-5xl font-light italic tracking-widest text-[#4d7a3c]">OUD</span>
                      <span className="text-[0.5rem] tracking-[0.25em] text-[#6e9c56] mt-1 whitespace-nowrap font-sans font-bold uppercase">Fragrances</span>
                    </div>
                 </div>
                 <div className="px-10 md:px-16 flex items-center justify-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110 group text-center">
                    <div className="flex flex-col items-center justify-center font-sans tracking-tight">
                      <span className="text-3xl font-black text-[#60a5fa] leading-none mb-1">INDIAN PRAVASI</span>
                      <span className="text-2xl font-light text-[#93c5fd] leading-none">MOVEMENT</span>
                      <span className="text-[0.4rem] tracking-[0.3em] text-[#bfdbfe] mt-2 whitespace-nowrap font-bold uppercase">Organization</span>
                    </div>
                 </div>
                 <div className="px-10 md:px-16 flex items-center justify-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110 group">
                    <div className="flex flex-col items-center justify-center font-sans tracking-tight">
                      <div className="flex items-center">
                        <span className="text-4xl font-bold text-[#34d399]">GARDEN</span>
                        <span className="text-4xl font-light text-[#6ee7b7] ml-1">VILLE</span>
                      </div>
                      <span className="text-[0.5rem] tracking-[0.4em] text-[#a7f3d0] mt-1 whitespace-nowrap uppercase font-bold">Real Estate</span>
                    </div>
                 </div>
                 <div className="px-10 md:px-16 flex items-center justify-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110 group">
                    <div className="flex flex-col items-center justify-center font-sans">
                      <div className="flex items-center">
                        <span className="text-4xl font-black text-white tracking-tighter" style={{ fontFamily: 'Impact, sans-serif', transform: 'scale(1, 0.9)' }}>MOSTRADOR</span>
                      </div>
                    </div>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24 lg:py-32 w-full bg-olive-950 border-t border-white/5 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-20 gap-8">
            <div>
               <span className="text-olive-500 text-sm font-bold tracking-widest uppercase block mb-4">{t('testimonials.title1')}{t('testimonials.title2')}</span>
               <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight">{t('testimonials.title1')} <span className="text-olive-500">{t('testimonials.title2')}</span></h2>
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={handlePrevTestimonial}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-olive-500 hover:border-olive-500 transition-colors"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="text-white" />
              </button>
              <button 
                onClick={handleNextTestimonial}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-olive-500 hover:border-olive-500 transition-colors"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="text-white" />
              </button>
            </div>
          </div>

          <div className="relative">
             <div className="overflow-hidden">
               <AnimatePresence mode="wait">
                 <motion.div 
                   key={activeTestimonial}
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -20 }}
                   transition={{ duration: 0.4 }}
                   className="bg-brand-black-light border border-white/5 p-6 sm:p-10 md:p-16 rounded-2xl sm:rounded-[3rem]"
                 >
                   <div className="flex text-olive-500 mb-6 sm:mb-8">
                     {[...Array(5)].map((_, i) => (
                       <svg key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
                         <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                       </svg>
                     ))}
                   </div>
                   <p className="font-display text-xl sm:text-2xl md:text-4xl text-brand-white leading-relaxed mb-8 sm:mb-12">
                     "{testimonials[activeTestimonial].doc}"
                   </p>
                   <div className="flex items-center gap-4 sm:gap-6">
                     <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-olive-900 border border-white/10 flex items-center justify-center shrink-0">
                       <User className="text-olive-500" size={24} />
                     </div>
                     <div>
                       <h3 className="font-display font-bold text-lg sm:text-xl uppercase tracking-wider">{testimonials[activeTestimonial].name}</h3>
                       <p className="text-brand-white-70 text-xs sm:text-sm uppercase tracking-widest">{testimonials[activeTestimonial].role}</p>
                     </div>
                   </div>
                 </motion.div>
               </AnimatePresence>
             </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-16 sm:py-24 lg:py-32 w-full bg-olive-950 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-20 gap-8">
            <div>
              <span className="text-olive-500 text-sm font-bold tracking-widest uppercase block mb-4">Latest Insights</span>
              <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight">Journal</h2>
            </div>
            <Magnetic>
              <div className="inline-block">
                <Link to="/blog" className="shrink-0 flex items-center gap-2 text-brand-white hover:text-olive-500 transition-colors font-bold group pb-2 block">
                  View All Posts <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform inline" />
                </Link>
              </div>
            </Magnetic>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, idx) => (
               <motion.div
                 key={post.id}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: idx * 0.1 }}
                 className="group flex flex-col bg-brand-black-light border border-white/5 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-olive-500/30 transition-all duration-300"
               >
                 <Link to={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden">
                   <img 
                     src={post.image} 
                     alt={post.imageAlt || post.title} 
                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                     loading="lazy"
                   />
                 </Link>
                 <div className="p-6 sm:p-8 flex flex-col flex-1">
                   <div className="flex items-center gap-4 text-xs font-bold tracking-wider text-olive-500 uppercase mb-4">
                     <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                   </div>
                   <Link to={`/blog/${post.slug}`} className="block mb-4">
                     <h3 className="font-display font-bold text-xl sm:text-2xl group-hover:text-olive-500 transition-colors leading-tight line-clamp-2">{post.title}</h3>
                   </Link>
                   <p className="text-brand-white-70 text-sm leading-relaxed line-clamp-3 mb-6 flex-1">
                     {post.content.replace(/<[^>]*>?/gm, '').substring(0, 120)}...
                   </p>
                   <Link to={`/blog/${post.slug}`} className="text-sm font-black uppercase tracking-widest flex items-center gap-2 hover:text-olive-500 transition-colors mt-auto w-max">
                     Read Article <ArrowRight size={16} />
                   </Link>
                 </div>
               </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-16 sm:py-24 lg:py-32 w-full bg-olive-900 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-20">
            <span className="text-olive-500 text-sm font-bold tracking-widest uppercase block mb-4">International Capabilities</span>
            <AnimatedChars text="From Dubai to Europe." className="font-display text-3xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tight" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-brand-black-light border border-white/5 p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-[2rem] hover:border-olive-500/20 transition-colors hover:-translate-y-2 duration-300">
              <h3 className="font-display font-black text-2xl sm:text-3xl uppercase mb-6 flex items-center gap-4">🇦🇪 UAE</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed mb-8">Dubai HQ. Arabic-first strategy, NESA compliance, and deep local market integration for brands scaling across the Middle East.</p>
              <ul className="space-y-3 text-sm font-bold tracking-wider text-olive-300 uppercase">
                <li>✓ NESA & PDPL Compliant</li>
                <li>✓ Native Arabic Marketing</li>
                <li>✓ Local Business Integration</li>
              </ul>
            </div>
            <div className="bg-brand-black-light border border-white/5 p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-[2rem] hover:border-olive-500/20 transition-colors hover:-translate-y-2 duration-300">
              <h3 className="font-display font-black text-2xl sm:text-3xl uppercase mb-6 flex items-center gap-4">🇩🇪 DACH</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed mb-8">GDPR/DSGVO-compliant solutions, precision-engineered software, and B2B localized campaigns for the German market.</p>
              <ul className="space-y-3 text-sm font-bold tracking-wider text-olive-300 uppercase">
                <li>✓ DSGVO & GDPR Strict</li>
                <li>✓ German Localized SEO</li>
                <li>✓ B2B Growth Engines</li>
              </ul>
            </div>
            <div className="bg-brand-black-light border border-white/5 p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-[2rem] hover:border-olive-500/20 transition-colors hover:-translate-y-2 duration-300">
              <h3 className="font-display font-black text-2xl sm:text-3xl uppercase mb-6 flex items-center gap-4">🇬🇧 UK</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed mb-8">High-performance English-language campaigns, robust platforms, and competitive organic dominance for the UK market.</p>
              <ul className="space-y-3 text-sm font-bold tracking-wider text-olive-300 uppercase">
                <li>✓ High-Competition SEO</li>
                <li>✓ UK Market Positioning</li>
                <li>✓ Multi-Currency Processing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Full width olive background */}
      <section className="py-16 sm:py-24 lg:py-32 w-full bg-olive-500 text-white relative z-10 overflow-hidden">
         {/* Background pattern */}
         <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48ZmlsdGVyIGlkPSJub2lzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ0cmFuc3BhcmVudCIgZmlsdGVyPSJ1cmwoI25vaXNlKSIvPjwvc3ZnPg==')] pointer-events-none" />
         
         <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-20">
            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-none tracking-tighter uppercase text-white">
              Get a Free Consultation With Our Dubai Marketing Experts
            </h2>
            <p className="text-brand-white/80 text-lg md:text-xl lg:text-2xl font-medium mb-12 max-w-3xl mx-auto">{t('cta.desc')}</p>
            <Magnetic>
              <div className="inline-block">
                <Link to="/contact" className="inline-flex items-center gap-3 bg-brand-white text-olive-950 px-12 py-6 rounded-full font-black uppercase tracking-widest hover:bg-brand-black hover:text-white transition-all hover:scale-105 shadow-2xl block">
                  {t('cta.btn')} <ArrowRight size={20} className="inline ml-1" />
                </Link>
              </div>
            </Magnetic>
         </div>
      </section>

      <JsonLd data={organizationSchema} />
      <JsonLd data={professionalServiceSchema} />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema} />
    </div>
  );
}
