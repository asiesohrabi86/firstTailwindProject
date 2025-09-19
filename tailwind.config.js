/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",
    "./node_modules/tw-elements/js/**/*.js"
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },

      screens: {
        'xs': '440px',
      },

      fontFamily: {
        'vazir': ["vazir"],
      },

      colors: {
        "filimo-yellow": "#fdc13b",
        "filimo-green": "#1cb561",
      },

      backgroundImage: {
        'first-section-header-bg': "url('/src/images/payment_landing.png')",
        'first-article-img': "url('/src/images/1.jpg')",
        'second-section-img': "url('/src/images/2.jpg')",
        'cinema': "url('/src/images/bg-cinema.png')",
      },
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
}

