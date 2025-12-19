// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ["@nuxt/eslint", "@nuxthub/core"],

  $production: {
    hub: {
      blob: {
        driver: "cloudflare-r2",
        binding: "BLOB",
        bucketName: "nuxthub-boilerplate",
      },
    },
  },

  devtools: { enabled: true },
  compatibilityDate: "2025-12-19",

  nitro: {
    preset: "cloudflare_module",
    cloudflare: {
      nodeCompat: true,
      wrangler: {
        name: "nuxthub-boilerplate",
        observability: {
          enabled: true,
        },
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
    blob: {
      driver: "fs",
      dir: ".data/blob",
    },
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
