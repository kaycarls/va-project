export default defineNuxtConfig({
  app: {
    head: {
      title: "NeoAI",
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "https://kaycarls.github.io/va-project/_nuxt/logo.3a11e46a.png",
        },
      ],
    },
  },
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
