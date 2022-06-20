const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {},
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addComponents({
        ".font-sans-100": {
          fontFamily: "Inter_100Thin",
        },

        ".font-sans-100": {
          fontFamily: "Inter_100Thin",
        },

        ".font-sans-200": {
          fontFamily: "Inter_200ExtraLight",
        },

        ".font-sans-300": {
          fontFamily: "Inter_300Light",
        },

        ".font-sans-400": {
          fontFamily: "Inter_400Regular",
        },

        ".font-sans-500": {
          fontFamily: "Inter_500Medium",
        },

        ".font-sans-600": {
          fontFamily: "Inter_600SemiBold",
        },

        ".font-sans-700": {
          fontFamily: "Inter_700Bold",
        },

        ".font-sans-800": {
          fontFamily: "Inter_800ExtraBold",
        },

        ".font-sans-900": {
          fontFamily: "Inter_900Black",
        },
      });
    }),
  ],
};

/*
font-thin	font-weight: 100;
font-extralight	font-weight: 200;
font-light	font-weight: 300;
font-normal	font-weight: 400;
font-medium	font-weight: 500;
font-semibold	font-weight: 600;
font-bold	font-weight: 700;
font-extrabold	font-weight: 800;
font-black	font-weight: 900;
*/
