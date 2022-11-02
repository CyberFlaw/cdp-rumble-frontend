/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#282c33",
      white: "#abb2bf",
      red: "#e06b74",
      green: "#98c379",
      yellow: "#e5c07a",
      blue: "#62aeef",
      teal: "#55b6c2",
      purple: "#c678dd",
      plane: "#ffffff",
    },

    extend: {
      height: {
        90: "90%",
      },
      width: {
        "70%": "70%",
        "5%": "5%",
        "20%": "20%",
        "50%": "52%",
      },
      minHeight: {
        14: "3.5rem",
      },
      minWidth: {
        14: "3.5rem",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
