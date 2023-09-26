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
    outDir: 'markdown',
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        markdown: resolve(__dirname, 'src/markdown.tsx')
      }
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'katex',
        'react-markdown',
        'rehype-katex',
        'remark-gfm',
        'unist-util-visit',
        '@okmtyuta/amatelas'
      ],
      output: {
        globals: {}
      }
    }
  },
  plugins: [react()]
})
