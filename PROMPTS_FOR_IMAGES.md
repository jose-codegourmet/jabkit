# Prompts for the five complete website image systems

**Owner: Jose. Execute these prompts yourself in Higgsfield. The coding agent must not generate images or spend generation credits.** This is the image-production handoff for the separate apps under `apps/`. Written before the app migration on 2026-09-15.

This brief includes original logo concepts, wordmarks, CTA artwork, section backgrounds, process imagery, and complete supporting photo series. A large hero alone cannot make a complete website. Each asset below has a real page role; the page-composition notes describe how to use the series without turning every section into the same image/text split.

## Start here

1. Keep existing Higgsfield images you like. The repository already contains full named asset series, not just hero filenames; existence does not establish that their composition or placement works. The existing-series prompts below preserve filenames so replacements can be integrated without guesswork.
2. Start with the **new brand and supporting assets** for one website: logo symbol, wordmark, CTA scene, and one process/material image. These fill the missing identity and lower-page roles before another hero is generated.
3. Generate **one standalone image per prompt**, not an entire website screenshot, brand board, contact sheet, or multiple assets embedded in one image. Choose the aspect ratio in Higgsfield as well as naming it in the prompt. Use the largest useful output available rather than assuming a specific model or fixed resolution.
4. Attach an approved image from that same business as a reference when a prompt calls for continuity. Use it to match materials, lighting, and identity, while changing framing and subject as directed. Do not feed a whole website screenshot as a style reference for every asset.
5. Save original outputs before compression. File stems below are exact handoff IDs. Existing `.webp` delivery files may be replaced later after review; keep the full-quality original separately. Never overwrite the only approved master.
6. Inspect mobile crops. Recompose wide CTA scenes into 4:5 when the subject cannot survive a crop. Keep the action and heading in HTML, with the image above/beside it on mobile if necessary.

## Output rules

| Asset | Output to request | Production use |
| --- | --- | --- |
| Logo symbol | One flat mark, 1:1, transparent PNG if supported; otherwise uniform plain field | Review silhouette at 24px. Later recreate/clean as SVG; raster generation is not a vector export. Derive light/dark versions from the same approved geometry. |
| Wordmark | One horizontal lockup, 4:1, exact spelling, plain/transparent background | Verify every letter. If the lettering fails, keep the approved symbol and typeset the name in code; never ship misspelled raster lettering. |
| CTA artwork | Standalone scene, 16:9; a matching 4:5 companion if needed | Headline, explanatory text, and real clickable button remain HTML. The copy supplied below is not part of the generated pixels. |
| Background | Subtle material tile at 1:1 or bounded atmospheric frame at 3:2 | Use one local section at a time. Verify repeat seams manually; a prompt saying seamless does not guarantee them. Keep forms and reading text on dependable contrast surfaces. |
| Photo/object | The stated subject and ratio with useful crop margin | Natural image dimensions and responsive derivatives; do not invert photographs in dark mode. |
| Actual product UI | Capture the running website in a browser | Do not use image generation for a cropper, pricing table, navbar, CTA button, form, or fake screenshot. |

Logo prompts are deliberate exceptions to the old blanket “no logos” direction. They request original identity concepts for these fictional businesses. All other prompts keep page text and UI out of the image. A logo-generation prompt may include the exact brand name; photographs must not invent signs or client marks.

## Handoff locations

The migrated apps each own `public/assets/design-systems/<system>/`. Public URLs stay `/assets/design-systems/<system>/<filename>` so existing images and source references remain stable. Deliver originals into a separate folder of your choice, then hand the approved files and IDs to the implementation agent. Do not fabricate generation dates, model IDs, job IDs, or provenance; record the real values Higgsfield supplies when available.

| Website | App | New asset prefix |
| --- | --- | --- |
| West Room Studio | `apps/minimal` | `min-` |
| Good Noise | `apps/neo-brutalism` | `neo-` |
| Common Hours | `apps/editorial` | `edt-` |
| Stillwater House | `apps/luxury` | `lux-` |
| Pocket Keeps | `apps/retro` | `ret-` |

## West Room Studio / minimal

**Visual world:** off-white plaster, graphite, dark timber, natural foliage; observed daylight.

**Full-page composition:** Home: compact wordmark/navigation → image-led introduction → four substantial project photographs with linked captions → a tight three-principle section paired with process-model → a material interlude → CTA worktable and direct inquiry. Minimal means fewer competing elements, not acres of blank space. Let project imagery occupy real width; avoid repeating a tall centered text section between every image.

**CTA copy to render in HTML:** “Bring us the room you are thinking about.” → **Discuss a project**. Use the new CTA artwork as its companion; do not prompt an image of a clickable button.

### New brand and supporting assets: generate these first

#### min-logo-symbol

**Use:** Header mark, favicon, footer. **Ratio:** 1:1. **Filename stem:** `min-logo-symbol`.

```text
Design one original flat architectural symbol for West Room Studio: two offset rectangular room outlines forming an open threshold through negative space. Use an exact economical graphite stroke with square terminals. The symbol must work at 24 pixels and as a single-color stamp. No house roof icon, compass, initials forced into a monogram, shadow, material mockup, or presentation board.

One standalone asset. Aspect ratio 1:1.
```

#### min-logo-wordmark

**Use:** Header and closing signature. **Ratio:** 4:1. **Filename stem:** `min-logo-wordmark`.

```text
Design one clean horizontal wordmark reading exactly "West Room Studio" in a considered, slightly narrow modern grotesk. Give the three words deliberate optical spacing and one subtle custom letter detail; retain readability. Pair it with the approved open-threshold symbol at the left, at a modest scale. Graphite on a plain off-white field, one centered lockup, no slogans, other words, mockups, bevels, or gradients.

One standalone asset. Aspect ratio 4:1.
```

#### min-cta

**Use:** Home closing invitation; contact introduction. **Ratio:** 16:9. **Filename stem:** `min-cta`.

```text
Photograph a West Room Studio worktable at the end of a design meeting: a small pale plaster room model, dark timber samples and one plain closed sketchbook clustered in the rightmost 40 percent. A strong natural window shadow crosses the lower edge. Keep the left half a quiet matte warm-gray tabletop for an HTML headline and action. Human eye-level oblique view, tangible material weight, crisp rather than hazy, no hands, lettering, branding, or embedded button.

One standalone asset. Aspect ratio 16:9.
```

**Mobile companion:** Save as `min-cta-mobile`. Reuse the approved subject/materials, generate a 4:5 composition with the subject in the lower-right half and a quiet upper area; otherwise place HTML copy above the image. Do not squeeze the whole wide scene into the portrait frame.

#### min-background-paper

**Use:** Studio principles or service comparison background. **Ratio:** 1:1. **Filename stem:** `min-background-paper`.

```text
Create a flat evenly lit scan of subtly fibrous warm-white architectural drawing paper, extremely restrained texture, no wrinkles, folds, borders, stains, vignettes, objects, lighting hotspots, or text. Edge-to-edge material with no focal subject. It should support dark readable HTML text rather than demand attention. Request a seamless repeat, and inspect the repeated result manually before tiling.

One standalone asset. Aspect ratio 1:1.
```

#### min-background-shadow

**Use:** Studio interlude beside a dense process section. **Ratio:** 3:2. **Filename stem:** `min-background-shadow`.

```text
Photograph a pale mineral plaster wall crossed by one sharply defined rectangular late-morning window shadow. The illuminated region is off-white and the shadow is cool graphite-gray, with surface pores barely visible. Slightly off-center boundary, no furniture, building picture, text, gradients painted digitally, or excessive empty white margin outside the image. This is a cropped architectural material moment, not another entire house view.

One standalone asset. Aspect ratio 3:2.
```

#### min-process-model

**Use:** Services process feature; compact image beside stages. **Ratio:** 4:5. **Filename stem:** `min-process-model`.

```text
Close photograph of a physically plausible study model for a narrow urban room, visible removable roof and carefully cut thick off-white card walls, one dark timber sample laid beside it on a graphite worktable. Tight three-quarter camera with a useful view into the plan, directional daylight, tactile clean cut edges, no dimension labels, hands, logos, or fantasy architecture.

One standalone asset. Aspect ratio 4:5.
```

#### min-materials

**Use:** Work detail closing; studio material library. **Ratio:** 3:2. **Filename stem:** `min-materials`.

