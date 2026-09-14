# Minimal: motion

Motion should make state changes legible and then disappear from attention. A quiet page should not demand waiting for a reveal to become usable.

[motion.json](motion.json) is the source of truth for durations, easing, triggers, and reduced-motion behavior. These are proposed timings, not measurements of the reference websites.

## Choreography

- **Hover:** Change underline or surface tone; keep image and text stationary.
- **Press:** Change fill contrast without scaling the control.
- **Secondary reveal:** Optional opacity reveal on secondary imagery, once; primary content is visible on first paint.
- **Image behavior:** Keep photographs still; a gallery changes only on an explicit action.
- **Menu:** Fade the menu surface while immediately exposing its controls.

The opening title, practical details, and primary action are visible at first paint. Enhance secondary elements only. If a sequence is justified, limit stagger to three items using the `stagger` duration key; never make access to content depend on animation completing.

## Limits

No parallax, image trails, scroll locking, looping marquees, or automatic gallery rotation. Stagger at most three supporting items; never stagger paragraph words.

Navigation, input feedback, and error recovery must not wait for decorative animation. Keep the clickable box stable on hover. Do not repeatedly replay entrances when someone scrolls back to inspect an item.

## Reduced motion and implementation

Honor `prefers-reduced-motion: reduce` from initial rendering where possible. Remove translation, rotation, zoom, parallax, and stagger; show the final state immediately. Retain visible focus, selected-state markers, and readable inline feedback. Do not use opacity zero as the unenhanced content default.

Use CSS for small state transitions. Any client-side enhancement must clean up observers and listeners when unmounted and react if the motion preference changes. Inspect existing dependencies before adding an animation library; this pack requires none. Animate transform and opacity where appropriate rather than layout dimensions. Keep functional state changes available without decorative effects.

## Review

Use keyboard, touch, quick repeated actions, and reduced motion. Confirm that an interrupted animation leaves the component usable. Test a failed image and slow font loading. If an optional looping composition is introduced later, provide pause controls and revisit the shared [motion accessibility guidance](../README.md#review-standard).
