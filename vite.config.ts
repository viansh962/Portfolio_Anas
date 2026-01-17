// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     exclude: ['lucide-react'],
//   },
// });




// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // listen on 0.0.0.0 (all network interfaces)
    host: true,              // same as '0.0.0.0'
    port: 5173,              // your port
    strictPort: true,        // fail if 5173 is busy
    cors: true,              // allow cross‑origin requests
    // allow any Host header (including your ngrok URL)
    allowedHosts: true       // ← this is the key
  }
})