```text
Overhead material study with four genuinely different samples: dark stained timber endgrain, honed gray stone, off-white mineral plaster, and coarse linen. Arrange them as a precise interlocking composition with visible thickness and short realistic contact shadows. Fill most of the frame. Clear distinction between materials, no captions, arbitrary styling props, marble glamour, or logos.

One standalone asset. Aspect ratio 3:2.
```

### Existing content series: keep or replace by slot

These filenames already exist. The prompts below restate the actual recorded subject for each slot so the series stays attached to real content. Keep any successful output; regenerate only where it looks repetitive, inaccurate, or poorly composed in its destination. Attach an approved same-site reference when matching a room, object family, or lighting setup. Existing provenance remains historical until a real replacement is approved.

#### min-hero

**Subject:** Courtyard House interior looking through a dark timber doorway onto a planted courtyard, with a linen chair and timber shelves. **Use:** Home leading view. **Ratio:** 16:9. **Existing file:** `min-hero.webp`.

```text
Architectural photograph of Courtyard House, a small fictional residential interior opening onto a planted courtyard, pale plaster walls and dark timber shelves, eye-level view from the doorway, soft overcast daylight from the right, one linen chair on the right third, left third kept visually quiet, believable joinery and natural material variation, restrained warm neutrals with courtyard foliage as the only saturated element, 16:9 landscape, calm observed realism, no people, no lettering, no logos, no website frame, no watermarks.

Produce one standalone image, not a layout or board. Preserve off-white plaster, graphite, dark timber, natural foliage; observed daylight. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### min-p01-a

**Subject:** Closer view of Courtyard House living room opening to the courtyard. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 4:3. **Existing file:** `min-p01-a.webp`.

```text
Match the reference photograph's overcast daylight, pale plaster, dark timber, stone-look floor, and quiet courtyard-house materials. Architectural photograph of the same Courtyard House living room from a slightly closer eye-level view toward the courtyard opening, linen chair and timber shelving present, one purposeful object, generous unoccupied floor, 4:3 landscape, no people, no text, no logos, no glossy showroom lighting.

Produce one standalone image, not a layout or board. Preserve off-white plaster, graphite, dark timber, natural foliage; observed daylight. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### min-p01-b

**Subject:** Timber cabinet meeting a stone worktop in Courtyard House. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 4:5. **Existing file:** `min-p01-b.webp`.

```text
Match the reference photograph's plaster, dark timber grain, and soft overcast daylight. Close architectural detail of a curved timber cabinet meeting a honed stone worktop in Courtyard House, one branch shadow, side daylight, believable joinery, 4:5 portrait, no text, no labels, no people.

Produce one standalone image, not a layout or board. Preserve off-white plaster, graphite, dark timber, natural foliage; observed daylight. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### min-p02-a

**Subject:** Narrow House hall with a timber stair and a single daylight window. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 4:3. **Existing file:** `min-p02-a.webp`.

```text
Same West Room Studio art direction as the reference: pale plaster, dark timber, overcast daylight, level camera, generous empty space. Photograph of Narrow House, a long thin residential hall with a timber stair and a single window of daylight, quiet observed architecture, 4:3 landscape, no people, no text, no decorative plants repeated as filler, no ultra-wide distortion.

Produce one standalone image, not a layout or board. Preserve off-white plaster, graphite, dark timber, natural foliage; observed daylight. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### min-p02-b

**Subject:** Close stair joinery where dark timber meets pale plaster in Narrow House. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 4:5. **Existing file:** `min-p02-b.webp`.

```text
Same materials and daylight as the reference. Close photograph of Narrow House stair joinery where dark timber meets pale plaster, honest grain and a precise junction, 4:5 portrait, no text, no people, no fake drawings.

Produce one standalone image, not a layout or board. Preserve off-white plaster, graphite, dark timber, natural foliage; observed daylight. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### min-p03-a

**Subject:** Reading Room with timber shelves, a linen chair, and a courtyard-facing window. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 4:3. **Existing file:** `min-p03-a.webp`.

```text
Same plaster, timber, and overcast daylight language as the reference. Photograph of Reading Room, a small quiet interior with dark timber shelves, one linen chair, and a courtyard-facing window, no legible book titles, 4:3 landscape, no people, no logos.

Produce one standalone image, not a layout or board. Preserve off-white plaster, graphite, dark timber, natural foliage; observed daylight. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### min-p03-b

**Subject:** Linen chair arm and timber window ledge in Reading Room. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 4:5. **Existing file:** `min-p03-b.webp`.

```text
Same daylight and timber as the reference. Close photograph of a linen chair arm and a timber window ledge in Reading Room, one small ceramic cup, 4:5 portrait, no text, no people.

Produce one standalone image, not a layout or board. Preserve off-white plaster, graphite, dark timber, natural foliage; observed daylight. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### min-p04-a

**Subject:** Common Table, a long communal timber dining table in a pale plaster room. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 4:3. **Existing file:** `min-p04-a.webp`.

```text
Same West Room materials as the reference. Photograph of Common Table, a long communal timber dining table in a pale plaster room with side daylight, simple chairs, one ceramic bowl, generous unoccupied table length, 4:3 landscape, no people, no lettering.

Produce one standalone image, not a layout or board. Preserve off-white plaster, graphite, dark timber, natural foliage; observed daylight. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### min-p04-b

**Subject:** Edge of Common Table with linen and a ceramic plate. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 4:5. **Existing file:** `min-p04-b.webp`.

```text
Same timber and daylight as the reference. Close photograph of Common Table edge, linen napkin, and a honed stone or ceramic plate, 4:5 portrait, no text, no branding.

Produce one standalone image, not a layout or board. Preserve off-white plaster, graphite, dark timber, natural foliage; observed daylight. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### min-p05-a

**Subject:** North Workshop with a timber worktable and tools arranged by use. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 4:3. **Existing file:** `min-p05-a.webp`.

```text
Same observed daylight and timber language as the reference, slightly more utilitarian. Photograph of North Workshop, a small interiors workshop with a timber worktable, tools arranged by use, pale plaster walls, level camera, 4:3 landscape, no people, no legible plans, no brand marks.

Produce one standalone image, not a layout or board. Preserve off-white plaster, graphite, dark timber, natural foliage; observed daylight. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### min-p05-b

**Subject:** Hand plane and timber offcut on the North Workshop bench. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 4:5. **Existing file:** `min-p05-b.webp`.

```text
Same material honesty as the reference. Close photograph of a hand plane and timber offcut on the North Workshop bench, side daylight, 4:5 portrait, no text, no logos.

Produce one standalone image, not a layout or board. Preserve off-white plaster, graphite, dark timber, natural foliage; observed daylight. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### min-p06-a

**Subject:** Small Corner retail nook with a timber display shelf and unbranded ceramics. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 4:3. **Existing file:** `min-p06-a.webp`.

```text
Same plaster and timber palette as the reference. Photograph of Small Corner, a compact fictional retail nook with one timber display shelf, pale walls, overcast daylight, a few unbranded ceramic vessels, 4:3 landscape, no people, no price tags, no logos.

Produce one standalone image, not a layout or board. Preserve off-white plaster, graphite, dark timber, natural foliage; observed daylight. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### min-p06-b

**Subject:** Two unbranded ceramic bowls on a dark timber shelf in Small Corner. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 4:5. **Existing file:** `min-p06-b.webp`.

```text
Same light and materials as the reference. Close photograph of two unbranded ceramic bowls on a dark timber shelf in Small Corner, 4:5 portrait, no lettering, no people.

Produce one standalone image, not a layout or board. Preserve off-white plaster, graphite, dark timber, natural foliage; observed daylight. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### min-studio

**Subject:** West Room Studio worktable with hand tools and overcast window light. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 3:2. **Existing file:** `min-studio.webp`.

```text
Same West Room Studio daylight, plaster, and dark timber as the reference. Observed photograph of a studio worktable with a few hand tools arranged by use, pale wall, overcast window light, no legible plans, no brand marks, no screens, 3:2 landscape, no people.

Produce one standalone image, not a layout or board. Preserve off-white plaster, graphite, dark timber, natural foliage; observed daylight. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### min-profile

**Subject:** Fictional West Room Studio founder standing beside a timber workbench in an apron. **Use:** Author/founder/host identity and contextual profile. **Ratio:** 1:1. **Existing file:** `min-profile.webp`.

