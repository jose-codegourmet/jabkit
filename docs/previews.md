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

`pnpm previews:verify` is part of the SH-01 correctness gate recorded in [qa/design-system-showcases.md](qa/design-system-showcases.md).

Run `pnpm previews:build -- --name {name}` whenever a component changes, then commit the output. `pnpm previews:verify` runs in `pnpm check` and fails if an asset is missing or its source hash is stale.

## Design-system sample images (SH-04)

Library catalogue captures and Unsplash rehosts stay above. **Newly generated photography, illustration, objects, and textures for the five design-system sample sites must be created with Higgsfield MCP.** Do not silently substitute another generator, a stock CDN, or a hotlinked reference-site image.

This ticket owns the process, storage layout, and provenance contract. MIN-03, NEO-03, EDT-03, LUX-03, and RET-03 own series production. Those five Higgsfield series are committed under `public/assets/design-systems/<system>/` with kebab-case WebPs, `provenance.json`, and `assets.ts`. In-slot crop review still waits on the sample page tickets. Do not invent job IDs, licenses, or generation results.

### Higgsfield MCP versus other image sources

| Source | Use | Not for |
| --- | --- | --- |
| Higgsfield MCP `generate_image` / `generate_image_batch` | Sample photography, illustration, objects, textures | Logos, nav, headlines, prices, controls, fake UI screenshots |
| Browser capture of the implemented showcase | Catalogue covers, product UI evidence (SH-07) | Invented screens of unfinished pages |
| HTML / SVG / type in code | Brand marks, labels, interactive UI | Painting functional text into a generated bitmap |
| `pnpm assets:vendor` + `sources.json` | Unsplash / Simple Icons used by `packages/ui` | Higgsfield outputs |
| Pocket Keeps user upload (RET-10) | Local demo files in the browser | Sending visitor files to Higgsfield |

### Access discovery (recorded 2026-09-14)

Implementation-time discovery against the connected **Higgsfield** MCP namespace. Re-run these tools at the start of every `-03` ticket; models and costs change.

1. Confirm the namespace is usable (`GetDynamicTools` / `models_explore`). If it is missing, `needsAuth`, or errors, **stop**. Mark the image ticket blocked and request the Higgsfield connection. Do not switch to another image service.
2. `models_explore` `action: "get"` or `"recommend"` with the shot’s goal and `type: "image"`. Record the **returned** `id`, `provider_name`, and allowed `aspect_ratios`. Do not assume a model from this document if discovery disagrees.
3. `generate_image` with `get_cost: true` and `use_unlim: false` to preflight credits. Do not hard-code a price. On 2026-09-14 a `gpt_image_2_5` 16:9 preflight returned **1 credit** for that exact request; other models and qualities differ.
4. `balance` confirms the workspace can spend credits. Do not commit balances, plan SKUs as prices, or checkout URLs.

Tools that matter for this workflow:

| Tool | Role |
| --- | --- |
| `models_explore` | Catalog, constraints, recommend |
| `generate_image` | One prompt (optional `count` 2–4 variants); `get_cost` preflight |
| `generate_image_batch` | 1–12 independent prompts; no `get_cost` inside the batch |
| `jobs_wait` | Poll up to 12 batch job IDs |
| `job_status` | Single job; typical image 10–20s |
| `media_import_url` / `media_upload` | Reference media as `media_id`, never a raw HTTPS URL in `medias[].value` |

`generate_image` documents `gpt_image_2_5` as the default general image model. `models_explore` `recommend` for photoreal interior photography also returned `recraft_v4_1` and `soul_location`. `soul_2` remains a specialized portrait/fashion route. Free-trial unlimited generations were **not spendable** during this discovery (`unlim.available: false`); do not pass `use_unlim: true` unless the operator explicitly asks.

Output retrieval: wait until the job is terminal, then download **once** to disk. Result URLs may be signed. **Never commit retrieval URLs, upload URLs, API keys, or cookies.** Copy the returned **job UUID** into provenance when the tool provides one.

