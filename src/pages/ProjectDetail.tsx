import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { useWorks } from '../hooks/useWorks';
import { SEO } from '../components/SEO';
import { JsonLd } from '../components/JsonLd';
import { getOptimizedUrl, getSrcSet } from './Portfolio';

export function ProjectDetail() {
  const { id } = useParams();
  const { works: projects, loading } = useWorks();
  
  if (loading) {
    return <div className="w-full min-h-[60vh] flex items-center justify-center pt-32 text-olive-500">Loading...</div>;
  }

  const project = projects.find(p => p._id === id);

  if (!project) {
    return (
      <div className="w-full flex flex-col items-center justify-center min-h-[60vh] pt-32">
        <h2 className="text-4xl font-black text-white mb-6">PROJECT NOT FOUND</h2>
        <Link to="/work" className="text-olive-500 hover:text-white transition-colors flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Work
        </Link>
      </div>
    );
  }

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.description,
    "url": `https://mintsglobal.ae/work/${project._id}`,
    "image": project.titleImage,
    "creator": { "@id": "https://mintsglobal.ae/#organization" },
    "genre": project.category.name,
    "dateCreated": project.createdAt,
    "dateModified": project.updatedAt
  };

  return (
    <div className="w-full relative z-10">
      <SEO 
        title={`${project.title} | Mints Global Portfolio`} 
        description={project.description || `${project.category.name} project by Mints Global.`}
        keywords={["case study", "project portfolio", "digital agency work", "success stories", "client projects"]} 
      />
      
      <section className="relative w-full px-6 lg:px-8 pt-32 pb-16 max-w-7xl mx-auto">
        <Link to="/work" className="text-brand-white-70 hover:text-white transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-widest mb-12 w-fit">
          <ArrowLeft size={16} /> Back to Work
        </Link>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="text-olive-500 text-sm font-bold tracking-widest uppercase block mb-4 border border-olive-500/30 px-4 py-2 rounded-full w-fit">
            {project.category.name}
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-black mb-10 uppercase leading-[0.9] text-white">
            {project.title}
          </h1>
          {project.description && (
            <p className="text-brand-white-70 text-lg md:text-xl max-w-3xl leading-relaxed mb-12">
              {project.description}
            </p>
          )}
        </motion.div>
      </section>
      
      <section className="px-6 lg:px-8 pb-32 max-w-7xl mx-auto">
        <motion.div 
           initial={{ opacity: 0, y: 30 }} 
           animate={{ opacity: 1, y: 0 }} 
           transition={{ duration: 0.8, delay: 0.2 }}
           className="w-full rounded-[2rem] overflow-hidden bg-olive-900 border border-white/5 shadow-2xl mb-16 aspect-video"
        >
          <img 
            src={getOptimizedUrl(project.titleImage, 1200)} 
            srcSet={getSrcSet(project.titleImage, [800, 1200, 2000])}
            sizes="100vw"
            alt={project.title} 
            loading="lazy"
            className="w-full h-full object-cover" 
          />
        </motion.div>

        {project.mediaUrls && project.mediaUrls.length > 0 && (
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
                   alt={`${project.title} screenshot ${idx + 1}`} 
                   loading="lazy"
                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                 />
               </motion.div>
             ))}
           </div>
        )}
      </section>

      {/* Related Projects Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8 border-t border-white/5">
        <h2 className="font-display text-4xl font-black mb-12 uppercase text-white">Related <span className="text-olive-500">Projects</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(() => {
            const otherProjects = projects.filter(p => p._id !== project._id);
            const sameCategory = otherProjects.filter(p => p.category._id === project.category._id);
            
            // Sort to ensure we get the most recent ones
            sameCategory.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
            otherProjects.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

            // Combine and deduplicate
            const candidates = Array.from(new Set([...sameCategory, ...otherProjects]));

            return candidates
              .slice(0, 3)
              .map(p => (
                <Link to={`/work/${p._id}`} key={p._id} className="group block focus:outline-none">
                  <div className="rounded-3xl overflow-hidden bg-olive-900 border border-white/5 aspect-video mb-6 relative">
                     <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/40 transition-colors z-10 duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                       <span className="bg-olive-500 text-brand-black w-14 h-14 rounded-full flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-all duration-300">
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

      <section className="py-24 bg-olive-950 border-t border-white/5 text-center">
         <h2 className="font-display text-4xl font-black uppercase mb-8 text-white">Start Your Project</h2>
         <Link to="/contact" className="bg-olive-500 text-brand-black px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-olive-400 transition-colors inline-flex items-center gap-3">
           Contact Us <ArrowLeft size={20} className="rotate-180" />
         </Link>
      </section>
      <JsonLd data={projectSchema} />
    </div>
  );
}
