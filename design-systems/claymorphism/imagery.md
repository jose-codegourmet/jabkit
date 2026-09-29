# Claymorphism: image direction and AI prompts

## Intended feeling

Soft matte hand-shaped clay, not glossy plastic. Warm cream `#FFF8F0`, coral `#FF826E`, lavender `#B7A3ED`, mint `#A8DCC4`, butter `#F6D978`, and deep plum `#332B3E` only as small accents. One soft key light from the upper left, a gentle top highlight, and a short shadow toward the lower right. Rounded forms, slight thumbprint texture, calm rather than toy-store loud.

The coded board is the hero. Imagery frames it: objects beside the board, one image per step tile, one per benefit card, one per routine card. Never replace the board with a picture of a UI. Alternate a wide scene, a row of small squares, and one bounded texture. Only one texture section per page. Text sits on solid cream, never on the image.

No people’s faces, no mascot, and no lettering outside the logo prompts. This guide does not ask a model to copy another site. The [reference note](references.md) records that no external URL was assigned.

## Build a prompt from decisions

Use this structure:

> [Clay object and role], [ratio and quiet area for HTML], [matte clay and upper-left light], [palette limited to cream, coral, lavender, mint, butter, and tiny plum], [what must stay out of frame], one standalone asset.

HTML owns headlines, prices, navigation, labels, task names, and controls. Request one image per `cla-*` id.

## Asset index

| ID | Ratio | Use |
| --- | --- | --- |
| `cla-logo-symbol` | 1:1 | Small header, favicon, footer |
| `cla-logo-wordmark` | 21:9 | Header, footer, social |
| `cla-hero` | 16:9 | Home hero around the coded board |
| `cla-hero-mobile` | 4:5 | Home hero below 768px |
| `cla-cta` | 16:9 | Shared closing band, desktop |
| `cla-cta-mobile` | 4:5 | Shared closing band, mobile |
| `cla-background-clay` | 1:1 | FAQ intro texture, one band per page |
| `cla-background-blobs` | 21:9 | How it works intro, behind a cream card |
| `cla-process-shaping` | 4:5 | How it works, “Designed to feel calm” |
| `cla-step-build` | 1:1 | Step 1 |
| `cla-step-next` | 1:1 | Step 2 |
| `cla-step-celebrate` | 1:1 | Step 3 |
| `cla-benefit-owners` | 4:3 | Benefit: who owns the step |
| `cla-benefit-change` | 4:3 | Benefit: plans change |
| `cla-benefit-wins` | 4:3 | Benefit: small wins |
| `cla-routine-morning` | 4:3 | Morning card and detail |
| `cla-routine-after-school` | 4:3 | After-school card and detail |
| `cla-routine-bedtime` | 4:3 | Bedtime card and detail |
| `cla-families-hero` | 16:9 | For families intro |
| `cla-families-kids` | 4:5 | For children |
| `cla-caregivers` | 3:2 | Share the load / caregivers |
| `cla-privacy-home` | 1:1 | Privacy in plain words |
| `cla-empty-board` | 1:1 | Start and blank-board empty state |
| `cla-404` | 4:3 | Not found |

Generation order: `cla-logo-symbol`, then `cla-logo-wordmark` using the symbol. Then `cla-hero` as the master scene. Then mobile hero, CTA, textures, and process, using the hero. Then steps, benefits, routines, families, caregivers, privacy, empty board, and 404, using the hero plus the closest sibling.

Model note for Jose: Nano Banana Pro (`nano_banana_pro`), 2k. Coding agents must not generate images or spend credits.

## Complete prompts

### cla-logo-symbol

Rounded square tile with a soft check. Flat, so it works at 24px. After approval, redraw as SVG and export 32px and 180px from the SVG. Also provide a plum `#332B3E` one-color version.

> Design one original flat logo symbol for Pillo, a family routine app: a single rounded square tile, corners generously rounded like a soft cushion, in coral #FF826E, with a short friendly check mark cut out of its center as negative space. The check has rounded terminals and a slightly thicker second stroke. Flat solid color only: no gradient, no shadow, no bevel, no clay texture, no highlight, so it works at 24 pixels and as a one-color stamp. No letters, no face, no mascot, no house, no heart. Center the symbol with generous margin on a flat uniform background of warm cream #FFF8F0 so it can be cut out later.

One standalone asset. Aspect ratio 1:1. No lettering, no UI, no watermarks, no mockup.

### cla-logo-wordmark

Lowercase `pillo` with the tile. Reference `cla-logo-symbol`. If a letter is wrong, keep the symbol and set “pillo” in Nunito in code.

