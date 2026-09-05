import { useId } from "react";
import { Badge } from "@/atoms/badge";
import { Separator } from "@/atoms/separator";
import { cn } from "@/lib/cn";
import type {
  About11Honor,
  About11Logo,
  About11Member,
  About11Motivation,
  About11ProcessStep,
  About11Props,
  About11Quote,
} from "./About11.types";

const DEFAULT_KICKER = "Studio";
const DEFAULT_TITLE = "About us";
const DEFAULT_DESCRIPTION =
  "We are a small studio that treats every brief like a room that has to feel finished. Photography, type, and product sit on the same desk so the work arrives as one piece, not a pile of parts.";
const DEFAULT_STUDIO_NOTE =
  "Three makers. One table. We keep the crew small so the work stays close to the people who will live with it.";

const DEFAULT_MEMBERS: About11Member[] = [
  {
    name: "Amara Cole",
    role: "Creative director",
    image: "/assets/fc2d8371236ac90c.webp",
    imageAlt: "Portrait of Amara Cole",
  },
  {
    name: "Julian Voss",
    role: "Design lead",
    image: "/assets/2a364f729e4f7c09.webp",
    imageAlt: "Portrait of Julian Voss",
  },
  {
    name: "Noor Elahi",
    role: "Producer",
    image: "/assets/45dad0903fef5d02.webp",
    imageAlt: "Portrait of Noor Elahi",
  },
];

const DEFAULT_PROCESS_STEPS: About11ProcessStep[] = [
  {
    title: "Read the room",
    description:
      "We sit with the people who will use the work and write down what must stay, what can go, and what would embarrass us later.",
  },
  {
    title: "Build the spine",
    description:
      "Type, photography, and the first screens share one grid before anyone talks about decoration.",
  },
  {
    title: "Ship the quiet version",
    description:
      "We present the version we would keep if the budget closed tomorrow, then we only add what still earns its place.",
  },
];

const DEFAULT_LOGOS: About11Logo[] = [
  { name: "Harbor" },
  { name: "Northline" },
  { name: "Fieldwork" },
  { name: "Lumen" },
  { name: "Kite & Co." },
  { name: "Velvet Rail" },
];

const DEFAULT_HONORS: About11Honor[] = [
  {
    year: "2025",
    title: "Site of the Day",
    description: "A quiet commerce rebuild for a coastal grocer.",
  },
  {
    year: "2024",
    title: "Studio Award, Print",
    description: "A season book for a lighting house in two inks.",
  },
  {
    year: "2023",
    title: "Best in Show, Identity",
    description: "A mark system that still holds at postage size.",
  },
];

const DEFAULT_QUOTE: About11Quote = {
  text: "Make the work feel like it was always supposed to live here.",
  attribution: "Studio note, pinned above the printer",
  image: "/assets/6ab18a652c6b3562.webp",
  imageAlt: "Sunlit studio desks with plants and open laptops",
};

const DEFAULT_MOTIVATIONS: About11Motivation[] = [
  {
    title: "Why we still print",
    description:
      "A screen can lie about scale. Paper cannot. We still make proofs you can hold so the type, the crop, and the color have to survive in a room with windows.",
    image: "/assets/c8ed8f9471a82715.webp",
    imageAlt: "Hands marking a printed layout on a wooden table",
  },
  {
    title: "Why we keep the crew small",
    description:
      "Fewer seats at the table means the brief does not get translated three times. The person who heard the problem is still in the file when it ships.",
    image: "/assets/b4bdf0047c9613f6.webp",
    imageAlt: "Small team talking around a conference table",
  },
];

const STAGGER = [
  "lg:translate-y-8",
  "lg:-translate-y-4",
  "lg:translate-y-14",
] as const;

function LogoMarquee({ logos }: { logos: About11Logo[] }) {
  const copies = [
    { suffix: "lead", items: logos },
    { suffix: "loop", items: logos },
  ] as const;

  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,var(--jk-foreground)_10%,var(--jk-foreground)_90%,transparent)]">
      <div className="jk-about11-marquee flex w-max items-center gap-12 py-3">
        {copies.flatMap((copy) =>
          copy.items.map((logo) => (
            <span
              key={`${copy.suffix}-${logo.name}`}
              className="shrink-0 text-sm font-semibold tracking-[0.18em] text-muted-foreground uppercase"
            >
              {logo.name}
            </span>
          )),
        )}
      </div>
    </div>
  );
}

function MemberPlate({
  member,
  stagger,
}: {
  member: About11Member;
  stagger?: string;
}) {
  return (
    <figure className={cn("group min-w-0", stagger)}>
      <div className="relative aspect-[3/4] overflow-hidden rounded-[calc(var(--radius)+0.2rem)] border border-border bg-muted">
        <img
          src={member.image}
          alt={member.imageAlt}
          className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>
      <figcaption className="mt-3 space-y-0.5">
        <p className="text-sm font-semibold tracking-[-0.02em]">
          {member.name}
        </p>
        <p className="text-sm text-muted-foreground">{member.role}</p>
      </figcaption>
    </figure>
  );
}

