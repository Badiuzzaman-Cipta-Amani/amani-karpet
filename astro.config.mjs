import partytown from "@astrojs/partytown"
import sitemap from "@astrojs/sitemap"
import vue from "@astrojs/vue"
import tailwindcss from "@tailwindcss/vite"
import robotsTxt from "astro-robots-txt"
// @ts-check
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  site: "https://amanilaundry.net",
  integrations: [vue(), sitemap(), robotsTxt(), partytown()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  },
})
