import { motion } from 'motion/react';
import React from 'react';

interface AnimatedCharsProps {
  text: string;
  className?: string;
  delay?: number;
}

export function AnimatedChars({ text, className = "", delay = 0 }: AnimatedCharsProps) {
  // Support mixed strings with line breaks <br/> by passing as array or checking
  
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay * i },
    }),
  };

  const child: any = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      style={{ overflow: "hidden", display: "inline-flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className={className}
    >
      {words.map((word, wIdx) => (
        <motion.span
          key={wIdx}
          style={{ overflow: "hidden", display: "inline-flex", paddingRight: "0.25em" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.04, delayChildren: 0 } }
          }}
        >
          {word.split("").map((char, cIdx) => (
            <motion.span style={{ display: "inline-block" }} variants={child} key={cIdx}>
              {char}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </motion.span>
  );
}
