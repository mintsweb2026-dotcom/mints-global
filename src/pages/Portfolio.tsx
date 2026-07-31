import { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, ArrowRight, X, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { SEO } from '../components/SEO';
import { JsonLd } from '../components/JsonLd';
import { SEO_DATA } from '../lib/seo-data';
import { projects as staticProjects, Project } from '../data/projects';
import { useWorks } from '../hooks/useWorks';



export const getOptimizedUrl = (url: string, width?: number) => {
  if (!url || !url.includes('res.cloudinary.com')) return url;
  const parts = url.split('/upload/');
  if (parts.length !== 2) return url;
  const optimizations = width ? `f_auto,q_auto,w_${width}` : 'f_auto,q_auto';
  return `${parts[0]}/upload/${optimizations}/${parts[1]}`;
};

export const getSrcSet = (url: string, widths: number[]) => {
  if (!url || !url.includes('res.cloudinary.com')) return undefined;
  return widths.map(w => `${getOptimizedUrl(url, w)} ${w}w`).join(', ');
};

function Lightbox({ project, onClose }: { project: Project; onClose: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  
  // Combine title image and media urls
  const allImages = [project.titleImage, ...(project.mediaUrls || [])].filter(Boolean);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setCurrentIndex(prev => Math.min(prev + 1, allImages.length - 1));
      if (e.key === 'ArrowLeft') setCurrentIndex(prev => Math.max(prev - 1, 0));
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, allImages.length]);

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      if (delta < 0) setCurrentIndex(prev => Math.min(prev + 1, allImages.length - 1));
      else setCurrentIndex(prev => Math.max(prev - 1, 0));
    }
    touchStartX.current = null;
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 px-4"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 z-[60]"
        aria-label="Close lightbox"
      >
        <X size={32} />
      </button>

      {/* Image counter */}
      {allImages.length > 1 && (
        <div className="absolute top-6 left-6 z-[60] text-white/50 text-xs font-bold uppercase tracking-widest">
          {currentIndex + 1} / {allImages.length}
        </div>
      )}

      <div 
        className="relative w-full max-w-6xl max-h-[85vh] flex items-center justify-center"
        onClick={e => e.stopPropagation()}
      >
        {allImages.length > 1 && currentIndex > 0 && (
          <button 
            onClick={() => setCurrentIndex(prev => prev - 1)}
            className="absolute left-0 md:-left-16 text-white/50 hover:text-white transition-colors p-2"
            aria-label="Previous image"
          >
            <ChevronLeft size={48} />
          </button>
        )}

        <img 
          key={currentIndex}
          src={getOptimizedUrl(allImages[currentIndex], 1200)}
          srcSet={getSrcSet(allImages[currentIndex], [600, 1200, 1800, 2400])}
          sizes="100vw"
          alt={`${project.title} - image ${currentIndex + 1}`}
          className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
        />

        {allImages.length > 1 && currentIndex < allImages.length - 1 && (
          <button 
            onClick={() => setCurrentIndex(prev => prev + 1)}
            className="absolute right-0 md:-right-16 text-white/50 hover:text-white transition-colors p-2"
            aria-label="Next image"
          >
            <ChevronRight size={48} />
          </button>
        )}
      </div>
      
      <div className="absolute bottom-6 left-0 right-0 text-center text-white z-[60]" onClick={e => e.stopPropagation()}>
        <h3 className="font-display font-black text-2xl uppercase tracking-widest">{project.title}</h3>
        <p className="text-brand-white-70 text-sm mt-1">{project.category.name}</p>
        <div className="flex justify-center gap-2 mt-4">
          {allImages.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`View image ${idx + 1}`}
              className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-olive-500 w-6' : 'bg-white/30 hover:bg-white/60'}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Work() {
  const { works: projects, loading } = useWorks();
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const FILTERS = [
    'All',
    'Branding',
    'Cyber Security',
    'Designs',
    'Digital Marketing',
    'IT Infrastructure',
    'Product Photography',
    'SEO & Branding',
    'Web Development'
  ];
  
  const filteredProjects = projects
    .filter(p => filter === 'All' || p.category.name.toLowerCase() === filter.toLowerCase())
    .filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": filteredProjects.map((proj, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "CreativeWork",
        "name": proj.title,
        "url": `https://www.mintsglobal.ae/work/${proj._id}`,
        "image": proj.titleImage,
        "description": proj.description || `${proj.category.name} project: ${proj.title}`,
        "creator": {
          "@type": "Organization",
          "name": "Mints Global"
        }
      }
    }))
  };

  return (
    <div className="w-full">
      <SEO 
        title="Our Work | Digital Agency Case Studies in Dubai | Mints Global" 
        description="Explore real client work from Mints Global — 250+ projects delivered across web design, performance marketing, SEO & cybersecurity."
        keywords={["agency portfolio", "digital marketing case studies", "software development projects", "cyber security work", "Mints Global portfolio"]}
        canonical="/work"
        ogTitle="Our Work | Digital Agency Case Studies in Dubai | Mints Global"
        ogDescription="Explore real client work from Mints Global — 250+ projects delivered across web design, performance marketing, SEO & cybersecurity."
        ogType="website"
        ogImage="https://www.mintsglobal.ae/images/og/mints-global-work-portfolio-og.jpg"
        twitterTitle="Our Work | Digital Agency Case Studies in Dubai | Mints Global"
        twitterDescription="Explore real client work from Mints Global — 250+ projects delivered across web design, performance marketing, SEO & cybersecurity."
        twitterImage="https://www.mintsglobal.ae/images/og/mints-global-work-portfolio-og.jpg"
        rawTitle={true}
      />
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 pb-10">
        <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-black mb-8 leading-tight uppercase">
          OUR <br/><span className="text-olive-500">WORK.</span>
        </h1>
        <p className="text-brand-white-70 max-w-2xl text-lg mb-8">
          Explore our selected portfolio of digital marketing campaigns, secure platforms, and software solutions.
        </p>

        <div className="mb-12">
          <a 
            href="https://portfolio.mintsglobal.tech/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-olive-500 text-brand-black px-6 py-3 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-olive-400 transition-colors"
          >
            Interactive Demos & Products <ArrowRight size={18} />
          </a>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${filter === f ? 'bg-olive-500 text-brand-black' : 'bg-transparent border border-white/10 text-brand-white-70 hover:border-olive-500/50 hover:text-white'}`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <span className="text-brand-white-40 text-xs font-bold uppercase tracking-widest whitespace-nowrap">
              Showing {filteredProjects.length} Projects
            </span>
            <div className="relative w-full md:w-64 shrink-0">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-olive-900 border border-white/10 rounded-full py-3 px-6 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-olive-500 transition-colors"
              />
            </div>
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 min-h-[40vh]">
           <AnimatePresence>
             {filteredProjects.length === 0 ? (
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0 }}
                 className="col-span-full flex flex-col items-center justify-center py-20 text-center"
               >
                 <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 text-brand-white-40">
                   <Search size={24} />
                 </div>
                 <h3 className="text-xl font-display font-bold text-white mb-2">No projects found</h3>
                 <p className="text-brand-white-70 text-sm max-w-sm">
                   We couldn't find any projects matching "{searchTerm}" in the {filter} category.
                 </p>
                 <button
                   onClick={() => { setFilter('All'); setSearchTerm(''); }}
                   className="mt-6 text-olive-500 font-bold uppercase text-xs tracking-widest hover:text-white transition-colors"
                 >
                   Clear Filters
                 </button>
               </motion.div>
             ) : filteredProjects.map((proj, idx) => (
               <motion.div 
                 layout
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.9 }}
                 transition={{ duration: 0.3 }}
                 key={proj._id} 
                 id={proj._id}
                 className={`group relative ${idx % 3 === 1 ? 'lg:mt-16' : ''} ${idx % 3 === 2 ? 'lg:mt-32' : ''}`}
               >
                 <button onClick={() => setSelectedProject(proj)} className="block w-full overflow-hidden rounded-[2rem] aspect-[4/3] bg-olive-900 border border-white/5 mb-6 shadow-lg relative text-left outline-none focus-visible:ring-2 focus-visible:ring-olive-500">
                   <img 
                     src={getOptimizedUrl(proj.titleImage, 800)} 
                     srcSet={getSrcSet(proj.titleImage, [400, 800, 1200])}
                     sizes="(max-width: 768px) 100vw, 33vw"
                     alt={`${proj.title} - ${proj.category.name} Portfolio Project by Mints Global`} 
                     loading="lazy" 
                     decoding="async"
                     className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" 
                   />
                   
                   <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-olive-500 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100 backdrop-blur-md">
                      <ArrowUpRight size={24} />
                   </div>
                 </button>
                 
                 <div className="flex flex-col items-start px-2">
                   <span className="text-olive-500 text-xs font-bold uppercase tracking-widest mb-3 border border-olive-500/30 px-3 py-1 rounded-full">{proj.category.name}</span>
                   <button onClick={() => setSelectedProject(proj)} className="text-left outline-none focus-visible:ring-2 focus-visible:ring-olive-500 rounded">
                     <h2 className="font-display font-black text-[clamp(1.25rem,4vw,1.875rem)] hover:text-olive-500 transition-colors uppercase tracking-tight text-white mb-4 break-words hyphens-auto">{proj.title}</h2>
                   </button>
                   {(proj.duration || proj.kpi) && (
                     <div className="flex flex-wrap items-center gap-3 mb-4 w-full text-xs font-medium uppercase tracking-wider text-white">
                       {proj.duration && <span className="bg-white/5 px-2 py-1 rounded-md border border-white/10">⏱ {proj.duration}</span>}
                       {proj.kpi && <span className="text-olive-400 bg-olive-500/10 px-2 py-1 rounded-md border border-olive-500/20">🚀 {proj.kpi}</span>}
                     </div>
                   )}
                 </div>

                 {proj.mediaUrls && proj.mediaUrls.length > 0 && (
                   <div className="grid grid-cols-3 gap-2 mt-2 px-2">
                     {proj.mediaUrls.slice(0, 3).map((url, idx) => (
                       <div key={idx} className="rounded-xl overflow-hidden aspect-square bg-olive-900 border border-white/5">
                         <img 
                           src={getOptimizedUrl(url, 400)} 
                           srcSet={getSrcSet(url, [200, 400, 600])}
                           sizes="(max-width: 640px) 33vw, 10vw"
                           alt={`${proj.title} interface screenshot ${idx + 1}`} 
                           loading="lazy"
                           decoding="async"
                           className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
                         />
                       </div>
                     ))}
                   </div>
                 )}
               </motion.div>
             ))}
           </AnimatePresence>
        </motion.div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <Lightbox 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
      <JsonLd data={{
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
            "name": "Our Work",
            "item": "https://www.mintsglobal.ae/work"
          }
        ]
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Our Work | Mints Global",
        "url": "https://www.mintsglobal.ae/work",
        "description": "Portfolio of digital marketing, web design, performance marketing and cybersecurity projects delivered by Mints Global for clients in Dubai and beyond.",
        "isPartOf": {
          "@type": "WebSite",
          "name": "Mints Global",
          "url": "https://www.mintsglobal.ae/"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Mints Global",
          "url": "https://www.mintsglobal.ae/",
          "logo": "https://www.mintsglobal.ae/images/logo.png"
        }
      }} />
      <JsonLd data={itemListSchema} />
    </div>
  );
}
