module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'move-in-left': 'move-in-left 0.25s ease-out 1'
      },
      keyframes: {
        'move-in-left': {
          '0%': {transform: 'translate3d(-100%,0,0)'},
          '100%': {transform: 'translate3d(0, 0, 0)'}
        } 
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
