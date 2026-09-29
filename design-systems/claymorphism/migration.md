# Applying Claymorphism to JabKit

This is a manual implementation plan. These docs add no runtime theme selector or automatic migration command. Read [the document contract](../contract.md) and [theming](../../docs/theming.md) first.

The Pillo sample is the independent app `apps/claymorphism` (`@jabkit/claymorphism`), not a route under the showcase. `@/*` in that app maps to `packages/ui/src/*`. Local files use relative imports. The app does not import other apps.

## Inspect the current composition

Inventory routes, copy, and image IDs against [roadmap.md](roadmap.md). Select the matching sequence in [patterns.json](patterns.json). Keep JabKit behavior and accessible semantics. Treat names such as `hero307` as starting points. Replace the tilted admin scene with a coded family board.

Remove aura, pointer glow, and technical illustrations that fight the clay. Buttons become pills with the raised shadow. Inputs use the control height and a visible boundary. There is no card atom and no select atom; compose those with semantic HTML and existing atoms. An over-image header is out of scope: the rail sits on a solid surface.

## Apply in order

1. Establish a pristine installed baseline before local visual edits. Follow the actual [CLI workflow](../../docs/cli.md); there is no `--design-system` flag. In this repo, page tickets edit `apps/claymorphism` directly. Do not restyle `packages/ui` unless that ticket owns the library change.
2. Copy the full [light/dark palette](tokens.json) into the app stylesheet scope (`app/theme.css` on `[data-jk-design-system="claymorphism"]`). Do not globally replace JabKit’s default palette in `packages/tokens/tokens.css` unless that is the task.
3. Adopt the proposed `foundation` variables in that same app scope. They have no automatic Tailwind mapping in the library. Apply [typography roles](typography.json): Nunito for display and labels, Nunito Sans for body, self-hosted under the app `public/fonts` tree.
4. Apply the [component guidance](components.json) only where a page needs it. Map sections with the table in [roadmap.md](roadmap.md). Tokens cannot override every hardcoded radius inside a library component; adapt in the app composition.
5. Host the `cla-*` series locally after Jose generates it. Follow [imagery.md](imagery.md). Add alt text, dimensions, and a useful failed-media state. Product boards stay in code.
6. Add only the motion in [motion.md](motion.md). Review the page against [rules.md](rules.md), including the example-data notice and reduced motion.

## Theme and distribution checks

Keep reading order in both modes. Check primary foreground pairs, muted text, field boundaries, and the 3px focus ring on each surface. Portaled menus and dialogs must receive the same tokens. Preview iframes are separate documents.

If a change ships inside the library, retain `{Name}.types.ts`, metadata, preview, at least two stories, and `ThemeComparison`. Keep `atoms`, `marketing`, and `dashboard` boundaries. Atoms do not depend on marketing or dashboard. Do not add a root UI barrel or register these JSON files as registry metadata.

## Validate and preserve a way back

For library component changes, run `pnpm assets:vendor` when supported remote media needs vendoring, `pnpm registry:build`, and `pnpm previews:build -- --name <changed-name>`. Run `pnpm check` from the repository root.

For the Pillo app, use that app’s build and a visual pass: both themes, narrow screens, long labels, keyboard use, reduced motion, demo form errors, and a missing image. Keep the adaptation in a scoped commit so rollback restores tokens, local styling, and assets together.

This documentation folder does not generate images, install fonts, or publish the site.
