/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "linear-gradient(to right bottom, rgba(15,23,42, 0.55), rgba(23,51,79, 0.55)), url('/src/assets/images/heroSection.jpg')",
        noisyBG:
          "radial-gradient(rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.99)), url(/src/assets/images/noise.svg)",
      },
      colors: {
        primaryColor: "rgb(15,23,42)",
        darkColor: "rgba(15,23,42, 0.95)",
        transparentColor: "rgba(15,23,42, 0.55)",
        light: "rgb(226, 232, 240)",
        grey: "rgb(148, 163, 184)",
        lightGold: "rgb(255, 209, 153)",
        gold: "rgb(251,157,38)",
        darkGold: "rgb(251, 107, 0)",
      },
      fontFamily: {
        bebas: ["Bebas Neue", "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
