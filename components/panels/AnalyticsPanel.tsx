'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ShieldCheck, AlertCircle, Users, BarChart3, ChevronDown, ChevronUp } from 'lucide-react';
import NeonBadge from '@/components/ui/NeonBadge';
import CyberGauge from '@/components/ui/CyberGauge';
import { securityMetrics, securityScore } from '@/lib/mock/security';
import { activeCases } from '@/lib/mock/cases';

/* ── Metric Row ── */
function MetricRow({ label, value, status }: { label: string; value: string; status: 'operational' | 'warning' | 'critical' }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-white/[0.05] last:border-0">
      <span className="text-xs text-gray-400">{label}</span>
      <NeonBadge status={status} label={value} pulse={false} className="text-[10px]" />
    </div>
  );
}

/* ── Case Card (accordion) ── */
function CaseCard({ caseItem, isExpanded, onToggle }: {
  caseItem: typeof activeCases[0];
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const statusColorMap = {
    cyan: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/30',
    amber: 'text-amber-400 bg-amber-400/10 border-amber-400/30',
    green: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30',
    red: 'text-red-400 bg-red-400/10 border-red-400/30',
  };

  return (
    <div className="glass-card overflow-hidden" style={{ borderRadius: 10, marginBottom: 8 }}>
      {/* Header (always visible) */}
      <button
        id={`case-${caseItem.id}-toggle`}
        onClick={onToggle}
        className="w-full flex items-center justify-between p-3 text-left hover:bg-white/[0.02] transition-colors cursor-pointer"
      >
        <div className="flex items-center gap-2 min-w-0">
          <BarChart3 size={12} className="text-cyan-400/60 flex-shrink-0" />
          <div className="min-w-0">
            <p className="text-[11px] font-semibold text-gray-200 truncate"
              style={{ fontFamily: 'var(--font-montserrat)' }}>
              #{caseItem.caseNumber}
            </p>
            <p className="text-[10px] text-gray-500 truncate">{caseItem.client}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${statusColorMap[caseItem.statusColor]}`}>
            {caseItem.progress}%
          </span>
          {isExpanded ? <ChevronUp size={12} className="text-gray-500" /> : <ChevronDown size={12} className="text-gray-500" />}
        </div>
      </button>

      {/* Expanded content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-3 pb-3 space-y-2.5 border-t border-white/[0.05] pt-2.5">
              <p className="text-xs text-gray-300 font-medium leading-tight">{caseItem.title}</p>

              {/* Status + next milestone */}
              <div className="flex justify-between text-[10px]">
                <div>
                  <span className="text-gray-600 block mb-0.5">Status</span>
                  <span className={`font-semibold ${statusColorMap[caseItem.statusColor].split(' ')[0]}`}>
                    {caseItem.status}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-gray-600 block mb-0.5">Next Milestone</span>
                  <span className="text-gray-300 font-medium">{caseItem.nextMilestone}</span>
                </div>
              </div>

              {/* Progress bar */}
              <div>
                <div className="flex justify-between text-[10px] mb-1">
                  <span className="text-gray-600">Progress</span>
                  <span className="text-cyan-400 font-semibold">{caseItem.progress}% Complete</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                  <motion.div
                    className="h-full progress-bar-fill rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${caseItem.progress}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                  />
                </div>
              </div>

              {/* Attorney */}
              <div className="flex items-center gap-1.5 text-[10px] text-gray-500">
                <Users size={10} />
                <span>{caseItem.attorney} · {caseItem.category}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Analytics Panel ── */
export default function AnalyticsPanel() {
  const [expandedCase, setExpandedCase] = useState<string>('a8834');

  return (
    <aside className="flex flex-col h-full gap-4 overflow-y-auto" style={{ scrollbarWidth: 'none' }} id="analytics-panel">

      {/* Security Health */}
      <div className="glass-card p-4">
        <div className="flex items-center gap-2 mb-3">
          <ShieldCheck size={14} className="text-cyan-400" />
          <h2 className="text-xs font-bold text-gray-200 tracking-wide uppercase"
            style={{ fontFamily: 'var(--font-montserrat)' }}>
            Security Health
          </h2>
        </div>

        {/* Gauge */}
        <div className="flex justify-center mb-3">
          <CyberGauge score={securityScore} />
        </div>

        {/* Metrics */}
        <div>
          {securityMetrics.map((m) => (
            <MetricRow
              key={m.id}
              label={m.label}
              value={m.value}
              status={m.status}
            />
          ))}
        </div>
      </div>

      {/* Active Cases */}
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-3 px-1">
          <AlertCircle size={14} className="text-cyan-400" />
          <h2 className="text-xs font-bold text-gray-200 tracking-wide uppercase"
            style={{ fontFamily: 'var(--font-montserrat)' }}>
            Active Cases
          </h2>
          <span className="ml-auto text-[10px] font-semibold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-2 py-0.5">
            {activeCases.length}
          </span>
        </div>

        {activeCases.map((c) => (
          <CaseCard
            key={c.id}
            caseItem={c}
            isExpanded={expandedCase === c.id}
            onToggle={() => setExpandedCase(expandedCase === c.id ? '' : c.id)}
          />
        ))}
      </div>
    </aside>
  );
}
