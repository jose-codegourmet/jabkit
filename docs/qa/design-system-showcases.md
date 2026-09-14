# Design-system showcase QA

Living process for [SH-07](https://github.com/jose-codegourmet/jabkit/issues/193) plus the dated [SH-01](#design-system-showcase-baseline-sh-01) gate snapshot. Durable contracts stay in [showcase.md](../showcase.md), [theming.md](../theming.md), and [previews.md](../previews.md).

Copy the [evidence template](#evidence-template) into every `-12` release PR. Defining this process does not replace a filled review. An attractive screenshot alone does not complete a site.

# SH-07 — Full-site review and catalogue capture

Manual browser review of a **finished sample website**, plus optional committed catalogue-cover files. It uses existing commands (`pnpm check`, showcase production build, Chrome/Safari DevTools). It does **not** add a second test framework and does **not** feed `pnpm previews:build`.

This ticket ([#193](https://github.com/jose-codegourmet/jabkit/issues/193)) ships the process and the SaaS mapping. It does not run a visual QA pass and does not commit cover images.

## Tooling

| Use | Tool |
| --- | --- |
| Correctness gate | `pnpm check` from the repo root on Node `>=24` |
| Production server | `pnpm --filter @jabkit/showcase build` then `pnpm --filter @jabkit/showcase start` |
| Viewport, zoom, reduced motion, network | Desktop browser DevTools |
| Lab LCP / CLS | Lighthouse (or DevTools Performance) on that production server, mobile profile |
| Component catalogue stills | `pnpm previews:build` only when library preview stories change. Never for sample pages |

Do not extend Playwright preview capture to sample routes. Do not invent a visual-regression suite for this roadmap.

## When a site is ready

A sample may flip to `ready` in `catalog.ts` only after:

1. SH-01 gate: `pnpm check` and a showcase production build pass on the combined change.
2. This checklist is filled for every listed route, with PASS or a linked follow-up.
3. Accessibility and broken-flow rows are PASS. Those cannot be waived.
4. Performance meets the targets below, or a reviewer records an exception **and** a remediation issue.
5. Catalogue cover evidence shows the **implemented** homepage, not an AI mock of it.

Failures that block readiness: missing listed route, unusable keyboard path, contrast fail on body or controls, overlay that does not return focus, broken deep link, 200% zoom that clips primary actions with no alternative, image failure that leaves a layout hole with no reserved space or fallback.

Waivable only with a linked issue: lab LCP or CLS over target; image bytes over an SH-04 budget with `budgetException`; 44px target misses that still have a keyboard equivalent.

## Capture versus component previews

| Artifact | Location | Producer | Hashed by `previews:verify`? |
| --- | --- | --- | --- |
| Component still / GIF | `apps/showcase/public/previews/` | `pnpm previews:build` | Yes |
| Preview story iframe | `/preview/{name}/{story}` | Next route + generated manifest | No (runtime) |
| Higgsfield photography | `public/assets/design-systems/<system>/` | SH-04 / `-03` | No (`check:design-system-assets`) |
| Catalogue cover / review shots | Same folder as `kind: "browser-capture"`, or PR attachments | Human browser screenshot of the running site | No |

AI images are **inputs** to the page. Catalogue covers must show the actual website after fonts and images have settled, with fixture data and overlays left intentionally open or closed.

Record on every capture: **route**, **viewport (CSS px)**, **theme** (`light` / `dark` / `system`), **commit SHA**, **capture date** (ISO date).

Wait until webfonts and in-view images have decoded. Do not screenshot a loading skeleton as the cover.

## Catalogue covers and SH-02

`/samples` currently renders text cards (design-system label, brand, description, Ready/Soon). It does **not** render a cover image. `SampleEntry` has no cover field.

Do **not** add `cover`, `coverSrc`, or similar to `catalog.ts` until a change that actually paints the image on the index (coordinate with SH-02 / the `-12` ticket that wants a visual card). A metadata field with no renderer is dead API.

When a release ticket does render a cover:

1. Capture the implemented homepage at **1440 CSS px**, **light**, overlays closed, after settle.
2. Optimize to WebP (same Sharp path as SH-04: rotate, quality 82, no animation). Target `deliveryRole: "hero"` (≤300KB) unless `budgetException` explains the overage.
3. Commit `apps/showcase/public/assets/design-systems/<system>/catalogue-cover.webp`.
4. Add a provenance row: `id: "catalogue-cover"`, `kind: "browser-capture"`, `model: "browser"`, `jobId: null`, `outputUseRights: "browser-capture"`, `provider` such as `browser`. Prompt may describe the capture setup; do not invent a Higgsfield job.
5. Export the row from `app/samples/<system>/assets.ts` via `toSampleAsset`.
6. Point the index (or OG image) at `assets["catalogue-cover"].src`.

SaaS is not a `DesignSystemId`. Do not create `public/assets/design-systems/saas/` for this process. Quarry review shots stay on the PR.

## Viewports and environments

Review every listed route at **320, 390, 768, and 1440** CSS pixels, **light and dark**. Also:

| Check | How |
| --- | --- |
| Keyboard | Tab through DemoBar, business nav, primary CTAs, forms, overlays. Visible focus on every control. Escape closes overlays. |
| 200% zoom | Browser zoom at 1440 CSS px (or 1280×800 at 200%). Primary heading and primary CTA remain usable without sideways trap. |
| Reduced motion | `prefers-reduced-motion: reduce`. Hero video/marquee stop or pause; content visible without waiting on animation. |
| Image failure | DevTools → disable images, or break one `src`. Reserved space, alt, or textual fallback. No collapsed hero. |
| Deep links | Open each listed path and hash in a new tab. Back/forward. Unknown detail slugs 404 usefully. |
| Touch | One real phone or tablet browser **when available**. Name OS, browser, and viewport. If none is available, write `N/A` and the reason. Do not fake a device name. |

Overlays: capture **closed** (default cover) and **open** (review evidence) as separate files. Include at least one portal (dialog, menu, tooltip) where the page has one. Confirm focus returns to the trigger on close.

## Accessibility rows (required)

Mark each PASS / FAIL / N/A. FAIL needs an issue link.

| Check | Pass means |
| --- | --- |
| Text contrast | Body and captions meet WCAG AA against the section background in both themes. |
| Control contrast | Buttons, inputs, and focus rings are distinguishable. No ghost CTA on a matching background. |
| Visible focus | Keyboard focus is visible on DemoBar, sample nav, and overlays. |
| Target size | Interactive targets prefer 44px CSS. Smaller hits need a linked defect or an explicit reviewed exception. |
| Headings | One meaningful `h1` per page. Heading levels do not skip. |
| Landmarks | `main` (or skip-to-sample `#top`) and labelled `nav` exist. DemoBar skip link works. |
| Reading order | DOM order matches visual order at 320 and 1440. |
| Live status | `aria-expanded`, `aria-pressed`, and any `aria-live` match the UI. No silent status-only-in-color. |
| Portal focus return | After closing a portal, focus returns to the control that opened it. Stacking and Escape still work. |

## Performance (lab, not a field guarantee)

Measure a **production** build, not `next dev`.

```bash
pnpm --filter @jabkit/showcase build
pnpm --filter @jabkit/showcase start
```

Record the URL (usually `http://127.0.0.1:3000/...`). Use Lighthouse **mobile** (Moto G Power / default mobile throttling, or name the profile you used).

| Route | Target |
| --- | --- |
| Home (`/samples/<slug>`) | LCP ≤ 2.5s, CLS ≤ 0.1 |
| Heaviest secondary | Same. If the site is a single page, measure the catalogue return (`/samples`) instead of inventing a route. |

Also record:

- LCP element (image, heading, video poster).
- Initial image payload: bytes of requests started in the first viewport vs later (lazy / below-fold). Compare Higgsfield files to SH-04 budgets (`hero` 300KB, `content` 180KB, `texture` 60KB).
- Whether `loading="lazy"` / `priority` matches that split.

Lab numbers are evidence, not a production SLO.

## SaaS mapping (process check, not a filled review)

The process must work on the existing Quarry sample without changing preview semantics.

| Field | Quarry (`/samples/saas`) |
| --- | --- |
| Listed routes | `/samples/saas` only. Hashes: `#top`, `#instrument`, `#signals`, `#customers`, `#board`, `#company`, `#help`, `#start`. |
| Heaviest secondary | None. Measure `/samples/saas` as home and `/samples` as the return surface. |
| Demo chrome | `DemoBar` (All samples, Components, skip to `#top`, theme fieldset). Business footer is on the page. |
| Overlays | Hero mobile menu (in-page). `Faq12` accordion (`aria-expanded`). `ChartGroup14` “Custom range” `Dialog` (portal). |
| Cover field | Do not add. `/samples` is text-only; SaaS is not a design-system asset id. |
| Preview pipeline | Do not capture this page with `previews:build`. |

Known items a later filled review must score rather than ignore: `ThemeToggle` buttons are `size-7` (28px), below the 44px preference; hero still accepts a remote video URL and (in current fixtures) a remote poster. File or link defects; do not treat them as PASS because the screenshot looks fine.

# Evidence template

Copy from here to the release PR. Replace placeholders. Every Result cell is `PASS`, `FAIL`, or `N/A`.

```md
## Full-site review (SH-07)

| Field | Value |
| --- | --- |
| Sample | brand / slug |
| PR | |
| Commit | |
| Date | |
| Reviewer | |
| Node / pnpm | |
| Production URL | |
| Lighthouse profile | |
| Touch environment | device, OS, browser **or** N/A + reason |

### Route inventory

| Route | Kind | Result | Notes / evidence |
| --- | --- | --- | --- |
| /samples/<slug> | home | | |
| /samples/<slug>/... | secondary | | |
| unknown detail | 404 | | |

### Viewport and theme

Repeat per listed route. CSS pixels. Light and dark via the sample theme control (root `ThemeProvider`).

| Viewport | Light | Dark | Evidence (route, theme, commit, date) |
| --- | --- | --- | --- |
| 320 | | | |
| 390 | | | |
| 768 | | | |
| 1440 | | | |

| Check | Result | Evidence |
| --- | --- | --- |
| Keyboard | | |
| 200% zoom | | |
| Reduced motion | | |
| Image failure | | |
| Deep links + history | | |
| Touch (named device) | | |

### Overlays

| Overlay | Closed capture | Open capture | Escape | Focus return | Result |
| --- | --- | --- | --- | --- | --- |
| | | | | | |

### Accessibility

| Check | Result | Issue if FAIL |
| --- | --- | --- |
| Text contrast | | |
| Control contrast | | |
| Visible focus | | |
| 44px preferred targets | | |
| Headings | | |
| Landmarks | | |
| Reading order | | |
| Live status | | |
| Portal focus return | | |

### Images

| Slot | Src | Bytes | Budget / lazy? | Result |
| --- | --- | --- | --- | --- |
| | | | | |

### Performance (production, mobile lab)

| Route | LCP | CLS | LCP element | Result |
| --- | --- | --- | --- | --- |
| home | | | | ≤2.5s / ≤0.1 |
| heaviest secondary | | | | |

### Catalogue cover

| Field | Value |
| --- | --- |
| Rendered on `/samples`? | yes / no (if no, do not add a catalog field) |
| File | `/assets/design-systems/<system>/catalogue-cover.webp` or PR attachment |
| Provenance | `browser-capture` / n/a |
| Shows implemented UI? | |

### Follow-ups

| Issue | Blocks ready? | Notes |
| --- | --- | --- |
| | yes / no | |

Ready: **yes / no**. If no, do not set `status: "ready"`.
```

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
| This-PR verification | Node v24.21.0, pnpm 11.24.0: `pnpm check` green; `pnpm --filter @jabkit/showcase build` Next.js 16.3.3, 10 routes |

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

## After this baseline

West Room Studio (`/samples/minimal`) and Good Noise (`/samples/neo-brutalism`) are additional ready samples. The SH-01 matrix above stays as the dated snapshot. Imagery for those sites still uses SH-04 empty provenance plus local vendor stubs until MIN-03 / NEO-03 (Jose owns series production via #260).

## Handoff

Planning, content, and asset work can proceed. Publishing a **ready** new sample still requires this gate: `pnpm check` and a showcase production build. Do not add further sample sites in this change.
