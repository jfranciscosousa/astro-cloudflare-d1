import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import preact from "@astrojs/preact";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare({
    mode: "directory",
    platformProxy: {
      enabled: true
    }
  }),
  experimental: {
    actions: true
  },
  integrations: [preact(), tailwind()]
});