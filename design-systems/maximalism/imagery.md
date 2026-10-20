# Maximalism: image direction and AI prompts

## Intended feeling

FULL VOLUME's imagery is original hand-made paper collage: scissor-cut and torn paper shapes, halftone-dot printed fragments, die-cut stickers with white borders, hand-drawn marker arrows, stars, and squiggles, and stage symbols (speakers, mics, cables, string lights). The palette is ink `#171327`, hot pink `#F647A4`, acid lime `#D5F150`, cobalt `#3958E8`, tangerine `#FF8D4C`, and cream `#FFF6E4`. Flat overhead studio light, visible paper edges, and slight shadows.

Figures are stylised cut-paper illustrations of fictional people, never photographs or likenesses of real artists. The eight acts are invented for the demo; a real lineup requires client-supplied, artist-approved assets.

This guide is original art direction from [epic #547](https://github.com/jose-codegourmet/jabkit/issues/547). It does not ask a model to copy another site. The [reference note](references.md) records that no external URL was assigned.

## Full-page composition

Home runs loud to quiet in bands: dense hero collage beside a fixed cream facts card, then artist cards, four stage emblems on halftone, quiet table and ticket panels, a visual-arts collage beside prose, and the CTA collage.

Collage fills one side of a section or a bounded band. It never sits behind reading text, prices, tables, or forms. Stickers overlap images and edges, never copy or focus rings. Mobile keeps expressive art, restacked above or below copy rather than hidden.

## Build a prompt from decisions

Use this structure:

> [Collage subject and role], [cut-paper, halftone, and sticker materials], [palette limited to the six brand colors], [quiet area reserved for HTML], [fictional figures only], [ratio], no letters, words, numbers, logos, UI, or watermarks.

Every prompt asks for one standalone image, with no website layout, brand board, or contact sheet. Only the two logo prompts contain lettering. HTML owns headlines, act names, set times, prices, navigation, labels, and controls.

## Asset index

| ID | Ratio | Delivery role | Use |
| --- | --- | --- | --- |
| `max-logo-symbol` | 1:1 | content | Footer mark, favicon source, ticket stub mark, sticker motif |
| `max-logo-wordmark` | 21:9, cropped to 4:1 | content | Fixed readable wordmark: header, footer, tickets |
| `max-hero` | 16:9 | hero | Home hero, right side, behind layered artist cards |
| `max-hero-mobile` | 4:5 | hero | Home hero below headline, facts, and CTAs on mobile |
| `max-cta` | 16:9 | hero | Shared CTA band, desktop |
| `max-cta-mobile` | 4:5 | hero | Shared CTA band, mobile, stacked above copy |
| `max-background-halftone` | 1:1 | texture (decorative) | Home stages section and Schedule header band |
| `max-background-poster-wall` | 3:2 | texture (decorative) | Lineup header, Home lineup backdrop, Info header band |
| `max-process-collage` | 4:5 | content | Home “Art you can walk through” |
| `max-stage-01` | 3:2 | content | Loud Stage emblem (demo stage) |
| `max-stage-02` | 3:2 | content | Glow Tent emblem (demo stage) |
| `max-stage-03` | 3:2 | content | Low End Room emblem (demo stage) |
| `max-stage-04` | 3:2 | content | Open Air Deck emblem (demo stage) |
| `max-artist-01` | 4:5 | content | Tuesday Lanterns card, artist page, Home hero layered card |
| `max-artist-02` | 4:5 | content | Honey Ultra card and artist page |
| `max-artist-03` | 4:5 | content | Velvet Forklift card, artist page, Home hero layered card |
| `max-artist-04` | 4:5 | content | Glasshouse Choir card and artist page |
| `max-artist-05` | 4:5 | content | Marigold Static card, artist page, Home hero layered card |
| `max-artist-06` | 4:5 | content | Kilo Kaleido card and artist page |
| `max-artist-07` | 4:5 | content | Sofa Comet card and artist page |
| `max-artist-08` | 4:5 | content | Neon Tidepool card and artist page |
| `max-404` | 1:1 | content | Global 404 and artist not-found |

Backgrounds and textures are decorative with empty alt. Every other asset receives a short, plain-English alt from the typed asset data.

## Generation order

1. `max-logo-symbol` (References: none), then `max-logo-wordmark` (reference the approved symbol).
2. `max-background-halftone` (sets dot size and palette).
3. `max-hero` (reference symbol + halftone), then `max-hero-mobile` (reference `max-hero`).
4. `max-artist-01` (reference `max-hero`), then `max-artist-02` … `-08` (reference `max-artist-01` + `max-hero`).
5. `max-stage-01` … `-04` (reference `max-hero`; `-02` … `-04` also reference `max-stage-01`).
6. `max-background-poster-wall`, `max-process-collage` (reference `max-hero` + `max-artist-01`).
7. `max-cta`, then `max-cta-mobile` (reference `max-cta`), then `max-404` (reference `max-hero`).

Model note for Jose: Higgsfield Nano Banana Pro (`nano_banana_pro`), 2k, with the aspect ratio on each prompt's Higgsfield line. Implementing agents must not generate images or spend credits.

## Complete prompts

These prompts are copied verbatim from epic #547 and image ticket [#645](https://github.com/jose-codegourmet/jabkit/issues/645). Production uses them exactly.

### Brand identity (generate first)

#### max-logo-symbol

**Higgsfield:** Nano Banana Pro (`nano_banana_pro`) · Resolution: 2k · Aspect ratio: 1:1 · References: none

**Subject:** FULL VOLUME badge symbol. **Use:** Footer mark, favicon, ticket stub mark, sticker motif. **Ratio:** 1:1. **Filename stem:** `max-logo-symbol`.

```text
Design one original flat festival symbol for FULL VOLUME: a chunky round volume knob seen from the front, its pointer turned all the way to maximum, with three bold expanding sound arcs bursting out of one side like a cut-paper sticker. Solid ink #171327 knob and arcs, a single hot pink #F647A4 pointer, a thin acid lime #D5F150 die-cut sticker border around the whole silhouette. Bold simple geometry that reads at 24 pixels and as a one-colour stamp. Centered with generous margin on a flat uniform cream #FFF6E4 background for cutting out. No letters, numbers, or initials; no gradients, 3D bevels, drop shadows, mockups, or extra marks; no watermarks.

One standalone asset. Aspect ratio 1:1.
```

Favicon note: derive the favicon from the approved symbol in code/SVG — ink knob + pink pointer on a lime square, arcs reduced to two; check at 16, 24, and 32 px. Raster output is a concept, not the vector master.

#### max-logo-wordmark

**Higgsfield:** Nano Banana Pro (`nano_banana_pro`) · Resolution: 2k · Aspect ratio: 21:9 · References: max-logo-symbol

**Subject:** FULL VOLUME fixed wordmark. **Use:** Header, footer, tickets, email. **Ratio:** 21:9 generated, cropped to a tight 4:1 lockup. **Filename stem:** `max-logo-wordmark`.

```text
Design one compact horizontal wordmark reading exactly "FULL VOLUME" — exact spelling: F-U-L-L, space, V-O-L-U-M-E, all capitals, two words. Heavy condensed display letterforms with tight but even spacing, one custom detail: the O in VOLUME is the approved volume-knob symbol from the reference with its hot pink #F647A4 pointer at maximum. All other letters solid ink #171327, perfectly legible, stable baseline, no warping, no stretched or expanding letters — this is the fixed readable version. One centered lockup on a flat uniform cream #FFF6E4 background with wide empty margin for cropping and cutting out. No tagline, other words, stickers, halftone, gradients, bevels, shadows, mockups, or watermarks.

One standalone asset. Aspect ratio 21:9.
```

Verify every letter. If lettering fails, keep the approved symbol and set "FULL VOLUME" in the display font in code. The expanding campaign version of the wordmark is done in code with type and CSS transforms, not generated.

### Page imagery

#### max-hero

**Higgsfield:** Nano Banana Pro (`nano_banana_pro`) · Resolution: 2k · Aspect ratio: 16:9 · References: max-logo-symbol, max-background-halftone

**Subject:** City-turned-up campaign collage. **Use:** Home hero, right side, behind layered artist cards. **Ratio:** 16:9. **Filename stem:** `max-hero`.

```text
Original maximalist paper collage of a city being turned up: cut-paper rooftops and apartment blocks in cobalt #3958E8 and ink #171327, a giant tangerine #FF8D4C speaker stack rising between buildings, torn halftone-dot crowds of stylised cut-paper fictional figures with raised arms, hot pink #F647A4 and acid lime #D5F150 sound waves spilling over rooftops, string lights, stars, hand-drawn marker arrows and squiggles, die-cut stickers with white borders including the volume-knob motif from the reference. Conflicting scales and unexpected crops, dense in the right 60 percent, calmer cream #FFF6E4 paper in the left 40 percent for an HTML facts card. Flat overhead light, real paper texture, visible cut edges and small shadows. Figures are generic illustrated silhouettes, not real people or real artists. No letters, words, numbers, logos, posters with text, UI, buttons, or watermarks.

One standalone asset. Aspect ratio 16:9.
```

#### max-hero-mobile

**Higgsfield:** Nano Banana Pro (`nano_banana_pro`) · Resolution: 2k · Aspect ratio: 4:5 · References: max-hero

**Subject:** Portrait recomposition of the hero collage. **Use:** Home hero below headline, facts, and CTAs on mobile. **Ratio:** 4:5. **Filename stem:** `max-hero-mobile`.

```text
Recompose the reference collage for a tall mobile frame: the tangerine speaker stack and cut-paper rooftops fill the lower two thirds, halftone crowd figures with raised arms in front, pink and lime sound waves and stickers rising into the upper third, which stays lighter cream #FFF6E4 paper with only a few floating stars. Same palette, paper textures, halftone dot size, and hand-drawn marker marks as the reference; do not simply squeeze the wide scene. Figures stay stylised cut-paper fictional silhouettes. No letters, words, numbers, logos, UI, or watermarks.

One standalone asset. Aspect ratio 4:5.
```

#### max-cta

**Higgsfield:** Nano Banana Pro (`nano_banana_pro`) · Resolution: 2k · Aspect ratio: 16:9 · References: max-hero

**Subject:** Hands-up crowd collage with a blank ticket shape. **Use:** Shared CTA band ("More sound. More color. More together."). **Ratio:** 16:9. **Filename stem:** `max-cta`.

```text
Original paper collage of a joyful crowd seen from behind at the front of a stage: layered cut-paper silhouettes of fictional people of many body types and a wheelchair user on a raised viewing platform, arms up, in cobalt, hot pink, tangerine, and ink, overlapping halftone dots, confetti cut from acid lime paper, one oversized blank cream paper ticket shape with a perforated edge tilted in the crowd. All activity sits in the right 55 percent; the left 45 percent is a calm flat ink #171327 paper field for an HTML headline and button. Same textures and palette as the reference. No letters, numbers, prices, barcodes, logos, buttons, or watermarks.

One standalone asset. Aspect ratio 16:9.
```

#### max-cta-mobile

**Higgsfield:** Nano Banana Pro (`nano_banana_pro`) · Resolution: 2k · Aspect ratio: 4:5 · References: max-cta

**Subject:** Portrait companion of the CTA crowd. **Use:** Shared CTA band on mobile, image stacked above copy. **Ratio:** 4:5. **Filename stem:** `max-cta-mobile`.

```text
Recompose the reference crowd collage for a portrait frame: raised arms, the raised viewing platform with a wheelchair user, and the blank perforated ticket shape gathered in the lower 60 percent; the upper 40 percent is flat ink #171327 paper with a few lime confetti pieces near the edges only. Same palette, halftone, and paper edges as the reference; recompose, do not crop the wide scene. No letters, numbers, prices, logos, buttons, or watermarks.

One standalone asset. Aspect ratio 4:5.
```

#### max-background-halftone

**Higgsfield:** Nano Banana Pro (`nano_banana_pro`) · Resolution: 2k · Aspect ratio: 1:1 · References: none

**Subject:** Halftone risograph texture tile. **Use:** Stages section and schedule header texture. **Ratio:** 1:1. **Filename stem:** `max-background-halftone`.

```text
Flat edge-to-edge scan of a risograph-printed halftone texture: medium cobalt #3958E8 dots fading in irregular soft waves across cream #FFF6E4 paper, with slight ink misregistration and paper grain. Low contrast and evenly lit so ink-coloured HTML text on an overlay card stays readable nearby. No focal subject, no shapes, no borders, vignettes, folds, stains, letters, or watermarks. Request a seamless repeat and check the tiled seams manually before use.

One standalone asset. Aspect ratio 1:1.
```

#### max-background-poster-wall

**Higgsfield:** Nano Banana Pro (`nano_banana_pro`) · Resolution: 2k · Aspect ratio: 3:2 · References: max-hero, max-artist-01

**Subject:** Wheat-pasted wall of wordless posters. **Use:** Lineup header, Home lineup backdrop, Info header band. **Ratio:** 3:2. **Filename stem:** `max-background-poster-wall`.

```text
Photographic close view of a brick wall densely wheat-pasted with overlapping original collage posters in the FULL VOLUME palette — hot pink, acid lime, cobalt, tangerine, ink, cream — showing only abstract shapes, halftone figures, stars, speakers, and arrows, torn corners and layered edges, a few die-cut stickers. The posters carry no words at all. Even soft daylight, frame filled edge to edge, no single focal point, so an HTML ink panel can sit on top. No letters, numbers, band names, dates, logos, real posters, people, or watermarks.

One standalone asset. Aspect ratio 3:2.
```

#### max-process-collage

**Higgsfield:** Nano Banana Pro (`nano_banana_pro`) · Resolution: 2k · Aspect ratio: 4:5 · References: max-hero, max-artist-01

**Subject:** Collage-making table between the stages. **Use:** Home "Art you can walk through". **Ratio:** 4:5. **Filename stem:** `max-process-collage`.

```text
Overhead photograph of a busy collage worktable at an arts festival: stacks of cut paper in hot pink, acid lime, cobalt, tangerine, and cream; halftone-printed sheets; scissors, a craft knife on a cutting mat, glue stick, paste brush, a sheet of blank die-cut stickers, and a half-finished wordless collage of a speaker stack matching the reference style. Two anonymous hands at the edge placing a cut-paper star, no faces. Bright even daylight, tactile paper edges and scraps. No letters, words, numbers, logos, brand marks, or watermarks.

One standalone asset. Aspect ratio 4:5.
```

#### max-stage-01

**Higgsfield:** Nano Banana Pro (`nano_banana_pro`) · Resolution: 2k · Aspect ratio: 3:2 · References: max-hero

**Subject:** Loud Stage emblem (demo stage). **Use:** Home stages card, Artist stage strip, Schedule links. **Ratio:** 3:2. **Filename stem:** `max-stage-01`.

```text
Original paper collage emblem for a main festival stage: a huge cut-paper stage frame in ink #171327 with twin tangerine #FF8D4C speaker towers, hot pink spotlight beams fanning upward, a sea of small halftone cut-paper fictional crowd silhouettes at the bottom, lime stars and hand-drawn arrows. Subject centered with margin so it survives 3:2 and 4:3 crops; cream #FFF6E4 paper background. Same textures as the reference. No letters, numbers, signs, logos, or watermarks.

One standalone asset. Aspect ratio 3:2.
```

#### max-stage-02

**Higgsfield:** Nano Banana Pro (`nano_banana_pro`) · Resolution: 2k · Aspect ratio: 3:2 · References: max-hero, max-stage-01

**Subject:** Glow Tent emblem (demo stage). **Use:** Home stages card, Artist stage strip. **Ratio:** 3:2. **Filename stem:** `max-stage-02`.

```text
Original paper collage emblem matching the reference stage emblem's scale and framing: a peaked circus-style tent cut from cobalt #3958E8 and cream striped paper, looping strings of acid lime and hot pink paper light bulbs, a glowing synth keyboard shape inside the entrance, halftone dusk sky in ink, a few die-cut star stickers. Centered with crop margin on cream #FFF6E4 paper. No letters, numbers, signs, logos, or watermarks.

One standalone asset. Aspect ratio 3:2.
```

#### max-stage-03

**Higgsfield:** Nano Banana Pro (`nano_banana_pro`) · Resolution: 2k · Aspect ratio: 3:2 · References: max-hero, max-stage-01

**Subject:** Low End Room emblem (demo stage). **Use:** Home stages card, Artist stage strip. **Ratio:** 3:2. **Filename stem:** `max-stage-03`.

```text
Original paper collage emblem matching the reference stage emblem's scale and framing: a low-ceilinged brick room cut from ink #171327 paper, one enormous tangerine subwoofer cone at the centre with concentric hot pink and acid lime vibration rings rippling outward, a bass guitar silhouette leaning at the side, halftone smoke, a small pair of cut-paper earplugs as a sticker. Centered with crop margin on cream #FFF6E4 paper. No letters, numbers, signs, logos, or watermarks.

One standalone asset. Aspect ratio 3:2.
```

#### max-stage-04

**Higgsfield:** Nano Banana Pro (`nano_banana_pro`) · Resolution: 2k · Aspect ratio: 3:2 · References: max-hero, max-stage-01

**Subject:** Open Air Deck emblem (demo stage). **Use:** Home stages card, Artist stage strip. **Ratio:** 3:2. **Filename stem:** `max-stage-04`.

```text
Original paper collage emblem matching the reference stage emblem's scale and framing: a wooden deck stage cut from tangerine and cream paper under a huge acid lime #D5F150 paper sun with hand-drawn rays, cobalt sky with cut-paper clouds, a single acoustic guitar and microphone stand on the deck, halftone grass and small fictional listener silhouettes sitting on blankets. Centered with crop margin on cream #FFF6E4 paper. No letters, numbers, signs, logos, or watermarks.

One standalone asset. Aspect ratio 3:2.
```

#### max-artist-01

**Higgsfield:** Nano Banana Pro (`nano_banana_pro`) · Resolution: 2k · Aspect ratio: 4:5 · References: max-hero

**Subject:** Tuesday Lanterns (fictional demo act) — brass-heavy dance pop. **Use:** Lineup card, Artist page, Home hero layered card. **Ratio:** 4:5. **Filename stem:** `max-artist-01`.

```text
Original cut-paper collage portrait card for a fictional brass dance-pop band: a tight cluster of stylised illustrated musicians built from flat paper shapes, faces as simple geometric cutouts with no realistic features, several gleaming trumpets and a trombone cut from tangerine #FF8D4C and cream paper, paper lanterns in hot pink #F647A4 hanging above, cobalt #3958E8 background with halftone dots, lime marker squiggles for sound. Subject centered with 10 percent margin for card crops. Same paper textures and palette as the reference. Not a likeness of any real person or real band. No letters, words, numbers, band names, logos, or watermarks.

One standalone asset. Aspect ratio 4:5.
```

#### max-artist-02

**Higgsfield:** Nano Banana Pro (`nano_banana_pro`) · Resolution: 2k · Aspect ratio: 4:5 · References: max-artist-01, max-hero

**Subject:** Honey Ultra (fictional demo act) — synth soul. **Use:** Lineup card, Artist page. **Ratio:** 4:5. **Filename stem:** `max-artist-02`.

```text
Original cut-paper collage portrait card in the same card style, scale, and margins as the reference: one stylised illustrated singer made of flat paper shapes, face a simple geometric cutout, holding a vintage microphone, surrounded by a halo of tangerine and honey-gold honeycomb cutouts and a cobalt synth keyboard sweeping across the bottom, ink #171327 background with hot pink halftone glow. Not a likeness of any real person or artist. No letters, words, numbers, names, logos, or watermarks.

One standalone asset. Aspect ratio 4:5.
```

#### max-artist-03

**Higgsfield:** Nano Banana Pro (`nano_banana_pro`) · Resolution: 2k · Aspect ratio: 4:5 · References: max-artist-01, max-hero

**Subject:** Velvet Forklift (fictional demo act) — bass-driven garage rock trio. **Use:** Lineup card, Artist page, Home hero layered card. **Ratio:** 4:5. **Filename stem:** `max-artist-03`.

```text
Original cut-paper collage portrait card in the same card style, scale, and margins as the reference: three stylised illustrated musicians from flat paper shapes, faces as simple geometric cutouts, two holding bass guitars, one behind a drum kit patched with strips of tape, all riding on a toy-like cut-paper forklift in acid lime #D5F150, hot pink velvet-textured paper curtain behind, torn halftone edges, hand-drawn marker lightning. Not a likeness of any real person or band. No letters, words, numbers, names, logos, or watermarks.

One standalone asset. Aspect ratio 4:5.
```

#### max-artist-04

**Higgsfield:** Nano Banana Pro (`nano_banana_pro`) · Resolution: 2k · Aspect ratio: 4:5 · References: max-artist-01, max-hero

**Subject:** Glasshouse Choir (fictional demo act) — choral folk. **Use:** Lineup card, Artist page. **Ratio:** 4:5. **Filename stem:** `max-artist-04`.

```text
Original cut-paper collage portrait card in the same card style, scale, and margins as the reference: rows of small stylised illustrated singers with round open-mouth cutouts standing inside a greenhouse built from cobalt paper frames and pale translucent-looking paper panes, one acoustic guitar in the front row, cut-paper leaves and ferns in acid lime, a tangerine setting sun behind the glass, cream halftone sky. Not a likeness of any real person or choir. No letters, words, numbers, names, logos, or watermarks.

One standalone asset. Aspect ratio 4:5.
```

#### max-artist-05

**Higgsfield:** Nano Banana Pro (`nano_banana_pro`) · Resolution: 2k · Aspect ratio: 4:5 · References: max-artist-01, max-hero

**Subject:** Marigold Static (fictional demo act) — noise pop. **Use:** Lineup card, Artist page, Home hero layered card. **Ratio:** 4:5. **Filename stem:** `max-artist-05`.

```text
Original cut-paper collage portrait card in the same card style, scale, and margins as the reference: one stylised illustrated guitarist from flat paper shapes, face a simple geometric cutout, with a crown of oversized tangerine marigold flowers, guitar cable coiling into zigzag hand-drawn static lines, a background of torn TV-static halftone in ink and cream with hot pink and lime scan-line strips. Not a likeness of any real person or artist. No letters, words, numbers, names, logos, or watermarks.

One standalone asset. Aspect ratio 4:5.
```

#### max-artist-06

**Higgsfield:** Nano Banana Pro (`nano_banana_pro`) · Resolution: 2k · Aspect ratio: 4:5 · References: max-artist-01, max-hero

**Subject:** Kilo Kaleido (fictional demo act) — club percussion. **Use:** Lineup card, Artist page. **Ratio:** 4:5. **Filename stem:** `max-artist-06`.

```text
Original cut-paper collage portrait card in the same card style, scale, and margins as the reference: one stylised illustrated percussionist from flat paper shapes, face a simple geometric cutout, surrounded by a kaleidoscope ring of mirrored drums, a steel pan, and a boxy drum machine with blank pads, arranged in a radial symmetric pattern in hot pink, cobalt, tangerine, and acid lime on an ink #171327 background, fine halftone in the centre. Not a likeness of any real person or artist. No letters, words, numbers, names, logos, or watermarks.

One standalone asset. Aspect ratio 4:5.
```

#### max-artist-07

**Higgsfield:** Nano Banana Pro (`nano_banana_pro`) · Resolution: 2k · Aspect ratio: 4:5 · References: max-artist-01, max-hero

**Subject:** Sofa Comet (fictional demo act) — bedroom psych. **Use:** Lineup card, Artist page. **Ratio:** 4:5. **Filename stem:** `max-artist-07`.

```text
Original cut-paper collage portrait card in the same card style, scale, and margins as the reference: two stylised illustrated musicians from flat paper shapes, faces as simple geometric cutouts, lounging on a hot pink paper sofa that flies through a cobalt night sky trailing a tangerine and lime comet tail, a small keyboard and guitar on the cushions, hazy halftone stars, hand-drawn marker swirls. Not a likeness of any real person or band. No letters, words, numbers, names, logos, or watermarks.

One standalone asset. Aspect ratio 4:5.
```

#### max-artist-08

**Higgsfield:** Nano Banana Pro (`nano_banana_pro`) · Resolution: 2k · Aspect ratio: 4:5 · References: max-artist-01, max-hero

**Subject:** Neon Tidepool (fictional demo act) — ambient dub. **Use:** Lineup card, Artist page. **Ratio:** 4:5. **Filename stem:** `max-artist-08`.

```text
Original cut-paper collage portrait card in the same card style, scale, and margins as the reference: one stylised illustrated figure from flat paper shapes, face a simple geometric cutout, wearing big headphones and seated at the edge of a rock pool, cut-paper starfish, anemones, and waves in acid lime and hot pink glowing against deep ink #171327 water, cobalt echo rings spreading outward, slow halftone ripples. Calm, dreamy, low-energy composition. Not a likeness of any real person or artist. No letters, words, numbers, names, logos, or watermarks.

One standalone asset. Aspect ratio 4:5.
```

#### max-404

**Higgsfield:** Nano Banana Pro (`nano_banana_pro`) · Resolution: 2k · Aspect ratio: 1:1 · References: max-hero

**Subject:** Unplugged speaker on an empty stage. **Use:** Global 404 and artist not-found. **Ratio:** 1:1. **Filename stem:** `max-404`.

```text
Original paper collage of a single tangerine #FF8D4C speaker cabinet on an empty cut-paper stage, its ink cable unplugged and curling across the floor in a hand-drawn loop, a lone acid lime spotlight circle beside it, a few hot pink stars drifting off the edge, cream #FFF6E4 paper background with light cobalt halftone. Playful and quiet, lots of breathing room. Same paper textures as the reference. No letters, numbers, "404", logos, UI, or watermarks.

One standalone asset. Aspect ratio 1:1.
```

## Negative direction

No letters, words, numbers, band names, dates, prices, barcodes, logos, UI, buttons, or watermarks outside the two logo prompts. No photographs or likenesses of real people, real artists, real bands, or real posters. No gradients, bevels, or mockups on the logo assets. Reject results with stray text, misspelled lettering, or crops that put collage behind where HTML copy must sit.

## Crop, theme, and series consistency

The halftone tile sets the dot size and palette for the series; the hero is the master scene for every later reference. Mobile companions (`max-hero-mobile`, `max-cta-mobile`) are recompositions, not squeezed wide frames. Artist cards share the same card style, scale, and 10 percent margin so they align in a grid. Stage emblems share one scale and framing and keep crop margin for 3:2 and 4:3.

`max-hero` keeps its left 40 percent calm cream paper for the HTML facts card; `max-cta` keeps its left 45 percent flat ink paper for the headline and button, and `max-cta-mobile` keeps its upper 40 percent flat ink. Even so, CTA copy sits on a solid ink or cream panel, never directly on the collage. Do not invert collage for dark mode; review each image on cream and ink surfaces. Check logo cutouts for halos on both.

## Handoff to JabKit

Keep full-quality originals under `tmp/higgsfield-originals/maximalism/`, then deliver optimized WebP files under `apps/maximalism/public/assets/design-systems/maximalism/`. Hero and CTA assets stay at or below 300 KB, content assets at or below 180 KB, and textures at or below 60 KB. Make the logo backgrounds transparent and trim to the mark.

Record the real job ID (or `null`), generation date, prompt, negative direction, dimensions, bytes, aspect ratio, crop, role, alt text, and rights in `provenance.json`. Never invent missing provenance. Components load images by asset ID through the app's `sampleImage(id, alt)` helper, never hardcoded paths or third-party URLs.

The favicon is derived from the approved symbol in code or SVG: ink knob and pink pointer on a lime square, arcs reduced to two, checked at 16, 24, and 32 px. If the wordmark lettering fails after the allowed attempts, keep the approved symbol and set “FULL VOLUME” in Anton in code. The expanding campaign wordmark is always typographic code, not an image.

## Where this set earns its place

The symbol and fixed wordmark carry identity in header, footer, favicon, and ticket summary. The hero pair and the eight artist cards do the loud work, and artist art appears only where the act's name, day, stage, and time are also in HTML. Four stage emblems give the schedule and stages a visual key without color-only meaning. The halftone tile and poster wall are bounded bands behind headers, never behind tables, prices, or forms. The process collage backs the visual-arts claim with making, not invented installations. The CTA pair closes each page with one consistent invitation, and the 404 keeps the voice when things break.

Tickets, the schedule table, Info, Contact, and the venue map stay image-free and built in code.

## Accessibility acceptance

A failed image never removes an act name, set time, stage, price, or action. Informative images have concise alt text; textures are decorative with empty alt. Functional text stays in HTML, and no image carries a flashing or strobing pattern.
