# Adding a Component

Mandatory checklist for adding or substantially modifying a JabKit component. Follow every step in order. Turn this list into todos and do not skip items.

Reference implementation: `packages/ui/src/atoms/button/`.

Why these rules exist: [design-system.md](design-system.md). What the registry build does with the files: [registry.md](registry.md).

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
  {Name}.preview.tsx
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
  render: () => (
    <Example {...exampleMocks.default} />
  ),
};

export const Variants: Story = {
  args: { ...exampleMocks.alternate },
  render: () => (
    <Example {...exampleMocks.alternate} />
  ),
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
- That extractor only matches a **parenthesized multi-line** `render`. A single-line `render: () => <X />` is skipped and can mislabel the next story's code as this story's example. See [registry.md](registry.md).
- `ThemeComparison` is excluded from registry examples but is required for light/dark coverage.

### `{Name}.preview.tsx`

Required. The showcase iframe route dynamically imports this module; `scripts/check-conventions.ts` fails the folder if it is missing. Default-export a `Record<string, () => ReactNode>` keyed by story name. Reference: `packages/ui/src/atoms/button/Button.preview.tsx`.

```tsx
// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Example } from "./Example";
import { exampleMocks } from "./Example.mocks";

export default {
  Default: () => <Example {...exampleMocks.default} />,
  Variants: () => <Example {...exampleMocks.alternate} />,
};
```

The registry build records the file in `apps/showcase/lib/preview-manifest.generated.ts` (gitignored). It is **not** copied into registry JSON.

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

Author `{Name}.preview.tsx` (see above) and run `pnpm registry:build`. That regenerates `apps/showcase/lib/preview-manifest.generated.ts`, which `apps/showcase/app/preview/[name]/[story]/page.tsx` reads.

A missing preview module fails `pnpm check` (`missing {Name}.preview.tsx`). A name that is not in the generated manifest 404s — it does **not** fall back to `Button`. Do not edit the preview route to add a switch case.

Details: [showcase.md](showcase.md).

## 5. Build the registry

```bash
pnpm registry:build
```

- Scans `packages/ui/src/{atoms|marketing|dashboard}/`.
- Writes `apps/showcase/public/r/{name}.json` and `apps/showcase/public/r/index.json`.
- Those JSON files are **committed**. Rebuild and include them in the same change as the component.
- **Never** edit generated registry JSON by hand. Stories are the source of examples.

Shared `@/lib/*` imports are auto-bundled into the registry entry as `"lib"` files.

## 6. Generate preview assets

```bash
pnpm previews:build -- --name {name}
```

Commit the resulting files under `apps/showcase/public/previews/`. The capture pipeline creates a dark still WebP for every preview story; Button also receives light captures for the home theme-proof strip. Marketing autoplay or marquee blocks may also commit a Default GIF. See [previews.md](previews.md).

## 7. Validate

Required gate before the work is done:

```bash
pnpm check
```

That runs lint, typecheck, convention checks, a registry rebuild that fails if `public/r/` is out of date, and preview-asset verification.

Optional visual checks:

```bash
pnpm storybook   # port 6006
pnpm dev         # showcase; confirm /{category}/{name} and the preview iframe in light and dark
```

## Common failures

| Checker message | Fix |
| --- | --- |
| `folder must be kebab-case` | Rename the folder to kebab-case |
| `missing {Name}.tsx` (or stories / preview / types / meta / index) | Add the missing required file with the PascalCase prefix |
| `contains a hardcoded Tailwind color` | Replace `bg-white`, `text-gray-*`, etc. with semantic tokens |
| `import escapes component folder` | Remove `from "../"`; use `@/lib/*` or same-folder imports |
| `index.ts must contain re-exports only` | Keep only `export` lines in `index.ts` |
| `story title does not match category` | Set `title: "Atoms/Name"` (or Marketing / Dashboard) |
| `stories need render functions and ThemeComparison` | Add `render:` to each story and export `ThemeComparison` |
| Showcase preview 404s | Add `{Name}.preview.tsx` and run `pnpm registry:build` so the preview manifest includes the name |
| Showcase 404 / empty catalogue | Run `pnpm registry:build` and commit `apps/showcase/public/r/` |
| Missing or stale preview WebP / GIF | Run `pnpm previews:build -- --name {name}` and commit the output |

## MCP and CLI notes

- Catalogue HTTP tools against the registry are **read-only**. See [mcp.md](mcp.md).
- The CLI writes source into **consumer** projects from registry JSON. It does not scaffold library components in this monorepo. See [cli.md](cli.md).
- An installed component in a consumer project must stay pristine before any requested local edits are applied.
