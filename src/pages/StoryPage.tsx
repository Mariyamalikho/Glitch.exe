import { motion } from 'framer-motion';
import { ChevronRight, Database, HeartPulse } from 'lucide-react';
import { CharacterPortrait } from '../components/CharacterPortrait';
import { Typewriter } from '../components/Typewriter';
import { characters, dialogue, episodes } from '../data/world';
import { useGame } from '../state/GameProvider';

export function StoryPage() {
  const { state, dispatch } = useGame();
  const line = dialogue[state.currentLineId] ?? dialogue['boot-01'];
  const character = characters.find((item) => item.id === line.character)!;
  const currentEpisode = episodes.find((episode) => episode.startLine === line.id || episode.location === line.location);

  function advance() {
    if (line.next) dispatch({ type: 'ADVANCE', lineId: line.next });
    if (!line.next && currentEpisode) dispatch({ type: 'COMPLETE_EPISODE', episodeId: currentEpisode.id });
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[320px_1fr]">
      <aside className="holo-panel order-2 p-5 lg:order-1">
        <CharacterPortrait id={line.character} mood={line.mood} />
        <div className="mt-6 space-y-4">
          {Object.entries(state.emotion).map(([key, value]) => (
            <div key={key}>
              <div className="mb-1 flex justify-between text-xs uppercase tracking-[0.18em] text-slate-400">
                <span>{key}</span>
                <span>{value}/10</span>
              </div>
              <div className="h-2 overflow-hidden rounded bg-white/10">
                <motion.div className="h-full bg-cyan" animate={{ width: `${value * 10}%` }} />
              </div>
            </div>
          ))}
        </div>
      </aside>
      <section className="scene-panel order-1 min-h-[640px] overflow-hidden lg:order-2">
        <div className={`scene-backdrop scene-${line.location}`} />
        <div className="relative z-10 flex min-h-[640px] flex-col justify-end p-4 sm:p-7">
          <div className="mb-auto flex flex-wrap items-center gap-3">
            <span className="status-pill">
              <Database size={15} />
              {line.location.replace('-', ' ')}
            </span>
            <span className="status-pill">
              <HeartPulse size={15} />
              auto-save active
            </span>
          </div>
          <motion.div layout className="dialogue-box">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <p className="font-display text-2xl uppercase tracking-[0.16em]" style={{ color: character.color }}>
                  {character.name}
                </p>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">{line.mood}</p>
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-cyan">line {line.id}</span>
            </div>
            <div className="min-h-28 text-xl leading-relaxed text-slate-100">
              <Typewriter text={line.text} />
            </div>
            <div className="mt-6 grid gap-3">
              {line.choices?.map((choice) => (
                <button key={choice.id} type="button" className="choice-button" onClick={() => dispatch({ type: 'CHOOSE', choice })}>
                  <span>{choice.label}</span>
                  <ChevronRight size={18} aria-hidden />
                </button>
              ))}
              {!line.choices && line.next && (
                <button type="button" className="choice-button" onClick={advance}>
                  <span>Continue</span>
                  <ChevronRight size={18} aria-hidden />
                </button>
              )}
              {!line.choices && !line.next && (
                <button type="button" className="choice-button" onClick={advance}>
                  <span>Complete Episode</span>
                  <ChevronRight size={18} aria-hidden />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
