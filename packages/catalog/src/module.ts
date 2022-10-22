import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineNuxtModule, addPlugin, addComponentsDir } from '@nuxt/kit'

const rPath = (p: string) => fileURLToPath(new URL(p, import.meta.url))

export default defineNuxtModule({
  meta: {
    name: '@storefront/catalog',
    configKey: 'catalog'
  },
  setup (_options, nuxt) {
    // Standard components
    const componentsDir = rPath('./UI')
    addComponentsDir({ path: `${componentsDir}/atoms` })

    const runtimeDir = rPath('./Infrastructure')
    nuxt.options.build.transpile.push(runtimeDir)

    // Plugins
    addPlugin(resolve(runtimeDir, 'plugins/plugin'))
  }
})
