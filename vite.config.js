import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/EchoLearn",
})
/*
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/nahul100/EchoLearn.git
git push -u origin main
*/