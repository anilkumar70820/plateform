/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "custom-2xl": "25px",
      },
      colors: {
        shark: "#181a20",
        Linen: "#fdf9f4",
      },
    },
  },
  plugins: [],
};
