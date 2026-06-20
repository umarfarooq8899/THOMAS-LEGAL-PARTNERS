import ParticleField from '@/components/ui/ParticleField';
import Navbar from '@/components/layout/Navbar';
import SecurityTicker from '@/components/layout/SecurityTicker';
import TimelinePanel from '@/components/panels/TimelinePanel';
import VaultHero from '@/components/panels/VaultHero';
import AnalyticsPanel from '@/components/panels/AnalyticsPanel';

export default function Home() {
  return (
    <div className="relative min-h-screen" style={{ background: 'var(--color-obsidian)' }}>
      {/* Fixed ambient particle background */}
      <ParticleField />

      {/* Main content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <SecurityTicker />

        {/* Three-column hero row */}
        <main
          id="main-dashboard"
          className="flex-1 grid gap-4 p-4"
          style={{
            gridTemplateColumns: '22% 1fr 22%',
            minHeight: 'calc(100vh - 7rem)',
          }}
        >
          {/* Left: Legal Timeline */}
          <div className="glass-card p-4 overflow-hidden">
            <TimelinePanel />
          </div>

          {/* Center: Digital Vault */}
          <VaultHero />

          {/* Right: Portal Analytics */}
          <div className="glass-card p-4 overflow-hidden">
            <AnalyticsPanel />
          </div>
        </main>
      </div>
    </div>
  );
}
