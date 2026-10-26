/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Semantic, theme-aware tokens (driven by CSS variables in index.css)
        canvas: {
          DEFAULT: 'rgb(var(--canvas) / <alpha-value>)',
          deep: 'rgb(var(--canvas-deep) / <alpha-value>)',
        },
        surface: 'rgb(var(--surface) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
        fg: {
          DEFAULT: 'rgb(var(--fg) / <alpha-value>)',
          soft: 'rgb(var(--fg-soft) / <alpha-value>)',
          slate: 'rgb(var(--fg-slate) / <alpha-value>)',
        },
        solid: {
          DEFAULT: 'rgb(var(--solid) / <alpha-value>)',
          fg: 'rgb(var(--solid-fg) / <alpha-value>)',
        },
        // Fixed brand palette
        forest: {
          DEFAULT: '#0E1B2C',
          deep: '#08101A',
          ink: '#16283D',
        },
        moss: {
          DEFAULT: 'rgb(var(--moss) / <alpha-value>)',
          light: '#D9961B',
        },
        lime: {
          DEFAULT: '#FFB224',
          dim: '#D9961B',
        },
        coral: {
          DEFAULT: '#FFB224',
          whisper: '#ECE6DA',
          ombra: '#D9961B',
        },
        cream: {
          DEFAULT: '#F6F3EC',
          deep: '#ECE6DA',
        },
        ink: {
          DEFAULT: '#0E1B2C',
          black: '#000000',
          slate: '#18273A',
          stone: '#3A4658',
          ash: '#8A93A0',
        },
        fog: '#D8D2C6',
        paper: '#ffffff',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        condensed: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        eyebrow: ['0.875rem', { lineHeight: '1.4', letterSpacing: '0.18em' }],
      },
      borderRadius: {
        card: '8px',
        frame: '24px',
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        'marquee-reverse': 'marquee 28s linear infinite reverse',
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'float 11s ease-in-out infinite',
        'spin-slow': 'spin 24s linear infinite',
        blink: 'blink 1.6s steps(2, start) infinite',
        draw: 'draw 1.2s ease-out forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.25' },
        },
        draw: {
          '0%': { strokeDashoffset: '240' },
          '100%': { strokeDashoffset: '0' },
        },
      },
    },
  },
  plugins: [],
}
