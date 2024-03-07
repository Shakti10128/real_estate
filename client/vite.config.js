import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      // when the address start with name 'api' just put the target url
      '/api':{
        target:"http://localhost:3000",
        secure:false,
      },
    },
  },
  plugins: [react()],
})