### Production sequence (each `-03` ticket)

1. Read that system’s `design-systems/<system>/imagery.md` and the shot list on the `-03` ticket.
2. Discover tools/models as above. If Higgsfield MCP is unavailable, block.
3. Generate **one** representative hero/cover. Review crop, materials, and exclusions before the rest of the series.
4. Produce the remaining shots with `generate_image` or `generate_image_batch`. Keep variants of one prompt on `generate_image`; use the batch tool for independent prompts.
5. Reject outputs with watermarks, gibberish text, logos, implausible anatomy/architecture, or painted UI chrome.
6. Optimize locally to WebP (same Sharp pipeline as vendor: rotate, `quality: 82`, no animation). Keep intrinsic width/height. Place the file at `apps/showcase/public/assets/design-systems/<system>/<fileName>.webp`.
7. Export a typed row from `apps/showcase/app/samples/<system>/assets.ts` via `toSampleAsset` / `sampleAssetSrc`.
8. Add a provenance row with the real prompt, model id, job id, date, dimensions, crop, alt/role, delivery budget, and rights status.
9. Review the file in its **real** desktop and mobile slots after the page exists. SH-04 does not ship those pages.

### Provenance contract

Committed file: `apps/showcase/public/assets/design-systems/<system>/provenance.json`.

Runtime map: `apps/showcase/app/samples/<system>/assets.ts` (relative import; the showcase `@/*` alias is the library).

Types: `apps/showcase/lib/design-system-assets.ts`.

`sources.json` maps external Unsplash/Simple Icons URLs to hashed WebPs. It is **not** this manifest. Do not add Higgsfield jobs to `sources.json`, and do not teach `assets:vendor` to download Higgsfield URLs.

Manifest fields per asset:

| Field | Rule |
| --- | --- |
| `id` | Kebab-case, matches the `assets.ts` key and the shot-list id |
| `fileName` | Kebab-case `.webp` in the same folder |
| `kind` | `higgsfield-mcp` or `browser-capture` |
| `prompt` / `negativeDirection` | The actual prompt used; never a made-up stand-in |
| `provider` | `Higgsfield MCP` for generated stills |
| `model` | Catalog `id` from `models_explore` (or `browser` for captures) |
| `generatedAt` | ISO timestamp of the successful job |
| `jobId` | UUID returned by Higgsfield, or `null` only for browser captures. No placeholders |
| `width` / `height` / `bytes` | Must match the committed file |
| `aspectRatio` | The ratio requested/returned |
| `crop.focalX` / `focalY` | 0–1, plus CSS `objectPosition` |
| `alt` / `role` | Non-empty alt when `content`; empty alt when `decorative` |
| `deliveryRole` | `hero` ≤300KB, `content` ≤180KB, `texture` ≤60KB |
| `budgetException` | Non-empty justification if over budget, else `null` |
| `outputUseRights` | `higgsfield-account-terms` when the still came from this account, `browser-capture` for screenshots, `unrecorded` only when the tool returned no rights string. Do not invent Creative Commons or stock licenses. Higgsfield image tools did not return a per-asset license field during discovery |

### Checklist ( `-03` handoff)

- [ ] Higgsfield MCP used; access failure documented instead of a substitute generator
- [ ] Representative image approved before the series
- [ ] Every generated file traces to a real prompt and job id
- [ ] Intrinsic size, crop, alt strategy, and `/assets/design-systems/<system>/...` URL
- [ ] Desktop and mobile crops reviewed in the real slot
- [ ] No reference-site hotlinks, watermarks, or generated functional text
- [ ] `pnpm check:design-system-assets` passes

`pnpm check:design-system-assets` is part of `pnpm check`. Empty series pass. Populated rows fail if the WebP, provenance, and `assets.ts` disagree, if a Higgsfield row lacks a UUID job id, if a remote/signed URL leaked into the manifest, or if a delivery file exceeds its budget without `budgetException`.

