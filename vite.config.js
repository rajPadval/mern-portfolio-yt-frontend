import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/admin': 'https://mern-portfolio-yt-frontend-8mut.vercel.app/admin',
    },
  },
})
