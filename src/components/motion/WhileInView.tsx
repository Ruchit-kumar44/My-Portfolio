'use client';

import { motion } from 'motion/react';

interface WhileInViewProps {
  children: React.ReactNode;
  className?: string;
}

export default function WhileInView({ children, className }: WhileInViewProps) {
  return (
    <motion.div
      className={className}
      initial={{ y: 40 }}
      whileInView={{ y: 0 }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
