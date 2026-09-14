# Editorial: motion

Motion marks a change in thought. It should never interrupt reading or decide how quickly someone is allowed to advance through a story.

[motion.json](motion.json) is the source of truth for durations, easing, triggers, and reduced-motion behavior. These are proposed timings, not measurements of the reference websites.

## Choreography

- **Hover:** Reveal an underline on linked titles; keep the cover image still.
- **Press:** Change the action surface without scaling or rotating it.
- **Secondary reveal:** An optional 10px figure entrance at chapter boundaries, once.
- **Image behavior:** Keep documentary images still; a user-controlled gallery may crossfade.
- **Menu:** Reveal section links as one group with a short opacity transition.

The opening title, practical details, and primary action are visible at first paint. Enhance secondary elements only. If a sequence is justified, limit stagger to three items using the `stagger` duration key; never make access to content depend on animation completing.

## Limits

Do not split body text into animated words. No pinned paragraphs, scroll-dependent text visibility, or automatically moving timelines. Keep narrative transitions separate from navigation feedback.

Navigation, input feedback, and error recovery must not wait for decorative animation. Keep the clickable box stable on hover. Do not repeatedly replay entrances when someone scrolls back to inspect an item.

## Reduced motion and implementation

Honor `prefers-reduced-motion: reduce` from initial rendering where possible. Remove translation, rotation, zoom, parallax, and stagger; show the final state immediately. Retain visible focus, selected-state markers, and readable inline feedback. Do not use opacity zero as the unenhanced content default.

Use CSS for small state transitions. Any client-side enhancement must clean up observers and listeners when unmounted and react if the motion preference changes. Inspect existing dependencies before adding an animation library; this pack requires none. Animate transform and opacity where appropriate rather than layout dimensions. Keep functional state changes available without decorative effects.

## Review

Use keyboard, touch, quick repeated actions, and reduced motion. Confirm that an interrupted animation leaves the component usable. Test a failed image and slow font loading. If an optional looping composition is introduced later, provide pause controls and revisit the shared [motion accessibility guidance](../README.md#review-standard).
