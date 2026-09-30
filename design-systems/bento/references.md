# Bento Grid: reference review

Reviewed 2026-09-30. Source grouping: [TO_EXTRACT.md](../../TO_EXTRACT.md). This is a scoped art-direction note, not an accessibility, performance, or full interaction audit.

The proposed system, tokens, layout rules, and prompts are original recommendations for the fictional brand **DAYMARK**, taken from epic [#545](https://github.com/jose-codegourmet/jabkit/issues/545). They are not extracted CSS and not another studio's design system.

## Assigned URLs

**Evidence:** `TO_EXTRACT.md` groups references for Minimal, Neo-brutalism, Editorial, Luxury, and Retro. It assigns no URL to Bento Grid. The style came from a style sample list (talhaxcodes) that names the style without linking an example page.

**Observed feel and composition:** No third-party page was captured for this system. No palette, typeface, timing, or framework is inferred from an external site.

**Structure:** No external page structure was verified.

**JabKit interpretation:** DAYMARK's structure comes from the epic site map: a light marketing header, a hero beside a coded mini dashboard, a benefits bento, drill-down cards, a demo portal with five overview tiles, full table, calendar, board, and report views, and a card-state reference board. The bento grid is the product's information architecture, not a decorative feature mosaic.

**Limit:** Absence of a URL here does not mean bento-styled sites were unavailable on the web. It means this pack refuses to invent observations. A later review can append a dated desktop note if a reference is assigned.

## DAYMARK brief as the working source

**Evidence:** Readable product brief in epic #545, including the Bento Grid direction table, the website build brief, page tables, bento layout rules, demo dashboard content, demo-data rules, and the `ben-*` asset list. The foundation ticket (#612) adds the font choice and tile API; the delivered `ben-*` images and their alt text are recorded in the app's `provenance.json`.

**Observed feel and composition:** The brief specifies chalk `#F5F6F2`, ink `#26332F`, evergreen `#386A57`, mint `#CDE6D7`, apricot `#F6C794`, and cool gray `#E3E8E4`; clear sans headings with restrained numeric emphasis and concise card labels; light rounded panels with subtle borders and minimal shadows; and a 12-column grid with 16/24px gaps, 16px radius, and deliberate spans.

**Structure:** Marketing: Home, Product, Who it's for, How it works, FAQ, Request a walkthrough, Privacy, Terms, and 404. Portal: Dashboard, Bookings, Booking detail, Calendar, Customers, Tasks, Reports, and Card states. Global header, mobile sheet, portal shell, CTA band, and footer are specified there.

**JabKit interpretation:** Implement those pages in `apps/bento` with semantic `--jk-*` tokens, app-local `--ben-*` layout properties, and JabKit components as starting points. Record client-unconfirmed prices, timelines, integrations, and policies as placeholders.

**Limit:** The brief describes intended product behavior for a fictional business. It is not a shipped product, a price list, a privacy notice, or evidence of customer results. Items marked for the client stay unconfirmed.
