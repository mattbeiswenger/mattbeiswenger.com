const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
        'one-dark': '#282c34',
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      ringWidth: ['hover'],
      ringColor: ['hover'],
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
