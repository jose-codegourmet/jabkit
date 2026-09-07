"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { cn } from "@/lib/cn";
import type {
  StoryScrollChapter,
  StoryScrollProps,
  StoryScrollTone,
} from "./StoryScroll.types";

const DEFAULT_CHAPTERS: StoryScrollChapter[] = [
  {
    id: "who",
    kicker: "01 Who we are",
    headline: "Create\nWithout\nLimits",
    body: "A press for people who make pictures, type, and objects. No feed ranking the work. Just the page and the hands that filled it.",
    tone: "primary",
  },
  {
    id: "mission",
    kicker: "02 The mission",
    headline: "Art\nFirst\nAlways",
    body: "A studio network built for makers, by makers. We change how work is seen, shared, and paid.",
    points: [
      {
        title: "Discovery",
        body: "Human-curated rooms. Real eyes on real work, not a ranking that buries it.",
      },
      {
        title: "Community",
        body: "Collaborators, editors, and peers who push the next piece instead of the next post.",
      },
      {
        title: "Value",
        body: "Clear pricing. Named fees. Makers keep what they earn.",
      },
    ],
    closing:
      "Every feature starts with one question: does this serve the maker?",
    closingAlign: "end",
    tone: "inverse",
  },
  {
    id: "join",
    kicker: "03 Join us",
    headline: "Ready\nTo\nBegin?",
    body: "Bring a body of work, or a single sheet. Join the press and help write the next edition.",
    tone: "muted",
  },
];

const TONE_CLASS: Record<StoryScrollTone, string> = {
  surface: "bg-background text-foreground",
  muted: "bg-muted text-foreground",
  card: "bg-card text-card-foreground",
  primary: "bg-primary text-primary-foreground",
  accent: "bg-accent text-accent-foreground",
  inverse: "bg-foreground text-background",
};

function subscribeReducedMotion(onChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

function getReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function useReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    () => false,
  );
}

function HeadlineLines({
  as: Tag,
  id,
  text,
}: {
  as: "h1" | "h2";
  id?: string;
  text: string;
}) {
  const lines = text.split("\n").filter((line) => line.length > 0);
  return (
    <Tag
      className="text-[clamp(2.75rem,9vw,8.5rem)] font-bold leading-[0.88] tracking-tight uppercase"
      id={id}
    >
      {lines.map((line) => (
        <span className="block" key={line}>
          {line}
        </span>
      ))}
    </Tag>
  );
}

function Hairline() {
  return (
    <hr className="my-[clamp(1rem,2vw,1.75rem)] border-0 border-t border-current/35" />
  );
}

function ChapterSheet({
  chapter,
  headingId,
  index,
  reduceMotion,
  sheetRef,
}: {
  chapter: StoryScrollChapter;
  headingId?: string;
  index: number;
  reduceMotion: boolean;
  sheetRef: (node: HTMLElement | null) => void;
}) {
  const tone = chapter.tone ?? "surface";
  const Heading = index === 0 ? "h1" : "h2";

  return (
    <article
      aria-labelledby={headingId}
      className={cn(
        "jk-story-scroll-chapter relative flex min-h-[100dvh] flex-col overflow-hidden px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14",
        TONE_CLASS[tone],
        reduceMotion ? "static" : "sticky top-0",
      )}
      data-slot="story-scroll-chapter"
      data-tone={tone}
      ref={sheetRef}
      style={reduceMotion ? undefined : { zIndex: index + 1 }}
    >
      {chapter.kicker ? (
        <p className="text-xs font-semibold tracking-[0.2em] uppercase">
          {chapter.kicker}
        </p>
      ) : null}
      <Hairline />
      <HeadlineLines as={Heading} id={headingId} text={chapter.headline} />
      {chapter.body ? (
        <>
          <Hairline />
          <p className="max-w-[50ch] text-[clamp(1rem,2.2vw,1.85rem)] leading-relaxed">
            {chapter.body}
          </p>
        </>
      ) : null}
      {chapter.points && chapter.points.length > 0 ? (
        <>
          <Hairline />
          <ul className="grid gap-x-[3vw] gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {chapter.points.map((point) => (
              <li className="min-w-0" key={point.title}>
                <p className="mb-2 text-sm font-semibold tracking-wider uppercase">
                  {point.title}
                </p>
                <p className="text-[clamp(0.85rem,1.2vw,1.05rem)] leading-relaxed text-current/75">
                  {point.body}
                </p>
              </li>
            ))}
          </ul>
        </>
      ) : null}
      {chapter.closing ? (
        <>
          <Hairline />
          <p
            className={cn(
              "mt-auto max-w-[50ch] text-[clamp(1rem,2.2vw,1.85rem)] leading-relaxed",
              chapter.closingAlign === "end" && "ml-auto text-right",
            )}
          >
            {chapter.closing}
          </p>
        </>
      ) : (
        <div className="mt-auto" />
      )}
    </article>
  );
}

