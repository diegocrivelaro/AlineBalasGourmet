/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`./src/app/**/*.{tsx}`, `./src/components/**/*.{tsx}`],
  theme: {
    colors: {
      black: `rgb(0 0 0)`,
      white: `rgb(255 255 255)`,
      red: `rgb(242 58 58)`,
      "rosy-red-50": `rgb(255 83 139)`,
      "rosy-red-25": `rgb(255 103 139)`,
      "brow-50": `rgb(128 71 15)`,
      "brow-25": `hwb(3deg 46% 24%)`,
      "brow-5": `rgb(255 249 239)`,
      "pink-50": `rgb(235 86 173)`,
      "pink-25": `rgb(255 134 209)`,
      "pink-15": `rgb(255 134 209)`,
      "green-50": `rgba(0 230 118 / 0.45)`,
      "green-45": `rgba(0 230 118 / 0.75)`,
      "green-35": `rgb(0 230 118)`,
      "grey-15": `rgb(118 110 110)`,
    },
    extend: {},
  },
  plugins: [],
};
