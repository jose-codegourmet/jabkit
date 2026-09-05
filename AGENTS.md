# AGENTS.md — JabKit

JabKit is a source-distributed React component library. The repository is the product: components are copied into consumer trees, not consumed as a versioned npm UI package. Every component must be discoverable through the registry and render on semantic tokens in light and dark.

## Source of truth

Code wins when docs disagree. [docs/README.md](docs/README.md) is the index. Generated files are never hand-edited: `apps/showcase/public/r/*.json` (committed after `pnpm registry:build`) and `apps/showcase/lib/preview-manifest.generated.ts` (gitignored, rebuilt automatically).

## Reading order

1. This file (boundaries and routing).
2. [docs/README.md](docs/README.md) (task → document).
3. The one task-specific doc.
4. The paths that doc names. Inspect existing patterns before inventing architecture.

## Task routing

| Task | Doc |
| --- | --- |
| Add or change a component | [docs/adding-a-component.md](docs/adding-a-component.md) then [docs/design-system.md](docs/design-system.md) |
| Color, token, or dark mode | [docs/theming.md](docs/theming.md) |
| Registry JSON, metadata, or builder | [docs/registry.md](docs/registry.md) |
| Showcase routes, previews, samples | [docs/showcase.md](docs/showcase.md) |
| Preview capture pipeline, hosted assets, catalogue images | [docs/previews.md](docs/previews.md) |
| Consumer install (`init` / `add`) | [docs/cli.md](docs/cli.md) |
| Catalogue HTTP tools | [docs/mcp.md](docs/mcp.md) |
| Whole-system map | [docs/architecture.md](docs/architecture.md) |

## Non-negotiable rules

- Use semantic `--jk-*` tokens only. Do not use hardcoded Tailwind colors.
- Categories are `atoms`, `marketing`, and `dashboard`.
- Atoms may depend on other atoms through `registryDependencies`. Atoms never depend on marketing or dashboard. Marketing and dashboard never depend on each other.
- Every component has `{Name}.types.ts`, `{Name}.meta.ts`, `{Name}.preview.tsx`, at least two stories, and a `ThemeComparison` story.
- Every component has a committed preview image. Run `pnpm previews:build -- --name {name}` after adding or changing a component and commit `apps/showcase/public/previews/`. A missing or stale asset fails `pnpm check`.
- Remote media in `packages/ui` is self-hosted under `/assets/...`. Do not add third-party image URLs to component source or mocks; run `pnpm assets:vendor`.
- Stories are the source of registry examples. Generated registry JSON is never edited by hand.
- `apps/showcase/public/r/*.json` is generated and committed. Run `pnpm registry:build` and commit its output with every component add or change.
- Catalogue HTTP tools are read-only. The CLI writes source files into **consumer** projects, not into `packages/ui`.
- An installed component is pristine before any requested local edits are applied.

## Boundaries

- No `packages/ui/src/index.ts` barrel. Discovery is folder-driven.
- `packages/ui` never imports `apps/*`. Showcase chrome never ships to consumers.
- Inside `apps/showcase`, `@/*` maps to `packages/ui/src/*` — `@/atoms/button` is the library.
- Do not add a category without changing `packages/build-registry/src/build.ts`, `scripts/check-conventions.ts`, and showcase `validCategories` together.
- Preview iframes do not inherit the site theme; see [docs/theming.md](docs/theming.md). Do not "fix" that unless the issue is about theming.

## Validation

Run from the **repo root** (`scripts/check-conventions.ts` uses `process.cwd()`):

```bash
pnpm check
```

That is `lint` (Biome) + `typecheck` (Turbo) + `check:conventions` + `registry:verify` (rebuild + `git diff --exit-code` on `apps/showcase/public/r`) + `previews:verify` (hash and file verification for `apps/showcase/public/previews/`). There is no CI. This local gate is the gate.

Also: `pnpm registry:build`, `pnpm storybook`, `pnpm dev`.

## Documentation upkeep

Ship doc updates in the same PR as the behavior they describe.

| If you change | Also update |
| --- | --- |
| Component file contract / checklist | `docs/adding-a-component.md` |
| Tokens, `.dark`, preview theme | `docs/theming.md` |
| Registry build or metadata | `docs/registry.md` |
| Showcase routes or previews | `docs/showcase.md` |
| CLI flags or install writes | `docs/cli.md` |
| `/mcp` tools | `docs/mcp.md` |
| Preview capture pipeline, hosted assets, catalogue images | `docs/previews.md` |
| Workspace layout or generated artifacts | `docs/architecture.md` and `docs/README.md` |

## Working rules

- Keep the change scoped to the issue. Do not bundle unrelated refactors.
- Do not add tests or testing infrastructure unless the issue asks for them.
- Do not invent architecture the code does not support.
