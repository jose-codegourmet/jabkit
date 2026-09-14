# Luxury

A considered encounter with something worth noticing.

**Status:** authored JabKit proposal. Read the [reference review](references.md) for observed evidence and limitations; the values below are original recommendations.

## Philosophy and feeling

Luxury is the sense that every decision received attention. The imagery reveals a material, a place, or an atmosphere with enough specificity to justify the visitor's interest. Space is generous because the selection is deliberate, not because the page has nothing to say. Actions feel like part of a service rather than interruptions.

The reference set prevents a narrow definition. Eleven uses social energy and a richly photographed room; Field Studies Flora emphasizes botanical composition; Francéclat uses saturated contemporary exhibition graphics. JabKit's default is a cool gallery palette with deep green actions and disciplined imagery. Warm hospitality or vivid cultural variants are possible, but neither gold trim nor a thin serif is a universal requirement.

## Page structure and spatial rhythm

Use broad visual fields punctuated by narrower, readable explanations. A twelve-column grid within 90rem provides a quiet alignment system. The opening gives one exceptional image, a concise promise, and a visible inquiry or reservation route. Follow with the experience, material or craft evidence, a selected collection, practical service details, and contact.

One wide establishing view should be followed by a different scale: the hand-finished edge of an object, a room detail, or a restrained portrait. This change in distance creates pacing without a new layout gimmick in every section. Keep captions and metadata outside photographs unless an image has a genuinely quiet region and a tested contrast treatment.

On mobile, prioritize subject, promise, and action. Use a separately composed portrait asset when a wide scene cannot survive cropping. Reduce section spacing rather than compressing text. Reservation controls and availability must remain reachable while media loads.

## Typography and voice

Precise, hospitable, and concrete. Describe materials, service, setting, or process. Avoid unsupported claims of exclusivity, fake scarcity, and strings of adjectives where a detail would be more persuasive.

The recommended fallback stacks and role scale are in [typography.json](typography.json). They do not identify or reproduce the reference sites' fonts. Start from those roles, then make optical adjustments after the actual fonts and content are present. The nominal desktop body measure is 60ch; mobile is constrained by the viewport.

## Color, shape, and interaction

[tokens.json](tokens.json) contains a complete light/dark proposal. Use the same geometry and information hierarchy in both modes. Primary surfaces always use their paired foreground. Dark mode changes the material interpretation without hiding borders, captions, or controls. [rules.md](rules.md) defines the acceptance criteria, while [components.json](components.json) describes how the style applies to foundational components.

## Imagery

Immersive and attentive, with a strong sense of material and place. The image should make someone imagine being there or handling the object.

Controlled directional light, believable reflections, carefully managed highlights, rich midtones, natural material variation. Choose a convincing viewpoint. Use atmosphere to reveal the subject, not to conceal vague product detail.

Read [imagery.md](imagery.md) before commissioning or generating any image. The guide includes full prompts and responsive asset direction. Text and functional controls stay in HTML.

## Variations within this system

Gallery luxury uses cool neutrals and deliberate object studies. Hospitality luxury can use warmer photographs within the same semantic interface hierarchy. Cultural luxury may use a vivid campaign palette, as Francéclat suggests; redesign the whole palette and image series together rather than adding random gold accents.

## Where the boundary lies

Minimal foregrounds clarity with relatively little staging. Luxury deliberately stages attention and supports it with evidence of care. Editorial tells a story through chapters; luxury often moves between overview and detail to deepen desire.

Use [patterns.json](patterns.json) to choose a page sequence, [motion.md](motion.md) to set the interaction tone, and [migration.md](migration.md) to apply the direction to actual JabKit source.
