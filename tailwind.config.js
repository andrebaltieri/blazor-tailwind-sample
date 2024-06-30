/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./**/*.{html,js,razor}"
    ],
    theme: {
        colors: {
            "primary": "#8625D2",
            "white": "#FFFFFF"
        },
        fontFamily: {
            sans: ["Nunito"],
            serif: ["Montserrat", "Arial"],
            mono: ["Source Code Pro", "monospace"],
        },
        extend: {},
    },
    plugins: [],
}

