import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/newsapi": {
        target: "https://newsapi.org",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/newsapi/, ""),
      },
      "/gnews": {
        target: "https://gnews.io",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/gnews/, ""),
      },
      "/currents": {
        target: "https://api.currentsapi.services",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/currents/, ""),
      },
    },
  },
});
