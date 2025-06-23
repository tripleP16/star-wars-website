import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    css: true, // This handles CSS imports
    setupFiles: ['./src/test/setup.js'],
    server: {
      deps: {
        inline: ['vuetify'] // Ensure Vuetify is processed by Vite
      }
    }
  },
})