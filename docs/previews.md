# Preview assets

Catalogue previews are committed captures of the real showcase preview route. The home page and `/components` render these files as images; the component detail page keeps its live iframe for device and theme inspection.

## Commands

```bash
pnpm assets:vendor
pnpm previews:build
pnpm previews:build -- --name {name}
pnpm previews:build -- --category marketing
pnpm previews:verify
pnpm check:design-system-assets
```

`assets:vendor` downloads Unsplash and Simple Icons media used by `packages/ui`, converts it to WebP, records the original URL in `apps/showcase/public/assets/sources.json`, and rewrites component source to `/assets/{hash}.webp`. Root-relative URLs work in local development as well as deployment. It does not generate Higgsfield images and must not ingest `design-systems/` files.

Do not add `images.unsplash.com` or `cdn.simpleicons.org` URLs to component source or mocks. To add a hosted image, put the file in `apps/showcase/public/assets/`, add its original-source row to `sources.json`, and use its `/assets/{hash}.webp` URL in `packages/ui`.

`previews:build` starts a local showcase server (or uses `PREVIEW_BASE_URL`) and captures `/preview/{name}/{story}` with Playwright. Hosted `/assets` requests are fulfilled from disk. Generation does not depend on the production host. `--category marketing` rebuilds every marketing registry entry and leaves other categories' manifest rows in place.

`previews:verify` is part of `pnpm check`. It fails when a required asset is missing or its source hash is stale, and it always prints marketing coverage as `component`, `story`, `theme`, `format`, and `status`.

## Still WebP vs animated GIF

Every captured story gets a still WebP. That is enough when the story already shows the state that matters: layout, copy, tabs, accordion contents, hover-equivalent variants, and ThemeComparison.

Use a lightweight animated GIF **in addition to** the still, and only when the component's purpose is time-based motion that a freeze-frame cannot show: autoplay carousels, coverflow, campaign sliders, and CSS marquees that are the primary surface. Do not generate GIF for hover, focus, or click sequences; those belong in named preview stories and the live detail iframe. Do not emit MP4, and do not call paid video-generation APIs.

Opt in from `{Name}.meta.ts`:

```ts
preview: {
  layout: "fit",
  width: 1440,
  height: 900,
  capture: {
    format: "gif",
    gifStories: ["Default"],
    gifFrames: 4,
    gifIntervalMs: 2800,
    gifDelayMs: 700,
  },
}
```

Defaults when `format` is `"gif"`: GIF only the `Default` story, four frames, 700 ms between captures, 400 ms GIF frame delay. Variants stay still. `preview.capture` is build-only metadata and is stripped from registry JSON.

## Capture contract

Each still is named `{name}.{Story}.{theme}.webp`. Each GIF is `{name}.{Story}.{theme}.gif`. Both live in `apps/showcase/public/previews/`. The generated `manifest.json` records the source hash, pipeline version, stories, themes, file name, byte count, rendered dimensions, and format.

Dark is the default theme for every preview story. Button is the exception: it captures both light and dark so the home theme-proof strip can show each state. The capture pipeline reads `data-preview-stories` and `data-preview-ready` from the preview route's outer `<main>`; it never assumes that an HTTP 200 confirms a story because unknown stories fall back to `Default`.

Marketing components must have committed assets for `Default` and `Variants`. ThemeComparison is captured when the preview module exports it; it is not required for GIF.

Still captures use `reducedMotion: "reduce"`, `deviceScaleFactor: 1`, `en-US`, and `UTC`. The browser injects a stylesheet that disables animation and transition, waits for fonts and images to decode, and screenshots the route-owned `<main>`. GIF captures switch to `prefers-reduced-motion: no-preference`, leave animations running, and sample frames on a fixed interval. Hosted assets are served from the local asset directory during capture; video, YouTube, and QR endpoints are blocked so no video files are downloaded.

Catalogue `PreviewImage` prefers the GIF under `prefers-reduced-motion: no-preference` and the still WebP otherwise.

