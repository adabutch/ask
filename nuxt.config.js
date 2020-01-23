require('dotenv').config();

module.exports = {
  mode: 'universal',
  
  server: {
    port: 8000,
  },

  env: {
    oathSandboxClientId:   process.env.OAUTH_SANDBOX_CLIENT_ID,
  },

  // auth: {
  //   strategies: {
  //     google: {
  //       scope: [
  //           "openid",
  //           "profile",
  //           "email",
  //           "https://www.googleapis.com/auth/gmail.metadata"
  //       ],
  //       client_id:      process.env.OAUTH_SANDBOX_CLIENT_ID,
  //       response_type:  "code",
  //       cookiepolicy: 'single_host_origin',
  //       access_token_endpoint: "http://localhost:8000/auth/google/"
  //     }
  //   },

  //   redirect: {
  //     login: '/?login',
  //     logout: '/',
  //     user: '/profile',
  //     callback:'/'
  //   }
  // },
  
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'google-signin-scope', content: 'profile email' },
      { name: 'google-signin-client_id', content: process.env.OAUTH_SANDBOX_CLIENT_ID },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { hid: 'google', src: 'https://apis.google.com/js/platform.js', async: true, defer: true }
    ]
  },
  
  loading: { color: '#fff' },
  
  css: ['~assets/scss/style.scss'],

  styleResources: {
    scss: [
      './assets/scss/*.scss'
    ]
  },
  
  plugins: [
    { src:          '~/plugins/design-system' }
  ],
  
  buildModules: [],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources'
  ],
  serverMiddleware: [
    '~/api/index.js'
  ],

  /* https://axios.nuxtjs.org/options */
  axios: {
    baseURL: 'http://localhost:3000/api/',
  },
  
  build: {
    extend (config, ctx) {
    }
  }
}
