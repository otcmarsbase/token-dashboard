import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
		// @ts-ignore
		main: resolve(__dirname, 'index.html'),
		// @ts-ignore
        "plasmic-host": resolve(__dirname, 'plasmic-host/index.html')
      }
    }
  }
})