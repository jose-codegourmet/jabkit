# Design system

JabKit is a source-distributed library with three categories and a semantic-token-first styling rule. This document is the *why* and the composition rules. The step-by-step file checklist is [adding-a-component.md](adding-a-component.md). Token plumbing is [theming.md](theming.md).

## Semantic tokens, not hardcoded colors

Components style with Tailwind classes that map to `--jk-*` via `@theme inline` in `packages/tokens/tokens.css`: `bg-background`, `text-foreground`, `border-border`, `bg-primary`, `text-muted-foreground`, `bg-card`, `ring-ring`, `rounded-[--radius]`, and the rest of that map.

`scripts/check-conventions.ts` fails `{Name}.tsx` when this regex matches:

```ts
/\b(?:bg|text|border)-(?:white|black|gray|slate|zinc|neutral|stone)\b/
```

That is the actual gate: `bg-white`, `text-black`, `text-gray-*`, `bg-slate-*`, `border-zinc-*`, and so on. It does **not** scan stories, previews, or CSS. It does **not** catch arbitrary values (`bg-[#fff]`) or `from-` / `via-` / `to-` palette utilities. Do not treat passing the checker as proof that a file is token-clean; still write semantic classes.

Never substitute a hardcoded color plus a `dark:` override. Change the token or the semantic class. See [theming.md](theming.md).

## Categories

Folders under `packages/ui/src/`. The showcase category page (`apps/showcase/app/[category]/page.tsx`) is the canonical one-line description:

| Category | Meaning in this repo |
| --- | --- |
| `atoms` | Small, reliable building blocks with no domain opinion. Buttons, inputs, dialogs. |
| `marketing` | Landing-page sections designed to make a clear case. Heroes, CTAs, FAQs. |
| `dashboard` | Product interface blocks made for applications behind a login. Shells, login, charts. |

Do not add a fourth category without changing the builder, the convention checker, and `validCategories` together. See [architecture.md](architecture.md).

## Composition

- Atoms may depend on other atoms through `registryDependencies`.
- Atoms never depend on marketing or dashboard.
- Marketing and dashboard never depend on each other. Either may depend on atoms.
- List npm packages in `dependencies`. List other JabKit `name` values in `registryDependencies`. The CLI and `get_install_plan` walk the latter.

Real entries:

- `packages/ui/src/marketing/hero307/Hero307.meta.ts` — `registryDependencies: ["button"]`
- `packages/ui/src/dashboard/login4/Login4.meta.ts` — `registryDependencies: ["button", "input", "label"]`

There is no `packages/ui/src/index.ts` barrel. Consumers import the copied files; the monorepo discovers folders via the registry build.

## Files and naming

| Piece | Rule |
| --- | --- |
| Folder | kebab-case = registry `name` |
| Files | PascalCase prefix derived from the folder: `dropdown-menu` → `DropdownMenu.tsx` |
| Required | `{Name}.tsx`, `{Name}.stories.tsx`, `{Name}.preview.tsx`, `{Name}.types.ts`, `{Name}.meta.ts`, `index.ts` |
| Optional | `{Name}.mocks.ts` (27 of 39 components have one) |

Prefer `data-slot="{kebab-name}"` on the root element. Full templates: [adding-a-component.md](adding-a-component.md).

## Shared helpers

Do not import outside the component folder with `from "../"`. The convention checker flags that in `{Name}.tsx`.

Shared code lives in `packages/ui/src/lib/` and is imported as `@/lib/...`. `cn` (`clsx` + `tailwind-merge`) is the helper every component is expected to use for `className`.

The registry builder inlines each `@/lib/<x>` import as a `"lib"` file in the JSON (`lib/cn.ts`). Helpers must stay in that folder or the build throws. Putting a helper under `apps/showcase` would make the component undistributable.

`packages/ui/src/lib/theme.ts` (`themeTokens`) is unused. Do not start depending on it without deciding whether it belongs in the registry bundle.

## Accessibility

What the repo actually enforces:

- Every meta file declares `a11y: { keyboardNav: boolean, reducedMotion: boolean }`. Those flags are **metadata**, shown on the showcase `ComponentData` card. Nothing asserts they match the implementation.
- Storybook loads `@storybook/addon-a11y` (`packages/ui/.storybook/main.ts`).
- `data-slot` is a convention, not a checker rule.

Interactive atoms (for example `button` with `@radix-ui/react-slot`) should keep native keyboard behavior. Full-bleed blocks should honor `prefers-reduced-motion` when they animate; several showcase-only CSS animations in `apps/showcase/app/globals.css` already gate on that media query, which is chrome, not library policy.

## Responsive and preview sizing

Marketing and dashboard blocks typically set `preview: { layout: "fit", width: 1440, height: 900 }` so the catalogue can scale a desktop frame down (`ScaledFrame`). Atoms omit `preview` and render centered at a fixed 440px iframe height.

`ComponentPreview` device chrome:

| Device | `max-width` | Fit height |
| --- | --- | --- |
| desktop | none | `preview.height` or 900 |
| tablet | `1024px` | 1024 |
| mobile | `600px` | 844 |

Components should read as intended at those widths. There is no visual regression suite; Storybook and the showcase are the checks.

## Shadcn-derived atoms

`scripts/convert-shadcn.ts` generated 12 atoms from `.shadcn-src/` (`separator`, `label`, `input`, `textarea`, `checkbox`, `switch`, `badge`, `avatar`, `skeleton`, `tooltip`, `dropdown-menu`, `dialog`). Those folders often still carry conversion artifacts:

- `{Name}.types.ts` of the form `export type XProps = Record<string, unknown>`
- Description `"Accessible {Name} primitive adapted from shadcn/ui."`
- Minimal generated stories

Hand-authored components (see `packages/ui/src/atoms/button/`) must not copy that shape. Use a real props interface, a real description, and stories with parenthesized multi-line `render` functions so registry examples extract correctly ([registry.md](registry.md)).
