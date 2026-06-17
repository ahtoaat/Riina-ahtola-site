import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── Brand palette ──────────────────────────────────────────
        warm: {
          white: '#FAF8F5',
          50:    '#F5F1EB',
          100:   '#EDE7DC',
        },
        sand: {
          200: '#D9CEBD',
          300: '#C8BAA3',
          400: '#B5A48A',
        },
        charcoal: {
          700: '#3D3833',
          800: '#2A2520',
          900: '#1A1714',
        },
        accent: '#8B7355',
      },
      fontFamily: {
        serif:  ['var(--font-playfair)', 'Georgia', 'serif'],
        sans:   ['var(--font-inter)',    'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
}

export default config