```text
Environmental portrait of a fictional adult founder of West Room Studio beside a timber workbench, relaxed posture, ordinary working clothes, tools arranged by use, soft window light matching the reference interior, respectful eye-level framing, muted natural color, 1:1 square, no fashion retouching, no logos, no embedded captions, no recognizable celebrity.

Produce one standalone image, not a layout or board. Preserve off-white plaster, graphite, dark timber, natural foliage; observed daylight. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

### Where this set earns its place

Use the new logo in header/footer, content images in real linked entries, the process image beside substantive process copy, a bounded background as a visual pause, and a distinct CTA scene at the close. Do not repeat the hero as every section background. Use a close detail beside an establishing view, and alternate large images with tighter occupied layouts. Keep one coherent material language throughout.

## Good Noise / neo-brutalism

**Visual world:** ink black, paper white, acid lime; hard flash and crisp cast shadows.

**Full-page composition:** Home: strong wordmark/navigation → compact poster hero → large image-and-title work panels → three tightly aligned engagement strips with one service object → process wall and method → lime CTA artwork. Project thumbnails must be large enough to reveal the work, not tiny icons next to oversized empty rows. Use border tracks and occupied panels to create rhythm.

**CTA copy to render in HTML:** “Make something people notice.” → **Start a brief**. Use the new CTA artwork as its companion; do not prompt an image of a clickable button.

### New brand and supporting assets: generate these first

#### neo-logo-symbol

**Use:** Header, favicon, project signature. **Ratio:** 1:1. **Filename stem:** `neo-logo-symbol`.

```text
Design one original flat symbol for Good Noise: a chunky black angular sound pulse constructed from three interlocking rectangular strokes, with one clean lime cutout. Bold outer silhouette and a recognizably open negative space. It must remain readable as black only at 24 pixels. No generic lightning bolt, stock megaphone clipart, thin waveform, 3D shading, lettering, logo grid, or mockup.

One standalone asset. Aspect ratio 1:1.
```

#### neo-logo-wordmark

**Use:** Header and oversized footer signature. **Ratio:** 4:1. **Filename stem:** `neo-logo-wordmark`.

```text
Create one original heavy condensed grotesk wordmark reading exactly "GOOD NOISE". Close spacing, sturdy straight terminals, deliberately decisive proportion, a distinctive open counter in one O. Black ink on a flat paper-white field, optional small acid-lime rectangular accent separate from the letters. One horizontal lockup only. No slogan, extra lettering, distress that damages the letterforms, logo-sheet variations, or product mockup.

One standalone asset. Aspect ratio 4:1.
```

#### neo-cta

**Use:** Full-width closing brief invitation. **Ratio:** 16:9. **Filename stem:** `neo-cta`.

```text
Hard-flash tabletop photograph of a dense sculptural stack of lime paper, a black ink roller, and one black folded carton pushed to the right third, with assertive cast shadows. The left 55 percent is flat saturated lime with very little texture, reserved for large real HTML black text. Poster-like tension and tactile printing materials, not a floating abstract blob. No words, logos, button shapes, gradient lighting, or grunge overlay.

One standalone asset. Aspect ratio 16:9.
```

**Mobile companion:** Save as `neo-cta-mobile`. Reuse the approved subject/materials, generate a 4:5 composition with the subject in the lower-right half and a quiet upper area; otherwise place HTML copy above the image. Do not squeeze the whole wide scene into the portrait frame.

#### neo-background-print

**Use:** Service-scope panel backdrop. **Ratio:** 1:1. **Filename stem:** `neo-background-print`.

```text
Even top-down scan of off-white uncoated print stock with sparse black ink flecks at the very edges and an extremely light ink impression across the surface. Keep the central 80 percent almost clean for body copy. Coherent print texture rather than dirty concrete. No letters, numerals, symbols, poster fragments, stains, shadow, border, or fold. Check edge continuity before using as a repeat.

One standalone asset. Aspect ratio 1:1.
```

#### neo-background-ink

**Use:** Method/closing supporting panel. **Ratio:** 3:2. **Filename stem:** `neo-background-ink`.

```text
An extreme close crop of black screen-print ink crossing acid-lime paper, one blunt diagonal edge and a short visibly uneven ink ridge, rich physical surface, hard raking side light. Graphic and dense, with a simple large-scale shape. No letters, numbers, obvious brush script, spray-paint graffiti, lens blur, or digital gradient. Use as a bounded image panel, not behind a form.

One standalone asset. Aspect ratio 3:2.
```

#### neo-process-wall

**Use:** Method and Studio content. **Ratio:** 4:3. **Filename stem:** `neo-process-wall`.

```text
A real small branding workshop wall holding six blank layouts in different deliberate proportions: two large sheets, three smaller proofs and one tall strip, black and lime shapes only. One worktable enters the bottom edge with an ink roller. Straight-on camera, direct flash, clear paper shadows, dense useful composition. No fake readable copy, logos, magazine-cover text, or people.

One standalone asset. Aspect ratio 4:3.
```

#### neo-service-object

**Use:** Engagement overview illustration. **Ratio:** 1:1. **Filename stem:** `neo-service-object`.

```text
A compact tangible tower of three print-production objects: a closed black specimen folder, lime paper block, and thick white card strip bending once under its own weight. Full object visible with close safe margin, hard flash from upper left, black contact shadow, clean paper-white background. No lettering, floating pieces, clay blobs, gold hardware, or website controls.

One standalone asset. Aspect ratio 1:1.
```

### Existing content series: keep or replace by slot

These filenames already exist. The prompts below restate the actual recorded subject for each slot so the series stays attached to real content. Keep any successful output; regenerate only where it looks repetitive, inaccurate, or poorly composed in its destination. Attach an approved same-site reference when matching a room, object family, or lighting setup. Existing provenance remains historical until a real replacement is approved.

#### neo-hero

**Subject:** Sculptural black megaphone with a lime accent on pale paper under hard flash. **Use:** Home leading view. **Ratio:** 4:3. **Existing file:** `neo-hero.webp`.

```text
Graphic studio photograph of a single sculptural megaphone-like object on a pale off-white paper backdrop, hard directional flash from upper left casting a crisp distinct shadow to lower right, dense dark ink painted metal with one vivid lime accent, strong silhouette, realistic paper grain, 4:3 landscape, no logo, no typography, no stickers, no text, no celebrity likeness, no glossy tech render.

Produce one standalone image, not a layout or board. Preserve ink black, paper white, acid lime; hard flash and crisp cast shadows. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### neo-p01-a

**Subject:** Black ceramic cups on a tray with a lime-dipped bowl for Common Ground. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 4:3. **Existing file:** `neo-p01-a.webp`.

```text
Match the reference studio language: hard directional flash from upper left, crisp cast shadow, pale off-white paper backdrop, dense dark ink, one lime accent. Graphic studio photograph of Common Ground cafe objects: two unbranded ceramic cups and a dark tray, strong silhouettes, 4:3 landscape, no typography, no logos, no stickers with lettering.

Produce one standalone image, not a layout or board. Preserve ink black, paper white, acid lime; hard flash and crisp cast shadows. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### neo-p01-b

**Subject:** Unbranded pale paper sleeves and a dark carton for Common Ground. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 3:2. **Existing file:** `neo-p01-b.webp`.

```text
Same hard flash, paper backdrop, ink and lime accent as the reference. Close application photograph of unbranded pale paper sleeves and a dark carton for Common Ground, offset graphic arrangement on a worktable, 3:2 landscape, no lettering, no brand marks.

Produce one standalone image, not a layout or board. Preserve ink black, paper white, acid lime; hard flash and crisp cast shadows. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### neo-p02-a

**Subject:** Sculptural ticket-stub stack and dark object for Loop House. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 4:3. **Existing file:** `neo-p02-a.webp`.

```text
Same hard light and off-white paper as the reference. Graphic studio photograph of a sculptural unbranded ticket-stub stack and a small dark object for Loop House arts venue, one lime accent, 4:3 landscape, no logos, no readable type.

Produce one standalone image, not a layout or board. Preserve ink black, paper white, acid lime; hard flash and crisp cast shadows. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### neo-p02-b

**Subject:** Blank dark ink cards and lime paper for Loop House. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 3:2. **Existing file:** `neo-p02-b.webp`.

```text
Same lighting as the reference. Overhead photograph of blank dark ink cards and lime paper for Loop House, tactile stock, crisp shadows, 3:2 landscape, no lettering, no website mockup.

Produce one standalone image, not a layout or board. Preserve ink black, paper white, acid lime; hard flash and crisp cast shadows. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### neo-p03-a

