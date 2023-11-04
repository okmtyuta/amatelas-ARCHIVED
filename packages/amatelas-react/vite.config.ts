import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import pkg from './package.json'

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
    outDir: 'dist',
    lib: {
      entry: {
        server: resolve(__dirname, 'src/components/server'),
        controlled: resolve(__dirname, 'src/components/controlled/')
      }
    },
    rollupOptions: {
      external: Object.keys(pkg.peerDependencies)
      // output: {
      //   globals: {
      //     react: 'React',
      //     "react-dom": "ReactDOM",
      //   }
      // }
    }
  },
  plugins: [react()]
})
