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
| `/samples` | `app/samples/page.tsx` | Sample index from `app/samples/catalog.ts`. Ready entries link; pending entries are not wrapped in `Link`. |
| `/samples/saas` | `app/samples/saas/page.tsx` | SaaS landing assembled from registry blocks. Demo chrome is `saas/layout.tsx`. |
| `/samples/minimal` | `app/samples/minimal/page.tsx` | West Room Studio. Work index, six project details, studio, services, local inquiry. Demo chrome is `minimal/layout.tsx`. |
| `/samples/draft` | `app/samples/draft/page.tsx` | Unpublished DemoBar check. Omitted from the catalogue. |
| `/samples/scope-reference` | `app/samples/scope-reference/page.tsx` | Scoped token/typography/portal reference. Not a catalogue sample. |
| `/samples/conventions` | `app/samples/conventions/page.tsx` | SH-06 contract route: fixtures, URL filters, demo form. Not a catalogue site. |
| `/samples/conventions/[slug]` | `app/samples/conventions/[slug]/page.tsx` | Canonical fixture detail; unknown slugs 404. |
| `/design-systems` | `app/design-systems/page.tsx` | Design-system directions index. Static so it is not captured by `/[category]`. |
| `/mcp` | `app/mcp/route.ts` | Read-only JSON endpoint. See [mcp.md](mcp.md). |

SH-01 dated gate, SH-07 full-site review template, and catalogue-cover rules: [qa/design-system-showcases.md](qa/design-system-showcases.md). Every `-12` release PR copies that template. Whole-site shots are not `pnpm previews:build` output.

## Preview architecture

1. `pnpm registry:build` writes a `previewManifest` keyed by registry `name`, each value a `() => import("@/{category}/{folder}/{Name}.preview")`.
2. The preview route loads `previewManifest[name]`. Missing name → `notFound()` (not a Button fallback).
3. The module's default export is `Record<string, () => ReactNode>` (see `apps/showcase/lib/preview.ts`). The route uses `previews[story] ?? previews.Default`. Missing render → `notFound()`.
4. `entry?.preview?.layout === "fit"` drops the centered padding and lets the block fill the frame; otherwise the route is `grid place-items-center`.
5. Theme on this route is independent of the showcase `ThemeProvider`. See [theming.md](theming.md).
6. The route-owned `<main>` exposes `data-preview-stories` (the actual default-export keys) and `data-preview-ready`. The capture pipeline reads these attributes instead of inferring story names from an HTTP response.

Reference preview module: `packages/ui/src/atoms/button/Button.preview.tsx`.

## Iframes

`apps/showcase/components/ComponentPreview.tsx` (detail page):

- Tabs: preview | code (`SourceViewer`).
- Device widths: desktop unconstrained, tablet `1024px`, mobile `600px`.
- Frame height: `preview.height` (default 900) for `layout: "fit"` on desktop; 1024 / 844 for tablet / mobile; `440` for non-fit (atoms).
- Local dark toggle rewrites `src` to `/preview/{name}/{story}?theme=light|dark`.
- New-tab link uses the same URL.
- Iframe is `aria-hidden`.

`ScaledFrame.tsx` no longer exists. The home page and `/components` use the server-rendered `PreviewImage` component, which reads the committed preview manifest and renders a local `/previews/{file}` still WebP (or GIF when `preview.capture.format` is `"gif"`) instead of an iframe. Reduced-motion visitors receive the still. Button's home theme-proof strip selects its corresponding light or dark capture.

`apps/showcase/public/previews/` contains the generated WebPs and `manifest.json`; `apps/showcase/public/assets/` contains re-hosted component images and `sources.json`. Design-system sample photography lives under `public/assets/design-systems/` with a separate provenance contract. See [previews.md](previews.md).

`ComponentPreview.tsx` is deliberately unchanged and remains a live iframe surface on the component detail page, retaining its device sizing, local theme toggle, and new-tab link.

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

`app/samples/catalog.ts` owns the index metadata and the sample-root route contract. Allowed roots are `/samples/saas` plus the five planned design-system sites: `minimal`, `neo-brutalism`, `editorial`, `luxury`, and `retro`. A ready entry’s `href` must pass `linkedSampleHref`, which only accepts `implementedSampleHrefs` (a subset of those roots). Paths outside the sample roots, or planned roots not yet on the implemented list, fail typecheck without an `as Route` assertion. Showcase `tsc --noEmit` does not load Next’s generated route union, so the implemented-href allowlist is the static contract; `Link` still uses typedRoutes at the call site. Pending entries have no `href` and must not be wrapped in `Link`. Collection completion is not required; one site can become ready on its own after its release ticket.

