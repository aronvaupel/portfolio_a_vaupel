module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    backgroundSize: {
      "4x": "400%",
    },
    fontFamily: {
      body: ["Roboto"],
      sans: ["Inconsolata"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
