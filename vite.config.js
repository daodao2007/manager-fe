import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: 'localhost',//配置主机名
    port: 8080//配置端口号
  },
  plugins: [vue()]
})