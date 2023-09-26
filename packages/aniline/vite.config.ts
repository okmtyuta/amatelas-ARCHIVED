import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@root': resolve(__dirname, './src'),
      '@theme': resolve(__dirname, './src/theme')
    }
  },
  build: {
    // cssCodeSplit: true,
    outDir: 'aniline',
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        components: resolve(__dirname, 'src/components')
      }
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          ReactDOM: 'react-dom'
        }
      }
    }
  },
  plugins: [react()]
})