> Design one horizontal wordmark reading exactly "pillo", all lowercase, exact spelling: p-i-l-l-o. Use a rounded, highly legible geometric sans with soft round terminals and bold weight, in deep plum #332B3E. The dot of the "i" is a small rounded square tile in coral #FF826E that matches the attached symbol. Place the attached coral check tile symbol to the left of the word at cap height with balanced spacing. Flat solid colors only: no gradient, no shadow, no clay texture, no 3D, no outline. No other words, no tagline, no mascot. One centered lockup with wide margins on a flat uniform warm cream #FFF8F0 background so it can be cut out later.

One standalone asset. Aspect ratio 21:9. No UI, no watermarks, no additional lettering.

### cla-hero

Morning objects around empty space for the coded board. Reference `cla-logo-symbol`.

> A soft claymorphism illustration scene of hand-shaped matte clay morning objects arranged on a warm cream #FFF8F0 surface: a folded coral t-shirt, a small lavender school backpack, a mint toothbrush in a butter-yellow cup, a pair of small sneakers, and a round coral alarm clock with no numbers. Objects are clustered along the right edge and lower right corner; the center-left 60 percent of the frame is calm empty cream space where a UI card will be placed later in code. Rounded chunky forms with slight thumbprint texture, soft key light from the upper left, gentle top highlights, short soft shadows falling to the lower right. Palette limited to cream, coral #FF826E, lavender #B7A3ED, mint #A8DCC4, butter #F6D978, with tiny deep plum #332B3E accents. Calm, warm, reassuring, not glossy plastic, not a toy-store scene.

One standalone asset. Aspect ratio 16:9. No lettering, no numbers, no UI, no screens, no people, no faces, no mascot, no watermarks.

### cla-hero-mobile

Reference `cla-hero`.

> Recompose the attached clay morning scene for a portrait mobile layout: the same folded coral t-shirt, lavender backpack, mint toothbrush in butter cup, small sneakers and coral clock, same matte clay material, palette and upper-left light, now gathered in the lower 45 percent of the frame. The upper 55 percent is calm empty warm cream #FFF8F0 space for a UI card placed in code. Do not squeeze the wide scene; rearrange the objects into a compact cluster.

One standalone asset. Aspect ratio 4:5. No lettering, no numbers, no UI, no screens, no people, no faces, no watermarks.

### cla-cta

A coral tile on a short staircase. Reference `cla-hero`.

> Claymorphism illustration matching the attached scene's matte clay, palette and upper-left light. In the rightmost 40 percent of the frame, a short gentle staircase of four rounded clay tiles in cream, mint, lavender and butter rises left to right; a coral rounded tile with a soft pressed-in check mark rests on the top step, slightly lifted as if just placed. A few tiny butter confetti blobs float nearby. The left 60 percent is a quiet warm cream #FFF8F0 surface for an HTML headline and button. Soft short shadows to the lower right, calm and celebratory.

One standalone asset. Aspect ratio 16:9. No lettering, no numbers, no button drawn, no UI, no people, no faces, no watermarks.

### cla-cta-mobile

Reference `cla-cta`.

> Recompose the attached clay tile staircase for portrait: the same four rounded tiles and coral check tile on top, same material, palette and light, rising from lower left to center right and occupying the middle 60 percent of the frame, with calm warm cream #FFF8F0 margin above and below. Keep every tile fully inside the frame.

One standalone asset. Aspect ratio 4:5. No lettering, no numbers, no UI, no people, no watermarks.

### cla-background-clay

Reference `cla-hero`. FAQ intro, and at most one band elsewhere.

> A flat, evenly lit, edge-to-edge close view of smooth matte warm cream #FFF8F0 modelling clay surface with extremely faint soft fingertip smoothing marks and fine grain. No objects, no focal point, no shadows, no vignette, no cracks, no stains. Very low contrast so dark plum text on top stays easy to read. Request a seamless repeat; inspect the tiled result manually.

One standalone asset. Aspect ratio 1:1. No lettering, no UI, no watermarks.

### cla-background-blobs

Reference `cla-hero`. Text sits on a solid cream card in front.

> A wide, calm claymorphism background: a warm cream #FFF8F0 field with five soft irregular flattened clay blobs in lavender #B7A3ED, mint #A8DCC4, butter #F6D978 and coral #FF826E, placed only along the left and right edges and partly cropped by the frame. The central 60 percent stays clear cream. Matte clay, gentle top highlights, soft short shadows to the lower right, upper-left light. Quiet and airy, not busy.

One standalone asset. Aspect ratio 21:9. No lettering, no objects, no UI, no people, no watermarks.

### cla-process-shaping

Reference `cla-hero`. Adult hands only, cropped at the wrists.

> A tactile close-up photograph of an adult's two hands gently pressing a rounded check mark into a soft coral #FF826E modelling clay tile on a warm cream table. Beside it, three finished rounded clay tiles in lavender, mint and butter, and a small wooden modelling tool. Soft window light from the upper left, shallow depth of field, visible clay fingerprints, calm handmade feeling. Hands only, cropped at the wrists, natural skin, no rings or nail art.

