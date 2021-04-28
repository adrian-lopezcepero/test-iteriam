module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
    },
    ripple: theme => ({
      colors: theme('colors')
    }),
    extend: {
      colors: {
        blue: '#1379c8',
        gray: {
          DEFAULT: '#434343',
          accent: '#abaaab'
        }
      },
      spacing: {
        padding: {
          DEFAULT: '5px'
        }
      },
      screens: {
        'desktop': '960px',
      },
      backgroundImage: theme => ({
        'login': "url('/assets/images/background.jpg')"
      }),

    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['active'],
      borderColor: ['active'],
      borderStyle: ['active'],
    },
  },
  plugins: [
    require('tailwindcss-ripple')()
  ],
}
