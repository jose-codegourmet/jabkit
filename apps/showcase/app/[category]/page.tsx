import { ChevronRightIcon } from "@radix-ui/react-icons";
import type { Route } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CatalogueCard } from "../../components/CatalogueCard";
import { PreviewImage } from "../../components/PreviewImage";
import { SiteShell } from "../../components/SiteShell";
import { itemKind } from "../../lib/catalogue-groups";
import { registryIndex } from "../../lib/registry";

const validCategories = ["atoms", "marketing", "dashboard"] as const;
type Category = (typeof validCategories)[number];

const categoryCopy: Record<Category, { title: string; description: string }> = {
  atoms: {
    title: "Atoms",
    description: "Small, reliable building blocks with no domain opinion.",
  },
  marketing: {
    title: "Marketing",
    description: "Landing-page sections designed to make a clear case.",
  },
  dashboard: {
    title: "Dashboard",
    description:
      "Product interface blocks made for applications behind a login.",
  },
};

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  if (!validCategories.includes(category as Category)) notFound();
  const index = await registryIndex();
  const entries = index.filter((entry) => entry.category === category);
  const copy = categoryCopy[category as Category];

  return (
    <SiteShell>
      <main className="mx-auto max-w-[1280px] px-5 pt-10 pb-16 tab:px-8">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-sm text-muted-foreground"
        >
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <ChevronRightIcon aria-hidden className="size-3.5 opacity-60" />
          <span className="text-foreground">{copy.title}</span>
        </nav>

        <nav
          aria-label="Categories"
          className="mt-6 flex gap-7 overflow-x-auto border-b-2 border-ink text-[15px]"
        >
          {validCategories.map((id) => {
            const active = id === category;
            const count = index.filter((entry) => entry.category === id).length;
            return (
              <Link
                key={id}
                href={`/${id}` as Route}
                aria-current={active ? "page" : undefined}
                className={`-mb-0.5 shrink-0 border-b-3 pb-3 ${
                  active
                    ? "border-tomato font-semibold text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {categoryCopy[id].title}{" "}
                <span className="font-mono text-xs">{count}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <div>
            <h1 className="vd-h1 desk:text-[44px]">{copy.title}</h1>
            <p className="mt-3 max-w-[44rem] text-[17px] leading-7 text-muted-foreground">
              {copy.description}
            </p>
          </div>
          <Link
            href={`/components?category=${category}` as Route}
            className="vd-btn vd-btn-sm"
          >
            Filter in catalogue →
          </Link>
        </div>

        <div className="mt-8 grid gap-5 tab:grid-cols-2 desk:grid-cols-4">
          {entries.map((entry) => (
            <CatalogueCard
              key={entry.name}
              name={entry.name}
              href={`/${entry.category}/${entry.name}` as Route}
              displayName={entry.displayName}
              kind={itemKind(entry)}
              description={entry.description}
              compact
              preview={
                <PreviewImage
                  name={entry.name}
                  displayName={entry.displayName}
                />
              }
            />
          ))}
        </div>
      </main>
    </SiteShell>
  );
}
