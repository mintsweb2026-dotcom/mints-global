import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  title: string;
  content: string;
}

interface ServicesAccordionProps {
  items: AccordionItem[];
}

export function ServicesAccordion({ items }: ServicesAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={index} 
            className={`border border-white/10 rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-olive-900/50 border-olive-500/30' : 'bg-transparent hover:border-white/20'}`}
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full text-left px-6 py-6 flex items-center justify-between focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className={`font-display font-bold text-xl md:text-2xl transition-colors duration-300 ${isOpen ? 'text-olive-500' : 'text-white'}`}>
                {item.title}
              </span>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180 bg-olive-500 text-white' : 'bg-white/5 text-brand-white'}`}>
                <ChevronDown size={20} />
              </div>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-6 pt-0 text-brand-white-70 leading-relaxed md:text-lg">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
