import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  base: process.env.NODE_ENV === 'production' ? '/ci-release-note/' : '/',
  define: {
    'import.meta.env.VITE_CONFLUENCE_EMAIL': JSON.stringify(process.env.VITE_CONFLUENCE_EMAIL),
    'import.meta.env.VITE_CONFLUENCE_API_TOKEN': JSON.stringify(process.env.VITE_CONFLUENCE_API_TOKEN),
    'import.meta.env.VITE_APIM': JSON.stringify(process.env.VITE_APIM),
  },
});