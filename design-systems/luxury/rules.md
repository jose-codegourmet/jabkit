# Luxury: rules

These rules govern the proposed style. JabKit's [component contract](../../docs/adding-a-component.md) and [semantic theming](../../docs/theming.md) still apply. Exact palette and geometry values live in [tokens.json](tokens.json); [typography.json](typography.json) owns type measurements.

## Must

1. Use one commanding image in the opening and preserve its subject on every breakpoint.
2. Keep the primary reservation or inquiry action visible without completing an intro animation.
3. Use 1rem or larger body text; generous spacing must not be purchased by making labels tiny.
4. Use thin but visible 1px boundaries and square controls. A delicate display face must retain readable strokes on real screens.
5. Keep ordinary cards flat. Use photo composition and spacing for depth instead of layers of frosted panels.
6. Place text on solid semantic surfaces by default. Over-image text needs a tested scrim or a quiet crop in both modes.
7. Show actual service inclusions, conditions, and next steps. Do not hide useful information merely to look exclusive.
8. Below 48rem, reduce margins, keep controls at least 44px high, and replace cinematic landscape crops when necessary.

## Prefer

Use the page sequence that matches the actual job in [patterns.json](patterns.json). Replace sample copy with concrete information before adjusting type size. Generate an image series from one art-direction brief in [imagery.md](imagery.md), then evaluate the images in their real page positions.

## Avoid

- Gold borders, beige backgrounds, and script type used as automatic luxury shorthand
- Autoplay audio, mandatory intro sequences, and scroll hijacking
- Invisible navigation over a busy photograph
- Generated imagery used to misrepresent a real property, product, or completed commission

## States and accessibility

Retain keyboard behavior, visible focus, persistent form labels, and text explanations for errors. Distinguish selected states with text or shape as well as color. For normal text, target at least 4.5:1; necessary control boundaries target 3:1. The shared [review standard and sources](../README.md#review-standard) explain the thresholds. The style does not relax these requirements.

Define loading, empty, error, disabled, and focus states for each interactive component. Keep typed values after a failed submission. Missing photography must leave a useful title or description; never hide the whole section. Reduce decorative motion as specified in [motion.json](motion.json). Static content must remain available before JavaScript enhancement.

## Acceptance review

Does the photography reveal something specific about the offer? Can a visitor make an informed inquiry immediately? Does the experience still feel considered with motion disabled?

- Inspect widths of 360, 768, and 1440 CSS pixels, plus a 320px reflow check and 200% text zoom.
- Review both light and dark surfaces with long labels, a missing image, and an inline form error.
- Navigate without a mouse; ensure focus is visible and never hidden by sticky chrome.
- Disable motion and confirm the same content and actions are available.
- Compare the implemented visual against [system.md](system.md), not against a literal copy of a reference site.
