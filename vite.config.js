// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 300, // you can change the port if needed
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
