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

## Independent design-system websites

The five complete design-system sites now live in `apps/minimal`, `apps/neo-brutalism`, `apps/editorial`, `apps/luxury`, and `apps/retro`, with local routes rooted at `/`. They no longer compile as showcase pages. `/design-systems` remains the directory; its links use the origins in `common/design-system-sites.ts` (localhost ports in development, live `*.jabkit.joseadrianbuctuanon.dev` hosts in production). Old design-system/sample prefixes redirect temporarily to those origins. See [standalone apps](standalone-design-systems.md) for environment variables, ports, asset ownership, and deployment.

## Routes

| Route | File | Role |
| --- | --- | --- |
| `/` | `app/page.tsx` | Marketing home. Driven by `registryIndex()`, with hardcoded feature picks: hero `hero307`, bento `hero228`, `hero230`, `case-studies13`, `compare5`, `code-example14`, theme proof `button`. |
| `/components` | `app/components/page.tsx` | Filterable catalogue. Query params: `q`, `category`, `tag` (repeatable), `sort` (`newest` \| `name`), `dependency=zero`. |
| `/[category]` | `app/[category]/page.tsx` | Category list. `validCategories` is `atoms` \| `marketing` \| `dashboard`; anything else is `notFound()`. Copy on that page is the canonical category description. |
| `/[category]/[name]` | `app/[category]/[name]/page.tsx` | Component detail. 404 if the entry is missing or `entry.category !== category`. |
| `/preview/[name]/[story]` | `app/preview/[name]/[story]/page.tsx` | Isolated iframe document. |
| `/samples` | `app/samples/page.tsx` | Product-sample index from `app/samples/catalog.ts`. Ready entries link; pending entries are not wrapped in `Link`. |
| `/samples/saas` | `app/samples/saas/page.tsx` | SaaS landing assembled from registry blocks. Demo chrome is `saas/layout.tsx`. |
| `/samples/draft` | `app/samples/draft/page.tsx` | Unpublished DemoBar check. Omitted from the catalogue. |
| `/samples/scope-reference` | `app/samples/scope-reference/page.tsx` | Scoped token/typography/portal reference. Not a catalogue sample. |
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

`apps/showcase/public/previews/` contains the generated WebPs and `manifest.json`; `apps/showcase/public/assets/` contains re-hosted component images and `sources.json`. Design-system photography now lives under each independent app’s `public/assets/design-systems/` with a separate provenance contract. See [previews.md](previews.md).

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

`/samples` and `/design-systems` are separate catalogues. `app/samples/catalog.ts` owns product-sample metadata. The only ready sample is `/samples/saas` (Quarry). A ready entry’s `href` must pass `linkedSampleHref`, which only accepts `implementedSampleHrefs`. Paths outside those roots fail typecheck without an `as Route` assertion. Showcase `tsc --noEmit` does not load Next’s generated route union, so the implemented-href allowlist is the static contract; `Link` still uses typedRoutes at the call site. Pending entries have no `href` and must not be wrapped in `Link`.

`app/design-systems/catalog.ts` owns the five website-language sites. Ready entries use configured external app origins; `isReadyDesignSystem` narrows entries with a usable URL. Index cards on both pages are text only (label, brand, description, status). There is no catalogue-cover field until a change actually renders one. `/samples/draft` exists only to exercise shared demo chrome and is omitted from both catalogues. Former `/samples/{system}` URLs redirect to `/design-systems/{system}`.

### Five-site route inventory (SH-08)

