# Applying Bento Grid to JabKit

This is a manual implementation plan. These docs add no runtime theme selector or automatic migration command. Read [the document contract](../contract.md) and [theming](../../docs/theming.md) first.

The DAYMARK sample is the independent app `apps/bento` (`@jabkit/bento`), not a route under the showcase. `@/*` in that app maps to `packages/ui/src/*`. Local files use relative imports. The app does not import other apps.

## Inspect the current composition

Inventory routes, copy, and image IDs against [roadmap.md](roadmap.md). Select the matching sequence in [patterns.json](patterns.json). Keep JabKit behavior and accessible semantics. Treat names such as `hero307`, `bento19`, and `application-shell1` as starting points.

Replace Hero307's angled analytics scene with a coded mini dashboard. Strip avatars, AI illustrations, prices, and statistic tiles from Bento19 and Feature261. Card hardcodes its radius, ring, and small text; override that geometry in the app so tiles use `--ben-radius`, `--ben-pad`, and the cool-gray border. ApplicationShell1 hardcodes a generic logo, an sr-only `h1`, and a collapse toggle, so build the portal shell locally from sidebar, breadcrumb, avatar, and dropdown-menu atoms. The chart atom depends on recharts, which `apps/bento` does not install, so the weekly chart is built in markup. There is no field, select, or tabs atom; compose them from label, input, a native select, and link-based filters.

## Apply in order

1. Establish a pristine installed baseline before local visual edits. Follow the actual [CLI workflow](../../docs/cli.md); there is no `--design-system` flag. In this repo, page tickets edit `apps/bento` directly. Do not restyle `packages/ui` unless that ticket owns the library change.
2. Copy the full [light/dark palette](tokens.json) into the app stylesheet scope (`app/theme.css` on `[data-jk-design-system="bento"]` and its dark scope). Do not globally replace JabKit's default palette in `packages/tokens/tokens.css` unless that is the task.
3. Declare the bento layout properties in the same scope: `--ben-gap` (1rem, 1.5rem at 1280px and up), `--ben-radius` (1rem), and `--ben-pad` (1.25rem, 1.5rem at 1024px and up), with comments stating the span, nesting, order, and link-versus-static rules from [system.md](system.md). Adopt the proposed `foundation` variables there too; they have no automatic Tailwind mapping in the library.
4. Apply [typography roles](typography.json): Plus Jakarta Sans for every role, self-hosted as a variable font under the app `public/fonts` tree with its OFL text. Turn on `tabular-nums` for times, counts, tables, and chart labels through the `.jk-figure` and `.jk-num` classes.
5. Build the grid primitive once: a 12-column grid that stacks to one column below 768px, and a tile with `span`, `rowSpan`, `kind` (static, link, action), and `state` (default, loading, empty, warning, selected, error). Apply the [component guidance](components.json) only where a page needs it and map sections with the table in [roadmap.md](roadmap.md).
6. Reference the `ben-*` series through the app's asset module. Follow [imagery.md](imagery.md). Add alt text, dimensions, and a useful failed-media state. Product UI stays in code.
7. Add only the motion in [motion.md](motion.md). Review each page against [rules.md](rules.md), including the demo notices, placeholders, chart text equivalents, and reduced motion.

## Theme and distribution checks

Keep reading order and tile spans the same in both modes. Check primary foreground pairs, muted text on chalk and cool gray, the apricot warning with ink text, field boundaries, and the evergreen focus ring on each surface. Portaled menus, dialogs, and toasts must receive the same tokens. Preview iframes are separate documents.

If a change ships inside the library, retain `{Name}.types.ts`, metadata, preview, at least two stories, and `ThemeComparison`. Keep `atoms`, `marketing`, and `dashboard` boundaries. Atoms do not depend on marketing or dashboard. Do not add a root UI barrel or register these JSON files as registry metadata.

## Validate and preserve a way back

For library component changes, run `pnpm assets:vendor` when supported remote media needs vendoring, `pnpm registry:build`, and `pnpm previews:build -- --name <changed-name>`. Run `pnpm check` from the repository root.

For the DAYMARK app, run `pnpm --filter @jabkit/bento typecheck`, `pnpm --filter @jabkit/bento build`, `pnpm exec biome check apps/bento`, and `pnpm check:design-system-assets`, then a visual pass: both themes, 320 to 1440 widths, mobile stack order against DOM order, keyboard use on link tiles and the task board, reduced motion, `?state=loading|empty|error` toggles, form errors, and a missing image. Keep the adaptation in a scoped commit so rollback restores tokens, local styling, and assets together.

This documentation folder does not generate images, install fonts, or publish the site.
