"use client";

import { useEffect, useId, useState } from "react";
import { Badge } from "@/atoms/badge";
import { Button } from "@/atoms/button";
import { Separator } from "@/atoms/separator";
import { cn } from "@/lib/cn";
import type {
  Content3Action,
  Content3Alert,
  Content3Block,
  Content3Breadcrumb,
  Content3Figure,
  Content3Props,
  Content3Section,
  Content3Table,
} from "./Content3.types";

const defaultBreadcrumbs: Content3Breadcrumb[] = [
  { label: "Guides", href: "#guides" },
  { label: "Launch", href: "#launch" },
  { label: "Review room" },
];

const defaultPrimary: Content3Action = {
  label: "Share guide",
  href: "#share",
};

const defaultSecondary: Content3Action = {
  label: "Copy outline",
  href: "#outline",
};

const defaultSections: Content3Section[] = [
  {
    id: "owners",
    title: "Who owns the room",
    blocks: [
      {
        type: "paragraph",
        text: "A launch review is a decision, not a readout. One facilitator holds the agenda. Product owns the demo. Ops owns the risks. Everyone else comes to ask or to decide.",
      },
      {
        type: "list",
        items: [
          "Facilitator sets time boxes and keeps the wall honest.",
          "Product shows the live path, not a slide recreation.",
          "Ops names the single risk that would stop the ship.",
        ],
      },
    ],
  },
  {
    id: "wall",
    title: "What to put on the wall",
    blocks: [
      {
        type: "paragraph",
        text: "The wall is three artifacts: the customer path, the metric that moved, and the open questions. If it is not on the wall, it is not in the review.",
      },
      {
        type: "figure",
        figure: {
          src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&h=1000&q=80",
          alt: "Team reviewing work together around a table",
          caption: "Keep the demo on one screen the whole room can see.",
        },
      },
      {
        type: "heading",
        text: "A short checklist before you start",
      },
      {
        type: "paragraph",
        text: "Confirm the build is the one in production intent. Confirm the metric is from the same window as the story. Confirm the decision you need is written as a yes or no.",
      },
    ],
  },
  {
    id: "table",
    title: "The review table",
    blocks: [
      {
        type: "paragraph",
        text: "Roles stay stable so the room does not renegotiate process every week. Use this grid as the seating chart, then stop adding columns.",
      },
      {
        type: "table",
        table: {
          caption: "Who shows what",
          columns: ["Role", "Owns", "Brings"],
          rows: [
            ["Facilitator", "Agenda and time", "Decision prompt"],
            ["Product", "Customer path", "Live demo"],
            ["Ops", "Risks and follow-ups", "Single blocker"],
            ["Design", "Clarity of the path", "One annotated screen"],
          ],
        },
      },
      {
        type: "alert",
        alert: {
          title: "Keep the dump off the table",
          description:
            "If a number is not on the wall, it is not in the review. Extra slides wait until after the decision is recorded.",
        },
      },
    ],
  },
  {
    id: "after",
    title: "After the call",
    blocks: [
      {
        type: "paragraph",
        text: "Write the decision in one sentence before people leave. Assign one owner per follow-up. The next review starts from that note, not from memory.",
      },
      {
        type: "list",
        items: [
          "Publish the decision in the same channel as the invite.",
          "Close or date every follow-up before the next standup.",
          "Archive the wall so the next crew inherits the same shape.",
        ],
      },
    ],
  },
];

function Chevron({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className={cn("size-3.5", className)}
      fill="none"
    >
      <path
        d="M6 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeadlineAction({
  action,
  variant,
}: {
  action: Content3Action;
  variant: "primary" | "secondary";
}) {
  if (action.href) {
    return (
      <Button variant={variant} size="sm" asChild>
        <a href={action.href}>{action.label}</a>
      </Button>
    );
  }
  return (
    <Button variant={variant} size="sm" onClick={action.onClick}>
      {action.label}
    </Button>
  );
}

