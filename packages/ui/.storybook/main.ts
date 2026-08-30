import path from "node:path";
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-a11y", "@storybook/addon-themes"],
  framework: "@storybook/react-vite",
  async viteFinal(config) {
    config.esbuild = { ...config.esbuild, jsx: "automatic" };
    config.resolve ??= {};
    config.resolve.alias = {
      ...(config.resolve.alias as Record<string, string>),
      "@": path.resolve(import.meta.dirname, "../src"),
    };
    return config;
  },
};
export default config;
