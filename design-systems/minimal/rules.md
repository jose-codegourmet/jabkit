# Minimal: rules

These rules govern the proposed style. JabKit's [component contract](../../docs/adding-a-component.md) and [semantic theming](../../docs/theming.md) still apply. Exact palette and geometry values live in [tokens.json](tokens.json); [typography.json](typography.json) owns type measurements.

## Must

1. Use one dominant visual per viewport; group supporting views through alignment rather than boxes.
2. Keep ordinary text at 1rem or larger and secondary captions at 0.875rem or larger. Quiet is a matter of hierarchy, not faint type.
3. Use a 44px minimum control height, a 1px border when necessary, and a 2px focus outline with 3px offset.
4. Keep buttons, inputs, and framed panels square. Images are unframed unless their edge disappears into the page.
5. Use no default card shadow. Reserve elevation for actual overlays, and make overlay boundaries visible in dark mode.
6. Limit action color to functional emphasis. Let photographs carry naturally varied colors.
7. Keep service comparisons in aligned groups, with inclusions and conditions next to the action.
8. At less than 48rem, collapse intentional empty grid tracks and keep the primary action adjacent to its description.

## Prefer

Use the page sequence that matches the actual job in [patterns.json](patterns.json). Replace sample copy with concrete information before adjusting type size. Generate an image series from one art-direction brief in [imagery.md](imagery.md), then evaluate the images in their real page positions.

## Avoid

- Uniform rounded tiles around every work sample
- Giant blank openings with no indication of the practice
- Low-contrast captions, hover-only project names, or hidden contact links
- An ornamental image where a relevant work sample is available

## States and accessibility

Retain keyboard behavior, visible focus, persistent form labels, and text explanations for errors. Distinguish selected states with text or shape as well as color. For normal text, target at least 4.5:1; necessary control boundaries target 3:1. The shared [review standard and sources](../README.md#review-standard) explain the thresholds. The style does not relax these requirements.

Define loading, empty, error, disabled, and focus states for each interactive component. Keep typed values after a failed submission. Missing photography must leave a useful title or description; never hide the whole section. Reduce decorative motion as specified in [motion.json](motion.json). Static content must remain available before JavaScript enhancement.

## Acceptance review

Can someone identify the practice, distinguish two projects, and find the contact route without hover? Does every large gap improve a relationship between real pieces of content?

- Inspect widths of 360, 768, and 1440 CSS pixels, plus a 320px reflow check and 200% text zoom.
- Review both light and dark surfaces with long labels, a missing image, and an inline form error.
- Navigate without a mouse; ensure focus is visible and never hidden by sticky chrome.
- Disable motion and confirm the same content and actions are available.
- Compare the implemented visual against [system.md](system.md), not against a literal copy of a reference site.
