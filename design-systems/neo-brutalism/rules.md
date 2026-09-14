# Neo-brutalism: rules

These rules govern the proposed style. JabKit's [component contract](../../docs/adding-a-component.md) and [semantic theming](../../docs/theming.md) still apply. Exact palette and geometry values live in [tokens.json](tokens.json); [typography.json](typography.json) owns type measurements.

## Must

1. Use 2px borders consistently on actionable panels; reserve 1px rules for secondary organization.
2. Use the same 4px hard-shadow direction throughout. No blurred shadows or glows on default controls.
3. Keep radius at zero for buttons, fields, and panels. Cutout silhouettes belong to imagery, not random UI geometry.
4. Keep headings bold and compact, with tracking no tighter than -0.035em; do not distort live text to imitate custom lettering.
5. Use lime for action surfaces and dark ink for their labels in both themes. Do not use that lime as body text on a light page.
6. Limit visual collisions to decorative artwork; never overlap links, prices, input labels, or readable paragraphs.
7. Pressed controls move toward their shadow by at most 2px. Focus remains a separate visible outline.
8. At less than 48rem, remove decorative rotations, use one reading column, and keep all controls at least 44px high.

## Prefer

Use the page sequence that matches the actual job in [patterns.json](patterns.json). Replace sample copy with concrete information before adjusting type size. Generate an image series from one art-direction brief in [imagery.md](imagery.md), then evaluate the images in their real page positions.

## Avoid

- A thick border and a random sticker on every element
- Fake OS windows and pixel fonts without a retro brief
- Hover movements that relocate the pointer target
- Marquees containing the only version of essential content

## States and accessibility

Retain keyboard behavior, visible focus, persistent form labels, and text explanations for errors. Distinguish selected states with text or shape as well as color. For normal text, target at least 4.5:1; necessary control boundaries target 3:1. The shared [review standard and sources](../README.md#review-standard) explain the thresholds. The style does not relax these requirements.

Define loading, empty, error, disabled, and focus states for each interactive component. Keep typed values after a failed submission. Missing photography must leave a useful title or description; never hide the whole section. Reduce decorative motion as specified in [motion.json](motion.json). Static content must remain available before JavaScript enhancement.

## Acceptance review

Does the page still communicate its offer when all stickers and animations are removed? Are strong borders organizing real content? Can the primary action be found before reading the entire poster?

- Inspect widths of 360, 768, and 1440 CSS pixels, plus a 320px reflow check and 200% text zoom.
- Review both light and dark surfaces with long labels, a missing image, and an inline form error.
- Navigate without a mouse; ensure focus is visible and never hidden by sticky chrome.
- Disable motion and confirm the same content and actions are available.
- Compare the implemented visual against [system.md](system.md), not against a literal copy of a reference site.
