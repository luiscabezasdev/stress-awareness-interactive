import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: process.env.HOST ?? '0.0.0.0',
    port: Number(process.env.PORT) || 4173,
    // Only fail if user explicitly pinned the port via env
    strictPort: Boolean(process.env.PORT),
  },
})
