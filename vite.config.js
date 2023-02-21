import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    rollupOptions:{
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        post: resolve(__dirname, 'post.html')
      },
    }
  },
  base:'/LearningJournal/',
  plugins: [],
})