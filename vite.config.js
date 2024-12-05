import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import svgr from "vite-plugin-svgr"
// https://vitejs.dev/config/
export default defineConfig({
  base: "./", // Use this for relative paths
  build: {
    outDir: "dist", // Customize if necessary
  },
  plugins: [react(), svgr()],
})
