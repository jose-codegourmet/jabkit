# Claymorphism: rules

These rules govern the proposed Pillo style. JabKit's [component contract](../../docs/adding-a-component.md) and [semantic theming](../../docs/theming.md) still apply. Exact palette and geometry values live in [tokens.json](tokens.json); [typography.json](typography.json) owns type measurements.

## Must

1. Use semantic `--jk-*` tokens. The brand hex values in the tokens file are the palette. Do not add hardcoded Tailwind color classes.
2. Build boards, steps, progress, badges, and avatars in code. Clay images frame that UI. They do not replace it.
3. Put body text on solid cream or card surfaces. One texture band per page at most. Never set paragraphs on a photograph.
4. Show status with a word and an icon as well as color: Done, Next up, Not started. Progress reads “2 of 4 steps done”, not an unlabeled ring.
5. Mark every coded board preview with a visible “Example board” badge. Use first names only (Maya, Leo, Dad, Grandma Rosa) and initial-letter avatars. No photos of real children or invented people.
6. Keep the primary action available without an intro animation. Home, how-it-works, families, routine detail, pricing, and FAQ share the closing CTA. Start, contact, privacy, and terms do not repeat that band.
7. Leave prices, plan limits, setup time, privacy claims, and unconfirmed product actions as client-confirmation placeholders. Do not invent discounts, testimonials, user counts, or certification badges.
8. Below 48rem, keep controls at least 44px high. Child-view targets are at least 64px. Mobile nav tiles are 56px. Focus is a 3px plum outline, offset from the control, and is never removed.

## Prefer

Use the page sequence that matches the job in [patterns.json](patterns.json). Nunito for headings and labels, Nunito Sans for longer copy. One upper-left light in both CSS shadows and `cla-*` images. Generate the series from [imagery.md](imagery.md), then judge each image in its real slot.

## Avoid

- Glossy plastic, deep drop shadows behind paragraphs, and a different light direction per section
- Mega menus, streak counters, countdown timers, and guilt copy
- Mascots, faces, and lettering inside generated scenes (the wordmark prompts are the exception)
- Autoplay audio, scroll hijacking, and motion that must finish before a control works
- Security theater: padlocks, shields, or claims the client has not approved

## Demo data

The site is a sample brand. Every page includes: “Pillo is a sample brand built to demonstrate the JabKit Claymorphism design system. Boards, names and progress shown on this site are example data.”

Forms on `/start` and `/contact` are demos. A persistent notice says nothing is sent or saved. Submitting shows loading, error, and success in the page. Typed values survive an error. Success on `/start` reveals the empty or prefilled board. It does not create an account.

Morning example: Get dressed · Pack school bag · Brush teeth · Ready to go. Completion copy can say “Nice work, Maya. Your bag is ready.” Empty state: “Your board is ready for its first step. Add one thing your family does each morning.”

## States and accessibility

Dark text on pale surfaces in light mode. Visible keyboard focus on links, buttons, fields, and tiles. Persistent labels, help text, and errors. An error summary links to the fields. Disabled buttons keep their label; add `aria-disabled` and “Fill in the fields above to continue.” when the form is incomplete.

Active navigation uses `aria-current="page"`. The mobile menu button exposes `aria-expanded` and `aria-controls`. Escape, Close menu, or choosing a link closes it, returns focus to Menu, and unlocks scroll.

Target at least 4.5:1 for ordinary text and 3:1 for necessary control boundaries. The shared [review standard and sources](../README.md#review-standard) explain the thresholds. The style does not relax them. Chart colors need labels.

Define loading, empty, error, disabled, focus, hover, pressed, and completed states where the component supports them. Reduce decorative motion as specified in [motion.json](motion.json). Static content must remain available before JavaScript enhancement.

## Acceptance review

Can a parent understand Pillo in a few seconds and create a free board? Does the example board show owners and progress in words? Does the page still work with motion off and images missing?

- Inspect widths of 360, 768, and 1440 CSS pixels, plus a 320px reflow check and 200% text zoom.
- Review both light and dark surfaces with long labels, a missing image, and an inline form error.
- Navigate without a mouse; ensure focus is visible and never hidden by the floating rail or open sheet.
- Disable motion and confirm press, completion, and the menu still communicate by color, icon, and text.
- Compare the implemented visual against [system.md](system.md) and the `cla-*` list, not against a literal copy of an unrelated site.
