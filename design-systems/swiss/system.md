# Swiss Design

A cultural program made legible through type, grid, and disciplined contrast.

**Status:** authored JabKit proposal for FRAME/01. The values below are original recommendations based on the implementation brief in [epic #546](https://github.com/jose-codegourmet/jabkit/issues/546).

## Philosophy and feeling

Swiss Design treats information hierarchy as the identity. FRAME/01 is curious, rigorous, contemporary, and welcoming. Film titles can feel culturally sharp because dates, venues, runtime, language, accessibility, and ticket state remain easy to compare.

The system uses a paper field, near-black type, cool-gray secondary information, and one signal-red marker. The red slash, selected rule, and focus accent connect the brand without turning every status into a color code. The result should feel composed, never sterile or cryptic.

## Page structure and spatial rhythm

Use twelve columns on desktop, eight on tablet, and four on mobile inside a 90rem maximum width. A single gutter token controls every page. Blocks may span unequal widths, but their starts and ends always land on a column line. Rules separate real groups such as day, venue, or film; they are not decorative graph paper.

Large numerals and program indices establish orientation. Film stills are content and keep stable aspect ratios. Schedule and ticket interfaces remain coded HTML with captions, headers, and explicit state words. On mobile, replace dense tables with day-grouped lists rather than forcing horizontal scrolling.

## Typography and voice

Inter Tight supplies the intended neo-grotesk character, strong numerals, and compact metadata. Large headings are short and direct. Body copy gives facts before promotional adjectives. Film titles, ticket actions, and placeholder policy text use the same sans family; decorative italics are unnecessary.

The scale and fallback stacks live in [typography.json](typography.json). Metadata never drops below 14px. Test large numerals, the FRAME/01 slash, long placeholders, and 200% text zoom before fixing line breaks.

## Color, shape, and interaction

[tokens.json](tokens.json) defines complete light and dark proposals. Controls and cards are square. Shadows are absent. The page uses rules, weight, and spacing for hierarchy. Signal red is reserved for brand markers, the principal action, active navigation rules, and focus accents. Ticket availability always includes a glyph or shape and text.

## Imagery

Film stills and venue photographs use level cameras, true color, fine grain, and consistent crops. Small real-world red accents may echo the identity. Images sit within column spans and never replace schedule, ticket, pass, or form UI.

The required 18-asset series, crop rules, and production limits are in [imagery.md](imagery.md). Copy, navigation, prices, and functional states remain HTML.

## Where the boundary lies

Minimalism removes competing signals. Swiss Design actively constructs a public information system. Neo-brutalism exposes edges and force; Swiss Design uses rules more quietly and depends on exact alignment. Editorial design can prioritize narrative rhythm; FRAME/01 prioritizes comparison and orientation.

Use [patterns.json](patterns.json) for page sequences, [motion.md](motion.md) for restrained behavior, and [migration.md](migration.md) for source-aware implementation.
