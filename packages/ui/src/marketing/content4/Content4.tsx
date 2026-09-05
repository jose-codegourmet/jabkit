"use client";

import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/atoms/avatar/Avatar";
import { Button } from "@/atoms/button";
import { Separator } from "@/atoms/separator";
import { cn } from "@/lib/cn";
import type {
  Content4Author,
  Content4Block,
  Content4Crumb,
  Content4Props,
} from "./Content4.types";

const defaults = {
  breadcrumbs: [
    { label: "Journal", href: "#journal" },
    { label: "Field notes", href: "#notes" },
    { label: "The launch brief" },
  ] satisfies Content4Crumb[],
  title: "How we write a launch that operators can actually run",
  outlineLabel: "On this page",
  backToTopLabel: "Back to top",
} as const;

const defaultAuthor: Content4Author = {
  name: "Mira Solano",
  role: "Editor, Northline Journal",
  date: "12 March 2026",
  avatarSrc: "/assets/4132445424a19cc6.webp",
  avatarAlt: "Portrait of Mira Solano",
  fallback: "MS",
};

const defaultBlocks: Content4Block[] = [
  {
    type: "paragraph",
    id: "lead",
    text: "A launch brief that lives in a slide deck dies the moment the room stands up. Operators need a page they can open, scan, and run. This is how we write that page so the work stays in view after the meeting ends.",
  },
  {
    type: "heading",
    id: "start-with-the-room",
    title: "Start with the room, not the feature list",
  },
  {
    type: "paragraph",
    id: "room-operators",
    text: "Write the first section for the people who will operate the product on Monday. Name the job, the constraint, and the first action. If a sentence could sit on a pricing page, it does not belong here.",
  },
  {
    type: "paragraph",
    id: "room-opening",
    text: "We keep the opening under a screen of height. Headline, byline, and one paragraph that a new hire can read aloud without stopping. Everything else waits for a heading.",
  },
  {
    type: "image",
    id: "studio-desks",
    src: "/assets/8b10f8ca8e999989.webp",
    alt: "Sunlit studio desks with plants and open notebooks",
    caption: "The brief should look like a room you can walk into.",
  },
  {
    type: "heading",
    id: "outline-as-a-map",
    title: "Treat the outline as a map",
  },
  {
    type: "paragraph",
    id: "outline-titles",
    text: "Section titles are the only navigation most readers will use. Each heading should name a decision, not a theme. If two headings could swap places without anyone noticing, one of them is filler.",
  },
  {
    type: "paragraph",
    id: "outline-contract",
    text: "The table of contents on this page is the same contract. It tracks the heading in view so a returning reader can drop back in without scrolling the whole article again.",
  },
  {
    type: "heading",
    id: "figures-that-earn-space",
    title: "Let figures earn their space",
  },
  {
    type: "paragraph",
    id: "figures-caption",
    text: "Photographs sit inside the column, not as a second story. We caption them when the image needs a fact the picture cannot say. Decorative crops stay out of the article.",
  },
  {
    type: "image",
    id: "desk-charts",
    src: "/assets/1543ba72d246c0c3.webp",
    alt: "Laptop showing charts on a wooden desk",
    caption: "A figure should support a heading, not replace it.",
  },
  {
    type: "heading",
    id: "close-with-a-return",
    title: "Close with a way back to the top",
  },
  {
    type: "paragraph",
    id: "return-exit",
    text: "Long reads need an exit that is not the browser chrome. A control that returns to the header keeps the outline honest: if the page is too long to climb, the outline and the back-to-top control should both be present.",
  },
  {
    type: "paragraph",
    id: "return-fill",
    text: "Fill this template with a dated byline, real section titles, and media sized for inline reading. The layout stays quiet so the words can carry the work.",
  },
];

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className={cn("size-3.5", className)}
      fill="none"
    >
      <path
        d="M6 3.5 10.5 8 6 12.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function ArrowUp({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className={cn("size-4", className)}
      fill="none"
    >
      <path
        d="M8 13V3.5M4 7l4-4 4 4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function prefersReducedMotion() {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function scrollToNode(node: HTMLElement | null) {
  if (!node) return;
  node.scrollIntoView({
    behavior: prefersReducedMotion() ? "auto" : "smooth",
    block: "start",
  });
}

