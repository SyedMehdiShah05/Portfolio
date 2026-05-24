import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: '/Portfolio/',
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: "dist",
    emptyOutDir: true,
  }
});
