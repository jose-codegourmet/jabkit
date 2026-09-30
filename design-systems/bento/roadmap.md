# DAYMARK — Bento Grid showcase roadmap

**Status:** specification for the independent app `apps/bento` (`@jabkit/bento`, local dev `http://localhost:3110`). Epic [#545](https://github.com/jose-codegourmet/jabkit/issues/545). This document describes the sample website and its ticket split. Writing it does not ship routes, generate images, or publish npm.

Read this folder's [system](system.md), [rules](rules.md), [component guidance](components.json), [imagery direction](imagery.md), and [migration notes](migration.md). The catalogue index in `design-systems/README.md` is updated by a later shared ticket, not by this folder.

## The website to build

**Client:** DAYMARK Operations. **Product:** DAYMARK, a shared portal for small service businesses to see bookings, tasks, customer follow-ups, and revenue summaries. **Audience:** owners, front-desk staff, and team leads. **Tagline:** “The whole day, in view.”

The site helps a business owner understand “one glance at the day” and **request a walkthrough**. It also proves that a bento layout works beyond a marketing hero: a demo portal shows the overview, the full views behind each tile, and every card state.

**Voice:** plain and operational. “3 bookings need confirmation”, not “Unlock your productivity potential”.

**Demo notices:** the footer on every page says “Numbers, names and bookings shown on this site are fictional demo data, not customer results.” Every `/demo/*` page adds the apricot-tint strip (`role="note"`): “Demo portal. Juniper Street Studio is a fictional business and every number here is sample data.” with “Back to DAYMARK site”.

**Completed visitor journey:** Land on Home, read the coded mini dashboard, open See a sample dashboard, follow Review bookings to the Needs reply filter, open Mara Quinn's booking and confirm it (toast), check Card states, return to the site, and submit the walkthrough request through an inline error to “Request received.” Nothing is sent or stored.

## Sitemap and content ownership

Marketing routes live at the app root with the marketing header and full footer. Portal routes live under `/demo` with the portal shell and compact footer. Demo records come from `app/_data`; booking detail pages are generated from the same records as the table.

| Route | Page | Primary CTA |
| --- | --- | --- |
| `/` | Home | Request a walkthrough → `/walkthrough` |
| `/product` | Product | See a sample dashboard → `/demo` |
| `/who-its-for` | Who it's for | Request a walkthrough |
| `/how-it-works` | How it works | Request a walkthrough |
| `/faq` | FAQ | Request a walkthrough |
| `/walkthrough` | Request a walkthrough | Send request |
| `/demo` | Demo · Dashboard | View day → `/demo/calendar` |
| `/demo/bookings` | Demo · Bookings | Review booking |
| `/demo/bookings/[id]` | Demo · Booking detail | Confirm booking |
| `/demo/calendar` | Demo · Calendar | Add visit |
| `/demo/customers` | Demo · Customers | Open follow-ups |
| `/demo/tasks` | Demo · Tasks | Add task |
| `/demo/reports` | Demo · Reports | Change week |
| `/demo/states` | Demo · Card states | None |
| `/privacy`, `/terms` | Legal stubs | None |
| not-found | 404 | Back to home |

**Header:** an inline SVG of the four-cell mark (drawn from `ben-logo-symbol`) plus “DAYMARK” set in HTML (accessible name “DAYMARK home”). Links: Product, Who it's for, How it works, FAQ. Right: “See a sample dashboard” → `/demo` (hidden below 1024px) and the primary “Request a walkthrough”. Chalk background, 1px cool-gray bottom border, no shadow. Current page gets `aria-current="page"` and an evergreen underline.

**Mobile (below 768px):** a “Menu” button with icon and visible text and `aria-expanded` opens a full-width sheet: Product, Who it's for, How it works, FAQ, See a sample dashboard, then a full-width Request a walkthrough. Esc and Close dismiss it, focus returns to Menu, body scroll locks while open.

**Portal shell (`/demo/*`):** modelled on `application-shell1`, composed locally. Sidebar groups: Overview (Dashboard), Work (Calendar, Bookings, Tasks), People (Customers), Insight (Reports), Design system (Card states). Breadcrumbs above each page title (“Dashboard / Bookings / Mara Quinn”), truncated to the parent link on mobile. Profile control bottom-left: “RL”, “Robin Lee · Front desk”, with “Switch role (demo)” and “Back to site”. The sidebar collapses behind a Menu button on mobile.

**Shared CTA band** on Home, Product, Who it's for, How it works, and FAQ: a span-7 chalk tile with “See your own day in one view.”, “Book a [length — client to confirm] walkthrough. Bring your current calendar and task list and we'll map them to DAYMARK tiles together.”, Request a walkthrough, and See a sample dashboard; a span-5 image tile with `ben-cta` (desktop) or `ben-cta-mobile` (below 768px, stacked under the copy).

**Footer:** `footer-column`. Product (Overview, Sample dashboard, Card states), Company (Who it's for, How it works, FAQ), Get started (Request a walkthrough, “Support: [Support email — client to confirm]”). Bottom line: “© [Year — client to confirm] DAYMARK Operations. The whole day, in view.” · Privacy · Terms, then the demo notice. The portal uses a compact one-row variant.

**Demo dashboard content:**

| Tile | Span | Primary line | Action |
| --- | --- | --- | --- |
| Today | 8 | “8 visits scheduled” and the next three visits | View day → `/demo/calendar` |
| Confirmation | 4 | “3 bookings need a reply” (warning state) | Review bookings → `/demo/bookings?status=needs-reply` |
| Follow-ups | 4 | “2 customers to contact” | Open follow-ups → `/demo/customers?filter=follow-up` |
| Team | 4 | “4 people on shift”, progress “Desk covered until 5:00 pm” | View roster → `/demo/tasks#roster` |
| Weekly trend | 4 | “Visits this week”, Mon–Sun 6, 9, 8, 7, 10, 5, closed | View report → `/demo/reports` |
| Alert | 12 | “1 visit overlaps: 2:00 pm Sam has two bookings. Review in calendar.” | Link → `/demo/calendar#overlap`, Dismiss |

Unconfirmed commercial, legal, and support lines stay in the copy as `[… — client to confirm]`.

## JabKit component plan

Tokens do not restyle every internal element. Page tickets own composition. Paths are real files to inspect, not a guarantee that the current props match the section.

| Need | Source under `packages/ui/src/` | DAYMARK role |
| --- | --- | --- |
| Button | `atoms/button` | Request a walkthrough, Send request, Confirm booking, Add visit |
| Header | `marketing/traffo-header` or `atoms/navigation-menu` | Light marketing header, lighter than the product grid |
| Hero | `marketing/hero307` or `atoms/card` + `atoms/button` | Replace the angled analytics scene with a coded mini dashboard |
| Benefits bento | `marketing/bento19` or `marketing/feature261` | Today, Bookings, Follow-ups, Team, Performance. Remove AI illustrations, prices, and avatars |
| Tiles | `atoms/card` | Every bento tile; override radius, padding, and border |
| Portal shell | `dashboard/application-shell1` as model; `atoms/sidebar`, `atoms/breadcrumb`, `atoms/avatar`, `atoms/dropdown-menu` | Grouped nav, breadcrumbs, staff profile. Built locally |
| Tile content | `atoms/badge`, `atoms/progress`, `atoms/alert`, `atoms/skeleton` | Needs reply badge, shift coverage, overlap alert, loading rows |
| Weekly chart | Built in markup, not `atoms/chart` (recharts is not a dependency of `apps/bento`) | Labelled bars, written-out text equivalent, optional table |
| Detailed work | `atoms/data-table`, `dashboard/kanban-board`, `dashboard/fullscreen-calendar` | Bookings and customers tables, task board with “Move to…”, day/week calendar |
| Overlays | `atoms/dialog`, `atoms/toast` | Decline booking, Add visit, confirmation toasts |
| FAQ | `atoms/accordion` or `marketing/faq12` | Roles, Setup, Pricing, Support, Demo data groups |
| Footer | `marketing/footer-column` | Three columns, legal line, demo notice |
| Fields | `atoms/label`, `atoms/input`, `atoms/textarea`, `atoms/checkbox` | Walkthrough form. No field, select, or tabs atom; compose locally |

The bento overview is a summary, not a replacement for the full workflows.

### Page mapping

| Page | Sections | Image slots |
| --- | --- | --- |
| Home | Hero with mini dashboard, problem row, benefits bento, drill-down cards, roles teaser, CTA | `ben-hero`, `ben-process-before`, `ben-material-tiles`, `ben-team-shift`, `ben-cta`, `ben-cta-mobile` |
| Product | Header with mini bento, Today, Confirmation, Follow-ups, Team, Weekly trend, card states, material interlude, CTA | `ben-background-grid`, CTA pair |
| Who it's for | Header, three roles, four business types, fit note, CTA | `ben-who-desk`, `ben-who-clinic`, `ben-who-salon`, `ben-who-repair`, `ben-who-grooming`, CTA pair |
| How it works | Header, three steps as alternating bento rows, setup with placeholders, CTA | `ben-process-before`, `ben-process-together`, `ben-process-close`, CTA pair |
| FAQ | Header, Roles, Setup, Pricing, Support, Demo data, CTA | CTA pair |
| Request a walkthrough | Intro tile (span 5), form tile (span 7), loading, error, success | `ben-cta-mobile` (hidden on mobile) |
| Demo · Dashboard | Header, five tiles, overlap alert, footnote | none |
| Demo · Bookings | Header, status filters, table, loading, empty, error | `ben-empty-list` |
| Demo · Booking detail | Header, summary bento, actions, not found | none |
| Demo · Calendar | Header, day/week grid with overlap, add-visit dialog, empty day | `ben-empty-day` |
| Demo · Customers | Header, follow-up filter, list, empty | `ben-empty-list` |
| Demo · Tasks | Header, kanban board, roster, empty column | none |
| Demo · Reports | Header, week select, chart with table, summary tiles, states | none |
| Demo · Card states | Header, seven state tiles, layout rules with mobile-order toggle | `ben-empty-list` |
| Privacy, Terms | Placeholder body and demo line | none |
| 404 | “This page isn't on today's schedule.” | `ben-empty-day` |

Home SEO title: “DAYMARK — The whole day, in view”. Other titles follow the epic: “Product — DAYMARK”, “Who it's for — DAYMARK”, “How it works — DAYMARK”, “FAQ — DAYMARK”, “Request a walkthrough — DAYMARK”, “Sample dashboard — DAYMARK demo”, “Bookings — DAYMARK demo”, “{Customer} booking — DAYMARK demo”, “Calendar — DAYMARK demo”, “Customers — DAYMARK demo”, “Tasks — DAYMARK demo”, “Reports — DAYMARK demo”, “Card states — DAYMARK demo”, “Privacy — DAYMARK”, “Terms — DAYMARK”, “Page not found — DAYMARK”.

## Required image series

**Jose generates every new image in Higgsfield.** Agents do not. Full prompts are in [imagery.md](imagery.md). Outputs are stored under `apps/bento/public/assets/design-systems/bento/` with provenance in `provenance.json`. All 18 IDs have been delivered:

`ben-logo-symbol`, `ben-logo-wordmark`, `ben-hero`, `ben-cta`, `ben-cta-mobile`, `ben-material-tiles`, `ben-background-grid`, `ben-process-before`, `ben-process-together`, `ben-process-close`, `ben-team-shift`, `ben-who-desk`, `ben-who-clinic`, `ben-who-salon`, `ben-who-repair`, `ben-who-grooming`, `ben-empty-day`, `ben-empty-list`.

The symbol came first, then the wordmark, then `ben-hero` as the master scene for everything else. No screens, no UI, no lettering in the scenes. The wordmark raster blurs slightly on “RK”, so the header draws the mark as an inline SVG and sets “DAYMARK” in HTML until a clean version is approved.

**Anchor prompt (ben-hero), as delivered:**

```text
Photograph the front desk of a small, tidy service studio a few minutes before
opening: a pale chalk-white counter, a mint-green ceramic mug of coffee, a closed
paper diary with a few colored tabs, a small stack of blank appointment cards and
a key ring, soft early morning daylight from a side window. A low evergreen-painted
wall and one potted plant behind, a hint of apricot in a folded towel on a shelf.
Eye-level three-quarter view, calm and ordered, shallow but not dreamy depth of
field. No people, no screens or laptops facing the camera, no lettering, logos or
signage, no watermarks. Aspect ratio 4:5.
```

## Ticket index

Sub-tickets of epic #545. Each PR touches only its own files. This docs ticket is #613.

| Issue | Scope | Depends on |
| --- | --- | --- |
| #554 | Scaffold the design-system apps (shared) | None |
| #610 | Generate the 18 `ben-*` assets | Setup |
| #611 | Shared demo data in `app/_data` | Setup |
| #612 | Theme, fonts, layout, header, footer, shared components | #610, #611 |
| #613 | This `design-systems/bento/` folder | None |
| #614 | Home `/` | #610, #611, #612 |
| #615 | Product `/product` | #610, #611, #612 |
| #616 | Who it's for `/who-its-for` | #610, #611, #612 |
| #617 | How it works `/how-it-works` | #610, #611, #612 |
| #618 | FAQ `/faq` | #610, #611, #612 |
| #619 | Request a walkthrough `/walkthrough` | #610, #611, #612 |
| #620 | Demo · Dashboard `/demo` | #610, #611, #612 |
| #621 | Demo · Bookings `/demo/bookings` | #610, #611, #612 |
| #622 | Demo · Booking detail `/demo/bookings/[id]` | #610, #611, #612 |
| #623 | Demo · Calendar `/demo/calendar` | #610, #611, #612 |
| #624 | Demo · Customers `/demo/customers` | #610, #611, #612 |
| #625 | Demo · Tasks `/demo/tasks` | #610, #611, #612 |
| #626 | Demo · Reports `/demo/reports` | #610, #611, #612 |
| #627 | Demo · Card states `/demo/states` | #610, #611, #612 |
| #628 | Privacy, terms, 404 | #610, #611, #612 |
| #629 | Full-site review | #613, #614–#628 |

Later shared work, outside this folder: catalogue #658 and registry #659.

## Scope and acceptance

This ticket's done state is the file set itself: every luxury counterpart exists here, JSON parses, and Biome accepts the folder. It does not implement pages.

Site acceptance, owned by the page and QA tickets:

- [ ] An owner can move from Home to the sample dashboard, drill into a full view, and reach the walkthrough request without leaving the site.
- [ ] Every portal tile names itself, answers one question, and links to its detail view; static tiles never look clickable.
- [ ] Loading, empty, warning, actionable, selected, error, and static states appear on `/demo/states` and on the pages that use them.
- [ ] Mobile stack order equals DOM order on every bento; no CSS `order`.
- [ ] Charts have text equivalents; color is never the only state signal.
- [ ] Both themes, 320/375/768/1280/1440, keyboard focus, and reduced motion keep the same actions.
- [ ] Demo notices appear on every page; prices, timelines, integrations, and policies stay marked for the client.
- [ ] Every `ben-*` slot used on a page resolves locally or fails to a useful layout.

## Verification

For this docs change: `pnpm exec biome check design-systems/bento`, parse each JSON file, and confirm `git diff --name-only origin/main` lists only `design-systems/bento/**`.

For a page ticket: run the bento app, walk the route with mouse and keyboard, toggle dark and reduced motion, try the `?state=` demo toggles where the page has them, and submit any demo form through error and success. Do not npm publish from a page ticket.
