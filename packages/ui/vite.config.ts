import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve, join } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@root': resolve(__dirname, './src'),
      '@theme': resolve(__dirname, './src/theme'),
      '@layer': resolve(__dirname, './src/layer')
    }
  },
  build: {
    // cssCodeSplit: true,
    outDir: 'lib',
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        server: resolve(__dirname, 'src/server.ts'),
        client: resolve(__dirname, 'src/client.ts')
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
