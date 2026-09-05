# Theming

JabKit themes through semantic CSS custom properties, not through per-component palettes. Components use Tailwind classes that resolve to those properties (`bg-background`, `text-foreground`, `border-border`, `bg-primary`, `rounded-[--radius]`, …). Hardcoded palette utilities are banned; see [design-system.md](design-system.md).

There is a separate open issue about preview-iframe theme behavior. This document describes the intended contract and the current implementation. It does not claim the iframe bug is solved.

## Token ownership

`packages/tokens/tokens.css` is the only place `--jk-*` values are defined. `@jabkit/tokens` exports that file as `./tokens.css` and a TypeScript object as `./tokens`.

The CSS file:

1. `@import "tailwindcss"`.
2. Declares `@custom-variant dark (&:where(.dark, .dark *));` so `dark:` variants are class-scoped (an ancestor with `.dark`), not `prefers-color-scheme`.
3. Sets light values on `:root` and dark values on `.dark`.
4. Maps `--jk-*` into Tailwind's theme via `@theme inline`.

## Semantic mapping

`--jk-*` is the storage. Tailwind classes consume `--color-*` (and `--radius`):

| Token | Tailwind / class |
| --- | --- |
| `--jk-background` | `--color-background` → `bg-background`, `text-background` |
| `--jk-foreground` | `--color-foreground` |
| `--jk-card` / `--jk-card-foreground` | `--color-card` / `--color-card-foreground` |
| `--jk-popover` / `--jk-popover-foreground` | `--color-popover` / `--color-popover-foreground` |
| `--jk-primary` / `--jk-primary-foreground` | `--color-primary` / `--color-primary-foreground` |
| `--jk-secondary` / `--jk-secondary-foreground` | `--color-secondary` / `--color-secondary-foreground` |
| `--jk-accent` / `--jk-accent-foreground` | `--color-accent` / `--color-accent-foreground` |
| `--jk-muted` / `--jk-muted-foreground` | `--color-muted` / `--color-muted-foreground` |
| `--jk-destructive` / `--jk-destructive-foreground` | `--color-destructive` / `--color-destructive-foreground` |
| `--jk-success` / `--jk-success-foreground` | `--color-success` / `--color-success-foreground` |
| `--jk-warning` / `--jk-warning-foreground` | `--color-warning` / `--color-warning-foreground` |
| `--jk-border` | `--color-border` → `border-border` |
| `--jk-input` | `--color-input` |
| `--jk-ring` | `--color-ring` |
| `--jk-chart-1` … `--jk-chart-5` | `--color-chart-1` … `--color-chart-5` |
| `--jk-radius` | `--radius` → `rounded-[--radius]` |

Values are `oklch(...)`. Light and dark pairs are both defined in `tokens.css`; do not add a third theme by inventing a media query.

## Who imports `tokens.css`

| File | Extra |
| --- | --- |
| `apps/showcase/app/globals.css` | `@source "../../../packages/ui/src"` so Tailwind v4 scans library class names. Also sets `html { background: var(--jk-background); }` and `* { border-color: var(--jk-border); }`. |
| `apps/verify/app/globals.css` | Import only. Consumer-shaped. |
| `packages/ui/.storybook/preview.css` | Sets `body` background and foreground from `--jk-*`. |

`@jabkit/cli` lists `@jabkit/tokens` as a dependency but does not import it. The CLI appends per-component `cssVars` (when present) to a consumer `src/app/globals.css`; it does not inject the shared token file.

## Showcase: `next-themes`

`apps/showcase/app/layout.tsx` wraps the tree in `ThemeProvider` from `next-themes`:

- `attribute="class"` — the provider toggles `.dark` on `<html>`.
- `defaultTheme="system"`, `enableSystem`.
- `disableTransitionOnChange`.
- `<html>` has `suppressHydrationWarning` because the class is applied after hydration.

`apps/showcase/components/ThemeToggle.tsx` is a three-way control (`light` / `system` / `dark`) with a `mounted` guard so `aria-pressed` is not wrong on the server render.

This theming applies to **showcase chrome** (header, catalogue chrome, marketing copy). It does not automatically apply to preview iframes; those are a different document. See below.

## Storybook

`packages/ui/.storybook/preview.tsx` uses `withThemeByClassName` from `@storybook/addon-themes` with `{ light: "", dark: "dark" }` and `defaultTheme: "light"`. Backgrounds are disabled so the token background shows through. `preview.css` imports `tokens.css`.

Every component also ships a `ThemeComparison` story that renders light and `.dark` side by side inside one document, independent of the Storybook toolbar.

## Preview iframes

**Intended contract:** a preview should be inspectable in light and in dark, and a catalogue embed should follow a predictable theme so components can be judged in both.

**Current behavior** (as implemented, not as desired):

`apps/showcase/app/preview/[name]/[story]/page.tsx` applies `.dark` to its own `<main>` when `searchParams.theme === "dark"` **or** when `story === "ThemeComparison"`. Anything else is light. The route does not read the parent document's theme.

Consequences:

- Home hero, home bento, and `/components` grid embeds (`ScaledFrame` / raw `<iframe>`) omit `?theme=`, so they always render light, including when the showcase itself is dark.
- `apps/showcase/components/ComponentPreview.tsx` keeps a *local* `dark` state and rewrites the iframe `src` to `?theme=dark` or `?theme=light`. That toggle does not sync with `ThemeToggle`.
- Opening the preview in a new tab uses the same query param.

This mismatch is a known theme bug. Do not "fix" it in a documentation change. Point at:

- `apps/showcase/app/preview/[name]/[story]/page.tsx`
- `apps/showcase/components/ComponentPreview.tsx`
- `apps/showcase/components/ScaledFrame.tsx`
- `apps/showcase/app/components/page.tsx`
- `apps/showcase/app/page.tsx` (home embeds)

## Rules a component must follow

- Use semantic token classes only. Do not hardcode `bg-white`, `text-gray-*`, `bg-slate-*`, and similar. The convention checker regex is in [design-system.md](design-system.md).
- Do not paper over a light-only color with a `dark:` override of a hardcoded utility. Change the token or the semantic class.
- Export a `ThemeComparison` story. The convention checker requires the identifier; the registry builder excludes it from examples.
- If you set `cssVars` on the meta, supply both `light` and `dark` or `pnpm registry:build` throws. No current component uses `cssVars`.

## Drift risk (do not "clean up" here)

`packages/tokens/tokens.ts` exports `jabkitTokens`, a partial duplicate of the CSS values. `packages/ui/src/lib/theme.ts` exports `themeTokens`, a string list of token names. Nothing in the repository imports either file. They can drift from `tokens.css`. Treat `tokens.css` as canonical.
