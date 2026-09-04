import { defineConfig, loadEnv } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {
  // Cloudflare Workers (and other edge runtimes) don't expose process.env at
  // request time, so VITE_* vars must be inlined into the bundle at build
  // time instead of read at runtime.
  const env = loadEnv(mode, process.cwd(), "VITE_");
  const envDefine = Object.fromEntries(
    Object.entries(env).map(([key, value]) => [`import.meta.env.${key}`, JSON.stringify(value)]),
  );

  return {
    define: envDefine,
    css: { transformer: "lightningcss" },
    resolve: {
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },
    optimizeDeps: {
      include: ["react", "react-dom", "react-dom/client", "react/jsx-runtime", "react/jsx-dev-runtime"],
    },
    plugins: [
      tailwindcss(),
      // Resolves the "@/*" alias from tsconfig.json.
      tsConfigPaths({ projects: ["./tsconfig.json"] }),
      tanstackStart({
        // Redirect TanStack Start's bundled server entry to src/server.ts
        // (our SSR error wrapper).
        server: { entry: "server" },
        importProtection: {
          behavior: "error",
          client: { files: ["**/server/**"], specifiers: ["server-only"] },
        },
      }),
      // Packages the SSR build into a deployable server. Falls back to a
      // Cloudflare Worker when the host doesn't signal a different target
      // (nitro auto-detects Vercel/Netlify/etc. from their own build env vars).
      nitro({ defaultPreset: "cloudflare-module" }),
      viteReact(),
    ],
    server: { host: "::", port: 8080 },
  };
});
