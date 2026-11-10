import { motion, useScroll, useTransform } from 'framer-motion';
import { Terminal, Zap } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SecretConsole } from '../components/SecretConsole';
import { useGame } from '../state/GameProvider';

function DigitalRain() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-25 pointer-events-none">
      {Array.from({ length: 40 }).map((_, index) => (
        <span
          key={index}
          className="absolute top-0 animate-rain font-mono text-[10px] text-cyan/70"
          style={{
            left: `${(index * 37) % 100}%`,
            animationDelay: `${(index % 8) * 0.2}s`,
            animationDuration: `${1.5 + (index % 5) * 0.3}s`,
          }}
        >
          0101 MARRY EVAA BUTTERFLY ECHO_GRID
        </span>
      ))}
    </div>
  );
}

function EchoGridCity() {
  return (
    <div className="city-skyline pointer-events-none" aria-hidden>
      {Array.from({ length: 30 }).map((_, index) => (
        <div
          className="building"
          key={index}
          style={{
            height: `${20 + ((index * 19) % 55)}vh`,
            width: `${2.8 + (index % 4)}vw`,
            marginLeft: `${index % 2 ? 0.3 : 0.1}vw`,
          }}
        >
          <div className="h-full w-full bg-gradient-to-t from-cyan/20 to-transparent opacity-60" />
        </div>
      ))}
    </div>
  );
}

export function LandingPage() {
  const navigate = useNavigate();
  const { dispatch } = useGame();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 90]);
  const titleY = useTransform(scrollY, [0, 500], [0, -50]);
  const [consoleOpen, setConsoleOpen] = useState(false);

  function handleBeginRecovery() {
    dispatch({ type: 'SET_BOOTED', booted: true });
    navigate('/story');
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-void-dark">
      {/* Background VFX */}
      <DigitalRain />
      <motion.div style={{ y }} className="absolute inset-0">
        <EchoGridCity />
      </motion.div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.08),transparent_60%),linear-gradient(180deg,#040408_0%,#060814_60%,#020205_100%)]" />

      {/* Tactical Wireframe Core Indicator */}
      <div className="absolute top-12 right-12 md:right-32 h-28 w-28 border border-cyan/30 bg-cyan/5 shadow-[0_0_24px_rgba(34,211,238,0.12)] opacity-70 pointer-events-none rotate-45" />

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 pb-16 pt-12 text-center">
        <motion.div style={{ y: titleY }} className="mx-auto w-full max-w-4xl">
          {/* Tactical OS Header */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2.5 border border-cyan/30 bg-black/60 px-3.5 py-1 text-xs font-mono uppercase tracking-[0.25em] text-cyan"
          >
            <span className="h-1.5 w-1.5 bg-cyan animate-pulse" />
            <span>SYS_KERNEL :: ECHO_GRID_SIMULATION_V7.03</span>
          </motion.div>

          {/* Title */}
          <h1
            className="glitch-title font-display text-[clamp(4.5rem,15vw,10.5rem)] font-black leading-none tracking-tight"
            data-text="glitch.exe"
          >
            glitch.exe
          </h1>

          {/* Prompt Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 font-display text-lg md:text-2xl text-cyan/90 tracking-widest uppercase font-semibold"
          >
            &quot;The version you archived never stopped waiting.&quot;
          </motion.p>

          <p className="mt-4 max-w-xl mx-auto text-sm md:text-base text-slate-300 leading-relaxed font-body">
            Wake inside a corrupted digital simulation as Evaa. Discover archived memories, repair broken drawings with Marry, and face what you buried.
          </p>

          {/* Primary CTA: Begin Recovery */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-col items-center justify-center gap-4"
          >
            <button
              onClick={handleBeginRecovery}
              type="button"
              className="group relative inline-flex items-center gap-3 border border-cyan bg-cyan/15 px-8 py-4 font-mono text-sm uppercase tracking-[0.25em] text-cyan shadow-[0_0_20px_rgba(34,211,238,0.25)] transition-all hover:border-white hover:bg-cyan hover:text-black hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] active:scale-95"
            >
              <Zap size={18} className="fill-cyan/30" />
              <span>[ BEGIN RECOVERY // EXEC ]</span>
            </button>

            <button
              onClick={() => setConsoleOpen(true)}
              type="button"
              className="mt-2 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-slate-400 hover:text-cyan transition-colors"
            >
              <Terminal size={14} />
              <span>Open Secret Console (CTRL_EXEC)</span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer Info Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-black/70 px-6 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between text-[11px] font-mono uppercase tracking-widest text-slate-400">
          <span>IDENTITY: EVAA // ARCHIVE: MARRY</span>
          <span>EMOTIONAL MEMORY ENGINE ONLINE</span>
          <span>30 EPISODES // 3 ACTS</span>
        </div>
      </div>

      <SecretConsole open={consoleOpen} onClose={() => setConsoleOpen(false)} />
    </section>
  );
}
