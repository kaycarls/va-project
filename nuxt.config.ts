/* eslint-disable prettier/prettier */
export default defineNuxtConfig({
  ssr: true,
  pages: true,
  runtimeConfig: {
    public: {
      baseURL: useRuntimeConfig().app.baseURL || "/",
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
