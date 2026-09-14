# Applying Retro to JabKit

This is a manual implementation plan. These docs add no runtime theme selector or automatic migration command. Read [the document contract](../contract.md) and [theming](../../docs/theming.md) first.

## Inspect the current composition

Inventory the real content, routes, actions, assets, and component APIs. Select the matching page sequence in [patterns.json](patterns.json). Keep meaningful content and interaction behavior while changing presentation. Do not treat a component name such as `hero307` as proof that its anatomy suits this direction.

Start by choosing the material family, then remove unrelated glow, holographic, and cursor effects from candidate compositions. Replace Button's diffuse shadow with the small hard-shadow token and normalize Input's radius and height. Keep decorative sleeve or paper frames as assets around an ordinary semantic figure. Use genuine product screenshots for demonstrations; imagery prompts must not invent product features.

## Apply in order

1. Establish a pristine installed baseline in a consumer before applying requested local edits. Follow the actual [CLI workflow](../../docs/cli.md); there is no `--design-system` flag. Keep the before-state available in version control.
2. Copy the full [light/dark palette](tokens.json) into the intended stylesheet scopes. In the library, canonical token definitions belong in `packages/tokens/tokens.css`; in a consumer, use its stylesheet. Do not globally replace JabKit's default palette unless that is the implementation task.
3. Adopt the proposed `foundation` variables explicitly if needed. They have no existing automatic Tailwind mappings. Apply [typography roles](typography.json), reading measures, grid, and spacing before decorating individual controls.
4. Apply the [component guidance](components.json) to the components your page needs. Replace incompatible local radius, height, shadow, and motion utilities; tokens cannot override every hardcoded geometry choice.
5. Produce and host the image series using [imagery.md](imagery.md). Add honest copy, alternative text, dimensions, responsive crops, and useful failed-media behavior.
6. Add only the motivated enhancements in [motion.md](motion.md), with the static version available immediately. Review the entire page against [rules.md](rules.md).

## Theme and distribution checks

Keep the geometry and reading order in both modes. Check primary foreground pairs, readable secondary text, necessary field boundaries, and focus on each surface. Portaled menus and dialogs must receive the same tokens. Preview iframes are separate documents; use their explicit theme controls instead of assuming inheritance from showcase chrome.

If shipping library component changes, retain `{Name}.types.ts`, metadata, preview, at least two stories, and `ThemeComparison`. Keep `atoms`, `marketing`, and `dashboard` boundaries intact. Do not distribute showcase imports, invent a root UI barrel, or register these documentation JSON files as registry metadata.

## Validate and preserve a way back

For library component changes, run `pnpm assets:vendor` when supported remote media needs vendoring, `pnpm registry:build`, and `pnpm previews:build -- --name <changed-name>`. Repeat the targeted preview command for each changed component and commit generated registry and preview output with the source. Run `pnpm check` from the repository root. Manual visual review covers both themes, narrow screens, long content, keyboard use, reduced motion, and failed media.

For consumer-only edits, use the consumer's existing checks and visual review rather than rebuilding JabKit's registry. Keep the adaptation in a scoped commit so rollback restores tokens, local component styling, and assets together. Do not force-add components over customized consumer source as an upgrade strategy.