**Subject:** Folded dark workwear jacket with a lime zipper for Day Shift. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 4:3. **Existing file:** `neo-p03-a.webp`.

```text
Same hard flash and pale paper as the reference. Graphic studio photograph of a folded workwear jacket in dense dark cloth with one lime hardware accent for Day Shift, strong silhouette, 4:3 landscape, no logos, no text.

Produce one standalone image, not a layout or board. Preserve ink black, paper white, acid lime; hard flash and crisp cast shadows. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### neo-p03-b

**Subject:** Heavy cotton workwear fabric and a plain metal button for Day Shift. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 3:2. **Existing file:** `neo-p03-b.webp`.

```text
Same studio light as the reference. Close photograph of heavy cotton workwear fabric and a plain metal button without lettering for Day Shift, 3:2 landscape, no brand marks.

Produce one standalone image, not a layout or board. Preserve ink black, paper white, acid lime; hard flash and crisp cast shadows. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### neo-p04-a

**Subject:** Stacked unbranded paper lanterns for Off Hours. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 4:3. **Existing file:** `neo-p04-a.webp`.

```text
Same hard directional light as the reference megaphone photo. Graphic studio photograph of stacked unbranded paper lanterns or flat event tokens for Off Hours community event, lime and dark ink, pale paper ground, crisp shadow, 4:3 landscape, no typography.

Produce one standalone image, not a layout or board. Preserve ink black, paper white, acid lime; hard flash and crisp cast shadows. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### neo-p04-b

**Subject:** Blank wristbands and ink pads for Off Hours. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 3:2. **Existing file:** `neo-p04-b.webp`.

```text
Same flash and paper as the reference. Overhead photograph of blank wristbands and dark ink stamp pads without readable words for Off Hours, 3:2 landscape, no logos.

Produce one standalone image, not a layout or board. Preserve ink black, paper white, acid lime; hard flash and crisp cast shadows. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### neo-p05-a

**Subject:** Dark enamel pot and lime cloth for Kindred Table. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 4:3. **Existing file:** `neo-p05-a.webp`.

```text
Same hard flash and off-white paper as the reference. Graphic studio photograph of a dark enamel pot and one lime kitchen cloth for Kindred Table food collective, strong silhouette, 4:3 landscape, no logos, no text.

Produce one standalone image, not a layout or board. Preserve ink black, paper white, acid lime; hard flash and crisp cast shadows. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### neo-p05-b

**Subject:** Blank kraft wrappers and a dark bowl for Kindred Table. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 3:2. **Existing file:** `neo-p05-b.webp`.

```text
Same studio light as the reference. Overhead photograph of blank kraft wrappers and a dark bowl for Kindred Table, lime accent, crisp shadows, 3:2 landscape, no lettering.

Produce one standalone image, not a layout or board. Preserve ink black, paper white, acid lime; hard flash and crisp cast shadows. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### neo-p06-a

**Subject:** Stacked unbranded workbooks and a lime pencil for Bright Side. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 4:3. **Existing file:** `neo-p06-a.webp`.

```text
Same hard light and pale paper as the reference. Graphic studio photograph of stacked unbranded workbooks and a lime pencil for Bright Side learning club, strong silhouette, 4:3 landscape, no readable text on covers, no logos.

Produce one standalone image, not a layout or board. Preserve ink black, paper white, acid lime; hard flash and crisp cast shadows. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### neo-p06-b

**Subject:** Blank notebook paper edge and a lime pencil for Bright Side. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 3:2. **Existing file:** `neo-p06-b.webp`.

```text
Same lighting as the reference. Close photograph of blank notebook paper edge and a lime pencil for Bright Side, 3:2 landscape, no words, no numbers.

Produce one standalone image, not a layout or board. Preserve ink black, paper white, acid lime; hard flash and crisp cast shadows. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### neo-studio-a

**Subject:** Good Noise worktable with ink rollers, blank paper, and lime tape. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 4:3. **Existing file:** `neo-studio-a.webp`.

```text
Same hard directional studio flash and pale paper as the reference. Photograph of a Good Noise worktable with ink rollers, blank paper stacks, and one lime tape roll, crisp shadows, 4:3 landscape, no readable type, no logos, no screens.

Produce one standalone image, not a layout or board. Preserve ink black, paper white, acid lime; hard flash and crisp cast shadows. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### neo-studio-b

**Subject:** Close production materials: ink, blank paper, and a lime tool. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 4:5. **Existing file:** `neo-studio-b.webp`.

```text
Same hard light as the reference. Close photograph of production materials: dark ink can, blank paper edge, lime accent tool, 4:5 portrait, no lettering, no brand marks.

Produce one standalone image, not a layout or board. Preserve ink black, paper white, acid lime; hard flash and crisp cast shadows. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### neo-team

**Subject:** Two fictional collaborators working at a Good Noise table under hard studio light. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 3:2. **Existing file:** `neo-team.webp`.

```text
Photograph of two fictional adult collaborators at a real worktable under hard side studio light matching the reference, everyday clothes, pale paper and ink materials, candid working gestures, 3:2 landscape, no celebrity likeness, no logos, no readable posters.

Produce one standalone image, not a layout or board. Preserve ink black, paper white, acid lime; hard flash and crisp cast shadows. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

### Where this set earns its place

Use the new logo in header/footer, content images in real linked entries, the process image beside substantive process copy, a bounded background as a visual pause, and a distinct CTA scene at the close. Do not repeat the hero as every section background. Use a close detail beside an establishing view, and alternate large images with tighter occupied layouts. Keep one coherent material language throughout.

## Common Hours / editorial

**Visual world:** paper white, deep ink, muted plum; contextual available-light photography.

**Full-page composition:** Home: masthead → issue composition where the lead photograph and story enter immediately → two supporting stories with real thumbnails → a varied archive spread → contributor portraits and contextual image → membership still life. Remove the separate tall generic brand-intro block above the actual cover. Use more than one story scale; articles stay reading-width but the index should feel populated.

**CTA copy to render in HTML:** “Keep a little room for good stories.” → **Explore membership**. Use the new CTA artwork as its companion; do not prompt an image of a clickable button.

### New brand and supporting assets: generate these first

#### edt-logo-symbol

**Use:** Publication colophon and favicon. **Ratio:** 1:1. **Filename stem:** `edt-logo-symbol`.

```text
Design an original monochrome publication mark for Common Hours: two simple open page forms meeting around a small square of negative space, suggesting a shared table as well as an open journal. Flat dark ink on warm paper, a compact strong silhouette, editorial rather than corporate. No clock face, coffee cup, generic book clipart, tiny lines, initials, shadows, mockup, or extra text.

One standalone asset. Aspect ratio 1:1.
```

#### edt-logo-wordmark

**Use:** Masthead and membership footer. **Ratio:** 4:1. **Filename stem:** `edt-logo-wordmark`.

```text
Create one carefully spaced editorial masthead reading exactly "Common Hours" in a confident moderately high-contrast serif with sturdy hairlines and an unusual but readable capital H. The feeling is an independent cultural journal, intelligent and approachable. Dark ink on plain paper-white, horizontal wordmark only. No tagline, issue date, fake article text, decorative crest, excessive swashes, or page mockup.

One standalone asset. Aspect ratio 4:1.
```

#### edt-cta

**Use:** Membership invitation on home and membership page. **Ratio:** 16:9. **Filename stem:** `edt-cta`.

```text
Editorial still life of a small folded blank journal, a pencil and a single contextual photograph of a neighborhood doorway at the right side of a broad paper table. Muted plum cloth peeks from beneath the journal. Natural left window light, honest creases, quiet tactile surface; left 55 percent stays very light and calm for a real HTML membership headline. No readable journal text, masthead, coupon, embedded button, or product-brand claim.

One standalone asset. Aspect ratio 16:9.
```

**Mobile companion:** Save as `edt-cta-mobile`. Reuse the approved subject/materials, generate a 4:5 composition with the subject in the lower-right half and a quiet upper area; otherwise place HTML copy above the image. Do not squeeze the whole wide scene into the portrait frame.

#### edt-background-paper

**Use:** Reading/colophon background. **Ratio:** 1:1. **Filename stem:** `edt-background-paper`.

```text
Even high-resolution scan of lightly textured warm-white book paper with extremely fine natural fibers. Flat exposure, edge-to-edge, no aging stains, yellow sepia cast, wrinkles, newspaper fragments, letters, crop marks, objects, shadow, or vignette. It should disappear beneath article text. Request edge continuity and verify before repeating.

