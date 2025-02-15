import { defineConfig, mergeConfig } from "vitest/config";

import viteConfig from "./vite.config.js";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: "jsdom",
      globals: true,
      exclude: [
        "/release.config.js", // 👈 Targets the root file
        "**/node_modules/**", // Keep default excludes
        "**/dist/**",
        "**/coverage/**",
      ],
    },
  }),
);
