import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" makes the build work on any GitHub Pages path
// (renn-amm.github.io/portfolio-web.github.io/ or a custom domain).
export default defineConfig({
  plugins: [react()],
  base: "./",
});
