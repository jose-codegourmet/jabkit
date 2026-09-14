# Retro: motion

A little tactile feedback can make an object feel handled. It should be brief, responsive, and subordinate to the actual product task.

[motion.json](motion.json) is the source of truth for durations, easing, triggers, and reduced-motion behavior. These are proposed timings, not measurements of the reference websites.

## Choreography

- **Hover:** Reduce the 2px shadow to 1px; the hit area stays fixed.
- **Press:** Translate by 1px toward the hard shadow without scaling text.
- **Secondary reveal:** Decorative objects settle once from 8px away; maximum rotation change is 3 degrees.
- **Image behavior:** Only a decorative object can tilt once; covers and product demonstrations stay still.
- **Menu:** Reveal links as a group; any tab-like styling retains normal navigation behavior.

The opening title, practical details, and primary action are visible at first paint. Enhance secondary elements only. If a sequence is justified, limit stagger to three items using the `stagger` duration key; never make access to content depend on animation completing.

## Limits

No CRT flicker, flashing scanlines, permanent record spinning, bouncing submit buttons, fake loading delays, or autoplay sound. Nostalgia is not permission to recreate old usability problems.

Navigation, input feedback, and error recovery must not wait for decorative animation. Keep the clickable box stable on hover. Do not repeatedly replay entrances when someone scrolls back to inspect an item.

## Reduced motion and implementation

Honor `prefers-reduced-motion: reduce` from initial rendering where possible. Remove translation, rotation, zoom, parallax, and stagger; show the final state immediately. Retain visible focus, selected-state markers, and readable inline feedback. Do not use opacity zero as the unenhanced content default.

Use CSS for small state transitions. Any client-side enhancement must clean up observers and listeners when unmounted and react if the motion preference changes. Inspect existing dependencies before adding an animation library; this pack requires none. Animate transform and opacity where appropriate rather than layout dimensions. Keep functional state changes available without decorative effects.

## Review

Use keyboard, touch, quick repeated actions, and reduced motion. Confirm that an interrupted animation leaves the component usable. Test a failed image and slow font loading. If an optional looping composition is introduced later, provide pause controls and revisit the shared [motion accessibility guidance](../README.md#review-standard).
