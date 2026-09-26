# Handoff: JabKit Showcase — "Vaudeville" rebrand

## Overview
Redesign of the JabKit showcase site (`apps/showcase` in the jabkit monorepo, Next.js App Router). A 1930s cartoon-poster / vaudeville direction with a hand-drawn JabKit mascot, warm paper textures, rotating light rays and café-style serif headlines. Covers Home, Components catalogue, Component detail, Category list, Samples index, Design systems index, How it works, Agents/MCP reference, 404, and a mobile catalogue + filter sheet.

## About the design files
The `.dc.html` files are **design references built in HTML**, not production code. Recreate them inside `apps/showcase` using its existing patterns (App Router, its Tailwind/PostCSS setup, existing `components/` and `lib/` data sources for the registry). Don't ship the HTML. Real component data (names, counts, tags, install commands) must come from the registry, not the mock copy.

Open `Showcase Mockups v3.dc.html` in a browser. Options are laid out on a canvas:
- **Turn 1 (1a–1j)** — the full screens. **Use these.**
- **Turn 2 (2a–2i)** — section explorations. The chosen ones (2b, 2d, 2g) are already merged into 1a; the rest are reference only.
- Add `?screen=1a` (or 1b…1j) to the URL to see one screen alone, fluid width — this mode includes the responsive rules.

`Showcase Responsive.dc.html` shows every screen at 1280 / 820 / 390 side by side (iframes of the solo mode).

The mockup file also contains other visual directions (Signal, Nightshift, Workshop, Original) behind a Direction tweak. **Only Vaudeville is final.** Ignore `.t-signal`, `.t-night`, `.t-work` CSS.

## Fidelity
**High-fidelity** for Vaudeville: colours, type, borders, shadows, textures, motion and copy are final. Layout spacing is final at desktop; tablet/mobile behaviour is described below and in the `.solo` CSS but should be implemented properly with breakpoints, not attribute selectors.

## Design tokens (Vaudeville)
Colours are authored in OKLCH; use as-is (all evergreen browsers support it).

| Token | Value | Use |
|---|---|---|
| `--bg` | `oklch(0.93 0.035 85)` | aged cream page |
| `--card` | `oklch(0.965 0.025 85)` | cards, header |
| `--mu` | `oklch(0.89 0.04 80)` | muted surface |
| `--fg` / ink | `oklch(0.2 0.03 30)` | text, all outlines, hard shadows |
| `--muf` | `oklch(0.4 0.03 40)` | secondary text |
| `--pr` tomato | `oklch(0.58 0.19 28)` | primary buttons, awning stripes |
| `--prf` | `oklch(0.97 0.02 85)` | text on primary |
| `--prt` | `oklch(0.5 0.18 28)` | red text on cream |
| `--ac` mustard | `oklch(0.84 0.14 85)` | ribbons, highlights, active nav |
| slate (hero) | `oklch(0.43 0.07 245)` | hero stage |
| cream text on dark | `oklch(0.95 0.03 90)` | |
| code bg / fg | ink / cream (see below) | **all code is dark bg + light text** |

Section grounds on Home: hero slate; menu board `oklch(0.26 0.03 160)`; findable mustard; agent `oklch(0.22 0.03 250)`; light/dark tomato; CTA `oklch(0.3 0.08 25)`.

**Typography (all Google Fonts)**
- Headlines `.h1/.h2`, logo, ribbons: **Young Serif** 400, sentence case, letter-spacing −0.02em, line-height 1.02. H1 60px desktop; H2 ~34px (CTA 52px); footer sign-off 132px/1.15. No outline or stacked text-shadow effects (explicitly rejected).
- Body / nav / buttons: **Josefin Sans** 400/600/700. Nav & buttons uppercase, letter-spacing .06–.08em, 13px.
- Script labels (`.tag`): **Yellowtail**, 16–26px, `--prt` (or mustard on dark).
- Code / mono: **Courier Prime** 400/700.