One standalone asset. Aspect ratio 1:1.
```

#### edt-background-collage

**Use:** Topic divider and About feature. **Ratio:** 3:2. **Filename stem:** `edt-background-collage`.

```text
A small editorial paper composition: a black-and-white fictional street-corner photograph, a muted-plum rectangle, a blank cream paper strip, and one piece of translucent tape. Pieces overlap with plausible edges and soft contact shadows, filling the right two-thirds of a paper-white field. Scanned overhead look, controlled asymmetry. No printed words, official stamps, badges, postage, UI, or gratuitous torn-paper confetti.

One standalone asset. Aspect ratio 3:2.
```

#### edt-about-table

**Use:** About the journal; contributor collaboration. **Ratio:** 4:3. **Filename stem:** `edt-about-table`.

```text
Three fictional adult editors seen around a modest shared worktable sorting photographs, handwritten-looking but unreadable notes, and blank page proofs. Frame the relationship between people and materials, with one person listening rather than everyone smiling at camera. Available window light, everyday clothing, human-scale documentary-inspired framing. No real publication logos, readable text, staged handshake, or glamour retouching.

One standalone asset. Aspect ratio 4:3.
```

#### edt-issue-object

**Use:** Current issue feature and membership benefit. **Ratio:** 4:5. **Filename stem:** `edt-issue-object`.

```text
Close oblique photograph of a thin, beautifully made unbranded independent journal standing partly open on a plain surface, visible printed image areas but no readable text. One full-bleed neighborhood photograph across the open spread, thick matte paper and a subtle plum spine. This is an editorial object, not a fake interface screenshot. Soft available light, no masthead, price, label, or sales badge.

One standalone asset. Aspect ratio 4:5.
```

### Existing content series: keep or replace by slot

These filenames already exist. The prompts below restate the actual recorded subject for each slot so the series stays attached to real content. Keep any successful output; regenerate only where it looks repetitive, inaccurate, or poorly composed in its destination. Attach an approved same-site reference when matching a room, object family, or lighting setup. Existing provenance remains historical until a real replacement is approved.

#### edt-st01

**Subject:** Three adults arranging mismatched chairs in a small community library. **Use:** Home leading view. **Ratio:** 3:2. **Existing file:** `edt-st01.webp`.

```text
Editorial photograph for a fictional story about a neighborhood reading group, three adults arranging mismatched chairs inside a small community library before opening, eye-level view, shelves and street-facing windows establish the setting, gentle late-afternoon available light, candid gestures and believable everyday clothing, one clear focal interaction, 3:2 landscape with room above the people, no legible book titles, no logo, no embedded caption. This is an illustration for fictional editorial content, not evidence of a real place or event.

Produce one standalone image, not a layout or board. Preserve paper white, deep ink, muted plum; contextual available-light photography. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### edt-st02

**Subject:** A wooden bench beside a river path with bicycle marks in the packed ground. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 3:2. **Existing file:** `edt-st02.webp`.

```text
Match the reference editorial photograph: available late-afternoon light, human-scale documentary framing, everyday clothing, gentle tonal variation. Fictional story photograph of a rebuilt wooden riverside bench beside a towpath, packed earth with bicycle tire marks, river just beyond, no people in frame or one distant walker only, 3:2 landscape, no logos, no readable signs, no inscription on the bench. Illustration for fictional content, not a real place.

Produce one standalone image, not a layout or board. Preserve paper white, deep ink, muted plum; contextual available-light photography. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### edt-st03

**Subject:** Three stacked windows on a narrow street facade with different curtains. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 3:2. **Existing file:** `edt-st03.webp`.

```text
Same available-light editorial language as the reference. Photograph of a narrow street facade with three stacked windows, each with different curtains, evening light on brick, 3:2 landscape, no logos, no readable street names or shop lettering. Fictional illustration of Cinder Lane, not a real address.

Produce one standalone image, not a layout or board. Preserve paper white, deep ink, muted plum; contextual available-light photography. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### edt-st04

**Subject:** Wooden type cases and a hand press in a small print workshop. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 3:2. **Existing file:** `edt-st04.webp`.

```text
Same gentle available light as the reference. Editorial photograph of a small print workshop with wooden type cases and a hand press, ink-stained worktable, everyday tools, 3:2 landscape, no logos, no readable type or posters. Fictional illustration, not a real print shop.

Produce one standalone image, not a layout or board. Preserve paper white, deep ink, muted plum; contextual available-light photography. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### edt-st05

**Subject:** People standing between hardware aisles in a shop after closing. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 3:2. **Existing file:** `edt-st05.webp`.

```text
Same documentary-inspired editorial light as the reference. Photograph of a hardware shop after closing, a few people standing between aisles of hinges and paint, singing or listening quietly, everyday clothes, 3:2 landscape, no logos, no readable product labels. Fictional choir rehearsal, not a real shop.

Produce one standalone image, not a layout or board. Preserve paper white, deep ink, muted plum; contextual available-light photography. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### edt-st06

**Subject:** A library service desk at night with a single lamp and empty chairs. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 3:2. **Existing file:** `edt-st06.webp`.

```text
Same available-light editorial style as the reference. Photograph of a civic library service desk at night, one lamp, empty chairs, hold shelf in the background, no people required, 3:2 landscape, no logos, no legible book titles or computer screens with text. Fictional night desk, not a municipal library.

Produce one standalone image, not a layout or board. Preserve paper white, deep ink, muted plum; contextual available-light photography. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### edt-st07

**Subject:** A large pot and stacked bowls at the edge of a market hall aisle. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 3:2. **Existing file:** `edt-st07.webp`.

```text
Same human-scale editorial framing as the reference. Photograph of a large soup pot and stacked enamel bowls at the edge of a market hall aisle, tape mark on the floor, available hall light, 3:2 landscape, no logos, no prices, no readable signs. Fictional Tuesday soup ritual, not a charity kitchen.

Produce one standalone image, not a layout or board. Preserve paper white, deep ink, muted plum; contextual available-light photography. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### edt-st08

**Subject:** A path at dusk with long shadows and a group of walkers ahead. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 3:2. **Existing file:** `edt-st08.webp`.

```text
Same available-light editorial language as the reference. Photograph of a riverside path at dusk with long shadows and a small group of walkers ahead, lock rail in the distance, 3:2 landscape, no logos, no readable signs. Fictional last-light walk, not a real event.

Produce one standalone image, not a layout or board. Preserve paper white, deep ink, muted plum; contextual available-light photography. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### edt-st09

**Subject:** A shallow dish of labelled keys on a worn shop counter. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 3:2. **Existing file:** `edt-st09.webp`.

```text
Same documentary-inspired light as the reference. Photograph of a shallow dish of labelled spare keys on a worn hardware-shop counter, late afternoon interior light, 3:2 landscape, labels must be blank or illegible marks, no readable names, no logos. Fictional ritual illustration, not a real key register.

Produce one standalone image, not a layout or board. Preserve paper white, deep ink, muted plum; contextual available-light photography. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### edt-detail01

**Subject:** A close view of a wooden shelf edge and a cloth-wrapped brick used as a doorstop. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 4:5. **Existing file:** `edt-detail01.webp`.

```text
Close editorial still life: a real red clay brick wrapped in worn cotton cloth used as a doorstop, sitting against a wooden shelf edge on a worn floor, soft side daylight, honest fabric folds and brick corners visible through the cloth, 4:5 portrait, no readable text, no logo, no decorative knotted fabric cube, no upholstery doorstop.

Produce one standalone image, not a layout or board. Preserve paper white, deep ink, muted plum; contextual available-light photography. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### edt-detail02

**Subject:** A shallow wooden case of metal letters beside a composing stick. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 4:3. **Existing file:** `edt-detail02.webp`.

```text
Close editorial still life of a shallow wooden type case of metal letters beside a composing stick on a print-shop table, available side light, 4:3 landscape, letters must not form readable words, no labels. Fictional compositor-story detail.

Produce one standalone image, not a layout or board. Preserve paper white, deep ink, muted plum; contextual available-light photography. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### edt-detail03

**Subject:** A metal ladle resting on a wooden crate beside stacked enamel bowls. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 4:5. **Existing file:** `edt-detail03.webp`.

