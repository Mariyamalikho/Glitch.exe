/** @type {import('tailwindcss').Config} */
// Tailwind CSS theme configuration for glitch.exe cyberpunk design system
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Orbitron', 'Rajdhani', 'monospace', 'sans-serif'],
        mono: ['Share Tech Mono', 'Courier New', 'monospace'],
        body: ['Rajdhani', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      colors: {
        void: '#040408',
        'void-dark': '#020205',
        panel: 'rgba(8, 10, 20, 0.88)',
        cyan: '#22D3EE',
        pink: '#FF2BD6',
        purple: '#8B5CF6',
        magenta: '#FF2BD6',
        acid: '#BAFF29',
        warning: '#FFB020',
        error: '#FF4D6D',
      },
      boxShadow: {
        neon: '0 0 20px rgba(34, 211, 238, 0.35)',
        'neon-cyan': '0 0 25px rgba(34, 211, 238, 0.6)',
        'neon-pink': '0 0 25px rgba(255, 43, 214, 0.6)',
      },
      keyframes: {
        rain: {
          '0%': { transform: 'translateY(-20%)' },
          '100%': { transform: 'translateY(120%)' },
        },
        pulseGlow: {
          '0%,100%': { opacity: '0.45' },
          '50%': { opacity: '1' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        float: {
          '0%,100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-8px,0)' },
        },
      },
      animation: {
        rain: 'rain 1.4s linear infinite',
        pulseGlow: 'pulseGlow 2.2s ease-in-out infinite',
        scan: 'scan 5s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
