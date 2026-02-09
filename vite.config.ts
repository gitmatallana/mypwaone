import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt'],
      workbox:{
        navigateFallback:'/index.thml',
        globPatterns: ['**/*.{ts,css,html,ico,png,svg,jpg}']
      },
      manifest: {
        name: 'Mi App React PWA',
        short_name: 'ReactPWA',
        description: 'PWA hecha con React y Vite',
        theme_color: '#0d6efd',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        screenshots: [
          
          {
            src: 'screenshots/logo512.png',
            sizes: '512x512',
            type: 'image/png',
            form_factor:'narrow',
          },
          {
            src: 'screenshots/logo782.png',
            sizes: '782x465',
            type: 'image/png',
            form_factor:'wide',

          },
        ],
        icons: [          
          {
            src: 'icons/logo216.png',
            sizes: '216x216',
            type: 'image/png',          
            purpose: 'any',

          },
        ],
      },
      devOptions: {
        enabled: true, // 👈 PWA activa en desarrollo
      },
    }),
  ],

  server: {
    port: 5173,
    open: true,
  },

  build: {
    outDir: 'dist',
    sourcemap: false,
  },

  resolve: {
    alias: {
      '@': '/src',
    },
  },

  base: '/', // 👈 perfecto para Netlify
})
/*import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
*/