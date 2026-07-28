import { characters } from './world';

describe('Character Data Loading', () => {
  it('should load exactly 5 core characters', () => {
    expect(characters.length).toBe(5);
  });

  it('should include Bugsy as a maintenance daemon', () => {
    const bugsy = characters.find(c => c.id === 'bugsy');
    expect(bugsy).toBeDefined();
    expect(bugsy?.glitchPercent).toBeGreaterThan(0);
  });
});
