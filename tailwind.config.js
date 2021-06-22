module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', 
  theme: {
    extend: {
      fontFamily: {
        'Quicksand': ['Quicksand', 'sans-serif'],
      },
      colors:{
        navbar: {
          fondo: '#040B14',
        },
        main:{
          blue: '#3AB5EF',
          grey: '#C4C4C4'
        }
      },
      width: {
        'navbar': '334px',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
