'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glow?: 'cyan' | 'gold' | 'sapphire' | 'none';
  hover?: boolean;
  id?: string;
}

const glowClasses = {
  cyan: 'glow-cyan',
  gold: 'glow-gold',
  sapphire: 'glow-sapphire',
  none: '',
};

export default function GlassCard({
  children,
  className = '',
  glow = 'none',
  hover = true,
  id,
}: GlassCardProps) {
  return (
    <motion.div
      id={id}
      className={`glass-card ${glowClasses[glow]} ${className}`}
      whileHover={
        hover
          ? { y: -4, scale: 1.005, transition: { duration: 0.25, ease: 'easeOut' } }
          : undefined
      }
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
