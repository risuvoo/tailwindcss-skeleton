/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html', './assets/js/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif']
      },
    },
  },
  plugins: [],
}