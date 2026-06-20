'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle } from 'lucide-react';

const complianceItems = [
  {
    id: 'gdpr',
    title: 'GDPR Ready',
    subtitle: 'Data Protection Compliant',
    icon: '🇪🇺',
    status: 'Verified',
    lastAudit: 'Jun 1, 2025',
    color: 'rgba(59, 130, 246, 0.05)',
    border: 'border-blue-400/15',
    glow: 'hover:border-blue-400/30 hover:shadow-[0_0_24px_rgba(59,130,246,0.15)]',
    badge: 'text-blue-400 bg-blue-400/10 border-blue-400/25',
  },
  {
    id: 'iso27001',
    title: 'ISO 27001',
    subtitle: 'Information Security Management',
    icon: '🔐',
    status: 'Certified',
    lastAudit: 'May 15, 2025',
    color: 'rgba(6, 182, 212, 0.05)',
    border: 'border-cyan-400/15',
    glow: 'hover:border-cyan-400/30 hover:shadow-[0_0_24px_rgba(0,217,255,0.15)]',
    badge: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/25',
  },
  {
    id: 'soc2',
    title: 'SOC 2 Type II',
    subtitle: 'Trust Service Criteria',
    icon: '🛡️',
    status: 'Compliant',
    lastAudit: 'Apr 20, 2025',
    color: 'rgba(16, 185, 129, 0.05)',
    border: 'border-emerald-400/15',
    glow: 'hover:border-emerald-400/30 hover:shadow-[0_0_24px_rgba(16,185,129,0.15)]',
    badge: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/25',
  },
  {
    id: 'legal-archive',
    title: 'Legal Archive',
    subtitle: 'Protected & Immutable Records',
    icon: '⚖️',
    status: 'Protected',
    lastAudit: 'Jun 10, 2025',
    color: 'rgba(245, 158, 11, 0.05)',
    border: 'border-amber-400/15',
    glow: 'hover:border-amber-400/30 hover:shadow-[0_0_24px_rgba(245,158,11,0.15)]',
    badge: 'text-amber-400 bg-amber-400/10 border-amber-400/25',
  },
];

export default function ComplianceCards() {
  return (
    <section id="compliance-overview">
      <div className="flex items-center gap-2.5 mb-4 px-1">
        <ShieldCheck size={14} className="text-cyan-400" />
        <h2 className="text-sm font-bold text-gray-200" style={{ fontFamily: 'var(--font-montserrat)' }}>
          Compliance Overview
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        {complianceItems.map((item, i) => (
          <motion.div
            key={item.id}
            id={`compliance-${item.id}`}
            className={`glass-card p-4 cursor-default border transition-all duration-300 ${item.border} ${item.glow}`}
            style={{ background: `linear-gradient(135deg, var(--glass-bg), ${item.color})` }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 * i, duration: 0.4 }}
            whileHover={{ y: -5, scale: 1.01 }}
          >
            {/* Icon */}
            <div className="text-2xl mb-3">{item.icon}</div>

            {/* Title */}
            <h3
              className="text-sm font-bold text-gray-100 mb-0.5"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              {item.title}
            </h3>
            <p className="text-[11px] text-gray-500 mb-3 leading-snug">{item.subtitle}</p>

            {/* Status badge */}
            <div className="flex items-center gap-1.5 mb-2">
              <CheckCircle size={12} className="text-emerald-400" />
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${item.badge}`}>
                {item.status}
              </span>
            </div>

            {/* Last audit */}
            <p className="text-[10px] text-gray-600">Last audit: {item.lastAudit}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
