# Applying Swiss Design to JabKit

This is a manual implementation plan. These docs add no runtime theme selector or automatic migration command. Read the [documentation contract](../contract.md) and [theming guide](../../docs/theming.md) first.

## Inspect the current composition

Inventory routes, program data, actions, assets, and component APIs. Choose the matching sequence in [patterns.json](patterns.json). Keep real navigation, heading order, table semantics, field names, and demo disclosures intact.

Inspect Button, Card, DataTable, NavigationMenu, Combobox, Calendar03, Pricing28, Accordion, and FooterColumn before adapting them. A component name is a starting point, not proof that its anatomy matches FRAME/01.

## Apply in order

1. Establish a clean consumer baseline and preserve it in version control.
2. Define the complete [light and dark token proposals](tokens.json) in the app-owned scope.
3. Self-host Inter Tight, then apply the roles in [typography.json](typography.json).
4. Establish the 12/8/4-column page grid, shared gutter, square geometry, and focus treatment.
5. Add the typed demo records before composing filters, schedules, film details, passes, or checkout.
6. Integrate the approved local image series from [imagery.md](imagery.md) with intrinsic dimensions and meaningful alt text.
7. Adapt only the components named in [components.json](components.json), preserving their accessibility behavior.
8. Add the restrained state and reveal behavior in [motion.md](motion.md), then review every route against [rules.md](rules.md).

## Theme and distribution checks

Keep the same hierarchy and geometry in light and dark. Paper becomes a near-black field in dark mode while signal red remains recognizable. Portal content receives the same tokens. Preview iframes are separate documents and require explicit theme handling.

If library source changes, retain the required types, metadata, preview, stories, ThemeComparison, registry build, and committed preview assets. App-local compositions stay in `apps/swiss` and never import from another app.

## Validate and preserve a way back

Run the Swiss typecheck and production build, the app-scoped Biome check, asset verification, and the relevant repository gates. Review every route at mobile and desktop widths, both themes, keyboard operation, reduced motion, invalid filters, disabled ticket states, and failed media.

Keep each ticket within its declared file ownership so every change can merge independently and roll back cleanly.
