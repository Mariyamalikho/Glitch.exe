import { AnimatePresence, motion } from 'framer-motion';
import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { Archive, Award, Map, Menu, MonitorCog, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { useState } from 'react';
import { AchievementToast } from './components/AchievementToast';
import { AmbientAudio } from './components/AmbientAudio';
import { ErrorBoundary } from './components/ErrorBoundary';
import { SecretConsole } from './components/SecretConsole';
import { useGame } from './state/GameProvider';
import { ArchivePage } from './pages/ArchivePage';
import { AchievementsPage } from './pages/AchievementsPage';
import { EpisodesPage } from './pages/EpisodesPage';
import { LandingPage } from './pages/LandingPage';
import { MemoryPage } from './pages/MemoryPage';
import { SettingsPage } from './pages/SettingsPage';
import { StoryPage } from './pages/StoryPage';
import { WorldMapPage } from './pages/WorldMapPage';

const navItems = [
  { to: '/story', label: 'Story', icon: Sparkles },
  { to: '/episodes', label: 'Episodes', icon: Menu },
  { to: '/map', label: 'Map', icon: Map },
  { to: '/archive', label: 'Archive', icon: Archive },
  { to: '/memories', label: 'Memories', icon: MonitorCog },
  { to: '/achievements', label: 'Signals', icon: Award },
];

export function App() {
  const location = useLocation();
  const { state, dispatch } = useGame();
  const [consoleOpen, setConsoleOpen] = useState(false);
  const isLanding = location.pathname === '/';

  return (
    <ErrorBoundary>
      <div className="min-h-screen overflow-x-hidden bg-void text-slate-100 selection:bg-cyan/30">
        <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_25%_20%,rgba(49,247,255,.18),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(255,43,214,.16),transparent_26%),linear-gradient(180deg,#05050a,#090817_55%,#05050a)]" />
        <div className="scanlines pointer-events-none fixed inset-0 z-50 opacity-30" />
        {!isLanding && (
          <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-void/70 backdrop-blur-xl">
            <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3">
              <NavLink to="/" className="font-display text-lg tracking-[0.28em] text-cyan">
                glitch.exe
              </NavLink>
              <div className="hidden items-center gap-1 md:flex">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `nav-chip ${isActive ? 'border-cyan/70 text-cyan shadow-neon' : 'border-white/10 text-slate-300'}`
                    }
                  >
                    <item.icon size={16} aria-hidden />
                    <span>{item.label}</span>
                  </NavLink>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="icon-button"
                  type="button"
                  aria-label={state.settings.muted ? 'Unmute ambience' : 'Mute ambience'}
                  onClick={() => dispatch({ type: 'SET_SETTING', key: 'muted', value: !state.settings.muted })}
                >
                  {state.settings.muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>
                <button className="console-button" type="button" onClick={() => setConsoleOpen(true)}>
                  CTRL_EXEC
                </button>
              </div>
            </nav>
          </header>
        )}
        {!isLanding && (
          <nav className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-6 border-t border-white/10 bg-void/85 backdrop-blur-xl md:hidden">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `grid min-h-14 place-items-center text-[0.65rem] ${isActive ? 'text-cyan' : 'text-slate-400'}`
                }
                aria-label={item.label}
              >
                <item.icon size={18} aria-hidden />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        )}
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
            animate={{ opacity: 1, filter: 'blur(0)', y: 0 }}
            exit={{ opacity: 0, filter: 'blur(8px)', y: -8 }}
            transition={{ duration: state.settings.reduceMotion ? 0.01 : 0.35 }}
            className={isLanding ? '' : 'relative z-10 mx-auto min-h-screen max-w-7xl px-4 pb-16 pt-24'}
          >
            <Routes location={location}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/story" element={<StoryPage />} />
              <Route path="/episodes" element={<EpisodesPage />} />
              <Route path="/map" element={<WorldMapPage />} />
              <Route path="/archive" element={<ArchivePage />} />
              <Route path="/memories" element={<MemoryPage />} />
              <Route path="/achievements" element={<AchievementsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </motion.main>
        </AnimatePresence>
        <AmbientAudio />
        <AchievementToast />
        <SecretConsole open={consoleOpen} onClose={() => setConsoleOpen(false)} />
      </div>
    </ErrorBoundary>
  );
}
