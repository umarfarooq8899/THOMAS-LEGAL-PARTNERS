'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from 'react';

interface CyberGaugeProps {
  score: number;
}

export default function CyberGauge({ score }: CyberGaugeProps) {
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - score / 100);

  // Dynamic percentage count-up
  const count = useMotionValue(0);
  const [roundedCount, setRoundedCount] = useState(0);

  useEffect(() => {
    const controls = animate(count, score, {
      duration: 1.8,
      ease: 'easeOut',
      delay: 0.5,
      onUpdate: (latest) => {
        setRoundedCount(Math.round(latest * 10) / 10);
      },
    });
    return () => controls.stop();
  }, [count, score]);

  return (
    <div className="relative flex items-center justify-center" style={{ width: 140, height: 140 }}>
      {/* Rotating outer dashed ring */}
      <div
        className="absolute rounded-full border border-dashed border-cyan-400/20 animate-ring-slow"
        style={{ width: 136, height: 136 }}
      />
      
      {/* Subtle outer solid ring */}
      <div
        className="absolute rounded-full border border-white/[0.03]"
        style={{ width: 128, height: 128 }}
      />

      <svg width={120} height={120} viewBox="0 0 120 120" className="rotate-[-90deg]">
        {/* Track */}
        <circle cx={60} cy={60} r={radius} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={6} />
        
        {/* Progress arc */}
        <motion.circle
          cx={60}
          cy={60}
          r={radius}
          fill="none"
          stroke="url(#cyber-gauge-grad)"
          strokeWidth={6}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: dashOffset }}
          transition={{ duration: 1.8, ease: 'easeOut', delay: 0.5 }}
        />
        
        <defs>
          <linearGradient id="cyber-gauge-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00D9FF" />
            <stop offset="50%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#1E40AF" />
          </linearGradient>
        </defs>
      </svg>

      {/* Center score text with neon glow */}
      <div className="absolute flex flex-col items-center justify-center">
        <span
          className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 drop-shadow-[0_0_10px_rgba(0,217,255,0.3)]"
          style={{ fontFamily: 'var(--font-montserrat)' }}
        >
          {roundedCount}%
        </span>
        <span className="text-[9px] text-gray-500 tracking-widest uppercase mt-0.5 font-medium">Security</span>
      </div>
    </div>
  );
}
