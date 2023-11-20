/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    extend: {
      colors: {
        'dark-color': '#FBEBB5',
        'light-pink': '#FAF4F4',
        'light-ash' : '#9F9F9F',
        'dark-Light' : '#FFF9E5',
        'over-lay': '#FAF4F4',
        'rating':  '#FFDA5B',
        'color-blue': '#816DFA',
        'color-brown': '#CDBA7B',
        'dark-gold': '#B88E2F'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

