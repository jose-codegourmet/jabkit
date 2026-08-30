import {
  ArrowRightIcon,
  CodeIcon,
  LightningBoltIcon,
  MixIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { registryIndex } from "../lib/registry";

const principles = [
  {
    Icon: CodeIcon,
    title: "Source, not a dependency",
    copy: "Copy the files. Keep the code. Shape it around your product.",
  },
  {
    Icon: MixIcon,
    title: "Findable by intent",
    copy: "Metadata makes a good component discoverable before its name is known.",
  },
  {
    Icon: LightningBoltIcon,
    title: "AI-ready from the start",
    copy: "A registry, MCP tools, and CLI give agents a dependable handoff.",
  },
];

export default async function Home() {
  const components = await registryIndex().catch(() => []);
  return (
    <>
      <SiteHeader />
      <main>
        <section className="grid-lines overflow-hidden border-b border-border">
          <div className="mx-auto grid min-h-[calc(100dvh-68px)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
            <div className="reveal">
              <p className="mb-5 font-mono text-xs font-medium tracking-[0.16em] text-primary uppercase">
                Source-owned UI
              </p>
              <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.065em] text-balance sm:text-6xl lg:text-7xl">
                Components that leave the nest with you.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                JabKit is a component library built for the way teams actually
                ship today: by describing what they need, then owning every
                line.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/atoms"
                  className="inline-flex h-12 items-center gap-2 rounded-[--radius] bg-primary px-5 text-sm font-medium text-primary-foreground transition hover:brightness-110 active:translate-y-px"
                >
                  Browse components <ArrowRightIcon />
                </Link>
                <a
                  href="#how-it-works"
                  className="inline-flex h-12 items-center rounded-[--radius] border border-border bg-card px-5 text-sm font-medium transition hover:bg-accent active:translate-y-px"
                >
                  See the loop
                </a>
              </div>
            </div>
            <div className="reveal relative [animation-delay:120ms]">
              <div className="absolute -inset-5 -z-10 rounded-full bg-primary/10 blur-3xl" />
              <div className="overflow-hidden rounded-[--radius] border border-border bg-card shadow-[0_24px_70px_-38px_color-mix(in_oklab,var(--jk-foreground),transparent_50%)]">
                <div className="flex items-center gap-2 border-b border-border px-5 py-4">
                  <span className="size-2 rounded-full bg-primary" />
                  <span className="font-mono text-xs text-muted-foreground">
                    your-project
                  </span>
                </div>
                <pre className="overflow-x-auto p-6 font-mono text-sm leading-7 text-muted-foreground">
                  <code>
                    <span className="text-primary">$</span> pnpm dlx jabkit add
                    button{`\n\n`}
                    <span className="text-foreground">✓</span>{" "}
                    <span className="text-foreground">button</span> copied to
                    src/components/jabkit{`\n`}
                    <span className="text-foreground">✓</span> token variables
                    registered{`\n`}
                    <span className="text-foreground">✓</span>{" "}
                    @radix-ui/react-slot installed{`\n\n`}
                    <span className="text-primary">$</span>{" "}
                    <span className="animate-pulse">_</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>
        <section
          id="how-it-works"
          className="mx-auto max-w-7xl px-5 py-24 sm:px-8"
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
              A short path from idea to code.
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              The catalogue is designed as a working interface for people and
              agents, not a gallery that ends at the browser.
            </p>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.35fr_1fr]">
            {principles.map(({ Icon, title, copy }, index) => (
              <article
                key={title}
                className={`rounded-[--radius] border border-border p-6 ${index === 1 ? "bg-primary text-primary-foreground" : "bg-card"}`}
              >
                <Icon
                  className={
                    index === 1 ? "text-primary-foreground" : "text-primary"
                  }
                  width={24}
                  height={24}
                />
                <h3 className="mt-14 text-xl font-semibold tracking-tight">
                  {title}
                </h3>
                <p
                  className={`mt-3 leading-7 ${index === 1 ? "text-primary-foreground/75" : "text-muted-foreground"}`}
                >
                  {copy}
                </p>
              </article>
            ))}
          </div>
        </section>
        <section className="border-y border-border bg-card">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-mono text-xs font-medium tracking-[0.16em] text-primary uppercase">
                  Catalogue
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em]">
                  Start with a dependable atom.
                </h2>
              </div>
              <Link
                href="/atoms"
                className="text-sm font-medium text-primary hover:underline"
              >
                See all components
              </Link>
            </div>
            <div className="mt-9 grid gap-3">
              {components.slice(0, 3).map((component) => (
                <Link
                  key={component.name}
                  href={`/${component.category}/${component.name}`}
                  className="group grid gap-4 rounded-[--radius] border border-border bg-background p-5 transition hover:border-primary sm:grid-cols-[180px_1fr_auto] sm:items-center"
                >
                  <span className="font-mono text-sm text-primary">
                    {component.category}
                  </span>
                  <span>
                    <strong className="block font-medium">
                      {component.displayName}
                    </strong>
                    <span className="mt-1 block text-sm text-muted-foreground">
                      {component.description}
                    </span>
                  </span>
                  <ArrowRightIcon className="text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
