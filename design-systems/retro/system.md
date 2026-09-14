# Retro

Familiar objects, arranged for a modern task.

**Status:** authored JabKit proposal. Read the [reference review](references.md) for observed evidence and limitations; the values below are original recommendations.

## Philosophy and feeling

Retro works when its references form a world. A cutting mat, paper photograph, cassette case, or early handheld device carries associations before a paragraph is read. The design invites recognition and play. Its charm comes from concrete materials and a coherent vocabulary, not a universal sepia filter.

Mat suggests the personal worktable. Rectangles uses folders, photocopies, records, and ephemera. Wannathis uses modeled electronics and pixel-influenced lettering. JabKit's default is an analog desk system with warm paper, dark ink, deep teal actions, small tactile details, and sturdy controls. Device-render retro is a documented alternative. These families should not be mixed indiscriminately.

## Page structure and spatial rhythm

Build the underlying page on a twelve-column grid within 80rem. Place a small number of decorative objects around clear content areas. Keep the same physical logic across the page: paper lies on a surface, labels belong to an object, and a shadow points in one direction. Decorative rotation stays within three degrees and never applies to fields or long copy.

A product home page opens with a concise promise and a small material composition, then demonstrates the actual product, explains its use, shows a curated collection, states the offer, and ends with a maker or community note. A music publication can use record-like artwork for episodes while retaining ordinary title links and playback controls.

On mobile, turn the collage into a compact cover image or simplify it to one object. Restore all content to one column; do not shrink an entire desktop collage until text becomes unreadable. Interactions retain modern keyboard, touch, and focus behavior.

## Typography and voice

Friendly and direct, with concrete references to making, collecting, listening, or remembering. Avoid forcing period slang into every sentence. Instructions and error recovery use familiar current language.

The recommended fallback stacks and role scale are in [typography.json](typography.json). They do not identify or reproduce the reference sites' fonts. Start from those roles, then make optical adjustments after the actual fonts and content are present. The nominal desktop body measure is 60ch; mobile is constrained by the viewport.

## Color, shape, and interaction

[tokens.json](tokens.json) contains a complete light/dark proposal. Use the same geometry and information hierarchy in both modes. Primary surfaces always use their paired foreground. Dark mode changes the material interpretation without hiding borders, captions, or controls. [rules.md](rules.md) defines the acceptance criteria, while [components.json](components.json) describes how the style applies to foundational components.

## Imagery

Personal, handled, and lightly playful. The visitor should recognize a material memory without feeling trapped in a costume party.

Paper fibers, subtle edge wear, soft contact shadows, matte plastic, direct but gentle light. For collage, use actual physical overlap and a consistent overhead view. For device renders, retain a consistent three-quarter camera, material roughness, and light direction across the whole set.

Read [imagery.md](imagery.md) before commissioning or generating any image. The guide includes full prompts and responsive asset direction. Text and functional controls stay in HTML.

## Variations within this system

Analog desk is the default: paper, photos, small labels, and restrained surface texture. Device retro uses one consistent camera angle and lighting setup for a family of modeled electronics. A record-sleeve variant emphasizes cover art and a collection browser. Choose one main material family for a site.

## Where the boundary lies

Neo-brutalism exposes structure but need not evoke a past era. Editorial collage supports a particular narrative. Retro uses material memory as an ongoing identity system, even when the content is a modern product.

Use [patterns.json](patterns.json) to choose a page sequence, [motion.md](motion.md) to set the interaction tone, and [migration.md](migration.md) to apply the direction to actual JabKit source.
