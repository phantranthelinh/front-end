module.exports = {
  content: ["**/*.html","./src/**/*.{html,css,js}"],
  theme: {
    extend: {
     colors:{
      "sun": "#f3a952",
      "black-60%": "rgba(0,0,0,60%)",
      "white-50%": "rgba(255,255,255,.5)",
     },
      fontFamily: {
        "Roboto": ["Roboto","san-serif"],
      },
      padding:{
        "18px" : "18px",
      },
      spacing:{
        '22px':'22px',
      }
    },
  },
  plugins: [],
}
