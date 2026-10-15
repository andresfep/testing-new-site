import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";

// All files live in the project root (no folders). These are copied into the build
// output so they are served at the site root, like files in a normal "public" folder.
const STATIC_FILES = ["favicon.svg", "placeholder.svg", "robots.txt", "sitemap.xml", "llms.txt"];
const copyStaticFiles = () => ({
  name: "copy-static-files",
  apply: "build" as const,
  closeBundle() {
    for (const f of STATIC_FILES) {
      if (fs.existsSync(f)) fs.copyFileSync(f, path.resolve(__dirname, "dist", f));
    }
  },
});
import { componentTagger } from "@leadconnector/vibe-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    allowedHosts: [".modal.host"],
    hmr: {
      overlay: false,
    },
  },
  publicDir: false,
  plugins: [
    react(),
    copyStaticFiles(),
    mode === "development" && componentTagger({ tailwindConfig: true }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
}));
