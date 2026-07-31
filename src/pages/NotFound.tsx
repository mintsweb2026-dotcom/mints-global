import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6 pt-32">
      <SEO 
        title="Page Not Found - 404" 
        description="The page you are looking for does not exist."
        keywords={["404 not found", "page not found", "Mints Global error", "missing page"]} 
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <h1 className="font-display text-[8rem] font-black text-olive-500 leading-none">404</h1>
        <p className="text-2xl font-bold text-white mb-4 uppercase">Page Not Found</p>
        <p className="text-brand-white-70 mb-10">The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="bg-olive-500 text-brand-black px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-olive-400 transition-colors mb-6">
          Back to Home
        </Link>
        <div className="flex flex-wrap gap-6 justify-center mt-6">
          <Link to="/services" className="text-white hover:text-olive-500 font-bold uppercase tracking-wide text-sm transition-colors border-b border-white/20 pb-1">Our Services</Link>
          <Link to="/work" className="text-white hover:text-olive-500 font-bold uppercase tracking-wide text-sm transition-colors border-b border-white/20 pb-1">Our Work</Link>
          <Link to="/blog" className="text-white hover:text-olive-500 font-bold uppercase tracking-wide text-sm transition-colors border-b border-white/20 pb-1">Blog</Link>
          <Link to="/contact" className="text-white hover:text-olive-500 font-bold uppercase tracking-wide text-sm transition-colors border-b border-white/20 pb-1">Contact</Link>
        </div>
      </motion.div>
    </div>
  );
}
