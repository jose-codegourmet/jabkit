import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "../../components/SiteHeader";
import { registryIndex } from "../../lib/registry";

const validCategories = ["atoms", "marketing", "dashboard"] as const;
export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  if (!validCategories.includes(category as (typeof validCategories)[number]))
    notFound();
  const entries = (await registryIndex()).filter(
    (entry) => entry.category === category,
  );
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
        <p className="font-mono text-xs font-medium tracking-[0.16em] text-primary uppercase">
          JabKit catalogue
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.06em] capitalize">
          {category}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
          {category === "atoms"
            ? "Small, reliable building blocks with no domain opinion."
            : category === "marketing"
              ? "Landing-page sections designed to make a clear case."
              : "Product interface blocks made for applications behind a login."}
        </p>
        <div className="mt-14 grid gap-3">
          {entries.map((entry) => (
            <Link
              key={entry.name}
              href={`/${entry.category}/${entry.name}`}
              className="group rounded-[--radius] border border-border bg-card p-6 transition hover:border-primary"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h2 className="text-xl font-semibold tracking-tight">
                    {entry.displayName}
                  </h2>
                  <p className="mt-2 max-w-2xl leading-7 text-muted-foreground">
                    {entry.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-accent px-2.5 py-1 font-mono text-[11px] text-accent-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <ArrowRightIcon className="mt-1 shrink-0 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" />
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
