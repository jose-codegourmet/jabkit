# Pillo — Claymorphism showcase roadmap

**Status:** specification for the independent app `apps/claymorphism`. Epic [#536](https://github.com/jose-codegourmet/jabkit/issues/536). This document describes the sample website and its ticket split. Writing it does not ship routes, generate images, or publish npm.

Read this folder’s [system](system.md), [rules](rules.md), [component guidance](components.json), [imagery direction](imagery.md), and [migration notes](migration.md). The catalogue index in `design-systems/README.md` is updated by a later shared ticket, not by this folder.

## The website to build

**Client:** Pillo Studio. **Product:** Pillo, a shared planning app for families with children aged 6–12. **Promise:** Make everyday routines easier to see, share, and celebrate. **Tagline:** “Little steps. Lighter days.”

The site helps a parent picture a real morning, then **create a free family board**. A secondary action opens a truthful product preview. Free family plan; Plus adds boards and customization only after the client supplies limits and price.

**Voice:** short, specific, encouraging. **Sample notice on every page:** “Pillo is a sample brand built to demonstrate the JabKit Claymorphism design system. Boards, names and progress shown on this site are example data.”

**Completed visitor journey:** Land on Home, tick a step on the example morning board, open How it works, open Morning from Routine ideas, choose Use this routine, see the demo sign-up (including an error that keeps typed values), and return home. Nothing is stored.

## Sitemap and content ownership

Routes live at the app root. Shared header, footer, and example-data notice. Detail records come from one content module. Unknown routine slugs use the routine not-found page.

| Route | Page | Primary CTA |
| --- | --- | --- |
| `/` | Home | Create a free board → `/start` |
| `/how-it-works` | How it works | Create a free board → `/start` |
| `/for-families` | For families | Create a free board → `/start` |
| `/routines` | Routine ideas | Open a routine |
| `/routines/[slug]` | `morning`, `after-school`, `bedtime` | Use this routine → `/start?routine={slug}` |
| `/pricing` | Pricing | Create a free board → `/start` |
| `/faq` | FAQ | Create a free board → `/start` |
| `/start` | Create a free board (demo) | Create my board |
| `/contact` | Contact (demo) | Send message |
| `/privacy` | Privacy stub | Back to home |
| `/terms` | Terms stub | Back to home |
| not-found | 404 | Go to home |

**Header:** `cla-logo-wordmark` links home with accessible name “Pillo home”. Links: How it works, For families, Pricing, FAQ. Button **Start free** → `/start`. Active link is a raised pill with `aria-current="page"`. Focus ring is 3px plum, offset. No mega menu.

**Mobile (below 768px):** wordmark, Start free, and a round Menu button (`aria-expanded`, `aria-controls`). Sheet lists the four links as 56px tiles, then Routine ideas and Contact. Close with Close menu, Escape, or a link. Focus returns to Menu. Scroll locks while open. Reduced motion fades the sheet and does not slide it 8px.

**Shared CTA** on Home, How it works, For families, routine detail, Pricing, and FAQ. Image `cla-cta` (copy left) and `cla-cta-mobile` (image above). Headline: “One small step can change the feel of a whole day.” Body: “Start with one routine. Add the rest when it feels right.” Button **Create your first board**. Link “See how it works” is hidden on `/how-it-works`.

**Footer:** `cla-logo-symbol`, tagline, promise, Product, Help, Legal, year line with company details marked for the client, and the sample notice.

**Demo data:** badge “Example board” on every coded board. Names: Maya, Leo, Dad, Grandma Rosa. Initial avatars in code. Morning steps: Get dressed, Pack school bag, Brush teeth, Ready to go. Progress label: “2 of 4 steps done”. Empty: “Your board is ready for its first step. Add one thing your family does each morning.”

**Routines:**

| Slug | Steps | Tip | Completion |
| --- | --- | --- | --- |
| `morning` | Get dressed · Pack school bag · Brush teeth · Ready to go | Lay clothes out the night before to make step one quick. | Nice work, Maya. Your bag is ready. |
| `after-school` | Unpack bag · Have a snack · Homework time · Free play | Put the snack step before homework so energy is up. | Homework done. Time to play! |
| `bedtime` | Bath or wash · Pajamas on · Story time · Lights down · Sleep tight | Keep the last two steps quiet and the same every night. | All set for sleep. You did it! |

Unconfirmed commercial and legal lines stay in the copy as `[… — client to confirm]`.

## JabKit component plan

Tokens do not restyle every internal element. Page tickets own composition. Paths are real files to inspect, not a guarantee that the current props match the section.

| Need | Source under `packages/ui/src/` | Pillo role |
| --- | --- | --- |
| Button | `atoms/button` | Start free, Create a free board, I did it, Create my board |
| Navigation menu | `atoms/navigation-menu` | Floating rail. No mega menu |
| Hero | `marketing/hero307` | Starting point only. Replace the admin scene with a coded board on `cla-hero` |
| Steps | `atoms/stepper-with-titles` | Three raised tiles. Vertical on small screens |
| Badge, avatar, progress, checkbox | `atoms/badge`, `atoms/avatar`, `atoms/progress`, `atoms/checkbox` | Example board. Words plus icon plus color. Initials, not photos |
| Feature mosaic | `marketing/feature261` | Board, progress, and people slots only. Omit the statistic slot |
| Benefits | `marketing/spotlight-card` or `marketing/bento19` | Soft clay cards. Remove pointer glow |
| Pricing | `marketing/pricing28` | Two plans. No discount, testimonial, or “most popular” |
| FAQ | `marketing/faq12` or `atoms/accordion` | Grouped answers. Home previews the Getting started group |
| Footer | `marketing/footer-column` or `marketing/footer-section` | Four columns, one column on small screens |
| Fields | `atoms/input`, `atoms/textarea`, `atoms/checkbox` | Demo forms. No select atom; use a native select with the same focus ring |

There is no card atom. Compose tiles with semantic HTML and these atoms.

### Page mapping

| Page | Sections | Image slots |
| --- | --- | --- |
| Home | Rail, hero, three steps, interactive morning board, three benefits, three routine teasers, two-plan summary, four FAQ answers, CTA, footer | `cla-logo-wordmark`, `cla-hero`, `cla-hero-mobile`, `cla-step-build`, `cla-step-next`, `cla-step-celebrate`, `cla-benefit-owners`, `cla-benefit-change`, `cla-benefit-wins`, `cla-routine-morning`, `cla-routine-after-school`, `cla-routine-bedtime`, `cla-cta`, `cla-cta-mobile`, `cla-logo-symbol` |
| How it works | Intro on blobs, three step details with a mini builder and a child tile, skip/move/swap, two caregivers, calm process note, CTA | `cla-background-blobs`, `cla-step-*`, `cla-benefit-change`, `cla-caregivers`, `cla-process-shaping`, `cla-cta` |
| For families | Intro, parents, children, caregivers, privacy in plain words, routine link, CTA | `cla-families-hero`, `cla-families-kids`, `cla-caregivers`, `cla-privacy-home`, `cla-cta` |
| Routine ideas | Intro, three cards, blank-board band, footer | `cla-routine-*`, `cla-empty-board` |
| Routine detail | Breadcrumb, header, example board, tip, other routines, CTA | matching `cla-routine-*`, CTA pair |
| Pricing | Intro, Free and Plus, good-to-know accordion, CTA | `cla-cta` |
| FAQ | Intro on clay texture, five groups, CTA | `cla-background-clay`, `cla-cta` |
| Start | Demo notice, form, loading, error, success, empty or prefilled board | `cla-empty-board` |
| Contact | Intro, demo form, FAQ nudge | none |
| Privacy, Terms | Narrow column, placeholder callout, client body | none |
| 404 | “This page wandered off.” | `cla-404` |
| Unknown routine | “We couldn't find that routine.” | none |

Home SEO title: “Pillo — Little steps. Lighter days.” Other titles follow the epic: “How it works — Pillo”, “For families — Pillo”, “Routine ideas — Pillo”, “{Routine name} routine — Pillo”, “Pricing — Pillo”, “FAQ — Pillo”, “Create a free board — Pillo”, “Contact — Pillo”, “Privacy — Pillo”, “Terms — Pillo”, “Page not found — Pillo”.

## Required image series

**Jose generates every new image in Higgsfield.** Agents do not. Full prompts are in [imagery.md](imagery.md). Store outputs under `apps/claymorphism/public/assets/design-systems/claymorphism/`. IDs:

`cla-logo-symbol`, `cla-logo-wordmark`, `cla-hero`, `cla-hero-mobile`, `cla-cta`, `cla-cta-mobile`, `cla-background-clay`, `cla-background-blobs`, `cla-process-shaping`, `cla-step-build`, `cla-step-next`, `cla-step-celebrate`, `cla-benefit-owners`, `cla-benefit-change`, `cla-benefit-wins`, `cla-routine-morning`, `cla-routine-after-school`, `cla-routine-bedtime`, `cla-families-hero`, `cla-families-kids`, `cla-caregivers`, `cla-privacy-home`, `cla-empty-board`, `cla-404`.

Approve the symbol, then the wordmark, then `cla-hero`, then the rest against that master. One upper-left light. No faces, no mascot, no UI text in the scenes.

**Anchor prompt (cla-hero), for later execution by Jose:**

```text
A soft claymorphism illustration scene of hand-shaped matte clay morning objects
on warm cream #FFF8F0: folded coral t-shirt, lavender backpack, mint toothbrush
in a butter cup, small sneakers, and a coral clock with no numbers. Objects sit
on the right. The center-left 60 percent stays empty cream for a coded board.
Upper-left light, short shadows to the lower right. No lettering, no UI, no
people, no faces. Aspect ratio 16:9.
```

## Ticket index

Sub-tickets of epic #536. Each PR touches only its own files. This docs ticket is #558.

| Issue | Scope | Depends on |
| --- | --- | --- |
| #554 | Scaffold the design-system apps | None |
| #555 | Generate the 24 `cla-*` assets | Brief |
| #556 | Shared demo data in `app/_data` | Setup |
| #557 | Theme, fonts, layout, header, footer, shared components | Setup, data |
| #558 | This `design-systems/claymorphism/` folder | None |
| #559 | Home `/` | Foundation |
| #560 | How it works | Foundation |
| #561 | For families | Foundation |
| #562 | Routine ideas | Foundation |
| #563 | Routine detail | Foundation, routine data |
| #564 | Pricing | Foundation |
| #565 | FAQ | Foundation |
| #566 | Create a free board | Foundation |
| #567 | Contact | Foundation |
| #568 | Privacy, terms, 404 | Foundation |
| #569 | Full-site review | All pages |

Later shared work, outside this folder: catalogue #658 and registry #659.

## Scope and acceptance

This ticket’s done state is the file set itself: every luxury counterpart exists here, JSON parses, and Biome accepts the folder. It does not implement pages.

Site acceptance, owned by the page and QA tickets:

- [ ] A parent can move from Home to a resettable example board to `/start` without a stored account.
- [ ] Both themes, 320/390/768/1440, keyboard focus, and reduced motion keep the same actions.
- [ ] Prices, privacy claims, and unconfirmed actions stay marked for the client.
- [ ] Every `cla-*` slot used on a page resolves locally or fails to a useful layout.
- [ ] The sample notice and “Example board” badge are present where the brief requires them.

## Verification

For this docs change: `pnpm exec biome check design-systems/claymorphism`, parse each JSON file, and confirm `git diff --name-only origin/main` lists only `design-systems/claymorphism/**`.

For a page ticket: run the claymorphism app, walk the route with mouse and keyboard, toggle dark and reduced motion, and submit the demo form through error and success. Do not npm publish from a page ticket.
