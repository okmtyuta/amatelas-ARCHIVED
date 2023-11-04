import react from '@vitejs/plugin-react'
import { InlineConfig, UserConfig, defineConfig } from 'vite'

interface VitestConfigExport extends UserConfig {
  test: InlineConfig
}

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts']
  }
} as VitestConfigExport)
