import { defineConfig } from "vite";

import preactPlugin from "@preact/preset-vite";
import markdownPlugin, { Mode } from "vite-plugin-markdown";

export default defineConfig({
  plugins: [
    preactPlugin(),
    markdownPlugin({
      mode: [Mode.HTML],
    }),
  ],
});
