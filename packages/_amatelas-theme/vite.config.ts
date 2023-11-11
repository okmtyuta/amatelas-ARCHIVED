import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@root': resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'dist',
    lib: {
      entry: {
        prefixed: resolve(__dirname, 'src/prefixed/index.ts'),
        color: resolve(__dirname, 'src/theme/color/color.ts')
      }
    },
    rollupOptions: {}
  },
  plugins: [react()]
})
