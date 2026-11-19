import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@taxi/shared": fileURLToPath(new URL("./src/lib/shared/index.ts", import.meta.url)),
      "@taxi/web-core": fileURLToPath(new URL("./src/lib/web-core/index.ts", import.meta.url)),
    },
  },
  build: { outDir: "dist", emptyOutDir: true, target: "es2022" },
});
