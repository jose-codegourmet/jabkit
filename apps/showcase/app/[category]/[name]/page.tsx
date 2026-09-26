import { ChevronRightIcon } from "@radix-ui/react-icons";
import type { Route } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ComponentData } from "../../../components/ComponentData";
import { ComponentPreview } from "../../../components/ComponentPreview";
import { CopyPromptButton } from "../../../components/CopyPromptButton";
import { InstallPanel } from "../../../components/InstallPanel";
import { PreviewImage } from "../../../components/PreviewImage";
import { SiteShell } from "../../../components/SiteShell";
import { registryEntry, registryIndex } from "../../../lib/registry";

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ category: string; name: string }>;
}) {
  const { category, name } = await params;
  const entry = await registryEntry(name);
  if (!entry || entry.category !== category) notFound();

  const siblings = (await registryIndex()).filter(
    (item) => item.category === category,
  );
  const position = siblings.findIndex((item) => item.name === entry.name);
  const previous = position > 0 ? siblings[position - 1] : undefined;
  const next =
    position >= 0 && position < siblings.length - 1
      ? siblings[position + 1]
      : undefined;
  const related = [
    ...siblings.filter(
      (item) =>
        item.name !== entry.name &&
        entry.sectionCategory &&
        item.sectionCategory === entry.sectionCategory,
    ),
    ...siblings.filter(
      (item) =>
        item.name !== entry.name &&
        entry.tags.some((tag) => item.tags.includes(tag)),
    ),
  ]
    .filter(
      (item, index, list) =>
        list.findIndex((other) => other.name === item.name) === index,
    )
    .slice(0, 2);
  const categoryLabel = category[0].toUpperCase() + category.slice(1);

  return (
    <SiteShell>
      <main className="mx-auto max-w-[1280px] px-5 pt-10 pb-4 tab:px-8">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground"
        >
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <ChevronRightIcon aria-hidden className="size-3.5 opacity-60" />
          <Link
            href={`/${category}` as Route}
            className="hover:text-foreground"
          >
            {categoryLabel}
          </Link>
          <ChevronRightIcon aria-hidden className="size-3.5 opacity-60" />
          <span className="text-foreground">{entry.displayName}</span>
        </nav>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <h1 className="vd-h1 desk:text-5xl">{entry.displayName}</h1>
          <span className="rounded-full border-2 border-ink bg-muted px-2.5 py-0.5 font-mono text-[11px]">
            {entry.version}
          </span>
        </div>
        <p className="mt-3.5 max-w-[46rem] text-lg leading-[30px] text-muted-foreground">
          {entry.description}
        </p>

        <div className="mt-7 grid items-start gap-6 desk:grid-cols-[minmax(0,1fr)_320px]">
          <ComponentPreview
            name={entry.name}
            files={entry.files}
            preview={entry.preview}
          />
          <aside className="flex flex-col gap-4 desk:sticky desk:top-24">
            <InstallPanel name={entry.name} />
            <section className="vd-card flex flex-col gap-2.5 p-4">
              <h2 className="font-semibold">Hand off to an agent</h2>
              <CopyPromptButton name={entry.name} />
            </section>
          </aside>
        </div>

        <div className="mt-8 grid gap-4 tab:grid-cols-2 desk:grid-cols-4">
          <ComponentData entry={entry} />
          <section className="vd-card p-5">
            <h2 className="font-display text-lg">Dependencies</h2>
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
            {entry.registryDependencies.length ? (
              <>
                <h3 className="mt-5 font-mono text-xs text-muted-foreground">
                  Registry
                </h3>
                <ul className="mt-2 space-y-2 font-mono text-xs">
                  {entry.registryDependencies.map((dependency) => (
                    <li key={dependency}>{dependency}</li>
                  ))}
                </ul>
              </>
            ) : null}
          </section>
          <section className="vd-card p-5">
            <h2 className="font-display text-lg">Examples</h2>
            <div className="mt-4 space-y-3">
              {entry.examples.map((example) => (
                <div key={example.name}>
                  <p className="vd-script text-base">{example.name}</p>
                  <pre className="vd-code mt-1 overflow-auto px-3 py-2.5 text-xs leading-5">
                    <code>{example.code}</code>
                  </pre>
                </div>
              ))}
            </div>
          </section>
          <section className="vd-card p-5">
            <h2 className="font-display text-lg">Related</h2>
            {related.length ? (
              <ul className="mt-4 grid grid-cols-2 gap-2">
                {related.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={`/${item.category}/${item.name}` as Route}
                      className="group block"
                    >
                      <span className="block aspect-[16/10] overflow-hidden rounded-lg border-2 border-ink">
                        <PreviewImage
                          name={item.name}
                          displayName={item.displayName}
                        />
                      </span>
                      <span className="mt-1.5 block truncate text-xs group-hover:text-tomato-text">
                        {item.displayName}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-sm text-muted-foreground">
                Nothing close yet.
              </p>
            )}
          </section>
          {entry.cssVars && (
            <section className="vd-card p-5">
              <h2 className="font-display text-lg">CSS variables</h2>
              <div className="mt-4 space-y-3 font-mono text-xs">
                {Object.entries(entry.cssVars.light).map(([key, light]) => (
                  <div key={key}>
                    <p className="text-tomato-text">{key}</p>
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

        <nav
          aria-label={`${categoryLabel} components`}
          className="mt-10 grid grid-cols-[1fr_auto_1fr] items-center gap-4 border-t-2 border-ink py-5 text-sm"
        >
          {previous ? (
            <Link
              href={`/${previous.category}/${previous.name}` as Route}
              className="flex flex-col hover:text-tomato-text"
            >
              <span className="text-xs text-muted-foreground">← Previous</span>
              <span className="font-semibold">{previous.displayName}</span>
            </Link>
          ) : (
            <span />
          )}
          <span className="font-mono text-xs text-muted-foreground">
            {position + 1} of {siblings.length} in {categoryLabel}
          </span>
          {next ? (
            <Link
              href={`/${next.category}/${next.name}` as Route}
              className="flex flex-col text-right hover:text-tomato-text"
            >
              <span className="text-xs text-muted-foreground">Next →</span>
              <span className="font-semibold">{next.displayName}</span>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </main>
    </SiteShell>
  );
}
