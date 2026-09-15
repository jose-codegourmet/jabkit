# Standalone design-system apps

The five fictional websites are separate Next.js workspaces. Each starts at `/`, owns its Tailwind v4 setup, tokens, typography, public assets, and theme preference, and can be deployed to a different subdomain. `apps/showcase` remains the JabKit catalogue, registry, preview host, SaaS sample, and MCP endpoint.

Read [PROMPTS_FOR_IMAGES.md](../PROMPTS_FOR_IMAGES.md) first for new imagery. Jose executes those prompts in Higgsfield; the coding agent does not generate images. The approved logo, CTA, background, process, and supporting images are now integrated. Original outputs remain in `tmp/higgsfield-originals/`; delivery WebPs and provenance live with each app.

## Apps and local commands

Run from the repository root with the repository's Node/pnpm versions and `pnpm install`.

| App / package | Business | Dev command | Local URL | Production |
| --- | --- | --- | --- | --- |
| `apps/minimal` / `@jabkit/minimal` | West Room Studio | `pnpm --filter @jabkit/minimal dev` | `http://localhost:3101` | [minimal.jabkit.joseadrianbuctuanon.dev](https://minimal.jabkit.joseadrianbuctuanon.dev) |
| `apps/neo-brutalism` / `@jabkit/neo-brutalism` | Good Noise | `pnpm --filter @jabkit/neo-brutalism dev` | `http://localhost:3102` | [neo-brutalism.jabkit.joseadrianbuctuanon.dev](https://neo-brutalism.jabkit.joseadrianbuctuanon.dev) |
| `apps/editorial` / `@jabkit/editorial` | Common Hours | `pnpm --filter @jabkit/editorial dev` | `http://localhost:3103` | [editorial.jabkit.joseadrianbuctuanon.dev](https://editorial.jabkit.joseadrianbuctuanon.dev) |
| `apps/luxury` / `@jabkit/luxury` | Stillwater House | `pnpm --filter @jabkit/luxury dev` | `http://localhost:3104` | [luxry.jabkit.joseadrianbuctuanon.dev](https://luxry.jabkit.joseadrianbuctuanon.dev) |
| `apps/retro` / `@jabkit/retro` | Pocket Keeps | `pnpm --filter @jabkit/retro dev` | `http://localhost:3105` | [retro.jabkit.joseadrianbuctuanon.dev](https://retro.jabkit.joseadrianbuctuanon.dev) |

`pnpm dev` starts the JabKit catalogue on port 3000 and all five websites in parallel. `pnpm dev:design-systems` starts only the five websites; `pnpm --filter @jabkit/showcase dev` starts only the catalogue. Each app supports `build`, `start`, and `typecheck`; unlike showcase, its build does not regenerate the component registry. Use `pnpm --filter @jabkit/minimal build` and `pnpm --filter @jabkit/minimal start`, changing the package name for the other sites. Production `start` uses Next’s standard port behavior (`PORT`, or 3000 by default). For simultaneous local production previews, pass `--port 3101` through the individual start command and use the other listed ports for the remaining apps.

## Local styling ownership

Each app contains:

- `app/globals.css`: the app's Tailwind v4 import, explicit source scanning, semantic utility mappings, baseline tokens, and global rules. Tailwind v4 uses CSS configuration; there is no unused `tailwind.config.js` added just to look independent.
- `app/theme.css`: only that business's palette, type roles, geometry, and light/dark overrides. Edit it directly without changing siblings or the catalogue. These values started from the previous scope preset and are app-owned, not regenerated from Markdown/JSON.
- `app/style.module.css`: shared local chrome and secondary-page treatments. `app/home.module.css` owns the distinct homepage composition; the homepages are not variations of one common template.
- `app/layout.tsx`: the app's document and metadata, ThemeProvider, small demo bar, scoped portal mount, brand header/footer. It does not load showcase fonts or import catalogue chrome.
- `components/` and `lib/`: local copies of the small demo helpers and asset reader needed by this app. No app imports another app's code. Keep the provenance contract compatible with the root asset validator when changing these readers.
- `public/assets/design-systems/<system>/`: optimized WebPs, provenance, and the historical contact sheet for this site. New assets are registered with their actual dimensions, byte counts, and supplied generation metadata. The historical contact sheet does not include the new delivery.

`@/*` maps to `../../packages/ui/src/*` in every app. JabKit components remain direct source imports; app-local code uses relative paths. No new library category, package barrel, runtime theme loader, or installed UI package API is introduced. Shared library components still obey the root semantic-token and registry rules. Changing app-local CSS does not change the defaults shipped by the registry.

The document and SampleScope use the same system identifier. This gives body/utility chrome and portal content the correct values in both modes. Each app uses its own localStorage key for theme preference, which also isolates themes across local ports. Fonts are self-hosted in each app’s `public/fonts/` with their OFL licenses: Manrope for Minimal, Archivo and DM Sans for Neo-brutalism, Newsreader and Manrope for Editorial, Cormorant Garamond and Manrope for Luxury, and DM Serif Display and DM Sans for Retro. `globals.css` declares the local font faces; `theme.css` assigns their roles. There are no runtime Google Fonts requests.

## Routes after migration

The former prefix is removed inside each app. For example, West Room `/design-systems/minimal/work/courtyard-house` is now `/work/courtyard-house` on the Minimal app's origin. Filters and selected project/room/plan query parameters remain unchanged.

| App | Routes besides `/` |
| --- | --- |
| Minimal | `/work`, `/work/[slug]` (six), `/studio`, `/services`, `/contact` |
| Neo-brutalism | `/work`, `/work/[slug]` (six), `/studio`, `/services`, `/start` |
| Editorial | `/stories`, `/stories/[slug]` (nine), `/contributors/[slug]` (three), `/about`, `/membership` |
| Luxury | `/rooms`, `/rooms/[slug]` (three), `/experiences`, `/house`, `/inquire` |
| Retro | `/collections`, `/collections/[slug]` (three), `/how-it-works`, `/pricing`, `/studio` |

Known detail pages preserve their records; unknown details still return 404. Local form previews, query filters, calendar selection, and crop/download behavior are retained. There is no booking/payment/email backend.

## Subdomains and catalogue links

Deploy each app separately from the monorepo, with the full repository available during build because it imports `packages/ui` source. Set the hosting project's app/root directory to `apps/<system>` and use its package build/start scripts. This change does not create a DNS record, hosting project, or deployment.

In the **showcase deployment**, set actual HTTP(S) origins without a trailing path in:

| Variable | Destination |
| --- | --- |
| `MINIMAL_SITE_URL` | `https://minimal.jabkit.joseadrianbuctuanon.dev` |
| `NEO_BRUTALISM_SITE_URL` | `https://neo-brutalism.jabkit.joseadrianbuctuanon.dev` |
| `EDITORIAL_SITE_URL` | `https://editorial.jabkit.joseadrianbuctuanon.dev` |
| `LUXURY_SITE_URL` | `https://luxry.jabkit.joseadrianbuctuanon.dev` |
| `RETRO_SITE_URL` | `https://retro.jabkit.joseadrianbuctuanon.dev` |

See [showcase env template](../apps/showcase/.env.example). During `next dev`, absent values default to ports 3101–3105. During production builds, absent values use the live origins above. The Luxury host is `luxry` as deployed. Env vars remain overrides when a destination changes; rebuild the catalogue after changing them because redirects and prerendered directory links are build-time configuration.

The catalogue's `/design-systems` remains the directory. Its links navigate to external app origins using ordinary anchors. Both old `/design-systems/<system>/:path*` and older `/samples/<system>/:path*` addresses temporarily redirect to the configured app, retaining path and query. Without a configured production destination they return to the directory instead of a guessed subdomain. Old design-system asset URLs redirect to the new origin only when configured.

In **each independent app**, set `NEXT_PUBLIC_JABKIT_URL` to the actual catalogue origin if different from the current default. This controls the small return link. Development defaults to `http://localhost:3000`; production defaults to the existing JabKit domain. Rebuild after changing this public variable. Ports/origins are deployment configuration, not fixture content.

## Image handoff

Use the root prompt document for logo concepts, exact wordmark text, new CTA scenes, backgrounds, process images, and the existing content-slot IDs. The user creates images in Higgsfield and supplies the approved outputs. Keep generated UI, clickable text, fake screenshots, and duplicate hero placeholders out of the site.

The implementation agent can optimize approved outputs and integrate them; it must not silently invoke image generation. Preserve real provenance, aspect, crop, and semantic alternatives. Approved SVG logo originals are preserved. Their site delivery is a transparent, tightly fitted monochrome WebP with accessible link labels; do not mistake that delivery file for an editable vector original. Existing photo provenance is historical and must not be relabeled as a different production method.

## Verification

- Run each app's `typecheck` and production `build`; root `pnpm check` includes all five via Turbo.
- `pnpm check:design-system-assets` reads each app's own public directory and `app/assets.ts`. Component preview/registry verification still targets showcase.
- Review home and secondary pages at desktop/mobile, test theme and open menus/dialogs, confirm fonts/colors are local, and check image requests for accidental dependencies on showcase assets.
- Crawl internal links, known detail slugs, unknown slugs, and direct query URLs. Check the form/calendar/cropper journeys after URL changes.
- Review configured redirects with non-production test origins and the unconfigured production directory state. Do not publish domains as a side effect of verification.

### Migration verification — 2026-09-15

All five standalone production builds and the catalogue build passed. Browser checks covered 54 concrete pages, internal links and images, unknown-route 404s, 320px mobile overflow, theme switching, themed menu portals, ten legacy redirects, four local form previews, Luxury date-range selection, and Retro's actual PNG download. Asset, convention, registry, and component-preview verification passed. The 82 moved image/manifest files matched their original SHA-256 hashes.

The Luxury calendar uses a locale whose week start agrees across server and browser. Retro mounts its browser-only editor after hydration so cached images initialize crop dimensions, and ignores unchanged crop callbacks to avoid repeated parent updates. These fixes stay within the apps.

The root `pnpm check` is **not fully green**: `apps/verify` has existing unresolved copied-component imports and missing dependencies. Its errors are outside this migration; the five app builds/typechecks pass independently. The subsequent imagery and composition pass is recorded in [the redesign review](qa/design-system-redesign.md).


### Visual integration — 2026-09-15

The next pass integrated all 40 newly approved outputs and rebuilt all five homepages, with supporting-page refinements and self-hosted brand typography. Production verification covered all 54 routes, 320px overflow on every page, four local form previews, the room carousel/calendar, and the real PNG download. See [the redesign review](qa/design-system-redesign.md) for placements and the full verification record. Root `pnpm check` still stops at the existing `apps/verify` type errors; the five app builds/typechecks and separately run asset/convention/registry/preview gates pass.
