// Build target: Node server (no Cloudflare Workers).
// Output goes to `.output/` — start with `node .output/server/index.mjs`.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    target: "node-server",
  },
});
