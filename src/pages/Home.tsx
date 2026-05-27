import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import CountUp from 'react-countup';
import { ArrowRight, ShieldCheck, Zap, LineChart, Globe2, Rocket, Headphones, ChevronLeft, ChevronRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SEO } from '../components/SEO';
import { SEO_DATA } from '../lib/seo-data';
import { JsonLd } from '../components/JsonLd';
import { AnimatedChars } from '../components/AnimatedChars';
import { Magnetic } from '../components/Magnetic';
import { projects } from '../data/projects';
import { posts } from '../data/posts';

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://mintsglobal.ae/#website",
  "url": "https://mintsglobal.ae",
  "name": "Mints Global",
  "description": "Premium digital agency — Digital Marketing, Software Development & Cyber Security",
  "publisher": { "@id": "https://mintsglobal.ae/#organization" },
  "potentialAction": {
    "@type": "SearchAction",
    "target": { "@type": "EntryPoint", "urlTemplate": "https://mintsglobal.ae/blog?q={search_term_string}" },
    "query-input": "required name=search_term_string"
  }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://mintsglobal.ae/#localbusiness",
  "name": "Mints Global",
  "image": "https://mintsglobal.ae/og-image.jpg",
  "url": "https://mintsglobal.ae",
  "telephone": "+971502943916",
  "email": "info@mintsglobal.ae",
  "priceRange": "AED 15,000+",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Office #315, 3rd Floor, Bank Street Building",
    "addressLocality": "Bur Dubai",
    "addressRegion": "Dubai",
    "postalCode": "00000",
    "addressCountry": "AE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 25.2631,
    "longitude": 55.3024
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.linkedin.com/company/mints-dubai",
    "https://www.instagram.com/mints.global/"
  ]
};

