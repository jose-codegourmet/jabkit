# Maximalism: motion

Kinetic accents add energy to the campaign register; the transactional register stays still. Every accent has a still version, nothing flashes, and nothing moves over text, controls, or focus rings.

[motion.json](motion.json) owns duration and easing values. These are authored proposals, not measurements of a reference site.

## Choreography

- **Hover:** Show or thicken the lime underline on ink chrome, or change the action surface, without shifting layout.
- **Press:** Change the surface immediately; no bounce or large scale.
- **Act card tilt:** Cards tilt only on hover or focus. The act name, badges, start time, and focus ring stay visible and uncovered.
- **Sticker drift:** Decorative stickers on the Home hero and campaign bands drift slowly within their margins.
- **Expanding wordmark:** The campaign wordmark widens its letters once with type and CSS transforms. The header and ticket wordmark never expands or animates.
- **Secondary reveal:** A campaign section may enter once with opacity and short travel. Tables, ticket options, forms, and policies do not reveal.
- **Mobile menu:** The full-height ink sheet slides in as one group, then focus moves inside it.
- **Loading:** Skeleton cards or rows may shimmer gently.

The hero headline, dates and venue facts panel, and the Explore tickets action are visible and readable at first paint without animation. Lineup cards may reveal in a maximum three-item stagger.

## The motion toggle

A small persistent **Pause motion** / **Play motion** toggle sits in the footer's Legal column and on the Home hero. It defaults to paused when `prefers-reduced-motion: reduce` is set and is stored per browser. The toggle sets one `data-motion` attribute on the document so all kinetic CSS keys off a single switch. When paused, stickers are still, cards do not tilt, the wordmark renders in its final state, and skeletons do not shimmer.

`autoplay: false` in [motion.json](motion.json) refers to media and carousels: there is no video, audio, or auto-advancing carousel. Sticker drift is the only ambient movement, and the toggle stops it.

## Limits

Nothing flashes: no strobing, blinking, or rapidly alternating fills, in code or in imagery. No scroll hijacking, parallax behind text, auto-advancing carousels, animated schedule rows, or motion inside the ticket, schedule table, info, or contact surfaces. Do not replay entrances when visitors scroll back to compare acts.

## Reduced motion and implementation

Honor `prefers-reduced-motion: reduce` from first render. Remove translation, rotation, tilt, drift, shimmer, and stagger, and show final states immediately. The mobile menu appears without a slide while keeping its focus trap, Esc, scroll lock, and focus return. Keep focus rings, selected borders, check marks, and live-region text.

Use CSS for control feedback and decorative loops. Store the motion preference in a try/catch-wrapped `localStorage` read so a blocked store falls back to the system setting. Clean up listeners and observers and react when the system preference changes. Animate transform and opacity, not layout dimensions.

## Review

Test keyboard, touch, the Pause motion toggle, reduced motion, rapid filter changes, menu open and close, and interrupted transitions. A still screenshot with motion paused must communicate the full hierarchy and every action.
