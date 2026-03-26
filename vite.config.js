import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, 'contact.html'),
        requestQuotation: resolve(__dirname, 'request-quotation.html'),
        quotation: resolve(__dirname, 'quotation.html')
      }
    }
  }
})
