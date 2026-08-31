# Adding a Component

Mandatory checklist for adding or substantially modifying a JabKit component. Follow every step in order. Turn this list into todos and do not skip items.

Reference implementation: `packages/ui/src/atoms/button/`.

## 1. Pick category and name

Categories: `atoms`, `marketing`, `dashboard`.

| Piece | Rule | Example |
| --- | --- | --- |
| Folder | kebab-case under `packages/ui/src/{category}/` | `dropdown-menu` |
| File prefix | PascalCase derived from the folder | `DropdownMenu` |
| Registry `name` | Same as the folder | `dropdown-menu` |
| Registry `displayName` | Same as the file prefix | `DropdownMenu` |

Path shape:

```text
packages/ui/src/{category}/{kebab-name}/
  {Name}.tsx
  {Name}.stories.tsx
  {Name}.types.ts
  {Name}.meta.ts
  index.ts
  {Name}.mocks.ts   # optional
```

There is no top-level `packages/ui/src/index.ts` barrel. Discovery is folder-driven via the registry build.

## 2. Create the required files

### `{Name}.types.ts`

```ts
import type { HTMLAttributes, ReactNode } from "react";

export interface ExampleProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
```

### `{Name}.tsx`

```tsx
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { ExampleProps } from "./Example.types";

export function Example({ className, children, ...props }: ExampleProps) {
  return (
    <div
      className={cn("bg-background text-foreground", className)}
      data-slot="example"
      {...props}
    >
      {children}
    </div>
  );
}
```

Rules enforced by `scripts/check-conventions.ts`:

- Semantic tokens only (`bg-background`, `text-foreground`, `border-border`, `bg-primary`, etc.). Do **not** use hardcoded Tailwind colors such as `bg-white`, `text-black`, `text-gray-*`, `bg-slate-*`.
- Do not import outside the component folder with `from "../"`. Shared helpers come from `@/lib/*` (for example `@/lib/cn`).
- Prefer a `data-slot` attribute matching the kebab name.

### `{Name}.meta.ts`

Must `satisfies ComponentMeta` from `@jabkit/build-registry`:

```ts
import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "example",
  displayName: "Example",
  version: "1.0.0",
  addedAt: "YYYY-MM-DD",
  description: "One-sentence description of what the component does.",
  tags: ["example", "atom"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  // Optional: full-bleed marketing / dashboard blocks
  // preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
```

| Field | Meaning |
| --- | --- |
| `name` | kebab-case registry id; must match the folder |
| `displayName` | PascalCase UI name |
| `version` | Semver string for this component |
| `addedAt` | ISO date string (`YYYY-MM-DD`) |
| `description` | Short prose used in the showcase |
| `tags` | Search / filter keywords |
| `dependencies` | npm packages the consumer must install (e.g. `@radix-ui/react-slot`) |
| `registryDependencies` | Other JabKit component `name` values pulled in by the CLI |
| `a11y` | `{ keyboardNav, reducedMotion }` flags |
| `cssVars` | Optional; if present, must include both `light` and `dark` maps |
| `preview` | Optional; `{ layout: "fit" \| "center", width?, height? }` for showcase iframe sizing |

### `{Name}.mocks.ts` (optional)

Keep story and preview data out of the component file:

```ts
export const exampleMocks = {
  default: { children: "Hello" },
  alternate: { children: "Alternate" },
} as const;
```

### `{Name}.stories.tsx`

```tsx
import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Example } from "./Example";
import { exampleMocks } from "./Example.mocks";

const meta = {
  title: "Atoms/Example",
  component: Example,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Example>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...exampleMocks.default },
  render: () => <Example {...exampleMocks.default} />,
};

export const Variants: Story = {
  args: { ...exampleMocks.alternate },
  render: () => <Example {...exampleMocks.alternate} />,
};

export const ThemeComparison: Story = {
  args: { ...exampleMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-8">
        <Example {...exampleMocks.default} />
      </div>
      <div className="dark bg-background p-8">
        <Example {...exampleMocks.default} />
      </div>
    </div>
  ),
};
```

Story requirements:

- `title` must match the category: `"Atoms/..."`, `"Marketing/..."`, or `"Dashboard/..."`.
- At least two stories **plus** `ThemeComparison`.
- Every story used as an example must have a `render:` function. The registry builder extracts example JSX from `render: () => (...)`.
- `ThemeComparison` is excluded from registry examples but is required for light/dark coverage.

### `index.ts`

Re-exports only — no side effects, no non-export statements:

```ts
export { Example } from "./Example";
export type { ExampleProps } from "./Example.types";
```

## 3. Dependency direction

- Atoms may depend on other atoms via `registryDependencies`.
- Atoms never depend on marketing or dashboard.
- Marketing and dashboard never depend on each other.
- List npm packages in `dependencies`; list other JabKit component names in `registryDependencies`.

## 4. Register the showcase preview

The showcase iframe route uses a hardcoded switch. Without a new case, the preview silently falls back to a `Button`.

Edit `apps/showcase/app/preview/[name]/[story]/page.tsx`:

1. Import the component (and mocks if needed).
2. Add a `case "<name>":` that renders the default story when `story !== "Variants"` and an alternate when `story === "Variants"`.

```tsx
case "example":
  return (
    <Example {...(alternate ? exampleMocks.alternate : exampleMocks.default)} />
  );
```

## 5. Build the registry

```bash
pnpm registry:build
```

- Scans `packages/ui/src/{atoms|marketing|dashboard}/`.
- Writes `apps/showcase/public/r/{name}.json` and `apps/showcase/public/r/index.json`.
- Those JSON files are **gitignored**. Rebuild locally before `pnpm dev`.
- **Never** edit generated registry JSON by hand. Stories are the source of examples.

Shared `@/lib/*` imports are auto-bundled into the registry entry as `"lib"` files.

## 6. Validate

Required gate before the work is done:

```bash
pnpm check
```

That runs lint, typecheck, convention checks, and a registry build.

Optional visual checks:

```bash
pnpm storybook   # port 6006
pnpm dev         # showcase; confirm /{category}/{name} and the preview iframe in light and dark
```

## Common failures

| Checker message | Fix |
| --- | --- |
| `folder must be kebab-case` | Rename the folder to kebab-case |
| `missing {Name}.tsx` (or stories / types / meta / index) | Add the missing required file with the PascalCase prefix |
| `contains a hardcoded Tailwind color` | Replace `bg-white`, `text-gray-*`, etc. with semantic tokens |
| `import escapes component folder` | Remove `from "../"`; use `@/lib/*` or same-folder imports |
| `index.ts must contain re-exports only` | Keep only `export` lines in `index.ts` |
| `story title does not match category` | Set `title: "Atoms/Name"` (or Marketing / Dashboard) |
| `stories need render functions and ThemeComparison` | Add `render:` to each story and export `ThemeComparison` |
| Showcase preview shows a Button with the new name | Add the missing `case` in `preview/[name]/[story]/page.tsx` |
| Showcase 404 / empty catalogue | Run `pnpm registry:build` (JSON under `public/r/` is gitignored) |

## MCP and CLI notes

- MCP tools against the registry are **read-only**.
- The CLI (`jabkit add`) writes source into **consumer** projects from registry JSON. It does not scaffold library components in this monorepo.
- An installed component in a consumer project must stay pristine before any requested local edits are applied.