function FigureBlock({ figure }: { figure: Content3Figure }) {
  return (
    <figure className="overflow-hidden rounded-[--radius] border border-border bg-muted">
      <img
        src={figure.src}
        alt={figure.alt}
        className="aspect-[16/10] w-full object-cover"
      />
      {figure.caption ? (
        <figcaption className="border-t border-border px-4 py-3 text-sm text-muted-foreground">
          {figure.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function TableBlock({ table }: { table: Content3Table }) {
  return (
    <div className="overflow-hidden rounded-[--radius] border border-border bg-card">
      {table.caption ? (
        <p className="border-b border-border px-4 py-3 text-sm font-medium text-foreground">
          {table.caption}
        </p>
      ) : null}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[28rem] text-left text-sm">
          <caption className="sr-only">{table.caption ?? "Data table"}</caption>
          <thead className="bg-muted text-muted-foreground">
            <tr>
              {table.columns.map((column) => (
                <th key={column} className="px-4 py-3 font-medium">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr
                key={row.join("-")}
                className="border-t border-border last:border-0"
              >
                {row.map((cell, index) => (
                  <td
                    key={`${row[0]}-${table.columns[index]}`}
                    className={cn(
                      "px-4 py-3 text-muted-foreground",
                      index === 0 && "font-medium text-foreground",
                    )}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AlertBlock({ alert }: { alert: Content3Alert }) {
  return (
    <aside
      className="rounded-[--radius] border border-border bg-muted/60 p-4 sm:p-5"
      role="note"
    >
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="outline">Note</Badge>
        <p className="text-sm font-medium text-foreground">{alert.title}</p>
      </div>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        {alert.description}
      </p>
    </aside>
  );
}

function blockKey(sectionId: string, block: Content3Block) {
  switch (block.type) {
    case "paragraph":
      return `${sectionId}-paragraph-${block.text}`;
    case "heading":
      return `${sectionId}-heading-${block.text}`;
    case "list":
      return `${sectionId}-list-${block.items.join("|")}`;
    case "figure":
      return `${sectionId}-figure-${block.figure.src}`;
    case "table":
      return `${sectionId}-table-${block.table.caption ?? block.table.columns.join("|")}`;
    case "alert":
      return `${sectionId}-alert-${block.alert.title}`;
  }
}

function Block({ block }: { block: Content3Block }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="text-base leading-7 text-muted-foreground sm:text-[1.05rem] sm:leading-8">
          {block.text}
        </p>
      );
    case "heading":
      return (
        <h3 className="text-lg font-semibold tracking-[-0.03em] text-foreground sm:text-xl">
          {block.text}
        </h3>
      );
    case "list":
      return (
        <ul className="grid list-disc gap-2 pl-5 text-base leading-7 text-muted-foreground marker:text-primary sm:leading-8">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "figure":
      return <FigureBlock figure={block.figure} />;
    case "table":
      return <TableBlock table={block.table} />;
    case "alert":
      return <AlertBlock alert={block.alert} />;
  }
}

export function Content3({
  className,
  breadcrumbs = defaultBreadcrumbs,
  title = "How Northline runs a launch review",
  description = "A working guide for operators: who owns the room, what to show, and how to close the loop after the call.",
  primaryAction = defaultPrimary,
  secondaryAction = defaultSecondary,
  topicsLabel = "On this page",
  sections = defaultSections,
  ...props
}: Content3Props) {
  const headingId = useId();
  const instanceId = useId().replace(/:/g, "");
  const sectionDomId = (id: string) => `${instanceId}-${id}`;
  const [activeId, setActiveId] = useState(sections[0]?.id);

  useEffect(() => {
    const idFor = (id: string) => `${instanceId}-${id}`;
    const nodes = sections
      .map((section) => document.getElementById(idFor(section.id)))
      .filter((node): node is HTMLElement => Boolean(node));
    if (!nodes.length) return;

    const ratios = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const sectionId = sections.find(
            (section) => idFor(section.id) === entry.target.id,
          )?.id;
          if (!sectionId) continue;
          ratios.set(
            sectionId,
            entry.isIntersecting ? entry.intersectionRatio : 0,
          );
        }
        let next = sections[0]?.id;
        let best = -1;
        for (const section of sections) {
          const ratio = ratios.get(section.id) ?? 0;
          if (ratio > best) {
            best = ratio;
            next = section.id;
          }
        }
        if (next) setActiveId(next);
      },
      {
        root: null,
        rootMargin: "-18% 0px -62% 0px",
        threshold: [0, 0.2, 0.45, 0.75, 1],
      },
    );

    for (const node of nodes) observer.observe(node);
    return () => observer.disconnect();
  }, [instanceId, sections]);

  return (
    <section
      data-slot="content3"
      aria-labelledby={headingId}
      className={cn("bg-background text-foreground", className)}
      {...props}
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        {breadcrumbs.length ? (
          <nav aria-label="Breadcrumb" className="mb-8 sm:mb-10">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
              {breadcrumbs.map((crumb, index) => {
                const last = index === breadcrumbs.length - 1;
                return (
                  <li
                    key={crumb.href ?? crumb.label}
                    className="flex items-center gap-1.5"
                  >
                    {index > 0 ? <Chevron className="opacity-60" /> : null}
                    {last || !crumb.href ? (
                      <span
                        className={
                          last ? "font-medium text-foreground" : undefined
                        }
                        aria-current={last ? "page" : undefined}
                      >
                        {crumb.label}
                      </span>
                    ) : (
                      <a
                        href={crumb.href}
                        className="underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      >
                        {crumb.label}
                      </a>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        ) : null}

        <header className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h1
              id={headingId}
              className="text-3xl font-semibold tracking-[-0.05em] text-balance sm:text-4xl lg:text-5xl"
            >
              {title}
            </h1>
            {description ? (
              <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                {description}
              </p>
            ) : null}
          </div>
          <div className="flex flex-wrap gap-2">
            {secondaryAction ? (
              <HeadlineAction action={secondaryAction} variant="secondary" />
            ) : null}
            {primaryAction ? (
              <HeadlineAction action={primaryAction} variant="primary" />
            ) : null}
          </div>
        </header>

        <Separator className="my-10 sm:my-12" />

        <div className="grid gap-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-14 xl:grid-cols-[16rem_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-8 lg:self-start">
            <p className="text-sm font-medium text-foreground">{topicsLabel}</p>
            <nav aria-label={topicsLabel} className="mt-4">
              <ul className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
                {sections.map((section) => {
                  const current = section.id === activeId;
                  return (
                    <li key={section.id} className="shrink-0 lg:shrink">
                      <a
                        href={`#${sectionDomId(section.id)}`}
                        aria-current={current ? "location" : undefined}
                        className={cn(
                          "block rounded-[--radius] border px-3 py-2 text-sm transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none lg:border-0 lg:border-l-2 lg:rounded-none lg:px-3 lg:py-1.5",
                          current
                            ? "border-primary bg-muted text-foreground lg:border-primary lg:bg-transparent lg:font-medium"
                            : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground lg:border-transparent lg:hover:border-border",
                        )}
                      >
                        {section.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>

          <article className="flex min-w-0 flex-col gap-14 sm:gap-16">
            {sections.map((section) => (
              <section
                key={section.id}
                id={sectionDomId(section.id)}
                aria-labelledby={`${sectionDomId(section.id)}-title`}
                className="scroll-mt-24"
              >
                <h2
                  id={`${sectionDomId(section.id)}-title`}
                  className="text-2xl font-semibold tracking-[-0.04em] text-balance sm:text-3xl"
                >
                  {section.title}
                </h2>
                <div className="mt-5 flex flex-col gap-5 sm:mt-6 sm:gap-6">
                  {section.blocks.map((block) => (
                    <Block key={blockKey(section.id, block)} block={block} />
                  ))}
                </div>
              </section>
            ))}
          </article>
        </div>
      </div>
    </section>
  );
}
