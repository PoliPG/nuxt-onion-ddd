import { fileURLToPath } from 'url'
import {
  defineNuxtModule,
  createResolver,
  installModule,
  addComponentsDir
} from '@nuxt/kit'

const rPath = (p: string) => fileURLToPath(new URL(p, import.meta.url))

export default defineNuxtModule({
  meta: {
    name: '@storefront/ui',
    configKey: 'ui'
  },
  async setup () {
    // Standard components
    const componentsDir = rPath('./UI')
    addComponentsDir({ path: `${componentsDir}/atoms` })

    const resolver = createResolver(import.meta.url)
    await installModule(await resolver.resolvePath('@nuxtjs/tailwindcss'))
  }
})
