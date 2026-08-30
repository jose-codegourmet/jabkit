import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const sourceRoot = path.join(root, ".shadcn-src/src/components/ui");
const targetRoot = path.join(root, "packages/ui/src/atoms");
const selected = [
  "separator",
  "label",
  "input",
  "textarea",
  "checkbox",
  "switch",
  "badge",
  "avatar",
  "skeleton",
  "tooltip",
  "dropdown-menu",
  "dialog",
];

function pascal(name: string) {
  return name
    .split("-")
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join("");
}

for (const name of selected) {
  const component = pascal(name);
  const source = await readFile(path.join(sourceRoot, `${name}.tsx`), "utf8");
  const converted = source
    .replaceAll('"@/lib/utils"', '"@/lib/cn"')
    .replaceAll('"@/components/ui/', '"@/atoms/');
  const dir = path.join(targetRoot, name);
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, `${component}.tsx`), `${converted}\n`);
  await writeFile(
    path.join(dir, `${component}.types.ts`),
    `export type ${component}Props = Record<string, unknown>;\n`,
  );
  await writeFile(
    path.join(dir, "index.ts"),
    `export { ${component} } from "./${component}";\n`,
  );
  await writeFile(
    path.join(dir, `${component}.meta.ts`),
    `import type { ComponentMeta } from "@jabkit/build-registry";\n\nexport default {\n  name: "${name}",\n  displayName: "${component}",\n  version: "1.0.0",\n  addedAt: "2026-08-30",\n  description: "Accessible ${component} primitive adapted from shadcn/ui.",\n  tags: ["${name}", "primitive", "accessible"],\n  dependencies: [],\n  registryDependencies: [],\n  a11y: { keyboardNav: true, reducedMotion: true },\n} satisfies ComponentMeta;\n`,
  );
  await writeFile(
    path.join(dir, `${component}.stories.tsx`),
    `import type { Meta, StoryObj } from "@storybook/react";\nimport { ${component} } from "./${component}";\n\nconst meta = { title: "Atoms/${component}", component: ${component} } satisfies Meta<typeof ${component}>;\nexport default meta;\ntype Story = StoryObj<typeof meta>;\nexport const Default: Story = { render: () => <${component} /> };\nexport const Variants: Story = { render: () => <${component} className="w-full" /> };\nexport const ThemeComparison: Story = { render: () => <div className="dark bg-background p-6"><${component} /></div> };\n`,
  );
}
console.log(`Converted ${selected.length} shadcn components.`);
