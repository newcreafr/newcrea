/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
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
                paletteColor4: "#f3f1fa",
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
