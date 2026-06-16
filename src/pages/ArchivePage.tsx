import { LockKeyhole } from 'lucide-react';
import { characters } from '../data/world';
import { useGame } from '../state/GameProvider';

export function ArchivePage() {
  const { state } = useGame();
  const secretUnlocked = state.unlockedMemories.length >= 2 || state.unlockedAchievements.includes('a-bot');
  return (
    <section>
      <h1 className="page-title">Character Archive</h1>
      <div className="grid gap-4 lg:grid-cols-3">
        {characters.map((character) => (
          <article key={character.id} className="holo-panel p-5">
            <div className="flex items-center gap-4">
              <div className="grid h-20 w-20 place-items-center rounded border text-4xl font-black" style={{ borderColor: character.color, color: character.color }}>
                {character.portrait}
              </div>
              <div>
                <h2 className="font-display text-2xl" style={{ color: character.color }}>
                  {character.name}
                </h2>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">{character.role}</p>
              </div>
            </div>
            <p className="mt-5 text-slate-300">{character.summary}</p>
            <div className="mt-5 space-y-2">
              {character.secrets.map((secret, index) => (
                <div key={secret} className="rounded border border-white/10 bg-black/25 p-3 text-sm text-slate-300">
                  {secretUnlocked || index === 0 ? (
                    secret
                  ) : (
                    <span className="flex items-center gap-2 text-slate-500">
                      <LockKeyhole size={15} /> Relationship data locked
                    </span>
                  )}
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
