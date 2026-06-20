import ParticleField from '@/components/ui/ParticleField';
import Navbar from '@/components/layout/Navbar';
import SecurityTicker from '@/components/layout/SecurityTicker';
import TimelinePanel from '@/components/panels/TimelinePanel';
import VaultHero from '@/components/panels/VaultHero';
import AnalyticsPanel from '@/components/panels/AnalyticsPanel';
import RecentDocuments from '@/components/sections/RecentDocuments';
import ComplianceCards from '@/components/sections/ComplianceCards';
import ActivityFeed from '@/components/sections/ActivityFeed';

export default function Home() {
  return (
    <div className="relative min-h-screen" style={{ background: 'var(--color-obsidian)' }}>
      {/* Fixed ambient particle background */}
      <ParticleField />

      {/* Main content stack */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <SecurityTicker />

        {/* ── Three-Column Hero Row ── */}
        <div
          className="grid gap-4 px-4 pt-4"
          style={{
            gridTemplateColumns: '22% 1fr 22%',
            height: 'calc(100vh - 8.5rem)',
          }}
        >
          {/* Left: Timeline Panel */}
          <div className="glass-card p-4 overflow-hidden">
            <TimelinePanel />
          </div>

          {/* Center: Digital Vault */}
          <VaultHero />

          {/* Right: Analytics Panel */}
          <div className="glass-card p-4 overflow-hidden">
            <AnalyticsPanel />
          </div>
        </div>

        {/* ── Full-Width Sections ── */}
        <main id="main-sections" className="px-4 pb-8 space-y-4 mt-4">
          {/* Recent Documents */}
          <RecentDocuments />

          {/* Compliance + Activity side-by-side */}
          <div
            className="grid gap-4"
            style={{ gridTemplateColumns: '1fr 420px' }}
          >
            <ComplianceCards />
            <ActivityFeed />
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/[0.04] px-6 py-4 flex items-center justify-between mt-auto">
          <p className="text-[11px] text-gray-700" style={{ fontFamily: 'var(--font-montserrat)' }}>
            © 2025 Thomas Legal Partners LLP · All rights reserved
          </p>
          <div className="flex items-center gap-4 text-[10px] text-gray-700">
            <span>Privacy Policy</span>
            <span>·</span>
            <span>Terms of Service</span>
            <span>·</span>
            <span className="text-cyan-400/40">Secure · Encrypted · Compliant</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
