# Claymorphism

Little steps. Lighter days.

**Status:** authored JabKit proposal for **Pillo**. Read the [reference note](references.md) for what was and was not observed. Palette, type, and asset direction below come from epic [#536](https://github.com/jose-codegourmet/jabkit/issues/536).

## Philosophy and feeling

Pillo is a shared planning app for families with children aged 6–12. A parent sets up a board, assigns age-appropriate steps, and checks progress with the child. Children see what is next, mark a step done, and collect playful badges. The site should feel reassuring to adults and rewarding to kids.

Personality is warm, patient, optimistic, and gently playful. Voice is short and specific. Prefer “Today’s next step” and “You did it!”. Avoid guilt, urgency, and claims that the app fixes parenting.

Claymorphism fits because the product is made of tangible objects: routine tiles, badges, avatars, buttons, and progress pieces. They can feel soft and touchable while remaining legible and operable. The clay style serves a credible product. It is not decoration for its own sake.

The website goal is to get a parent to **create a free family board**. A secondary action lets them explore a realistic product preview.

## Page structure and spatial rhythm

The sample lives at the root of `apps/claymorphism`. Pages: Home, How it works, For families, Routine ideas, routine detail, Pricing, FAQ, Create a free board, Contact, Privacy, Terms, and a friendly 404. The coded board is the hero of each page. Clay imagery frames it and never replaces it.

Use a clear grid inside 76rem. Generous radii and irregular accent blobs sit beside aligned controls. Alternate a wide scene, a row of square tiles, and one bounded texture band. Only one texture section per page. Paragraphs never sit directly on an image. Text sits on solid cream surfaces.

On small screens, stack the sequence, drop the hero image behind the board, and replace the rail with a clay sheet. Child-facing controls stay large.

## Typography and voice

Headings and UI use **Nunito**. Longer copy uses **Nunito Sans**. Strong weight and size separate the promise from the next step. Role measurements are in [typography.json](typography.json).

Parents need setup, privacy, pricing, and how to change a routine. Children need large actions and progress without dense instructions. Caregivers need to see who owns a task and what is already done.

## Color, shape, and interaction

[tokens.json](tokens.json) is a complete light and dark proposal. Brand hex values, from the brief:

| Role | Hex |
| --- | --- |
| Warm cream canvas | `#FFF8F0` |
| Coral primary | `#FF826E` |
| Lavender | `#B7A3ED` |
| Mint | `#A8DCC4` |
| Butter | `#F6D978` |
| Deep plum text | `#332B3E` |

These are proposed brand values, not the default JabKit runtime palette. Light mode maps them onto semantic `--jk-*` variables. Dark mode keeps the same hues on a plum night canvas so the clay still reads. Primary surfaces always use their paired foreground.

Depth is one light direction: soft key from the upper left, a restrained top highlight, and a short offset shadow toward the lower right. Controls are pills (`--jk-radius: 999px`). Raised surfaces use a large radius, about 1.75rem, rather than another token name. Do not put deep shadows behind paragraphs. `--jk-border-width` is 0 where the shadow is the edge; use `--jk-input` when a field needs a visible boundary.

[rules.md](rules.md) defines acceptance. [components.json](components.json) describes foundational components. The page tables in [roadmap.md](roadmap.md) map the rest.

## Imagery

Product UI is built in code. Imagery is identity, soft matte clay objects, and at most one texture band. Asset IDs use the `cla-*` prefix. Read [imagery.md](imagery.md) before commissioning anything. Jose generates images in Higgsfield. Coding agents do not.

The logo is a lowercase `pillo` wordmark with a small rounded tile or check. It stays readable without gradients, shadows, or a mascot.

## Variations within this system

The default is a warm family product: cream canvas, coral actions, lavender, mint, and butter as clay accents, plum text. A darker companion keeps those accents and lightens plum so text stays on the night canvas. Do not add a second illustration style, glossy plastic, or a character mascot.

## Where the boundary lies

Minimal removes staging. Luxury stages desire with photography. Neo-brutalism uses hard edges and flat poster color. Retro recalls a period. Claymorphism makes the interface feel hand-shaped and kind, then proves the product with a real board: owners, steps, and “2 of 4 steps done”.

Use [patterns.json](patterns.json) for page sequence, [motion.md](motion.md) for press, lift, and completion, and [migration.md](migration.md) to apply the direction in the claymorphism app.
