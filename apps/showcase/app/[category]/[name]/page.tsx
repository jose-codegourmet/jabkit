import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ComponentData } from "../../../components/ComponentData";
import { ComponentPreview } from "../../../components/ComponentPreview";
import { CopyPromptButton } from "../../../components/CopyPromptButton";
import { InstallCommand } from "../../../components/InstallCommand";
import { SiteHeader } from "../../../components/SiteHeader";
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
      <main className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground"
        >
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <ChevronRightIcon className="size-3.5 shrink-0 opacity-60" />
          <Link
            href={`/${category}`}
            className="capitalize hover:text-foreground"
          >
            {category}
          </Link>
          <ChevronRightIcon className="size-3.5 shrink-0 opacity-60" />
          <span className="text-foreground">{entry.displayName}</span>
        </nav>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <h1 className="text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">
            {entry.displayName}
          </h1>
          <span className="rounded-full border border-border bg-muted px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
            {entry.version}
          </span>
        </div>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
          {entry.description}
        </p>

        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="min-w-0 flex-1 max-w-3xl">
            <InstallCommand name={entry.name} />
          </div>
          <CopyPromptButton name={entry.name} />
        </div>

        <div className="mt-10">
          <ComponentPreview
            name={entry.name}
            files={entry.files}
            preview={entry.preview}
          />
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ComponentData entry={entry} />
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
                    <p className="mt-1 text-muted-foreground">light: {light}</p>
                    <p className="text-muted-foreground">
                      dark: {entry.cssVars?.dark[key]}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </>
  );
}