**Shape & depth**
- Radius 10px (cards), 99px (buttons, pills), arch hero frame `999px 999px 18px 18px`.
- Borders 2–3px solid ink. Hard offset shadows: cards `4px 4px 0 ink`, buttons `3px 3px 0 ink`, feature frames `6–10px` offsets.
- Paper grain: SVG `feTurbulence` noise tile (220px) + fibre noise over the page, cards and header — see `--grain` / `--fibre` in the mockup CSS; copy the data-URIs verbatim.
- Header: cream + grain, 4px double ink bottom border with mustard/ink offset shadow, and a scalloped red/cream awning strip (18px) above it.
- Footer: ink with subtle vertical line texture.

## Screens
All screens share the header (logo medallion `art/jk-logo.png` in a 38px circle, nav: Components, Samples, Design systems, How it works, Agents, GitHub) and footer.

### 1a Home (top to bottom)
1. **Hero** — slate stage with dot halftone + rotating conic light rays centred at 75%/45%. Left: ribbon kicker "Source-owned UI", H1 "Components that leave the nest with you.", sub, "I'm building / I'm an agent" toggle, dark install command box (package-manager tabs npx / pnpm dlx / bunx + copy), buttons "Browse components →" and "See how it works". Right: tall **arched frame** (max 440px, 4:5) with mustard ring + ink rings, containing the **10-frame flip-book animation** (see Motion). Floating chips around it: `#hero` tag, dark `npx jabkit add` code chip, two ✦ stars.
2. **Stats marquee** — full-width ink band with mustard inset edges, Young Serif numbers in mustard + uppercase labels, ✦ separators, infinite scroll. Items: 39 components · 14 atoms · 20 marketing blocks · 22 zero-dependency · 3 MCP tools · 2 themes, one source · 1 command to install · 0 lock-in. (Pull real numbers from the registry.)
3. **A short path from idea to code** (option 2b, comic strip) — three panels in one ink-bordered strip (3px gaps), each: square illustration, mustard label "01 · Describe" etc., title + body. Art: `jk-describe`, `jk-add`, `jk-own`.
4. **Start with something real** (option 2d, café menu board) — dark green board. Left: script "Today's menu", H2, list of categories with dotted leaders and counts (Heroes 8, Pricing 4, Case studies 3, Compare 2, Code examples 3). Right: tilted card with the category illustration. **Hovering a row highlights it mustard and swaps the right image** (`cat-hero`, `cat-pricing`, `cat-case`, `cat-compare`, `cat-code`). No real component screenshots on the landing page — illustrations only, to stay on brand.
5. **Findable by intent** — mustard ground with ink halftone. Left: tilted framed `jk-find.png`. Right: script "the card catalogue", H2, a pill search field ("a pricing table with a monthly toggle" + caret, Search button), then tag stickers (#hero 8, #form 6, #background 6, #chart 5, #pricing 4, #cta 4, #navigation 3, #footer 3) — alternating tomato / cream / slate / mustard, each slightly rotated with a dark count pill.
6. **Built for agent handoff** — dark blue with rotating rays centred left. Left: circular `jk-telegraph.png` with mustard + ink rings. Right: script "wired for robots", H2, body, a "TELEGRAM · POST /mcp" card: red title bar, three columns (01 `search_components`, 02 `get_install_plan`, 03 `get_conventions` as dark code chips + descriptions), dark curl block. Button "Read the agent docs →".
7. **Light and dark** — tomato ground with rotating rays. Ribbon + H2 "Both themes, one source." + sub. One split card: left `jk-day.png` ("Day shift · Light" pill), right `jk-night.png` ("Night shift · Dark" pill), centred Light/Dark segmented pill.
8. **CTA** — deep red with rays rising from bottom centre. Left: `jk-bow.png` in a mustard frame with **marquee bulb border** (radial-gradient dots on all four edges). Right: script "curtain call", H2 "Own the files. Ship the interface.", body, mustard primary + outline button, `$ npx jabkit init`.
9. **Footer** (option 2g) — brand block (logo, blurb, dark `$ npx jabkit init`), three link columns (Catalogue / Learn / Project), oversized tomato sign-off **"Take it home."** (Young Serif 132px), bottom bar "© 2026 JabKit · MIT licensed" / version. Verify license, version and link targets against the repo.

### 1b–1j
Layouts are unchanged from the previous handoff wireframes; apply the Vaudeville tokens above. Specifics: 1b catalogue with facet sidebar, active filter chips and a dark hover copy chip on cards; 1c component detail with preview + sticky install panel (CLI / Prompt / MCP tabs, dark code); 1d category tabs; 1e samples (pending ones dimmed, unlinked); 1f design-systems switcher; 1g mobile catalogue + bottom filter sheet; 1h how-it-works stepper; 1i MCP reference (3-col: nav / doc / try-it); 1j 404 with search recovery and the puzzled mascot (`jk-404.png`).

## Motion
- **Light rays**: every conic ray layer uses `repeating-conic-gradient(from var(--ray) …)`. One rAF loop advances `--ray` at ~4°/s; scroll velocity adds a boost (up to ~170°/s) that decays exponentially (≈96%/s). Applies to hero, agent, light/dark, CTA, 404.
- **Hero flip-book**: 10 frames `art/frames/f1–f10.png` swapped via CSS keyframes on `background-image`, `steps(1,end)`, 1.7s loop (~6 fps, intentionally jerky like old cartoons), plus a .17s vignette flicker. Preload all frames. Frames are AI-generated and vary slightly in framing — this reads as hand-drawn; if it looks too jumpy, drop to 8 frames or regenerate with tighter framing.
- **Parallax** (hero only): elements with `data-px` translate by `(distance from viewport centre) × factor`; image inside the arch moves opposite (factor 0.12), chips −0.16…−0.30.
- **Marquee**: `translateX(0 → −50%)` 40s linear infinite over two copies; pauses on hover.
- **All motion is disabled under `prefers-reduced-motion: reduce`.**

## Responsive
Breakpoints used: ≤1100 (tablet), ≤600 (mobile).
- ≤1100: nav collapses to a hamburger; 2-column layouts stack; 3–6 column grids go to 2; sidebars hide (catalogue filters move to the 1g bottom sheet); sticky panels become static; H1 clamps 44–72px.
- ≤600: all grids single column except stats/sticker rows (2 cols); side padding 20px; section padding 56px; H1 42px, H2 30px; footer sign-off 14vw; long code wraps; button rows wrap.

## State
- Home menu board: `activeCategory` index (hover/focus sets it; also make rows focusable + keyboard accessible).
- Install box: package manager tab; "building / agent" toggle.
- Ray angle / scroll boost: local refs in one client component — no global state.

## Assets (`art/`)
All illustrations are AI-generated (Higgsfield, Nano Banana) from the user's JabKit character reference, 1k resolution, PNG. Move to `apps/showcase/public/art/` and convert to WebP/AVIF.
- Mascot / brand: `jk-logo`, `jk-hero`, `jk-stage`, `frames/f1–f10`
- Home: `jk-describe`, `jk-add`, `jk-own`, `cat-hero`, `cat-pricing`, `cat-case`, `cat-compare`, `cat-code`, `jk-find`, `jk-telegraph`, `jk-day`, `jk-night`, `jk-bow`, `jk-404`, `jk-agent`
- Other direction art (`hero`, `describe`, `add`, `own`, `nest`, `agent`, `v-*`) is unused by Vaudeville.
- `previews/` are real component screenshots used only on catalogue/detail screens — in production use the registry's live previews.

## Files
- `Showcase Mockups v3.dc.html` — all screens + CSS (search `.t-vaud` for the direction's rules; `componentDidMount` for rays/parallax logic).
- `Showcase Responsive.dc.html` — responsive viewer.
- `support.js` — runtime needed only to open the `.dc.html` files locally.
