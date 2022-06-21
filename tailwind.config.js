module.exports = {
  content: ["./**.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#eff7e1',
        'secondary': '#5d5b6a',
        'textPrimary': '#D2E603',
        'komponen': '#EFF48E'
      },
      backgroundImage: {
        'elemen': "url('/img/elemen.png')",
        'bgsection': "url('../img/bgsection.jpg')",
      },
      fontFamily: {
        'comfortaa': ['Comfortaa', 'cursive'],
        'satisfy': ['Satisfy', 'cursive'],
        'concert': ['Concert One', 'cursive']
      }
    },
  },
  plugins: [],
}