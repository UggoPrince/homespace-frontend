/* eslint-disable import/no-extraneous-dependencies */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './dist/**/*.{html,js,jsx}',
    // './index.html',
  ],
  darkMode: 'media',
  theme: {
    container: {
      center: true,
    },
    /* fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    }, */
    extend: {
      /* transitionProperty: {
        width: 'width',
        hidden: 'hidden',
      }, */
      colors: {
        main: colors.indigo,
        primary: '#4f46e5',
        buttonColor: '#4f46e5',
        secondary: '#9f46e5',
        tertiary: '#468DE5',
        textColor: colors.slate[600],
        iconColor: colors.amber[500],
      },
      fontFamily: {
        roboto: ['Roboto'],
        open_sans: ['Open Sans'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
