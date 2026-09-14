# Design-system showcase baseline (SH-01)

Dated implementation snapshot for [SH-01](https://github.com/jose-codegourmet/jabkit/issues/187). Recorded after [#255](https://github.com/jose-codegourmet/jabkit/pull/255) and [#256](https://github.com/jose-codegourmet/jabkit/pull/256) merged to `main`. This is evidence, not a second architecture spec. Durable contracts stay in [showcase.md](../showcase.md), [theming.md](../theming.md), [previews.md](../previews.md), [registry.md](../registry.md), and [cli.md](../cli.md).

No new sample sites were added for this ticket.

## Snapshot

| Field | Value |
| --- | --- |
| Date | 2026-09-14 |
| Commit | `0389f66` (`fix(registry): rewrite category aliases for consumer install (#256)`), which includes `#255` |
| Branch | `main`, tree clean at start of this record |
| Node | v24.21.0 (`.nvmrc` / `engines.node` is `>=24`) |
| pnpm | 11.24.0 |
| Registry | 96 components in `apps/showcase/public/r/` |
| CI | `.github/workflows/publish-cli.yml` does not run `pnpm check`. The correctness gate is local. |

## Commands

Re-run from the repository root on Node `>=24`. Distinguishes the pre-fix state on `467b6b7` from the post-merge state on `0389f66`.

| Command | On `467b6b7` (pre-fix) | On `0389f66` (after #255 + #256) |
| --- | --- | --- |
| `pnpm install --frozen-lockfile` | PASS | PASS |
| `pnpm lint` (`biome check .`) | FAIL — Failure A | PASS (non-blocking `noImgElement` warning on `PreviewImage.tsx` remains) |
| `pnpm typecheck` | PASS | PASS |
| `pnpm check:conventions` | PASS | PASS |
| `pnpm registry:verify` | PASS | PASS |
| `pnpm previews:verify` | PASS | PASS |
| `pnpm check` | FAIL at lint | PASS |
| `pnpm --filter @jabkit/showcase build` | PASS (10 routes) | PASS |
| `pnpm --filter @jabkit/verify build` (no sync) | PASS | PASS |
| serve showcase `/r`, then `pnpm --filter @jabkit/verify sync && build` | FAIL — Failure B | PASS (CLI TypeScript source; no npm publish) |

`pnpm typecheck` / `pnpm check` may dirty `apps/showcase/tsconfig.tsbuildinfo`. That file is currently committed; do not fold the dirty incremental artifact into this record. `apps/verify/src/components/jabkit/**` is gitignored generated output.

## Failures A and B (closed)

Both were **pre-existing on `467b6b7`**, not introduced by SH-01 docs. Linked unresolved defects are not a waiver; this ticket closes only because both are merged and the gate is green.

### Failure A — lint formatter — fixed by [#255](https://github.com/jose-codegourmet/jabkit/pull/255)

`biome check .` failed on `apps/showcase/tsconfig.json`: the `exclude` array was one 82-character line; Biome’s 80-column formatter required wrapping. The `PreviewImage` `noImgElement` warning did not fail the gate and was left alone.

### Failure B — consumer install — fixed by [#256](https://github.com/jose-codegourmet/jabkit/pull/256)

`apps/verify` `sync` then `build` failed with `TS2307` on `@/atoms|marketing|dashboard/...` (and `./Pricing28.mocks`) plus cascade `TS7006`. Registry JSON stored category aliases verbatim; the CLI only rewrites `@/components/jabkit` and `@/lib/`. The builder now rewrites category aliases in emitted content, ships `{Name}.mocks.ts` when a shipped file imports it, and merges bare npm imports from bundled lib files into `dependencies`. See [registry.md](../registry.md).

## Route matrix

Showcase production build on this baseline (`pnpm --filter @jabkit/showcase build`):

| Route | Kind | Role |
| --- | --- | --- |
| `/` | static | Marketing home |
| `/_not-found` | static | App 404 |
| `/[category]` | dynamic | `atoms` \| `marketing` \| `dashboard` |
| `/[category]/[name]` | dynamic | Component detail |
| `/components` | dynamic | Filterable catalogue |
| `/design-systems` | static | Directions index (placeholder copy; not captured by `/[category]`) |
| `/mcp` | dynamic | Read-only catalogue HTTP |
| `/preview/[name]/[story]` | dynamic | Isolated iframe document |
| `/samples` | static | Sample index |
| `/samples/saas` | static | Only ready sample |

## Recorded behavior

**SaaS sample.** `apps/showcase/app/samples/catalog.ts` is the index. The only ready sample is `/samples/saas`: showcase-only JSX composition plus `content.ts`, importing library blocks through the showcase `@/*` → `packages/ui/src/*` alias. `SampleEntry.href` currently allows only `/samples/saas`. Do not invent `@/components/...` paths in the showcase for library code.

**Catalogue.** `/components` filters with `q`, `category`, `tag`, `sort` (`newest` \| `name`), `dependency=zero`. `/[category]` and `/[category]/[name]` 404 on unknown or mismatched category. Data is `apps/showcase/lib/registry.ts` reading `public/r` from disk.

**Preview.** `/preview/[name]/[story]` loads the generated `previewManifest`. Missing name or render → `notFound()` (no Button fallback). Theme is `?theme=` plus forced dark for `ThemeComparison`; the iframe **does not** inherit the site `ThemeProvider`. That independence is intentional — do not “fix” it here. Home and `/components` use committed `PreviewImage` captures; the detail page keeps the live iframe. See [theming.md](../theming.md) and [previews.md](../previews.md).

**Registry.** `pnpm registry:build` writes committed `apps/showcase/public/r/*.json` and gitignored `lib/preview-manifest.generated.ts`. Never hand-edit either. Stories are the source of examples.

**Theme.** `apps/showcase/app/layout.tsx` owns `next-themes` `ThemeProvider` and Geist font variables. Token values live in `packages/tokens/tokens.css`. Preview documents are a separate tree.

## Design-systems JSON is authored input, not a runtime

Files under `design-systems/**` (including `tokens.json`, `typography.json`, `components.json`, `patterns.json`, `motion.json`) are **authored specifications**. They are not consumed by the CLI, registry builder, Tailwind, or showcase. There is no JSON-to-theme loader, style flag, or design-system selector. `/design-systems` is a static index page, not a renderer of those files. Adopting a palette is a manual copy into `tokens.css` or a consumer stylesheet, as [design-systems/README.md](../../design-systems/README.md) and [architecture.md](../architecture.md) already state.

## Handoff

Planning, content, and asset work can proceed. Publishing a **ready** new sample still requires this gate: `pnpm check` and a showcase production build. Do not add further sample sites in this change.
