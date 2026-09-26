import type { Route } from "next";
import Link from "next/link";
import { CLI_PACKAGE_URL, GITHUB_ISSUES_URL, GITHUB_URL } from "../lib/site";

type FooterLink = { label: string; href: string; external?: boolean };

const columns: Array<{ title: string; links: FooterLink[] }> = [
  {
    title: "Catalogue",
    links: [
      { label: "Components", href: "/components" },
      { label: "Atoms", href: "/atoms" },
      { label: "Marketing", href: "/marketing" },
      { label: "Dashboard", href: "/dashboard" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "How it works", href: "/how-it-works" },
      { label: "Agents & MCP", href: "/agents" },
      { label: "Samples", href: "/samples" },
      { label: "Design systems", href: "/design-systems" },
    ],
  },
  {
    title: "Project",
    links: [
      { label: "GitHub", href: GITHUB_URL, external: true },
      { label: "Report an issue", href: GITHUB_ISSUES_URL, external: true },
      { label: "@jabkit/cli on npm", href: CLI_PACKAGE_URL, external: true },
      { label: "Registry index", href: "/r/index.json", external: true },
    ],
  },
];

export function SiteFooter({
  componentCount,
  signOff = "Take it home.",
}: {
  componentCount?: number;
  signOff?: string;
}) {
  return (
    <footer className="vd-footer">
      <div className="mx-auto max-w-[1280px] px-5 pt-14 tab:px-8 tab:pt-20">
        <div className="grid gap-10 tab:grid-cols-2 desk:grid-cols-[1.4fr_1fr_1fr_1fr] desk:gap-12">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3 font-display text-[26px]"
            >
              <img
                src="/art/jk-logo.webp"
                alt=""
                width={44}
                height={44}
                className="vd-logo-medallion size-11"
              />
              JabKit
            </Link>
            <p className="mt-5 max-w-[32ch] leading-[26px] text-muted-foreground">
              Source-owned components for people and agents. Copy them in, keep
              them forever.
            </p>
            <p className="vd-code mt-6 inline-flex px-3.5 py-2.5 text-[13px]">
              $ npx jabkit init
            </p>
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <p className="vd-script mb-3 text-lg">{column.title}</p>
              <ul className="flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a
                        href={link.href}
                        className="underline-offset-4 hover:text-tomato-text hover:underline"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href as Route}
                        className="underline-offset-4 hover:text-tomato-text hover:underline"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p
          aria-hidden="true"
          className="mt-14 overflow-hidden pb-2 font-display text-[14vw] leading-[1.15] tracking-[-0.04em] whitespace-nowrap text-tomato tab:mt-20 tab:text-[12vw] desk:text-[132px]"
        >
          {signOff}
        </p>
      </div>
      <div className="vd-footer-bar border-t-2 border-ink">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-2 px-5 py-4 font-mono text-[13px] tab:flex-row tab:justify-between tab:px-8">
          <span>© {new Date().getFullYear()} JabKit</span>
          {typeof componentCount === "number" ? (
            <span>{componentCount} components in the registry</span>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
