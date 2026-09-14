# Five-site imagery and composition review

Date: 2026-09-15. This records the visual integration after the standalone-app migration. The sites remain fictional, with local-only form previews and no booking, payment, or email backend.

## Starting problems

The previous pages relied on oversized introductory text, large empty vertical gaps, repeated hero photographs, and small or absent supporting imagery. Headings could wrap to five or six lines before a visitor reached useful content. Secondary pages often presented long unstructured text. Supplied logos had full-canvas whitespace that made their visible marks too small. Implementation explanations interrupted business-facing copy.

A missing asset ID silently returned the hero image. Each app now throws a descriptive missing-image error instead, so incorrect placements cannot silently become repeated hero placeholders.

## Implemented direction

| Site | Composition and supporting pages | Type |
| --- | --- | --- |
| West Room Studio / Minimal | Compact architectural introduction beside a generous courtyard photograph; four-project gallery; physical model and practice principles; material study; photographic inquiry closing. Studio uses the model image; project pages retain complete narratives. | Manrope, quiet scale changes and fine rules |
| Good Noise / Neo-brutalism | Lime and ink opening beside a megaphone; three project tiles; service toolkit; process wall and numbered steps; print-shop CTA. Services now pairs an object image with the introduction, keeps deliverables visible, and puts detailed scope into native disclosures. | Compressed Archivo display with DM Sans body |
| Common Hours / Editorial | Large supplied journal masthead; cover story and two supporting stories; issue object; three more stories; contributor strip; membership still life. Archive uses substantial images in a responsive three-column grid. About uses the editorial work table. | Newsreader display with Manrope body |
| Stillwater House / Luxury | Full lake scene with readable overlay; brief house introduction; three substantial room cards; dining and experiences; water and arrival details; evening inquiry scene. Room listings use compact two-column facts. | Cormorant Garamond display with Manrope body |
| Pocket Keeps / Retro | Physical photo sleeves; collection cards; working cropper on a cutting-mat surface; cutout process image; keepsake CTA; concise FAQ. Instructions pair their opening with process imagery and a scannable step grid. | DM Serif Display with DM Sans body |

Each app owns its Tailwind configuration, semantic palette, font files, homepage CSS, secondary-page CSS, and light/dark preference. Shared JabKit component sources remain unchanged. Existing filters, forms, detail routes, calendar, and browser-only cropping continue to work.

## Approved asset placement

Eight new outputs per site, 40 in total. Prefixes: `min`, `neo`, `edt`, `lux`, `ret`.

| Output | Placement |
| --- | --- |
| `*-logo-wordmark` | Main navigation; Editorial also uses its wordmark as the issue masthead |
| `*-logo-symbol` | Footer and favicon; Luxury also uses its symbol in the house introduction |
| `*-cta`, `*-cta-mobile` | Desktop and narrow-screen closing composition using a responsive picture source |
| `min-background-paper`, `min-background-shadow` | Practice surface and material/light study |
| `min-process-model`, `min-materials` | Practice section, studio page, and materials section |
| `neo-background-print`, `neo-background-ink` | Printed process surface and service image framing |
| `neo-process-wall`, `neo-service-object` | Process and service sections, studio and services pages |
| `edt-background-paper`, `edt-background-collage` | Masthead surface and journal/contributor introduction |
| `edt-about-table`, `edt-issue-object` | About page and issue feature |
| `lux-background-linen`, `lux-background-water` | House introduction and water detail |
| `lux-arrival-detail`, `lux-dining-detail` | House/arrival and dining/experience sections |
| `ret-background-paper`, `ret-background-mat` | Paper surface and working cropper stage |
| `ret-process-cutout`, `ret-collection-sleeves` | Process/instructions and collection-led opening |

Original files are preserved under `tmp/higgsfield-originals/`. No new AI images were requested by the implementation agent. Each app’s `provenance.json` retains the supplied prompt, model, job ID, provider, and timestamp; optimization updates dimensions and byte counts. Logos are trimmed transparent monochrome deliveries derived from the supplied SVG artwork. Content images use explicit alternate text; decorative textures remain CSS backgrounds. Mobile CTA crops are separate supplied outputs, not artificial crops of text baked into an image. CTA text and controls remain live HTML.

## Verification

Production previews ran separately from the user’s development servers. No deployment or DNS changes were made.

| Check | Result |
| --- | --- |
| Five production builds and independent typechecks | Passed |
| Root lint | Passed, existing warnings remain |
| Asset manifest, convention, registry, and component-preview verification | Passed |
| Routes | 54 concrete pages returned 200; internal links and referenced images resolved; unknown routes returned 404 |
| Narrow layout | All 54 pages checked at 320px without horizontal document overflow |
| Visual review | Five complete homepages at 1440px and 390px; representative secondary pages at 1440px; dark-mode mobile homepages |
| Themes and portals | All five theme toggles and mobile menu dialogs passed; fixed specificity mismatch between document and scoped dark backgrounds in Minimal/Luxury |
| Local form previews | Minimal inquiry, Neo brief, Editorial signup, and Luxury stay inquiry passed |
| Luxury interactions | Save room, next-card scrolling on mobile, and preferred arrival/departure range passed |
| Retro interaction | Actual PNG download passed |
| Browser errors | None during route and flow checks |
| Existing development servers | All five returned 200 and rendered the redesigned homepages without page errors on ports 3101–3105 |
| Full root `pnpm check` | Blocked at `@jabkit/verify` typecheck by existing unresolved copied-component imports and dependencies; later gates were run separately and passed |

Root verification errors include missing `@/atoms/badge`, `@/atoms/separator`, and `lucide-react` in `apps/verify`. No shared component or generated registry changes were needed for this visual pass.

Temporary review evidence is in `/tmp/jabkit-redesign/` on the authoring machine: `*-full.png`, `*-mobile.png`, `*-dark.png`, `*-secondary.png`, `final-results.json`, and `flows-results.json`. These are local review artifacts, not committed deployment assets or catalogue covers. This review does not claim a Lighthouse/Web Vitals or exhaustive assistive-technology audit.

Run `pnpm dev` from the repository root to start the catalogue plus all five sites. The integration does not need an image-generation service at runtime.
