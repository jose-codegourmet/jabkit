import { useId } from "react";
import { cn } from "@/lib/cn";
import type {
  About6Image,
  About6Props,
  About6Story,
  About6Workplace,
} from "./About6.types";

const DEFAULT_STORY: About6Story = {
  title: "About Us",
  description:
    "We started as a four-person studio shipping interfaces for operators who live in the product all day. The brief is still the same: quiet rooms, honest photography, and software that does not need a tour guide.",
  images: [
    {
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&h=1200&q=80",
      alt: "Team gathered around a table reviewing work together",
      aspectClassName: "aspect-[3/4]",
    },
    {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&h=900&q=80",
      alt: "Sunlit studio desks with plants and open notebooks",
      aspectClassName: "aspect-square",
    },
    {
      src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&h=1200&q=80",
      alt: "Two colleagues talking through a plan in a meeting room",
      aspectClassName: "aspect-[3/4]",
    },
  ],
};

const DEFAULT_WORKPLACE: About6Workplace = {
  title: "Workplace",
  paragraphs: [
    "The floor is open because the work is shared. Desks face each other, the kitchen is the second meeting room, and the walls hold the last six launches instead of slogans.",
    "We keep a small office so the team can still hear a prototype across the table. Remote days exist; the photographs are from the days we choose to be in the same light.",
  ],
  images: [
    {
      src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&h=675&q=80",
      alt: "Empty office corridor with glass rooms and daylight",
      aspectClassName: "aspect-[4/3]",
    },
    {
      src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&h=1200&q=80",
      alt: "Workshop around a long table with laptops open",
      aspectClassName: "aspect-[3/4]",
    },
    {
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&h=900&q=80",
      alt: "Cafe-style workplace seating with a laptop and coffee",
      aspectClassName: "aspect-square",
    },
  ],
};

function Photo({ image }: { image: About6Image }) {
  return (
    <figure className="overflow-hidden rounded-[--radius] bg-muted">
      <img
        src={image.src}
        alt={image.alt}
        className={cn(
          "w-full object-cover",
          image.aspectClassName ?? "aspect-[4/3]",
        )}
      />
    </figure>
  );
}

function PhotoTrio({
  images,
  stagger = "end",
}: {
  images: About6Image[];
  stagger?: "start" | "end";
}) {
  const [first, second, third] = images;
  const stacked = stagger === "end" ? [first, second] : [second, third];
  const lone = stagger === "end" ? third : first;
  const stackedColumn = (
    <div className="flex flex-col gap-4">
      {stacked.filter(Boolean).map((image) => (
        <Photo key={image.src} image={image} />
      ))}
    </div>
  );
  const loneColumn = lone ? (
    <div className="sm:pt-10">
      <Photo image={lone} />
    </div>
  ) : null;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {stagger === "start" ? (
        <>
          {loneColumn}
          {stackedColumn}
        </>
      ) : (
        <>
          {stackedColumn}
          {loneColumn}
        </>
      )}
    </div>
  );
}

export function About6({
  className,
  story = DEFAULT_STORY,
  workplace = DEFAULT_WORKPLACE,
  ...props
}: About6Props) {
  const headingId = useId();

  return (
    <section
      data-slot="about6"
      aria-labelledby={headingId}
      className={cn("bg-background text-foreground", className)}
      {...props}
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-10 xl:gap-16">
          <div>
            {story ? (
              <header className="max-w-xl">
                <h2
                  id={headingId}
                  className="text-3xl font-semibold tracking-[-0.05em] text-balance sm:text-4xl"
                >
                  {story.title}
                </h2>
                {story.description ? (
                  <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                    {story.description}
                  </p>
                ) : null}
              </header>
            ) : null}
            {story?.images?.length ? (
              <div className="mt-8 sm:mt-10">
                <PhotoTrio images={story.images} stagger="end" />
              </div>
            ) : null}
          </div>

          <div className="lg:mt-24">
            {workplace?.images?.length ? (
              <PhotoTrio images={workplace.images} stagger="start" />
            ) : null}
            {workplace ? (
              <div className="mt-8 max-w-xl sm:mt-10">
                <h3 className="text-3xl font-semibold tracking-[-0.05em] text-balance sm:text-4xl">
                  {workplace.title}
                </h3>
                {workplace.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
