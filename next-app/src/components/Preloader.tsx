import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let currentProgress = 0;
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const stepSize = isMobile ? 35 : Math.floor(Math.random() * 15) + 5;
    const intervalTime = isMobile ? 50 : 100;
    
    const interval = setInterval(() => {
      currentProgress += stepSize;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setTimeout(() => {
          setLoading(false);
        }, isMobile ? 200 : 600);
      }
      setProgress(currentProgress);
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-olive-950 flex flex-col justify-between p-8 md:p-16"
        >
          <div className="flex justify-between items-start text-white">
            <span className="font-display font-black text-2xl md:text-3xl tracking-widest uppercase">Mints Global</span>
            <span className="text-sm md:text-base font-bold text-brand-white-70">Dubai | UAE</span>
          </div>

          <div className="flex flex-col items-center justify-center flex-1">
            <div className="overflow-hidden mb-8">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-8xl md:text-[12rem] font-display font-black tracking-tighter text-white"
              >
                {progress}%
              </motion.div>
            </div>
            
            <div className="w-full max-w-sm h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-olive-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.1 }}
              />
            </div>
          </div>

          <div className="text-center font-bold text-xs uppercase tracking-[0.3em] text-brand-white-40">
            Digital Architecture & Security
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
