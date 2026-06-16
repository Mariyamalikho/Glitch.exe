import { Award, Circle } from 'lucide-react';
import { achievements } from '../data/world';
import { useGame } from '../state/GameProvider';

export function AchievementsPage() {
  const { state } = useGame();
  return (
    <section>
      <h1 className="page-title">Signal Achievements</h1>
      <div className="grid gap-3">
        {achievements.map((achievement) => {
          const unlocked = state.unlockedAchievements.includes(achievement.id);
          return (
            <article key={achievement.id} className="holo-panel flex items-center gap-4 p-4">
              <div className={`grid h-12 w-12 shrink-0 place-items-center rounded border ${unlocked ? 'border-acid text-acid' : 'border-white/10 text-slate-600'}`}>
                {unlocked ? <Award size={22} /> : <Circle size={18} />}
              </div>
              <div>
                <h2 className="font-display text-xl">{achievement.title}</h2>
                <p className="text-slate-400">{achievement.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
