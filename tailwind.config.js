const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-grey': '#191C1E',
        'light-grey': '#292E30',
        'light-grey-hover': '#31383A',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.300'),
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.800'),
          },
        },
      }),
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [require('@tailwindcss/typography')],
}
