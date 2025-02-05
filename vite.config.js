import legacy from '@vitejs/plugin-legacy';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  build: {
    minify: 'esbuild'
  },
  base: "./",
  plugins: [
    vue(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  }
})