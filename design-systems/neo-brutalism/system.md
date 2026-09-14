# Neo-brutalism

The page is a poster with working controls.

**Status:** authored JabKit proposal. Read the [reference review](references.md) for observed evidence and limitations; the values below are original recommendations.

## Philosophy and feeling

Neo-brutalism makes the construction visible. Edges, blocks, heavy type, and abrupt contrasts form a readable graphic system. The visitor should feel that the page has a point of view and is prepared to state it plainly. Its roughness is composed: alignment and repetition carry the apparent spontaneity.

This reference group is broader than the familiar yellow-card-and-black-shadow formula. Wanted For Nothing and Bruno Tomé point toward stark experimental typography; Roze Bunker's visible identity points toward playful graphic character. JabKit's default is a usable poster system with lime action surfaces, ink-like edges, and controlled hard shadows. Treat the colors and measurements as our proposal, not a claim about every reference.

## Page structure and spatial rhythm

Use a rigid twelve-column grid within 88rem. Headline and media may span unequal widths, but their edges share tracks. Make boundaries explicit at the level of sections and interactive panels; do not surround each word with a box. Use 2px outlines and a 4px offset shadow where it reinforces a pressable object.

A campaign opens with a forceful sentence and one cutout or photograph. It moves to a proof strip, a work or product wall, a short explanation of the offer, a comparison, and a direct action. A portfolio can replace the sales comparison with selected case studies and availability. The headline should be readable before it becomes a shape.

On mobile, stack the statement, visual, proof, and CTA in reading order. Remove tilted layouts around forms. Reserve space for hard shadows so they do not clip at the viewport edge. Keep collage layers decorative and outside interactive hit areas.

## Typography and voice

Use active verbs and concrete nouns. Humor is welcome when it clarifies personality; directions, prices, error messages, and form labels remain literal.

The recommended fallback stacks and role scale are in [typography.json](typography.json). They do not identify or reproduce the reference sites' fonts. Start from those roles, then make optical adjustments after the actual fonts and content are present. The nominal desktop body measure is 58ch; mobile is constrained by the viewport.

## Color, shape, and interaction

[tokens.json](tokens.json) contains a complete light/dark proposal. Use the same geometry and information hierarchy in both modes. Primary surfaces always use their paired foreground. Dark mode changes the material interpretation without hiding borders, captions, or controls. [rules.md](rules.md) defines the acceptance criteria, while [components.json](components.json) describes how the style applies to foundational components.

## Imagery

Confident, graphic, slightly mischievous. The asset should read as a strong silhouette at a glance and still reward a closer look.

Hard side light or direct flash, crisp cutouts, chunky recognizable forms, little atmospheric haze. Favor one flat backdrop, one object, and a decisive crop. Natural imperfections are welcome; synthetic dirt is optional and rarely necessary.

Read [imagery.md](imagery.md) before commissioning or generating any image. The guide includes full prompts and responsive asset direction. Text and functional controls stay in HTML.

## Variations within this system

The default is graphic poster brutalism. A monochrome typographic variant removes the bright action fill and makes scale the identifying feature. A food/culture variant can introduce a small set of cutouts. Change the palette deliberately across a whole site, not randomly between components.

## Where the boundary lies

Unlike retro, neo-brutalism does not require a historical era or distressed paper. Unlike editorial, its first responsibility is impact and action rather than extended reading. Both can use strong type, but the pacing differs.

Use [patterns.json](patterns.json) to choose a page sequence, [motion.md](motion.md) to set the interaction tone, and [migration.md](migration.md) to apply the direction to actual JabKit source.
