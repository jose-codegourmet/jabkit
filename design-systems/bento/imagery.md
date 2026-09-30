# Bento Grid: image direction and AI prompts

## Intended feeling

Calm morning daylight in small, tidy service businesses: clinics, studios, salons, repair benches, and grooming rooms. Chalk-white walls and paper, deep ink-green-gray, evergreen and mint accents, and a touch of apricot. Objects are modular and square-edged so they echo the grid. Real places and people at work, never screens: any device in frame faces away or is dark.

The coded dashboard is the hero. Every table, chart, calendar, and board is real markup. Imagery supports the grid rather than competing with it: every photo sits inside a bento tile at card radius (`--ben-radius`), never full-bleed behind text. Portal pages are almost image-free; only the two empty-state spot illustrations appear there.

This guide does not ask a model to copy another site. The [reference note](references.md) records that no external URL was assigned.

## Build a prompt from decisions

Use this structure:

> [Subject and its tile role], [the studio's chalk walls, evergreen and mint accents, soft side daylight], [modular, orderly objects], [palette: chalk, ink, evergreen, mint, cool gray, a touch of apricot], [what must stay out of frame: screens, lettering, logos], one standalone image, [ratio].

HTML owns headlines, tile labels, counts, navigation, and controls. Request one image per `ben-*` id.

## Asset index

Delivered files live in `apps/bento/public/assets/design-systems/bento/` as `<id>.webp`, with prompts, dimensions, and alt text recorded in `provenance.json`. Empty alt marks a decorative image.

| ID | Ratio | Use | Alt |
| --- | --- | --- | --- |
| `ben-logo-symbol` | 1:1 | Approved mark; the header, footer, and portal draw it as an inline SVG; favicon source | “DAYMARK symbol: four rounded cells of unequal size, the top one filled” |
| `ben-logo-wordmark` | 21:9 | Header lockup and footer signature, only once approved | “DAYMARK” |
| `ben-hero` | 4:5 | Home hero photo tile (span 4 beside the coded dashboard) | “Front desk of a small studio before opening, with a paper diary and coffee.” |
| `ben-cta` | 16:9 | Shared CTA band image tile (span 5), desktop | “A business owner at a standing desk holding a coffee and looking toward the window” |
| `ben-cta-mobile` | 4:5 | CTA band below 768px; walkthrough intro tile | Same as `ben-cta` |
| `ben-material-tiles` | 3:2 | Lower half of the Home “Today” benefits tile | Decorative (`alt=""`) |
| `ben-background-grid` | 1:1 | Product page interlude band behind one chalk text panel | Decorative (`alt=""`) |
| `ben-process-before` | 4:5 | Home problem row; How it works step 1 | “A front desk with a paper wall calendar, sticky notes, a printed sheet and a face-down phone” |
| `ben-process-together` | 4:5 | How it works step 2 | “Two coworkers talking briefly at the front counter between appointments” |
| `ben-process-close` | 4:5 | How it works step 3 | “The front desk cleared at the end of the day, with the diary closed and keys set out” |
| `ben-team-shift` | 21:9 | Home “Who it's for” teaser banner (span 12) | “Four team members starting a shift in a bright studio” |
| `ben-who-desk` | 4:5 | Who it's for header tile (span 5) | “A business owner behind the counter greeting an arriving customer” |
| `ben-who-clinic` | 4:3 | Business type “Clinics and therapy practices” | “A small therapy treatment room with a mint-covered treatment table” |
| `ben-who-salon` | 4:3 | Business type “Salons and studios” | “A styling station in a small salon with an evergreen chair” |
| `ben-who-repair` | 4:3 | Business type “Repair and service shops” | “A repair bench with a pegboard of hand tools and a bicycle wheel on a stand” |
| `ben-who-grooming` | 4:3 | Business type “Pet care and grooming” | “A calm dog sitting on a grooming table while being brushed” |
| `ben-empty-day` | 1:1 | Calendar empty day (160px), 404 | “An empty day-planner page with a small sun rising over it” |
| `ben-empty-list` | 1:1 | Empty states for bookings, follow-ups, and the Empty card-state tile (160px) | “A short stack of blank cards with a check mark on the top card” |

Where an empty-state spot sits beside a sentence that already says the same thing, render it with `alt=""`.

Generation order: `ben-logo-symbol`, then `ben-logo-wordmark` referencing the symbol. Then `ben-hero`, which sets light, palette, and place. Then `ben-cta` and `ben-cta-mobile` from the hero. Then `ben-material-tiles` and `ben-background-grid`, using the symbol for the four-cell idea. Then the process series and `ben-team-shift`, then the business series, both from the hero. Last, `ben-empty-day` and `ben-empty-list` from the symbol and each other.

Model note for Jose: Nano Banana Pro (`nano_banana_pro`), 2k. Coding agents must not generate images or spend credits.

## Complete prompts

### ben-logo-symbol

References: none. Delivered at 512 × 512. After approval, redraw as SVG for the favicon. At 16/32px simplify to the filled cell plus the outer outline.

> Design one original flat logo symbol for DAYMARK, a daily-overview tool for small service businesses: a small square divided into four cells with rounded corners and even gutters, where the cells have deliberately unequal sizes (one wide cell across the top, two small cells and one tall cell below) so it reads as organised priority, not a generic dashboard icon. One cell is filled solid evergreen #386A57, the others are outlined in ink #26332F with a confident even stroke. Must remain legible at 24 pixels and work as a single-color stamp. Centered on a flat uniform chalk #F5F6F2 background for later cut-out. No letters, no chart bars, no pie slices, no gradients, shadows, 3D, mockups or presentation board, no watermarks.

One standalone asset. Aspect ratio 1:1.

### ben-logo-wordmark

References: `ben-logo-symbol`. Delivered at 1200 × 219. Verify every letter. If lettering fails, keep the symbol and set “DAYMARK” in HTML. The delivered file blurs slightly on “RK”, so HTML lettering is in use.

> Design one horizontal wordmark reading exactly "DAYMARK" (exact spelling: D-A-Y-M-A-R-K, all capitals, seven letters) in a clear, slightly wide geometric sans with generous even tracking and calm, practical proportions. Place the approved four-cell symbol from the reference at the left at cap height, with a modest gap. Ink #26332F lettering, the symbol's filled cell in evergreen #386A57. One centered lockup on a flat uniform chalk #F5F6F2 background for later cut-out, with ample margin on all sides. No tagline, no other words, no gradients, bevels, shadows, mockups or watermarks.

One standalone asset. Aspect ratio 21:9.

### ben-hero

References: none. Delivered at 1856 × 2304.

> Photograph the front desk of a small, tidy service studio a few minutes before opening: a pale chalk-white counter, a mint-green ceramic mug of coffee, a closed paper diary with a few colored tabs, a small stack of blank appointment cards and a key ring, soft early morning daylight from a side window. A low evergreen-painted wall and one potted plant behind, a hint of apricot in a folded towel on a shelf. Eye-level three-quarter view, calm and ordered, shallow but not dreamy depth of field. No people, no screens or laptops facing the camera, no lettering, logos or signage, no watermarks.

One standalone image. Aspect ratio 4:5.

### ben-cta

References: `ben-hero`. Delivered at 2000 × 1116.

> Match the reference studio's chalk walls, evergreen and mint accents and soft morning light. Photograph an owner of a small service business, seen from the side at a standing desk, calmly holding a paper mug and looking toward a window, a small closed notebook and a pen on the desk, the room orderly and quiet before the day starts. Subject occupies the right 45 percent; the left side is an uncluttered chalk wall in gentle daylight. Natural, unposed, warm but restrained color. Any device is closed or out of frame. No lettering, logos, UI, buttons or watermarks.

One standalone image. Aspect ratio 16:9.

### ben-cta-mobile

References: `ben-cta`, `ben-hero`. Delivered at 1856 × 2304.

> Recompose the approved reference scene for a portrait frame: the same owner, standing desk, paper mug and window light, subject in the lower 60 percent, a quiet chalk wall and window edge in the upper area. Keep the same clothing, palette and light. Do not squeeze the wide scene; reframe it. No lettering, logos, UI, buttons or watermarks.

One standalone image. Aspect ratio 4:5.

### ben-material-tiles

References: `ben-logo-symbol`. Delivered at 1400 × 939.

> Overhead photograph of an arrangement of matte ceramic and painted wooden tiles laid in a precise modular grid with even gaps on a chalk-white surface: tiles of deliberately different sizes (wide, square, tall) in chalk, mint #CDE6D7, cool gray #E3E8E4, one evergreen #386A57 and one apricot #F6C794, echoing the reference symbol's unequal cells. Soft directional daylight, short realistic contact shadows, visible edge thickness. Fill the frame edge to edge. No lettering, icons, numbers, hands or watermarks.

One standalone image. Aspect ratio 3:2.

### ben-background-grid

References: none. Delivered at 1200 × 1200.

> Flat, evenly lit scan of a very fine matte chalk-white paper #F5F6F2 with a faint printed square grid in cool gray #E3E8E4, the lines thin and quiet, spacing uniform. Extremely restrained texture, no folds, stains, vignettes, objects, hotspots, numbers or text. Edge to edge, no border. It must sit behind dark readable text without competing. Aim for a seamless repeat; seams will be checked manually.

One standalone image. Aspect ratio 1:1.

### ben-process-before

References: `ben-hero`. Delivered at 1400 × 1738.

> Match the reference studio's light and palette. Close three-quarter photograph of the same front desk earlier in the morning, slightly busier: an open paper wall calendar pinned to a board with blank colored stickers, a few blank sticky notes in mint and apricot, a printed blank spreadsheet sheet with no readable content, and a phone lying face down. Orderly-but-scattered, showing three separate sources of information. No readable writing, numbers, lettering, logos, screens or watermarks. No people.

One standalone image. Aspect ratio 4:5.

### ben-process-together

References: `ben-hero`. Delivered at 1400 × 1738.

> Match the reference studio's chalk walls, evergreen accents and daylight. Documentary photograph of two fictional adult coworkers in plain work clothes having a brief standing conversation at the front counter between appointments, one gesturing to a closed paper folder, both relaxed and focused. Mid-shot, natural expressions, real working posture, no staged high-fives or stock-photo smiles. Any tablet or screen is face down or out of frame. No lettering, logos, badges with names, or watermarks. No recognizable real people.

One standalone image. Aspect ratio 4:5.

### ben-process-close

References: `ben-hero`, `ben-process-before`. Delivered at 1400 × 1738.

> Match the reference front desk exactly, now at the end of the day: warm low late-afternoon light, the counter cleared, the paper diary closed and squared to the edge, the mug rinsed and upside down on a cloth, keys set out for tomorrow, a chair tucked in. Calm, finished, nothing hidden. Same framing family as the reference but slightly wider. No people, lettering, logos, screens or watermarks.

One standalone image. Aspect ratio 4:5.

### ben-team-shift

References: `ben-hero`. Delivered at 1400 × 594.

> Match the reference studio's palette and soft daylight. Wide documentary photograph of four fictional adult team members of a small service studio at the start of a shift: one hanging a coat, one tying an apron, one checking a paper list, one at the front desk, spread naturally across the frame in a bright chalk-walled room with evergreen and mint details. Diverse ages and appearances, ordinary work clothing, no uniforms with logos. Relaxed, realistic, not posed. Keep the center band clear enough to crop to 16:9. No lettering, name badges, logos, screens or watermarks. No recognizable real people.

One standalone image. Aspect ratio 21:9.

### ben-who-desk

References: `ben-hero`. Delivered at 1400 × 1738.

> Match the reference front desk and light. Photograph a fictional adult business owner behind the chalk counter greeting an arriving customer seen from behind at the edge of frame, friendly and professional, morning light. Owner is the clear subject, framed from the waist up. Paper diary open with no readable writing. No lettering, logos, screens facing camera, or watermarks. No recognizable real people.

One standalone image. Aspect ratio 4:5.

### ben-who-clinic

References: `ben-hero`. Delivered at 1400 × 1045.

> Match the reference palette and daylight. Photograph a small, clean physiotherapy or therapy treatment room: a treatment table with a mint cover, a folded chalk towel, a wooden stool, a window with soft light, one plant. Calm, modest, believable independent practice rather than a hospital. No people, no medical charts, lettering, logos, screens or watermarks.

One standalone image. Aspect ratio 4:3.

### ben-who-salon

References: `ben-hero`. Delivered at 1400 × 1045.

> Match the reference palette and daylight. Photograph one styling station in a small independent salon: a simple mirror reflecting only a pale wall, an evergreen chair, a neat tray of unbranded combs and clips, an apricot towel folded on the counter. Tidy and ready for the first client. No people, no product labels, lettering, logos, screens or watermarks.

One standalone image. Aspect ratio 4:3.

### ben-who-repair

References: `ben-hero`. Delivered at 1400 × 1045.

> Match the reference palette and daylight, slightly more utilitarian. Photograph a small bicycle or appliance repair bench: a pegboard of hand tools arranged by use, a bicycle wheel on a stand, a mint-colored parts tray with small blank tagged parts, an evergreen stool, clean chalk-painted walls. Organized and working, not grimy. No people, no readable tags, lettering, brand marks, screens or watermarks.

One standalone image. Aspect ratio 4:3.

### ben-who-grooming

References: `ben-hero`. Delivered at 1400 × 1045.

> Match the reference palette and daylight. Photograph a small pet grooming studio: a calm medium-sized dog sitting on a grooming table with a mint mat, a groomer's hands with a brush at the edge of frame, a chalk wall with a simple evergreen shelf holding folded towels. Gentle, friendly, clean. No lettering, product labels, logos, screens or watermarks.

One standalone image. Aspect ratio 4:3.

### ben-empty-day

References: `ben-logo-symbol`. Delivered at 1400 × 1400.

> Minimal flat spot illustration: a single open paper day-planner page drawn as a rounded rectangle with a few empty mint and cool-gray cells in a small unequal grid, echoing the reference symbol, and a small apricot sun just rising over its top edge. Ink #26332F thin even outlines, fills in mint #CDE6D7, cool gray #E3E8E4, apricot #F6C794, one evergreen #386A57 accent. Centered with generous margin on a flat uniform chalk #F5F6F2 background. Must read at 160 pixels. No text, numbers, faces, gradients, shadows or watermarks.

One standalone asset. Aspect ratio 1:1.

### ben-empty-list

References: `ben-logo-symbol`, `ben-empty-day`. Delivered at 1400 × 1400.

> Match the reference spot illustration's line weight, palette and flat style exactly. Minimal flat illustration of a short stack of three blank rounded cards, the top card showing a single evergreen check mark in a small square cell, conveying "nothing waiting". Ink #26332F outlines, mint and cool-gray fills, one apricot accent dot. Centered with generous margin on a flat uniform chalk #F5F6F2 background. Must read at 160 pixels. No text, numbers, faces, gradients, shadows or watermarks.

One standalone asset. Aspect ratio 1:1.

## Negative direction

Avoid screens facing the camera, invented UI, dashboards, charts, or readable writing in any photo. No lettering, logos, signage, name badges, product labels, or watermarks. No staged high-fives, stock-photo smiles, or recognizable real people. No hospital or corporate-office clichés, no grime, and no fog, lens flare, or dreamy bokeh. Do not add a second accent hue.

If the subject is wrong, change the subject before adding effects.

## Crop, theme, and series consistency

Every photo is cropped to its tile at `--ben-radius`, so keep the subject away from the corners. `ben-cta` keeps its subject in the right 45 percent and crops toward the right; `ben-cta-mobile` is a reframed portrait, not a squeezed crop. `ben-team-shift` keeps the center band clear enough to crop to 16:9. `ben-background-grid` sits behind one chalk text panel and must never compete with dark text.

Lock the front desk, chalk walls, evergreen and mint accents, and side daylight across the series. The process series (before, together, close) reuses one desk so the story reads as one business's day. The business series shows breadth without inventing customers, logos, or results.

Dark mode does not invert photographs. Logo and spot rasters are cutouts on chalk; check them on both chalk and the ink-green dark canvas for halos. The favicon is redrawn as SVG from the approved symbol, simplified at 16/32px to the filled cell plus the outer outline; it is not generated.

## Handoff to JabKit

Store files under `apps/bento/public/assets/design-systems/bento/` and refer to them by `ben-*` id through the app's asset module, never by hardcoded path. Follow [preview and asset documentation](../../docs/previews.md). Record provenance in the repository's manifest. Do not hotlink a generated file. Do not add third-party image URLs to component source.

The delivered `ben-logo-wordmark` blurs slightly on “RK”. Until a clean version is approved, the header and footer draw the four-cell mark as an inline SVG and set “DAYMARK” in HTML beside it, with the accessible name “DAYMARK home”.

Informative images need alt text. Decorative textures use empty alt. If media fails, the tile keeps its label, copy, and action, and the coded dashboard still explains the product.

## Art-direction acceptance

The image serves its tile, keeps its subject at mobile size and inside the rounded crop, and matches the hero's light and palette. Reject screens, readable text, broken geometry, uncanny hands, faces that look like real people, and crops that hide the subject. The page still explains DAYMARK if the image is missing.

## Current image-production handoff

Jose generates these in Higgsfield. The prompts above are the full set for the logo, CTA artwork, textures, and supporting scenes; all 18 assets have been delivered. The coding agent must not call an image generator. The logo prompts are the exception to “no lettering”. Functional text and controls stay HTML. See [standalone apps](../../docs/standalone-design-systems.md) for asset ownership.
