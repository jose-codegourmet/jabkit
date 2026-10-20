# Applying Maximalism to JabKit

This is a manual implementation plan. These docs add no runtime theme selector or automatic migration command. Read the [documentation contract](../contract.md) and [theming guide](../../docs/theming.md) first.

## Inspect the current composition

Inventory routes, demo data, actions, assets, and component APIs. Choose the matching sequence in [patterns.json](patterns.json). Keep real navigation, heading order, table semantics, field names, live regions, and demo disclosures intact.

Inspect ShopTopNav, NavigationMenu, Button, Hero231, TiltedCard, CarouselCards, Badge, DataTable, Combobox, Switch, Calendar03, Pricing28, RadioGroup, Alert, Skeleton, Dialog, Accordion, Faq12, and FooterSection before adapting them. A component name is a starting point, not proof that its anatomy fits FULL VOLUME. No tabs, toggle-group, select, or number-input atom exists; compose those from semantic HTML and existing atoms.

## Apply in order

1. Establish a clean consumer baseline and preserve it in version control.
2. Define the complete [light and dark token proposals](tokens.json) in the app-owned scope, plus any campaign-only custom properties the app needs.
3. Self-host Anton and Inter with their OFL files, then apply the roles in [typography.json](typography.json). Enable tabular numerals on times, prices, and totals.
4. Build the shared chrome: skip link, sticky ink header, mobile sheet, footer, demo notice, CTA band, and the Pause motion toggle.
5. Add the typed demo records before composing lineup, schedule, tickets, or info.
6. Integrate the approved local image series from [imagery.md](imagery.md) by asset ID, with intrinsic dimensions and meaningful or empty alt.
7. Adapt only the components named in [components.json](components.json), separating campaign and transactional surfaces on every page.
8. Add the kinetic accents in [motion.md](motion.md), gated by reduced motion and the toggle, then review every route against [rules.md](rules.md).

## Theme and distribution checks

Keep the same hierarchy and geometry in light and dark. Cream and ink swap roles for transactional surfaces while hot pink stays the ticket action and lime stays the focus and current-page marker. Check that no sticker or collage edge overlaps text or focus rings in either mode. Portal content receives the same tokens. Preview iframes are separate documents and require explicit theme handling.

If library source changes, retain the required types, metadata, preview, stories, ThemeComparison, registry build, and committed preview assets. App-local compositions stay in `apps/maximalism` and never import from another app.

## Validate and preserve a way back

Run the maximalism typecheck and production build, the app-scoped Biome check, `pnpm check:design-system-assets`, and the relevant repository gates. Review every route at 320, 375, and 1440 CSS pixels, both themes, keyboard operation, reduced motion, the Pause motion toggle, every listed state, and failed media.

Keep each ticket within its declared file ownership so every change can merge independently and roll back cleanly.
