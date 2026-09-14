# Neo-Brutalism website

Independent JabKit sample app. Start with [the workspace guide](../../docs/standalone-design-systems.md) and [image prompts](../../PROMPTS_FOR_IMAGES.md).

Run `pnpm --filter @jabkit/neo-brutalism dev` from the root. Use the same filter with `build`, `start`, or `typecheck`. This app owns `app/globals.css` (Tailwind v4), `app/theme.css` (tokens/type), `app/style.module.css` (layout), and its public assets.

Set `NEXT_PUBLIC_JABKIT_URL` for the catalogue return link when deploying. All local routes start at `/`; there is no design-system path prefix or sibling-app dependency. The user supplies Higgsfield outputs; do not generate images automatically.
