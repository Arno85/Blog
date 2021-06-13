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
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
