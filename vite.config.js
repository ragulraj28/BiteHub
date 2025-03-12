import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'full-reload-css',
      handleHotUpdate({ file, server }) {
        if (file.endsWith('.css')) {
          server.ws.send({ type: 'full-reload' });
        }
      },
    }
  ]
})
