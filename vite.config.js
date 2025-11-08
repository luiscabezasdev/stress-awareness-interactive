import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    host: process.env.HOST ?? '0.0.0.0',
    port: Number(process.env.PORT) || 4173,
    // Only fail if user explicitly pinned the port via env
    strictPort: Boolean(process.env.PORT),
  },
})
