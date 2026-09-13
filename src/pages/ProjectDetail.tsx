import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, TrendingUp, Calendar, Building2, Layers } from 'lucide-react';
import { useWorks } from '../hooks/useWorks';
import { SEO } from '../components/SEO';
import { JsonLd } from '../components/JsonLd';
import { getOptimizedUrl, getSrcSet } from './Portfolio';

export function ProjectDetail() {
  const { id } = useParams();
  const { works: projects, loading } = useWorks();
  
  if (loading) {
    return <div className="w-full min-h-[60vh] flex items-center justify-center pt-32 text-olive-500 font-bold tracking-widest uppercase">Loading Case Study...</div>;
  }

  const project = projects.find(p => 
    p._id === id || 
    p.title.toLowerCase().replace(/\s+/g, '-') === id?.toLowerCase() ||
    p.title.toLowerCase() === id?.toLowerCase()
  );

  if (!project) {
    return (
      <div className="w-full flex flex-col items-center justify-center min-h-[60vh] pt-32">
        <h2 className="text-4xl font-black text-white mb-6 uppercase">Project Not Found</h2>
        <Link to="/work" className="text-olive-500 hover:text-white transition-colors flex items-center gap-2 font-bold tracking-wider uppercase text-sm">
          <ArrowLeft size={16} /> Back to Work
        </Link>
      </div>
    );
  }

  const canonicalUrl = `https://www.mintsglobal.ae/work/${project._id}`;
  const seoTitle = `${project.title} Case Study | ${project.category.name} | Mints Global`;
  const seoDescription = project.description || `${project.title} - ${project.category.name} case study by Mints Global Dubai. Discover our creative approach, technical strategy, and business impact.`;

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": `${project.title} — ${project.category.name} Case Study`,
    "headline": project.title,
    "description": seoDescription,
    "url": canonicalUrl,
    "image": project.titleImage,
    "creator": {
      "@type": "Organization",
      "name": "Mints Global",
      "url": "https://www.mintsglobal.ae"
    },
    "genre": project.category.name,
    "keywords": project.tags.join(", "),
    "dateCreated": project.createdAt,
    "dateModified": project.updatedAt
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mintsglobal.ae/" },
      { "@type": "ListItem", "position": 2, "name": "Work", "item": "https://www.mintsglobal.ae/work" },
      { "@type": "ListItem", "position": 3, "name": project.title, "item": canonicalUrl }
    ]
  };

  return (
    <div className="w-full relative z-10">
      <SEO 
        title={seoTitle} 
        rawTitle={true}
        description={seoDescription}
        keywords={[...project.tags, "case study", "digital agency dubai", "mints global portfolio", project.category.name]} 
        canonical={`/work/${project._id}`}
        ogTitle={seoTitle}
        ogDescription={seoDescription}
        ogImage={project.titleImage}
        twitterTitle={seoTitle}
        twitterDescription={seoDescription}
        twitterImage={project.titleImage}
      />
      <JsonLd data={projectSchema} />
      <JsonLd data={breadcrumbSchema} />
      
      {/* Header & Meta Overview */}
      <section className="relative w-full px-6 lg:px-8 pt-32 pb-12 max-w-7xl mx-auto">
        <Link to="/work" className="text-brand-white-70 hover:text-white transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-widest mb-10 w-fit">
          <ArrowLeft size={16} /> Back to All Work
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-olive-500 text-xs font-bold tracking-widest uppercase border border-olive-500/30 px-4 py-1.5 rounded-full">
              {project.category.name}
            </span>
            {project.kpi && (
              <span className="text-white text-xs font-bold tracking-wider uppercase bg-olive-950 border border-white/10 px-4 py-1.5 rounded-full flex items-center gap-1.5">
                <TrendingUp size={13} className="text-olive-500" /> {project.kpi}
              </span>
            )}
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-8 uppercase leading-[0.92] text-white">
            {project.title}
          </h1>

          <p className="text-brand-white-70 text-lg md:text-xl max-w-4xl leading-relaxed mb-12 font-medium">
            {project.description}
          </p>

          {/* Project Details Matrix */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 md:p-8 bg-olive-900/40 border border-white/10 rounded-3xl backdrop-blur-xl mb-12">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-brand-white-40 uppercase tracking-widest mb-1.5">
                <Building2 size={14} className="text-olive-500" /> Client
              </div>
              <div className="text-white font-display font-bold text-base md:text-lg">
                {project.client || project.title}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-brand-white-40 uppercase tracking-widest mb-1.5">
                <Layers size={14} className="text-olive-500" /> Vertical
              </div>
              <div className="text-white font-display font-bold text-base md:text-lg">
                {project.category.name}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-brand-white-40 uppercase tracking-widest mb-1.5">
                <Calendar size={14} className="text-olive-500" /> Timeline
              </div>
              <div className="text-white font-display font-bold text-base md:text-lg">
                {project.duration || 'Completed'}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-brand-white-40 uppercase tracking-widest mb-1.5">
                <TrendingUp size={14} className="text-olive-500" /> Primary Impact
              </div>
              <div className="text-olive-400 font-display font-black text-base md:text-lg">
                {project.kpi || 'High Impact'}
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      
      {/* Hero Visual Asset */}
      <section className="px-6 lg:px-8 pb-16 max-w-7xl mx-auto">
        <motion.div 
           initial={{ opacity: 0, y: 30 }} 
           animate={{ opacity: 1, y: 0 }} 
           transition={{ duration: 0.8, delay: 0.2 }}
           className="w-full rounded-[2.5rem] overflow-hidden bg-olive-900 border border-white/10 shadow-2xl aspect-video relative group"
        >
          <img 
            src={getOptimizedUrl(project.titleImage, 1400)} 
            srcSet={getSrcSet(project.titleImage, [800, 1200, 2000])}
            sizes="100vw"
            alt={project.titleImageAlt || `${project.title} primary case study presentation`} 
            loading="eager"
            className="w-full h-full object-cover" 
          />
        </motion.div>
      </section>

      {/* Narrative Section: Challenge, Approach & Results */}
      {(project.challenge || project.approach || project.results) && (
        <section className="px-6 lg:px-8 py-16 max-w-7xl mx-auto border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {project.challenge && (
              <div className="bg-olive-900/50 border border-white/5 p-8 rounded-3xl hover:border-olive-500/30 transition-colors">
                <div className="text-xs font-black text-olive-500 uppercase tracking-widest mb-3">01 / The Challenge</div>
                <h2 className="font-display font-black text-2xl uppercase mb-4 text-white">The Challenge</h2>
                <p className="text-brand-white-70 leading-relaxed text-sm md:text-base">
                  {project.challenge}
                </p>
              </div>
            )}

            {project.approach && (
              <div className="bg-olive-900/50 border border-white/5 p-8 rounded-3xl hover:border-olive-500/30 transition-colors">
                <div className="text-xs font-black text-olive-500 uppercase tracking-widest mb-3">02 / The Strategy</div>
                <h2 className="font-display font-black text-2xl uppercase mb-4 text-white">Strategic Approach</h2>
                <p className="text-brand-white-70 leading-relaxed text-sm md:text-base">
                  {project.approach}
                </p>
              </div>
            )}

            {project.results && (
              <div className="bg-olive-900/50 border border-white/5 p-8 rounded-3xl hover:border-olive-500/30 transition-colors">
                <div className="text-xs font-black text-olive-500 uppercase tracking-widest mb-3">03 / The Outcome</div>
                <h2 className="font-display font-black text-2xl uppercase mb-4 text-white">Results & Impact</h2>
                <p className="text-brand-white-70 leading-relaxed text-sm md:text-base">
                  {project.results}
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Visual Gallery */}
      {project.mediaUrls && project.mediaUrls.length > 0 && (
        <section className="px-6 lg:px-8 py-16 max-w-7xl mx-auto">
          <div className="mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-black uppercase text-white">
              Project <span className="text-olive-500">Deliverables</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.mediaUrls.map((url: string, idx: number) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={idx} 
                className="rounded-3xl overflow-hidden bg-olive-900 border border-white/5 aspect-square"
              >
                <img 
                  src={getOptimizedUrl(url, 800)} 
                  srcSet={getSrcSet(url, [400, 800])}
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  alt={`${project.title} deliverable and visual asset ${idx + 1}`} 
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                />
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Tags */}
      {project.tags && project.tags.length > 0 && (
        <section className="px-6 lg:px-8 py-8 max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-brand-white-40 uppercase tracking-widest mr-2">Expertise Areas:</span>
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-white-70">
                {tag}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Related Projects Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8 border-t border-white/10">
        <h2 className="font-display text-4xl font-black mb-12 uppercase text-white">Related <span className="text-olive-500">Projects</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(() => {
            const otherProjects = projects.filter(p => p._id !== project._id);
            const sameCategory = otherProjects.filter(p => p.category._id === project.category._id);
            
            sameCategory.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
            otherProjects.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

            const candidates = Array.from(new Set([...sameCategory, ...otherProjects]));

            return candidates
              .slice(0, 3)
              .map(p => (
                <Link to={`/work/${p._id}`} key={p._id} className="group block focus:outline-none">
                  <div className="rounded-3xl overflow-hidden bg-olive-900 border border-white/5 aspect-video mb-6 relative">
                     <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/40 transition-colors z-10 duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                       <span className="bg-olive-500 text-white w-14 h-14 rounded-full flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                         <ArrowLeft size={24} className="rotate-180" />
                       </span>
                     </div>
                     <img src={getOptimizedUrl(p.titleImage, 800)} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  </div>
                  <h3 className="font-display font-bold text-xl uppercase text-white group-hover:text-olive-500 transition-colors mb-2 line-clamp-1">{p.title}</h3>
                  <p className="text-brand-white-70 text-sm">{p.category.name}</p>
                </Link>
              ));
          })()}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-olive-950 border-t border-white/10 text-center">
         <h2 className="font-display text-4xl lg:text-5xl font-black uppercase mb-6 text-white leading-tight">Ready to Elevate Your Brand?</h2>
         <p className="text-brand-white-70 text-lg max-w-2xl mx-auto mb-10">
           Partner with Mints Global in Dubai for bespoke brand strategy, enterprise engineering, and cyber protection.
         </p>
         <Link to="/contact" className="bg-olive-500 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-olive-400 transition-colors inline-flex items-center gap-3">
           Start A Project <ArrowLeft size={20} className="rotate-180" />
         </Link>
      </section>
    </div>
  );
}
