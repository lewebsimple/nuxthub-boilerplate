// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ["@nuxt/eslint", "@nuxthub/core"],

  // $production: {
  //   hub: {
  //     blob: {
  //       driver: "cloudflare-r2",
  //       binding: "BLOB",
  //       bucketName: "nuxthub-boilerplate",
  //     },
  //   },
  // },

  devtools: { enabled: true },
  compatibilityDate: "2025-12-19",

  nitro: {
    preset: "cloudflare_module",
    cloudflare: {
      wrangler: {
        name: "nuxthub-boilerplate",
        r2_buckets: [
          {
            binding: "BLOB",
            bucket_name: "nuxthub-boilerplate",
          },
        ],
      },
    },
  },

  hub: {
    blob: true,
  },

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
