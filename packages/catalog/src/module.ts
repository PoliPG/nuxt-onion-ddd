import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineNuxtModule, addPlugin, addComponentsDir } from '@nuxt/kit'

const rPath = (p: string) => fileURLToPath(new URL(p, import.meta.url))

export default defineNuxtModule({
  meta: {
    name: '@storefront/catalog',
    configKey: 'catalog'
  },
  setup (options, nuxt) {
    // Standard components
    const componentsDir = rPath('./UI')
    addComponentsDir({ path: `${componentsDir}/atoms` })

    const infraDir = rPath('./Infrastructure')
    nuxt.options.build.transpile.push(infraDir)

    // Plugins
    addPlugin(resolve(infraDir, 'plugins/plugin'))
  }
})
