module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'Quicksand': ['Quicksand', 'sans-serif'],
      },
      colors: {
        navbar: {
          fondo: '#040B14',
        },
        main: {
          blue: '#3AB5EF',
          lightblue: '#4677ff',
          purple: '#B77CF5',
          lightpurple: '#9534FB',
          grey: '#C4C4C4'
        }
      },
      backgroundImage: theme => ({
        'profile-picture': "url('/images/Profile menu.png')",
        'home-background': "url('/images/Background.png')",
        'error': "url('/images/bgerror.jpg')",
      }),
      width: {
        'navbar': '368px',
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}