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

Portfolio destinations (SH-05):

- `Projects13Project.href` is optional. When present, the row title is a text link with the project title as its accessible name. Without it, the row stays a plain article. Do not wrap the whole row.
- `Projects16Image.title` and `Projects16Image.href` are optional. Captions are visible text; hrefs attach to the caption, not the figure. `PROJECTS16_IMAGE_LIMIT` is 4: the gallery renders the first four ordered items and ignores the rest. Six-item indexes belong in page composition, not this block.

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

`AvatarBorder` follows the [Avatar - Border reference](https://21st.dev/@shadcnspace/components/avatar-border): a 40px default portrait, 2px static success-token outline separated by a 2px background gap, and a 16px verification badge offset 6px beyond the lower-right corner. Small and large portraits are 24px and 64px. `verified={false}` hides the badge; `verificationLabel` supplies its screen-reader text (default `Verified`). The old `animate` prop is deprecated and ignored because the reference has no motion. Image fallback and custom children remain supported through the composed Avatar API.

`AverageSwan` uses a labeled fieldset containing four native action buttons. At the default size, 76px keys sit inside 80px wells, with 24px gaps and 10px key radii, matching its [sampler reference](https://uiverse.io/Praashoo7/average-swan-99). Its key font size is explicit so Tailwind's button reset cannot enlarge the keys beyond their wells. Keyboard focus uses an offset outline that remains visible during the press-in shadow state.

`BrightLizard` defaults to `Generating`, with a 180px orb, a two-second rotation, and letters staggered by 100ms as in the [loader reference](https://uiverse.io/dexter-st/bright-lizard-8). The foreground token provides its contrasting edge highlight. Reduced motion stops the animation and keeps the label fully visible; caller styles merge with its internal size variables.

`ButtonColorful` keeps the [reference's](https://21st.dev/@kokonutd/components/button-colorful) 40px height, 6px corners, 8px gradient blur, and diagonal arrow. The wash transitions from 40% to 80% opacity on hover or keyboard focus. `asChild` accepts one element, such as an anchor, and applies the same decoration while preserving that element's content and behavior.

`Calendar03` matches its [appointment-picker reference](https://21st.dev/@shadcnspace/components/calendar-03) with 32px day and time controls, 12px calendar padding, two-letter weekday headings, and 8px corners. Dates use one tab stop: arrow keys move by day/week, Home/End move to week boundaries, and Page Up/Down move by month (Shift moves by year). Enter or Space selects the focused date. Month/year jumps clamp to valid dates, including leap years; date and time callbacks retain their controlled/uncontrolled contract.

`CalendarWithLocalisation` follows the [localized two-month calendar reference](https://21st.dev/@shadcn/components/calendar-with-localisation): a compact two-month range picker with a locale select, localized month and weekday labels, contiguous range highlighting, and a 16px outer corner radius. The `locale`, `numberOfMonths`, copy, and selection APIs remain controlled or uncontrolled as before.

`CleverPanther` now follows the [dark balance-card reference](https://uiverse.io/Gidarx/clever-panther-6) with a 320px card, stacked heading and metrics, a semantic-token aurora trend chart, and a full-width report action. Its title, values, trend labels, action, and semantic surface tone are configurable.

`CurvyEarwig` follows the [search-bar reference](https://uiverse.io/Lakshay-art/curvy-earwig-22) with a 56px field, layered conic border glow, left search icon, right filter affordance, and visible focus ring. The legacy `expanded` and `toggleLabel` props remain accepted for source compatibility while the reference field stays open.

`StrongSquid` follows the [day-to-night switch reference](https://uiverse.io/Galahhad/strong-squid-82), including its pill track, sun-to-moon transition, clouds, and stars. It preserves native checkbox behavior and exposes small and medium sizes.

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
