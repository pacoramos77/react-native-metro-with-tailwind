const plugin = require("tailwindcss/plugin");
const colors = require("./themes/colors.json");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addComponents({
        ".font-sans-100": { fontFamily: "Inter_100Thin" },
        ".font-sans-200": { fontFamily: "Inter_200ExtraLight" },
        ".font-sans-300": { fontFamily: "Inter_300Light" },
        ".font-sans-400": { fontFamily: "Inter_400Regular" },
        ".font-sans-500": { fontFamily: "Inter_500Medium" },
        ".font-sans-600": { fontFamily: "Inter_600SemiBold" },
        ".font-sans-700": { fontFamily: "Inter_700Bold" },
        ".font-sans-800": { fontFamily: "Inter_800ExtraBold" },
        ".font-sans-900": { fontFamily: "Inter_900Black" },
      });
    }),
  ],
};