function Outline({
  label,
  items,
  activeId,
  onSelect,
  backToTopLabel,
  onBackToTop,
  compact,
}: {
  label: string;
  items: Array<{ id: string; title: string }>;
  activeId: string | null;
  onSelect: (id: string) => void;
  backToTopLabel: string;
  onBackToTop: () => void;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        compact
          ? "rounded-[--radius] border border-border bg-card p-4"
          : "flex flex-col gap-5",
      )}
    >
      <p className="text-sm font-medium tracking-tight text-foreground">
        {label}
      </p>
      <nav aria-label={label} className={cn(compact ? "mt-3" : "")}>
        <ol className="flex flex-col gap-1">
          {items.map((item) => {
            const current = item.id === activeId;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={current ? "location" : undefined}
                  className={cn(
                    "block rounded-[calc(var(--radius)-0.35rem)] px-2 py-1.5 text-sm leading-6 transition-colors",
                    current
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:bg-accent/60 hover:text-foreground",
                  )}
                  onClick={(event) => {
                    event.preventDefault();
                    onSelect(item.id);
                  }}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ol>
      </nav>
      <Button
        variant="secondary"
        size="sm"
        className={cn("w-full gap-2", compact ? "mt-4" : "")}
        onClick={onBackToTop}
      >
        <ArrowUp />
        {backToTopLabel}
      </Button>
    </div>
  );
}

export function Content4({
  className,
  breadcrumbs = [...defaults.breadcrumbs],
  title = defaults.title,
  author = defaultAuthor,
  outlineLabel = defaults.outlineLabel,
  backToTopLabel = defaults.backToTopLabel,
  blocks = defaultBlocks,
  ...props
}: Content4Props) {
  const headingId = useId();
  const instanceId = useId().replace(/:/g, "");
  const sectionRef = useRef<HTMLElement>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  const outline = useMemo(
    () =>
      blocks
        .filter(
          (block): block is Extract<Content4Block, { type: "heading" }> =>
            block.type === "heading",
        )
        .map((block) => ({
          id: `${instanceId}-${block.id}`,
          title: block.title,
        })),
    [blocks, instanceId],
  );

  const scopedId = useCallback(
    (id: string) => `${instanceId}-${id}`,
    [instanceId],
  );

  useEffect(() => {
    const nodes = outline
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => Boolean(node));
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (left, right) =>
              left.boundingClientRect.top - right.boundingClientRect.top,
          );
        if (visible[0]) {
          setActiveId(visible[0].target.id);
          return;
        }
        const above = nodes.filter(
          (node) => node.getBoundingClientRect().top < 120,
        );
        if (above.length) setActiveId(above[above.length - 1].id);
      },
      { rootMargin: "0px 0px -65% 0px", threshold: [0, 0.25, 1] },
    );

    for (const node of nodes) observer.observe(node);
    setActiveId(nodes[0]?.id ?? null);
    return () => observer.disconnect();
  }, [outline]);

  const handleSelect = (id: string) => {
    scrollToNode(document.getElementById(id));
  };

  const handleBackToTop = () => {
    scrollToNode(sectionRef.current);
  };

  return (
    <section
      ref={sectionRef}
      data-slot="content4"
      aria-labelledby={headingId}
      className={cn("bg-background text-foreground", className)}
      {...props}
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
            {breadcrumbs.map((crumb, index) => {
              const last = index === breadcrumbs.length - 1;
              return (
                <li
                  key={crumb.href ?? crumb.label}
                  className="flex items-center gap-1"
                >
                  {index > 0 ? <ChevronRight className="text-border" /> : null}
                  {last || !crumb.href ? (
                    <span
                      className={cn(
                        last ? "font-medium text-foreground" : undefined,
                      )}
                      aria-current={last ? "page" : undefined}
                    >
                      {crumb.label}
                    </span>
                  ) : (
                    <a
                      href={crumb.href}
                      className="hover:text-foreground focus-visible:rounded-[--radius] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      {crumb.label}
                    </a>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_16.5rem] lg:items-start lg:gap-14 xl:grid-cols-[minmax(0,1fr)_18rem] xl:gap-16">
          <article className="min-w-0">
            <header>
              <h1
                id={headingId}
                className="max-w-3xl text-3xl font-semibold tracking-[-0.05em] text-balance sm:text-4xl lg:text-5xl"
              >
                {title}
              </h1>
              <div className="mt-6 flex items-center gap-3">
                <Avatar size="lg">
                  <AvatarImage src={author.avatarSrc} alt={author.avatarAlt} />
                  <AvatarFallback>{author.fallback}</AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground">
                    {author.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {author.role
                      ? `${author.role} · ${author.date}`
                      : author.date}
                  </p>
                </div>
              </div>
            </header>

            <Separator className="my-8" />

            <div className="lg:hidden">
              <Outline
                compact
                label={outlineLabel}
                items={outline}
                activeId={activeId}
                onSelect={handleSelect}
                backToTopLabel={backToTopLabel}
                onBackToTop={handleBackToTop}
              />
            </div>

            <div className="mt-8 space-y-6 lg:mt-0">
              {blocks.map((block) => {
                if (block.type === "heading") {
                  const id = scopedId(block.id);
                  return (
                    <h2
                      key={id}
                      id={id}
                      className="scroll-mt-24 pt-4 text-2xl font-semibold tracking-[-0.04em] text-balance sm:text-3xl"
                    >
                      {block.title}
                    </h2>
                  );
                }
                if (block.type === "image") {
                  return (
                    <figure key={block.id} className="py-2">
                      <img
                        src={block.src}
                        alt={block.alt}
                        className="aspect-[16/10] w-full rounded-[--radius] border border-border object-cover"
                      />
                      {block.caption ? (
                        <figcaption className="mt-3 text-sm leading-6 text-muted-foreground">
                          {block.caption}
                        </figcaption>
                      ) : null}
                    </figure>
                  );
                }
                return (
                  <p
                    key={block.id}
                    className="max-w-[65ch] text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
                  >
                    {block.text}
                  </p>
                );
              })}
            </div>
          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-8">
              <Outline
                label={outlineLabel}
                items={outline}
                activeId={activeId}
                onSelect={handleSelect}
                backToTopLabel={backToTopLabel}
                onBackToTop={handleBackToTop}
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
