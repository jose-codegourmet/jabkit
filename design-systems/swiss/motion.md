# Swiss Design: motion

Motion clarifies state changes and hierarchy. The grid itself stays stable.

[motion.json](motion.json) owns duration and easing values. These are authored proposals, not measurements of a reference site.

## Choreography

- **Hover:** Strengthen an existing underline or surface without moving adjacent content.
- **Press:** Change weight and surface immediately; no bounce or scale.
- **Filter change:** Crossfade the result region while its top edge stays fixed and focus remains useful.
- **Secondary reveal:** A section may enter once with opacity and no more than 16px of travel.
- **Mobile menu:** Reveal the full-height sheet as one group, then place focus inside it.

The title, festival facts, primary action, schedule labels, and form controls are visible at first paint. Film cards may reveal in a maximum three-item stagger. Availability and checkout state never wait for animation.

## Limits

No autoplay hero, looping marquee, scroll hijack, parallax schedule, staggered table rows, cursor effect, or delayed navigation. Do not animate height for long program lists. Keep the clickable box stable on hover and avoid replaying entrances when visitors return to compare facts.

## Reduced motion and implementation

Honor `prefers-reduced-motion: reduce`. Remove translation and stagger, replace results immediately, and open menus without spatial movement. Retain focus, selected rules, glyphs, and text feedback.

Use CSS for control feedback and Motion only in an isolated client leaf when a page reveal genuinely communicates hierarchy. Clean up observers and listeners. Never track scroll in React state.

## Review

Test keyboard, touch, rapid filtering, back/forward, menu open/close, and reduced motion. Interrupt transitions and confirm that focus, selection, and status text remain correct. A still screenshot should communicate the complete hierarchy without motion.
