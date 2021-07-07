// vite.config.js

const { resolve } = require('path')

export default {
  build: {
    outDir: "build",
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        screen_one: resolve(__dirname, 'screen_one.html'),
        screen_two: resolve(__dirname, 'screen_two.html')
      }
    }
  },
  server: {
    host: 'localhost',
    strictPort: true,
    hmr: {
      port: 443 // Run the websocket server on the SSL port
    }
  }
}
