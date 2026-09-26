import { Cross2Icon } from "@radix-ui/react-icons";
import type { Route } from "next";
import Link from "next/link";
import { CatalogueCard } from "../../components/CatalogueCard";
import { CatalogueFilters } from "../../components/CatalogueFilters";
import { PreviewImage } from "../../components/PreviewImage";
import { SiteShell } from "../../components/SiteShell";
import { catalogueGroups, itemKind } from "../../lib/catalogue-groups";
import { registryIndex } from "../../lib/registry";

type CatalogueQuery = {
  q?: string;
  category?: string;
  tag?: string | string[];
  sort?: string;
  dependency?: string;
  kind?: string;
  group?: string;
  page?: string;
};

const sortLabels: Record<string, string> = {
  newest: "Newest",
  name: "Name A–Z",
};

export default async function ComponentsPage({
  searchParams,
}: {
  searchParams: Promise<CatalogueQuery>;
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
        : query.category
          ? query.category[0].toUpperCase() + query.category.slice(1)
          : "Everything");

  const hrefWith = (
    changes: Partial<Omit<CatalogueQuery, "tag">> & { tag?: string[] },
  ): Route => {
    const next = { ...query, tag: tags, page: undefined, ...changes };
    const params = new URLSearchParams();
    if (next.q) params.set("q", next.q);
    if (next.category) params.set("category", next.category);
    for (const tag of next.tag ?? []) params.append("tag", tag);
    if (next.sort) params.set("sort", next.sort);
    if (next.dependency) params.set("dependency", next.dependency);
    if (next.kind) params.set("kind", next.kind);
    if (next.group) params.set("group", next.group);
    if (next.page && next.page !== "1") params.set("page", next.page);
    const search = params.toString();
    return (search ? `/components?${search}` : "/components") as Route;
  };
  const paginationHref = (page: number) => hrefWith({ page: String(page) });

  const activeFilters: Array<{ label: string; href: Route }> = [
    ...(query.q ? [{ label: `q: ${query.q}`, href: hrefWith({ q: "" }) }] : []),
    ...(query.category
      ? [{ label: query.category, href: hrefWith({ category: "" }) }]
      : []),
    ...(activeGroup
      ? [{ label: activeGroup.label, href: hrefWith({ group: "" }) }]
      : query.kind
        ? [
            {
              label: query.kind === "block" ? "Blocks" : "Components",
              href: hrefWith({ kind: "" }),
            },
          ]
        : []),
    ...tags.map((tag) => ({
      label: `#${tag}`,
      href: hrefWith({ tag: tags.filter((item) => item !== tag) }),
    })),
    ...(query.dependency === "zero"
      ? [{ label: "Zero deps", href: hrefWith({ dependency: "" }) }]
      : []),
    ...(query.sort && sortLabels[query.sort]
      ? [{ label: sortLabels[query.sort], href: hrefWith({ sort: "" }) }]
      : []),
  ];

  return (
    <SiteShell>
      <main className="min-h-[calc(100dvh-90px)] desk:flex">
        <CatalogueFilters
          current={{
            q: query.q,
            kind: query.kind,
            group: query.group,
            sort: query.sort,
          }}
          groups={groups}
          resultCount={filteredItems.length}
          activeCount={activeFilters.length}
        />
        <section className="min-w-0 flex-1">
          <div className="flex items-end justify-between gap-4 border-b-2 border-ink px-5 py-5 tab:px-6">
            <div>
              <p className="font-mono text-xs text-muted-foreground">
                {query.kind === "block"
                  ? "Reusable sections"
                  : query.kind === "component"
                    ? "Interface primitives"
                    : "Component catalogue"}
              </p>
              <h2 className="mt-1 font-display text-2xl">{title}</h2>
            </div>
            <p className="shrink-0 font-mono text-xs text-muted-foreground">
              {filteredItems.length === 0
                ? "0 results"
                : `${(currentPage - 1) * pageSize + 1}–${Math.min(currentPage * pageSize, filteredItems.length)} of ${filteredItems.length}`}
            </p>
          </div>
          {activeFilters.length > 0 ? (
            <div className="flex flex-wrap items-center gap-2 border-b-2 border-ink px-5 py-3 tab:px-6">
              {activeFilters.map((filter) => (
                <Link
                  key={filter.label}
                  href={filter.href}
                  aria-label={`Remove filter ${filter.label}`}
                  data-active="true"
                  className="vd-chip min-h-[30px] text-xs"
                >
                  {filter.label}
                  <Cross2Icon aria-hidden className="opacity-70" />
                </Link>
              ))}
              <Link
                href="/components"
                className="ml-1 text-[13px] text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
              >
                Clear all
              </Link>
            </div>
          ) : null}
          <div className="grid gap-px bg-ink tab:grid-cols-2 desk:grid-cols-3 2xl:grid-cols-4">
            {items.map((item) => (
              <div key={item.name} className="bg-background p-4">
                <CatalogueCard
                  name={item.name}
                  href={`/${item.category}/${item.name}` as Route}
                  displayName={item.displayName}
                  kind={itemKind(item)}
                  description={item.description}
                  preview={
                    <PreviewImage
                      name={item.name}
                      displayName={item.displayName}
                    />
                  }
                />
              </div>
            ))}
            {items.length === 0 && (
              <div className="col-span-full grid min-h-80 place-items-center bg-background p-8 text-center">
                <div>
                  <h2 className="font-display text-2xl">No components found</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Try another search or return to the full library.
                  </p>
                  <Link href="/components" className="vd-btn vd-btn-sm mt-5">
                    Clear filters
                  </Link>
                </div>
              </div>
            )}
          </div>
          {totalPages > 1 ? (
            <nav
              aria-label="Catalogue pagination"
              className="flex items-center justify-between gap-4 border-t-2 border-ink px-5 py-4 tab:px-6"
            >
              {currentPage > 1 ? (
                <Link
                  href={paginationHref(currentPage - 1)}
                  className="vd-btn vd-btn-sm"
                >
                  Previous
                </Link>
              ) : (
                <span aria-disabled="true" className="vd-btn vd-btn-sm">
                  Previous
                </span>
              )}
              <p className="font-mono text-xs text-muted-foreground">
                Page {currentPage} of {totalPages}
              </p>
              {currentPage < totalPages ? (
                <Link
                  href={paginationHref(currentPage + 1)}
                  className="vd-btn vd-btn-sm"
                >
                  Next
                </Link>
              ) : (
                <span aria-disabled="true" className="vd-btn vd-btn-sm">
                  Next
                </span>
              )}
            </nav>
          ) : null}
        </section>
      </main>
    </SiteShell>
  );
}