export function StoryScroll({
  className,
  label = "Story",
  chapters,
  ...props
}: StoryScrollProps) {
  const headingId = useId();
  const reduceMotion = useReducedMotion();
  const sheets = chapters && chapters.length > 0 ? chapters : DEFAULT_CHAPTERS;
  const sheetRefs = useRef<Array<HTMLElement | null>>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const nodes = sheets
      .map((_, index) => sheetRefs.current[index])
      .filter((node): node is HTMLElement => Boolean(node));
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const next = nodes.indexOf(visible.target as HTMLElement);
        if (next >= 0) setActive(next);
      },
      { threshold: [0.35, 0.55, 0.75] },
    );

    for (const node of nodes) observer.observe(node);
    return () => observer.disconnect();
  }, [sheets]);

  const goTo = (index: number) => {
    const node = sheetRefs.current[index];
    if (!node) return;
    node.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <section
      aria-label={label}
      className={cn("bg-background text-foreground", className)}
      data-motion={reduceMotion ? "off" : "on"}
      data-slot="story-scroll"
      {...props}
    >
      <style href="jk-story-scroll" precedence="default">{`
        .jk-story-scroll-chapter {
          transform-origin: 50% 0%;
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-story-scroll-chapter {
            animation: jk-story-scroll-pack linear both;
            animation-timeline: view();
            animation-range: exit 0% exit 100%;
          }
        }
        @keyframes jk-story-scroll-pack {
          from { transform: scale(1); }
          to { transform: scale(0.94); }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-story-scroll-chapter {
            animation: none;
            transform: none;
          }
        }
      `}</style>
      <div className="relative">
        {sheets.length > 1 ? (
          <nav
            aria-label="Story chapters"
            className="pointer-events-none absolute inset-y-0 right-3 z-30 hidden w-8 sm:right-5 sm:block"
          >
            <ol className="sticky top-1/2 flex -translate-y-1/2 flex-col items-center gap-2">
              {sheets.map((chapter, index) => (
                <li key={chapter.id}>
                  <button
                    aria-current={index === active ? "true" : undefined}
                    aria-label={
                      chapter.kicker ?? chapter.headline.replace(/\n/g, " ")
                    }
                    className={cn(
                      "pointer-events-auto size-2.5 rounded-full border border-current transition-transform duration-300 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                      index === active
                        ? "scale-125 bg-current"
                        : "bg-transparent opacity-55 hover:opacity-100",
                    )}
                    onClick={() => goTo(index)}
                    type="button"
                  />
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        {sheets.map((chapter, index) => (
          <ChapterSheet
            chapter={chapter}
            headingId={index === 0 ? headingId : `${headingId}-${chapter.id}`}
            index={index}
            key={chapter.id}
            reduceMotion={reduceMotion}
            sheetRef={(node) => {
              sheetRefs.current[index] = node;
            }}
          />
        ))}
      </div>
    </section>
  );
}
