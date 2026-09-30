# Swiss Design: rules

These rules govern the FRAME/01 proposal. JabKit's [component contract](../../docs/adding-a-component.md) and [semantic theming](../../docs/theming.md) still apply. Exact values live in [tokens.json](tokens.json) and [typography.json](typography.json).

## Must

1. Use the 12/8/4-column grid and one gutter token across every route.
2. Keep program facts, schedule rows, passes, and checkout UI as semantic HTML rather than images.
3. Keep metadata at 14px or larger and maintain 4.5:1 contrast for ordinary text.
4. Use signal red as a marker and primary action color, never as the only ticket-state cue.
5. Pair every availability state with a glyph or shape and explicit text.
6. Give every schedule table a caption and header cells; provide day-grouped mobile lists below 768px.
7. Use square controls with at least 44px targets and a visible 2px focus treatment.
8. Preserve the full demo notice wherever films, screenings, passes, or checkout data appear.
9. Mark unknown year, country, language, policy, price, and address fields as client-to-confirm placeholders.
10. Keep film stills meaningful, consistently cropped, and outside text backgrounds.

## Prefer

Use weight, scale, alignment, and whitespace before introducing another container. Keep one filled button in the header. Use native route state for filters, stable captions outside images, and direct labels such as Program, Schedule, and Tickets.

## Avoid

- Generic minimal layouts with no visible information system
- Decorative grid lines that organize nothing
- Rounded cards, soft drop shadows, glass surfaces, and gradient text
- Critic scores, laurels, live inventory, sponsor marks, or unconfirmed policy claims
- Autoplay media, scroll hijacking, or animated schedule rows
- Red-only selected, error, or availability states

## States and accessibility

Show normal, selected, sold-out, unavailable, loading, empty, error, disabled, and focus states. Selected rows use a rule, a check glyph, and the word Selected. Disabled ticket actions retain their reason in text. Failed images leave titles, facts, and actions usable.

The mobile menu traps focus, closes on Escape, and returns focus to its trigger. URL-backed filters survive direct navigation and back/forward. Forms retain values after validation errors, associate messages with fields, and never request payment.

## Acceptance review

- Inspect 320, 360, 768, 1024, and 1440 CSS pixels plus 200% text zoom.
- Review light and dark modes, keyboard use, touch, reduced motion, and no-hover behavior.
- Check long client-to-confirm placeholders without truncating meaning.
- Verify the table/list parity and status wording without relying on color.
- Confirm every route and unknown film slug has a useful recovery path.
- Compare the final app to [system.md](system.md), not to a literal copy of any reference.
