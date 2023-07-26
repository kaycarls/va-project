export default defineNuxtConfig({
  ssr: true,
  pages: true,
  runtimeConfig: {
    public: {
      NUXT_APP_BASE_URL: "/va-project/",
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
