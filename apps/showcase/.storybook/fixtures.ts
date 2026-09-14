import type { RegistryEntry } from "../lib/registry";

export const registryEntryFixture: RegistryEntry = {
  name: "button",
  displayName: "Button",
  category: "atoms",
  description: "Primary action control with variants.",
  tags: ["action", "form"],
  addedAt: "2026-01-12",
  dependencies: ["@radix-ui/react-slot"],
  a11y: { keyboardNav: true, reducedMotion: true },
  version: "0.1.0",
  registryDependencies: [],
  files: [
    {
      path: "atoms/button/Button.tsx",
      type: "component",
      content:
        "export function Button() {\n  return <button>Continue</button>;\n}\n",
    },
    {
      path: "atoms/button/Button.types.ts",
      type: "types",
      content:
        "export type ButtonProps = {\n  children: React.ReactNode;\n};\n",
    },
  ],
  examples: [
    { name: "Default", code: "<Button>Continue</Button>" },
    { name: "Ghost", code: '<Button variant="ghost">Learn more</Button>' },
  ],
};

export const fitPreviewMeta = {
  layout: "fit" as const,
  height: 900,
};

export const minimalRegistryEntry: Pick<
  RegistryEntry,
  "name" | "category" | "version" | "addedAt" | "a11y" | "tags"
> = {
  name: "hero228",
  category: "marketing",
  version: "0.1.0",
  addedAt: "2026-03-04",
  a11y: { keyboardNav: false, reducedMotion: false },
  tags: [],
};
