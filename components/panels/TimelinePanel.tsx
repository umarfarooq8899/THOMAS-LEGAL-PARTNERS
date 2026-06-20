'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Circle, Clock, ChevronRight } from 'lucide-react';
import { timelineMilestones, TimelineMilestone } from '@/lib/mock/timeline';

const statusConfig = {
  complete: {
    Icon: CheckCircle,
    iconColor: 'text-emerald-400',
    dotColor: 'bg-emerald-400',
    dotGlow: 'shadow-[0_0_12px_rgba(16,185,129,0.8)]',
    labelColor: 'text-emerald-400',
    label: 'Complete',
  },
  active: {
    Icon: Circle,
    iconColor: 'text-cyan-400',
    dotColor: 'bg-cyan-400',
    dotGlow: 'shadow-[0_0_16px_rgba(0,217,255,1)] animate-status-pulse',
    labelColor: 'text-cyan-400',
    label: 'In Progress',
  },
  upcoming: {
    Icon: Clock,
    iconColor: 'text-gray-500',
    dotColor: 'bg-gray-600',
    dotGlow: '',
    labelColor: 'text-gray-500',
    label: 'Upcoming',
  },
};

function MilestoneCard({ milestone, index }: { milestone: TimelineMilestone; index: number }) {
  const cfg = statusConfig[milestone.status];
  const Icon = cfg.Icon;

  return (
    <motion.div
      className="flex gap-3 group"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.12, duration: 0.45, ease: 'easeOut' }}
    >
      {/* Timeline column */}
      <div className="flex flex-col items-center flex-shrink-0 w-6">
        <div className={`w-3 h-3 rounded-full flex-shrink-0 mt-1 ${cfg.dotColor} ${cfg.dotGlow}`} />
        {index < timelineMilestones.length - 1 && (
          <div className="timeline-line flex-1 mt-1 min-h-[2.5rem]" />
        )}
      </div>

      {/* Card */}
      <div
        className="glass-card p-3 mb-3 flex-1 cursor-default group-hover:border-cyan-400/20 transition-all duration-300"
        style={{ borderRadius: 10 }}
      >
        <div className="flex items-start justify-between gap-2 mb-1">
          <span
            className="text-xs font-semibold text-gray-200 leading-tight"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            {milestone.title}
          </span>
          <Icon size={13} className={`${cfg.iconColor} flex-shrink-0 mt-0.5`} />
        </div>
        <p className="text-[11px] text-gray-500 leading-relaxed mb-1.5">{milestone.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-gray-600 font-medium">{milestone.date}</span>
          <span className={`text-[10px] font-semibold tracking-wide ${cfg.labelColor}`}>
            {cfg.label}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function TimelinePanel() {
  return (
    <aside className="flex flex-col h-full" id="timeline-panel">
      {/* Header */}
      <motion.div
        className="flex items-center justify-between mb-4 px-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div>
          <p className="text-[10px] tracking-[0.25em] uppercase text-cyan-400/60 mb-0.5"
            style={{ fontFamily: 'var(--font-montserrat)' }}>
            Case #A8834
          </p>
          <h2 className="text-sm font-bold text-gray-200"
            style={{ fontFamily: 'var(--font-montserrat)' }}>
            Legal Timeline
          </h2>
        </div>
        <button
          id="timeline-view-all"
          className="flex items-center gap-1 text-[11px] text-cyan-400/70 hover:text-cyan-400 transition-colors"
        >
          View all <ChevronRight size={11} />
        </button>
      </motion.div>

      {/* Milestones */}
      <div className="flex-1 overflow-y-auto pr-1" style={{ scrollbarWidth: 'none' }}>
        {timelineMilestones.map((m, i) => (
          <MilestoneCard key={m.id} milestone={m} index={i} />
        ))}
      </div>
    </aside>
  );
}
