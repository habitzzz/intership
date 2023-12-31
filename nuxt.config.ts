// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", '@unocss/nuxt', '@nuxtjs/supabase'],
  css: [
    '~/assets/css/main.css',
    '@unocss/reset/tailwind.css',    
  ],
})