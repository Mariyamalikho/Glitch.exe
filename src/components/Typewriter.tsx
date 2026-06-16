import { useEffect, useMemo, useState } from 'react';
import { useGame } from '../state/GameProvider';

export function Typewriter({ text, onDone }: { text: string; onDone?: () => void }) {
  const { state } = useGame();
  const [count, setCount] = useState(0);
  const speed = state.settings.reduceMotion ? 0 : 18;
  const visibleText = useMemo(() => text.slice(0, count), [count, text]);

  useEffect(() => {
    setCount(0);
  }, [text]);

  useEffect(() => {
    if (count >= text.length) {
      onDone?.();
      return;
    }
    const timer = window.setTimeout(() => setCount((value) => value + 1), speed);
    return () => window.clearTimeout(timer);
  }, [count, onDone, speed, text.length]);

  return (
    <button className="w-full text-left" type="button" onClick={() => setCount(text.length)} aria-label="Reveal dialogue text">
      {visibleText}
      <span className="ml-1 animate-pulse text-cyan">_</span>
    </button>
  );
}
