'use client';

export default function ShieldLogo({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animate-shield-flicker flex-shrink-0"
      aria-label="Thomas Legal Partners Shield Logo"
    >
      <defs>
        <linearGradient id="shield-metallic" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E5E7EB" />
          <stop offset="40%" stopColor="#9CA3AF" />
          <stop offset="70%" stopColor="#D1D5DB" />
          <stop offset="100%" stopColor="#6B7280" />
        </linearGradient>
        <linearGradient id="shield-inner" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.6" />
        </linearGradient>
        <filter id="cyan-glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer shield body */}
      <path
        d="M20 2L4 8V22C4 31.5 11.2 40.2 20 43C28.8 40.2 36 31.5 36 22V8L20 2Z"
        fill="url(#shield-metallic)"
        opacity="0.15"
        stroke="url(#shield-metallic)"
        strokeWidth="1.5"
      />

      {/* Inner shield fill */}
      <path
        d="M20 5L7 10V22C7 30.2 12.8 37.7 20 40C27.2 37.7 33 30.2 33 22V10L20 5Z"
        fill="url(#shield-inner)"
        opacity="0.3"
      />

      {/* Geometric inner diamond */}
      <path
        d="M20 13L26 19L20 28L14 19L20 13Z"
        stroke="#00D9FF"
        strokeWidth="1.2"
        fill="rgba(0,217,255,0.15)"
        filter="url(#cyan-glow)"
      />

      {/* Top accent line */}
      <line x1="20" y1="13" x2="20" y2="8" stroke="#00D9FF" strokeWidth="1" opacity="0.7" />

      {/* Side accent lines */}
      <line x1="14" y1="19" x2="9" y2="19" stroke="#00D9FF" strokeWidth="0.8" opacity="0.5" />
      <line x1="26" y1="19" x2="31" y2="19" stroke="#00D9FF" strokeWidth="0.8" opacity="0.5" />

      {/* Outer cyan edge glow border */}
      <path
        d="M20 2L4 8V22C4 31.5 11.2 40.2 20 43C28.8 40.2 36 31.5 36 22V8L20 2Z"
        fill="none"
        stroke="#00D9FF"
        strokeWidth="0.8"
        opacity="0.6"
        filter="url(#cyan-glow)"
      />
    </svg>
  );
}
