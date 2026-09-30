# Bento Grid

The whole day, in view.

**Status:** authored JabKit proposal for **DAYMARK**. Read the [reference note](references.md) for what was and was not observed. Palette, type, layout rules, and asset direction below come from epic [#545](https://github.com/jose-codegourmet/jabkit/issues/545).

## Philosophy and feeling

DAYMARK is a shared portal for small service businesses. Owners, front-desk staff, and team leads see bookings, tasks, customer follow-ups, and a weekly visits summary on one screen. Today the owner checks a calendar, a group chat, and a spreadsheet to understand the day. DAYMARK brings the important pieces into one glance and keeps every piece traceable to its full record.

Personality is organized, pragmatic, warm, and quietly confident. Voice is plain and operational. Say “3 bookings need a reply”, not “Unlock your productivity potential”.

A bento grid fits because the product is a set of answers. Each tile answers one question: What's on today? Who's waiting for a reply? Who should we call back? Who's on shift? How is the week going? Visual size reflects priority, not decoration. The grid has to work beyond a marketing hero, so the same system runs the marketing benefits, the portal overview, and a reference board of card states.

The website goal is to get a business owner to **request a walkthrough**. The secondary action opens a sample dashboard built entirely in code.

## Page structure and spatial rhythm

The sample lives at the root of `apps/bento`. Two surfaces share one theme: the marketing site (Home, Product, Who it's for, How it works, FAQ, Request a walkthrough, Privacy, Terms, 404) and the demo portal under `/demo` (Dashboard, Bookings, Booking detail, Calendar, Customers, Tasks, Reports, Card states). The portal uses the fictional business **Juniper Street Studio (demo)**.

### Bento layout rules

| Rule | Value |
| --- | --- |
| Grid | 12 columns inside `--jk-content-max` (80rem) |
| Gap | `--ben-gap` 1rem (16px), 1.5rem (24px) at 1280px and up |
| Radius | `--ben-radius` 1rem (16px) on tiles and on photos inside tiles; controls use `--jk-radius` 0.75rem |
| Padding | `--ben-pad` 1.25rem (20px), 1.5rem (24px) at 1024px and up |
| Spans | Primary 6–8 columns, secondary 4, compact 3, full-width rows 12 |
| Tall tiles | Span 2 rows only when content needs it |
| Nesting | One level. A tile may hold a list, a table excerpt, or a mini chart, never another bento grid |
| Order | DOM order = reading order = mobile stack order. Desktop placement uses only `grid-column` and `grid-row` spans, never `order` |
| Stacking | One column below 768px |

`--ben-gap`, `--ben-radius`, and `--ben-pad` are app-local custom properties declared in `apps/bento/app/theme.css`, alongside `--ben-shadow` (a 1px hairline), tile tints (`--ben-tile-mint`, `--ben-tile-apricot`, `--ben-tile-evergreen`), the warning edge and text colors, and the demo-strip tint (`--ben-strip`). The [foundation proposal](tokens.json) carries the base values as `--jk-space-grid` (1rem) and `--jk-space-card` (1.25rem). `--jk-radius` is 0.75rem in both modes and rounds controls; tiles use `--ben-radius`.

### Tile kinds

- **Static:** states a fact. No hover, no pointer cursor, no chevron. The mini dashboard in the hero, the booking summary tiles, report summaries, and the roster are static.
- **Link:** the whole card is one anchor. Its accessible name comes from the tile title. Hover and focus turn the border evergreen and a trailing arrow shows the destination.
- **Action:** a static surface that holds explicit buttons, for example Confirm booking, Reschedule, and Decline.

A tile never mixes a whole-card link with buttons inside it.

### Tile states

| State | Signal |
| --- | --- |
| Loading | Skeleton rows, `aria-busy`, polite live message such as “Loading bookings…” |
| Empty | One sentence and an optional action, for example “No follow-ups right now.” with `ben-empty-list` at 160px |
| Warning | Apricot left edge, an icon, and the visible words “Needs attention” |
| Actionable | Whole-card link, evergreen hover border, focus ring, arrow |
| Selected | `aria-current` and an evergreen border, for example “Tuesday” |
| Error | Destructive alert text such as “Couldn't load the roster. Try again.” and a Try again button |
| Static | No hover, no cursor change, no chevron, for example “Desk covered until 5:00 pm” |

Color is never the only signal. Every state carries text, an icon, or an attribute as well.

On small screens the grid stacks in DOM order. The CTA image moves below its copy. The portal sidebar collapses behind a Menu button and breadcrumbs truncate to the parent link.

## Typography and voice

One family, **Plus Jakarta Sans**, for headings, tile labels, tile primary lines, tables, and forms. It is a clear, slightly wide geometric sans that matches the wordmark direction. Weight and size separate a tile label (“Confirmation”) from its primary line (“3 bookings need a reply”). Numbers use `tabular-nums` through the app classes `.jk-figure` (tile primary lines and counts) and `.jk-num` (times, table cells, chart labels) so values align. Numeric emphasis stays restrained: no oversized hero digits. Role measurements are in [typography.json](typography.json).

Copy is plain and specific. Tile labels are one or two words. Primary lines are one sentence with a real count. Actions are verbs that name the destination: View day, Review bookings, Open follow-ups, View roster, View report.

## Color, shape, and interaction

[tokens.json](tokens.json) is a complete light and dark proposal. Brand hex values, from the brief:

| Role | Hex | Semantic mapping |
| --- | --- | --- |
| Chalk | `#F5F6F2` | `--jk-background`, primary foreground |
| Ink | `#26332F` | `--jk-foreground`, warning foreground |
| Evergreen | `#386A57` | `--jk-primary`, `--jk-ring`, `--jk-chart-1` |
| Mint | `#CDE6D7` | `--jk-accent` |
| Apricot | `#F6C794` | `--jk-warning` |
| Cool gray | `#E3E8E4` | `--jk-muted`, `--jk-secondary` |

These are proposed brand values, not the default JabKit runtime palette. Tiles use a whiter chalk card surface (`#FCFDFB`; popovers `#FFFFFF`) so they lift off the chalk page with a subtle `#D9E0DB` border and at most a hairline shadow. Muted text is a darker ink tint (`#53625C`, 5.18:1 on cool gray and 5.92:1 on chalk). Success reuses evergreen.

Dark mode uses an ink-green background (`#121A17`), tiles on `#1A2420`, chalk text (`#EEF1EC`), and a lighter evergreen primary (`#82C4A4`) with `#0F1F18` text on it. Apricot stays the warning surface with ink text. Every measured text pair in the shipped theme is at least 5.18:1 in both modes.

Surfaces are light rounded panels. No glassmorphism, gradients, or heavy drop shadows. [rules.md](rules.md) defines acceptance. [components.json](components.json) describes foundational components. The page tables in [roadmap.md](roadmap.md) map the rest.

## Imagery

Product UI is built in code. Every dashboard, table, chart, calendar, and board is real markup with labelled demo data. The weekly visits chart is markup too: labelled bars, a written-out text equivalent, and an optional table, with no charting library. Imagery is identity, calm morning daylight in small tidy service businesses, a few material textures that echo the grid, and two small empty-state spot illustrations. Photos always sit inside tiles at card radius, never full-bleed behind text. Portal pages are almost image-free.

Asset IDs use the `ben-*` prefix. Read [imagery.md](imagery.md) before commissioning anything. Jose generates images in Higgsfield. Coding agents do not.

The logo is a DAYMARK wordmark and a small four-cell mark: one wide cell across the top, two small cells and one tall cell below, one cell filled evergreen. The delivered wordmark raster blurs slightly on “RK”, so the header draws the four-cell mark as an inline SVG and sets “DAYMARK” in HTML beside it. `ben-logo-symbol` remains the approved raster reference for the mark and the favicon redraw.

## Variations within this system

The default is a daylight operations tool: chalk page, whiter tiles, evergreen actions, mint and apricot as quiet accents. The dark companion keeps the same grid and state signals on ink-green. A denser portal variant may reduce `--ben-pad` to 16px inside tables, but spans, radius, and the one-level nesting rule do not change. Do not add a second accent hue, decorative gradient tiles, or tiles that exist only to fill a gap.

## Where the boundary lies

Minimal removes structure until only the essentials remain. Luxury stages desire with photography. Neo-brutalism uses hard edges and loud color. Claymorphism makes the interface tactile and playful. Bento Grid makes information modular: every tile is a named answer with a known size, a known state, and a path to the full view. A bento that is only a pretty mosaic of feature cards is not this system.

Use [patterns.json](patterns.json) for page sequence, [motion.md](motion.md) for hover and state changes, and [migration.md](migration.md) to apply the direction in the bento app.
