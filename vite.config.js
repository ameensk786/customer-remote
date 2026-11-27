import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'customer_remote',
      filename: 'remoteEntry.js',
      exposes: {
        './CustomerCard': './src/CustomerCard.jsx',

      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 5001,
    strictPort: true,
  },

  // Ikkada add cheyyi
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
})