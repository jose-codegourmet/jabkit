export const designSystemSlugs = [
  "minimal",
  "neo-brutalism",
  "editorial",
  "luxury",
  "retro",
] as const;
export type DesignSystemSlug = (typeof designSystemSlugs)[number];

const sites = {
  minimal: {
    variable: "MINIMAL_SITE_URL",
    port: 3101,
    production: "https://minimal.jabkit.joseadrianbuctuanon.dev",
  },
  "neo-brutalism": {
    variable: "NEO_BRUTALISM_SITE_URL",
    port: 3102,
    production: "https://neo-brutalism.jabkit.joseadrianbuctuanon.dev",
  },
  editorial: {
    variable: "EDITORIAL_SITE_URL",
    port: 3103,
    production: "https://editorial.jabkit.joseadrianbuctuanon.dev",
  },
  luxury: {
    variable: "LUXURY_SITE_URL",
    port: 3104,
    production: "https://luxry.jabkit.joseadrianbuctuanon.dev",
  },
  retro: {
    variable: "RETRO_SITE_URL",
    port: 3105,
    production: "https://retro.jabkit.joseadrianbuctuanon.dev",
  },
} as const;

export function designSystemSiteUrl(
  slug: DesignSystemSlug,
): string | undefined {
  const { variable, port, production } = sites[slug];
  const configured = process.env[variable];
  if (!configured) {
    return process.env.NODE_ENV === "development"
      ? `http://localhost:${port}`
      : production;
  }
  const url = new URL(configured);
  if (
    !["http:", "https:"].includes(url.protocol) ||
    url.username ||
    url.password ||
    url.pathname !== "/" ||
    url.search ||
    url.hash
  ) {
    throw new Error(
      `${variable} must be an HTTP(S) origin without a path, query, credentials, or fragment.`,
    );
  }
  return url.origin;
}
