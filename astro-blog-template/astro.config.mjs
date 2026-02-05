// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import preact from "@astrojs/preact";

import mdx from "@astrojs/mdx";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [preact(), mdx()],
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    imageService: true,
  }),
});