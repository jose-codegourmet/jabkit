import { type ReactNode, useId } from "react";
import { cn } from "@/lib/cn";
import type {
  GlowingShadowProps,
  GlowingShadowTile,
} from "./GlowingShadow.types";

const DEFAULT_EYEBROW = "Light field";
const DEFAULT_HEADING = "A shadow that keeps cycling.";
const DEFAULT_DESCRIPTION =
  "Token color spins behind the type. Hover brightens the field. Quiet when motion is reduced.";
const DEFAULT_LABEL = "Glowing Shadow";
const DEFAULT_DURATION = 9;

function GlowFrame({
  duration,
  compact,
  children,
}: {
  duration: number;
  compact?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "jk-glowing-shadow-stage relative isolate grid w-full place-items-center overflow-hidden",
        compact
          ? "min-h-[16rem] px-4 py-10"
          : "min-h-[22rem] px-6 py-16 sm:min-h-[26rem] sm:px-10 sm:py-20",
      )}
      data-slot="glowing-shadow-stage"
      style={{ ["--jk-glow-duration" as string]: `${duration}s` }}
    >
      <div
        aria-hidden="true"
        className="jk-glowing-shadow-aura-wrap pointer-events-none absolute inset-[-18%] rounded-[calc(var(--radius)+2.5rem)]"
      >
        <div className="jk-glowing-shadow-aura size-full rounded-[inherit]" />
      </div>
      <div className="relative z-10 grid place-items-center text-center">
        {children}
      </div>
    </div>
  );
}

function TileCopy({ tile }: { tile: GlowingShadowTile }) {
  return (
    <>
      <p className="text-3xl font-semibold tracking-tighter text-balance sm:text-4xl">
        {tile.label}
      </p>
      {tile.caption ? (
        <p className="mt-3 max-w-[18rem] text-sm leading-6 text-muted-foreground">
          {tile.caption}
        </p>
      ) : null}
    </>
  );
}

export function GlowingShadow({
  className,
  eyebrow = DEFAULT_EYEBROW,
  heading = DEFAULT_HEADING,
  description = DEFAULT_DESCRIPTION,
  label = DEFAULT_LABEL,
  caption,
  tiles,
  duration = DEFAULT_DURATION,
  children,
  ...props
}: GlowingShadowProps) {
  const headingId = useId();
  const faces =
    tiles && tiles.length > 0 ? tiles : [{ id: "featured", label, caption }];
  const custom = Boolean(children) && faces.length === 1;

  return (
    <section
      aria-labelledby={headingId}
      className={cn("bg-background text-foreground", className)}
      data-slot="glowing-shadow"
      {...props}
    >
      <style href="jk-glowing-shadow" precedence="default">{`
        .jk-glowing-shadow-aura-wrap {
          opacity: 0.62;
          filter: blur(22px);
          transform: scale(1);
        }
        .jk-glowing-shadow-aura {
          background: conic-gradient(
            from 0deg,
            color-mix(in oklab, var(--jk-chart-1), transparent 8%),
            color-mix(in oklab, var(--jk-chart-5), transparent 4%),
            color-mix(in oklab, var(--jk-chart-2), transparent 10%),
            color-mix(in oklab, var(--jk-primary), transparent 12%),
            color-mix(in oklab, var(--jk-chart-4), transparent 6%),
            color-mix(in oklab, var(--jk-chart-3), transparent 10%),
            color-mix(in oklab, var(--jk-chart-1), transparent 8%)
          );
        }
        .dark .jk-glowing-shadow-aura-wrap {
          opacity: 0.78;
          filter: blur(26px);
        }
        @keyframes jk-glowing-shadow-spin {
          to { transform: rotate(1turn); }
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-glowing-shadow-aura-wrap {
            transition: filter 420ms ease, opacity 420ms ease, transform 420ms ease;
          }
          .jk-glowing-shadow-aura {
            animation: jk-glowing-shadow-spin var(--jk-glow-duration, 9s) linear infinite;
          }
          .jk-glowing-shadow-stage:hover .jk-glowing-shadow-aura-wrap {
            opacity: 0.96;
            filter: blur(34px);
            transform: scale(1.12);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-glowing-shadow-aura {
            animation: none;
          }
          .jk-glowing-shadow-aura-wrap {
            transition: none;
          }
        }
      `}</style>
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <header className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          {eyebrow ? (
            <p className="mb-3 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h2
            className="text-3xl font-semibold tracking-[-0.05em] text-balance sm:text-4xl lg:text-5xl"
            id={headingId}
          >
            {heading}
          </h2>
          {description ? (
            <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
              {description}
            </p>
          ) : null}
        </header>
        <div
          className={cn(
            "grid items-stretch justify-items-center gap-8",
            faces.length > 1 ? "md:grid-cols-3" : "grid-cols-1",
          )}
        >
          {faces.map((face) => (
            <GlowFrame
              compact={faces.length > 1}
              duration={duration}
              key={face.id}
            >
              {custom ? (
                children
              ) : faces.length === 1 ? (
                <>
                  <p className="pointer-events-none text-5xl leading-[1.05] font-semibold tracking-tighter text-balance sm:text-7xl lg:text-8xl">
                    {face.label}
                  </p>
                  {face.caption ? (
                    <p className="mt-5 max-w-md text-sm leading-6 text-muted-foreground sm:text-base">
                      {face.caption}
                    </p>
                  ) : null}
                </>
              ) : (
                <TileCopy tile={face} />
              )}
            </GlowFrame>
          ))}
        </div>
      </div>
    </section>
  );
}
