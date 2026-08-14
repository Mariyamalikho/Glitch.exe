import { useEffect, useRef } from 'react';

/**
 * Custom hook for managing global audio state, background tracks, and SFX.
 */
export function useAudio() {
  const isMuted = useRef(false);

  useEffect(() => {
    // Audio engine initialization logic will go here
    // Ensure AudioContext resumes on first user interaction to bypass autoplay policies
  }, []);

  return { isMuted };
}
