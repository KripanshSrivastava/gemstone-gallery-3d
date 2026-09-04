import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    // Resolves the "@/*" alias from tsconfig.json.
    tsConfigPaths(),
    tailwindcss(),
    tanstackStart({
      // We register @vitejs/plugin-react ourselves, below.
      customViteReactPlugin: true,
      // Build target for nitro. src/server.ts and src/start.ts are picked up
      // automatically by TanStack Start as the server entry and start instance.
      target: "cloudflare-module",
    }),
    viteReact(),
  ],
  resolve: {
    // Keep a single copy of React and the TanStack runtime in the bundle.
    dedupe: [
      "react",
      "react-dom",
      "@tanstack/react-router",
      "@tanstack/react-query",
      "@tanstack/react-store",
    ],
  },
});
