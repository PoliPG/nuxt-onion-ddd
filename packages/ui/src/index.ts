import { fileURLToPath } from "url";
import { addComponentsDir, defineNuxtModule, createResolver } from "@nuxt/kit";

const rPath = (p: string) =>
  fileURLToPath(new URL(p, import.meta.url).toString());

export default defineNuxtModule({
  meta: {
    name: "@storefront/ui",
    configKey: "storefront/ui",
  },
  async setup() {
    // Standard components
    addComponentsDir({ path: rPath("./components") });

    const resolver = createResolver(import.meta.url);
    await installModule(await resolver.resolvePath("@nuxtjs/tailwindcss"));
  },
});
