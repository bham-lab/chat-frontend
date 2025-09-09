import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// Use PostCSS instead of LightningCSS (Termux fix)
export default defineConfig({
  css: {
    transformer: "postcss",
  },
  plugins: [react()],
})