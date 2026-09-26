import type { Metadata } from "next";
import Link from "next/link";
import {
  HowItWorksStepper,
  type StepperSample,
} from "../../components/HowItWorksStepper";
import { SiteShell } from "../../components/SiteShell";
import { resolveInstall } from "../../lib/install-plan";
import { previewStillSrc } from "../../lib/preview-assets";
import { registryIndex } from "../../lib/registry";

export const metadata: Metadata = {
  title: "How it works - JabKit",
  description:
    "Describe, add, own: how a JabKit component goes from the catalogue into your tree.",
};

const TRY_WITH = ["button", "hero307", "chart-group14", "compare5"] as const;
const GENERIC_TAGS = new Set([
  "atom",
  "marketing",
  "dashboard",
  "landing",
  "primitive",
  "accessible",
  "interactive",
]);

export default async function HowItWorksPage() {
  const index = await registryIndex();
  const samples: StepperSample[] = [];
  for (const name of TRY_WITH) {
    const item = index.find((entry) => entry.name === name);
    if (!item) continue;
    const plan = await resolveInstall([name]);
    const entry = plan.resolved.find((resolved) => resolved.name === name);
    const source = entry?.files.find((file) => file.type === "component") ??
      entry?.files[0] ?? { path: `${name}.tsx`, content: "" };
    const query =
      item.tags.find((tag) => !GENERIC_TAGS.has(tag)) ?? item.tags[0] ?? name;
    const matches = index
      .filter((candidate) =>
        [
          candidate.name,
          candidate.displayName,
          candidate.description,
          ...candidate.tags,
        ]
          .join(" ")
          .toLowerCase()
          .includes(query.toLowerCase()),
      )
      .slice(0, 4)
      .map(({ name, displayName }) => ({ name, displayName }));
    samples.push({
      name,
      displayName: item.displayName,
      query,
      matches,
      files: plan.files,
      npmDeps: plan.npmDeps,
      sourcePath: `src/components/jabkit/${source.path}`,
      sourceExcerpt: source.content.split("\n").slice(0, 18).join("\n"),
      previewSrc: await previewStillSrc(name, { theme: "light" }),
    });
  }

  return (
    <SiteShell>
      <main className="mx-auto max-w-[1280px] px-5 pt-14 pb-16 tab:px-8 tab:pt-[72px] tab:pb-20">
        <p className="vd-kicker mb-4">How it works</p>
        <h1 className="vd-h1 max-w-[44rem] desk:text-[52px]">
          A short path from idea to code.
        </h1>
        <p className="mt-4 max-w-[40rem] text-[17px] leading-7 text-muted-foreground">
          The catalogue is a working interface for people and agents, not a
          gallery that ends at the browser.
        </p>

        <HowItWorksStepper samples={samples} />

        <div className="mt-12 grid gap-4 desk:grid-cols-2">
          <Link
            href="/agents"
            className="vd-card group flex flex-wrap items-center gap-5 px-6 py-5 tab:flex-nowrap"
          >
            <img
              src="/art/jk-agent.webp"
              alt=""
              width={120}
              height={120}
              loading="lazy"
              className="size-[120px] shrink-0 rounded-full border-3 border-ink object-cover shadow-[4px_4px_0_var(--vd-shadow)]"
            />
            <span className="min-w-0 flex-1">
              <span className="block font-display text-xl">
                Working with an agent?
              </span>
              <span className="mt-1 block text-muted-foreground">
                The same flow over POST /mcp.
              </span>
            </span>
            <span className="vd-btn vd-btn-sm">Agents →</span>
          </Link>
          <Link
            href="/components"
            className="vd-card group flex flex-wrap items-center gap-5 px-6 py-5 tab:flex-nowrap"
          >
            <img
              src="/art/jk-describe.webp"
              alt=""
              width={120}
              height={120}
              loading="lazy"
              className="size-[120px] shrink-0 rounded-full border-3 border-ink object-cover shadow-[4px_4px_0_var(--vd-shadow)]"
            />
            <span className="min-w-0 flex-1">
              <span className="block font-display text-xl">
                Ready to pick one?
              </span>
              <span className="mt-1 block text-muted-foreground">
                Browse the full catalogue.
              </span>
            </span>
            <span className="vd-btn vd-btn-sm vd-btn-primary">
              Browse components →
            </span>
          </Link>
        </div>
      </main>
    </SiteShell>
  );
}
