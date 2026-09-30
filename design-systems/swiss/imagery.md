# Swiss Design: image direction and production brief

## Intended feeling

FRAME/01 uses original fictional film stills and festival places photographed with a disciplined, level camera. Paper, near-black, cool gray, and a small real-world signal-red accent connect the image series to the interface without turning photographs into brand posters.

Natural light, true color, fine grain, clean verticals, and consistent crops make the series feel like one program. Film stills remain content. They never sit behind body text or replace schedule, ticket, pass, or form UI.

## Visual world

- Paper: `#F3F2EC`
- Near-black: `#171717`
- Signal red: `#E33B2E`
- Cool gray: `#A7ADB2`
- Film leads: consistent 16:9 landscape stills
- Film companions: 4:5 portrait details
- Venues: level 3:2 architectural photographs
- Hero: a 21:9 city facade at blue hour, read as a grid of frames

The film stills must be original and must not resemble an existing film, actor, director's signature shot, poster, title card, or festival campaign. People remain ordinary and unidentifiable.

## Required asset set

| ID | Role | Ratio | Direction |
| --- | --- | --- | --- |
| `swi-logo-symbol` | Mobile mark and favicon source | 1:1 | Slash-index mark inside a square frame with small 01 |
| `swi-logo-wordmark` | Header and footer lockup | 21:9 source, crop to 4:1 | FRAME/01 neo-grotesk lockup using the approved slash |
| `swi-hero` | Home hero | 21:9 | City facade at dusk as a strict grid of lit windows |
| `swi-film-quiet-current-a` | Film lead | 16:9 | Slow river through an industrial town at morning |
| `swi-film-quiet-current-b` | Film detail | 4:5 | Hands lowering a sample jar into the same river |
| `swi-film-between-stations-a` | Film lead | 16:9 | Two strangers apart on a night railway platform |
| `swi-film-between-stations-b` | Film detail | 4:5 | Passenger and reflection inside a night train |
| `swi-film-small-suns-a` | Film lead | 16:9 | Late sun, kitchen table, orange, and reaching arm |
| `swi-film-small-suns-b` | Film detail | 4:5 | Rooftop sheets glowing at sunset |
| `swi-venue-cinema-one` | Venue | 3:2 | Symmetrical independent cinema with red aisle lights |
| `swi-venue-hall-b` | Venue | 3:2 | Converted concrete and brick civic screening hall |
| `swi-cta` | Shared desktop CTA | 16:9 | Audience settling in as house lights dim |
| `swi-cta-mobile` | Shared mobile CTA | 4:5 | Portrait reframe of the same audience scene |
| `swi-process-projection` | About process | 3:2 | Projectionist preparing equipment before a screening |
| `swi-material-print` | Printed program material | 4:5 | Uncoated program sheets aligned as physical objects |
| `swi-about-talk` | About talks | 3:2 | Filmmaker conversation before a blank screen |
| `swi-background-paper` | Decorative texture | 1:1 | Seamless, evenly lit uncoated paper texture |
| `swi-404-frame` | Decorative recovery motif | 1:1 | Empty frame and slash geometry without readable text |

## Prompt construction

For each asset, name the exact subject, viewpoint, time and light, required real-world red accent, crop, quiet area, and exclusions. Ask for one standalone image. Reference an approved earlier original only when the generation order requires series continuity.

Generation order:

1. Symbol, then wordmark using the symbol.
2. Hero.
3. Three 16:9 film leads using the hero only for color and grain restraint.
4. Each 4:5 film companion using its own lead.
5. Two venues and desktop CTA, then the CTA mobile companion.
6. Projection, print material, and talk assets.
7. Paper texture and 404 frame.

The verbatim Nano Banana Pro 2k prompts and reference graph are maintained in [epic #546](https://github.com/jose-codegourmet/jabkit/issues/546) and image ticket [#630](https://github.com/jose-codegourmet/jabkit/issues/630). Production must use those prompts exactly.

## Negative direction

No real film resemblance, recognizable actors, title cards, subtitles, festival laurels, sponsor marks, readable signage, watermarks, UI, letterbox bars, dramatic grading presets, fake lens damage, illegible wordmarks, or generated interface text. Avoid keystoned architecture, implausible rooms, extra limbs, red used as a dominant wash, and unrelated warm/cool treatments across the series.

## Crop and series consistency

Keep cameras level and preserve recurring grain and true-color restraint. Use each image for one named role. Do not reuse the hero as a background. Lead stills share the same 16:9 crop; companion stills are separately composed portraits rather than squeezed wide frames.

Review every image at its rendered column span and at a small catalogue size. Provide intrinsic dimensions and object positions. Use the desktop and mobile CTA companions at their named breakpoints.

## Production and handoff

Jose produces this series with Higgsfield Nano Banana Pro at 2k. Implementing agents do not generate images or spend credits. Keep full-quality originals under `tmp/higgsfield-originals/swiss/`, then deliver optimized WebP files under `apps/swiss/public/assets/design-systems/swiss/`.

Hero and CTA assets must remain at or below 300 KB, content assets at or below 180 KB, and textures at or below 60 KB. Record the real job ID, generation date, prompt, exclusions, dimensions, bytes, crop, role, alt text, and rights in `provenance.json`. Never invent missing provenance.

Logo results require exact lettering. If the wordmark fails after the allowed attempts, keep the best approved symbol and typeset FRAME/01 in code with Inter Tight.

## Accessibility acceptance

Informative imagery receives concise alt text from the typed asset data. Paper and 404 textures are decorative with empty alt. A failed image never removes the film title, schedule facts, venue details, or action. Functional text stays in HTML.