`pnpm previews:verify` is part of the SH-01 correctness gate recorded in [qa/design-system-showcases.md](qa/design-system-showcases.md). Whole-site review shots and catalogue covers are a different pipeline; see [Whole-site catalogue captures (SH-07)](#whole-site-catalogue-captures-sh-07).

Run `pnpm previews:build -- --name {name}` whenever a component changes, then commit the output. `pnpm previews:verify` runs in `pnpm check` and fails if an asset is missing or its source hash is stale.

## Design-system sample images

Jose generates new sample imagery himself in Higgsfield. The coding agent writes prompts and integrates approved supplied outputs; it must not invoke an image generator or spend credits. [PROMPTS_FOR_IMAGES.md](../PROMPTS_FOR_IMAGES.md) is the current production brief, including original logos/wordmarks, CTA artwork, backgrounds, process assets, and the full content series. This supersedes the earlier agent-operated SH-04 workflow.

### Ownership and production

Each website owns `apps/<system>/public/assets/design-systems/<system>/`. Its `app/assets.ts` reads its own provenance JSON through `lib/design-system-assets.ts`. The old showcase asset URLs redirect to the configured standalone site when its origin is supplied. See [standalone apps](standalone-design-systems.md).

Existing WebPs and their provenance move intact. Do not relabel prior MCP-generated images as manual outputs or regenerate already approved assets. The user may deliver new full-quality files separately; retain those masters, optimize approved content derivatives to WebP, and inspect their actual slots before replacing runtime files. Record real dimensions, bytes, crop, alt text, and generation metadata.

The existing photo-manifest gate validates WebP content/texture deliveries. Logo concepts may arrive as PNG and need reviewed SVG geometry/lettering for final brand use; do not shoehorn an SVG into a manifest row claiming it is a WebP. Document the final brand-asset files separately when integrating them. No new logo output is created by the app migration.

### Sources and allowed roles

| Source | Role |
| --- | --- |
| Jose's Higgsfield outputs | Photography, illustration, logo concepts, CTA artwork, backgrounds, and objects from the prompt document |
| Existing Higgsfield MCP outputs | Historical images with their original real provider/job metadata preserved |
| Browser captures | Real implemented UI and catalogue covers, never fake AI-generated screenshots |
| HTML / SVG / typesetting | Final cleaned brand geometry, readable wordmarks, navigation, prices, headings, and clickable CTA controls |
| `assets:vendor` / `sources.json` | Existing library Unsplash/Simple Icons workflow; it does not ingest these Higgsfield assets |
| Pocket Keeps upload | User image processed only in the browser; not sent to Higgsfield |

### Photo provenance contract

`provenance.json` contains `schemaVersion: 1`, the `system` identifier, and `assets`. Types live in each app's `lib/design-system-assets.ts`; the root validator uses the compatible schema in `apps/showcase/lib/design-system-assets.ts` and checks each app's actual files and `app/assets.ts` exports.

| Field | Requirement |
| --- | --- |
| `id` / `fileName` | Kebab-case slot ID and matching `.webp` file |
| `kind` | `higgsfield` for user-supplied manual generations; `higgsfield-mcp` for actual historical MCP runs; `browser-capture` for screenshots |
| `provider` | `Higgsfield`, `Higgsfield MCP`, or the actual browser-capture source, matching the kind |
| `prompt` / `negativeDirection` | Actual prompt and exclusions, not a fabricated reconstruction of an unknown generation |
| `model` | Actual model when known, explicitly `not-recorded` when a manual export lacks that information; `browser` for captures |
| `generatedAt` | Actual known generation date as an ISO timestamp; obtain it from the user if missing rather than invent it |
| `jobId` | Actual UUID for MCP runs. Manual Higgsfield outputs may use `null` when the UI/export supplies no job ID; captures use `null` |
| `width` / `height` / `bytes` | Match the delivered WebP exactly |
| `aspectRatio` | Actual requested/returned ratio |
| `crop` | `focalX`, `focalY` in 0–1 and CSS `objectPosition` |
| `alt` / `role` | Meaningful alternative for `content`; empty alternative for `decorative` |
| `deliveryRole` | `hero` ≤300KB, `content` ≤180KB, `texture` ≤60KB |
| `budgetException` | Explicit rationale for an oversized delivery, otherwise `null` |
| `outputUseRights` | Actual applicable `higgsfield-account-terms`, `browser-capture`, or `unrecorded`; no invented stock/Creative Commons license |

No credentials, signed retrieval URLs, API keys, cookies, or fabricated job IDs belong in committed provenance. `sources.json` is unrelated and remains the library's URL-to-hash vendor map.

### Integration gate

1. Match approved output to its exact slot ID and retain the old master before replacement.
2. Review logo spelling/geometry, image realism, crop, and composition. A CTA image does not replace an accessible HTML button.
3. Optimize content derivatives, record actual provenance, and update the owning app's files only.
4. Inspect desktop/mobile in light/dark. Do not repeat a hero as a silent fallback for missing supporting imagery.
5. Run `pnpm check:design-system-assets`; it is part of `pnpm check`. The checker validates file hashes by byte count/dimensions, the declared budget, metadata, and the exported asset map. It does not claim the visual design is complete.

## Whole-site catalogue captures (SH-07)

Component stills in `public/previews/` stay above. **Do not** screenshot `/samples/<slug>` with `previews:build`, and do not add sample-page hashes to `previews/manifest.json`.

Review evidence and catalogue covers are browser captures of the implemented production site. Process, pass/fail tables, and the copy-into-PR template live in [qa/design-system-showcases.md](qa/design-system-showcases.md).

| Capture | Commit where | Provenance |
| --- | --- | --- |
| Component Default / Variants / ThemeComparison | `public/previews/{name}.{Story}.{theme}.webp` | `previews/manifest.json` hashes |
| Higgsfield stills | `public/assets/design-systems/<system>/{file}.webp` | `kind: "higgsfield-mcp"` |
| Catalogue cover (when the index renders it) | `public/assets/design-systems/<system>/catalogue-cover.webp` | `kind: "browser-capture"`, `model: "browser"`, `jobId: null` |
| SaaS / PR-only review shots | PR attachments | Not a `DesignSystemId`; do not invent a `saas/` asset folder |

`/samples` does not currently display a cover. Do not add a catalog metadata field until that UI exists. When it does, the cover file must be the real homepage, fonts and images settled, overlays closed, with route, viewport, theme, commit, and date recorded in the release PR.

