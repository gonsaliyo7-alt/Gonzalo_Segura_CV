
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Importante para que funcione en subdirectorios o dist
  build: {
    outDir: 'dist', // La build se guardará en /dist (estándar de Vite)
    assetsDir: 'assets',
    emptyOutDir: true,
  }
})
