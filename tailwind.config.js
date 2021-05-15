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
        blue: {
          DEFAULT: '#1379c8',
          700: '#1D4ED8',
          800: '#1E40AF'
        },
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

      animation: {
        "scale-in-ver-top": "scale-in-ver-top 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        'flip-vertical-bck': 'flip-vertical-bck 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955)   both',
        "rotate-vert-center": 'rotate-vert-center 3s cubic-bezier(0.455, 0.030, 0.515, 0.955)   both',
        'scale-up-center': 'scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both'
      },
      keyframes: {
        "flip-vertical-bck": {
          "0%": {
            transform: "translateZ(0) rotateY(0)"
          },
          to: {
            transform: "translateZ(-260px) rotateY(-180deg)"
          }
        },
        "rotate-vert-center": {
          "0%": {
            transform: "rotateY(0)"
          },
          to: {
            transform: "rotateY(360deg)"
          },
        },
          "scale-up-center": {
          "0%": {
            transform: "scale(.5)"
          },
          to: {
            transform: "scale(1)"
          }
        },
        "scale-in-ver-top": {
          "0%": {
            transform: "scaleY(0)",
            "transform-origin": "100% 0%",
            opacity: "1"
          },
          to: {
            transform: "scaleY(1)",
            "transform-origin": "100% 0%",
            opacity: "1"
          }
        }
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
