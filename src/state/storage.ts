import type { GameState } from '../types';

const KEY = 'glitch.exe.save.v1';

export const defaultState: GameState = {
  currentLineId: 'boot-01',
  completedEpisodes: [],
  unlockedMemories: [],
  unlockedAchievements: [],
  visitedLocations: ['white-room'],
  emotion: { innocence: 3, resolve: 2, dread: 1, trust: 0 },
  relationship: { merci: 0, eva: 0, bot: 0 },
  settings: { muted: true, volume: 0.35, reduceMotion: false },
};

export function loadState(): GameState {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? { ...defaultState, ...JSON.parse(raw) } : defaultState;
  } catch {
    return defaultState;
  }
}

export function saveState(state: GameState) {
  localStorage.setItem(KEY, JSON.stringify(state));
}

export function clearState() {
  localStorage.removeItem(KEY);
}
