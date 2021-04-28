module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
    },
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
      backgroundImage: theme => ({
        'login': "url('/assets/images/background.jpg')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
