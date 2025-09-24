import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/app-crud-routes/',
  build: {
    outDir: 'dist'
  },
  plugins: [vue()],
  outputDir: 'app-crud-routes'
})
