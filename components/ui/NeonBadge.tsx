'use client';

type StatusType = 'operational' | 'warning' | 'critical' | 'secure';

interface NeonBadgeProps {
  status: StatusType;
  label: string;
  pulse?: boolean;
  className?: string;
}

const statusConfig: Record<StatusType, { dot: string; text: string; bg: string; border: string }> = {
  operational: {
    dot: 'bg-emerald-400',
    text: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    border: 'border-emerald-400/30',
  },
  warning: {
    dot: 'bg-amber-400',
    text: 'text-amber-400',
    bg: 'bg-amber-400/10',
    border: 'border-amber-400/30',
  },
  critical: {
    dot: 'bg-red-500',
    text: 'text-red-400',
    bg: 'bg-red-500/10',
    border: 'border-red-500/30',
  },
  secure: {
    dot: 'bg-cyan-400',
    text: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/30',
  },
};

export default function NeonBadge({ status, label, pulse = true, className = '' }: NeonBadgeProps) {
  const cfg = statusConfig[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-medium tracking-wide ${cfg.bg} ${cfg.border} ${cfg.text} ${className}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${cfg.dot} ${pulse ? 'animate-status-pulse' : ''}`}
      />
      {label}
    </span>
  );
}
