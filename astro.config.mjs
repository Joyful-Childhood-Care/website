import { defineConfig } from 'astro/config';
import alpinejs from "@astrojs/alpinejs";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
    alpinejs(),
    tailwind(),
    icon({
      include: { solar: ["*"] },
    })
  ]
});