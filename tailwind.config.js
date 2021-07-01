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
      backgroundImage: theme => ({
        'profile-picture': "url('https://cdn.discordapp.com/attachments/767855867819065364/859997625755369522/ExThq95UUAARyjt.jpg')",
        'home-background': "url('https://cdn.discordapp.com/attachments/767855867819065364/859999084763807744/Background.png')",
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
