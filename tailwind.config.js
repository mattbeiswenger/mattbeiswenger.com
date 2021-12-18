const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'one-dark': '#282c34',
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        redacted: ['Redacted Script', 'cursive', ...fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
