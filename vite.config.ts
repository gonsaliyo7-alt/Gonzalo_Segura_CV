

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Importante para que funcione en subdirectorios o docs
  build: {
    outDir: 'docs', // La build se guardará en /docs
    assetsDir: 'assets',
    emptyOutDir: true,
  }
})