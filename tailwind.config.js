/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#3B82F6',
          500: '#2563EB',
          600: '#1D4ED8',
          700: '#1E3A8A',
          800: '#1E3070',
          900: '#0F1F5C',
        },
        secondary: {
          DEFAULT: '#1E40AF',
          400: '#3B82F6',
          500: '#1E40AF',
          600: '#1E3A8A',
        },
        accent: {
          DEFAULT: '#60A5FA',
          400: '#60A5FA',
          500: '#3B82F6',
        },
        background: '#03050F',
        card: '#080D1A',
        'card-border': '#0F1729',
        'text-primary': '#E2E8F0',
        'text-secondary': '#94A3B8',
        'text-muted': '#475569',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #03050F 0%, #060B1A 50%, #03050F 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(8,13,26,0.95) 0%, rgba(15,23,42,0.8) 100%)',
        'primary-gradient': 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)',
        'glow-gradient': 'radial-gradient(ellipse at center, rgba(37,99,235,0.08) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(37, 99, 235, 0.25)',
        'glow-lg': '0 0 40px rgba(37, 99, 235, 0.3)',
        'glow-xl': '0 0 60px rgba(37, 99, 235, 0.35)',
        'glow-cyan': '0 0 20px rgba(59, 130, 246, 0.2)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.6)',
        'card-hover': '0 8px 40px rgba(37, 99, 235, 0.15)',
        'inner-glow': 'inset 0 0 20px rgba(37, 99, 235, 0.05)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'gradient-shift': 'gradientShift 6s ease infinite',
        'spin-slow': 'spin 20s linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'scan': 'scanLine 4s linear infinite',
        'orbit': 'orbit 8s linear infinite',
        'orbit-slow': 'orbit 20s linear infinite',
        'orbit-reverse': 'orbitReverse 14s linear infinite',
        'data-flow': 'dataFlow 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(37, 99, 235, 0.2)' },
          '50%': { boxShadow: '0 0 50px rgba(37, 99, 235, 0.4)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(60px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(60px) rotate(-360deg)' },
        },
        orbitReverse: {
          '0%': { transform: 'rotate(0deg) translateX(80px) rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg) translateX(80px) rotate(360deg)' },
        },
        dataFlow: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 0%' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
}
