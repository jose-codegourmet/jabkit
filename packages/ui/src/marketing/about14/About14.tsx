import { useId } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/atoms/avatar/Avatar";
import { cn } from "@/lib/cn";
import type { About14Props } from "./About14.types";

const defaults = {
  title: "About Us",
  label: "The studio",
  intro:
    "We design product sites and brand systems for teams that need the work to read clearly on first pass, then hold up in the room.",
  profile: {
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&h=160&q=80",
    alt: "Portrait of Mira Solano",
    name: "Mira Solano",
    role: "Founding designer",
    fallback: "MS",
  },
  philosophy:
    "Photography first, copy second, and a grid that stays honest when the page gets quiet.",
  image: {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&h=900&q=80",
    alt: "Sunlit studio with long work tables and plants",
  },
} as const;

export function About14({
  className,
  title = defaults.title,
  label = defaults.label,
  intro = defaults.intro,
  profile = defaults.profile,
  philosophy = defaults.philosophy,
  image = defaults.image,
  ...props
}: About14Props) {
  const headingId = useId();

  return (
    <section
      data-slot="about14"
      aria-labelledby={headingId}
      className={cn("bg-background text-foreground", className)}
      {...props}
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-6 lg:gap-x-8 lg:gap-y-14">
          <h2
            id={headingId}
            className="text-4xl font-semibold tracking-[-0.05em] text-balance sm:text-5xl lg:col-span-6 lg:text-6xl"
          >
            {title}
          </h2>

          {image ? (
            <div className="overflow-hidden rounded-[--radius] bg-muted lg:col-span-6">
              <img
                src={image.src}
                alt={image.alt}
                className="h-[22rem] w-full object-cover sm:h-[28rem] lg:h-[32rem]"
              />
            </div>
          ) : null}

          {label ? (
            <p className="text-sm font-medium text-muted-foreground lg:col-span-1 lg:pt-1">
              {label}
            </p>
          ) : null}

          <div className="flex flex-col gap-6 lg:col-span-2 lg:px-2">
            {intro ? (
              <p className="text-base leading-7 text-muted-foreground">
                {intro}
              </p>
            ) : null}
            {profile ? (
              <div className="flex items-center gap-3">
                <Avatar size="lg">
                  <AvatarImage src={profile.src} alt={profile.alt} />
                  <AvatarFallback>{profile.fallback}</AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <p className="text-sm font-semibold tracking-[-0.02em]">
                    {profile.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {profile.role}
                  </p>
                </div>
              </div>
            ) : null}
          </div>

          {philosophy ? (
            <p className="text-2xl font-semibold tracking-[-0.04em] text-balance sm:text-3xl lg:col-span-3 lg:px-2 lg:text-4xl">
              {philosophy}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
