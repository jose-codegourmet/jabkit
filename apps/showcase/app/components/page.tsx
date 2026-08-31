import Link from "next/link";
import { ScaledFrame } from "../../components/ScaledFrame";
import { SiteHeader } from "../../components/SiteHeader";
import { registryIndex } from "../../lib/registry";

export default async function ComponentsPage({
  searchParams,
}: {
  searchParams: Promise<{
    q?: string;
    category?: string;
    tag?: string | string[];
    sort?: string;
    dependency?: string;
  }>;
}) {
  const query = await searchParams;
  const tags = query.tag
    ? Array.isArray(query.tag)
      ? query.tag
      : [query.tag]
    : [];
  const allItems = await registryIndex();
  const items = allItems
    .filter(
      (item) =>
        (!query.category || item.category === query.category) &&
        (!tags.length || tags.every((tag) => item.tags.includes(tag))) &&
        (query.dependency !== "zero" || item.dependencies.length === 0) &&
        (!query.q ||
          `${item.name} ${item.displayName} ${item.description} ${item.tags.join(" ")}`
            .toLowerCase()
            .includes(query.q.toLowerCase())),
    )
    .sort((a, b) =>
      query.sort === "name"
        ? a.displayName.localeCompare(b.displayName)
        : query.sort === "newest"
          ? b.addedAt.localeCompare(a.addedAt)
          : 0,
    );
  const tagCounts = new Map<string, number>();
  for (const item of allItems)
    for (const tag of item.tags)
      tagCounts.set(tag, (tagCounts.get(tag) ?? 0) + 1);
  return (
    <>
      <SiteHeader />
      <main className="min-h-[calc(100dvh-68px)] lg:flex">
        <aside className="border-b border-border p-6 lg:sticky lg:top-[68px] lg:h-[calc(100dvh-68px)] lg:w-[278px] lg:shrink-0 lg:border-b-0 lg:border-r">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Back home
          </Link>
          <h1 className="mt-8 text-xl font-semibold tracking-tight">
            Components
          </h1>
          <form className="mt-6">
            <label
              className="font-mono text-xs text-muted-foreground"
              htmlFor="q"
            >
              Search
            </label>
            <input
              id="q"
              name="q"
              defaultValue={query.q}
              placeholder="Try ‘button’ or ‘form’"
              className="mt-2 h-10 w-full rounded-[--radius] border border-border bg-card px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </form>
          <nav className="mt-8 space-y-1 text-sm">
            <p className="mb-2 font-mono text-xs text-muted-foreground">
              Category
            </p>
            {["all", "atoms", "marketing", "dashboard"].map((category) => (
              <Link
                key={category}
                href={
                  category === "all"
                    ? "/components"
                    : `/components?category=${category}`
                }
                className={`block rounded-md px-3 py-2 capitalize hover:bg-accent ${query.category === category ? "bg-accent font-medium" : "text-muted-foreground"}`}
              >
                {category}
              </Link>
            ))}
          </nav>
          <div className="mt-8 space-y-3 text-sm">
            <p className="font-mono text-xs text-muted-foreground">Sort</p>
            {[
              ["", "Recommended"],
              ["newest", "Newest"],
              ["name", "Name A–Z"],
            ].map(([value, label]) => (
              <Link
                key={value}
                href={`/components?${new URLSearchParams({ ...(query.q ? { q: query.q } : {}), ...(value ? { sort: value } : {}) }).toString()}`}
                className="block text-muted-foreground hover:text-foreground"
              >
                {label}
              </Link>
            ))}
            <p className="pt-3 font-mono text-xs text-muted-foreground">Tags</p>
            {[...tagCounts.entries()].slice(0, 8).map(([tag, count]) => (
              <Link
                key={tag}
                href={`/components?tag=${encodeURIComponent(tag)}`}
                className="flex justify-between text-muted-foreground hover:text-foreground"
              >
                <span>#{tag}</span>
                <span>{count}</span>
              </Link>
            ))}
          </div>
        </aside>
        <section className="min-w-0 flex-1">
          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {items.map((item) => (
              <Link
                key={item.name}
                href={`/${item.category}/${item.name}`}
                className="group bg-background p-4 focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <div className="aspect-[16/10] overflow-hidden rounded-[--radius] border border-border bg-card">
                  {item.preview?.layout === "fit" ? (
                    <ScaledFrame
                      src={`/preview/${item.name}/Default`}
                      title={`${item.displayName} preview`}
                      viewportWidth={item.preview.width ?? 1440}
                      viewportHeight={item.preview.height ?? 900}
                    />
                  ) : (
                    <iframe
                      title={`${item.displayName} preview`}
                      aria-hidden="true"
                      className="h-full w-full scale-[1.01] border-0"
                      src={`/preview/${item.name}/Default`}
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="pt-4">
                  <p className="font-mono text-[11px] text-primary uppercase">
                    {item.category}
                  </p>
                  <h2 className="mt-1 font-medium group-hover:text-primary">
                    {item.displayName}
                  </h2>
                  <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
            {items.length === 0 && (
              <div className="col-span-full grid min-h-80 place-items-center p-8 text-center">
                <div>
                  <h2 className="font-medium">No components found</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Try clearing the search or choosing another category.
                  </p>
                  <Link
                    href="/components"
                    className="mt-4 inline-block text-sm text-primary hover:underline"
                  >
                    Clear filters
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
