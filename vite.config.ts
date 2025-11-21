
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Gonzalo_Segura_CV/', // Base URL for GitHub Pages
  build: {
    outDir: 'dist', // La build se guardará en /dist (estándar de Vite)
    assetsDir: 'assets',
    emptyOutDir: true,
  }
})
