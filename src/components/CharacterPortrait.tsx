import { characters } from '../data/world';
import type { CharacterId } from '../types';

export function CharacterPortrait({ id, mood }: { id: CharacterId; mood: string }) {
  const character = characters.find((item) => item.id === id)!;
  return (
    <div className="portrait" style={{ '--portrait-color': character.color } as React.CSSProperties}>
      <div className="portrait-core">{character.portrait}</div>
      <div className="mt-3 text-center">
        <p className="font-display text-lg uppercase tracking-[0.24em]" style={{ color: character.color }}>
          {character.name}
        </p>
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{mood}</p>
      </div>
    </div>
  );
}
