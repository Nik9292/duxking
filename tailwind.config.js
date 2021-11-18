const defaultTheme = require('tailwindcss/defaultTheme');
const {colors} = defaultTheme

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxWidth: {
      '10': '10rem',
    },
    container: {
      center: true,
      padding: '1.25rem'
    },
    extend: {
      width: {
        ...defaultTheme.width,
        '48': '48%',
      },
      colors: {
        blue: {
          ...colors.blue,
          800: '#1a2454',
          900: '#000228',
        },
        gray: {
          ...colors.gray,
          200: '#8b949e',
          400: '#30363d',
          700: '#0d1117',
          900: '#0e0b14',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
