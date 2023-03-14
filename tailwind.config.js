const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    // colors: {
    //   // purple: {
    //   //   light: "#7D5EBF",
    //   //   DEFAULT: "#6C51A6",
    //   //   dark: "#580259",
    //   // },
    //   // orange: {
    //   //   light: "#F27405",
    //   //   DEFAULT: "#F25C05",
    //   // },
    // },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
