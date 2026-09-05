import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { InstallCommand } from "../components/InstallCommand";
import { PreviewImage } from "../components/PreviewImage";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { type RegistryIndexItem, registryIndex } from "../lib/registry";

const HERO_PREVIEW = "hero307";
const BENTO_NAMES = [
  "hero228",
  "hero230",
  "case-studies13",
  "compare5",
  "code-example14",
] as const;
const THEME_PROOF = "button";

const loopSteps = [
  {
    verb: "Describe",
    title: "Say what you need",
    copy: "Search by intent, tag, or category. Metadata makes a component findable before you know its name.",
  },
  {
    verb: "Add",
    title: "Copy it into your tree",
    copy: "One CLI command drops source files into your project. Dependencies resolve with the install plan.",
  },
  {
    verb: "Own",
    title: "Shape it for your product",
    copy: "The files are yours. Edit tokens, props, and markup without fighting a locked package.",
  },
] as const;

function pickByName(items: RegistryIndexItem[], name: string) {
  return items.find((item) => item.name === name);
}

export default async function Home() {
  const components = await registryIndex().catch(
    () => [] as RegistryIndexItem[],
  );
  const marketing = components.filter((item) => item.category === "marketing");
  const atoms = components.filter((item) => item.category === "atoms");
  const zeroDeps = components.filter((item) => item.dependencies.length === 0);

  const heroItem = pickByName(components, HERO_PREVIEW) ?? marketing[0] ?? null;
  const bentoItems = BENTO_NAMES.map(
    (name) => pickByName(components, name) ?? null,
  ).filter((item): item is RegistryIndexItem => item !== null);
  const themeProof = pickByName(components, THEME_PROOF) ?? atoms[0] ?? null;

  const tagCounts = new Map<string, number>();
  for (const item of components) {
    for (const tag of item.tags) {
      tagCounts.set(tag, (tagCounts.get(tag) ?? 0) + 1);
    }
  }
  const topTags = [...tagCounts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 12);

  const stats = [
    { label: "Components", value: String(components.length) },
    { label: "Atoms", value: String(atoms.length) },
    { label: "Marketing", value: String(marketing.length) },
    { label: "Zero deps", value: String(zeroDeps.length) },
  ];

  return (
    <>
      <SiteHeader />
      <main>
        {/* 1. Asymmetric split hero */}
        <section className="grid-lines overflow-hidden border-b border-border">
          <div className="mx-auto grid min-h-[calc(100dvh-68px)] max-w-7xl items-center gap-10 px-5 pt-16 pb-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:pt-20 lg:pb-20">
            <div className="reveal">
              <p className="mb-5 font-mono text-xs font-medium tracking-[0.16em] text-primary uppercase">
                Source-owned UI
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.065em] text-balance md:text-5xl lg:text-6xl">
                Components that leave the nest with you.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Describe what you need, copy the source, and own every line in
                your tree.
              </p>
              <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
                <Link
                  href="/components"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-[--radius] bg-primary px-5 text-sm font-medium whitespace-nowrap text-primary-foreground transition hover:brightness-110 active:translate-y-px sm:w-auto"
                >
                  Browse components <ArrowRightIcon />
                </Link>
                <a
                  href="#how-it-works"
                  className="inline-flex h-12 w-full items-center justify-center rounded-[--radius] border border-border bg-card px-5 text-sm font-medium whitespace-nowrap transition hover:bg-accent active:translate-y-px sm:w-auto"
                >
                  See the loop
                </a>
              </div>
            </div>

            {heroItem ? (
              <div className="reveal relative [animation-delay:120ms]">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-6 -bottom-3 -z-10 hidden h-full rounded-[--radius] border border-border bg-card/60 lg:block"
                />
                <Link
                  href={`/${heroItem.category}/${heroItem.name}`}
                  className="group block overflow-hidden rounded-[--radius] border border-border bg-card shadow-[0_24px_70px_-38px_color-mix(in_oklab,var(--jk-foreground),transparent_50%)] transition hover:border-primary"
                >
                  <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
                    <span className="truncate font-mono text-xs text-muted-foreground">
                      {heroItem.displayName}
                    </span>
                    <span className="font-mono text-[11px] text-primary uppercase">
                      {heroItem.category}
                    </span>
                  </div>
                  <div className="aspect-[16/10] overflow-hidden bg-muted/30">
                    <PreviewImage
                      name={heroItem.name}
                      displayName={heroItem.displayName}
                      loading="eager"
                    />
                  </div>
                </Link>
              </div>
            ) : null}
          </div>
        </section>

        {/* 2. Registry stat strip */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <dl className="grid grid-cols-2 divide-y divide-border sm:grid-cols-4 sm:divide-x sm:divide-y-0">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col gap-1 px-4 py-6 odd:border-r odd:border-border sm:px-6 sm:odd:border-r-0"
                >
                  <dt className="font-mono text-[11px] tracking-[0.12em] text-muted-foreground uppercase">
                    {stat.label}
                  </dt>
                  <dd className="font-mono text-3xl font-semibold tracking-tight text-foreground">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* 3. The loop */}
        <section
          id="how-it-works"
          className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24"
        >
          <div className="reveal-on-scroll max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
              A short path from idea to code.
            </h2>
            <p className="mt-4 max-w-[65ch] leading-7 text-muted-foreground">
              The catalogue is a working interface for people and agents, not a
              gallery that ends at the browser.
            </p>
          </div>

          <ol className="mt-14 space-y-10">
            {loopSteps.map((step, index) => (
              <li
                key={step.verb}
                className={`reveal-on-scroll grid gap-4 border-t border-border pt-10 md:grid-cols-[120px_1fr] md:gap-10 ${
                  index === 1 ? "md:pl-8" : index === 2 ? "md:pl-16" : ""
                }`}
              >
                <div>
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2 text-sm font-semibold tracking-tight text-primary">
                    {step.verb}
                  </p>
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[65ch] leading-7 text-muted-foreground">
                    {step.copy}
                  </p>
                  {index === 1 ? (
                    <div className="mt-6 max-w-xl">
                      <InstallCommand name="button" />
                    </div>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* 4. Live catalogue bento */}
        <section className="border-y border-border bg-card">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
            <div className="reveal-on-scroll flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-xl">
                <h2 className="text-3xl font-semibold tracking-[-0.05em]">
                  Start with something real.
                </h2>
                <p className="mt-3 leading-7 text-muted-foreground">
                  Live previews from the registry. Open any cell to inspect
                  source, stories, and install plans.
                </p>
              </div>
              <Link
                href="/components"
                className="inline-flex min-h-11 items-center text-sm font-medium text-primary hover:underline"
              >
                See all components
              </Link>
            </div>

            {bentoItems.length > 0 ? (
              <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
                {bentoItems.map((item, index) => {
                  const isLarge = index === 0;
                  return (
                    <Link
                      key={item.name}
                      href={`/${item.category}/${item.name}`}
                      className={`group overflow-hidden rounded-[--radius] border border-border bg-background transition hover:border-primary ${
                        isLarge
                          ? "md:col-span-2 lg:col-span-4 lg:row-span-2"
                          : "lg:col-span-2"
                      }`}
                    >
                      <div className="aspect-[16/10] overflow-hidden bg-muted/30">
                        <PreviewImage
                          name={item.name}
                          displayName={item.displayName}
                        />
                      </div>
                      <div className="flex items-start justify-between gap-3 p-4">
                        <div className="min-w-0">
                          <p className="font-mono text-[11px] text-primary uppercase">
                            {item.category}
                          </p>
                          <h3 className="mt-1 truncate font-medium group-hover:text-primary">
                            {item.displayName}
                          </h3>
                        </div>
                        <ArrowRightIcon className="mt-1 shrink-0 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : null}
          </div>
        </section>

        {/* 5. Findable by intent */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="reveal-on-scroll max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
              Findable by intent.
            </h2>
            <p className="mt-4 max-w-[65ch] leading-7 text-muted-foreground">
              Tags are part of the contract. Filter the catalogue before you
              know a component name.
            </p>
          </div>
          {topTags.length > 0 ? (
            <ul className="reveal-on-scroll mt-10 flex flex-wrap gap-2">
              {topTags.map(([tag, count]) => (
                <li key={tag}>
                  <Link
                    href={`/components?tag=${encodeURIComponent(tag)}`}
                    className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-card px-4 text-sm transition hover:border-primary hover:bg-accent"
                  >
                    <span className="font-medium">#{tag}</span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {count}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </section>

        {/* 6. Agent handoff */}
        <section className="border-y border-border bg-card">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="reveal-on-scroll">
              <h2 className="text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                Built for agent handoff.
              </h2>
              <p className="mt-4 max-w-[65ch] leading-7 text-muted-foreground">
                MCP tools expose search, install plans, and conventions so an
                agent can resolve a component the same way a human would.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="font-mono text-primary">01</span>
                  <span>search_components by name, tag, or description</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-primary">02</span>
                  <span>get_install_plan walks registryDependencies</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-primary">03</span>
                  <span>get_conventions returns the project ruleset</span>
                </li>
              </ul>
            </div>
            <div className="reveal-on-scroll min-w-0">
              <div className="overflow-hidden rounded-[--radius] border border-border bg-background">
                <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                  <span className="font-mono text-xs text-muted-foreground">
                    POST /mcp
                  </span>
                </div>
                <pre className="-mx-0 overflow-x-auto p-5 font-mono text-[13px] leading-6 text-muted-foreground sm:text-sm">
                  <code>
                    {`curl -X POST /mcp \\
  -H "Content-Type: application/json" \\
  -d '{
    "tool": "search_components",
    "arguments": { "query": "hero" }
  }'

# then resolve the install order
curl -X POST /mcp \\
  -H "Content-Type: application/json" \\
  -d '{
    "tool": "get_install_plan",
    "arguments": { "names": ["button"] }
  }'`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Both themes, one source */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="reveal-on-scroll max-w-2xl">
            <p className="mb-4 font-mono text-xs font-medium tracking-[0.16em] text-primary uppercase">
              Light and dark
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
              Both themes, one source.
            </h2>
            <p className="mt-4 max-w-[65ch] leading-7 text-muted-foreground">
              Every component ships on semantic tokens. The same file renders
              correctly in light and dark without a second stylesheet.
            </p>
          </div>

          {themeProof ? (
            <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2">
              {(
                [
                  ["light", "Light"],
                  ["dark", "Dark"],
                ] as const
              ).map(([theme, label]) => (
                <div
                  key={theme}
                  className="reveal-on-scroll overflow-hidden rounded-[--radius] border border-border bg-card"
                >
                  <div className="flex items-center justify-between border-b border-border px-4 py-3">
                    <span className="font-mono text-xs text-muted-foreground">
                      {themeProof.displayName}
                    </span>
                    <span className="font-mono text-[11px] text-primary uppercase">
                      {label}
                    </span>
                  </div>
                  <div className="h-[280px] overflow-hidden bg-muted/30 sm:h-[320px]">
                    <PreviewImage
                      name={themeProof.name}
                      displayName={`${themeProof.displayName} ${label}`}
                      theme={theme}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </section>

        {/* 8. Closing CTA */}
        <section className="border-t border-border">
          <div className="mx-auto flex max-w-3xl flex-col items-center px-5 py-20 text-center sm:px-8 sm:py-24">
            <h2 className="text-3xl font-semibold tracking-[-0.05em] text-balance sm:text-4xl">
              Own the files. Ship the interface.
            </h2>
            <p className="mt-4 max-w-[50ch] leading-7 text-muted-foreground">
              Browse the catalogue, copy a component, and keep building without
              a locked dependency.
            </p>
            <Link
              href="/components"
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-[--radius] bg-primary px-6 text-sm font-medium whitespace-nowrap text-primary-foreground transition hover:brightness-110 active:translate-y-px"
            >
              Browse components <ArrowRightIcon />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
