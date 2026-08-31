import { CheckIcon, Cross2Icon } from "@radix-ui/react-icons";
import type { ReactNode } from "react";
import type { RegistryEntry } from "../lib/registry";

function Flag({ ok }: { ok: boolean }) {
  return ok ? (
    <span className="inline-flex items-center gap-1.5 text-foreground">
      <CheckIcon className="size-3.5 text-primary" />
      Yes
    </span>
  ) : (
    <span className="inline-flex items-center gap-1.5 text-muted-foreground">
      <Cross2Icon className="size-3.5" />
      No
    </span>
  );
}

export function ComponentData({
  entry,
}: {
  entry: Pick<
    RegistryEntry,
    "name" | "category" | "version" | "addedAt" | "a11y" | "tags"
  >;
}) {
  const type = entry.category === "atoms" ? "component" : "block";
  const rows: Array<{ label: string; value: ReactNode }> = [
    {
      label: "ID",
      value: <span className="font-mono">{entry.name}</span>,
    },
    {
      label: "Category",
      value: entry.category,
    },
    {
      label: "Version",
      value: entry.version,
    },
    {
      label: "Added",
      value: entry.addedAt,
    },
    {
      label: "Type",
      value: type,
    },
    {
      label: "Keyboard nav",
      value: <Flag ok={entry.a11y.keyboardNav} />,
    },
    {
      label: "Reduced motion",
      value: <Flag ok={entry.a11y.reducedMotion} />,
    },
  ];

  return (
    <section className="rounded-[--radius] border border-border bg-card p-5">
      <h2 className="font-medium">Component Data</h2>
      <dl className="mt-4 space-y-3 text-sm">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex items-baseline justify-between gap-4"
          >
            <dt className="text-muted-foreground">{row.label}</dt>
            <dd className="text-right text-foreground">{row.value}</dd>
          </div>
        ))}
      </dl>
      {entry.tags.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
          {entry.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-accent px-2.5 py-1 font-mono text-[11px] text-accent-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </section>
  );
}
