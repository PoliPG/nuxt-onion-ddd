import { resolve } from 'path'
import { fileURLToPath } from 'url'
import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  installModule,
  addComponentsDir
} from '@nuxt/kit'

export interface ModuleOptions {
  addPlugin: boolean
}

const rPath = (p: string) => fileURLToPath(new URL(p, import.meta.url))

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@storefront/ui',
    configKey: 'ui'
  },
  defaults: {
    addPlugin: true
  },
  async setup(options, nuxt) {
    if (options.addPlugin) {
      // Standard components
      addComponentsDir({ path: rPath('./components').toString() })

      const runtimeDir = rPath('./runtime')
      nuxt.options.build.transpile.push(runtimeDir)
      addPlugin(resolve(runtimeDir, 'plugin'))

      const resolver = createResolver(import.meta.url)
      await installModule(await resolver.resolvePath('@nuxtjs/tailwindcss'))
    }
  }
})
