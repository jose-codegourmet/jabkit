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

export const marqueeStatsFixture = [
  { value: "214", label: "components" },
  { value: "82", label: "atoms" },
  { value: "113", label: "marketing blocks" },
  { value: "19", label: "dashboard blocks" },
  { value: "111", label: "with no extra deps" },
  { value: "6", label: "MCP tools" },
  { value: "2", label: "themes, one source" },
  { value: "1", label: "command to install" },
  { value: "0", label: "lock-in" },
];

export const menuShelvesFixture = [
  {
    label: "Heroes",
    count: 20,
    href: "/components?tag=hero",
    image: "/art/cat-hero.webp",
  },
  {
    label: "Pricing",
    count: 4,
    href: "/components?tag=pricing",
    image: "/art/cat-pricing.webp",
  },
  {
    label: "Case studies",
    count: 2,
    href: "/components?tag=case-studies",
    image: "/art/cat-case.webp",
  },
  {
    label: "Compare",
    count: 1,
    href: "/components?tag=compare",
    image: "/art/cat-compare.webp",
  },
  {
    label: "Code examples",
    count: 2,
    href: "/components?tag=code",
    image: "/art/cat-code.webp",
  },
] as const;

export const tagStickersFixture = [
  { tag: "hero", count: 20 },
  { tag: "form", count: 27 },
  { tag: "background", count: 10 },
  { tag: "chart", count: 2 },
  { tag: "pricing", count: 4 },
  { tag: "cta", count: 28 },
  { tag: "navigation", count: 12 },
  { tag: "footer", count: 12 },
];

export const catalogueGroupsFixture = [
  { id: "actions", label: "Actions & buttons", kind: "component", count: 8 },
  {
    id: "forms",
    label: "Inputs & form controls",
    kind: "component",
    count: 20,
  },
  { id: "heroes", label: "Hero & call to action", kind: "block", count: 29 },
  { id: "commerce", label: "Commerce & conversion", kind: "block", count: 40 },
  { id: "dashboard", label: "Dashboard & data", kind: "block", count: 19 },
] as const;

export const stepperSamplesFixture = [
  {
    name: "button",
    displayName: "Button",
    query: "action",
    matches: [
      { name: "button", displayName: "Button" },
      { name: "liquid-metal-button", displayName: "Liquid Metal Button" },
    ],
    files: [
      "src/components/jabkit/button/Button.tsx",
      "src/components/jabkit/button/Button.types.ts",
      "src/components/jabkit/lib/cn.ts",
    ],
    npmDeps: ["@radix-ui/react-slot", "clsx", "tailwind-merge"],
    sourcePath: "src/components/jabkit/button/Button.tsx",
    sourceExcerpt:
      'import { Slot } from "@radix-ui/react-slot";\nimport { cn } from "../lib/cn";\n\nexport function Button({ asChild, className, ...props }) {\n  const Comp = asChild ? Slot : "button";\n  return <Comp className={cn("inline-flex", className)} {...props} />;\n}',
    previewSrc: "/previews/button.Default.light.webp",
  },
  {
    name: "hero307",
    displayName: "Hero307",
    query: "hero",
    matches: [
      { name: "hero307", displayName: "Hero307" },
      { name: "hero228", displayName: "Hero228" },
      { name: "hero230", displayName: "Hero230" },
    ],
    files: ["src/components/jabkit/hero307/Hero307.tsx"],
    npmDeps: ["clsx", "tailwind-merge"],
    sourcePath: "src/components/jabkit/hero307/Hero307.tsx",
    sourceExcerpt: "export function Hero307(props) {\n  return <section />;\n}",
    previewSrc: "/previews/hero307.Default.dark.webp",
  },
];

export const recoveryItemsFixture = [
  {
    name: "hero307",
    displayName: "Hero307",
    category: "marketing",
    previewSrc: "/previews/hero307.Default.dark.webp",
  },
  {
    name: "hero230",
    displayName: "Hero230",
    category: "marketing",
    previewSrc: "/previews/hero230.Default.dark.webp",
  },
  {
    name: "hero228",
    displayName: "Hero228",
    category: "marketing",
    previewSrc: "/previews/hero228.Default.dark.webp",
  },
  {
    name: "button",
    displayName: "Button",
    category: "atoms",
    previewSrc: "/previews/button.Default.dark.webp",
  },
];

export const designSystemsFixture = [
  {
    slug: "minimal",
    designSystem: "Minimal",
    brand: "West Room Studio",
    description: "Architecture and interiors.",
    href: "http://localhost:3101",
    routes: [{ path: "/work", note: "6 projects" }, { path: "/studio" }],
  },
  {
    slug: "editorial",
    designSystem: "Editorial",
    brand: "Common Hours",
    description: "Independent journal. Stories, contributors, and membership.",
    href: "http://localhost:3103",
    routes: [
      { path: "/stories", note: "9 stories" },
      { path: "/membership", note: "demo form" },
    ],
  },
  {
    slug: "retro",
    designSystem: "Retro",
    brand: "Pocket Keeps",
    description: "Creative image utility.",
    routes: [{ path: "/collections", note: "3 collections" }],
  },
];
