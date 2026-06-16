
import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        headline: ['Inter', 'sans-serif'],
        code: ['monospace'],
      },
      colors: {
        background: '#FFFFFF',
        foreground: '#2D3748',
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#2D3748',
        },
        popover: {
          DEFAULT: '#FFFFFF',
          foreground: '#2D3748',
        },
        primary: {
          DEFAULT: '#0A192F',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#F7FAFC',
          foreground: '#2D3748',
        },
        muted: {
          DEFAULT: '#EDF2F7',
          foreground: '#4A5568',
        },
        accent: {
          DEFAULT: '#2D3748',
          foreground: '#FFFFFF',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: '#E2E8F0',
        input: '#E2E8F0',
        ring: '#0A192F',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
