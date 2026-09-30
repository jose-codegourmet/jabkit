# FRAME/01 full-site QA

Date: 2026-09-30

## Result

The FRAME/01 sample site passed its app-specific release checks.

- [x] Every site-map route loads. The three film slugs prerender; unknown film slugs and unknown routes show the intended 404.
- [x] Automated crawl found 20 internal destinations with no broken links. Visible content images loaded successfully; hidden responsive image variants were also verified from committed assets.
- [x] No horizontal overflow at 320px, 375px, or 1440px across the home, program, three film pages, schedule, venues, about, tickets, checkout states, FAQ, privacy, terms, and 404 routes.
- [x] Light and dark palettes are readable. The DemoBar theme control changes the root theme state correctly.
- [x] Keyboard checks passed: the mobile menu traps focus, Escape closes it, focus returns to the Menu trigger, filter and selection controls are reachable, and checkout controls operate from the keyboard.
- [x] Reduced-motion mode preserves content and disables nonessential motion through the global media query.
- [x] Demo notices appear on program, screening, pass, and checkout surfaces. Prices, policy details, addresses, dates, and unsupplied facts remain visibly marked as client-confirmation placeholders.
- [x] Page copy and route metadata were compared with issue #546.

## Interaction checks

- Schedule day selection updates the URL (`?day=fri`) and result count.
- Venue links open filtered schedule URLs.
- Available screenings can be selected and continued to checkout.
- Sold-out and not-on-sale checkout states hide the details form and route back to the schedule.
- Checkout shows a three-field validation summary, an 800 ms completing state, and the demo success reference without sending data or collecting payment details.
- The mobile navigation was checked at 375px for open, focus containment, Escape close, and focus restoration.

## Commands

```text
pnpm --filter @jabkit/swiss typecheck       PASS
pnpm --filter @jabkit/swiss build           PASS
pnpm exec biome check apps/swiss            PASS (warnings only)
pnpm check:design-system-assets              PASS
```

The broader `pnpm check` remains blocked by pre-existing Biome errors in other design-system apps, beginning in `apps/editorial`; no files outside the QA ticket's ownership were changed.
