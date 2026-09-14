import path from "node:path";
import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
  stories: ["../components/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-a11y"],
  framework: {
    name: "@storybook/nextjs-vite",
    options: {},
  },
  staticDirs: ["../public"],
  async viteFinal(config) {
    config.server = {
      ...config.server,
      proxy: {
        ...config.server?.proxy,
        "/preview": "http://localhost:3000",
      },
      watch: {
        ...config.server?.watch,
        ignored: [
          ...(Array.isArray(config.server?.watch?.ignored)
            ? config.server.watch.ignored
            : []),
          "**/public/r/**",
        ],
      },
    };
    config.resolve ??= {};
    config.resolve.alias = {
      ...(config.resolve.alias as Record<string, string>),
      "@": path.resolve(import.meta.dirname, "../../../packages/ui/src"),
      common: path.resolve(import.meta.dirname, "../common"),
      "node:fs/promises": path.resolve(
        import.meta.dirname,
        "mocks/node-fs-promises.ts",
      ),
      "node:path": path.resolve(import.meta.dirname, "mocks/node-path.ts"),
    };
    return config;
  },
};

export default config;
