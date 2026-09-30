# Bento Grid: rules

These rules govern the proposed DAYMARK style. JabKit's [component contract](../../docs/adding-a-component.md) and [semantic theming](../../docs/theming.md) still apply. Exact palette and geometry values live in [tokens.json](tokens.json); [typography.json](typography.json) owns type measurements.

## Must

1. Use semantic `--jk-*` tokens. The brand hex values in the tokens file are the palette. Do not add hardcoded Tailwind color classes.
2. Lay out tiles on a 12-column grid with `--ben-gap` (1rem, 1.5rem at 1280px and up), `--ben-radius` 1rem, and `--ben-pad` (1.25rem, 1.5rem at 1024px and up). Primary tiles span 6–8 columns, secondary 4, compact 3. A tile spans two rows only when its content needs it.
3. Keep DOM order equal to reading order and to the mobile stack order. Place tiles on desktop with `grid-column` and `grid-row` spans only. Never use CSS `order` or absolute positioning to rearrange tiles.
4. Nest one level at most. A tile can hold a list, a short table excerpt, a progress bar, or a mini chart. It never holds another bento grid.
5. Give every tile a visible label and name the region with it (`<section aria-labelledby>` or equivalent). Each tile answers one question.
6. Make a tile one of three kinds. A **link** tile is a single anchor with an evergreen hover border, focus ring, and trailing arrow. An **action** tile is a static surface with explicit buttons. A **static** tile has no hover, no pointer cursor, and no chevron. Static tiles never look clickable.
7. Show loading, empty, warning, actionable, selected, error, and static states with text, an icon, or an attribute as well as color. Warning reads “Needs attention” beside the apricot edge. Selected uses `aria-current`. Loading uses `aria-busy` and a polite live message.
8. Build every dashboard, table, chart, calendar, and board in code. No screenshots or generated images of product UI.
9. Give every chart a text equivalent linked with `aria-describedby` and a visible table or “Show numbers” disclosure. The weekly chart reads “Mon 6, Tue 9, Wed 8, Thu 7, Fri 10, Sat 5, Sun closed.”
10. Below 48rem, stack tiles in one column and keep controls at least 44px high. Focus is a 2px evergreen outline offset 2px and is never removed.

## Prefer

Use the page sequence that matches the job in [patterns.json](patterns.json). Plus Jakarta Sans for everything, with `tabular-nums` (`.jk-figure`, `.jk-num`) on times, counts, and tables. Short tile labels and one-sentence primary lines with real counts. Photos inside tiles at card radius. Generate the image series from [imagery.md](imagery.md), then judge each image in its real tile.

## Avoid

- Decorative mosaics where tiles answer no question, or tile sizes chosen to fill space rather than show priority
- Hover lift, pointer cursors, or chevrons on static tiles
- Nested grids, CSS `order`, and masonry that breaks reading order
- Glass, gradients, heavy shadows, and oversized hero digits
- Full-bleed photos behind text; any image that shows a screen, UI, or readable writing
- Customer results, testimonials, logos of customers, integration lists, or security claims the client has not approved

## Demo data

The site is a sample brand. The footer on every page says: “Numbers, names and bookings shown on this site are fictional demo data, not customer results.” The portal shows a strip on every `/demo/*` page with `role="note"`: “Demo portal. Juniper Street Studio is a fictional business and every number here is sample data.” and a “Back to DAYMARK site” link.

**Juniper Street Studio (demo)** is a fictional small service business with a front desk and four staff: Sam, Ana, Robin (front desk), and Kai; Jess is off today. The signed-in profile is “RL · Robin Lee · Front desk”. Dashboard values: “8 visits scheduled”, “3 bookings need a reply”, “2 customers to contact”, “4 people on shift”, and visits Mon–Sun 6, 9, 8, 7, 10, 5, closed. Never present these numbers as customer results or product performance.

Anything the client has not confirmed stays in the copy as a visible placeholder in the form `[… — client to confirm]`: price, setup timeline, import options, integration list, role permissions, support hours and channel, data handling, support email, privacy notice, the walkthrough length, and the copyright year. Render placeholders in a visibly marked span so they are never mistaken for final copy.

Forms and portal actions are demos. The walkthrough form makes no network call and simulates a short delay. Confirm, decline, add visit, move task, and mark contacted change in-memory state only. Legal pages say: “This site is a demo. The walkthrough form does not send data.”

## States and accessibility

Logical DOM reading order, named tiles, text equivalents for charts, keyboard-reachable actions, and responsive stacking are part of the style, not extras. Active navigation uses `aria-current="page"`. The marketing and portal Menu buttons expose `aria-expanded`; Esc and Close dismiss the sheet, focus returns to Menu, and scroll unlocks. The task board offers a “Move to…” menu on each card with a live region (“Moved to In progress.”); dragging is never the only way. Tables have real header cells and a sortable Date column that announces its sort.

Forms keep persistent labels and help text. A failed submit focuses an error summary that links to each field, keeps typed values, and shows inline errors linked with `aria-describedby`. Loading buttons set `aria-busy` and change their label, for example “Sending…”. Success replaces the form and moves focus to the heading.

Target at least 4.5:1 for ordinary text and 3:1 for necessary control boundaries and chart marks. The shared [review standard and sources](../README.md#review-standard) explain the thresholds. The style does not relax them. Chart colors need labels.

Define loading, empty, error, disabled, focus, hover, and selected states where the component supports them. Reduce decorative motion as specified in [motion.json](motion.json). Static content, including chart text equivalents, must render on the server before JavaScript enhancement.

## Acceptance review

Can an owner understand “one glance at the day” in one screen and find the walkthrough request? Does every tile answer one question and either state a fact or open its full view? Does the grid still read in the right order on a phone, with motion off and images missing?

- Inspect widths of 360, 768, 1024, 1280, and 1440 CSS pixels, plus a 320px reflow check and 200% text zoom.
- Review both light and dark surfaces with long labels, a missing image, a loading tile, an empty tile, and an inline form error.
- Navigate without a mouse; ensure focus is visible on link tiles and never hidden by the header, sidebar, or open sheet.
- Hover every static tile and confirm nothing changes. Hover every link tile and confirm the evergreen border and arrow.
- Compare mobile stack order with the DOM order on `/`, `/demo`, and `/demo/states`.
- Compare the implemented visual against [system.md](system.md) and the `ben-*` list, not against a literal copy of an unrelated site.
