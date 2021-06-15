const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      darkPurple: '#0a0612',
      gray: colors.gray,
      white: colors.white,
      purple: '#1f1137',
      pink: '#5271ff',
      orangePastel: '#ffdad1',
      orange: '#F98404'
    },
    extend: {
      zIndex: {
        '-1': '-1',
        '-2': '-2',
      },
      keyframes: {
        darkBgIn: {
          'from': { width: '0', height: '0', borderBottomLeftRadius: '500%' },
          'to': { width: '100%', height: '100%', borderBottomLeftRadius: '0' },
        },
        darkBgOut: {
          'from': {
            width: '100%', height: '100%', borderBottomLeftRadius: '0'
          },
          'to': { width: '0', height: '0', borderBottomLeftRadius: '500%' }
        },
        darkTextIn: {
          '0%': { opacity: 0.5 },
          '100%': { opacity: 1 },
        },
        darkTextOut: {
          '0%': { opacity: 0.5 },
          '100%': { opacity: 1 },
        },
        pulsate: {
          '0%': { textShadow: '0 0 4px #fff, 0 0 10px #fff, 0 0 18px #fff, 0 0 38px #5271ff, 0 0 73px #5271ff, 0 0 80px #5271ff, 0 0 94px #5271ff, 0 0 140px #5271ff' },
          '100%': { textShadow: '0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #5271ff, 0 0 80px #5271ff, 0 0 90px #5271ff, 0 0 100px #5271ff, 0 0 150px #5271ff' }
        },
        flicker: {
          '0%, 18%, 22%, 25%, 53%, 57%, 100%': {
            textShadow: '0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #5271ff, 0 0 80px #5271ff, 0 0 90px #5271ff, 0 0 100px #5271ff, 0 0 150px #5271ff'
          },
          '20%, 24%, 55%': { textShadow: 'none' }
        }
      },
      animation: {
        darkBgIn: 'darkBgIn 0.2s ease-out forwards',
        darkBgOut: 'darkBgOut 0.2s ease-in forwards',
        darkTextIn: 'darkTextIn 0.3s ease-out forwards',
        darkTextOut: 'darkTextOut 0.3s ease-in forwards',
        pulsate: 'pulsate 0.11s ease-in-out infinite alternate',
        flicker: 'flicker 2s infinite alternate',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
