const pkg = require('./package')
require('dotenv').config()
export default {
  mode:   'universal',
  dev:    (process.env.NODE_ENV !== 'production'),
  router: {
    base: process.env.FE_BASE || '/ask/',
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  env: {
    // repo:           pkg.repository.url,
    nuxtPort:       process.env.NUXT_PORT || 3000,
    appName:        process.env.APP_NAME,
    cityName:       process.env.CITY_NAME,
    logoHeading:    process.env.LOGO_HEADING,
    logoSubHeading: process.env.LOGO_SUB_HEADING,
    cityWebsiteUrl: process.env.CITY_WEBSITE_URL,
    frontendBase:   process.env.FE_BASE || '/ask/',
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/universal-data' },
    { src: '~/plugins/design-system' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',

    // Doc: https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
  ],
  
  css: [
    '@/assets/scss/style.scss',
  ],

  styleResources: {
    scss: [
      './assets/scss/cobDS-tokens.scss',
    ]
  },

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
