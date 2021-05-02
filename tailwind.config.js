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

      // ANIMATIONS
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out'
      }

    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['active'],
      borderColor: ['active'],
      borderStyle: ['active'],
      animation: ['hover', 'focus', 'active'],
    },
  },
  plugins: [
    require('tailwindcss-ripple')()
  ],
}
