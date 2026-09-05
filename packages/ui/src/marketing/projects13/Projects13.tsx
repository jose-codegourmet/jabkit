import { cn } from "@/lib/cn";
import type { Projects13Project, Projects13Props } from "./Projects13.types";

const DEFAULT_LABEL = "Selected projects";

const defaultProjects: Projects13Project[] = [
  {
    index: "01",
    title: "Northline Console",
    date: "Mar 2024",
    description:
      "A live admin preview so sales could walk a room through the product without sending screenshots.",
    image: {
      src: "/assets/e8b49d7b4617a825.webp",
      alt: "Sunlit studio desks with plants and open notebooks",
    },
  },
  {
    index: "02",
    title: "Harbor Ledger",
    date: "Jun 2024",
    description:
      "A win list rewritten as four outcome tiles operators could scan before the morning standup.",
    image: {
      src: "/assets/1ab3b7a7ea329629.webp",
      alt: "Laptop showing charts on a wooden desk",
    },
  },
  {
    index: "03",
    title: "Lumen Studio",
    date: "Sep 2024",
    description:
      "Cover photography paired with hard metrics so the portfolio argued for the work, not the mood.",
    image: {
      src: "/assets/55f54dbff1523af3.webp",
      alt: "Collaborative workshop around a table",
    },
  },
  {
    index: "04",
    title: "Orbit Onboarding",
    date: "Jan 2025",
    description:
      "Self-serve cut to one metric, one sentence, and a first-run a prospect could finish alone.",
    image: {
      src: "/assets/ce3d6a8dc5cff4d8.webp",
      alt: "Quiet desk with a laptop and coffee",
    },
  },
];

function formatIndex(index: number): string {
  return String(index + 1).padStart(2, "0");
}

export function Projects13({
  className,
  label = DEFAULT_LABEL,
  projects = defaultProjects,
  ...props
}: Projects13Props) {
  return (
    <section
      data-slot="projects13"
      aria-label={label}
      className={cn("bg-background text-foreground", className)}
      {...props}
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <ul className="m-0 list-none border-t border-border p-0">
          {projects.map((project, i) => (
            <li
              key={`${project.title}-${project.date}`}
              className="border-b border-border py-8 sm:py-10 lg:py-12"
            >
              <article className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,14rem)_minmax(0,1fr)_auto] lg:items-center lg:gap-10">
                <header className="flex flex-col gap-2">
                  <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
                    {project.index ?? formatIndex(i)}
                  </p>
                  <h3 className="text-base font-medium tracking-[-0.02em] text-balance">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase">
                    {project.date}
                  </p>
                </header>

                <p className="max-w-2xl text-xl leading-snug font-medium tracking-[-0.03em] text-pretty sm:text-2xl lg:text-3xl lg:leading-[1.2]">
                  {project.description}
                </p>

                <figure className="size-24 shrink-0 overflow-hidden rounded-[--radius] bg-muted sm:size-28">
                  <img
                    src={project.image.src}
                    alt={project.image.alt}
                    className="size-full object-cover"
                  />
                </figure>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
