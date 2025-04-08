/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mins: "300px",
        xs: "550px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        paletteColor1: "#091021",
        paletteColor2: "#6338e4",
        paletteColor3: "#FFFFFF",
        borderColor: "#cdcdcd",
        smTextWhtColor: "#475569",
        smTextDrkColor: "#94a3b8",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        "::selection": {
          backgroundColor: "#6338e4",
          color: "#ffffff",
        },
      });
    },
  ],
};
