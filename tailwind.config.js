/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        main: "#f3fcff",
        secondary: "#e4e6f4",
        primary: "#11766f",
      },
      fontFamily: {
        main: '"League Spartan", sans-serif',
      },
    },
  },
  plugins: [],
};
