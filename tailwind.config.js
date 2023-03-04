const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    // colors: {
    //   blue: "#1fb6ff",
    // },
    extend: {
      colors: {
        mavi: {
          100: "#0000ff",
          200: "#0000e8",
          300: "#0000c6",
        },
      },
      spacing: {
        15: "3.5rem",
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "calc-h-full": (value) => ({
            height: `calc(100% - ${value})`,
          }),
          "calc-w-full": (value) => ({
            width: `calc(100% - ${value})`,
          }),
          "calc-max-h-screen": (value) => ({
            height: `calc(100vh - ${value})`,
          }),
          "calc-min-h-screen": (value) => ({
            minHeight: `calc(100vh - ${value})`,
          }),
        },
        { values: theme("spacing") }
      );
    }),
  ],
};
