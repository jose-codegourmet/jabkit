# Editorial: rules

These rules govern the proposed style. JabKit's [component contract](../../docs/adding-a-component.md) and [semantic theming](../../docs/theming.md) still apply. Exact palette and geometry values live in [tokens.json](tokens.json); [typography.json](typography.json) owns type measurements.

## Must

1. Give the page one clear title, a short introduction, and a meaningful heading hierarchy.
2. Use 1.0625rem body text with generous leading and a 66ch maximum reading measure. Captions may be 0.875rem, never faint.
3. Use the same caption position and metadata order for comparable entries.
4. Limit decorative paper overlap to one visual composition per section; leave body text and controls on stable surfaces.
5. Use typography to distinguish title, standfirst, section heading, body, and caption. Do not swap font families mid-sentence for decoration.
6. Use actual dates, authors, locations, and credits when available; omit unsupported metadata.
7. Keep practical destinations such as a directory, booking, or RSVP accessible without completing a narrative sequence.
8. Below 48rem, move marginalia into the reading flow, remove image overlap, and retain the chronological or argumentative order.

## Prefer

Use the page sequence that matches the actual job in [patterns.json](patterns.json). Replace sample copy with concrete information before adjusting type size. Generate an image series from one art-direction brief in [imagery.md](imagery.md), then evaluate the images in their real page positions.

## Avoid

- Magazine decoration with no meaningful article structure
- Text baked into paper scans as the only accessible version
- An identical feature-card grid replacing every chapter
- Invented quotes, issue numbers, venue ratings, or image credits

## States and accessibility

Retain keyboard behavior, visible focus, persistent form labels, and text explanations for errors. Distinguish selected states with text or shape as well as color. For normal text, target at least 4.5:1; necessary control boundaries target 3:1. The shared [review standard and sources](../README.md#review-standard) explain the thresholds. The style does not relax these requirements.

Define loading, empty, error, disabled, and focus states for each interactive component. Keep typed values after a failed submission. Missing photography must leave a useful title or description; never hide the whole section. Reduce decorative motion as specified in [motion.json](motion.json). Static content must remain available before JavaScript enhancement.

## Acceptance review

Can the reader explain the page's point of view and follow its evidence? Do captions contribute information? Is every practical task accessible independently of the decorative storytelling?

- Inspect widths of 360, 768, and 1440 CSS pixels, plus a 320px reflow check and 200% text zoom.
- Review both light and dark surfaces with long labels, a missing image, and an inline form error.
- Navigate without a mouse; ensure focus is visible and never hidden by sticky chrome.
- Disable motion and confirm the same content and actions are available.
- Compare the implemented visual against [system.md](system.md), not against a literal copy of a reference site.
