import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // 👈 Add this line for correct relative paths on Netlify
  plugins: [react()],
})