One standalone asset. Aspect ratio 4:5. No lettering, no faces, no UI, no screens, no logos, no watermarks.

### cla-step-build

Reference `cla-hero`.

> Claymorphism illustration matching the attached scene: a soft rounded lavender clay tray holding a neat row of three blank rounded clay tiles in coral, mint and butter, with a fourth blank cream tile resting just beside the tray as if about to be added. Centered composition with comfortable margin, warm cream #FFF8F0 background, upper-left light, short soft shadows lower right.

One standalone asset. Aspect ratio 1:1. No lettering, no numbers, no icons on tiles, no UI, no people, no watermarks.

### cla-step-next

Reference `cla-step-build`.

> Same clay tray and tiles as the attached image, now viewed slightly closer: one coral tile is lifted up and forward out of the row, larger and in sharp focus, casting a soft shadow on the tray, while the other tiles sit back quietly. A gentle sense of "this one now". Warm cream #FFF8F0 background, same palette, upper-left light.

One standalone asset. Aspect ratio 1:1. No lettering, no numbers, no arrows, no UI, no people, no watermarks.

### cla-step-celebrate

Reference `cla-step-next`.

> Same clay tray as the attached image with all tiles now pressed with soft rounded check marks, and a round butter-yellow #F6D978 clay badge with a simple raised star resting in front of the tray. A few tiny coral and mint confetti blobs around it. Warm cream #FFF8F0 background, same matte clay and upper-left light, joyful but calm.

One standalone asset. Aspect ratio 1:1. No lettering, no numbers, no ribbons with text, no UI, no people, no watermarks.

### cla-benefit-owners

Reference `cla-step-build`.

> Claymorphism illustration matching the attached tiles: three rounded clay tiles in a row, each with a small round clay token resting on its top-right corner, tokens in lavender, mint and coral to suggest who owns each tile. Simple, orderly, centered, warm cream #FFF8F0 background, matte clay, upper-left light, short soft shadows.

One standalone asset. Aspect ratio 4:3. No faces on tokens, no letters or initials, no numbers, no UI, no people, no watermarks.

### cla-benefit-change

Reference `cla-step-build`.

> Claymorphism illustration matching the attached tray and tiles: one mint tile has been slid out of the row and sits a little to the right, leaving a soft gap, suggesting a step moved to later. Beside the tray, a small pair of butter-yellow clay rain boots and a tiny lavender umbrella hint at a change of plans. Warm cream #FFF8F0 background, same matte clay, upper-left light.

One standalone asset. Aspect ratio 4:3. No lettering, no arrows, no numbers, no UI, no people, no watermarks.

### cla-benefit-wins

Reference `cla-step-celebrate`.

> Claymorphism illustration matching the attached badge: a short rounded cream clay shelf holding four round clay badges in butter, coral, mint and lavender, each with a simple raised shape (star, sun, leaf, heart). Front view, centered, warm cream #FFF8F0 background, matte clay, upper-left light, soft short shadows.

One standalone asset. Aspect ratio 4:3. No lettering, no numbers, no ribbons with text, no UI, no people, no watermarks.

### cla-routine-morning

Reference `cla-hero`.

> Claymorphism still life matching the attached scene: a folded coral t-shirt, a lavender school backpack, a mint toothbrush in a butter cup, and a pair of small sneakers, arranged left to right in the order of a morning routine on a warm cream #FFF8F0 surface. Pale butter morning glow, upper-left light, matte clay, short soft shadows, centered with even margins.

One standalone asset. Aspect ratio 4:3. No lettering, no numbers, no clocks with digits, no UI, no people, no watermarks.

### cla-routine-after-school

Reference `cla-routine-morning`.

> Claymorphism still life in the same style, framing and light as the attached image: an open mint lunchbox, a coral clay apple on a small plate, a lavender pencil case beside a closed plain notebook with blank cover, and a butter-yellow ball, arranged left to right as unpack, snack, homework, play. Warm cream #FFF8F0 surface, soft afternoon light from the upper left, matte clay.

One standalone asset. Aspect ratio 4:3. No lettering, no writing in the notebook, no numbers, no UI, no people, no watermarks.

### cla-routine-bedtime

Reference `cla-routine-morning`.

> Claymorphism still life in the same style and framing as the attached image, shifted to a calm evening mood: a rolled mint towel, folded lavender pajamas, a small closed picture book with a plain butter cover, and a round coral night-light shaped like a soft moon, glowing gently. Warm cream surface with a slightly dimmer lavender-tinted evening light, still from the upper left, matte clay, soft shadows.

One standalone asset. Aspect ratio 4:3. No lettering, no book titles, no numbers, no UI, no people, no watermarks.

### cla-families-hero

Reference `cla-hero`.

