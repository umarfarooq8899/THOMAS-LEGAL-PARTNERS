'use client';

import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { tickerEvents } from '@/lib/mock/security';

// Duplicate the array so the scroll loops seamlessly
const events = [...tickerEvents, ...tickerEvents];

export default function SecurityTicker() {
  return (
    <motion.div
      className="relative w-full overflow-hidden border-y border-cyan-400/10"
      style={{ background: 'rgba(0,217,255,0.03)', backdropFilter: 'blur(8px)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      aria-label="Security status ticker"
    >
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #0B0F19, transparent)' }} />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #0B0F19, transparent)' }} />

      <div className="py-2 flex">
        <div className="animate-ticker flex items-center gap-0 whitespace-nowrap">
          {events.map((event, i) => (
            <span key={i} className="flex items-center gap-3 px-6">
              <ShieldCheck size={12} className="text-cyan-400 flex-shrink-0" />
              <span className="text-xs font-medium tracking-widest uppercase text-cyan-300/70">
                {event}
              </span>
              <span className="text-cyan-400/30 text-xs">·</span>
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
