import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

import { resolve } from "path";

export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({ include: "lib", insertTypesEntry: true }),
  ],
  build: {
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
      },
    },
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "lib/index.ts"),
      formats: ["es"],
    },
  },
});