Ready samples are `/samples/saas` (Quarry) and `/samples/minimal` (West Room Studio). The other four design-system sites appear on `/samples` as non-linked “Soon” cards until their release tickets. Index cards are text only (label, brand, description, status). There is no catalogue-cover field on `SampleEntry` until a change actually renders one. `/samples/draft` exists only to exercise shared demo chrome and is omitted from the catalogue. `/samples/conventions` is the SH-06 contract route and is also omitted from the catalogue.

`apps/showcase/components/samples/DemoBar.tsx` is the shared sample chrome: current design-system name, fictional-brand notice, All samples, Components, skip-to-sample (`#top`), and the existing `ThemeToggle` (root `ThemeProvider` only). It sits in document flow above the sample (`z-0`, not sticky or fixed) so it does not cover business navigation. Each site keeps its own nav and footer in its route layout or page. SaaS uses `app/samples/saas/layout.tsx` for the bar and keeps Quarry’s footer on the page.

`/samples/scope-reference` is a SH-03 engineering surface, not a catalogue entry. It wraps JabKit atoms in `SampleScope` (`apps/showcase/components/samples/SampleScope.tsx`) so each design-system id can apply scoped tokens, fallback typography, and a portal container without mutating `document.documentElement` on route mount. Query `?system=` is allowlisted to `minimal`, `neo-brutalism`, `editorial`, `luxury`, and `retro`.

`app/samples/saas/page.tsx` imports real library components through the showcase `@/*` alias (`@/atoms/button`, `@/marketing/hero-section-5`, `@/dashboard/chart-group14`, …) and feeds them copy from `app/samples/saas/content.ts`. That page is showcase-only composition. Adding a released sample means adding its root route, flipping the catalog entry to `ready` with `linkedSampleHref(...)`, and composing pages under `app/samples/<system>/`. It is not a registry component.

Because of the alias, do not invent `@/components/...` paths inside the showcase for library code. Import from `@/atoms|marketing|dashboard/...`. Showcase-only modules (DemoBar, SampleScope, SH-06 helpers, catalog, sample layouts) use relative imports.

Sample-site photography is not Unsplash. Each design-system sample owns `app/samples/<system>/assets.ts` and `public/assets/design-systems/<system>/`. Those maps stay empty until the matching `-03` Higgsfield ticket. West Room Studio (`/samples/minimal`) is otherwise complete; it still uses SH-04 empty provenance plus existing local vendor stills as stubs until MIN-03 / issue #260. See [previews.md](previews.md).

### Content, navigation, and demo state (SH-06)

Shared behavior for the five planned sites. Layout and business copy stay in each `app/samples/<system>/` tree. Only repeated helpers belong in `components/samples/`.

**Fixtures.** Plain typed records (`id`, `slug`, `kind`, `title`, `summary`, optional local `image.src` under `/assets/...`). Copy lives in `content.ts`, not JSX. Details and summaries read the same canonical object. Unknown slugs call `notFound()`. Empty lists use `sampleEmptyCopy.noMatches` plus a reset link.

**Navigation and CTAs.** Each site owns its nav and footer. A CTA is a real route, a local action (form preview, in-memory favorite), or a disabled control with a visible reason. Do not use `href="#"` as a fake completed action. In-page hashes are allowed only when the target exists on that page.

**URL state.** Allowlisted keys: `filter`, `q`, `project`, `room`, `plan`. Parse with `parseAllowlistedQuery`. Unknown keys are dropped. Invalid `filter` values become `all`. Preselect IDs must match a fixture of the matching kind; unknown IDs are ignored and must not be interpolated into headings or `href`s. Build links with `sampleHref` so only validated values are serialized. Back/forward and direct links are ordinary query strings.

**Demo forms.** `DemoPreviewForm` is the reference: JabKit Label/Input/Textarea/Button, native `required` / `type="email"`, inline errors, focus on the first `:invalid` field, retained values on Edit, Reset back to an empty draft. Status is `draft` | `invalid` | `preview` | `reset` with a live region. Confirmation copy is “Preview prepared. Demo only.” Never claim an email was sent, a subscription started, or a room reserved. No fake server delay, consent-checkbox theater, analytics SDK, auth, or payment.

**Lifetime.** Form values and visit favorites are in-memory React state. Reload or leaving the route clears them. Do not persist personal data. Pocket Keeps’ local file download remains the only real download exception called out in the roadmap.

Contract surface (not a branded sample): `/samples/conventions`.

## Site chrome

`SiteHeader` (sticky, mobile burger, `ThemeToggle`) and `SiteFooter` wrap marketing routes. The header's GitHub anchor is currently `https://github.com` with no repo path.

Chrome stories (`components/*.stories.tsx`) and `.storybook/` are excluded from `apps/showcase/tsconfig.json`. They are not Next.js app modules; `next build` must not type-check `@storybook/nextjs-vite`.

Preview routes do not render the header; they are a blank document for the iframe.
