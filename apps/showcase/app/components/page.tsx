import Link from "next/link";
import type { Route } from "next";
import { CatalogueFilters } from "../../components/CatalogueFilters";
import { PreviewImage } from "../../components/PreviewImage";
import { SiteHeader } from "../../components/SiteHeader";
import { catalogueGroups, itemKind } from "../../lib/catalogue-groups";
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
    kind?: string;
    group?: string;
    page?: string;
  }>;
}) {
  const query = await searchParams;
  const tags = query.tag
    ? Array.isArray(query.tag)
      ? query.tag
      : [query.tag]
    : [];
  const activeGroup = catalogueGroups.find((group) => group.id === query.group);
  const allItems = await registryIndex();
  const filteredItems = allItems
    .filter(
      (item) =>
        (!query.category || item.category === query.category) &&
        (!query.kind || itemKind(item) === query.kind) &&
        (!activeGroup || activeGroup.matches(item)) &&
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
  const pageSize = 24;
  const totalPages = Math.max(1, Math.ceil(filteredItems.length / pageSize));
  const requestedPage = Number.parseInt(query.page ?? "1", 10);
  const currentPage = Math.min(
    totalPages,
    Math.max(1, Number.isNaN(requestedPage) ? 1 : requestedPage),
  );
  const items = filteredItems.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );
  const groups = catalogueGroups.map(({ id, label, kind, matches }) => ({
    id,
    label,
    kind,
    count: allItems.filter(matches).length,
  }));
  const title =
    activeGroup?.label ??
    (query.kind === "component"
      ? "Components"
      : query.kind === "block"
        ? "Blocks"
        : "Everything");
  const paginationHref = (page: number): Route => {
    const params = new URLSearchParams();
    if (query.q) params.set("q", query.q);
    if (query.category) params.set("category", query.category);
    for (const tag of tags) params.append("tag", tag);
    if (query.sort) params.set("sort", query.sort);
    if (query.dependency) params.set("dependency", query.dependency);
    if (query.kind) params.set("kind", query.kind);
    if (query.group) params.set("group", query.group);
    if (page > 1) params.set("page", String(page));
    const search = params.toString();
    return (search ? `/components?${search}` : "/components") as Route;
  };
  return (
    <>
      <SiteHeader />
      <main className="min-h-[calc(100dvh-68px)] lg:flex">
        <CatalogueFilters
          current={{
            q: query.q,
            kind: query.kind,
            group: query.group,
            sort: query.sort,
          }}
          groups={groups}
        />
        <section className="min-w-0 flex-1">
          <div className="flex items-end justify-between gap-4 border-b border-border px-5 py-5 sm:px-6">
            <div>
              <p className="font-mono text-xs text-muted-foreground">
                {query.kind === "block"
                  ? "Reusable sections"
                  : query.kind === "component"
                    ? "Interface primitives"
                    : "Component catalogue"}
              </p>
              <h2 className="mt-1 text-xl font-semibold tracking-tight">
                {title}
              </h2>
            </div>
            <p className="shrink-0 font-mono text-xs text-muted-foreground">
              {filteredItems.length === 0
                ? "0 results"
                : `${(currentPage - 1) * pageSize + 1}-${Math.min(currentPage * pageSize, filteredItems.length)} of ${filteredItems.length}`}
            </p>
          </div>
          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-8">
            {items.map((item) => (
              <Link
                key={item.name}
                href={`/${item.category}/${item.name}`}
                className="group bg-background p-4 focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <div className="aspect-[16/10] overflow-hidden rounded-[--radius] border border-border bg-card">
                  <PreviewImage
                    name={item.name}
                    displayName={item.displayName}
                  />
                </div>
                <div className="pt-4">
                  <p className="font-mono text-[11px] text-primary uppercase">
                    {itemKind(item)}
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
                    Try another search or return to the full library.
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
          {totalPages > 1 ? (
            <nav
              aria-label="Catalogue pagination"
              className="flex items-center justify-between gap-4 border-t border-border bg-background px-5 py-4 sm:px-6"
            >
              {currentPage > 1 ? (
                <Link
                  href={paginationHref(currentPage - 1)}
                  className="inline-flex min-h-10 items-center rounded-[--radius] border border-border px-3 text-sm font-medium hover:bg-accent"
                >
                  Previous
                </Link>
              ) : (
                <span className="inline-flex min-h-10 items-center rounded-[--radius] border border-border px-3 text-sm text-muted-foreground opacity-50">
                  Previous
                </span>
              )}
              <p className="font-mono text-xs text-muted-foreground">
                Page {currentPage} of {totalPages}
              </p>
              {currentPage < totalPages ? (
                <Link
                  href={paginationHref(currentPage + 1)}
                  className="inline-flex min-h-10 items-center rounded-[--radius] border border-border px-3 text-sm font-medium hover:bg-accent"
                >
                  Next
                </Link>
              ) : (
                <span className="inline-flex min-h-10 items-center rounded-[--radius] border border-border px-3 text-sm text-muted-foreground opacity-50">
                  Next
                </span>
              )}
            </nav>
          ) : null}
        </section>
      </main>
    </>
  );
}
