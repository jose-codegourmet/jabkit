# Documentation Plan — Issue #81

Implementation plan for [issue #81, "Establish comprehensive repo documentation and agent knowledge architecture"](https://github.com/jose-codegourmet/jabkit/issues/81).

This file is a plan, not the documentation itself. It records what was found during a full read of the repository at `871751e`, defines exactly which documents will be written, and gives the next agent an ordered set of steps. Delete this file in the final implementation commit once every item has been carried into a real document — it is scaffolding, not a permanent doc.

Everything below was verified against source. Where a claim could not be verified, it is listed under [Explicit omissions](#explicit-omissions) rather than guessed at.

---

## 1. Audit findings

### 1.1 What the repository actually is

A pnpm + Turborepo monorepo (`pnpm-workspace.yaml`: `apps/*`, `packages/*`), Node `>=24` (`.nvmrc` = `24`), `packageManager: pnpm@11.24.0`, ESM (`"type": "module"` at root).

| Workspace | Package name | Role (verified) |
| --- | --- | --- |
| `packages/ui` | `@jabkit/ui` | The component library source. 39 components under `src/atoms` (13), `src/marketing` (21), `src/dashboard` (5). Owns `src/lib/cn.ts`, `src/lib/theme.ts`, and the Storybook config in `.storybook/`. Private, never published, no root barrel export. |
| `packages/tokens` | `@jabkit/tokens` | Single source of the `--jk-*` design tokens. Exports `./tokens.css` (consumed by every app and by Storybook) and `./tokens` (a TS object). |
| `packages/build-registry` | `@jabkit/build-registry` | The registry generator (`src/build.ts`) plus the shared registry type contract (`src/index.ts`: `ComponentMeta`, `RegistryFile`, `RegistryComponent`, `ComponentCategory`, `ComponentPreviewMeta`). |
| `packages/cli` | `@jabkit/cli` | `jabkit init | add | upgrade`. Writes component source into *consumer* projects by fetching registry JSON over HTTP. |
| `packages/mcp` | `@jabkit/mcp` | Currently exports one thing: the `jabkitTools` string tuple and the `JabkitTool` type. No server, no handlers. |
| `apps/showcase` | `@jabkit/showcase` | Next.js 16 App Router site. Serves the catalogue, component detail pages, preview iframes, samples, and the `/mcp` HTTP endpoint. Hosts the generated registry JSON at `public/r/`. |
| `apps/verify` | `@jabkit/verify` | External-consumer harness. `pnpm --filter @jabkit/verify sync` runs the CLI's `add --all --force` against the local registry so a build proves installed output compiles outside the monorepo's aliases. Its `src/components/jabkit` output is gitignored. |

Root scripts (`package.json`) that matter: `dev`, `storybook`, `lint` (biome), `typecheck` (turbo), `check:conventions`, `registry:build`, `registry:verify`, and the composite gate `check`.

### 1.2 What documentation exists today

- `README.md` — 20 lines. Short intro, local-dev commands, and an "Implementation status" paragraph. **Stale, see 1.4.**
- `docs/adding-a-component.md` — 8.3 KB, high quality and genuinely detailed. The strongest existing doc. **Contains one materially wrong section, see 1.4.**
- `AGENTS.md` — 18 lines. Eight non-negotiable rules plus a pointer to `docs/adding-a-component.md`. Accurate but far too thin to route an agent.
- `templates/AGENTS.snippet.md` and `templates/SKILL.md` — consumer-project boilerplate. **Referenced by nothing, see 1.4.**
- `apps/showcase/AGENTS.md`, `apps/showcase/CLAUDE.md`, `.shadcn-src/AGENTS.md`, `.shadcn-src/CLAUDE.md` — machine-generated, see 1.6.

There is no `docs/README.md`, no architecture document, no theming document, no registry document, no showcase document, no CLI document, and no MCP document. There is no `.github/` directory at all: **no CI workflows, no PR template, no issue templates.** `pnpm check` run locally is the only enforcement, backed by a husky `pre-commit` hook (`pnpm biome check --staged`) and a `commit-msg` hook (commitlint, conventional commits).

### 1.3 Architecture as actually implemented

The pipeline, end to end:

1. **Source.** A component lives in `packages/ui/src/{category}/{kebab-name}/` with six required files (`{Name}.tsx`, `{Name}.stories.tsx`, `{Name}.preview.tsx`, `{Name}.types.ts`, `{Name}.meta.ts`, `index.ts`) and an optional `{Name}.mocks.ts` (27 of 39 components have one).
2. **Convention gate.** `scripts/check-conventions.ts` walks the three category directories and enforces: kebab-case folders, the six required files, no hardcoded Tailwind colors in `{Name}.tsx` (regex `\b(?:bg|text|border)-(?:white|black|gray|slate|zinc|neutral|stone)\b`), no `from "../"` imports in `{Name}.tsx`, `index.ts` containing only `export` lines, a story `title` matching the capitalized category, and the presence of both `ThemeComparison` and `render:` in the stories file. It resolves paths from `process.cwd()`, so **it only works when run from the repo root.**
3. **Registry build.** `packages/build-registry/src/build.ts` deletes and regenerates `apps/showcase/public/r/`. Per component it imports the `.meta.ts` default export, validates that `cssVars` (if present) has both `light` and `dark`, collects `.tsx`/`.types.ts`/`index.ts` as registry files (excluding stories, mocks, meta and preview), scans those files for `@/lib/<x>` imports and inlines `packages/ui/src/lib/<x>.ts` as a `"lib"` file, extracts examples from the stories, and writes `{name}.json`. It then writes `index.json` (a trimmed projection) and `apps/showcase/lib/preview-manifest.generated.ts`.
4. **Showcase.** `apps/showcase/lib/registry.ts` reads `public/r/*.json` from disk at request time via `node:fs`. Every catalogue, category, detail, and home-page surface is driven by that JSON. `next.config.ts` sets `outputFileTracingIncludes` for `./public/r/**` so the JSON ships with the build.
5. **Preview.** `apps/showcase/app/preview/[name]/[story]/page.tsx` looks the component up in the generated `previewManifest`, dynamically imports its `{Name}.preview.tsx`, and renders the requested story key.
6. **Consumer.** `packages/cli` fetches `{registry}/r/{name}.json` over HTTP, walks `registryDependencies`, rewrites imports to the configured alias, writes files, appends `cssVars` to the consumer's `globals.css`, writes `.jabkit/manifest.json`, and runs `pnpm add` for npm `dependencies`.

Generated and never hand-edited: `apps/showcase/public/r/*.json` (**committed**) and `apps/showcase/lib/preview-manifest.generated.ts` (**gitignored**, rebuilt by `pnpm registry:build`, which `@jabkit/showcase`'s own `dev`/`build`/`typecheck` scripts run first via `pnpm -w registry:build`).

Path aliasing is worth calling out because it surprises people: `apps/showcase/tsconfig.json` maps `@/*` to `../../packages/ui/src/*`. So inside the showcase, `@/atoms/button` and `@/marketing/about8` resolve into the library, not into the app. `packages/ui/tsconfig.json` maps `@/*` to its own `src/*`, and the Storybook Vite config repeats that alias.

Theming, as implemented: `packages/tokens/tokens.css` does `@import "tailwindcss"`, declares `@custom-variant dark (&:where(.dark, .dark *))`, defines `--jk-*` values under `:root` and `.dark`, and maps them to Tailwind theme colors through `@theme inline` (`--color-background: var(--jk-background)` and so on, plus `--radius: var(--jk-radius)`). Three consumers import that file: `apps/showcase/app/globals.css` (which also declares `@source "../../../packages/ui/src"` so Tailwind scans library classes), `apps/verify/app/globals.css`, and `packages/ui/.storybook/preview.css`. The showcase wraps the tree in `next-themes` `ThemeProvider` with `attribute="class"`, `defaultTheme="system"`, `enableSystem`. Storybook uses `withThemeByClassName` with `{ light: "", dark: "dark" }`.

### 1.4 Stale or incorrect statements found

These must be corrected as part of the implementation.

1. **`docs/adding-a-component.md` §4 "Register the showcase preview" is wrong.** It instructs the reader to edit a "hardcoded switch" in `apps/showcase/app/preview/[name]/[story]/page.tsx` and warns that a missing case "silently falls back to a `Button`". Neither is true. That route reads the generated `previewManifest` and calls `notFound()` when the name is absent. The real requirement is to author `{Name}.preview.tsx` (default-exporting a `Record<string, () => ReactNode>` keyed by story name) and re-run `pnpm registry:build`. The matching row in the doc's "Common failures" table ("Showcase preview shows a Button with the new name") is obsolete for the same reason.
2. **`docs/adding-a-component.md` §2 omits `{Name}.preview.tsx` from the required-file list and path shape**, even though `scripts/check-conventions.ts` hard-requires it and all 39 components have one. This is the single most likely cause of a first-time `pnpm check` failure.
3. **`README.md` "Implementation status" is stale.** It claims "The current registry contains the existing `Button` component" and that "Additional shadcn components remain intentionally un-ingested" with "no raw `.shadcn-src/` artifacts committed". In fact the registry has 39 components, `scripts/convert-shadcn.ts` has clearly been run (12 atoms carry its generated description "Accessible X primitive adapted from shadcn/ui"), and `.shadcn-src/` **is** committed at the repo root.
4. **`AGENTS.md`'s component-contract bullet is incomplete** — it lists prop file, metadata, two stories and `ThemeComparison`, but not the required preview module.
5. **`templates/AGENTS.snippet.md` and `templates/SKILL.md` are orphaned.** `packages/cli/src/index.ts` `init()` writes its own hardcoded copies of both artifacts inline, with different wording from the template files. Nothing in the repo reads `templates/`. Either the CLI should read them or the directory should be documented as reference-only; this plan documents the drift and does not change code.

### 1.5 Real limitations and gaps to document honestly (not fix)

- **Registry example extraction is regex-based and can mislabel.** `componentExamples()` in `build.ts` matches `export const (\w+): ... render: () => ( ... )`. The lazy middle means a story whose `render` is a single-line arrow *without* parentheses is skipped, and the regex then pairs that story's **name** with the **next** story's JSX. Verified: `packages/ui/src/atoms/button/Button.stories.tsx` has `Default` as a single-line render, and `apps/showcase/public/r/button.json` consequently contains exactly one example named `Default` whose code is the `Variants` markup. Same shape for `avatar`. Document the constraint ("every story used as an example needs a parenthesized multi-line `render`") and note the mislabeling as a known issue worth its own ticket.
- **`packages/mcp` is a name list, not a server.** The working implementation is `apps/showcase/app/mcp/route.ts`, and it is **not** the MCP wire protocol — it is a plain JSON endpoint. `GET /mcp` returns `{ name, tools }`; `POST /mcp` takes `{ tool, arguments }` and dispatches to six read-only handlers (`list_components`, `search_components`, `get_component`, `get_install_plan`, `get_conventions`, `get_category_overview`). A standard MCP client cannot speak to it without an adapter. `packages/cli`'s `init()` even tells the user to "Configure your MCP client to use your deployed /mcp endpoint", which overstates today's compatibility. Document what the endpoint does and state the protocol gap plainly.
- **`jabkit upgrade` is a stub.** It prints a message about a three-way merge landing "in the next implementation pass" and does nothing else. `.jabkit/manifest.json` is written by `add`, but every entry in `components[]` gets the *same complete* `manifestFiles` map rather than that component's own files.
- **The CLI is not installable as advertised.** `packages/cli/package.json` is `private: true`, has no `build`, and points `bin.jabkit` at `./src/index.ts` (raw TypeScript). The showcase surfaces `npx jabkit add <name>` / `pnpm dlx` / `bunx` commands, and `docs/adding-a-component.md` refers to `jabkit add`. In-repo the only working invocation is `tsx packages/cli/src/index.ts ...`, which is exactly what `apps/verify`'s `sync` script does. Document the distinction between the published-CLI story and the current in-repo reality.
- **Preview iframes do not inherit the showcase theme.** `/preview/[name]/[story]` applies `.dark` to its own `<main>` based solely on the `?theme=` query param, defaulting to light, plus a forced dark when `story === "ThemeComparison"`. The catalogue grid, home bento, and hero all embed previews without a `theme` param, so they render light regardless of the site theme. `ComponentPreview` carries its own local dark toggle that only rewrites the iframe `src`. There is a separate open theme issue; `docs/theming.md` will state the intended contract and point at the implementation files **without** claiming the behavior is fixed and without touching the code.
- **Dead exports.** `packages/tokens/tokens.ts` (`jabkitTokens`) and `packages/ui/src/lib/theme.ts` (`themeTokens`) are imported by nothing in the repo (verified by grep across all `.ts`/`.tsx`/`.css`/`.json`/`.md`). `jabkitTokens` also partially duplicates values from `tokens.css` and can drift. `@jabkit/cli` declares a `@jabkit/tokens` dependency it never imports. Mention as drift risk; do not delete.
- **`apps/showcase/tsconfig.tsbuildinfo` is committed but is a build artifact.** It is not in `.gitignore` (the showcase tsconfig sets `"incremental": true`), so every `pnpm typecheck` / `pnpm check` mutates it and dirties the working tree. Verified: a clean-baseline `pnpm check` left ` M apps/showcase/tsconfig.tsbuildinfo`. List it in the generated-vs-committed table in `docs/architecture.md`, warn that it will show up in diffs, and recommend gitignoring it as a follow-up rather than doing it here.
- **shadcn-derived atoms carry placeholder metadata.** The 12 atoms produced by `scripts/convert-shadcn.ts` have `{Name}.types.ts` of the form `export type XProps = Record<string, unknown>;`, generated one-line descriptions, and generated stories. Document that these are conversion output and that hand-authored components should not copy that shape.

### 1.6 Nested `AGENTS.md` audit

| File | Content | Verdict |
| --- | --- | --- |
| `apps/showcase/AGENTS.md` | Only the `<!-- BEGIN:nextjs-agent-rules -->` … `<!-- END:nextjs-agent-rules -->` block. Written and re-added automatically by `next dev`. | Machine-generated. Contains zero JabKit-local instruction. **Add a short JabKit section outside the marker pair**, covering only genuinely showcase-local facts: the `@/*` → `packages/ui/src/*` alias, `public/r/` being generated, the gitignored preview manifest, and preview-route theming. Never edit inside the markers. |
| `apps/showcase/CLAUDE.md` | `@AGENTS.md` plus a duplicate of the generated block. | Leave alone. It is a pointer file plus regenerated content. |
| `.shadcn-src/AGENTS.md`, `.shadcn-src/CLAUDE.md` | Same generated Next.js block, inside the vendored shadcn snapshot. | Leave alone. `.shadcn-src` is a vendored source snapshot excluded from biome (`biome.json` `!.shadcn-src`). Note its purpose in `docs/architecture.md` instead. |
| `templates/AGENTS.snippet.md` | Consumer-project snippet, orphaned (see 1.4.5). | Do not expand. Document in `docs/cli.md` as reference boilerplate that the CLI currently reimplements inline. |

No new nested `AGENTS.md` files will be created. Package-level rules that are not truly local belong at root.

---

## 2. Documents to create and update

Target tree after implementation (matches the issue's target shape; no empty files):

```text
docs/
├── README.md              (new)
├── architecture.md        (new)
├── adding-a-component.md  (updated — corrections in 1.4.1, 1.4.2)
├── design-system.md       (new)
├── theming.md             (new)
├── registry.md            (new)
├── showcase.md            (new)
├── cli.md                 (new)
└── mcp.md                 (new)
```

Also updated: `AGENTS.md` (root, rewritten as a router), `README.md` (stale status paragraph corrected), `apps/showcase/AGENTS.md` (short local section appended outside the generated markers).

`docs/decisions/` will **not** be created. The issue permits establishing the convention but forbids manufacturing ADRs for rationale that cannot be verified, and no decision record in this repository can be reconstructed with confidence from code or commit history. `docs/README.md` will note in one sentence that ADRs may be added under `docs/decisions/` when a real decision needs recording.

### 2.1 `docs/README.md` — index and task router

- One-paragraph statement of what JabKit is and that repository code is authoritative when docs disagree.
- Table: document → what it answers → when to read it.
- **Task-routing table**, the highest-value section. Rows: "adding or changing a component" → `adding-a-component.md` then `design-system.md`; "changing a color, token, or dark-mode behavior" → `theming.md`; "changing registry output, metadata fields, or the build" → `registry.md`; "changing showcase routes, previews, or samples" → `showcase.md`; "changing consumer install behavior" → `cli.md`; "changing agent-facing catalogue endpoints" → `mcp.md`; "understanding the whole system first" → `architecture.md`.
- Ownership map: one line per workspace, mirroring the table in 1.1, each linking to the deeper doc.
- Where agents start: root `AGENTS.md` → this file → the task-specific doc.
- Relationship between root docs, the generated nested `AGENTS.md` files, GitHub issues, and implementation, including the rule that documentation updates ship in the same PR as the behavior they describe.
- One sentence on the `docs/decisions/` convention.

### 2.2 `docs/architecture.md`

- Monorepo layout with the workspace table from 1.1 (concrete paths, package names, one-line responsibility each).
- Dependency direction, stated as rules and shown as a Mermaid `graph LR`: `packages/tokens` → `packages/ui` → `packages/build-registry` (build-time read) → `apps/showcase/public/r` → `apps/showcase` and → `packages/cli` → consumer project. Explicit non-edges: `packages/ui` never imports from `apps/*`; atoms never import marketing or dashboard; marketing and dashboard never import each other.
- The six-stage source → registry → showcase → consumer flow from 1.3, as prose plus a Mermaid `flowchart`.
- **Generated vs source-controlled**, as a table: `apps/showcase/public/r/*.json` (generated, committed, never hand-edited), `apps/showcase/lib/preview-manifest.generated.ts` (generated, gitignored), `apps/verify/src/components/jabkit/**` (generated by CLI, gitignored), `.jabkit/` (gitignored), everything under `packages/ui/src` (source).
- Path aliasing, including the showcase's `@/*` → `packages/ui/src/*` surprise.
- Tooling: turbo task graph (`turbo.json`), biome as the single lint+format tool with its exclusions, husky hooks, commitlint, `.nvmrc`/Node 24, and the fact that **there is no CI** so `pnpm check` at the root is the whole gate.
- `.shadcn-src/` explained: a vendored upstream snapshot read by `scripts/convert-shadcn.ts`, excluded from biome, not part of the build.
- "Boundaries not to casually violate": the dependency rules above, no root barrel in `packages/ui`, no hand-editing generated files, no new category outside `atoms`/`marketing`/`dashboard` without changing `build.ts`, `check-conventions.ts` and the showcase's `validCategories` together.

### 2.3 `docs/design-system.md`

- Semantic-token-first styling: allowed class families and the exact hardcoded-color regex enforced by `scripts/check-conventions.ts:7-8`, so readers know precisely what fails.
- Category definitions and what belongs in each, using the descriptions the showcase category page already ships (`apps/showcase/app/[category]/page.tsx`).
- Composition: atoms compose atoms via `registryDependencies`; blocks compose atoms; `hero307` (`registryDependencies: ["button"]`) and `login4` (`["button", "input", "label"]`) as real examples.
- File and naming conventions in brief, deferring the full checklist to `adding-a-component.md` (link, do not duplicate).
- Shared helpers: `@/lib/cn` is the sanctioned import path, why `from "../"` is banned, and how `build.ts` auto-bundles `@/lib/*` into the registry entry as `"lib"` files, which is why helper use must stay inside `packages/ui/src/lib/`.
- Accessibility as actually enforced: the `a11y: { keyboardNav, reducedMotion }` metadata contract, `@storybook/addon-a11y` in the Storybook config, and the `data-slot` convention. State plainly that a11y flags are declared metadata, not automated assertions.
- Responsive expectations, sourced from real component and preview behavior: the desktop/tablet/mobile widths in `ComponentPreview` (`1024px`, `600px`) and the `preview: { layout: "fit", width, height }` metadata used by full-bleed blocks.
- The shadcn-derived-atom caveat from 1.5.

### 2.4 `docs/theming.md`

- Token ownership: `packages/tokens/tokens.css` is the only place `--jk-*` values are defined.
- Semantic mapping: the `@theme inline` block translating `--jk-*` into Tailwind's `--color-*` plus `--radius`, with the full token list.
- Light/dark: `:root` vs `.dark`, and the `@custom-variant dark (&:where(.dark, .dark *))` declaration that makes `dark:` variants class-scoped rather than media-scoped.
- The three importers of `tokens.css` and what each covers (showcase incl. `@source`, verify, Storybook `preview.css`).
- `next-themes` in the showcase: `attribute="class"`, `defaultTheme="system"`, `enableSystem`, `disableTransitionOnChange`, `suppressHydrationWarning` on `<html>`, and the three-way `ThemeToggle` with its `mounted` guard.
- Storybook theming via `withThemeByClassName`.
- **Preview theming, stated as intended contract and current behavior separately.** Current: `?theme=dark` or `story === "ThemeComparison"` applies `.dark` to the preview `<main>`; nothing else propagates the parent theme into the iframe; embeds without a `theme` param render light. Reference `apps/showcase/app/preview/[name]/[story]/page.tsx`, `components/ComponentPreview.tsx`, `components/ScaledFrame.tsx`, `app/components/page.tsx`. Note the separate open theme issue and do not claim a fix.
- Rules a component must follow to stay theme-compatible: semantic classes only, no `dark:` overrides of hardcoded colors, `ThemeComparison` story required, per-component `cssVars` must define both `light` and `dark` or `build.ts` throws (currently no component uses `cssVars` — say so).
- The dead-export drift risk for `packages/tokens/tokens.ts` and `packages/ui/src/lib/theme.ts`.

### 2.5 `docs/registry.md`

- Discovery: `build.ts` reads `packages/ui/src/{atoms,marketing,dashboard}`; a missing category directory is tolerated (`ENOENT` swallowed), a missing `.meta.ts` or `.stories.tsx` throws.
- The metadata contract, field by field, sourced from `packages/build-registry/src/index.ts` rather than restated from memory. Point at the existing field table in `adding-a-component.md` instead of copying it.
- File selection: which extensions become registry files and which are excluded (stories, mocks, meta, preview), and the `component` / `types` / `index` / `lib` typing.
- `@/lib/*` auto-bundling and the "imports missing shared library" failure.
- Example extraction, including the regex constraint and the mislabeling issue from 1.5, with the `button.json` case as the worked example.
- `registryDependencies` (other JabKit component names, resolved recursively by both the CLI and `get_install_plan`) vs `dependencies` (npm packages, installed with `pnpm add`).
- Outputs: `apps/showcase/public/r/{name}.json`, `index.json` (and exactly which fields the index projection keeps), and `apps/showcase/lib/preview-manifest.generated.ts`. Note the directory is `rm -rf`'d each build, so stray files never survive.
- Enforcement: `pnpm registry:verify` = rebuild + `git diff --exit-code -- apps/showcase/public/r`, which is what makes committing generated JSON mandatory. Plus the `scripts/check-conventions.ts` rule list.
- Never hand-edit generated JSON; stories and `.meta.ts` are the source.

### 2.6 `docs/showcase.md`

- Purpose and the showcase-only vs distributable boundary: everything in `apps/showcase/components/` and `apps/showcase/app/` is site chrome and never ships to consumers; only `packages/ui/src` content reaches the registry.
- Route map: `/` (home, driven by `registryIndex()` with hardcoded feature picks `hero307`, the five-name bento list, `button` as theme proof), `/components` (URL-filterable catalogue: `q`, `category`, `tag[]`, `sort`, `dependency=zero`), `/[category]`, `/[category]/[name]`, `/preview/[name]/[story]`, `/samples`, `/samples/saas`, `/mcp`.
- Data access: `lib/registry.ts` reading `public/r` from disk with `process.cwd()`, the deliberate "run pnpm registry:build" error message on a missing index, and `outputFileTracingIncludes` in `next.config.ts`.
- Preview architecture: generated manifest → dynamic import of `{Name}.preview.tsx` → story key lookup with a `Default` fallback → `notFound()` when absent. `preview.layout === "fit"` switches the route from centered to full-bleed.
- Iframe behavior: `ComponentPreview` (preview/code tabs, device widths, local dark toggle, open-in-new-tab) and `ScaledFrame` (`ResizeObserver`-driven `transform: scale` of a fixed 1440×900 viewport). Both mark iframes `aria-hidden`.
- Samples: `app/samples/catalog.ts` as the sample index and `app/samples/saas` composing real registry blocks through the `@/*` → `packages/ui/src/*` alias. Note the alias trap for anyone adding a sample.
- Component detail surfaces mapped back to registry fields (`InstallCommand`, `CopyPromptButton`'s prompt referencing `common/base.ts`'s `DEFAULT_SITE_DOMAIN`, `ComponentData`, dependencies, examples, `cssVars`).

### 2.7 `docs/cli.md`

- Commands and flags exactly as parsed in `packages/cli/src/index.ts`: `init`, `add <name...> [--force] [--dry-run] [--all]`, `upgrade`.
- `jabkit.config.json` shape and defaults, with `apps/verify/jabkit.config.json` as a live example, plus the `JABKIT_REGISTRY` env override precedence.
- What `init` writes: the config, `.github/skills/jabkit-component/SKILL.md`, and an appended `## UI components (JabKit)` section in the consumer's `AGENTS.md` (idempotent by substring check).
- What `add` does, in order: resolve `registryDependencies` depth-first, refuse to overwrite without `--force`, rewrite `@/components/jabkit` and `@/lib/` to the configured alias, write files under `componentsDir`, append merged `cssVars` to `src/app/globals.css` **only if that file exists**, write `.jabkit/manifest.json`, then `pnpm add` the union of npm dependencies.
- What the CLI intentionally does not do: it does not scaffold components inside this monorepo, does not modify installed files after writing them (pristine-install rule), and does not read from the local filesystem registry — it always goes over HTTP.
- Current limitations, stated plainly: `upgrade` is a stub, the manifest's per-component file map is wrong, the package is private with a raw-TS `bin` so `npx jabkit` does not work today, and `tsx packages/cli/src/index.ts` (as in `apps/verify`'s `sync`) is the working local invocation.
- How `apps/verify` uses it as the external-consumer gate.

### 2.8 `docs/mcp.md`

- What it is: `apps/showcase/app/mcp/route.ts`, a read-only JSON HTTP endpoint over registry data. `packages/mcp` currently contributes only the tool-name tuple.
- **Protocol honesty up front:** this is not JSON-RPC and not the MCP wire protocol; it is `POST` with `{ tool, arguments }`. A standard MCP client needs an adapter. Note that `jabkit init`'s closing message overstates this.
- Per-tool reference with arguments, response shape, and limits: `list_components` (optional `category`), `search_components` (`query`, capped at 8 results, matches name/displayName/description/tags), `get_component` (`name`, `withExamples: false` strips examples, 404 when unknown), `get_install_plan` (`names[]`, `targetDir`, recursive `registryDependencies` walk, `filesToCreate`, always-empty `filesToOverwrite`, merged `npmDeps` and `cssVars`, 400 on unknown name), `get_conventions` (static ruleset string map), `get_category_overview` (`category`).
- Relationship to registry data: everything is derived from `public/r/`, so the endpoint is exactly as fresh as the last committed `pnpm registry:build`.
- Expected agent use cases: search by intent → get install plan → run the CLI or write files. Mirrors the flow the showcase home page advertises and the `SKILL.md` the CLI writes.
- Limitations: read-only by design, no auth, no pagination beyond the search cap, `filesToOverwrite` not implemented.

### 2.9 `docs/adding-a-component.md` — targeted corrections

Preserve the structure, tables, and detail. Change only what is wrong or missing:

1. Add `{Name}.preview.tsx` to the path shape in §2 and to the required-file list, with a short worked example (default-export an object keyed by story name; `packages/ui/src/atoms/button/Button.preview.tsx` is the reference).
2. Replace §4 wholesale: the preview is registered by authoring `{Name}.preview.tsx` and running `pnpm registry:build`, which regenerates `apps/showcase/lib/preview-manifest.generated.ts` (gitignored). Remove the hardcoded-switch instructions and the Button-fallback claim.
3. Fix the corresponding "Common failures" rows: a missing preview module fails `pnpm check` with `missing {Name}.preview.tsx`, and an unregistered preview route 404s rather than rendering a Button.
4. Add a note under the stories section that `render:` must be a parenthesized multi-line arrow for the example extractor to pick it up correctly, cross-linking `registry.md`.
5. Cross-link the new docs at the top (`design-system.md` for the why, `registry.md` for what the build does with the files).
6. Leave the MCP/CLI closing notes but link them to `mcp.md` and `cli.md`.

### 2.10 `README.md`

Human front door, kept short. Replace the stale "Implementation status" paragraph with accurate current state (39 components across three categories; the shadcn conversion has run; `.shadcn-src/` is a committed vendored snapshot). Add a pointer to `docs/README.md` and to `AGENTS.md`. Do not turn it into an architecture document.

---

## 3. `AGENTS.md` expansion strategy

Root `AGENTS.md` becomes a **router**, not a knowledge base. Hard budget: roughly 70–90 lines. If a section starts explaining *how* something works rather than *where to look and what not to break*, it belongs in `/docs`.

Planned structure:

1. **What JabKit is** — three sentences, including "source-distributed" and "the repository is the product".
2. **Source of truth** — code wins over docs; `docs/README.md` is the index; generated files are listed and are never hand-edited.
3. **Required reading order** — this file → `docs/README.md` → the task-specific doc → the code the doc points at.
4. **Task routing table** — the same rows as `docs/README.md`'s router, compressed to one line each. This is the section an agent actually uses.
5. **Non-negotiable rules** — the existing eight, corrected to include `{Name}.preview.tsx`, kept verbatim in spirit since they are accurate and battle-tested.
6. **Boundaries** — dependency direction, category rules, no root barrel, showcase-only vs distributable, the `@/*` alias behavior in the showcase.
7. **Validation** — `pnpm check` (and what it comprises), `pnpm registry:build`, `pnpm check:conventions` must run from repo root, no CI exists so the local gate is the gate.
8. **Documentation upkeep** — when behavior changes, the owning doc changes in the same PR; a short list of which change touches which doc.
9. **Working rules** — inspect existing patterns before introducing new architecture, keep changes scoped to the issue, do not add tests unless the issue asks for them.

Explicitly kept out of root `AGENTS.md`: the full component checklist, token tables, registry field reference, CLI flag reference, MCP tool reference. Each is one link away.

---

## 4. Explicit omissions

Not documented, because the repository does not support a confident claim:

- **No CI/CD or release documentation.** No `.github/` directory, no workflows, no publish scripts, no changesets. All packages are `private: true`. `docs/architecture.md` will state this absence as a fact rather than describe a pipeline.
- **No deployment guide.** `common/base.ts` names a domain (`jabkit.joseadrianbuctuanon.dev`) but there is no deployment config, host config, or environment documentation anywhere in the repo.
- **No testing documentation.** There is no test runner, no test files, and no test script. Per the issue, none will be added.
- **No `docs/decisions/` ADRs.** Convention mentioned in `docs/README.md`; no historical records manufactured.
- **No versioning/upgrade-path documentation.** Component `version` fields exist in metadata, but there is no release process and `jabkit upgrade` is a stub.
- **No performance, analytics, SEO, or i18n documentation.** No corresponding implementation.
- **No per-component API reference.** The registry JSON and the showcase detail pages already serve that role; duplicating props into markdown would go stale immediately.
- **`.shadcn-src/` internals** get one explanatory paragraph in `docs/architecture.md` and nothing more; it is a vendored upstream snapshot, not JabKit architecture.

---

## 5. Out of scope

Restating the issue's boundaries so the implementing agent does not drift:

- **No tests.** No unit, integration, E2E, or Storybook test suites. No test infrastructure, no test scripts, no test dependencies. Discovering untested behavior while writing docs is not a reason to write tests.
- **No theme bug fixes.** The preview-iframe theme behavior described in 1.5 belongs to a separate issue. Document the contract and current behavior; change no theming code.
- **No component features.** No new components, no edits to existing components, no metadata changes, no `packages/ui/src` changes of any kind.
- **No registry JSON changes.** `pnpm registry:build` should produce a clean `git diff`. If it does not, that is a pre-existing condition to report, not to absorb into this PR.
- **No fixes for the gaps in 1.5.** The example-extraction mislabeling, the CLI packaging gap, the `.jabkit` manifest bug, the dead exports, and the orphaned `templates/` directory all get documented and, where useful, recommended as follow-up issues. None get fixed here.
- **No unrelated product changes.** This PR is documentation plus `AGENTS.md` plus the corrected `README.md` paragraph.

---

## 6. Suggested PR summary checklist

The final PR description should contain:

- [ ] Summary of the documentation architecture added (the docs tree, and `AGENTS.md`'s new role as router into it).
- [ ] Files created and updated, listed explicitly.
- [ ] Architecture and convention findings from the audit — at minimum: the `{Name}.preview.tsx` + generated preview manifest pipeline, the showcase `@/*` → `packages/ui/src/*` alias, the generated-vs-committed artifact split, the absence of CI, and the dependency-direction rules.
- [ ] Stale documentation found and corrected — the `adding-a-component.md` hardcoded-switch section, its missing required file, and the `README.md` implementation-status paragraph.
- [ ] Areas intentionally left undocumented and why — the list in section 4.
- [ ] Known gaps documented but not fixed, with a suggestion to open follow-up issues — the list in section 1.5.
- [ ] Confirmation that no tests or testing infrastructure were added.
- [ ] Output of `pnpm check`.

---

## 7. Ordered implementation steps

Work on this branch. Commit in logical groups rather than one large commit.

1. **Re-verify before writing.** `pnpm install`, then `pnpm check` from the repo root. This was already run while preparing this plan and **passes cleanly** (`Built registry for 39 components`, `Convention check passed`, empty `git diff` on `apps/showcase/public/r`), so any failure the next agent sees is something they introduced. One caveat: the sandbox ran Node v22.14.0 against an `engines` field of `>=24`, which produces `[WARN] Unsupported engine` lines throughout — harmless here, but `nvm use` is the correct setup.
2. **Write `docs/architecture.md`** first — every other document links into it, and writing it forces the remaining details to surface. Commit.
3. **Write the subsystem docs** in dependency order so cross-links resolve as you go: `docs/registry.md`, `docs/theming.md`, `docs/showcase.md`, `docs/cli.md`, `docs/mcp.md`. Commit as one or two logical groups.
4. **Write `docs/design-system.md`**, deferring to `adding-a-component.md` for the checklist and to `theming.md` for tokens. Commit.
5. **Correct `docs/adding-a-component.md`** per 2.9. Keep the diff surgical; do not reflow untouched prose. Commit separately so the correction is reviewable on its own.
6. **Write `docs/README.md`** last among the docs, once every target exists, so the index and router are accurate. Commit.
7. **Rewrite root `AGENTS.md`** per section 3. Commit.
8. **Update `README.md`**'s stale paragraph and add the docs pointer. Append the short JabKit-local section to `apps/showcase/AGENTS.md` **outside** the `nextjs-agent-rules` markers. Commit.
9. **Verify cross-links.** Every repository-relative link must resolve, and every concrete path cited in a doc must exist. A quick script or `rg` pass over markdown links is sufficient; do not add it to the repo.
10. **Re-run `pnpm check`.** Documentation changes should not affect it, but biome formats markdown and the gate must stay green.
11. **Delete this plan file** (`docs/DOCUMENTATION-PLAN.md`) in the final commit — its content now lives in the real docs and in the PR description.
12. **Update the PR** description to the full summary from section 6 and mark it ready.
