import { useEffect, useRef } from 'react';
import { useGame } from '../state/GameProvider';

export function AmbientAudio() {
  const { state } = useGame();
  const contextRef = useRef<AudioContext | null>(null);
  const gainRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);

  useEffect(() => {
    if (state.settings.muted) {
      gainRef.current?.gain.setTargetAtTime(0, contextRef.current?.currentTime ?? 0, 0.08);
      return;
    }

    const AudioCtor = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtor) return;

    if (!contextRef.current) {
      const context = new AudioCtor();
      const gain = context.createGain();
      gain.gain.value = 0;
      gain.connect(context.destination);

      const low = context.createOscillator();
      low.type = 'sawtooth';
      low.frequency.value = 54;
      const high = context.createOscillator();
      high.type = 'sine';
      high.frequency.value = 111;
      const filter = context.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 480;

      low.connect(filter);
      high.connect(filter);
      filter.connect(gain);
      low.start();
      high.start();

      contextRef.current = context;
      gainRef.current = gain;
      oscillatorsRef.current = [low, high];
    }

    void contextRef.current.resume();
    gainRef.current?.gain.setTargetAtTime(state.settings.volume * 0.08, contextRef.current.currentTime, 0.1);
  }, [state.settings.muted, state.settings.volume]);

  useEffect(() => {
    return () => {
      oscillatorsRef.current.forEach((oscillator) => oscillator.stop());
      void contextRef.current?.close();
    };
  }, []);

  return null;
}
