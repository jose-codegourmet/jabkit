# Claymorphism: motion

Motion is small, physical, and optional. A parent must never wait on a squash animation to create a board or tick a step.

[motion.json](motion.json) is the source of truth for durations, easing, triggers, and reduced-motion behavior. These are proposed timings from the Pillo brief, not measurements of a reference website.

## Choreography

- **Hover:** Lift an enabled control with `translateY(-2px)`.
- **Press:** `translateY(2px)` and shrink the clay shadow. No bounce.
- **Completion:** The tile settles with a 200ms squash and the check fills. Copy still changes to a sentence such as “You did it!”.
- **Images:** Stay still. No decorative zoom or parallax.
- **Menu:** The sheet slides down 8px. Links work immediately. Reduced motion fades only.

The headline, the next step, and the primary action are visible at first paint. Do not stagger content. `stagger` is 0.

Feedback and transitions are 200ms with `ease`.

## Limits

No loading ceremony, scroll-locked storytelling, automatic audio, infinite parallax, or a cheer that blocks the next action. The brief’s “hear a little cheer” is product voice, not autoplaying sound on the marketing site.

Navigation, input errors, and the demo submit must not wait for decoration. Keep the clickable box stable enough that the press does not move the target out from under the pointer in a way that cancels the action. Do not replay the completion squash when someone scrolls back.

## Reduced motion and implementation

Honor `prefers-reduced-motion: reduce` from the first paint. Remove translation, squash, slide, and spinner rotation. Show the final state with color, icon, and text. The menu fades. Focus, selected pills, and inline errors stay.

Use CSS for press, lift, and the sheet. Clean up listeners if a client enhancement is added. This pack does not require an animation library. Animate transform and opacity, not layout size. A loading control uses `aria-busy` and a changed label even when the spinner is still.

## Review

Use keyboard, touch, quick repeated ticks, and reduced motion. Reset the example board and confirm it returns to the fixture. If an image fails, the board and the button still make sense. If a looping effect is added later, give it a pause control and revisit the shared [motion accessibility guidance](../README.md#review-standard).
