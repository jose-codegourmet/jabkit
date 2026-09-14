# Editorial

A point of view, told in chapters.

**Status:** authored JabKit proposal. Read the [reference review](references.md) for observed evidence and limitations; the values below are original recommendations.

## Philosophy and feeling

Editorial design makes relationships between ideas visible. A cover introduces a subject and a point of view. A chapter changes pace. A caption gives an image a reason to exist. The page feels like someone selected and arranged the material rather than pouring it into identical content slots.

The supplied references demonstrate several registers: April's personal scrapbook, Britt Taylor's oversized argument, the Sapphic Bar Index's publication identity, and Sarah and Matt's invitation and chronology. A serif font alone would miss the common thread. JabKit's default is an image-rich reading system with a clear title, warm paper-like surfaces, dark readable text, and an aubergine action color. Narrative structure is the invariant; ephemera is optional.

## Page structure and spatial rhythm

Set a twelve-column grid inside 84rem, with body copy limited to 66ch. Use a main reading column, an occasional narrow annotation column, and full-width visual breaks. A caption belongs to its figure in both markup and position. Use rules to separate distinct subjects, not every paragraph.

A story page opens with title, short standfirst, author or relevant context, and an image. Continue with the question or setup, evidence, a change of scale through a photograph or pull quote, interpretation, and a useful next step. A directory substitutes a browsable index for narrative chapters; each entry has comparable metadata. A wedding or event page keeps logistics and RSVP reachable independently of the personal story.

On mobile, place annotations immediately after the paragraph they qualify. Keep timelines in chronological DOM order. Side-by-side spreads become paired figures, not a horizontal page the user must drag to read. The reading measure should fit the viewport without shrinking the font.

## Typography and voice

A distinct speaker, useful specificity, and sentences with varied rhythm. Headings carry an argument or a real subject. Captions, credits, dates, and sources must be truthful; never invent publication metadata for atmosphere.

The recommended fallback stacks and role scale are in [typography.json](typography.json). They do not identify or reproduce the reference sites' fonts. Start from those roles, then make optical adjustments after the actual fonts and content are present. The nominal desktop body measure is 66ch; mobile is constrained by the viewport.

## Color, shape, and interaction

[tokens.json](tokens.json) contains a complete light/dark proposal. Use the same geometry and information hierarchy in both modes. Primary surfaces always use their paired foreground. Dark mode changes the material interpretation without hiding borders, captions, or controls. [rules.md](rules.md) defines the acceptance criteria, while [components.json](components.json) describes how the style applies to foundational components.

## Imagery

Specific, human, and curious. The image gives the reader a reason to believe the story or to look at the subject differently.

Available light for documentary scenes, environmental context around portraits, a deliberate mix of establishing views and details. If using collage, use a small set of paper objects that relates to the subject. Texture should suggest handling, not obscure information.

Read [imagery.md](imagery.md) before commissioning or generating any image. The guide includes full prompts and responsive asset direction. Text and functional controls stay in HTML.

## Variations within this system

Publication editorial can use a serif reading face and precise captions. Scrapbook editorial uses a small set of meaningful paper objects. Typographic editorial can be entirely sans serif, with changes of scale driving the sequence. Maintain one primary register per site.

## Where the boundary lies

Editorial and retro both use collage, but editorial chooses an object because it supports the story; retro chooses a coherent material era. Editorial and minimal both use space, but editorial welcomes more layers of explanation.

Use [patterns.json](patterns.json) to choose a page sequence, [motion.md](motion.md) to set the interaction tone, and [migration.md](migration.md) to apply the direction to actual JabKit source.
