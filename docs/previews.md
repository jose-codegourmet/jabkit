# Preview assets

Catalogue previews are committed still WebP captures, generated from the real showcase preview route. The home page and `/components` render these images; the component detail page keeps its live iframe for device and theme inspection.

## Commands

```bash
pnpm assets:vendor
pnpm previews:build
pnpm previews:build -- --name {name}
pnpm previews:verify
```

`assets:vendor` downloads Unsplash and Simple Icons media used by `packages/ui`, converts it to WebP, records the original URL in `apps/showcase/public/assets/sources.json`, and rewrites component source to `/assets/{hash}.webp`. Root-relative URLs work in local development as well as deployment.

Do not add `images.unsplash.com` or `cdn.simpleicons.org` URLs to component source or mocks. To add a hosted image, put the file in `apps/showcase/public/assets/`, add its original-source row to `sources.json`, and use its `/assets/{hash}.webp` URL in `packages/ui`.

## Capture contract

Each capture is named `{name}.{Story}.{theme}.webp` and lives in `apps/showcase/public/previews/`. The generated `manifest.json` records the source hash, pipeline version, stories, themes, file name, byte count, and rendered dimensions.

Dark is the default theme for every preview story. Button is the exception: it captures both light and dark so the home theme-proof strip can show each state. The capture pipeline reads `data-preview-stories` and `data-preview-ready` from the preview route's outer `<main>`; it never assumes that an HTTP 200 confirms a story because unknown stories fall back to `Default`.

`preview.capture` in `{Name}.meta.ts` can override story selection, themes, viewport, or add a small extra wait. It is build-only metadata and is stripped from registry JSON.

Captures use `reducedMotion: "reduce"`, `deviceScaleFactor: 1`, `en-US`, and `UTC`. The browser injects a stylesheet that disables animation and transition, waits for fonts and images to decode, and screenshots the route-owned `<main>`. Hosted assets are served from the local asset directory during capture; video, YouTube, and QR endpoints are blocked so no video files are downloaded.

Run `pnpm previews:build -- --name {name}` whenever a component changes, then commit the output. `pnpm previews:verify` runs in `pnpm check` and fails if an asset is missing or its source hash is stale.
