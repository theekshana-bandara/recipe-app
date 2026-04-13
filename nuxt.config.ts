// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  // ADD THIS: Global SEO defaults
  app: {
    head: {
      title: "Nuxtcipes — Discover Delicious Recipes",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Discover and cook delicious recipes with Nuxtcipes. Browse hundreds of recipes with easy-to-follow instructions.",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  imports: {
    dirs: ["app/composables/**"],
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/icon",
    "@nuxt/image",
  ],
  googleFonts: {
    families: {
      Montserrat: true,
    },
  },

  image: {
    domains: ["https://cdn.dummyjson.com"],
  },

  routeRules: {
    "/": { ssr: true },
    "/about": { ssr: false },
    "/recipes/**": { swr: 3600 },
  },
});
