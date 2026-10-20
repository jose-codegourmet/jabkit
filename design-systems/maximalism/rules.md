# Maximalism: rules

These rules govern the FULL VOLUME proposal. JabKit's [component contract](../../docs/adding-a-component.md) and [semantic theming](../../docs/theming.md) still apply. Exact values live in [tokens.json](tokens.json) and [typography.json](typography.json).

## Must

1. Give every page two registers: campaign (collage, stickers, display type, halftone, kinetic accents) and transactional (tickets, schedule table, policies, forms on a cream or ink surface in Inter, high contrast, no overlap).
2. Never let a decorative layer cover text, controls, or focus rings. Collage fills one side of a section or a bounded band; it never sits behind reading text, prices, tables, or forms.
3. Restrict Anton to short campaign phrases: H1 and H2, the CTA band headline, and the expanding campaign wordmark. Use Inter with tabular numerals for navigation, tables, tickets, forms, policies, prices, and set times.
4. Keep the header wordmark in its fixed readable form, never expanded or animated. Keep the Tickets button visible at every width.
5. Mark the current page with a lime underline plus `aria-current="page"`. Use a 3px lime focus ring with an ink offset that no sticker, tilt, or overlay can cover.
6. Never put essential copy inside an image. Act names, days, stages, and times are visible HTML text and never depend on hover or animation.
7. Give every kinetic accent a still version. Honor `prefers-reduced-motion` and provide a persistent Pause motion / Play motion toggle. Nothing flashes.
8. Pair every color meaning with text: stage and day badges carry the name, ticket selection uses a border and check plus the word Selected, sold out is a word, and clash notices use a warning treatment with a sentence.
9. Show the demo notice wherever demo data appears (Home, Lineup, Artist, Schedule, Tickets, Info), as a cream strip with ink text above the footer and inline near the data.
10. Keep `[… — client to confirm]` placeholders visible exactly as written for dates, venue, prices, fees, policies, contact details, and legal text.

## Demo data

- Artist names, stage names, set times, dates, venue, and prices are demo data. The eight acts are invented for the demo; never substitute real acts.
- No sponsors, partner logos, testimonials, attendance numbers, or countdowns anywhere. No social icons unless client-supplied links are confirmed.
- No fake scarcity: no “only N left” copy, urgency banners, or availability meters. Availability is a word. The Day 1 sold-out pass is labelled as a demo state.
- Forms and checkout work locally only. No tickets are sold, no payment is taken, and no message is sent.

## Prefer

Choose the page sequence from [patterns.json](patterns.json). Let the composition reflow on mobile by restacking expressive art above or below copy instead of hiding it. Use the list or table as the stable fallback for any card or carousel view. Put stickers in margins and corners, including the mobile menu sheet's corners only.

## Avoid

- Stickers, halftone, or collage behind prices, tables, forms, or policy text
- Display lettering for long headings, body copy, labels, or numbers in tables
- Hover-only names, auto-advancing carousels, or tilt that runs with motion paused
- Strobing, blinking, or rapidly alternating color fills
- Strikethrough prices, most-popular badges, or pressure copy on the ticket page
- Generated lettering outside the two logo assets

## States and accessibility

Show artist-card, schedule, ticket, loading, empty, error, sold-out, selected, disabled, and focus states. Loading skeletons do not shimmer when motion is paused. Errors use `role="alert"` with a Try again action; status updates such as result counts and plan changes use a polite live region. The plan toggle uses `aria-pressed` and announces “Added to your plan” or “Removed from your plan”. Schedule headers are sort buttons with `aria-sort`.

The mobile menu below 900px traps focus, closes on Esc and Close, returns focus to Menu, and locks body scroll; with reduced motion it appears without a slide. Dialogs return focus to their trigger. Forms keep labels visible, link errors with `aria-describedby`, focus the error summary on submit, and keep typed values. The venue map is inline SVG with an equivalent list.

Ordinary text meets at least 4.5:1 in light and dark; necessary control boundaries meet 3:1. The shared [review standard and sources](../README.md#review-standard) explain the thresholds. The style does not relax them.

## Acceptance review

Does the campaign feel huge while dates, venue, prices, and set times stay instantly readable? Can a visitor pick a ticket and build a plan with motion paused and without a mouse?

- Inspect 320, 375, 768, and 1440 CSS pixels plus 200% text zoom; no horizontal scroll at 320px.
- Review light and dark modes, keyboard use, touch, reduced motion, and the Pause motion toggle.
- Confirm no decoration overlaps text, controls, or focus rings at any width.
- Verify the demo notice and every placeholder appear where required.
- Check long act names and placeholders, a missing image, and every listed state.
- Compare the final app to [system.md](system.md), not to a literal copy of any reference.
