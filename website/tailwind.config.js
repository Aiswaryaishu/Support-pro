/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#07162D',
          900: '#0B1F3A',
          800: '#102A4C',
          700: '#143660',
        },
        brand: {
          700: '#1263B3',
          600: '#1677D2',
          500: '#2196F3',
        },
        cyan: {
          500: '#20C7E8',
          400: '#38D4F0',
        },
        success: {
          400: '#4ADE80',
          600: '#16A34A',
        },
        urgent: {
          300: '#FCA97A',
          400: '#FB8B4C',
          600: '#EA580C',
          700: '#C2460A',
        },
        slate: {
          900: '#111827',
          800: '#1E2A3B',
          700: '#334155',
          600: '#475569',
          500: '#64748B',
          400: '#94A3B8',
          300: '#CBD5E1',
          200: '#E2E8F0',
          100: '#F1F5F9',
          50: '#F8FAFC',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['60px', { lineHeight: '1.04', letterSpacing: '-0.04em', fontWeight: '800' }],
        'display-mobile': ['40px', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '800' }],
        'heading-xl': ['48px', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '800' }],
        'heading-lg': ['40px', { lineHeight: '1.15', letterSpacing: '-0.03em', fontWeight: '700' }],
        'heading-md': ['30px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        'heading-sm': ['20px', { lineHeight: '1.3', fontWeight: '700' }],
        'body-lg': ['18px', { lineHeight: '1.7' }],
        'body-md': ['15px', { lineHeight: '1.65' }],
        'label': ['12px', { lineHeight: '1.4', letterSpacing: '0.08em', fontWeight: '700' }],
      },
      maxWidth: {
        container: '1280px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh': 'radial-gradient(at 40% 20%, hsla(210,100%,56%,0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,0.12) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(220,100%,26%,0.20) 0px, transparent 50%)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(1.4)', opacity: '0' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'marquee-fast': 'marquee 25s linear infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        float: 'float 4s ease-in-out infinite',
        'float-delay': 'float 4s ease-in-out 1s infinite',
        'pulse-ring': 'pulse-ring 1.5s ease-out infinite',
        shimmer: 'shimmer 2s linear infinite',
      },
      boxShadow: {
        'card-hover': '0 20px 60px -12px rgba(22, 119, 210, 0.18)',
        'card-urgent': '0 20px 60px -12px rgba(234, 88, 12, 0.15)',
        'glow-blue': '0 0 40px rgba(22, 119, 210, 0.25)',
        'glow-cyan': '0 0 40px rgba(32, 199, 232, 0.2)',
        'inner-white': 'inset 0 1px 0 rgba(255,255,255,0.1)',
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
      },
    },
  },
  plugins: [],
};
