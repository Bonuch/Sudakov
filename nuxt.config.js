require("dotenv").config();

export default {

    /* ----todo закоментировать этот блок при запуске на локальной машине ----*/
    // router: {
    //     base: '/instruction/'
    // },
    static: {
        prefix: true
    },
    /* --------*/


    server: {
        port: 8083,
        host: "0.0.0.0"
    },
    head: {
        title: process.env.META_TITLE || "Bodygraph",
        htmlAttrs: {
            lang: "ru",
        },
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { name: "msapplication-TileColor", content: "#ffffff" },
            {
                hid: "msapplication-TileImage",
                name: "msapplication-TileImage",
                content: "/ms-icon-144x144.png",
            },
            { name: "theme-color", content: "#ffffff" },
            {
                hid: "keywords",
                name: "keywords",
                content: process.env.META_KEYWORDS,
            },
            { hid: "description", name: "description", content: process.env.META_DESCRIPTION },
            { hid: "og:title", property: "og:title", content: process.env.META_TITLE },
            { hid: "og:type", property: "og:type", content: "website" },
            { hid: "og:description", property: "og:description", content: process.env.META_DESCRIPTION },
            { hid: "og:url", property: "og:url", content: process.env.BASE_URL },
            { hid: "og:image", property: "og:image", content: process.env.OG_IMAGE },
            { hid: "og:locale", property: "og:locale", content: "ru_RU" },
            { hid: "twitter:card", name: "twitter:card", content: "summary" },
        ],
        link: [
            { rel: "apple-touch-icon", sizes: "57x57", href: "/apple-icon-57x57.png" },
            { rel: "apple-touch-icon", sizes: "60x60", href: "/apple-icon-60x60.png" },
            { rel: "apple-touch-icon", sizes: "72x72", href: "/apple-icon-72x72.png" },
            { rel: "apple-touch-icon", sizes: "76x76", href: "/apple-icon-76x76.png" },
            { rel: "apple-touch-icon", sizes: "114x114", href: "/apple-icon-114x114.png" },
            { rel: "apple-touch-icon", sizes: "120x120", href: "/apple-icon-120x120.png" },
            { rel: "apple-touch-icon", sizes: "144x144", href: "/apple-icon-144x144.png" },
            { rel: "apple-touch-icon", sizes: "152x152", href: "/apple-icon-152x152.png" },
            { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-icon-180x180.png" },
            { rel: "apple-touch-icon", sizes: "192x192", href: "/apple-icon-192x192.png" },
            { rel: "icon", type: "image/png", sizes: "192x192", href: "/android-icon-192x192.png" },
            { rel: "icon", type: "image/png", sizes: "36x36", href: "/android-icon-36x36.png" },
            { rel: "icon", type: "image/png", sizes: "96x96", href: "/android-icon-96x96.png" },
            { rel: "manifest", href: "/manifest.json" },
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        ],
    },

    css: [
        "~/assets/fonts/Helvetica-Neue/helvetica-neue.css",
        "~/assets/fonts/ALS-Sector/als-sector.css",
        "~/assets/fonts/pt-sans/pt-sans.css",
        "~/assets/scss/tailwind.scss",
    ],
    plugins: [
        { src: "@plugins/axios.js" },
        { src: "~plugins/vue-click-outside.js", ssr: false },
        { src: "~plugins/vee-validate.js", ssr: false },
        { src: "~plugins/v-mask.js", ssr: false },
        { src: "~plugins/vcalendar.js", ssr: false },
        { src: "~plugins/vue-select.js", ssr: false },
    ],

    components: false,
    serverMiddleware: [
        "~/middleware/logger",
    ],

    buildModules: [
        "@nuxtjs/eslint-module",
        "@nuxtjs/tailwindcss",
        "@aceforth/nuxt-optimized-images",
    ],

    modules: [
        "@nuxtjs/axios",
        "@nuxtjs/dotenv",
        "@nuxtjs/dayjs",
        "cookie-universal-nuxt",
    ],

    dayjs: {
        locales: ["ru"],
        defaultLocale: "ru",
        plugins: [],
    },

    optimizedImages: {
        optimizeImages: true,
    },

    /*
    ** Customize the progress-bar color
    */
    loading: { color: "#30BE19" },

    axios: {
        baseURL: process.env.API_BASE_URL,
        withCredentials: true,
    },

    tailwindcss: {
        cssPath: "~/assets/scss/tailwind.scss",
        configPath: "tailwind.config.js",
        exposeConfig: false,
        viewer: false,
        config: {},
    },

    build: {
        transpile: [
            "vee-validate/dist/rules"
        ],
        postcss: {
            plugins: {
                "autoprefixer": true,
            },
        },
        /*
        ** You can extend webpack config here
        */
        extend(config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: "pre",
                    test: /\.(js|vue)$/,
                    loader: "eslint-loader",
                    exclude: /(node_modules)/,
                });
            }
        },
        babel: {
            presets: [
                [
                    "@babel/preset-env",
                    {
                        "loose": true,
                        "shippedProposals": true,
                    },
                ],
            ],
        },
    },

    env: {
        BASE_URL: process.env.BASE_URL,
        API_BASE_URL: process.env.API_BASE_URL,
        OG_IMAGE: process.env.OG_IMAGE,
        META_TITLE: process.env.META_TITLE,
        META_DESCRIPTION: process.env.META_DESCRIPTION,
        META_KEYWORDS: process.env.META_KEYWORDS,
    },
};
