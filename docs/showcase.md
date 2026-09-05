# Showcase

`apps/showcase` (`@jabkit/showcase`) is the public catalogue: browse, preview, copy an install command, and query the registry over HTTP. It is a Next.js 16 App Router app. It is **not** the library.

Everything under `apps/showcase/app/` and `apps/showcase/components/` is site chrome. It never appears in registry JSON and is never copied by the CLI. The only source that reaches consumers is `packages/ui/src`, via the build described in [registry.md](registry.md).

## Data access

`apps/showcase/lib/registry.ts` reads `public/r` from disk using `node:fs` and `process.cwd()`:

- `registryIndex()` → `public/r/index.json`. Throws `"Registry index missing at public/r/index.json — run pnpm registry:build"` if the file is absent.
- `registryEntry(name)` → `public/r/{name}.json`, or `null`.

`apps/showcase/next.config.ts` sets `outputFileTracingIncludes: { "/**": ["./public/r/**"] }` so the JSON is present in a production build, and `typedRoutes: true`.

`dev`, `build`, and `typecheck` in `apps/showcase/package.json` all run `pnpm -w registry:build` first, which regenerates both the committed JSON and the gitignored `lib/preview-manifest.generated.ts`.

## Path alias

`apps/showcase/tsconfig.json` maps `@/*` to `../../packages/ui/src/*`. Imports such as `@/atoms/button` inside the showcase resolve into the library. Showcase-only modules use relative paths. Samples depend on this alias; see below.

## Routes

| Route | File | Role |
| --- | --- | --- |
| `/` | `app/page.tsx` | Marketing home. Driven by `registryIndex()`, with hardcoded feature picks: hero `hero307`, bento `hero228`, `hero230`, `case-studies13`, `compare5`, `code-example14`, theme proof `button`. |
| `/components` | `app/components/page.tsx` | Filterable catalogue. Query params: `q`, `category`, `tag` (repeatable), `sort` (`newest` \| `name`), `dependency=zero`. |
| `/[category]` | `app/[category]/page.tsx` | Category list. `validCategories` is `atoms` \| `marketing` \| `dashboard`; anything else is `notFound()`. Copy on that page is the canonical category description. |
| `/[category]/[name]` | `app/[category]/[name]/page.tsx` | Component detail. 404 if the entry is missing or `entry.category !== category`. |
| `/preview/[name]/[story]` | `app/preview/[name]/[story]/page.tsx` | Isolated iframe document. |
| `/samples` | `app/samples/page.tsx` | Sample index from `app/samples/catalog.ts`. |
| `/samples/saas` | `app/samples/saas/page.tsx` | SaaS landing assembled from registry blocks. |
| `/mcp` | `app/mcp/route.ts` | Read-only JSON endpoint. See [mcp.md](mcp.md). |

## Preview architecture

1. `pnpm registry:build` writes a `previewManifest` keyed by registry `name`, each value a `() => import("@/{category}/{folder}/{Name}.preview")`.
2. The preview route loads `previewManifest[name]`. Missing name → `notFound()` (not a Button fallback).
3. The module's default export is `Record<string, () => ReactNode>` (see `apps/showcase/lib/preview.ts`). The route uses `previews[story] ?? previews.Default`. Missing render → `notFound()`.
4. `entry?.preview?.layout === "fit"` drops the centered padding and lets the block fill the frame; otherwise the route is `grid place-items-center`.
5. Theme on this route is independent of the showcase `ThemeProvider`. See [theming.md](theming.md).

Reference preview module: `packages/ui/src/atoms/button/Button.preview.tsx`.

## Iframes

`apps/showcase/components/ComponentPreview.tsx` (detail page):

- Tabs: preview | code (`SourceViewer`).
- Device widths: desktop unconstrained, tablet `1024px`, mobile `600px`.
- Frame height: `preview.height` (default 900) for `layout: "fit"` on desktop; 1024 / 844 for tablet / mobile; `440` for non-fit (atoms).
- Local dark toggle rewrites `src` to `/preview/{name}/{story}?theme=light|dark`.
- New-tab link uses the same URL.
- Iframe is `aria-hidden`.

`apps/showcase/components/ScaledFrame.tsx` (home, catalogue tiles for `layout: "fit"`):

- Renders an iframe at a fixed `viewportWidth` × `viewportHeight` (defaults 1440 × 900 from meta, or those numbers when meta omits them).
- `ResizeObserver` sets `transform: scale(...)` with origin top-left so the full-bleed block shrinks into the tile.
- Also `aria-hidden`.

Non-fit catalogue tiles use a plain iframe at `/preview/{name}/Default` with no `theme` param.

## Component detail surfaces

`app/[category]/[name]/page.tsx` maps registry fields onto chrome:

| UI | Source |
| --- | --- |
| Title, version, description | `displayName`, `version`, `description` |
| `InstallCommand` | `npx jabkit add {name}` (and pnpm dlx / bunx). See [cli.md](cli.md) for what that command actually does today. |
| `CopyPromptButton` | Prompt that fetches `https://{DEFAULT_SITE_DOMAIN}/r/{name}.json`. Domain is `apps/showcase/common/base.ts` (`jabkit.joseadrianbuctuanon.dev`). Skill command `/jabkit-component {name}`. |
| `ComponentPreview` | iframe + `files[]` for the code tab |
| `ComponentData` | `name`, `category`, `version`, `addedAt`, `a11y`, `tags`. Type is `"component"` for atoms, `"block"` otherwise. |
| Dependencies list | `dependencies` (npm). `registryDependencies` are not shown on this page. |
| Examples | `examples[]` extracted from stories. |
| CSS variables card | Only if `cssVars` is present (currently never). |

## Samples

`app/samples/catalog.ts` is the index. Today there is one ready sample: `/samples/saas`.

`app/samples/saas/page.tsx` imports real library components through the showcase `@/*` alias (`@/atoms/button`, `@/marketing/hero-section-5`, `@/dashboard/chart-group14`, …) and feeds them copy from `app/samples/saas/content.ts`. That page is showcase-only composition. Adding a sample means adding a route and a catalog entry, not a registry component.

Because of the alias, do not invent `@/components/...` paths inside the showcase for library code. Import from `@/atoms|marketing|dashboard/...`.

## Site chrome

`SiteHeader` (sticky, mobile burger, `ThemeToggle`) and `SiteFooter` wrap marketing routes. The header's GitHub anchor is currently `https://github.com` with no repo path.

Preview routes do not render the header; they are a blank document for the iframe.
