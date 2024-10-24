import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), ViteImageOptimizer()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@icons": path.resolve(__dirname, "./src/components/icons"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
});
