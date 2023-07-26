export default defineNuxtConfig({
  ssr: true,
  pages: true,
  runtimeConfig: {
    public: {},
    static: {},
    app: {
      baseURL: "/va-project/",
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
