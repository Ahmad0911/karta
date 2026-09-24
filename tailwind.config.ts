import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette, sampled from the Karta logo
        ink: { DEFAULT: '#101E21', soft: '#1B2F33' },
        paper: { DEFAULT: '#FAF9F3', deep: '#F0ECE1' },
        brass: { 300: '#DCC3A4', 500: '#BC8E63', 700: '#8A6540' }, // use 700 for text on paper (AA contrast)
        moss: '#4D6A4F',
        // Legacy aliases so earlier components still compile, now on-brand
        teal: '#BC8E63',
        amber: '#BC8E63',
        indigo: { 500: '#8A6540', 900: '#101E21' },
        ochre: { 300: '#DCC3A4', 500: '#BC8E63', 700: '#8A6540' },
        wood: { 700: '#3B4A4C', 900: '#1B2F33' },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: { content: '80rem' },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'none' },
        },
      },
      animation: { 'fade-up': 'fade-up .7s cubic-bezier(.2,.7,.2,1) both' },
    },
  },
} satisfies Config;
