export default defineNuxtConfig({
  ssr: true,
  pages: true,
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL,
    },
    static: {},
    app: {
      baseURL: process.env.NUXT_APP_BASE_URL,
    },
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