Catalogue closeout for [#254](https://github.com/jose-codegourmet/jabkit/issues/254). Historical closeout before migration: each site used `DemoBar` plus `SampleScope` with its own `data-jk-design-system` id. Current ownership is documented in [standalone apps](standalone-design-systems.md). Brand CSS is CSS modules under that tree; samples do not import each other’s styles. Unknown detail slugs call `notFound()` and have nested `not-found.tsx` files. SH-07 browser crawl, theme-with-popup, lab LCP, catalogue-cover screenshots, and Higgsfield provenance are **Deferred** pending Jose visual QA and [#260](https://github.com/jose-codegourmet/jabkit/issues/260). Accessibility and broken-flow behavior implemented in the site PRs stays as implemented-in-code.

| Site | Root | Secondary routes | Local task | Release |
| --- | --- | --- | --- | --- |
| Minimal — West Room Studio | `/design-systems/minimal` | `/work`, `/work/[slug]` (×6), `/studio`, `/services`, `/contact` | Inquiry preview | [#266](https://github.com/jose-codegourmet/jabkit/pull/266) |
| Neo-brutalism — Good Noise | `/design-systems/neo-brutalism` | `/work`, `/work/[slug]` (×6), `/services`, `/studio`, `/start` | Project brief | [#267](https://github.com/jose-codegourmet/jabkit/pull/267) |
| Editorial — Common Hours | `/design-systems/editorial` | `/stories`, `/stories/[slug]` (×9), `/contributors/[slug]` (×3), `/about`, `/membership` | Membership preview | [#268](https://github.com/jose-codegourmet/jabkit/pull/268) |
| Luxury — Stillwater House | `/design-systems/luxury` | `/rooms`, `/rooms/[slug]` (×3), `/experiences`, `/house`, `/inquire` | Stay inquiry | [#269](https://github.com/jose-codegourmet/jabkit/pull/269) |
| Retro — Pocket Keeps | `/design-systems/retro` | `/collections`, `/collections/[slug]` (×3), `/how-it-works`, `/pricing`, `/studio` | Crop/download studio | [#270](https://github.com/jose-codegourmet/jabkit/pull/270) |

SaaS remains ready at `/samples/saas` (Quarry). Shared enabling work: SH-01–07 in the [#255](https://github.com/jose-codegourmet/jabkit/pull/255)–[#265](https://github.com/jose-codegourmet/jabkit/pull/265) area.

`apps/showcase/components/samples/DemoBar.tsx` is the shared demo chrome: current design-system name, fictional-brand notice, an index link (All samples or Design systems), Components, skip-to-sample (`#top`), and the existing `ThemeToggle` (root `ThemeProvider` only). It sits in document flow above the site (`z-0`, not sticky or fixed) so it does not cover business navigation. Each site keeps its own nav and footer in its route layout or page. SaaS uses `app/samples/saas/layout.tsx` for the bar and keeps Quarry’s footer on the page.

`/samples/scope-reference` is a SH-03 engineering surface, not a catalogue entry. It wraps JabKit atoms in `SampleScope` (`apps/showcase/components/samples/SampleScope.tsx`) so each design-system id can apply scoped tokens, fallback typography, and a portal container without mutating `document.documentElement` on route mount. Query `?system=` is allowlisted to `minimal`, `neo-brutalism`, `editorial`, `luxury`, and `retro`.

`app/samples/saas/page.tsx` imports real library components through the showcase `@/*` alias (`@/atoms/button`, `@/marketing/hero-section-5`, `@/dashboard/chart-group14`, …) and feeds them copy from `app/samples/saas/content.ts`. That page is showcase-only composition. Adding a released product sample means adding its root under `/samples`, flipping the catalog entry to `ready` with `linkedSampleHref(...)`. Adding a design-system site means composing under `app/design-systems/<system>/` and `linkedDesignSystemHref(...)`. Neither is a registry component.

Because of the alias, do not invent `@/components/...` paths inside the showcase for library code. Import from `@/atoms|marketing|dashboard/...`. Showcase-only modules (DemoBar, SampleScope, SH-06 helpers, catalog, sample layouts) use relative imports.

Sample-site photography is not Unsplash. Each design-system site owns `app/design-systems/<system>/assets.ts` and `public/assets/design-systems/<system>/`. See [previews.md](previews.md).

### Content, navigation, and demo state (SH-06)

Shared behavior for the five design-system sites. Layout and business copy stay in each `app/design-systems/<system>/` tree. Only repeated helpers belong in `components/samples/`.

**Fixtures.** Plain typed records (`id`, `slug`, `kind`, `title`, `summary`, optional local `image.src` under `/assets/...`). Copy lives in `content.ts`, not JSX. Details and summaries read the same canonical object. Unknown slugs call `notFound()`. Empty lists use `sampleEmptyCopy.noMatches` plus a reset link.

**Navigation and CTAs.** Each site owns its nav and footer. A CTA is a real route, a local action (form preview, in-memory favorite), or a disabled control with a visible reason. Do not use `href="#"` as a fake completed action. In-page hashes are allowed only when the target exists on that page.

**URL state.** Allowlisted keys: `filter`, `q`, `project`, `room`, `plan`. Parse with `parseAllowlistedQuery`. Unknown keys are dropped. Invalid `filter` values become `all`. Preselect IDs must match a fixture of the matching kind; unknown IDs are ignored and must not be interpolated into headings or `href`s. Build links with `sampleHref` so only validated values are serialized. Back/forward and direct links are ordinary query strings.

**Demo forms.** `DemoPreviewForm` is the reference: JabKit Label/Input/Textarea/Button, native `required` / `type="email"`, inline errors, focus on the first `:invalid` field, retained values on Edit, Reset back to an empty draft. Status is `draft` | `invalid` | `preview` | `reset` with a live region. Confirmation copy is “Preview prepared. Demo only.” Never claim an email was sent, a subscription started, or a room reserved. No fake server delay, consent-checkbox theater, analytics SDK, auth, or payment.

**Lifetime.** Form values and visit favorites are in-memory React state. Reload or leaving the route clears them. Do not persist personal data. Pocket Keeps’ local file download remains the only real download exception called out in the roadmap.

There is no public conventions route. SH-06 helpers are used by the shipped sites and documented here.

## Site chrome

`SiteHeader` (sticky, mobile burger, `ThemeToggle`) and `SiteFooter` wrap marketing routes. The header's GitHub anchor is currently `https://github.com` with no repo path.

Chrome stories (`components/*.stories.tsx`) and `.storybook/` are excluded from `apps/showcase/tsconfig.json`. They are not Next.js app modules; `next build` must not type-check `@storybook/nextjs-vite`.

Preview routes do not render the header; they are a blank document for the iframe.
