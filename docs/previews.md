# Preview assets

Catalogue previews are committed captures of the real showcase preview route. The home page and `/components` render these files as images; the component detail page keeps its live iframe for device and theme inspection.

## Commands

```bash
pnpm assets:vendor
pnpm previews:build
pnpm previews:build -- --name {name}
pnpm previews:build -- --category marketing
pnpm previews:verify
```

`assets:vendor` downloads Unsplash and Simple Icons media used by `packages/ui`, converts it to WebP, records the original URL in `apps/showcase/public/assets/sources.json`, and rewrites component source to `/assets/{hash}.webp`. Root-relative URLs work in local development as well as deployment.

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

Run `pnpm previews:build -- --name {name}` whenever a component changes, then commit the output. `pnpm previews:verify` runs in `pnpm check` and fails if an asset is missing or its source hash is stale.
