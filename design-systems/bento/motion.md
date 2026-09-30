# Bento Grid: motion

Motion is small and informational. It confirms that a tile is a link, that a state changed, or that a menu opened. An owner must never wait on animation to read the day or reach a full view.

[motion.json](motion.json) is the source of truth for durations, easing, triggers, and reduced-motion behavior. These are proposed timings from the DAYMARK brief, not measurements of a reference website.

## Choreography

- **Hover:** A link tile's border turns evergreen and its arrow shifts 2px. Buttons change surface tone. Static tiles do not react at all.
- **Press:** The surface darkens immediately. No scale, bounce, or tile lift.
- **State change:** When a tile leaves loading, skeleton rows give way to content with a short fade. The tile keeps its size so the grid does not jump.
- **Images:** Stay still inside their tiles. No zoom, parallax, or crossfade.
- **Menu:** The marketing sheet, portal sidebar sheet, and dropdowns fade as one group. Links work immediately.

Headings, tile labels, primary lines, and actions are visible at first paint. Tiles do not animate in, and there is no stagger (`stagger` is 0). Feedback is 150ms and transitions are 200ms on the `standard` easing.

## Limits

No loading ceremony, count-up numbers, scroll-triggered tile entrances, auto-rotating carousels, automatic audio, or parallax. Do not animate grid placement: a tile that moves while someone reads it breaks the reading order the layout promises.

Navigation, form errors, the demo submit, and toasts must not wait for decoration. Keep the clickable box stable on hover. Do not replay any transition when someone scrolls back.

## Reduced motion and implementation

Honor `prefers-reduced-motion: reduce` from the first paint. Remove arrow travel and fades; apply border and surface changes instantly. Skeletons do not shimmer. Focus, selected borders, warning edges, and inline feedback stay.

Use CSS for hover, press, and menu transitions. Any client enhancement must clean up listeners and react if the motion preference changes. This pack does not require an animation library. Animate opacity and transform, not layout size. Loading controls use `aria-busy` and a changed label even when nothing moves.

## Review

Use keyboard, touch, quick repeated actions, and reduced motion. Toggle `?state=loading|empty|error` on portal pages and confirm the tile keeps its size and announces the result. Confirm that an interrupted transition leaves the control usable. If a looping effect is added later, give it a pause control and revisit the shared [motion accessibility guidance](../README.md#review-standard).
