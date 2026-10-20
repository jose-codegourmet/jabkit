# Maximalism

A loud, layered festival campaign with a calm ticket counter inside it.

**Status:** authored JabKit proposal for FULL VOLUME. The values below are original recommendations based on the brief and build brief in [epic #547](https://github.com/jose-codegourmet/jabkit/issues/547). The palette hex values are the brief's proposed brand values.

## Philosophy and feeling

Maximalism earns its volume by being specific. FULL VOLUME is a fictional two-day independent music and visual arts festival for music fans aged 18+, local creative communities, and visiting attendees. The brand is exuberant, inclusive, curious, and unapologetic. Its tagline is “More sound. More color. More together.”

The site can be loud, layered, and expressive, but the purchase path is calmer than the campaign imagery. Every page therefore has two registers:

- **Campaign:** collage, stickers, oversized display type, halftone, and kinetic accents.
- **Transactional:** tickets, the schedule table, policies, and forms on a cream or ink surface in the UI sans, with high contrast and no overlap.

Decorative layers never cover text, controls, or focus rings. Every kinetic accent has a still version and nothing flashes. Voice is punchy and specific; it never uses fake scarcity or overpromises the lineup.

## Page structure and spatial rhythm

Layered stickers, conflicting scales, unexpected crops, and dense posters sit on a consistent content grid with consistent CTA placement. Home runs loud to quiet in bands: dense hero collage beside a fixed cream facts card, then artist cards, four stage emblems on halftone, quiet table and ticket panels, a visual-arts collage beside prose, and the CTA collage.

Collage fills one side of a section or a bounded band. It never sits behind reading text, prices, tables, or forms. Stickers may overlap images and edges, never copy or focus rings. Page headers on Lineup, Schedule, and Info use a bounded campaign band with the copy on a solid ink panel; everything below is quiet.

On mobile the composition reflows intentionally. Headline, facts, and CTAs come first and the collage restacks above or below copy rather than being hidden. The Tickets button stays visible in the header at every width.

## Typography and voice

Oversized display headlines pair with a highly legible UI sans. Anton is the display face, restricted to short campaign phrases: H1 and H2, the CTA band headline, and the expanding campaign wordmark. Inter carries navigation, tables, tickets, forms, policies, and prices, with tabular numerals for set times and prices.

The logo is a compact FULL VOLUME wordmark whose letters can expand in campaign layouts but keep a fixed readable form in navigation and tickets. The expanding version is built in code with type and CSS transforms, not generated. The role scale and fallback stacks live in [typography.json](typography.json).

## Color, shape, and interaction

The palette is ink `#171327`, hot pink `#F647A4`, acid lime `#D5F150`, cobalt `#3958E8`, tangerine `#FF8D4C`, and cream `#FFF6E4`. [tokens.json](tokens.json) maps it onto complete light and dark `--jk-*` values that mirror `apps/maximalism/app/theme.css`: cream and ink carry transactional surfaces, hot pink is the ticket action with ink text, lime marks current navigation and focus, and tangerine carries warnings such as schedule clashes.

The header is a sticky ink bar with cream text. Current navigation uses a lime underline plus `aria-current`. Focus uses a 3px lime ring with an ink offset. Selected ticket cards use a 3px ink border and a lime check, never color alone. Stage and day badges pair a color with the stage or day name as text.

## Imagery

The visual world is original hand-made paper collage: cut and torn paper, halftone fragments, die-cut stickers, hand-drawn marker arrows, stars, and squiggles, and stage symbols, in the six brand colors under flat overhead light. Figures are stylised cut-paper illustrations of fictional people, never photographs or likenesses of real artists.

Essential copy never lives inside an image. Artist art appears only where the act's name, day, stage, and time are also in HTML. Tickets, the schedule table, Info, Contact, and the venue map stay image-free and are built in code. The full 22-asset set is in [imagery.md](imagery.md).

## Where the boundary lies

Neo-brutalism exposes structure with hard edges and force; maximalism layers color, pattern, and scale on top of a stable grid. Retro borrows a period's texture; maximalism's collage is contemporary and multi-voiced. Luxury stages attention through restraint; maximalism stages energy through abundance, then deliberately goes quiet wherever a visitor has to read, compare, or decide.

Use [patterns.json](patterns.json) for page sequences, [motion.md](motion.md) for kinetic accents and the pause control, and [migration.md](migration.md) for source-aware implementation. [rules.md](rules.md) holds the acceptance checklist.
