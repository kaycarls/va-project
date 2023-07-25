export default defineNuxtConfig({
  ssr: true,
  pages: true,
  router: {
    base: "/va-project/",
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
