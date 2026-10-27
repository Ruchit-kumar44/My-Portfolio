'use client';

import { motion } from 'motion/react';

interface BlurRevealProps {
  children: React.ReactNode;
  className?: string;
}

export function Reveal({ children, className }: BlurRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ y: 30 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.9,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
