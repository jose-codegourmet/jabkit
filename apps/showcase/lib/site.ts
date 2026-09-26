import type { Route } from "next";

export const GITHUB_URL = "https://github.com/jose-codegourmet/jabkit";
export const GITHUB_ISSUES_URL = `${GITHUB_URL}/issues`;
export const CLI_PACKAGE_URL = "https://www.npmjs.com/package/@jabkit/cli";

export type NavItem = {
  label: string;
  href: Route;
  /** Path prefixes that mark this item as the current section. */
  match: readonly string[];
};

export const primaryNav: readonly NavItem[] = [
  {
    label: "Components",
    href: "/components",
    match: ["/components", "/atoms", "/marketing", "/dashboard"],
  },
  { label: "Samples", href: "/samples", match: ["/samples"] },
  {
    label: "Design systems",
    href: "/design-systems",
    match: ["/design-systems"],
  },
  {
    label: "How it works",
    href: "/how-it-works" as Route,
    match: ["/how-it-works"],
  },
  { label: "Agents", href: "/agents" as Route, match: ["/agents"] },
];

export function isNavActive(item: NavItem, pathname: string | null) {
  if (!pathname) return false;
  return item.match.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

/** Deps every component carries through `lib/cn.ts`; not a real "dependency". */
export const baselineDependencies = ["clsx", "tailwind-merge"] as const;

export function hasOnlyBaselineDependencies(dependencies: string[]) {
  return dependencies.every((dependency) =>
    (baselineDependencies as readonly string[]).includes(dependency),
  );
}
