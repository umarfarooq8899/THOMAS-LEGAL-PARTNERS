'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Bell, Settings, UserCircle } from 'lucide-react';
import ShieldLogo from '@/components/ui/ShieldLogo';
import NeonBadge from '@/components/ui/NeonBadge';
import { useState } from 'react';

const navItems = ['Dashboard', 'Cases', 'Documents', 'Compliance', 'Contact'] as const;
type NavItem = typeof navItems[number];

export default function Navbar() {
  const [active, setActive] = useState<NavItem>('Dashboard');

  return (
    <motion.header
      className="glass-nav sticky top-0 z-50 w-full"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-[1800px] mx-auto px-6 h-16 flex items-center justify-between gap-6">

        {/* ── Left: Logo + Brand ── */}
        <div className="flex items-center gap-3 min-w-[220px]">
          <ShieldLogo size={38} />
          <div className="flex flex-col leading-tight">
            <span
              className="text-[11px] font-semibold tracking-[0.25em] uppercase text-cyan-400/80"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              Thomas
            </span>
            <span
              className="text-[15px] font-bold tracking-[0.12em] uppercase gradient-text-shimmer"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              Legal Partners
            </span>
          </div>
        </div>

        {/* ── Center: Pill Navigation ── */}
        <nav
          className="flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full px-1.5 py-1.5"
          aria-label="Main navigation"
        >
          {navItems.map((item) => {
            const isActive = active === item;
            return (
              <motion.button
                key={item}
                id={`nav-${item.toLowerCase()}`}
                onClick={() => setActive(item)}
                className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'nav-pill-active'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-white/[0.04]'
                }`}
                style={{ fontFamily: 'var(--font-inter)' }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                {item}
              </motion.button>
            );
          })}
        </nav>

        {/* ── Right: Icons + Security Badge ── */}
        <div className="flex items-center gap-3 min-w-[220px] justify-end">
          {/* Icon cluster */}
          <div className="flex items-center gap-1">
            {[MessageCircle, Bell, Settings, UserCircle].map((Icon, i) => (
              <motion.button
                key={i}
                className="p-2 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-200 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={['Messages', 'Notifications', 'Settings', 'Profile'][i]}
                id={['nav-messages', 'nav-notifications', 'nav-settings', 'nav-profile'][i]}
              >
                <Icon size={18} />
              </motion.button>
            ))}
          </div>

          {/* Divider */}
          <div className="w-px h-6 bg-white/10" />

          {/* Security badge */}
          <NeonBadge status="secure" label="Secure Server Connected" pulse={true} />
        </div>
      </div>
    </motion.header>
  );
}
