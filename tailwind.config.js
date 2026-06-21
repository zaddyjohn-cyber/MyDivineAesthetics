/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FBF7F1',
          100: '#F7F0E6',
          200: '#F0E5D3',
          300: '#E6D6BC',
        },
        ivory: '#FCFAF6',
        champagne: {
          50: '#F7EBD2',
          100: '#EFD9B1',
          200: '#E2C390',
          300: '#D4AC70',
          400: '#C69753',
          500: '#B8843D',
        },
        blush: {
          50: '#FBEFEB',
          100: '#F3DBD2',
          200: '#E8C0B3',
          300: '#D9A18F',
        },
        rose: {
          50: '#FCEEF1',
          100: '#F8D8DE',
          200: '#F0B3BD',
          300: '#E58C9D',
          400: '#D66B82',
        },
        nude: {
          100: '#F0DFCE',
          200: '#E2C7AE',
          300: '#C9A487',
        },
        warmbrown: {
          400: '#735540',
          500: '#553B28',
          600: '#3F2A1A',
          700: '#2A1B0F',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Outfit"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        halo: '0 30px 80px -20px rgba(184, 132, 61, 0.35), 0 10px 40px -10px rgba(217, 161, 143, 0.25)',
        glass: '0 8px 32px 0 rgba(80, 56, 39, 0.12)',
        soft: '0 12px 40px -12px rgba(80, 56, 39, 0.18)',
      },
      backgroundImage: {
        'gradient-divine': 'linear-gradient(135deg, #FBF7F1 0%, #F7EBD2 40%, #FBEFEB 100%)',
        'gradient-gold': 'linear-gradient(135deg, #EFD9B1 0%, #D4AC70 50%, #B8843D 100%)',
        'gradient-blush-gold': 'linear-gradient(135deg, #F8D8DE 0%, #EFD9B1 100%)',
        'gradient-rose-gold': 'linear-gradient(135deg, #F8D8DE 0%, #F0B3BD 35%, #EFD9B1 75%, #D4AC70 100%)',
        'gradient-radial': 'radial-gradient(ellipse at top, rgba(239, 217, 177, 0.4), transparent 60%)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        glow: 'glow 4s ease-in-out infinite',
        'brand-blink': 'brand-blink 1.6s ease-in-out infinite',
        'spin-slow': 'spin 40s linear infinite',
        'spin-slower': 'spin 70s linear infinite',
        'spin-rev': 'spin-rev 55s linear infinite',
        twinkle: 'twinkle 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glow: {
          '0%, 100%': { opacity: 0.6 },
          '50%': { opacity: 1 },
        },
        'brand-blink': {
          '0%, 100%': { opacity: 1, filter: 'drop-shadow(0 0 8px rgba(239,217,177,0.7))' },
          '50%': { opacity: 0.55, filter: 'drop-shadow(0 0 16px rgba(239,217,177,1))' },
        },
        'spin-rev': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        twinkle: {
          '0%, 100%': { opacity: 0.25, transform: 'scale(0.85)' },
          '50%': { opacity: 1, transform: 'scale(1.2)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 0.4, transform: 'scale(1)' },
          '50%': { opacity: 0.75, transform: 'scale(1.06)' },
        },
      },
    },
  },
  plugins: [],
};
