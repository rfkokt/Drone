const plugin = require("tailwindcss/plugin")
const url = require("url");
const ultraLight = "./assets/images/ultra_light1.png"

module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './component/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif']
            },
            colors: {
                "blue": {
                    "50": "#108107100",
                    "100": "#f1f3fe",
                    "200": "#c2cbf9",
                    "300": "#8fa0f5",
                    "400": "#6078f1",
                    "500": "#2d4dec",
                    "600": "#1332ce",
                    "700": "#0e259a",
                    "800": "#091862",
                    "900": "#040b2f"
                },
                "abu": {
                    "50": "#111111111",
                    "100": "#f7f7f7",
                    "200": "#c2c2c2",
                    "300": "#8c8c8c",
                    "400": "#575757",
                    "500": "#212121",
                    "600": "#1f1f1f",
                    "700": "#1f1f1f",
                    "800": "#1c1c1c",
                    "900": "#1a1a1a"
                },
                "blackContent": "#222222"
            },
            backgroundImage: {
                "ultra-light": `url(/ultra_light1.png)`,
                "best-resolution" :`url(/best_resolution1.png)`
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        plugin(function ({
                             addUtilities
                         }) {
            const utilities = {
                ".bg-hero": {
                    "background-image": "url(/hero.png)",
                    "background-size": "cover",
                    // "width" : "100%"
                }
            }
            addUtilities(utilities);
        })
    ],
}