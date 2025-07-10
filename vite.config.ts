import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/herehere/',
  build: {
    // Optimize build size
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          firebase: ['firebase/app', 'firebase/auth', 'firebase/firestore'],
          ui: ['lucide-react'],
        },
      },
    },
    // Enable source maps for debugging
    sourcemap: true,
    // Optimize chunk size warnings
    chunkSizeWarningLimit: 1000,
  },
  // Optimize development server
  server: {
    port: 5173,
    host: true,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react'],
  },
})
