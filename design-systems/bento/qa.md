# DAYMARK full-site QA

Ticket: [#629](https://github.com/jose-codegourmet/jabkit/issues/629). Epic: [#545](https://github.com/jose-codegourmet/jabkit/issues/545).

Reviewed on the local app (`pnpm --filter @jabkit/bento dev`, `http://localhost:3110`) in the Claude desktop browser pane, plus one production server (`next build` then `next start -p 3199`) for the 404 checks. Imagery is the 18 approved `ben-*` assets from #610.

## Checklist

| Check | Result |
| --- | --- |
| Every site-map route loads; unknown detail slugs 404 | Pass, after adding the `/demo` catch-all |
| Internal links and images | Pass |
| No horizontal scroll at 320px; checked 375px and 1440px | Pass, after fixes |
| Light and dark readable; theme toggle works | Pass, after fixes |
| Keyboard: menus, dialogs, forms usable; focus visible | Pass, after fixes |
| `prefers-reduced-motion` | Pass |
| Demo data labelled; no invented prices, reviews, or stats; placeholders visible | Pass |
| Copy matches epic #545 | Pass, with the documented additions below |
| typecheck, build, Biome, `check:design-system-assets` | Pass |

## Routes

| Route | Status | Title | H1 |
| --- | --- | --- | --- |
| `/` | 200 | DAYMARK — The whole day, in view | Open the day with a clearer picture. |
| `/product` | 200 | Product — DAYMARK | One overview. Five tiles. Every one opens up. |
| `/who-its-for` | 200 | Who it's for — DAYMARK | For the people who run the day. |
| `/how-it-works` | 200 | How it works — DAYMARK | How a day runs in DAYMARK. |
| `/faq` | 200 | FAQ — DAYMARK | Questions, answered plainly. |
| `/walkthrough` | 200 | Request a walkthrough — DAYMARK | Request a walkthrough. |
| `/walkthrough?state=error` | 200 | Request a walkthrough — DAYMARK | Request a walkthrough. Failure alert shown. |
| `/demo` | 200 | Sample dashboard — DAYMARK demo | Good morning, Robin. |
| `/demo/bookings` | 200 | Bookings — DAYMARK demo | Bookings |
| `/demo/bookings?status=needs-reply` | 200 | Bookings — DAYMARK demo | Bookings. Three rows. |
| `/demo/bookings/b07` | 200 | Ruth Adeyemi booking — DAYMARK demo | Ruth Adeyemi · Follow-up visit |
| `/demo/calendar` | 200 | Calendar — DAYMARK demo | Calendar |
| `/demo/calendar?view=week` | 200 | Calendar — DAYMARK demo | Calendar |
| `/demo/customers` | 200 | Customers — DAYMARK demo | Customers |
| `/demo/customers?filter=follow-up` | 200 | Customers — DAYMARK demo | Customers. Two rows. |
| `/demo/tasks` | 200 | Tasks — DAYMARK demo | Tasks |
| `/demo/reports` | 200 | Reports — DAYMARK demo | Reports |
| `/demo/reports?week=last-week` | 200 | Reports — DAYMARK demo | Reports. Totals 41, Wednesday (9), 0. |
| `/demo/states` | 200 | Card states — DAYMARK demo | Card states |
| `/privacy` | 200 | Privacy — DAYMARK | Privacy |
| `/terms` | 200 | Terms — DAYMARK | Terms |
| `/no-such-page` | 404 | Page not found — DAYMARK | This page isn't on today's schedule. |
| `/demo/nope` | 404 | Page not found — DAYMARK demo | This page isn't on today's schedule. (inside the portal shell) |
| `/demo/bookings/zzz` | 404 | Booking not found — DAYMARK demo | We couldn't find that booking. |

Next 16 renders a `notFound()` inside the `/demo` segment on the client: the server HTML for `/demo/nope` and `/demo/bookings/zzz` is the error shell, and the portal 404 draws after hydration. This was the same on the production server. The root 404 is fully server-rendered. In the browser both portal 404s show the demo strip, sidebar, one `<main>` and the H1.

## Links and images

Crawled every same-origin link from 16 starting routes: 125 URLs, every page, query variant, image and font returned 200. Every HTML page has exactly one `<main>` and one `<h1>`. The demo bar's "Explore JabKit" points at the catalogue origin and was not treated as a DAYMARK route.

## Layout

`documentElement.scrollWidth` equalled the viewport at 320px on all 18 checked routes after the fixes, and the page never scrolls sideways (`scrollX` stays 0). Tables on `/demo/bookings` and `/demo/customers` scroll inside labelled, focusable regions. Home and Dashboard were also reviewed at 375px and 1440px in both themes; every other route at 1440px light, and the portal routes plus `/walkthrough` and `/product` in dark.

## Theme

Light and dark tokens live in `apps/bento/app/theme.css`. Every text pair measured at 5.18:1 or better in both modes. Field borders (`--jk-input`) now meet 3:1 against the card: 3.77:1 light, 3.54:1 dark. The demo-bar toggle switches `class="dark"` on `<html>`; the portal strip, tiles, charts and dialogs follow it.

## Keyboard and motion

- Skip link, then logo, then nav; focus ring is a 2px outline in `--jk-ring`, switched to the tile text colour on evergreen tiles.
- Mobile menu: opens under the header, Escape and Close dismiss it, focus returns to Menu, body scroll locks while open.
- Portal: sidebar drawer below 768px with Escape and focus return; profile menu; breadcrumbs truncate to one parent link on mobile.
- Tasks: every card has a "Move to…" menu; a move announces "Moved to In progress." and focus follows the card.
- Walkthrough: empty submit focuses the error summary and marks the three required fields invalid; a valid submit shows "Sending…", then the success heading takes focus.
- Booking detail: Confirm swaps the badge to Confirmed and replaces the actions with a focused message; Decline uses the dialog.
- Every stylesheet with a transition or animation has a `prefers-reduced-motion` rule; nothing depends on motion to be understood.

## Fixes made during QA

- Mobile menu sheet was invisible: the header's `backdrop-filter` made it the containing block for the fixed sheet. The sheet is now anchored absolutely under the sticky header.
- Breadcrumb separators were nested inside items (`<li>` in `<li>`), which broke hydration. Items and separators are now siblings.
- Home, Who it's for and How it works overflowed at 320px: photo tiles combined `aspect-ratio` with a `min-height`, which forced the width wider. The small-screen `min-height`s were removed.
- `/demo/customers` overflowed at 320px: the portal content column had no explicit track, so it grew to the table's minimum width. It is now `minmax(0, 1fr)`.
- Unknown `/demo/*` URLs fell through to the root 404 without the portal shell or a `<main>`. Added `app/demo/[...slug]/page.tsx` and `app/demo/not-found.tsx`.
- Empty-state illustrations rendered full width (the shared `.image` rule won the cascade) and read as a bright block in dark mode. They are fixed at 160px, rounded, and slightly dimmed in dark mode.
- Focus ring disappeared on evergreen tiles; `--ben-focus` now swaps it to the tile's text colour.
- `ErrorState`'s retry button was 36px tall; it is now the standard 44px button. Selected tiles now show a "Selected" flag with an icon, so colour is not the only signal.
- Removed a hidden walkthrough trigger (a business name of "fail" forced the failure state). `?state=error` remains the documented demo toggle.

## Deviations from the brief (kept, documented)

- The weekly chart is built in markup (labelled bars, written-out numbers, optional table) instead of `@/atoms/chart`: `recharts` is not a dependency of `apps/bento`.
- The calendar and task board are built in the app instead of `@/dashboard/fullscreen-calendar` and `@/dashboard/kanban-board`: both render their own `<h1>`, and neither supports the brief's clickable day-view blocks or a per-card "Move to…" menu.
- The header sets "DAYMARK" in HTML next to an inline SVG of the four-cell mark; the generated wordmark softens on "RK" at large sizes.
- The home hero photo tile spans 5 columns (not 4) so it aligns under the span-5 copy tile beside the span-7 dashboard.
- Small UI labels not in the brief were added where controls needed names (for example "Week", "Staff", "Move to…", loading and error lines for the `?state=` demo toggles). All live in each route's `_page/content.ts`. No prices, reviews, results or claims were added.

## Commands

```bash
pnpm exec biome check apps/bento design-systems/bento   # Checked 149 files. No fixes applied.
pnpm --filter @jabkit/bento typecheck                    # pass
pnpm --filter @jabkit/bento build                        # pass, 31 routes incl. 12 static booking pages
pnpm check:design-system-assets                          # Design-system asset check passed (12 systems).
```
