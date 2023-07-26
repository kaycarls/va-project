export default defineNuxtConfig({
  ssr: false,
  pages: true,
  runtimeConfig: {
    public: {
      baseURL: "/va-project/",
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
