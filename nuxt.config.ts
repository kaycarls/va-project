export default defineNuxtConfig({
  ssr: true,
  pages: true,
  router: {
    // eslint-disable-next-line prettier/prettier
    base: '/va-project/',
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
