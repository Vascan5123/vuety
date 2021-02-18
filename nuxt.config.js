import colors from 'vuetify/es5/util/colors'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    titleTemplate: '%s - vuety',
    title: 'vuety',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Vuety template' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  router: {
    mode: 'history'
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/static/fonts/RooneySans/stylesheet.css',
    '~/static/fonts/Raleway/stylesheet.css',
    '~/static/main.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/anime.js',
    /* '~/plugins/kute.js' */
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/robots'
  ],
  robots: {
    UserAgent: '*',
    Disallow: '/user',
  },


  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        light: {
          primary: '#8A5CC0',
          secondary: '#FF648A',
          purple_light: '#512DA8',
          background: "#fafafa"
        },
        dark: {
          primary: "#444444",
          secondary: "#6F6F6F",
          third: "#8A5CC0",
          price_card: "#363636",
          purple_dark: '#CDCDCD',
          background: "#1e1e1e"
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {

  }
}
