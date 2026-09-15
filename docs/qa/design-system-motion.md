# Navigation and motion refinement

2026-09-15. Five independently styled JabKit applications. This pass keeps the approved artwork, typography, palettes, page addresses, navigation destinations, form contracts, and local-only demo behavior.

## Design read and audit

Reading this as five brand showcases for people evaluating JabKit, with distinct navigation and motion that demonstrate the range of the component library.

The prior visual pass established complete pages and approved imagery, but all five headers repeated a horizontal row of links with the same small mobile dialog. Scrolling was largely static. Existing useful controls include the room carousel, calendar, archive filters, and cropper; those stay interactive and are not replaced with animations.

The base visual language is preserved: quiet Manrope architecture; lime and ink with compressed Archivo for branding; Newsreader magazine typography; mineral/forest hospitality with Cormorant; and paper/green photography with DM Serif. Routes, metadata, primary destinations, and image provenance are unchanged.

These are aesthetic directions within JabKit, not claims to implement an external standardized design system. In the skill’s variance/motion/density scale, the intended values are Minimal 6/5/3, Neo-brutalism 9/8/4, Editorial 6/5/4, Luxury 7/6/3, Retro 8/7/4. Their different audiences justify the range rather than giving every site the same speed or spring.

## Implemented treatments

| App | Navigation | Page motion |
| --- | --- | --- |
| Minimal | JabKit `MenuVertical` in a full-screen `Dialog`; large project index; image changes on pointer hover and keyboard focus; direct selected-work shortcut | Measured heading entrance, staggered project gallery, subtle image movement through the viewport |
| Neo-brutalism | JabKit `SterlingGateKineticNavigation`, locally composed as an 80px sticky header and full-screen lime menu; oversized kinetic labels; central work shortcut | Fast heading entrance, rotated poster arrivals, scroll-linked reveal of the printed studio wall |
| Editorial | JabKit `NavbarWithAnimatedMegaDropdown` with subject columns, archive destinations, and a photographic issue card; mobile disclosures | Reading progress, story stagger, drawing section rule, restrained image movement |
| Luxury | Centered supplied wordmark; full-screen photographic room menu using JabKit `Dialog`; room imagery changes on link hover/focus | Slow lake-image parallax, relaxed room entrances, image movement that leaves the text stationary |
| Retro | JabKit `TubelightNavbar` restyled as a floating paper tab dock; persistent collection, guide, studio, and plan destinations | Spring response on collection links and navigation actions; paper-like hero entrance; gentle image movement |

`SiteNavigation.tsx` and `navigation.module.css` belong to each app. `SiteChrome.tsx` continues to own the footer and re-exports its site’s navigation. The four reusable navigation components and JabKit dialog source are unchanged. Neo’s local wrapper adds background inertness and keyboard containment around the full-screen composition without editing the source-distributed component.

## Motion ownership

Each app directly declares `gsap` and `motion`. Here, React motion means **Motion for React** (`motion/react`), not the older npm package literally called `react-motion`.

Each `MotionCanvas` is a client boundary around server-rendered route content. GSAP owns scroll-linked image and entrance transforms inside that boundary. Motion owns React interaction states, menu image transitions, the Retro springs, and Editorial reading progress. Avoid having both libraries write the same element’s transform at the same time.

Only explicit `data-motion-*` markers opt content into choreography. The image component marks its supporting photographs; priority images do not join the generic scroll effect. Luxury has a separate hero timeline. Image scaling reserves enough overscan to avoid bare edges during movement. Forms and cropper controls are not included in blanket GSAP selectors.

GSAP setup uses scoped `matchMedia`; its context reverts on route changes, unmount, and reduced-motion changes. Font readiness refreshes the measured triggers. There is no smooth-scroll replacement, scroll hijacking, perpetual marquee, global scroll event handler, or invisible-until-JavaScript page state. A reader can still scroll normally.

The navigation uses a small `useSyncExternalStore` preference hook so changing reduced motion while a menu is mounted updates its React animation props immediately. Server rendering starts in the static state.

Motion reference: [Motion for React](https://motion.dev/docs/react). Responsive cleanup reference: [GSAP matchMedia](https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/).

## Interaction requirements

- Full-screen menus fit within the viewport at desktop and narrow sizes and scroll internally when needed.
- Tab and Shift+Tab remain inside modal navigation. Escape closes it and restores the opener; the page behind it cannot receive interaction.
- Mobile links retain accessible text. Hover-triggered image changes also respond to keyboard focus; touch navigation does not require a hover gesture.
- The Retro dock reserves space at the foot of the page. Its items retain text on mobile, alongside their icons.
- Reduced motion removes GSAP transforms and bypasses decorative spring/entrance motion. State changes and navigation remain functional. Reading progress is direct state feedback, without a lagging spring.
- Both themes use the app’s semantic tokens. Photographs are never inverted. The supplied logo artwork has a readable dark-mode treatment.

## Verification

| Check | Result |
| --- | --- |
| All five production builds | Passed, including final preference and layout fixes |
| App lint | Passed: 232 files, no error-level diagnostics |
| Desktop/narrow navigation | All five reviewed at 1440px, 390px, and 320px; no document overflow or offscreen modal bounds |
| Modal keyboard access | Tab and Shift+Tab containment, Escape dismissal, and opener focus restoration passed; Editorial mobile disclosure also opened successfully |
| Themes | Light/dark pages and expanded menus reviewed |
| Scroll effects | Each app’s supporting-image transform changed in response to scrolling |
| Motion preferences | Fresh reduced-motion loads remained static; switching the preference removed GSAP transforms; turning motion back on resumed the effects |
| Route crawl | All 54 pages and their internal links/images passed; unknown routes returned 404 |
| Mobile routes | All 54 pages checked at 320px without document overflow |
| Local form previews | Minimal inquiry, Neo brief, Editorial signup, and Luxury stay inquiry passed |
| Existing controls | Room saving, carousel movement, date-range selection, and real PNG download passed |
| Asset/convention/registry/preview verification | Passed; shared UI sources and generated registry files are unchanged |
| Root `pnpm check` | Stops at the existing unresolved imports/dependencies in `apps/verify`; the later gates passed when run separately |

The visual review corrected full-screen dialog translation, mobile mega-menu alignment, and the Retro dock’s footer overlap. Full-screen dialogs explicitly override the shared centered-dialog translate utilities; keep those overrides when adjusting their layouts. Retro reserves 110px below the whole site, including the demo controls, and uses matching document scroll padding.

Evidence on the authoring machine: `/tmp/jabkit-motion/qa-results.json`, `preference-results.json`, `final-results.json`, `flows-results.json`, and the corresponding desktop/mobile/menu screenshots. These are temporary review artifacts, not new repository testing infrastructure. No deployment, image generation, shared-component modification, or performance-score claim is part of this change.