```text
Close editorial still life of a metal ladle with a bent lip resting on a wooden crate beside stacked enamel bowls, available market-hall light, 4:5 portrait, no recipes or packaging text. Fictional soup-ritual detail.

Produce one standalone image, not a layout or board. Preserve paper white, deep ink, muted plum; contextual available-light photography. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### edt-author01

**Subject:** Fictional Common Hours writer taking notes at a library table. **Use:** Author/founder/host identity and contextual profile. **Ratio:** 1:1. **Existing file:** `edt-author01.webp`.

```text
Contextual portrait of a fictional Common Hours contributor writing notes at a library table, available light, everyday clothes, 1:1 square, no celebrity likeness, no logos, no embedded caption.

Produce one standalone image, not a layout or board. Preserve paper white, deep ink, muted plum; contextual available-light photography. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### edt-author02

**Subject:** Fictional Common Hours photographer standing in a doorway. **Use:** Author/founder/host identity and contextual profile. **Ratio:** 1:1. **Existing file:** `edt-author02.webp`.

```text
Contextual portrait of a fictional Common Hours photographer standing in a doorway with available late-afternoon light matching the reference, everyday clothes, camera at rest, 1:1 square, no celebrity likeness, no logos.

Produce one standalone image, not a layout or board. Preserve paper white, deep ink, muted plum; contextual available-light photography. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### edt-author03

**Subject:** Fictional Common Hours cook in a home kitchen. **Use:** Author/founder/host identity and contextual profile. **Ratio:** 1:1. **Existing file:** `edt-author03.webp`.

```text
Contextual portrait of a fictional Common Hours cook in a home kitchen, available window light, everyday clothes, 1:1 square, no celebrity likeness, no brand packaging, no logos.

Produce one standalone image, not a layout or board. Preserve paper white, deep ink, muted plum; contextual available-light photography. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

### Where this set earns its place

Use the new logo in header/footer, content images in real linked entries, the process image beside substantive process copy, a bounded background as a visual pause, and a distinct CTA scene at the close. Do not repeat the hero as every section background. Use a close detail beside an establishing view, and alternate large images with tighter occupied layouts. Keep one coherent material language throughout.

## Stillwater House / luxury

**Visual world:** lake slate, deep forest, pale stone, natural timber; controlled morning and evening light.

**Full-page composition:** Home: restrained mark/navigation → immersive house view with useful action → a concise welcome paired with arrival detail → large room photography with facts → dining and water/woodland experience sequence → evening inquiry composition. Change scene scale between exterior, room, threshold, and table. Do not fill the page with repetitions of the same lake image and paragraphs separated by enormous gaps.

**CTA copy to render in HTML:** “A few days, entirely your own.” → **Plan a stay**. Use the new CTA artwork as its companion; do not prompt an image of a clickable button.

### New brand and supporting assets: generate these first

#### lux-logo-symbol

**Use:** House mark and favicon. **Ratio:** 1:1. **Filename stem:** `lux-logo-symbol`.

```text
Design one original flat hospitality symbol for Stillwater House: a low simple roofline balanced above two horizontal water lines, with a small quiet interruption that makes the mark distinctive. Use one deep-forest ink on a pale stone field. Refined geometry with sufficiently thick strokes to work at 24 pixels. No ornate coat of arms, crown, stars, laurel, gold effects, compass, mockup, or text.

One standalone asset. Aspect ratio 1:1.
```

#### lux-logo-wordmark

**Use:** House header and closing signature. **Ratio:** 4:1. **Filename stem:** `lux-logo-wordmark`.

```text
Design one original horizontal wordmark reading exactly "Stillwater House" in a measured contemporary serif with gently flared terminals, moderate contrast and patient optical spacing. An intimate lakeside house rather than a grand hotel chain. Deep-forest ink on plain pale stone, one centered lockup only. No slogan, stars, establishment date, excessive tracking, gold foil, fake embossing, or logo presentation board.

One standalone asset. Aspect ratio 4:1.
```

#### lux-cta

**Use:** Closing stay inquiry and inquiry introduction. **Ratio:** 16:9. **Filename stem:** `lux-cta`.

```text
Photograph the same Stillwater House porch just before evening: warm light in one doorway, lake visible beyond the right-hand timber posts, one linen-covered chair in the far right third. Deep slate wall and shaded timber fill the left half as a low-detail field for pale real HTML text. Rich visible shadow detail and physically believable lighting. No people, signage, candle clutter, booking button, artificial mist, or luxury stock props.

One standalone asset. Aspect ratio 16:9.
```

**Mobile companion:** Save as `lux-cta-mobile`. Reuse the approved subject/materials, generate a 4:5 composition with the subject in the lower-right half and a quiet upper area; otherwise place HTML copy above the image. Do not squeeze the whole wide scene into the portrait frame.

#### lux-background-linen

**Use:** Room facts or inquiry supporting surface. **Ratio:** 1:1. **Filename stem:** `lux-background-linen`.

```text
Evenly lit macro scan of natural pale linen with small irregular fibers and very low contrast. Edge-to-edge material, no deep fold, seam, glare, stains, logos, room scene, or text. Keep the surface calm enough for readable dark body copy. Request seamless edges and verify tiling before deployment.

One standalone asset. Aspect ratio 1:1.
```

#### lux-background-water

**Use:** Experience interlude; bounded full-width band. **Ratio:** 3:2. **Filename stem:** `lux-background-water`.

```text
Tight photograph of small lake ripples reflecting a dark green tree line and a narrow strip of cool morning sky. No horizon, boat, building, people, fog, or text. Clear natural ripple detail with controlled specular highlights, mostly rich slate and green midtones. This is an atmospheric transition between content sections, not a second landscape hero.

One standalone asset. Aspect ratio 3:2.
```

#### lux-arrival-detail

**Use:** House/arrival feature. **Ratio:** 4:5. **Filename stem:** `lux-arrival-detail`.

```text
Close architectural photograph of Stillwater House entrance: a slightly weathered dark timber door, precise stone threshold, a single substantial brushed-metal handle and a narrow pool of warm interior light. Framing feels tactile and welcoming with believable door proportions. No readable room number, nameplate, emblem, gold glamour, flowers arranged for display, or people.

One standalone asset. Aspect ratio 4:5.
```

#### lux-dining-detail

**Use:** Seasonal-table experience detail. **Ratio:** 4:3. **Filename stem:** `lux-dining-detail`.

```text
Photograph a real simple evening setting for two on the house porch: handmade unbranded ceramics, naturally folded linen, seasonal vegetables on one shared plate, and two clear glasses with restrained highlights. The lake is visible but secondary. Eye-level intimate composition, correct utensils and reflections, warm practical light. No menu text, champagne, ornate place settings, candles everywhere, or hotel branding.

One standalone asset. Aspect ratio 4:3.
```

### Existing content series: keep or replace by slot

These filenames already exist. The prompts below restate the actual recorded subject for each slot so the series stays attached to real content. Keep any successful output; regenerate only where it looks repetitive, inaccurate, or poorly composed in its destination. Attach an approved same-site reference when matching a room, object family, or lighting setup. Existing provenance remains historical until a real replacement is approved.

#### lux-hero

**Subject:** Stillwater House, a timber-and-stone lakeside guest house at early morning. **Use:** Home leading view. **Ratio:** 16:9. **Existing file:** `lux-hero.webp`.

```text
Architectural photograph of Stillwater House beside a calm lake at early morning, one modest timber-and-stone lakeside guest house with a simple pitched roof and plausible window geometry, quiet natural light, restrained warm materials, real fabric weight implied at a covered porch, controlled highlights, 16:9 landscape with the house on the right third and still water plus sky giving calm space on the left, no people, no gold styling, no fog, no champagne, no text, no logo.

Produce one standalone image, not a layout or board. Preserve lake slate, deep forest, pale stone, natural timber; controlled morning and evening light. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### lux-room01-a

**Subject:** Lake Room bedroom facing still water through black-framed windows. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 4:3. **Existing file:** `lux-room01-a.webp`.

```text
Same Stillwater House as the reference: timber siding, stone chimney, black-framed windows, lakeside morning light. Interior of Lake Room, a bedroom facing the water through the same window geometry, linen bedding, restrained warm wood, quiet natural light, 4:3 landscape, no people, no gold, no candles, no text.

Produce one standalone image, not a layout or board. Preserve lake slate, deep forest, pale stone, natural timber; controlled morning and evening light. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### lux-room01-b

**Subject:** Lake Room linen and timber window sill with lake light. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 4:5. **Existing file:** `lux-room01-b.webp`.