> Claymorphism illustration matching the attached scene: a soft rounded clay coat rack by a front door, holding two adult coats (plum and lavender) and one small child coat (coral), with a small mint school bag and a larger butter tote on a bench below and three pairs of shoes in different sizes lined up. Objects occupy the right half; the left half is calm warm cream #FFF8F0 space. Matte clay, upper-left light, soft short shadows, homely and reassuring.

One standalone asset. Aspect ratio 16:9. No lettering, no people, no faces, no pets, no UI, no watermarks.

### cla-families-kids

Reference `cla-step-celebrate`.

> Claymorphism illustration matching the attached style: one big chunky coral clay tile with a soft pressed-in check mark standing upright, a small round butter badge with a raised star leaning against it, and a pair of small mint sneakers beside it, seen from a low child's-eye angle. Warm cream #FFF8F0 background, matte clay, upper-left light, playful but calm, portrait composition.

One standalone asset. Aspect ratio 4:5. No lettering, no numbers, no UI, no people, no faces, no watermarks.

### cla-caregivers

Reference `cla-benefit-owners`.

> Claymorphism still life matching the attached style: one shared rounded lavender tray of tiles in the center, two done with soft check marks, each tile topped by a small colored token. On the left a plum mug and a set of clay keys on a coral ring; on the right a mint mug and a set of keys on a butter ring, suggesting two caregivers sharing one board. Warm cream #FFF8F0 surface, upper-left light, matte clay, balanced composition.

One standalone asset. Aspect ratio 3:2. No lettering, no numbers, no phones, no UI, no people, no watermarks.

### cla-privacy-home

Reference `cla-families-hero`. No padlock and no shield.

> Claymorphism illustration matching the attached style: a small rounded cream clay house with a coral roof and a closed rounded lavender door, one warm lit butter window, sitting on a soft mint clay mound. Simple, cozy, centered on a warm cream #FFF8F0 background, upper-left light, soft short shadow.

One standalone asset. Aspect ratio 1:1. No padlocks, no shields, no security icons, no lettering, no numbers, no UI, no people, no watermarks.

### cla-empty-board

Reference `cla-step-build`.

> Claymorphism illustration matching the attached tray: the same rounded lavender clay tray, completely empty with soft shallow slots, and a single blank coral tile resting beside it, ready to be placed first. Centered with generous margin on a warm cream #FFF8F0 background, upper-left light, soft short shadows, hopeful and simple.

One standalone asset. Aspect ratio 1:1. No lettering, no plus signs, no numbers, no UI, no people, no watermarks.

### cla-404

Reference `cla-step-build`. Space above for an HTML headline.

> Claymorphism illustration matching the attached tray: the lavender clay tray with one empty slot, and the missing coral tile lying a little way off to the side next to a single small striped mint-and-butter clay sock, gently funny and calm. Warm cream #FFF8F0 background, upper-left light, matte clay, centered composition with space above for a headline placed in HTML.

One standalone asset. Aspect ratio 4:3. No lettering, no numbers, no “404” digits, no question marks, no UI, no people, no watermarks.

## Negative direction

Avoid glossy plastic, toy-store clutter, mascots, children’s faces, invented UI screenshots, watermarks, and lettering on objects. Do not draw buttons, prices, or task names. Do not use padlocks or shields for privacy. Do not change the light direction between shots.

If the subject is wrong, change the subject before adding effects.

## Crop, theme, and series consistency

Keep the quiet area named in each prompt so HTML can sit on cream. Do not crop away the check tile, the empty tray, or the staircase. Logo rasters are cutouts on cream; favicon comes from SVG.

Lock material, palette, and upper-left light for the series. Routine still lifes share framing. Dark mode does not invert the photographs. Check cutouts on both cream and the dark plum canvas.

The tray family (build, next, celebrate, owners, change, empty, 404) is one object language. It should match the CSS clay, not a second style.

## Handoff to JabKit

Store files under `apps/claymorphism/public/assets/design-systems/claymorphism/` and refer to them by `cla-*` id. Follow [preview and asset documentation](../../docs/previews.md). Record provenance in the repository’s manifest. Do not hotlink a generated file. Do not add third-party image URLs to component source.

Informative images need alt text. Decorative blobs can use empty alt. If media fails, the coded board and the action remain.

## Art-direction acceptance

The image serves its slot, keeps its subject at mobile size, leaves the quiet area, and matches the hero’s light and clay. Reject broken geometry, accidental text, faces, inconsistent shadows, and crops that cover the action. The page still explains Pillo if the image is missing.

## Current image-production handoff

Jose generates these in Higgsfield. The prompts above are the set for logos, CTA art, backgrounds, and supporting scenes. The coding agent must not call an image generator. Logo prompts are the exception to “no lettering”. Functional text and controls stay HTML. See [standalone apps](../../docs/standalone-design-systems.md) for asset ownership.