const Marquee = () => {
  const { t } = useTranslation();
  const TICKER = t('marquee', { returnObjects: true }) as string[];

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

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

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

  const recentProjects = projects.slice(0, 4);
  const recentPosts = posts.slice(0, 3);

  return (
    <div className="flex flex-col w-full overflow-x-hidden pt-[116px]">
      <SEO 
        title={meta.title}
        description={meta.description}
        keywords={["digital agency Dubai", "software development company UAE", "cyber security agency", "digital marketing agency", "Mints Global"]}
        canonical="/"
      />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full min-h-[100vh] lg:min-h-[90vh] -mt-[116px] overflow-hidden flex items-center justify-center py-32">
        {/* Background Parallax Image */}
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0 w-full h-full"
        >
          <div className="absolute inset-0 bg-olive-950/80 mix-blend-multiply z-10" />
          <img
            src="/hero.webp"
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover opacity-30 z-0 pointer-events-none"
          />
          {/* Noise overlay */}
          <div className="absolute inset-0 z-10 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48ZmlsdGVyIGlkPSJub2lzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ0cmFuc3BhcmVudCIgZmlsdGVyPSJ1cmwoI25vaXNlKSIvPjwvc3ZnPg==')] pointer-events-none" />
          
          {/* Animated Blobs */}
          <motion.div 
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-olive-500/20 rounded-full blur-[120px] z-0 pointer-events-none" 
          />
          <motion.div 
            animate={{ 
              x: [0, -100, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-brand-white/10 rounded-full blur-[100px] z-0 pointer-events-none" 
          />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20 w-full mt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest text-brand-white uppercase backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-olive-500 animate-pulse"></span>
              {t('hero.badge')} — Dubai
            </div>
            
            <h1 className="font-display font-black tracking-tighter mb-10 w-full overflow-visible flex flex-col gap-2 sm:gap-0 leading-none">
              <div className="self-start">
                <AnimatedChars text={t('hero.line1')} className="text-brand-white text-[clamp(4.5rem,10vw,10rem)] leading-[0.85] tracking-tight" delay={0.3} />
              </div>
              <div className="self-start ml-[clamp(16px,4vw,56px)]">
                <AnimatedChars text={t('hero.line2')} className="text-brand-white text-[clamp(2.3rem,9vw,9rem)] leading-[0.85] tracking-tight" delay={0.6} />
              </div>
              <div className="self-start ml-[clamp(32px,8vw,112px)] mt-4">
                <AnimatedChars text={t('hero.line3')} className="text-[clamp(4.5rem,10vw,10rem)] leading-[0.85] tracking-tight text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.7)]" delay={0.9} />
              </div>
            </h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-10 text-brand-white-70 max-w-2xl text-lg md:text-xl font-medium leading-relaxed"
            >
              {t('hero.desc')}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="mt-12 flex flex-wrap gap-4 items-center"
            >
              <Magnetic>
                <div className="inline-block">
                  <Link to="/contact" className="bg-olive-500 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-olive-400 transition-colors flex items-center gap-2">
                    {t('hero.startProject')} <ArrowRight size={18} />
                  </Link>
                </div>
              </Magnetic>
              <Magnetic>
                <div className="inline-block">
                  <Link to="/work" className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:border-white hover:bg-white/5 transition-colors backdrop-blur-sm block">
                    {t('hero.viewWork')}
                  </Link>
                </div>
              </Magnetic>
            </motion.div>
          </motion.div>
        </div>

        <motion.button 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 2 }}
          onClick={() => window.scrollTo({ top: window.innerHeight - 100, behavior: 'smooth' })}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 md:bottom-12 md:left-12 md:translate-x-0 flex items-center gap-3 text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-white-40 z-20 hover:text-white transition-colors cursor-pointer"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            ↓
          </motion.div>
          Scroll to explore
        </motion.button>
      </section>

      <Marquee />

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-32 w-full relative z-10 bg-olive-950">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
           <div>
             <span className="text-olive-500 text-sm font-bold tracking-widest uppercase block mb-4">{t('capabilities.badge')}</span>
             <h2 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tight">{t('capabilities.title')}</h2>
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
          <div className="group bg-brand-black-light border border-white/5 hover:border-olive-500/30 rounded-[2rem] p-10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden relative">
             <div className="absolute top-0 right-0 w-32 h-32 bg-olive-500/10 rounded-full blur-[50px] group-hover:bg-olive-500/20 transition-all duration-500 -translate-y-1/2 translate-x-1/2" />
             <div className="w-16 h-16 bg-olive-950/50 rounded-2xl mb-10 flex items-center justify-center text-olive-500 text-2xl font-black shadow-inner border border-white/5 group-hover:scale-110 transition-all duration-500">
               <span className="group-hover:animate-bob inline-block">01</span>
             </div>
             <h3 className="text-3xl font-display font-bold mb-6">{t('capabilities.s1.title')}</h3>
             <p className="text-brand-white-70 mb-10 text-sm leading-loose tracking-wide">
               {t('capabilities.s1.desc')}
             </p>
             <ul className="space-y-4 text-sm font-medium mb-10">
                <li className="flex gap-3 text-brand-white-90"><ArrowRight size={18} className="text-olive-500 shrink-0" /> {t('capabilities.s1.l1')}</li>
                <li className="flex gap-3 text-brand-white-90"><ArrowRight size={18} className="text-olive-500 shrink-0" /> {t('capabilities.s1.l2')}</li>
                <li className="flex gap-3 text-brand-white-90"><ArrowRight size={18} className="text-olive-500 shrink-0" /> {t('capabilities.s1.l3')}</li>
             </ul>
             <Link to="/digital-marketing" className="text-sm font-black uppercase tracking-widest flex items-center gap-2 hover:text-olive-500 transition-colors w-max">{t('capabilities.learnMore')} <ArrowRight size={16} /></Link>
          </div>

          {/* Card 2 */}
          <div className="group bg-brand-black-light border border-white/5 hover:border-olive-500/30 rounded-[2rem] p-10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden relative">
             <div className="absolute top-0 right-0 w-32 h-32 bg-olive-500/10 rounded-full blur-[50px] group-hover:bg-olive-500/20 transition-all duration-500 -translate-y-1/2 translate-x-1/2" />
             <div className="w-16 h-16 bg-olive-950/50 rounded-2xl mb-10 flex items-center justify-center text-olive-500 text-2xl font-black shadow-inner border border-white/5 group-hover:scale-110 transition-all duration-500">
               <span className="group-hover:animate-bob inline-block delay-75">02</span>
             </div>
             <h3 className="text-3xl font-display font-bold mb-6">{t('capabilities.s2.title')}</h3>
             <p className="text-brand-white-70 mb-10 text-sm leading-loose tracking-wide">
               {t('capabilities.s2.desc')}
             </p>
             <ul className="space-y-4 text-sm font-medium mb-10">
                <li className="flex gap-3 text-brand-white-90"><ArrowRight size={18} className="text-olive-500 shrink-0" /> {t('capabilities.s2.l1')}</li>
                <li className="flex gap-3 text-brand-white-90"><ArrowRight size={18} className="text-olive-500 shrink-0" /> {t('capabilities.s2.l2')}</li>
                <li className="flex gap-3 text-brand-white-90"><ArrowRight size={18} className="text-olive-500 shrink-0" /> {t('capabilities.s2.l3')}</li>
             </ul>
             <Link to="/software-development" className="text-sm font-black uppercase tracking-widest flex items-center gap-2 hover:text-olive-500 transition-colors w-max">{t('capabilities.learnMore')} <ArrowRight size={16} /></Link>
          </div>

          {/* Card 3 */}
          <div className="group bg-brand-black-light border border-white/5 hover:border-olive-500/30 rounded-[2rem] p-10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden relative">
             <div className="absolute top-0 right-0 w-32 h-32 bg-olive-500/10 rounded-full blur-[50px] group-hover:bg-olive-500/20 transition-all duration-500 -translate-y-1/2 translate-x-1/2" />
             <div className="w-16 h-16 bg-olive-950/50 rounded-2xl mb-10 flex items-center justify-center text-olive-500 text-2xl font-black shadow-inner border border-white/5 group-hover:scale-110 transition-all duration-500">
               <span className="group-hover:animate-bob inline-block delay-150">03</span>
             </div>
             <h3 className="text-3xl font-display font-bold mb-6">{t('capabilities.s3.title')}</h3>
             <p className="text-brand-white-70 mb-10 text-sm leading-loose tracking-wide">
               {t('capabilities.s3.desc')}
             </p>
             <ul className="space-y-4 text-sm font-medium mb-10">
                <li className="flex gap-3 text-brand-white-90"><ArrowRight size={18} className="text-olive-500 shrink-0" /> {t('capabilities.s3.l1')}</li>
                <li className="flex gap-3 text-brand-white-90"><ArrowRight size={18} className="text-olive-500 shrink-0" /> {t('capabilities.s3.l2')}</li>
                <li className="flex gap-3 text-brand-white-90"><ArrowRight size={18} className="text-olive-500 shrink-0" /> {t('capabilities.s3.l3')}</li>
             </ul>
             <Link to="/cyber-security" className="text-sm font-black uppercase tracking-widest flex items-center gap-2 hover:text-olive-500 transition-colors w-max">{t('capabilities.learnMore')} <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-32 w-full bg-olive-950 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <span className="text-olive-500 text-sm font-bold tracking-widest uppercase block mb-4">Selected Work</span>
              <h2 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tight">Our Work</h2>
            </div>
            <Magnetic>
              <div className="inline-block">
                <Link to="/work" className="shrink-0 flex items-center gap-2 text-brand-white hover:text-olive-500 transition-colors font-bold group pb-2 block">
                  View All Projects <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Magnetic>
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
                <Link to={`/work/${project._id}`} className="block overflow-hidden rounded-[2rem] aspect-[4/3] bg-olive-900 border border-white/5 mb-6">
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
                    <h3 className="font-display font-black text-3xl md:text-4xl hover:text-olive-500 transition-colors uppercase tracking-tight">{project.title}</h3>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About + Stats Section combined */}
      <section className="py-32 w-full bg-olive-900 overflow-hidden relative z-10 border-t border-white/5">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
            <polygon fill="currentColor" points="100,0 100,100 0,100" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
             <div>
                <span className="text-olive-500 text-sm font-bold tracking-widest uppercase block mb-6">Who We Are</span>
                <AnimatedChars text="DRIVING DIGITAL EXCELLENCE" className="font-display text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-8 leading-none" />
                <p className="text-brand-white-70 text-lg md:text-xl leading-relaxed mb-8">
                  We are a premium digital agency based in Dubai, architecting solutions at the intersection of powerful software, striking design, and robust security.
                </p>
                <p className="text-brand-white-70 text-lg leading-relaxed mb-12">
                  Our multidisciplinary team partners with global enterprises to modernize their operations, captivate their audiences, and secure their digital future across the UAE and Europe.
                </p>
                <Magnetic>
                  <div className="inline-block">
                    <Link to="/about" className="inline-flex items-center gap-3 border border-white/20 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:border-olive-500 hover:text-olive-500 transition-all block">
                      About Us <ArrowRight size={18} className="inline ml-1" />
                    </Link>
                  </div>
                </Magnetic>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 relative max-w-lg mx-auto lg:ml-auto lg:mr-0">
                <div className="absolute inset-0 bg-olive-500/5 blur-3xl rounded-full" />
                <div className="flex flex-col">
                   <div className="font-display text-5xl md:text-7xl font-black text-olive-500 mb-2">
                     <CountUp end={250} duration={2.5} enableScrollSpy />+
                   </div>
                   <div className="font-bold text-sm text-brand-white uppercase tracking-wider">Projects Delivered</div>
                </div>
                <div className="flex flex-col mt-12 md:mt-16">
                   <div className="font-display text-5xl md:text-7xl font-black text-olive-500 mb-2">
                     <CountUp end={35} duration={2.5} enableScrollSpy />+
                   </div>
                   <div className="font-bold text-sm text-brand-white uppercase tracking-wider">Enterprise Clients</div>
                </div>
                <div className="flex flex-col">
                   <div className="font-display text-5xl md:text-7xl font-black text-white mb-2">
                     <CountUp end={15} duration={2.5} enableScrollSpy />
                   </div>
                   <div className="font-bold text-sm text-brand-white-70 uppercase tracking-wider">Years Experience</div>
                </div>
                <div className="flex flex-col mt-12 md:mt-16">
                   <div className="font-display text-5xl md:text-7xl font-black text-white mb-2">
                     <CountUp end={99} duration={2.5} enableScrollSpy />%
                   </div>
                   <div className="font-bold text-sm text-brand-white-70 uppercase tracking-wider">Client Retention</div>
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
             {[...Array(6)].map((_, i) => (
               <div key={i} className="flex items-center">
                 <div className="px-10 md:px-16 flex items-center justify-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110">
                    <div className="flex flex-col items-center justify-center font-sans tracking-tighter">
                      <div className="flex items-center text-5xl font-black leading-none bg-white/5 py-2 px-4 rounded-xl border border-white/10 group-hover:bg-white transition-colors duration-500">
                         <span className="text-[#184d28]">H</span>
                         <span className="text-[#6bbd24] -mt-1 text-6xl">D</span>
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
                      <span className="text-5xl font-light italic tracking-widest text-[#a3e635]">OUD</span>
                      <span className="text-[0.5rem] tracking-[0.25em] text-[#bef264] mt-1 whitespace-nowrap font-sans font-bold uppercase">Fragrances</span>
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
      <section className="py-32 w-full bg-olive-950 border-t border-white/5 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
               <span className="text-olive-500 text-sm font-bold tracking-widest uppercase block mb-4">{t('testimonials.title1')}{t('testimonials.title2')}</span>
               <h2 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tight">{t('testimonials.title1')} <span className="text-olive-500">{t('testimonials.title2')}</span></h2>
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={handlePrevTestimonial}
                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-olive-500 hover:border-olive-500 transition-colors"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="text-white" />
              </button>
              <button 
                onClick={handleNextTestimonial}
                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-olive-500 hover:border-olive-500 transition-colors"
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
                   className="bg-brand-black-light border border-white/5 p-10 md:p-16 rounded-[3rem]"
                 >
                   <div className="flex text-olive-500 mb-8">
                     {[...Array(5)].map((_, i) => (
                       <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                         <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                       </svg>
                     ))}
                   </div>
                   <p className="font-display text-2xl md:text-4xl text-brand-white leading-relaxed mb-12">
                     "{testimonials[activeTestimonial].doc}"
                   </p>
                   <div className="flex items-center gap-6">
                     <div className="w-16 h-16 rounded-full bg-olive-900 border border-white/10 flex items-center justify-center">
                       <User className="text-olive-500" size={24} />
                     </div>
                     <div>
                       <h4 className="font-display font-bold text-xl uppercase tracking-wider">{testimonials[activeTestimonial].name}</h4>
                       <p className="text-brand-white-70 text-sm uppercase tracking-widest">{testimonials[activeTestimonial].role}</p>
                     </div>
                   </div>
                 </motion.div>
               </AnimatePresence>
             </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-32 w-full bg-olive-950 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <span className="text-olive-500 text-sm font-bold tracking-widest uppercase block mb-4">Latest Insights</span>
              <h2 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tight">Journal</h2>
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
                 className="group flex flex-col bg-brand-black-light border border-white/5 rounded-3xl overflow-hidden hover:border-olive-500/30 transition-all duration-300"
               >
                 <Link to={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden">
                   <img 
                     src={post.image} 
                     alt={post.title} 
                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                     loading="lazy"
                   />
                 </Link>
                 <div className="p-8 flex flex-col flex-1">
                   <div className="flex items-center gap-4 text-xs font-bold tracking-wider text-olive-500 uppercase mb-4">
                     <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                   </div>
                   <Link to={`/blog/${post.slug}`} className="block mb-4">
                     <h3 className="font-display font-bold text-2xl group-hover:text-olive-500 transition-colors leading-tight line-clamp-2">{post.title}</h3>
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
      <section className="py-32 w-full bg-olive-900 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-olive-500 text-sm font-bold tracking-widest uppercase block mb-4">International Capabilities</span>
            <AnimatedChars text="From Dubai to Europe." className="font-display text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tight" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-brand-black-light border border-white/5 p-10 rounded-[2rem] hover:border-olive-500/20 transition-colors hover:-translate-y-2 duration-300">
              <h3 className="font-display font-black text-3xl uppercase mb-6 flex items-center gap-4">🇦🇪 UAE</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed mb-8">Dubai HQ. Arabic-first strategy, NESA compliance, and deep local market integration for brands scaling across the Middle East.</p>
              <ul className="space-y-3 text-sm font-bold tracking-wider text-olive-300 uppercase">
                <li>✓ NESA & PDPL Compliant</li>
                <li>✓ Native Arabic Marketing</li>
                <li>✓ Local Business Integration</li>
              </ul>
            </div>
            <div className="bg-brand-black-light border border-white/5 p-10 rounded-[2rem] hover:border-olive-500/20 transition-colors hover:-translate-y-2 duration-300">
              <h3 className="font-display font-black text-3xl uppercase mb-6 flex items-center gap-4">🇩🇪 DACH</h3>
              <p className="text-brand-white-70 text-sm leading-relaxed mb-8">GDPR/DSGVO-compliant solutions, precision-engineered software, and B2B localized campaigns for the German market.</p>
              <ul className="space-y-3 text-sm font-bold tracking-wider text-olive-300 uppercase">
                <li>✓ DSGVO & GDPR Strict</li>
                <li>✓ German Localized SEO</li>
                <li>✓ B2B Growth Engines</li>
              </ul>
            </div>
            <div className="bg-brand-black-light border border-white/5 p-10 rounded-[2rem] hover:border-olive-500/20 transition-colors hover:-translate-y-2 duration-300">
              <h3 className="font-display font-black text-3xl uppercase mb-6 flex items-center gap-4">🇬🇧 UK</h3>
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
      <section className="py-32 w-full bg-olive-500 text-olive-950 relative z-10 overflow-hidden">
         {/* Background pattern */}
         <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48ZmlsdGVyIGlkPSJub2lzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ0cmFuc3BhcmVudCIgZmlsdGVyPSJ1cmwoI25vaXNlKSIvPjwvc3ZnPg==')] pointer-events-none" />
         
         <div className="max-w-5xl mx-auto px-6 text-center relative z-20">
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-none tracking-tighter uppercase">{t('cta.title1')}<br />{t('cta.title2')}</h2>
            <p className="text-olive-900 text-xl md:text-2xl font-medium mb-12 max-w-3xl mx-auto">{t('cta.desc')}</p>
            <Magnetic>
              <div className="inline-block">
                <Link to="/contact" className="inline-flex items-center gap-3 bg-olive-950 text-white px-12 py-6 rounded-full font-black uppercase tracking-widest hover:bg-black transition-all hover:scale-105 shadow-2xl block">
                  {t('cta.btn')} <ArrowRight size={20} className="inline ml-1" />
                </Link>
              </div>
            </Magnetic>
         </div>
      </section>

      <JsonLd data={websiteSchema} />
      <JsonLd data={localBusinessSchema} />
    </div>
  );
}
