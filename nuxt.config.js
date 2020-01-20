
module.exports = {
  mode: 'universal',
  
  server: {
    port: 8000,
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          logout: false,
          login: { 
            url:            '/user/login',
            method:         'post',
            propertyName:   'token'
          },
          user: {
            url:            '/user/user',
            method:         'get',
            propertyName:   'data'},
        },
        tokenRequired:  true,
        tokenType:      'Bearer'
      },
      google: {
        client_id: 'your gcloud oauth app client id'
      },
    },

    redirect: {
      login: '/?login=1',
      logout: '/',
      user: '/profile',
      callback:'/'
    }
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
