/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Orbitron', 'Rajdhani', 'system-ui', 'sans-serif'],
        body: ['Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      colors: {
        void: '#05050a',
        panel: 'rgba(12, 14, 26, 0.72)',
        cyan: '#31f7ff',
        magenta: '#ff2bd6',
        violet: '#9d4dff',
        acid: '#baff29',
        warning: '#ffb020',
      },
      boxShadow: {
        neon: '0 0 28px rgba(49, 247, 255, 0.35), 0 0 56px rgba(255, 43, 214, 0.18)',
        magenta: '0 0 24px rgba(255, 43, 214, 0.35)',
      },
      keyframes: {
        rain: {
          '0%': { transform: 'translateY(-20%)' },
          '100%': { transform: 'translateY(120%)' },
        },
        pulseGlow: {
          '0%,100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        float: {
          '0%,100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-12px,0)' },
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
