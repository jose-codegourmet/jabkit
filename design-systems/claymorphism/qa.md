# Pillo full-site QA

Ticket: [#569](https://github.com/jose-codegourmet/jabkit/issues/569). Epic: [#536](https://github.com/jose-codegourmet/jabkit/issues/536).

Reviewed on the local app (`pnpm --filter @jabkit/claymorphism dev`, `http://localhost:3106`) in headless Chrome. Cream `sampleImage` stand-ins are the intended imagery until #555; they were not replaced.

## Checklist

| Check | Result |
| --- | --- |
| Every site-map route loads; unknown detail slugs 404 | Pass |
| Internal links and images | Pass |
| No horizontal scroll at 320px; checked 375px and 1440px | Pass |
| Light and dark readable; theme toggle works | Pass, after fixes |
| Keyboard: menus, dialogs, forms usable; focus visible | Pass, after the menu fix |
| `prefers-reduced-motion` | Pass |
| Demo data labelled; no invented prices, reviews, or stats; placeholders visible | Pass |
| Copy matches epic #536 | Pass, with one documented FAQ choice |
| typecheck, build, Biome, `check:design-system-assets` | Pass |

## Routes

| Route | Status | Title | H1 |
| --- | --- | --- | --- |
| `/` | 200 | Pillo — Little steps. Lighter days. | Make room for easier mornings. |
| `/how-it-works` | 200 | How it works — Pillo | How Pillo works |
| `/for-families` | 200 | For families — Pillo | Made for the whole crew |
| `/routines` | 200 | Routine ideas — Pillo | Routine ideas |
| `/routines/morning` | 200 | Morning routine — Pillo | Morning routine |
| `/routines/after-school` | 200 | After school routine — Pillo | After school routine |
| `/routines/bedtime` | 200 | Bedtime routine — Pillo | Bedtime routine |
| `/pricing` | 200 | Pricing — Pillo | Simple plans for busy families |
| `/faq` | 200 | FAQ — Pillo | Questions and answers |
| `/start` | 200 | Create a free board — Pillo | Create a free board |
| `/start?routine=morning` | 200 | Create a free board — Pillo | Create a free board. Board name prefills to Morning; starting routine is Morning. |
| `/contact` | 200 | Contact — Pillo | Say hello |
| `/privacy` | 200 | Privacy — Pillo | Privacy policy |
| `/terms` | 200 | Terms — Pillo | Terms of use |
| `/does-not-exist` | 404 | Page not found — Pillo | This page wandered off. |
| `/routines/not-a-routine` | 404 | Routine not found — Pillo | We couldn't find that routine. |

Primary CTAs match the site map: Create a free board or Create your first board to `/start`, Use this routine to `/start?routine={slug}`, form submits on `/start` and `/contact`, legal pages return home from the header wordmark, and the global 404 offers Go to home and See how it works.

## Links and images

Crawled every same-origin link from `/`. Visited `/`, `/how-it-works`, `/for-families`, `/pricing`, `/faq`, `/start`, `/routines`, `/routines/morning`, `/routines/after-school`, `/routines/bedtime`, `/contact`, `/privacy`, and `/terms`. No internal 404s.

Every `<img>` completed with a non-zero natural size. Sources are cream SVG data URIs from `sampleImage` (butter, coral, lavender, and mint blobs). `/fonts/nunito.ttf` and `/fonts/nunitosans.ttf` return 200.

The demo bar link "Explore JabKit" points at the catalogue origin (`localhost:3000` in development). It is outside this site and was not treated as a Pillo route.

## Layout

`documentElement.scrollWidth` matched `clientWidth` at 320, 375, and 1440 on `/`, `/how-it-works`, `/for-families`, `/routines`, `/routines/morning`, `/routines/after-school`, `/routines/bedtime`, `/pricing`, `/faq`, `/start`, `/contact`, `/privacy`, `/terms`, the global 404, and an unknown routine slug. The mobile rail (wordmark, Start free, Menu) fits at 320. The open menu does not widen the page.

## Theme

The demo-bar toggle sets `class="light"` or `class="dark"` on `<html>`. Body text switches to cream on the dark plum canvas. Rechecked text that paints its own colour (not only inherited colour) against the nearest painted background in both themes. After the fixes below, nothing on the home page fell under WCAG AA (4.5:1 for normal text, 3:1 for large text). Spot-checked the other routes the same way before the fixes; the only failures were the two listed under Fixes.

## Keyboard and motion

- Skip link shows a 3px plum outline. Buttons, links, and fields use the clay focus ring from `theme.css`.
- Mobile menu: Enter opens it, focus moves to Close menu, Tab cycles How it works, For families, Pricing, FAQ, Routine ideas, Contact, and Close menu, Shift+Tab reverses that cycle, Escape closes it, focus returns to Menu, and body scroll unlocks. The sheet is `role="dialog"` and `aria-modal="true"`.
- There is no carousel. The menu sheet is the only overlay.
- FAQ and pricing accordions open from the keyboard (`aria-expanded` becomes `true`).
- `/start`: empty submit shows "Check 3 things before continuing." when the board name is already filled, with links to the invalid fields. A completed form reaches "Your board is ready." A blank starting routine shows the empty-board copy and the Example board badge. `?routine=morning` prefills the board name and the select.
- `/contact`: empty submit shows "Add your name." A valid submit reaches "Thanks, {name}. Your message is on its way."
- `prefers-reduced-motion: reduce`: button transitions and transforms are none, the menu uses the fade keyframes (no 8px slide), the loading spinner does not spin, the celebrate badge animation is removed, and step completion skips the squash animation. Copy, progress text, and badges stay on screen.

## Demo data and copy

Footer sample notice is on every page. Boards carry the Example board badge. Names are Maya, Leo, Dad, and Grandma Rosa with initial avatars. Prices, plan limits, legal text, support email, and reply time stay in `[… client to confirm]` placeholders. Draft FAQ answers are marked `(draft)`. No reviews, ratings, or adoption stats.

Copy matches the epic page tables, including SEO titles and descriptions.

Home "Questions parents ask first" asks for four questions from the Getting started group. That group has three questions. The page shows those three plus "Can two caregivers manage a board?" from Sharing, which is the fourth question named in the epic's earlier FAQ list. Answers are the same strings as `/faq`. This was already recorded in `app/_data/faq.ts` and was left as is.

## Fixes

- Home eyebrow "Family routines, made visible" used `--jk-primary` (`#ff826e`) on cream (`#fff8f0`), about 2.3:1. It now uses `--jk-status-next`, which stays above 4.5:1 on the light cream card and on the dark clay surface.
- The home progress tile is mint. Its label used `text-foreground`, so dark mode painted cream (`#fff8f0`) on mint (`#a8dcc4`), about 1.5:1. The label now inherits the tile's ink.
- The mobile menu focused Close menu and the next Tab left the sheet, so the links were only on the way back. Tab and Shift+Tab now stay inside the sheet until Escape or a link.
- An unknown routine slug returned 404 with the right heading, but the document title was the homepage title. It is now "Routine not found — Pillo".

## Commands

Run from the repo root after these fixes:

- `pnpm --filter @jabkit/claymorphism typecheck`
- `pnpm --filter @jabkit/claymorphism build`
- `pnpm exec biome check apps/claymorphism`
- `pnpm check:design-system-assets`
