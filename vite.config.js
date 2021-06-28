// vite.config.js
export default {
  build: {
    outDir: "build"
  },
  server: {
    host: 'localhost',
    strictPort: true,
    hmr: {
      port: 443 // Run the websocket server on the SSL port
    }
  }
}
