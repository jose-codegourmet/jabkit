# JabKit design systems

Five authored design directions for making JabKit feel at home in different kinds of websites. These are implementation briefs for humans and coding agents, not installed themes or copies of the reference sites. Start with the desired experience, then work through composition, tokens, components, imagery, and motion.

The starting references are the 22 URLs in [TO_EXTRACT.md](../TO_EXTRACT.md). Each system records the pages inspected, their visual character and structure, and any access limitations. The proposed palettes, measurements, component guidance, and image prompts are original JabKit recommendations, not extracted CSS or the reference owners' design systems.

## Choose a direction

| System | Intended feeling | Organizing principle | Image language |
| --- | --- | --- | --- |
| [Minimal](minimal/system.md) | Calm, exact, assured | An open gallery with clear relationships | Observed light, deliberate crops, room around the subject |
| [Neo-brutalism](neo-brutalism/system.md) | Direct, punchy, independent | A poster grid with explicit edges and hierarchy | Hard light, bold silhouettes, isolated objects |
| [Editorial](editorial/system.md) | Authored, curious, intimate | A cover, chapters, evidence, and a useful ending | Story-led sequences, contextual portraits, purposeful ephemera |
| [Luxury](luxury/system.md) | Immersive, considered, attentive | A staged encounter with a place, object, or service | Material detail, controlled light, believable atmosphere |
| [Retro](retro/system.md) | Familiar, tactile, playful | A coherent collection of remembered objects | Analog collage, handled surfaces, or a consistent device-render series |

Minimal removes competing signals. Editorial establishes a point of view. Luxury gives a few things exceptional attention. Neo-brutalism exposes visual structure. Retro makes materials and cultural memory part of the interface. A site can share traits across these families; choose one governing grammar rather than combining five sets of effects.

## Full website showcase roadmaps

The [shared showcase roadmap](roadmap.md) recorded 8 enabling/release tickets and 12 tickets per system: [Minimal](minimal/roadmap.md), [Neo-brutalism](neo-brutalism/roadmap.md), [Editorial](editorial/roadmap.md), [Luxury](luxury/roadmap.md), and [Retro](retro/roadmap.md). The five sample websites are shipped in `apps/showcase` (release PRs [#266](https://github.com/jose-codegourmet/jabkit/pull/266)–[#270](https://github.com/jose-codegourmet/jabkit/pull/270)). Higgsfield photography remains Jose-owned on [#260](https://github.com/jose-codegourmet/jabkit/issues/260); per-site `-03` issues were closed `not_planned`. Real UI screenshots still come from the running site. No `examples/` files are needed.

## Reading sequence

```text
meta.json
  ├── system.md: purpose, feeling, page architecture
  └── rules.md: constraints and review criteria
           ↓
tokens.json + typography.json
           ↓
components.json
           ↓
patterns.json ← imagery.md
           ↓
motion.json + motion.md
           ↓
migration.md
```

Each directory contains all of these files, plus `references.md` and a supplementary `roadmap.md`. Component guidance stays in `components.json`; layout, state, and responsive requirements are described in the system rules and migration guide.

Read [the document contract](contract.md) before interpreting JSON. Read a system's `references.md` before attributing a design observation to a particular site. Read `imagery.md` before generating assets: each includes the intended mood, composition, lighting, prompt templates, complete sample prompts, exclusions, and crop guidance.

## What works in JabKit today

- Components consume semantic CSS variables from [tokens.css](../packages/tokens/tokens.css). Each proposal supplies every existing color token in light and dark, plus the existing radius token.
- These JSON files are not consumed by the CLI, registry builder, Tailwind, or showcase. There is no new theme selector, style flag, or design-system loader in this change.
- A full style requires layout, type, image, and component changes. Swapping token values cannot remove Button's built-in shadow or Input's fixed radius and height.
- Preserve the existing `atoms`, `marketing`, and `dashboard` categories and dependency boundaries. A design system is a styling and composition direction, not a fourth category.
- Source remains authoritative. Follow [theming](../docs/theming.md), [component conventions](../docs/adding-a-component.md), and [preview assets](../docs/previews.md) when implementing.

## Review standard

These are draft specifications ready for an implementation pass. Color pair calculations can validate a palette, but cannot establish accessibility of a rendered page. Review long labels, keyboard operation, focus, touch, zoom, small screens, image crops, failed assets, both themes, and reduced motion in the actual implementation.

Shared baseline: use 4.5:1 contrast for ordinary text; large text has a 3:1 threshold. Necessary control boundaries and state indicators need 3:1 against adjacent colors. Decorative separators have a different role from input boundaries. See [W3C text contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) and [non-text contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html).

Our preferred control target is 44 × 44 CSS pixels, a project design target stricter than WCAG 2.2 AA's 24 × 24 minimum with exceptions. Keep a visible focus state and label controls in all five styles. See [W3C target size](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html).

Automatically moving content that lasts more than five seconds alongside other content needs a pause, stop, or hide mechanism unless essential. These systems avoid such loops by default and specify reduced-motion alternatives. See [W3C pause, stop, hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html).

## Making a website from these docs

1. Choose a system and write a short brief: audience, real content, primary task, emotional register, and available assets.
2. Select one page sequence from `patterns.json`. Use content and imagery appropriate to the project.
3. Apply the full light/dark semantic palette, then the typography and geometry recommendations. Adapt copied components after their pristine install.
4. Generate or commission the required image series using `imagery.md`; keep text, controls, prices, and other functional information in HTML.
5. Apply the component guidance to the components your page needs. Use `migration.md` for existing JabKit components.
6. Review the result against `rules.md` in both themes and on mobile. For library changes, rebuild registry and preview assets and run `pnpm check` from the repository root.
