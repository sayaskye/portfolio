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
          lightblue: '#4677ff',
          grey: '#C4C4C4'
        }
      },
      backgroundImage: theme => ({
        'profile-picture': "url('https://64.media.tumblr.com/7ee9edf89132ea81ae45284dc493f285/f86179c4b2109386-74/s2048x3072/ed22ddb8302b0cdfe9301368caa411103751c1ca.png')",
        'home-background': "url('https://pbs.twimg.com/media/E8eZsJkXoAImOGb?format=jpg&name=large')",
      }),
      width: {
        'navbar': '368px',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
