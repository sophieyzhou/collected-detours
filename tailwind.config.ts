import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: 'var(--color-paper)',
        'paper-raised': 'var(--color-paper-raised)',
        ink: 'var(--color-ink)',
        'ink-soft': 'var(--color-ink-soft)',
        line: 'var(--color-line)',
        stamp: 'var(--color-stamp)',
        'stamp-soft': 'var(--color-stamp-soft)',
        section: 'var(--color-section)',
        'section-soft': 'var(--color-section-soft)',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['Pliant', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      borderRadius: {
        stamp: '999px',
      },
    },
  },
  plugins: [],
} satisfies Config;
