const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      gray: colors.gray,
      white: colors.white,
      purple: '#511281',
      pink: '#ff449f',
      cyan: '#00ead3',
    },
    extend: {
      zIndex: {
        '-1': '-1',
        '-2': '-2',
      },
      keyframes: {
        darkBgIn: {
          'from': {
            width: '0',
            height: '0',
            borderBottomLeftRadius: '500%'
          },
          'to': {
            width: '100%',
            height: '100%',
            borderBottomLeftRadius: '0'
          },
        },
        darkBgOut: {
          'from': {
            width: '100%',
            height: '100%',
            borderBottomLeftRadius: '0'
          },
          'to': {
            width: '0',
            height: '0',
            borderBottomLeftRadius: '500%'
          }
        },
        darkTextIn: {
          '0%': {
            opacity: 0.5
          },
          '100%': {
            opacity: 1
          },
        },
        darkTextOut: {
          '0%': {
            opacity: 0.5
          },
          '100%': {
            opacity: 1
          },
        },
      },
      animation: {
        darkBgIn: 'darkBgIn 0.3s ease-out forwards',
        darkBgOut: 'darkBgOut 0.3s ease-in forwards',
        darkTextIn: 'darkTextIn 0.3s ease-out forwards',
        darkTextOut: 'darkTextOut 0.3s ease-in forwards',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