export function About11({
  className,
  kicker = DEFAULT_KICKER,
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  studioNote = DEFAULT_STUDIO_NOTE,
  members = DEFAULT_MEMBERS,
  processKicker = "Method",
  processTitle = "How a brief becomes a room",
  processDescription = "We start with what has to be true, then we cut until the layout can stand without extra explanation.",
  processSteps = DEFAULT_PROCESS_STEPS,
  logos = DEFAULT_LOGOS,
  honorsKicker = "Honors",
  honorsTitle = "Work the room noticed",
  honors = DEFAULT_HONORS,
  quote = DEFAULT_QUOTE,
  motivations = DEFAULT_MOTIVATIONS,
  ...props
}: About11Props) {
  const headingId = useId();

  return (
    <section
      data-slot="about11"
      aria-labelledby={headingId}
      className={cn("bg-background text-foreground", className)}
      {...props}
    >
      <style href="jk-about11" precedence="default">{`
        @keyframes jk-about11-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .jk-about11-marquee {
          animation: jk-about11-marquee 36s linear infinite;
        }
        .jk-about11-marquee:hover,
        .jk-about11-marquee:focus-within {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-about11-marquee { animation: none; }
        }
      `}</style>

      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <header className="max-w-3xl">
          {kicker ? (
            <Badge variant="outline" className="mb-4">
              {kicker}
            </Badge>
          ) : null}
          <h2
            id={headingId}
            className="text-4xl font-semibold tracking-[-0.06em] text-balance sm:text-6xl lg:text-7xl"
          >
            {title}
          </h2>
          {description ? (
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {description}
            </p>
          ) : null}
        </header>

        <div className="mt-12 grid list-none grid-cols-1 gap-8 p-0 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:items-start lg:gap-6">
          {studioNote ? (
            <article className="flex min-h-64 flex-col justify-between rounded-[calc(var(--radius)+0.25rem)] border border-border bg-card p-6 sm:min-h-80 lg:translate-y-2">
              <p className="text-lg leading-7 font-medium tracking-[-0.03em] text-balance">
                {studioNote}
              </p>
              <p className="mt-8 text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                The table
              </p>
            </article>
          ) : null}
          {members.map((member, index) => (
            <MemberPlate
              key={member.name}
              member={member}
              stagger={STAGGER[index % STAGGER.length]}
            />
          ))}
        </div>

        {processSteps.length ? (
          <div className="mt-20 sm:mt-24">
            <div className="max-w-2xl">
              {processKicker ? (
                <p className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                  {processKicker}
                </p>
              ) : null}
              {processTitle ? (
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-balance sm:text-3xl">
                  {processTitle}
                </h3>
              ) : null}
              {processDescription ? (
                <p className="mt-3 text-base leading-7 text-muted-foreground">
                  {processDescription}
                </p>
              ) : null}
            </div>
            <ol className="mt-10 grid list-none grid-cols-1 gap-6 p-0 md:grid-cols-3">
              {processSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="rounded-[calc(var(--radius)+0.15rem)] border border-border bg-card p-5 sm:p-6"
                >
                  <span className="grid size-8 place-items-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                    {index + 1}
                  </span>
                  <h4 className="mt-4 text-base font-semibold tracking-[-0.03em]">
                    {step.title}
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        ) : null}
      </div>

      {logos.length ? (
        <div className="border-y border-border bg-muted/40 py-6">
          <p className="sr-only">Studios and houses we have worked with</p>
          <LogoMarquee logos={logos} />
        </div>
      ) : null}

      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        {honors.length ? (
          <div>
            {honorsKicker ? (
              <p className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                {honorsKicker}
              </p>
            ) : null}
            {honorsTitle ? (
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                {honorsTitle}
              </h3>
            ) : null}
            <div className="mt-8">
              {honors.map((honor, index) => (
                <div key={`${honor.year}-${honor.title}`}>
                  {index > 0 ? <Separator className="my-0" /> : null}
                  <article className="grid gap-2 py-5 sm:grid-cols-[5.5rem_minmax(0,0.9fr)_minmax(0,1.2fr)] sm:items-baseline sm:gap-8">
                    <p className="font-mono text-sm text-muted-foreground">
                      {honor.year}
                    </p>
                    <h4 className="text-sm font-semibold tracking-[-0.02em]">
                      {honor.title}
                    </h4>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {honor.description}
                    </p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {quote ? (
          <figure className="dark relative mt-16 overflow-hidden rounded-[calc(var(--radius)+0.35rem)] border border-border sm:mt-20">
            <img
              src={quote.image}
              alt={quote.imageAlt}
              className="aspect-[16/9] w-full object-cover grayscale brightness-75 contrast-125"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-background/70"
            />
            <figcaption className="absolute inset-0 grid place-items-center px-6 text-center">
              <blockquote className="max-w-2xl">
                <p className="text-2xl font-semibold tracking-[-0.05em] text-balance text-foreground sm:text-4xl">
                  {quote.text}
                </p>
                {quote.attribution ? (
                  <p className="mt-4 text-sm text-muted-foreground">
                    {quote.attribution}
                  </p>
                ) : null}
              </blockquote>
            </figcaption>
          </figure>
        ) : null}

        {motivations.length ? (
          <div className="mt-16 space-y-16 sm:mt-20 sm:space-y-20">
            {motivations.map((item, index) => {
              const reverse = index % 2 === 1;
              return (
                <article
                  key={item.title}
                  className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
                >
                  <div className={cn(reverse && "lg:order-2")}>
                    <div className="overflow-hidden rounded-[calc(var(--radius)+0.25rem)] border border-border bg-muted">
                      <img
                        src={item.image}
                        alt={item.imageAlt}
                        className="aspect-[16/10] w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className={cn("max-w-lg", reverse && "lg:order-1")}>
                    <h3 className="text-2xl font-semibold tracking-[-0.04em] text-balance sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}
