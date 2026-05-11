import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";

export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  resolve: {
    alias: { "@": resolve(__dirname, "./src") },
  },
  base: "./",
  build: {
    outDir: "dist",
    assetsInlineLimit: 10240,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          ui: ["framer-motion", "lucide-react"],
          data: ["idb", "@tanstack/react-query"],
          charts: ["recharts"],
        },
      },
    },
  },
});
