# Neo-brutalism: motion

The motion language is decisive and physical. A press should feel like a flat object meeting a surface, while text and navigation remain dependable.

[motion.json](motion.json) is the source of truth for durations, easing, triggers, and reduced-motion behavior. These are proposed timings, not measurements of the reference websites.

## Choreography

- **Hover:** Reduce the hard shadow from 4px to 2px without moving the control.
- **Press:** Translate 2px toward the shadow and reduce its offset to 2px.
- **Secondary reveal:** One short 8px translation on decorative media; no text scrambling.
- **Image behavior:** A decorative cutout can settle once by 2 degrees; functional media stays square.
- **Menu:** Open a ruled panel with a short opacity transition.

The opening title, practical details, and primary action are visible at first paint. Enhance secondary elements only. If a sequence is justified, limit stagger to three items using the `stagger` duration key; never make access to content depend on animation completing.

## Limits

No elastic springs on forms, strobing, automatic spinning stickers, or repeated viewport shakes. Do not use motion to compensate for weak typographic composition.

Navigation, input feedback, and error recovery must not wait for decorative animation. Keep the clickable box stable on hover. Do not repeatedly replay entrances when someone scrolls back to inspect an item.

## Reduced motion and implementation

Honor `prefers-reduced-motion: reduce` from initial rendering where possible. Remove translation, rotation, zoom, parallax, and stagger; show the final state immediately. Retain visible focus, selected-state markers, and readable inline feedback. Do not use opacity zero as the unenhanced content default.

Use CSS for small state transitions. Any client-side enhancement must clean up observers and listeners when unmounted and react if the motion preference changes. Inspect existing dependencies before adding an animation library; this pack requires none. Animate transform and opacity where appropriate rather than layout dimensions. Keep functional state changes available without decorative effects.

## Review

Use keyboard, touch, quick repeated actions, and reduced motion. Confirm that an interrupted animation leaves the component usable. Test a failed image and slow font loading. If an optional looping composition is introduced later, provide pause controls and revisit the shared [motion accessibility guidance](../README.md#review-standard).
