# FULL VOLUME implementation roadmap

This roadmap describes the fictional FULL VOLUME Festival website from [epic #547](https://github.com/jose-codegourmet/jabkit/issues/547). It is planning documentation. Repository source and each ticket's file ownership remain authoritative. Writing it does not ship routes, generate images, or publish npm.

## Product brief

FULL VOLUME is a two-day independent music and visual arts festival. Its audience is music fans aged 18+, local creative communities, and visiting attendees. The goal is to drive lineup exploration and ticket selection while making dates, venues, accessibility, and safety information unmistakable. The site can be loud, layered, and expressive, but the purchase path is calmer than the campaign imagery.

Brand: FULL VOLUME. Tagline: “More sound. More color. More together.” Personality: exuberant, inclusive, curious, unapologetic. Voice: punchy and specific, with no fake scarcity and no overpromising of the lineup.

App: `apps/maximalism` (`@jabkit/maximalism`), local dev at `http://localhost:3112`.

## Demo data rule

Artist names, stage names, set times, dates, venue, and prices are demo data. Every page that shows them carries the demo notice:

> Demo data. Artists, stages, set times, dates, venue, and prices on this site are placeholders for the JabKit showcase. FULL VOLUME is a fictional festival.

No sponsors, partner logos, testimonials, attendance numbers, or countdowns anywhere. `[… — client to confirm]` placeholders stay visible exactly as written. No tickets are sold, no payment is taken, and no form sends data.

## Sitemap

| Route | Page | Purpose | Primary action |
| --- | --- | --- | --- |
| `/` | Home | Campaign front door: energy, fixed dates and venue, lineup preview, stages, ticket paths, practical info | Explore tickets → `/tickets` |
| `/lineup` | Lineup | Browse all demo acts by day and stage; card view plus stable list view | See set time → `/lineup/[slug]` |
| `/lineup/[slug]` | Artist | One act: artwork, day, stage, start time, set length, short bio, add to plan | Add to my plan |
| `/schedule` | Schedule | Sortable, filterable set times; personal plan with clash warnings | Add to my plan / Choose your ticket |
| `/tickets` | Tickets | Choose weekend or day pass with plain-text inclusions, fees, availability | Continue to checkout |
| `/info` | Practical info | Getting there, venue map, accessibility, safety, policies, FAQ | Contact us → `/contact` |
| `/contact` | Contact | Questions and access requests form | Send message |
| `/terms` | Terms (stub) | Placeholder ticket and site terms | None |
| `/privacy` | Privacy (stub) | Placeholder privacy notice | None |
| `not-found` | 404 (global and artist) | Recover lost visitors | Back to home |

## Shared system

- **Header:** sticky ink bar with cream text; fixed `max-logo-wordmark` (alt “FULL VOLUME home”) linking home; Lineup, Schedule, Info; hot pink Tickets button visible at every width; lime underline plus `aria-current="page"`; “Skip to content” as the first focusable element.
- **Mobile menu (below 900px):** wordmark, Tickets, and a Menu/Close button; full-height ink sheet with Lineup, Schedule, Tickets, Info, Contact and the tagline; focus trap, Esc, focus return, scroll lock; stickers only in the sheet's corners; no slide under reduced motion.
- **Motion control:** Pause motion / Play motion in the footer and on the Home hero; paused by default under reduced motion; stored per browser.
- **Demo notice:** cream strip with ink text above the footer and inline near data on Home, Lineup, Artist, Schedule, Tickets, and Info.
- **CTA band:** `max-cta` / `max-cta-mobile`; headline “More sound. More color. More together.”; Choose your ticket → `/tickets` and Read the practical info → `/info`; copy on a solid ink or cream panel. Used on Home, Lineup, Artist, Schedule, and Info.
- **Footer:** ink with cream text and lime hover/focus links; symbol, wordmark, and “Two days. Four stages. One very loud weekend.”; Festival, Visit, Talk to us, and Legal columns; placeholder legal line; short demo notice; no sponsor row or social icons.

## Demo lineup

| Slug | Act (fictional) | Genre | Day | Stage | Start | Length | Asset |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `tuesday-lanterns` | Tuesday Lanterns | Brass-heavy dance pop | Day 1 | Loud Stage | 21:00 | 75 min | `max-artist-01` |
| `honey-ultra` | Honey Ultra | Synth soul | Day 1 | Glow Tent | 19:30 | 60 min | `max-artist-02` |
| `velvet-forklift` | Velvet Forklift | Bass-driven garage rock | Day 1 | Low End Room | 22:30 | 60 min | `max-artist-03` |
| `glasshouse-choir` | Glasshouse Choir | Choral folk | Day 1 | Open Air Deck | 17:00 | 45 min | `max-artist-04` |
| `marigold-static` | Marigold Static | Noise pop | Day 2 | Loud Stage | 21:30 | 75 min | `max-artist-05` |
| `kilo-kaleido` | Kilo Kaleido | Club percussion | Day 2 | Glow Tent | 20:00 | 60 min | `max-artist-06` |
| `sofa-comet` | Sofa Comet | Bedroom psych | Day 2 | Open Air Deck | 16:30 | 45 min | `max-artist-07` |
| `neon-tidepool` | Neon Tidepool | Ambient dub | Day 2 | Low End Room | 23:00 | 90 min | `max-artist-08` |

These names are invented for the demo. Do not substitute real acts. Stage emblems: Loud Stage `max-stage-01`, Glow Tent `max-stage-02`, Low End Room `max-stage-03`, Open Air Deck `max-stage-04`. Ticket options are Weekend pass, Day 1 pass (demo sold-out state), and Day 2 pass, each with a `[Price — client to confirm]` placeholder.

## Component mapping

| Section | JabKit starting point | Adaptation |
| --- | --- | --- |
| Header | `shop-top-nav` or `navigation-menu` with `button` | Restyle the storefront chrome; keep the ticket CTA visible |
| Hero | `hero231` (layered portrait cards) or `hero230` (moving filmstrip) | Approved artist assets; dates and CTA readable without animation |
| Lineup | `carousel-cards`, `tilted-card`, `badge` | Original artwork and a stable list fallback; names never depend on hover |
| Schedule | `calendar-03`, `data-table`, `combobox`, `switch` | Sortable list stays available on mobile and for assistive tech |
| Tickets | `pricing28` with only real plans, `radio-group` | Fees, inclusions, and availability in plain text; no countdown |
| Practical info | `faq12`, `accordion`, `footer-section` | Separate lively editorial styling from essential visitor instructions |
| States | `skeleton`, `alert`, `dialog`, `alert-dialog` | Loading, empty, error, clash, sold-out, and demo checkout states |
| Contact | `input`, `label`, `textarea`, `checkbox` | Visible labels, linked errors, focused error summary, local-only submit |

No tabs, toggle-group, select, or number-input atom exists; the app composes those from semantic HTML and existing atoms. Full guidance is in [components.json](components.json).

## Image production

The complete 22-asset set and verbatim prompts are in [imagery.md](imagery.md) and image ticket [#645](https://github.com/jose-codegourmet/jabkit/issues/645). Jose generates the assets with Higgsfield Nano Banana Pro at 2k. No implementing agent generates images, substitutes another generator, or invents provenance.

## Ticket order

1. [#554](https://github.com/jose-codegourmet/jabkit/issues/554): shared app setup, and in parallel [#648](https://github.com/jose-codegourmet/jabkit/issues/648): this specification folder.
2. In parallel: [#645](https://github.com/jose-codegourmet/jabkit/issues/645) images and [#646](https://github.com/jose-codegourmet/jabkit/issues/646) shared demo data.
3. [#647](https://github.com/jose-codegourmet/jabkit/issues/647): theme, fonts, layout, chrome, and shared components.
4. In parallel: [#649](https://github.com/jose-codegourmet/jabkit/issues/649) Home, [#650](https://github.com/jose-codegourmet/jabkit/issues/650) Lineup, [#651](https://github.com/jose-codegourmet/jabkit/issues/651) Artist, [#652](https://github.com/jose-codegourmet/jabkit/issues/652) Schedule, [#653](https://github.com/jose-codegourmet/jabkit/issues/653) Tickets, [#654](https://github.com/jose-codegourmet/jabkit/issues/654) Practical info, [#655](https://github.com/jose-codegourmet/jabkit/issues/655) Contact, [#656](https://github.com/jose-codegourmet/jabkit/issues/656) legal pages and 404.
5. [#657](https://github.com/jose-codegourmet/jabkit/issues/657): full-site QA.
6. After all seven design-system epics: shared catalogue [#658](https://github.com/jose-codegourmet/jabkit/issues/658) and registry usage [#659](https://github.com/jose-codegourmet/jabkit/issues/659).

Every sub-ticket owns only its declared files, uses a `ticket-<number>` branch, and lands in its own PR.

## Release criteria

- Every listed route is complete with finished demo copy, approved local imagery, and working navigation.
- A visitor can browse the lineup, add sets to a plan, see clash warnings, and reach the demo checkout end state with keyboard and touch.
- Artist-card, schedule, ticket, loading, empty, error, sold-out, selected, disabled, and focus states are visible and accurate.
- No decoration covers text, controls, or focus rings at any width; nothing flashes; the Pause motion toggle and reduced motion leave every page still and complete.
- Light, dark, 320px reflow, 375px and 1440px layouts, 200% zoom, direct links, unknown slugs, and failed images are reviewed.
- The demo notice and every client-to-confirm placeholder appear where required; no sponsors, testimonials, attendance numbers, countdowns, or fake scarcity.
- The maximalism typecheck, production build, scoped Biome check, `pnpm check:design-system-assets`, and relevant repository gates pass.
