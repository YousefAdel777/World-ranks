/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./*.{hml,js,jsx}", "./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      "md": "768px",
      "lg": "992px",
      "xl": "1250px"
    },
    colors: {
      "transparent": "#00000000",
      "white": "#fff",
      "blue-300": "rgb(78 128 238)",
      "gray-200": "rgb(208, 209, 209)",
      "slate-300": "rgb(107 113 127)",
      "slate-400": "rgb(40 43 48)",
      "slate-600": "#1c1d1f",
      "slate-700": "rgb(28 29 31)",
    },
    fontFamily: {
      "Vietnam": ["Be Vietnam Pro", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}
