import { RotateCcw } from 'lucide-react';
import { useGame } from '../state/GameProvider';

export function SettingsPage() {
  const { state, dispatch, reset } = useGame();
  return (
    <section className="mx-auto max-w-3xl">
      <h1 className="page-title">Settings</h1>
      <div className="holo-panel space-y-6 p-5">
        <label className="flex items-center justify-between gap-4">
          <span>
            <span className="block font-display text-lg text-cyan">Ambient audio</span>
            <span className="text-sm text-slate-400">Toggle the optional sound layer. Browser audio starts muted.</span>
          </span>
          <input
            type="checkbox"
            checked={!state.settings.muted}
            onChange={(event) => dispatch({ type: 'SET_SETTING', key: 'muted', value: !event.target.checked })}
            className="h-6 w-6 accent-cyan"
          />
        </label>
        <label className="block">
          <span className="mb-2 block font-display text-lg text-cyan">Volume</span>
          <input
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={state.settings.volume}
            onChange={(event) => dispatch({ type: 'SET_SETTING', key: 'volume', value: Number(event.target.value) })}
            className="w-full accent-magenta"
          />
        </label>
        <label className="flex items-center justify-between gap-4">
          <span>
            <span className="block font-display text-lg text-cyan">Reduced motion</span>
            <span className="text-sm text-slate-400">Shortens cinematic transitions and typewriter pacing.</span>
          </span>
          <input
            type="checkbox"
            checked={state.settings.reduceMotion}
            onChange={(event) => dispatch({ type: 'SET_SETTING', key: 'reduceMotion', value: event.target.checked })}
            className="h-6 w-6 accent-cyan"
          />
        </label>
        <button type="button" onClick={reset} className="secondary-cta">
          <RotateCcw size={18} />
          <span>Reset Local Save</span>
        </button>
      </div>
    </section>
  );
}
