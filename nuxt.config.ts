// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ["@nuxt/eslint", "@nuxthub/core"],

  devtools: { enabled: true },
  compatibilityDate: "2025-12-19",

  nitro: {
    preset: "cloudflare_module",
    cloudflare: {
      wrangler: {
        name: "nuxthub-boilerplate",
      },
    },
  },

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
