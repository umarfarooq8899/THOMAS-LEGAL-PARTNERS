import ParticleField from '@/components/ui/ParticleField';
import Navbar from '@/components/layout/Navbar';
import SecurityTicker from '@/components/layout/SecurityTicker';

export default function Home() {
  return (
    <div className="relative min-h-screen" style={{ background: 'var(--color-obsidian)' }}>
      {/* Ambient particle background */}
      <ParticleField />

      {/* Content layers above particles */}
      <div className="relative z-10">
        <Navbar />
        <SecurityTicker />

        {/* Hero placeholder — panels & sections added in subsequent PRs */}
        <main className="flex items-center justify-center min-h-[80vh]">
          <div className="text-center space-y-4">
            <p
              className="text-xs tracking-[0.4em] uppercase text-cyan-400/60"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              UI Foundation — PR #1
            </p>
            <h1
              className="text-5xl font-bold gradient-text-cyan"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              Thomas Legal Partners
            </h1>
            <p className="text-gray-400 text-lg">
              Design system, layout primitives &amp; mock data ready.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
