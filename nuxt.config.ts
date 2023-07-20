// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/supabase", 
    "@unocss/nuxt", 
    "@pinia/nuxt"
  ],
  css: [
    '~/assets/css/main.css',
    '@unocss/reset/tailwind.css',    
  ],
});
