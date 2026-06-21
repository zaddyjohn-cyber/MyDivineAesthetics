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
        nude: {
          100: '#F0DFCE',
          200: '#E2C7AE',
          300: '#C9A487',
        },
        warmbrown: {
          400: '#8A6A52',
          500: '#6D4F39',
          600: '#503827',
          700: '#3A2719',
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
        'gradient-blush-gold': 'linear-gradient(135deg, #F3DBD2 0%, #EFD9B1 100%)',
        'gradient-radial': 'radial-gradient(ellipse at top, rgba(239, 217, 177, 0.4), transparent 60%)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        glow: 'glow 4s ease-in-out infinite',
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
      },
    },
  },
  plugins: [],
};
