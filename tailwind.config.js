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
            animation: {
                'fade-in': 'fadeIn 0.3s ease-out',
                'fade-out': 'fadeOut 0.3s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
                fadeOut: {
                    '0%': { opacity: 1 },
                    '100%': { opacity: 0 },
                },
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
