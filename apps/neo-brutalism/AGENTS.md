# Good Noise

Read the repository AGENTS.md, docs/standalone-design-systems.md, and PROMPTS_FOR_IMAGES.md first.

This is an independent Next.js app. `@/*` resolves to `packages/ui/src/*`; local files use relative imports. Never import from another app. Tailwind v4 configuration is `app/globals.css`; this site's tokens and typography live in `app/theme.css`. Edit those locally rather than changing catalogue or sibling styles. The library continues using semantic `--jk-*` tokens.

The user generates imagery in Higgsfield. Do not call an image generator. Preserve approved local assets and their provenance. Public files belong to this app.

Before editing Next.js code, read the relevant installed documentation under `node_modules/next/dist/docs/`. Run this app's typecheck/build and the root `pnpm check` as appropriate. Read the root component contract before modifying shared library components.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
