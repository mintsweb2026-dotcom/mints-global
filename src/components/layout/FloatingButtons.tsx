/**
 * FloatingButtons — WhatsApp floating CTA + scroll-to-top button.
 * 
 * Tier 1 fix: WhatsApp href now uses correct number format (was: 97502943916, fixed: 971502943916)
 */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { cn } from '../../lib/utils';

export function FloatingButtons({ hidden }: { hidden: boolean }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      {/* Floating WhatsApp Button — fixed number: +971 502943916 */}
      <a
        href="https://wa.me/971502943916?text=Hello%2C%20I%27d%20like%20to%20know%20more"
        target="_blank"
        rel="noopener noreferrer"
        className={cn('whatsapp-float', hidden ? 'hidden' : 'block')}
        aria-label="Chat with Mints Global on WhatsApp"
      >
        <img src="/whatsapp-icon.svg" alt="WhatsApp" width="56" height="56" />
      </a>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            className={cn(
              'fixed bottom-24 right-6 z-50 bg-olive-500 text-brand-black p-3 md:p-4 rounded-full shadow-[0_0_15px_rgba(106,171,31,0.5)] border border-olive-400 hover:bg-olive-400 hover:scale-110 transition-all items-center justify-center group',
              hidden ? 'hidden' : 'hidden md:flex',
            )}
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
