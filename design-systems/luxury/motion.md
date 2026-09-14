# Luxury: motion

Use a measured pace for imagery and immediate feedback for tasks. A reservation must never feel slow because the visual language is leisurely.

[motion.json](motion.json) is the source of truth for durations, easing, triggers, and reduced-motion behavior. These are proposed timings, not measurements of the reference websites.

## Choreography

- **Hover:** Change underline or action surface; do not delay the feedback.
- **Press:** Change the surface tone immediately; no bounce or exaggerated scale.
- **Secondary reveal:** Optional secondary figure reveal with up to 12px travel, once.
- **Image behavior:** A user-controlled gallery crossfades; any decorative zoom is capped at 1.02 and runs once.
- **Menu:** Fade the menu surface as one group; links become operable immediately.

The opening title, practical details, and primary action are visible at first paint. Enhance secondary elements only. If a sequence is justified, limit stagger to three items using the `stagger` duration key; never make access to content depend on animation completing.

## Limits

No mandatory loading ceremony, scroll-gated booking, automatic audio, infinite parallax, or nested pinned sections. Keep long image entrances away from the primary action.

Navigation, input feedback, and error recovery must not wait for decorative animation. Keep the clickable box stable on hover. Do not repeatedly replay entrances when someone scrolls back to inspect an item.

## Reduced motion and implementation

Honor `prefers-reduced-motion: reduce` from initial rendering where possible. Remove translation, rotation, zoom, parallax, and stagger; show the final state immediately. Retain visible focus, selected-state markers, and readable inline feedback. Do not use opacity zero as the unenhanced content default.

Use CSS for small state transitions. Any client-side enhancement must clean up observers and listeners when unmounted and react if the motion preference changes. Inspect existing dependencies before adding an animation library; this pack requires none. Animate transform and opacity where appropriate rather than layout dimensions. Keep functional state changes available without decorative effects.

## Review

Use keyboard, touch, quick repeated actions, and reduced motion. Confirm that an interrupted animation leaves the component usable. Test a failed image and slow font loading. If an optional looping composition is introduced later, provide pause controls and revisit the shared [motion accessibility guidance](../README.md#review-standard).