```text
Same house materials as the reference. Close tactile detail of Lake Room linen and timber window sill with lake light, 4:5 portrait, no people, no text.

Produce one standalone image, not a layout or board. Preserve lake slate, deep forest, pale stone, natural timber; controlled morning and evening light. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### lux-room02-a

**Subject:** Garden Room opening toward planted shrubs. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 4:3. **Existing file:** `lux-room02-a.webp`.

```text
Same Stillwater House architecture as the reference. Interior of Garden Room opening toward shrubs and a small planted edge, timber and linen, morning light, 4:3 landscape, no people, no gold, no fog.

Produce one standalone image, not a layout or board. Preserve lake slate, deep forest, pale stone, natural timber; controlled morning and evening light. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### lux-room02-b

**Subject:** Garden Room wool throw and timber floorboards. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 4:5. **Existing file:** `lux-room02-b.webp`.

```text
Same materials as the reference. Close detail of Garden Room wool throw and timber floorboards, 4:5 portrait, no people, no branding.

Produce one standalone image, not a layout or board. Preserve lake slate, deep forest, pale stone, natural timber; controlled morning and evening light. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### lux-room03-a

**Subject:** Upper Suite under a pitched timber roof with morning light. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 4:3. **Existing file:** `lux-room03-a.webp`.

```text
Same Stillwater House as the reference: timber, stone chimney, black windows, lake morning. Interior of Upper Suite under the pitched roof with a dormer or high window, linen and warm wood, quiet light, 4:3 landscape, no people, no gold.

Produce one standalone image, not a layout or board. Preserve lake slate, deep forest, pale stone, natural timber; controlled morning and evening light. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### lux-room03-b

**Subject:** Upper Suite timber ceiling join and linen. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 4:5. **Existing file:** `lux-room03-b.webp`.

```text
Same materials as the reference. Close detail of Upper Suite timber ceiling join and linen, 4:5 portrait, no people, no text.

Produce one standalone image, not a layout or board. Preserve lake slate, deep forest, pale stone, natural timber; controlled morning and evening light. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### lux-exp01

**Subject:** Still morning lake and shoreline stones at Stillwater House. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 3:2. **Existing file:** `lux-exp01.webp`.

```text
Same Stillwater lakeside property as the reference at early morning. Morning on the water: a simple wooden dock or shoreline stones, still lake, no boats as luxury props, no people, 3:2 landscape, no fog, no champagne.

Produce one standalone image, not a layout or board. Preserve lake slate, deep forest, pale stone, natural timber; controlled morning and evening light. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### lux-exp02

**Subject:** Seasonal table on the Stillwater porch with linen and simple ceramics. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 3:2. **Existing file:** `lux-exp02.webp`.

```text
Same house materials as the reference. Seasonal table on the covered porch: linen, simple ceramics, no people, morning light, 3:2 landscape, no gold, no candles clutter.

Produce one standalone image, not a layout or board. Preserve lake slate, deep forest, pale stone, natural timber; controlled morning and evening light. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### lux-exp03

**Subject:** Woodland path behind Stillwater House in morning light. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 3:2. **Existing file:** `lux-exp03.webp`.

```text
Same season and pine woods as the reference lakeside house. Woodland walk just behind Stillwater House, quiet path, morning light, 3:2 landscape, no people, no dramatic fog.

Produce one standalone image, not a layout or board. Preserve lake slate, deep forest, pale stone, natural timber; controlled morning and evening light. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### lux-house

**Subject:** Stillwater House entrance and porch with timber columns and stone chimney. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 3:2. **Existing file:** `lux-house.webp`.

```text
Same Stillwater House as the reference. Entrance and porch with timber columns and stone chimney visible, material continuity with the exterior hero, morning light, 3:2 landscape, no people, no text.

Produce one standalone image, not a layout or board. Preserve lake slate, deep forest, pale stone, natural timber; controlled morning and evening light. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### lux-host

**Subject:** Fictional Stillwater House host in a timber porch or kitchen. **Use:** Author/founder/host identity and contextual profile. **Ratio:** 1:1. **Existing file:** `lux-host.webp`.

```text
Fictional host of Stillwater House in believable porch or kitchen context matching the reference timber house, everyday clothes, quiet morning light, 1:1 square, not used as a luxury prop, no celebrity likeness, no champagne, no gold.

Produce one standalone image, not a layout or board. Preserve lake slate, deep forest, pale stone, natural timber; controlled morning and evening light. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

### Where this set earns its place

Use the new logo in header/footer, content images in real linked entries, the process image beside substantive process copy, a bounded background as a visual pause, and a distinct CTA scene at the close. Do not repeat the hero as every section background. Use a close detail beside an establishing view, and alternate large images with tighter occupied layouts. Keep one coherent material language throughout.

## Pocket Keeps / retro

**Visual world:** warm paper, dark teal, pencil orange; overhead analog photography with soft contact shadows.

**Full-page composition:** Home: compact identity → tactile product composition → three visibly different collection covers → real interactive cropper preview → a concise workflow with process cutout → plan comparison → sleeve CTA. Keep the live studio dense enough to use: image work area and controls belong together, with no oversized decorative stage. Never substitute an AI picture of an app for its working UI.

**CTA copy to render in HTML:** “Keep the pieces that stay with you.” → **Open the studio**. Use the new CTA artwork as its companion; do not prompt an image of a clickable button.

### New brand and supporting assets: generate these first

#### ret-logo-symbol

**Use:** Product mark, favicon, collection signature. **Ratio:** 1:1. **Filename stem:** `ret-logo-symbol`.

```text
Design one original flat icon for Pocket Keeps: a small pocket outline holding two offset rectangular photographs, with one orange corner visible. Compact friendly geometry, modestly softened corners, dark teal dominant and one restrained orange accent. Must remain recognizable in one color at 24 pixels. No camera clipart, pixel grid, heart sticker, gradients, 3D shading, title bar, letters, or mockup.

One standalone asset. Aspect ratio 1:1.
```

#### ret-logo-wordmark

**Use:** Header and oversized closing wordmark. **Ratio:** 4:1. **Filename stem:** `ret-logo-wordmark`.

```text
Create one original wordmark reading exactly "Pocket Keeps" in a warm sturdy rounded serif with a slightly playful rhythm and clear counters, inspired by printed everyday objects rather than a computer-game font. Dark teal on a plain warm-paper field, deliberate spacing, one lockup only. No slogans, illegible ligatures, faux wear across letterforms, neon, fake application window, or presentation grid.

One standalone asset. Aspect ratio 4:1.
```

#### ret-cta

**Use:** Closing invitation to open the working studio. **Ratio:** 16:9. **Filename stem:** `ret-cta`.

```text
Overhead photograph of an open dark-teal paper sleeve with three differently cropped real photographic prints sliding out toward the right edge, a short orange pencil and one piece of translucent tape. Warm paper background, consistent soft light from upper left, believable paper thickness and short shadows. Left 55 percent clean for a real HTML headline and button. No text, labels, software controls, fake cursor, or random retro devices.

One standalone asset. Aspect ratio 16:9.
```

**Mobile companion:** Save as `ret-cta-mobile`. Reuse the approved subject/materials, generate a 4:5 composition with the subject in the lower-right half and a quiet upper area; otherwise place HTML copy above the image. Do not squeeze the whole wide scene into the portrait frame.

#### ret-background-paper

**Use:** Collection-index surrounding surface. **Ratio:** 1:1. **Filename stem:** `ret-background-paper`.

```text
High-resolution overhead scan of warm cream drawing paper with visible but restrained fiber and a few tiny natural speckles. Uniform illumination, edge-to-edge, no coffee stains, scratches, folds, scraps, photograph, borders, or text. Fine enough to act as a subdued material background, not a noisy filter on the whole screen. Verify seamlessness before tiling.

One standalone asset. Aspect ratio 1:1.
```

#### ret-background-mat

**Use:** Bounded How-it-works process backdrop. **Ratio:** 3:2. **Filename stem:** `ret-background-mat`.

```text
Close overhead photograph of a gently worn dark-teal cutting mat with a subtle regular geometric grid, one tiny scuff near the edge, and consistent soft light. No measurement numbers, rulers, tools, paper, letters, faux buttons, or dramatic vignette. Keep the grid subdued enough that actual HTML captions and screenshots can sit beside it, never bake them into the asset.

One standalone asset. Aspect ratio 3:2.
```

#### ret-process-cutout

**Use:** How-it-works supporting object, outside the live cropper. **Ratio:** 1:1. **Filename stem:** `ret-process-cutout`.

