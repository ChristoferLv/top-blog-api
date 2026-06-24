import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Controls file system polling delay
      awaitWriteFinish: {
        stabilityThreshold: 500, 
      }
    }
  }
})
