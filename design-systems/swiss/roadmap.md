# FRAME/01 implementation roadmap

This roadmap describes the fictional FRAME/01 Film Festival website from [epic #546](https://github.com/jose-codegourmet/jabkit/issues/546). It is planning documentation. Repository source and each ticket's file ownership remain authoritative.

## Product brief

FRAME/01 is a four-day independent film festival with screenings, filmmaker talks, and passes. Its audience includes local filmgoers, students, visiting filmmakers, and press. The primary task is to discover a film and move toward a ticket or pass choice.

All films, times, venues, passes, and checkout states are demo data. The site never claims live inventory, film rights, sponsors, payment, or a completed ticket purchase.

Brand: FRAME/01. Tagline: “Cinema, clearly seen.” Voice: concise, informative, and welcoming. Useful facts precede promotional language.

## Sitemap

| Route | Purpose | Primary action |
| --- | --- | --- |
| `/` | State what, when, and where | Explore the program |
| `/program` | Compare all demo films | View film |
| `/films/[slug]` | Review film facts and screenings | Select screening |
| `/schedule` | Filter the source-of-truth schedule | Select screening |
| `/venues` | Review arrival and access placeholders | See what is on here |
| `/about` | Explain the festival, talks, and process | Explore the program |
| `/tickets` | Compare three demo pass types | Choose pass |
| `/tickets/checkout` | Review a local demo selection and form states | Complete demo order |
| `/faq` | Answer access, arrival, refund, and contact questions | Contact placeholder |
| `/privacy` | Legal placeholder | None |
| `/terms` | Terms placeholder | None |
| `not-found.tsx` | Recover from an unknown route or film | Go to the program |

## Shared system

- Header: sticky paper surface, wordmark, Program, Schedule, Venues, About, and one filled Tickets button.
- Mobile menu: full-height focus-trapped sheet with five numbered destinations, festival date placeholder, and Close.
- CTA band: ticket comparison and schedule links with dedicated desktop and mobile images.
- Footer: near-black four-column layout with identity, festival links, visit links, contact placeholders, legal links, and repeated demo notice.
- Grid: twelve columns desktop, eight tablet, four mobile, with one gutter token.
- Accessibility: visible focus, 14px minimum metadata, semantic tables, meaningful alt, redundant ticket-state cues.

## Demo records

| Film | Category | Runtime | Screening | State |
| --- | --- | --- | --- | --- |
| The Quiet Current | Documentary | 82 min | Thu, 18:30, Cinema One | Available |
| Between Stations | Narrative | 104 min | Fri, 20:00, Hall B | Sold out |
| Small Suns | Shorts program | 76 min | Sat, 15:00, Cinema One | Not on sale yet |

Year, country, director, language, subtitles, age guidance, accessibility specifics, addresses, prices, and policies remain visibly marked client-to-confirm placeholders.

## Component mapping

| Need | JabKit starting point | Adaptation |
| --- | --- | --- |
| Header | `navigation-menu`, `button` | Grid-aligned links, one primary action, active rule plus weight |
| Film records | `card`, `badge` | Flat cards, stable crops, factual metadata, no scores |
| Schedule | `data-table`, `combobox`, `button-group` | Table source of truth plus day-grouped mobile lists |
| Calendar | `calendar-03` | Secondary fixed-day view, list retained beneath |
| Passes | `pricing28` | Three plans, no most-popular claim, placeholder prices |
| Questions | `accordion` | Numbered groups with direct anchored headings |
| Checkout | `input`, `label`, `textarea`, `button` | Local-only validation and review, no payment fields |
| Footer | `footer-column` | Four square, high-contrast information columns |

## Image production

The complete 18-asset set is defined in [imagery.md](imagery.md) and ticket [#630](https://github.com/jose-codegourmet/jabkit/issues/630). Jose generates the assets with Higgsfield Nano Banana Pro at 2k. No implementing agent substitutes another generator or invents provenance.

## Ticket order

1. [#554](https://github.com/jose-codegourmet/jabkit/issues/554): shared app setup. Complete.
2. [#633](https://github.com/jose-codegourmet/jabkit/issues/633): this specification folder.
3. In parallel: [#630](https://github.com/jose-codegourmet/jabkit/issues/630) images and [#631](https://github.com/jose-codegourmet/jabkit/issues/631) typed data.
4. [#632](https://github.com/jose-codegourmet/jabkit/issues/632): theme, fonts, layout, chrome, and shared components.
5. In parallel: [#634](https://github.com/jose-codegourmet/jabkit/issues/634)-[#643](https://github.com/jose-codegourmet/jabkit/issues/643) for home, program, film detail, schedule, venues, about, tickets, checkout, FAQ, legal pages, and 404.
6. [#644](https://github.com/jose-codegourmet/jabkit/issues/644): full-site QA.
7. After all seven design-system epics: shared catalogue [#658](https://github.com/jose-codegourmet/jabkit/issues/658) and registry usage [#659](https://github.com/jose-codegourmet/jabkit/issues/659).

Every sub-ticket owns only its declared files, uses a `ticket-<number>` branch, and lands in its own PR.

## Release criteria

- Every listed route is complete with finished demo copy, approved local imagery, and functioning navigation.
- The critical journey from program or schedule through the local checkout review works on desktop and touch with keyboard equivalents.
- Normal, selected, sold-out, unavailable, loading, empty, error, disabled, focus, and invalid-form states are visible and accurate.
- The schedule remains scannable as a table on desktop and day lists on mobile.
- Light, dark, reduced-motion, 320px reflow, 200% zoom, direct links, unknown slugs, and failed images are reviewed.
- The Swiss app typecheck, production build, scoped Biome check, asset verification, and relevant repository gates pass.
- The catalogue is updated only after all predecessor work and browser evidence are complete.
