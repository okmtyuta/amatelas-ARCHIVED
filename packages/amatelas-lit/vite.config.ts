import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@src': resolve(__dirname, './src'),
      '@theme': resolve(__dirname, './src/theme'),
      '@layer': resolve(__dirname, './src/layer')
    }
  }
})
