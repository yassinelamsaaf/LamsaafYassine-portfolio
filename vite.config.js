import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [react(), tailwindcss()],

    // - Dev wants normal URLs (http://localhost:5173/)
    // - Build (GitHub Pages) needs the repository sub-path
    base: "/",
  };
});