```text
An isolated tangible group of two blank instant-photo frames and a small orange pencil, photographed directly overhead, realistic off-white paper edges and very short soft shadows, objects arranged closely with no overlap blocking the frame openings. Transparent background if available; otherwise a uniform warm-paper background. No image inside the frames, logo, words, cursor, UI controls, or toy-like plastic.

One standalone asset. Aspect ratio 1:1.
```

#### ret-collection-sleeves

**Use:** Collections overview; small supporting image on pricing. **Ratio:** 4:3. **Filename stem:** `ret-collection-sleeves`.

```text
Overhead photograph of three paper sleeves in a tight staggered arrangement: one warm cream, one dark teal, one muted slate, each exposing a different small photographic print at the top. Cohesive analog light and materials, light handling wear, short believable contact shadows. No text, numbers, badges, stickers, app windows, or illegible labels. Leave enough edge margin to show each sleeve clearly.

One standalone asset. Aspect ratio 4:3.
```

### Existing content series: keep or replace by slot

These filenames already exist. The prompts below restate the actual recorded subject for each slot so the series stays attached to real content. Keep any successful output; regenerate only where it looks repetitive, inaccurate, or poorly composed in its destination. Attach an approved same-site reference when matching a room, object family, or lighting setup. Existing provenance remains historical until a real replacement is approved.

#### ret-hero

**Subject:** Overhead analog desk with a coastal print, two blank instant frames, a pencil, and a leaf. **Use:** Home leading view. **Ratio:** 3:2. **Existing file:** `ret-hero.webp`.

```text
Overhead photographic composition of handled analog prints, two blank instant-photo frames, a small orange pencil, a pressed leaf, and one photograph of a coastal path on warm off-white paper, realistic paper fibers and subtle edge wear, gentle directional tabletop light from upper left with consistent contact shadows, objects grouped toward the right with calm space on the left, 3:2 landscape, no words, no dates, no numbers, no brand marks, no website controls, no vaporwave or neon.

Produce one standalone image, not a layout or board. Preserve warm paper, dark teal, pencil orange; overhead analog photography with soft contact shadows. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### ret-c01-a

**Subject:** Desk Drawer collection: handled print of an open drawer with a key, envelope, and pencil. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 4:3. **Existing file:** `ret-c01-a.webp`.

```text
Same analog paper world as the reference: warm off-white paper, handled prints, gentle upper-left light, contact shadows. Desk Drawer collection: a photograph of a wooden desk drawer with a brass key, a blank envelope, and a small unbranded pencil, 4:3 landscape, no words, no dates, no logos.

Produce one standalone image, not a layout or board. Preserve warm paper, dark teal, pencil orange; overhead analog photography with soft contact shadows. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### ret-c01-b

**Subject:** Desk Drawer second print of a drawer interior with a ribbon and blank tag. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 3:2. **Existing file:** `ret-c01-b.webp`.

```text
Same paper and light as the reference. Desk Drawer second asset: a handled print of a closed wooden drawer interior with a ribbon and a blank tag, 3:2 landscape, no readable lettering.

Produce one standalone image, not a layout or board. Preserve warm paper, dark teal, pencil orange; overhead analog photography with soft contact shadows. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### ret-c02-a

**Subject:** Weekend Postcards coastal-path print with worn paper edges. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 4:3. **Existing file:** `ret-c02-a.webp`.

```text
Same analog print language as the reference. Weekend Postcards collection: a handled print of a coastal path similar in mood to the reference photo, worn paper edges, 4:3 landscape, no words, no dates.

Produce one standalone image, not a layout or board. Preserve warm paper, dark teal, pencil orange; overhead analog photography with soft contact shadows. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### ret-c02-b

**Subject:** Blank cream postcard back with a pressed leaf. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 3:2. **Existing file:** `ret-c02-b.webp`.

```text
Same paper world as the reference. Weekend Postcards second asset: a photograph of a blank cream postcard back with a pressed leaf, no stamps, no writing, 3:2 landscape.

Produce one standalone image, not a layout or board. Preserve warm paper, dark teal, pencil orange; overhead analog photography with soft contact shadows. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### ret-c03-a

**Subject:** Night Bus handled print of a rainy night window. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 4:3. **Existing file:** `ret-c03-a.webp`.

```text
Same analog print treatment as the reference. Night Bus collection: a handled photograph of a rainy night bus window with blurred street lights, no readable destination signs, 4:3 landscape, no neon vaporwave, no UI.

Produce one standalone image, not a layout or board. Preserve warm paper, dark teal, pencil orange; overhead analog photography with soft contact shadows. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### ret-c03-b

**Subject:** Night Bus print of empty night seats seen through glass. **Use:** Related project/story/room/collection detail and index; match the record using this asset ID. **Ratio:** 3:2. **Existing file:** `ret-c03-b.webp`.

```text
Same analog paper language as the reference. Night Bus second asset: a handled print of empty night seats seen through glass, no readable ads, 3:2 landscape, no UI, no neon vaporwave.

Produce one standalone image, not a layout or board. Preserve warm paper, dark teal, pencil orange; overhead analog photography with soft contact shadows. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### ret-texture01

**Subject:** Decorative material texture. **Use:** Decorative background; not over functional image pixels. **Ratio:** 1:1. **Existing file:** `ret-texture01.webp`.

```text
Subtle tileable paper grain matching the warm off-white paper in the reference, even lighting, no objects, no words, 1:1 square, decorative texture only.

Produce one standalone image, not a layout or board. Preserve warm paper, dark teal, pencil orange; overhead analog photography with soft contact shadows. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

#### ret-texture02

**Subject:** Decorative material texture. **Use:** Decorative background; not over functional image pixels. **Ratio:** 1:1. **Existing file:** `ret-texture02.webp`.

```text
Subtle tileable photograph sleeve material, matte cream paper fiber with faint edge wear matching the reference, even light, no logos, no text, 1:1 square, decorative texture only.

Produce one standalone image, not a layout or board. Preserve warm paper, dark teal, pencil orange; overhead analog photography with soft contact shadows. Match the approved same-site reference if attached, while keeping this shot distinct in scale and subject. No UI, watermarks, invented captions, or embedded CTA controls.
```

### Where this set earns its place

Use the new logo in header/footer, content images in real linked entries, the process image beside substantive process copy, a bounded background as a visual pause, and a distinct CTA scene at the close. Do not repeat the hero as every section background. Use a close detail beside an establishing view, and alternate large images with tighter occupied layouts. Keep one coherent material language throughout.

## Instructions for the agent integrating the approved outputs

- First map each approved file ID to its page slot. Preserve original assets until replacements have been reviewed; do not silently fill every missing slot with the hero.
- Keep each app’s palette, typography, spacing, container widths, and Tailwind theme local. Use JabKit semantic tokens for component styling; independent configuration is not permission to introduce arbitrary hardcoded library colors.
- Remove stale production commentary such as “local stub until the series lands” once that slot actually has approved imagery. Keep the concise fictional-demo disclosure in an appropriate utility/footer location.
- Logos are identity assets, not generic emoji. Clean the approved geometry for SVG and accessible naming; keep the name readable when an image fails. Do not invent a different brand symbol merely to fill a slot.
- CTA artwork supplies atmosphere; the actual button, heading, focus state, and action stay code. Check text contrast in the real crop. Put text on a solid panel if needed.
- Empty-looking pages need composition changes too: reduce unnecessary section padding, bring the first meaningful image and title together, enlarge work thumbnails, add supporting story images, use factual captions and useful summaries, and give the closing section a complete composition.
- Avoid making everything busier. Contrast a populated editorial/project section with an intentional quiet moment; never pad a six-line paragraph into a full viewport.
- Capture each complete page at desktop and mobile after integration. Review the entire scroll, not only the first viewport. Verify image failures, slow loading, both themes, reduced motion, and working links/forms.

## Completion checklist for each website

- [ ] One approved symbol and readable wordmark, with consistent light/dark treatment.
- [ ] One useful leading image plus complete project/story/room/collection imagery.
- [ ] A process or human-context image that explains the business beyond its hero.
- [ ] At least one restrained section background with an intentional placement.
- [ ] A distinct closing CTA composition, with real HTML copy and button.
- [ ] Useful mobile crops, verified image dimensions, and appropriate alt text.
- [ ] No repeated hero placeholders, broken brand lettering, empty image slots, or fake app screenshots.
- [ ] Complete-page review confirms a recognizable identity and enough content density throughout.
