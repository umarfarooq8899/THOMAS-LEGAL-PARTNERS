'use client';

import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';
import { activityFeed, ActivityType } from '@/lib/mock/activity';

const typeConfig: Record<ActivityType, { border: string; dot: string; avatarBg: string }> = {
  review:  { border: 'border-l-blue-500',    dot: 'bg-blue-500',    avatarBg: 'bg-blue-500/20 text-blue-300' },
  audit:   { border: 'border-l-emerald-500', dot: 'bg-emerald-500', avatarBg: 'bg-emerald-500/20 text-emerald-300' },
  upload:  { border: 'border-l-cyan-400',    dot: 'bg-cyan-400',    avatarBg: 'bg-cyan-400/20 text-cyan-300' },
  meeting: { border: 'border-l-amber-400',   dot: 'bg-amber-400',   avatarBg: 'bg-amber-400/20 text-amber-300' },
  filing:  { border: 'border-l-violet-400',  dot: 'bg-violet-400',  avatarBg: 'bg-violet-400/20 text-violet-300' },
};

export default function ActivityFeed() {
  return (
    <section id="activity-feed">
      <div className="flex items-center gap-2.5 mb-4 px-1">
        <Activity size={14} className="text-cyan-400" />
        <h2 className="text-sm font-bold text-gray-200" style={{ fontFamily: 'var(--font-montserrat)' }}>
          Team Activity
        </h2>
        <span className="ml-auto w-2 h-2 rounded-full bg-emerald-400 animate-status-pulse" />
        <span className="text-[10px] text-emerald-400">Live</span>
      </div>

      <div className="glass-card overflow-hidden">
        {activityFeed.map((item, i) => {
          const cfg = typeConfig[item.type];
          return (
            <motion.div
              key={item.id}
              className={`flex items-start gap-3 p-3.5 border-b border-white/[0.04] last:border-0 border-l-2 ${cfg.border} transition-all duration-200 hover:bg-white/[0.02]`}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.06 * i, duration: 0.35 }}
            >
              {/* Avatar */}
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 ${cfg.avatarBg}`}
              >
                {item.initials}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-300 leading-snug">
                  <span className="font-semibold text-gray-200">{item.actor}</span>
                  {' '}{item.action}
                </p>
                <p className="text-[11px] text-gray-500 mt-0.5 truncate">{item.detail}</p>
                {item.caseRef && (
                  <span className="text-[9px] font-mono text-cyan-400/50 bg-cyan-400/5 border border-cyan-400/10 px-1.5 py-0.5 rounded mt-1 inline-block">
                    #{item.caseRef}
                  </span>
                )}
              </div>

              {/* Timestamp */}
              <div className="flex flex-col items-end gap-1 flex-shrink-0">
                <span className="text-[10px] text-gray-600 whitespace-nowrap">{item.timestamp}</span>
                <div className={`w-1.5 h-1.5 rounded-full ${cfg.dot} opacity-60`} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
