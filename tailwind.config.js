module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins','sans-serif']
      },
      colors: {
        rose:{
          50:'#F8F4F2',
          100:'#DECDC3',
        },
        blue:{
          100:'#717C89',
          200:'#223144',
        },
        marron:{
          200:'#96620D'
        }
      },
      boxShadow: {
        '3xl': '0px 3px 8px rgba(0, 0, 0, 0.24)'
      }
    },
  },
  plugins: [],
}
