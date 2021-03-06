export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "review-portal",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, user-scalable=no" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  //target: "static",

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["@/assets/scss/custom.scss"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: "~/plugins/toggle.js", ssr: false },
    { src: "~/plugins/filebase.js", mode: "client" }
  ], // only on client side],

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ["@nuxtjs/svg"],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "@nuxtjs/axios",
    "@nuxtjs/proxy",
    ["bootstrap-vue/nuxt"]
  ],

  axios: {
    proxy: true,
    baseURL: 'http://www.fssportal.co.uk/api/test_ls.php', // Used as fallback if no runtime config is provided
  },

  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
    icons: false
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
