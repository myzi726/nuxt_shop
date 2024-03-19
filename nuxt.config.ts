// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  build: {
    transpile: ['vuetify'],
  },

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },

  // css: ["assets/css/setting.css",
  // 'vuetify/lib/styles/main.sass',
  // '@mdi/font/css/materialdesignicons.min.css' ]
  // ,
})