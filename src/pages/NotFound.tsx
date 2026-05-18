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
        <Link to="/" className="bg-olive-500 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-olive-400 transition-colors">
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
