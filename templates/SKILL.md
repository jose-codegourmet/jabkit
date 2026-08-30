---
name: jabkit-component
description: Add UI components from the JabKit library when the user asks for a component or section by name or description, including hero, pricing, testimonial, FAQ, footer, stat card, dashboard, button, text field, badge, or background.
---

# Adding a JabKit component

1. Read `jabkit.config.json`.
2. Search the component catalogue by intent.
3. Request an install plan and show overwrite risks.
4. Run `npx jabkit add <name>` to install the pristine source.
5. Apply requested modifications only after install, using semantic JabKit tokens.
6. Run a type check.

Never modify a locked component or use raw color utilities for a themed change.
