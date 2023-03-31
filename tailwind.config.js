const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    mode: "jit",
    purge: {
        content: [
            "./components/**/*.{vue,js}",
            "./layouts/**/*.vue",
            "./pages/**/*.vue",
            "./plugins/**/*.{js,ts}",
            "./nuxt.config.{js,ts}",
        ],
    },
    darkMode: false,
    theme: {
        screens: {
            "extra": { "max": "1800px" },
            "2xl": { "max": "1536px" },
            "xxl": { "max": "1440px" },
            "xl": { "max": "1280px" },
            "lg": { "max": "1024px" },
            "tablet": { "max": "860px" },
            "md": { "max": "768px" },
            "sm": { "max": "640px" },
            "xs": { "max": "480px" },
            "xxs": { "max": "420px" },
            "mob": { "max": "390px" },
        },
        fontFamily: {
            ptSans: ["PT Sans", "sans-serif"],
        },
        zIndex: {
            "-1": -1,
            "0": 0,
            "1": 1,
            "2": 2,
            "3": 3,
            "4": 4,
            "5": 5,
            "10": 10,
            "11": 11,
            "20": 20,
            "25": 25,
            "30": 30,
            "40": 40,
            "50": 50,
            "75": 75,
            "100": 100,
            "auto": "auto",
        },
        extend: {
            fontSize: {
                "55": "3.4375rem",
                "50": "3.125rem",
                "42": "2.625rem",
                "38": "2.375rem",
                "37": "2.3125rem",
                "36": "2.25rem",
                "xl": "30px",
                "28": "1.75rem",
                "26": "1.625rem",
                "25": "1.5625rem",
                "24": "1.5rem",
                "22": "1.375rem",
                "lg": "24px",
                "20": "20px",
                "18": "18px",
                "16": "16px",

            },
            lineHeight: {
                "1-1": "1.1",
                "1-2": "1.2",
                "1-3": "1.3",
                "1-5": "1.5",
                "1-6": "1.6",
                "1-8": "1.8",
            },
            colors: {
                "dark": {
                    "300" : "#232323",
                    "400": "#000",
                },
                "gray": {
                    "200": "#E5E6E7",
                    "300": "#727272",
                    "400": "#A6A8AB",
                    "500": "#6C6C6C",
                },
                "blue": {
                    "200": "#00B0E5",
                    "300": "#0C73FE",
                    "400": "#0E84CC",
                    "900": "#0B3E83",
                },
                "red": {
                    "600": "#BD1E2D",
                    "700": "#A50018",
                    "800": "#D81B5B",

                },
                "orange": {
                    "400": "#F05A29",
                },
                "green": {
                    "500": "#009344",
                },
                "brown": {
                    "400": "#F2EDE3",
                },
            },
            flex: {
                "1-1": "1",
                "100": "0 1 100%",
            },
            width: theme => ({
                auto: "auto",
                ...theme("spacing"),
                "1/2": "50%",
                "1/3": "33.333333%",
                "2/3": "66.666667%",
                "1/4": "25%",
                "2/4": "50%",
                "3/4": "75%",
                "1/5": "20%",
                "2/5": "40%",
                "3/5": "60%",
                "4/5": "80%",
                "1/6": "16.666667%",
                "1/7": "14.285714%",
                "2/6": "33.333333%",
                "3/6": "50%",
                "4/6": "66.666667%",
                "5/6": "83.333333%",
                "1/12": "8.333333%",
                "2/12": "16.666667%",
                "3/12": "25%",
                "4/12": "33.333333%",
                "5/12": "41.666667%",
                "6/12": "50%",
                "7/12": "58.333333%",
                "8/12": "66.666667%",
                "9/12": "75%",
                "10/12": "83.333333%",
                "11/12": "91.666667%",
                "full": "100%",
                "screen": "100vw",
                "46": "46%",
                "54": "54%",
            }),
            height: {
                "1px": "1px",
            },
            spacing: {
                "7": "1.75rem",
                "11": "2.75rem",
                "13": "3.25rem",
                "14": "3.5rem",
                "15": "3.75rem",
                "18": "4.5rem",
                "23": "5.75rem",
                "27": "6.725rem",
                "42": "10.5rem",
                "73": "18.875rem",
                "81": "20.625rem",
            },
            minWidth: (theme, { breakpoints }) => ({
                none: "none",
                xs: "20rem",
                sm: "24rem",
                md: "28rem",
                lg: "32rem",
                xl: "36rem",
                "2xl": "42rem",
                "3xl": "48rem",
                "4xl": "56rem",
                "5xl": "64rem",
                "6xl": "72rem",
                full: "100%",
                ...theme("spacing"),
                ...breakpoints(theme("screens")),
            }),
            borderRadius: {
                sm: "4px",
                lg: "0.6rem",
                xxl: "30px",
                extra: "40px",
            },
        },
    },
    corePlugins: {
        container: false,
    },
    variants: {
        extend: {
            borderWidth: ["last"],
        },
    },
    plugins: [
        require("@tailwindcss/aspect-ratio"),
        require('@tailwindcss/line-clamp'),
    ],
};
