import { defineNuxtConfig } from 'nuxt/config'
import storefrontCatalogModule from '..'

export default defineNuxtConfig({
  modules: [storefrontCatalogModule],
  myModule: {
    addPlugin: true
  }
})
