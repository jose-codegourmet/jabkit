# Retro: rules

These rules govern the proposed style. JabKit's [component contract](../../docs/adding-a-component.md) and [semantic theming](../../docs/theming.md) still apply. Exact palette and geometry values live in [tokens.json](tokens.json); [typography.json](typography.json) owns type measurements.

## Must

1. Name the material family before designing: analog desk, record collection, or device series. Choose one dominant family.
2. Use paper, teal, and ink as the interface palette; wider asset colors belong to the curated image series.
3. Use 4px corners for controls and panels. Keep decorative paper edges inside assets rather than applying torn masks to forms.
4. Use a 2px hard shadow on tactile controls; avoid stacking shadows on every decorative layer.
5. Keep body copy in a readable sans serif at 1rem or above. Typewriter labels are short; pixel fonts are optional display assets, never the body default.
6. Limit decorative rotations to three degrees and never rotate interactive hit areas or meaningful text.
7. Keep all titles, instructions, prices, and form labels in HTML even when an image resembles printed matter.
8. Below 48rem, remove decorative overlap, collapse collections to one column, and keep 44px minimum targets.

## Prefer

Use the page sequence that matches the actual job in [patterns.json](patterns.json). Replace sample copy with concrete information before adjusting type size. Generate an image series from one art-direction brief in [imagery.md](imagery.md), then evaluate the images in their real page positions.

## Avoid

- Mixing 1970s print, 1990s electronics, and neon arcade effects without a narrative reason
- Fake application chrome with nonfunctional buttons
- Scanlines, constant grain animation, and deliberately degraded body text
- Turning a pricing section into a puzzle or treasure hunt

## States and accessibility

Retain keyboard behavior, visible focus, persistent form labels, and text explanations for errors. Distinguish selected states with text or shape as well as color. For normal text, target at least 4.5:1; necessary control boundaries target 3:1. The shared [review standard and sources](../README.md#review-standard) explain the thresholds. The style does not relax these requirements.

Define loading, empty, error, disabled, and focus states for each interactive component. Keep typed values after a failed submission. Missing photography must leave a useful title or description; never hide the whole section. Reduce decorative motion as specified in [motion.json](motion.json). Static content must remain available before JavaScript enhancement.

## Acceptance review

Can you name the material world in one sentence? Does the page still work when decorative paper and objects are removed? Is the nostalgia in the imagery rather than in broken interaction conventions?

- Inspect widths of 360, 768, and 1440 CSS pixels, plus a 320px reflow check and 200% text zoom.
- Review both light and dark surfaces with long labels, a missing image, and an inline form error.
- Navigate without a mouse; ensure focus is visible and never hidden by sticky chrome.
- Disable motion and confirm the same content and actions are available.
- Compare the implemented visual against [system.md](system.md), not against a literal copy of a reference site.
