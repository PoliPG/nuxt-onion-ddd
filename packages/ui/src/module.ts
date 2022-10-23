import { fileURLToPath } from 'url'
import { defineNuxtModule, createResolver, installModule, addComponentsDir } from '@nuxt/kit'

export interface ModuleOptions {
  content: String[]
}

const rPath = (p: string) => fileURLToPath(new URL(p, import.meta.url))

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@storefront/ui',
    configKey: 'ui'
  },
  async setup(options: ModuleOptions) {
    // Import components
    const componentsDir = rPath('./UI')
    addComponentsDir({ path: `${componentsDir}/atoms` })
    addComponentsDir({ path: `${componentsDir}/organisms` })

    // Tailwindcss config
    const resolver = createResolver(import.meta.url)
    await installModule(await resolver.resolvePath('@nuxtjs/tailwindcss'), {
      configPath: rPath('./tailwind.config.cjs'),
      config: {
        content: [...options.content, `${componentsDir}/**/*.{js,vue,ts}`]
      }
    })
  }
})
