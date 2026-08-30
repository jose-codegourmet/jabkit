import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ComponentPreview } from "../../../components/ComponentPreview";
import { CopyPromptButton } from "../../../components/CopyPromptButton";
import { SiteHeader } from "../../../components/SiteHeader";
import { SourceViewer } from "../../../components/SourceViewer";
import { registryEntry } from "../../../lib/registry";

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ category: string; name: string }>;
}) {
  const { category, name } = await params;
  const entry = await registryEntry(name);
  if (!entry || entry.category !== category) notFound();
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <Link
          href={`/${category}`}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeftIcon />
          Back to {category}
        </Link>
        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,.55fr)]">
          <div>
            <p className="font-mono text-xs font-medium tracking-[0.16em] text-primary uppercase">
              {entry.category} / {entry.version}
            </p>
            <h1 className="mt-3 text-5xl font-semibold tracking-[-0.06em]">
              {entry.displayName}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              {entry.description}
            </p>
            <div className="mt-8">
              <ComponentPreview name={entry.name} />
            </div>
            <div className="mt-10">
              <h2 className="mb-4 text-xl font-semibold tracking-tight">
                Source
              </h2>
              <SourceViewer files={entry.files} />
            </div>
          </div>
          <aside className="space-y-7 lg:pt-10">
            <CopyPromptButton name={entry.name} />
            <section className="rounded-[--radius] border border-border bg-card p-5">
              <h2 className="font-medium">Dependencies</h2>
              {entry.dependencies.length ? (
                <ul className="mt-4 space-y-2 font-mono text-xs text-muted-foreground">
                  {entry.dependencies.map((dependency) => (
                    <li key={dependency}>{dependency}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-sm text-muted-foreground">
                  No npm dependencies.
                </p>
              )}
            </section>
            <section className="rounded-[--radius] border border-border bg-card p-5">
              <h2 className="font-medium">Examples</h2>
              <div className="mt-4 space-y-3">
                {entry.examples.map((example) => (
                  <div key={example.name} className="rounded-md bg-muted p-3">
                    <p className="font-mono text-xs text-primary">
                      {example.name}
                    </p>
                    <pre className="mt-2 overflow-auto text-xs leading-5 text-muted-foreground">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                ))}
              </div>
            </section>
            {entry.cssVars && (
              <section className="rounded-[--radius] border border-border bg-card p-5">
                <h2 className="font-medium">CSS variables</h2>
                <div className="mt-4 space-y-3 font-mono text-xs">
                  {Object.entries(entry.cssVars.light).map(([key, light]) => (
                    <div key={key}>
                      <p className="text-primary">{key}</p>
                      <p className="mt-1 text-muted-foreground">
                        light: {light}
                      </p>
                      <p className="text-muted-foreground">
                        dark: {entry.cssVars?.dark[key]}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </aside>
        </div>
      </main>
    </>
  );
}
