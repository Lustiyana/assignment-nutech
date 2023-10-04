/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#fff",
      "red-primary": "#f42619",
      "red-primary-hover": "#be2619",
      "grey-primary": "#c4c4c4",
      "minus-color": "#d7633c",
      "plus-color": "#65b397",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
