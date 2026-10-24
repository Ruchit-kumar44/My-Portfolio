'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from  'motion/react'

export default function RotatingText() {
  const titles = ['A Backend focused fullStack Engineer.', 'Backend Engineer', 'Frontend Engineer'];
  

  const [index, setIndex] = useState(0);

  // Rotate through the titles array every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [titles.length]);

  return (
    <span className="relative inline-block h-[1.4em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={titles[index]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
        //   whileHover={{color: "#a855f7",  }} 
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-block"
        >
          {titles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
