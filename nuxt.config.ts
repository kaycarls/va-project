/* eslint-disable prettier/prettier */
export default defineNuxtConfig({
  ssr: true,
  pages: true,
  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_APP_BASE_URL || "/",
    },
  },
  experimental: {
    payloadExtraction: false,
  },
  modules: ["@invictus.codes/nuxt-vuetify"],
  vuetify: {
    moduleOptions: {
      treeshaking: true,
      useIconCDN: true,
      styles: true,
      autoImport: true,
      useVuetifyLabs: true,
    },
  },
});
