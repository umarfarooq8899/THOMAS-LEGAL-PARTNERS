'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Shield, Lock, Zap } from 'lucide-react';

// Three.js canvas must be dynamically imported (client-only, no SSR)
const HypercubeCanvas = dynamic(() => import('@/components/three/HypercubeCanvas'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

export default function VaultHero() {
  return (
    <section
      id="vault-hero"
      className="glass-card relative flex flex-col items-center justify-between h-full overflow-hidden py-8 px-6"
    >
      {/* Subtle inner grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,217,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,217,255,0.8) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Top label */}
      <motion.div
        className="text-center z-10"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <p
          className="text-[10px] tracking-[0.4em] uppercase text-cyan-400/60 mb-1"
          style={{ fontFamily: 'var(--font-montserrat)' }}
        >
          Enterprise Security
        </p>
        <div className="flex items-center justify-center gap-2">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400/40" />
          <Lock size={10} className="text-cyan-400/40" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400/40" />
        </div>
      </motion.div>

      {/* Energy rings + Hypercube */}
      <div className="relative flex items-center justify-center z-10" style={{ width: 280, height: 280 }}>
        {/* Outer ring */}
        <div
          className="absolute rounded-full border border-cyan-400/15 animate-ring-slow"
          style={{ width: 270, height: 270 }}
        />
        {/* Middle ring */}
        <div
          className="absolute rounded-full border border-cyan-400/10 animate-ring-medium"
          style={{
            width: 220,
            height: 220,
            borderStyle: 'dashed',
          }}
        />
        {/* Inner ring */}
        <div
          className="absolute rounded-full border border-cyan-400/20 animate-ring-fast"
          style={{ width: 170, height: 170 }}
        />

        {/* Central glow behind cube */}
        <div
          className="absolute rounded-full"
          style={{
            width: 120,
            height: 120,
            background: 'radial-gradient(circle, rgba(0,217,255,0.12) 0%, transparent 70%)',
          }}
        />

        {/* Three.js Hypercube */}
        <div
          className="absolute"
          style={{ width: 200, height: 200 }}
        >
          <HypercubeCanvas />
        </div>

        {/* Shield overlay icon */}
        <motion.div
          className="absolute bottom-2 right-2"
          animate={{ opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Shield size={16} className="text-cyan-400" />
        </motion.div>
      </div>

      {/* Title & subtitle */}
      <motion.div
        className="text-center z-10 space-y-3"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h1
          className="text-3xl font-black tracking-[0.15em] uppercase gradient-text-cyan text-glow-cyan leading-tight"
          style={{ fontFamily: 'var(--font-montserrat)' }}
        >
          The Digital Vault
        </h1>
        <p className="text-xs text-gray-400 leading-relaxed max-w-[260px] mx-auto">
          Enterprise-grade document protection and secure legal collaboration.
        </p>

        {/* Feature pills */}
        <div className="flex items-center justify-center gap-2 pt-1">
          {['AES-256', 'Zero-Trust', 'SOC 2'].map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-widest uppercase border border-cyan-400/20 text-cyan-400/70 bg-cyan-400/5"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* CTA Button */}
      <motion.div
        className="z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <motion.button
          id="cta-enter-portal"
          className="cta-btn animate-neon-pulse flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm"
          whileHover={{ scale: 1.06, y: -3 }}
          whileTap={{ scale: 0.97 }}
        >
          <Zap size={15} />
          Enter Secure Portal
        </motion.button>
      </motion.div>

      {/* Bottom security note */}
      <motion.div
        className="z-10 flex items-center gap-2 text-[10px] text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-status-pulse" />
        256-bit encrypted connection active
      </motion.div>
    </section>
  );
}
