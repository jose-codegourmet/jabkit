# Minimal

An open gallery, with nothing competing with the work.

**Status:** authored JabKit proposal. Read the [reference review](references.md) for observed evidence and limitations; the values below are original recommendations.

## Philosophy and feeling

Minimalism here is a hierarchy of attention. The page behaves like a well-hung exhibition: the visitor understands where to look, but is not marched through a sales script. Space around an image gives its scale and subject significance. Small navigation and plain captions let the work retain its own color and texture.

The tone is assured rather than anonymous. A recurring alignment, an unusually well-chosen crop, or a recognizable wordmark can carry the identity. Remove containers before removing useful information. A service page still needs scope, a process, and a way to inquire; it simply presents them without decorative packaging.

## Page structure and spatial rhythm

Use a twelve-column desktop grid within a 90rem maximum width. Keep 4rem outer gutters on wide screens, scaling to 1.25rem on phones. A selected work can occupy seven columns with the remaining space deliberately unfilled; another can be a pair of unequal images. Align captions to the image edge, not to an unrelated page center.

A default home page opens with the studio name, short navigation, a one-sentence practice description, and one dominant photograph. Follow with selected work, a short account of the practice, a compact service comparison, and direct contact. Do not put a dashboard illustration into a photography-led composition just because a hero component already includes one.

On phones, return all meaningful content to normal single-column flow. A deliberate desktop gap becomes spacing between content groups, never a screen of blank space. Allow project titles to wrap and use the actual image focal point for alternate crops.

## Typography and voice

Short, specific sentences. Name the work, medium, place, and service when useful. Let captions explain what the visitor sees; avoid ornamental numbering and inflated claims.

The recommended fallback stacks and role scale are in [typography.json](typography.json). They do not identify or reproduce the reference sites' fonts. Start from those roles, then make optical adjustments after the actual fonts and content are present. The nominal desktop body measure is 62ch; mobile is constrained by the viewport.

## Color, shape, and interaction

[tokens.json](tokens.json) contains a complete light/dark proposal. Use the same geometry and information hierarchy in both modes. Primary surfaces always use their paired foreground. Dark mode changes the material interpretation without hiding borders, captions, or controls. [rules.md](rules.md) defines the acceptance criteria, while [components.json](components.json) describes how the style applies to foundational components.

## Imagery

Quiet observation. The image should feel discovered by a patient eye, with enough specificity to hold attention without visual shouting.

Natural window light, matte surfaces, restrained saturation, accurate materials, soft but readable shadows. Compose around a single subject or a clear relationship between two forms. Keep backgrounds useful and undistracting rather than artificially empty.

Read [imagery.md](imagery.md) before commissioning or generating any image. The guide includes full prompts and responsive asset direction. Text and functional controls stay in HTML.

## Variations within this system

Gallery minimal uses photographs as the strongest signal. Typographic minimal can give the wordmark more scale, as ET Studio suggests. Both keep interface colors quiet. Serif display is an optional identity decision, not a compulsory minimalism ingredient.

## Where the boundary lies

Compared with editorial, minimal has fewer layers of commentary. Compared with luxury, it needs less staging and fewer atmosphere-building interludes. Sparse content is not evidence of either quality or completeness.

Use [patterns.json](patterns.json) to choose a page sequence, [motion.md](motion.md) to set the interaction tone, and [migration.md](migration.md) to apply the direction to actual JabKit source.
