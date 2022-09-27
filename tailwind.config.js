/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      maxWidth:{
        wrapperWidth: "1320px"
      },
      boxShadow:{
        headerShadow : "0px 2px 4px rgb(0 0 0 / 6%);",
        cardShadow : "0px 0px 7px 2px rgba(0, 0, 0, 0.0294384)"
      },
      borderRadius:{
        "cardRadius": "5px"
      },
      colors:{
        headerDrak: "#2b3844",
        bodyDark: "#202c36"
      },
      backgroundPosition:{
        centerInp: "top 19px left 32px"
      }
    },
  },
  plugins: [],
}