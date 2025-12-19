// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ["@nuxt/eslint", "@nuxthub/core"],

  devtools: { enabled: true },
  compatibilityDate: "2025-12-19",

  hub: {},

  eslint: {
    config: {
      stylistic: {
        arrowParens: true,
        commaDangle: "always-multiline",
        indent: 2,
        quotes: "double",
        semi: true,
      },
    },
  },

});
