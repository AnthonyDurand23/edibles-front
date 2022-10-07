const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: '480px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        ediblesBody: ['Assistant', 'sans-serif'],
        ediblesBodyTitle: ['Poppins', 'sans-serif'],
        ediblesLogo: ['apaluregular', 'cursive'],
      },
      width: {
        fit: 'fit-content',
      },
      colors: {
        'custom-green-4': '#709053',
        'custom-green-3': '#81ae64',
        'custom-green-2': '#9fc87a',
        'custom-green-1': '#c7e78b',
        'custom-brown-2': '#b59b77',
        'custom-brownish': '#b5b577',
        'custom-brown-1': '#d4bc8a',
        'custom-cream': '#fff4c9',
        'custom-grey': '#e8e2c9',
        'custom-darkgrey': '#474747',
      },
      gridAutoRows: {
        '1/2': 'minmax(0, 15rem)',
        '2/3': 'minmax(0, 18rem)',
      },
      keyframes: {
        fadein: {
          '0%': {
            transform: 'translateX(-500px)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        fadein: 'fadein .5s ease',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
