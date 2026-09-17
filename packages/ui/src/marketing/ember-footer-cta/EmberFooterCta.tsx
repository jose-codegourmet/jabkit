"use client";

import {
  type FormEvent,
  type FormEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/cn";
import type { EmberFooterCtaProps } from "./EmberFooterCta.types";

const defaults = {
  eyebrow: "last call",
  title: "Join the waitlist.",
  description: "Leave an email, we will hold your spot.",
  emailLabel: "Email address",
  emailPlaceholder: "you@company.com",
  submitLabel: "Get early access",
  successMessage: "You're on the list, we'll be in touch.",
  brand: "Ember Kit, est. 2026",
  links: [
    { label: "Changelog", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "GitHub", href: "#" },
  ],
  footnote: "no spam, one launch email",
  showEmber: true,
  flameHeight: 260,
};

const flameHeight = 38;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Rgb = [number, number, number];

function cssColorToRgb(value: string): Rgb {
  const canvas = document.createElement("canvas");
  canvas.width = 1;
  canvas.height = 1;
  const context = canvas.getContext("2d");
  if (!context) return [128, 96, 220];
  context.fillStyle = value;
  context.fillRect(0, 0, 1, 1);
  const data = context.getImageData(0, 0, 1, 1).data;
  return [data[0], data[1], data[2]];
}

function lerp(start: number, end: number, amount: number) {
  return start + (end - start) * amount;
}

function buildFlamePalette(alpha: number, stops: Rgb[]) {
  const palette = new Uint8Array(flameHeight * 4);
  for (let index = 0; index < flameHeight; index += 1) {
    const position = index / (flameHeight - 1);
    const [from, to, progress] =
      position < 0.4
        ? [stops[0], stops[1], position / 0.4]
        : position < 0.75
          ? [stops[1], stops[2], (position - 0.4) / 0.35]
          : [stops[2], stops[3], (position - 0.75) / 0.25];
    palette[index * 4] = lerp(from[0], to[0], progress);
    palette[index * 4 + 1] = lerp(from[1], to[1], progress);
    palette[index * 4 + 2] = lerp(from[2], to[2], progress);
    palette[index * 4 + 3] = Math.round(position ** 1.2 * alpha);
  }
  return palette;
}

function FlameBand({ height = defaults.flameHeight }: { height?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const styles = getComputedStyle(parent);
    const stops = [
      cssColorToRgb(styles.getPropertyValue("--jk-chart-1")),
      cssColorToRgb(styles.getPropertyValue("--jk-primary")),
      cssColorToRgb(styles.getPropertyValue("--jk-chart-4")),
      cssColorToRgb(styles.getPropertyValue("--jk-warning")),
    ];
    const palette = buildFlamePalette(85, stops);
    let columns = 8;
    let rows = 8;
    let pixels = new Uint8Array(0);
    let image: ImageData | null = null;
    let pointer = new Float32Array(0);
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const resize = () => {
      columns = Math.max(8, Math.ceil(parent.clientWidth / 10));
      rows = Math.max(8, Math.ceil(height / 10));
      canvas.width = columns;
      canvas.height = rows;
      pixels = new Uint8Array(columns * rows);
      image = context.createImageData(columns, rows);
      pointer = new Float32Array(columns);
    };
    resize();
    const observer = new ResizeObserver(() => {
      resize();
      if (reducedMotion) window.requestAnimationFrame(() => draw(0));
    });
    observer.observe(parent);

    const cursor = { x: 0, y: 0, lastX: 0, velocity: 0, active: false };
    const onPointerMove = (event: PointerEvent) => {
      cursor.x = event.clientX;
      cursor.y = event.clientY;
      cursor.active = event.pointerType !== "touch";
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    let frame = 0;
    let previous = 0;
    let running = true;

    const draw = (timestamp: number) => {
      if (!running) return;
      frame = requestAnimationFrame(draw);
      if (!reducedMotion && timestamp - previous < 1000 / 30) return;
      previous = timestamp;
      const seconds = timestamp / 1000;
      const wave = flameHeight * 0.55;

      for (let column = 0; column < columns; column += 1) {
        const shape =
          0.5 +
          0.5 *
            (Math.sin(column * 0.035 + seconds * 0.45) * 0.6 +
              Math.sin(column * 0.011 - seconds * 0.2) * 0.4);
        const jitter =
          Math.sin(column * 0.21 + seconds * 1.7) +
          Math.sin(column * 0.047 - seconds * 0.9);
        pixels[(rows - 1) * columns + column] = Math.max(
          0,
          Math.round(flameHeight - 3 - wave * (1 - shape) + jitter * 1.5),
        );
      }

      cursor.velocity = cursor.velocity * 0.8 + (cursor.x - cursor.lastX) * 0.2;
      cursor.lastX = cursor.x;
      pointer.fill(0);
      if (cursor.active && Math.abs(cursor.velocity) > 0.5) {
        const bounds = canvas.getBoundingClientRect();
        if (
          bounds.width > 0 &&
          cursor.y >= bounds.top - 120 &&
          cursor.y <= bounds.bottom + 40 &&
          cursor.x >= bounds.left - 100 &&
          cursor.x <= bounds.right + 100
        ) {
          const center = ((cursor.x - bounds.left) / bounds.width) * columns;
          const force = Math.max(-1, Math.min(1, cursor.velocity / 28));
          for (let column = 0; column < columns; column += 1) {
            const distance = (column - center) / 20;
            pointer[column] = force * Math.exp(-distance * distance);
          }
        }
      }

      for (let row = rows - 2; row >= 0; row -= 1) {
        const offset = row * columns;
        const belowOffset = (row + 1) * columns;
        for (let column = 0; column < columns; column += 1) {
          const random = Math.floor(Math.random() * 4);
          let sourceColumn = column + (random > 1 ? random - 2 : 0);
          const influence = pointer[column] ?? 0;
          if (influence !== 0 && Math.random() < Math.abs(influence)) {
            sourceColumn += influence > 0 ? 1 : -1;
          }
          sourceColumn = Math.max(0, Math.min(columns - 1, sourceColumn));
          const current = pixels[belowOffset + sourceColumn] ?? 0;
          const decay = random & 1 ? 2 : 1;
          pixels[offset + column] = current > decay ? current - decay : 0;
        }
      }

      if (!image) return;
      const data = image.data;
      for (let index = 0, output = 0; index < columns * rows; index += 1) {
        const paletteIndex = (pixels[index] ?? 0) * 4;
        data[output] = palette[paletteIndex] ?? 0;
        data[output + 1] = palette[paletteIndex + 1] ?? 0;
        data[output + 2] = palette[paletteIndex + 2] ?? 0;
        data[output + 3] = palette[paletteIndex + 3] ?? 0;
        output += 4;
      }
      context.putImageData(image, 0, 0);
      if (reducedMotion) {
        running = false;
      }
    };

    if (reducedMotion) {
      frame = requestAnimationFrame(() => draw(performance.now()));
    } else {
      frame = requestAnimationFrame(draw);
    }

    return () => {
      running = false;
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, [height]);

  return (
    <canvas
      className="pointer-events-none absolute inset-x-0 bottom-0 w-full [image-rendering:pixelated] mix-blend-plus-lighter"
      ref={canvasRef}
      style={{
        height,
        background:
          "linear-gradient(to top, color-mix(in oklab, var(--jk-chart-4) 30%, transparent), color-mix(in oklab, var(--jk-chart-1) 14%, transparent) 34%, transparent 86%)",
      }}
    />
  );
}

function EmberButton({
  children,
  disabled,
}: {
  children: string;
  disabled?: boolean;
}) {
  return (
    <button
      className="relative inline-flex h-[38px] shrink-0 items-center justify-center overflow-hidden whitespace-nowrap rounded-md border-0 bg-[linear-gradient(135deg,var(--jk-warning),var(--jk-destructive))] px-4 text-sm font-semibold tracking-[-0.015em] text-foreground transition-[scale,filter,width,padding] duration-200 active:scale-[0.985] hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50"
      disabled={disabled}
      type="submit"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_50%_120%,var(--jk-warning),transparent_60%)]"
      />
      <span className="relative">{children}</span>
    </button>
  );
}

function WaitlistInput({
  emailLabel,
  placeholder,
  buttonLabel,
  successMessage,
  onSubscribe,
  onSubmit,
}: {
  emailLabel: string;
  placeholder: string;
  buttonLabel: string;
  successMessage: string;
  onSubscribe?: (email: string) => void;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [focused, setFocused] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [status, setStatus] = useState<"idle" | "processing" | "success">(
    "idle",
  );
  const [submittedEmail, setSubmittedEmail] = useState("");
  const busy = status !== "idle";

  const shake = () => {
    setInvalid(true);
    formRef.current?.animate(
      [
        { transform: "translateX(0)" },
        { transform: "translateX(-9px)" },
        { transform: "translateX(8px)" },
        { transform: "translateX(-6px)" },
        { transform: "translateX(4px)" },
        { transform: "translateX(-2px)" },
        { transform: "translateX(0)" },
      ],
      { duration: 440, easing: "cubic-bezier(0.36, 0.07, 0.19, 0.97)" },
    );
    inputRef.current?.focus();
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const wasDefaultPrevented = event.defaultPrevented;
    onSubmit?.(event);
    if (event.defaultPrevented && !wasDefaultPrevented) return;
    event.preventDefault();
    if (busy) return;
    const email = inputRef.current?.value.trim() ?? "";
    if (!emailPattern.test(email)) {
      shake();
      return;
    }
    setSubmittedEmail(email);
    setInvalid(false);
    setStatus("processing");
    onSubscribe?.(email);
    window.setTimeout(() => setStatus("success"), 900);
  };

  return (
    <form
      aria-label="Waitlist signup"
      className="relative box-border inline-flex w-[420px] max-w-full items-center rounded-[10px] border bg-card p-[5px] pl-[18px] text-left shadow-[0_16px_50px_color-mix(in_oklab,var(--jk-background),transparent_55%)] transition-[border-color] duration-200"
      onSubmit={handleSubmit}
      ref={formRef}
      style={{
        borderColor: invalid
          ? "color-mix(in oklab, var(--jk-destructive) 55%, transparent)"
          : focused
            ? "color-mix(in oklab, var(--jk-foreground) 30%, transparent)"
            : "color-mix(in oklab, var(--jk-foreground) 10%, transparent)",
      }}
    >
      <input
        aria-label={emailLabel}
        autoComplete="email"
        className="h-[38px] min-w-0 flex-1 border-0 bg-transparent p-0 text-sm tracking-[-0.005em] text-foreground outline-none transition-opacity duration-150 placeholder:text-muted-foreground/60"
        disabled={busy}
        onBlur={() => setFocused(false)}
        onChange={() => invalid && setInvalid(false)}
        onFocus={() => setFocused(true)}
        placeholder={placeholder}
        ref={inputRef}
        style={{
          opacity: status === "success" ? 0 : status === "processing" ? 0.5 : 1,
        }}
        type="email"
      />
      <span
        aria-live="polite"
        className="pointer-events-none absolute inset-y-0 left-[18px] right-[52px] flex items-center overflow-hidden whitespace-nowrap text-sm font-normal tracking-[-0.005em] text-foreground transition-opacity duration-200"
        style={{ opacity: status === "success" ? 1 : 0 }}
      >
        {submittedEmail ? successMessage : null}
      </span>
      <EmberButton disabled={busy}>{busy ? "" : buttonLabel}</EmberButton>
    </form>
  );
}

export function EmberFooterCta({
  className,
  eyebrow = defaults.eyebrow,
  title = defaults.title,
  description = defaults.description,
  emailLabel = defaults.emailLabel,
  emailPlaceholder = defaults.emailPlaceholder,
  submitLabel = defaults.submitLabel,
  successMessage = defaults.successMessage,
  onSubscribe,
  onSubmit,
  brand = defaults.brand,
  links = defaults.links,
  footnote = defaults.footnote,
  showEmber = defaults.showEmber,
  flameHeight: emberHeight = defaults.flameHeight,
  ...props
}: EmberFooterCtaProps) {
  return (
    <footer
      className={cn(
        "jk-ember-footer-cta relative overflow-hidden text-foreground",
        className,
      )}
      data-slot="ember-footer-cta"
      {...props}
    >
      <style href="jk-ember-footer-cta" precedence="default">{`
        .jk-ember-footer-cta {
          --jk-ember-bg: color-mix(in oklab, var(--jk-background) 86%, var(--jk-chart-4));
          --jk-ember-deep: color-mix(in oklab, var(--jk-background) 74%, var(--jk-chart-4));
          --jk-ember-muted: color-mix(in oklab, var(--jk-muted-foreground) 82%, var(--jk-background));
          --jk-ember-accent: color-mix(in oklab, var(--jk-chart-4) 82%, var(--jk-chart-2));
          min-height: 38rem;
          background: radial-gradient(
            90% 70% at 50% 100%,
            var(--jk-ember-deep) 0%,
            var(--jk-ember-bg) 45%,
            var(--jk-background) 100%
          );
        }
        .jk-ember-footer-cta a:hover { color: var(--jk-foreground); }
      `}</style>
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 pt-24 pb-10 text-center">
        <p className="font-mono text-[11px] tracking-[0.12em] text-[color:var(--jk-ember-accent)]">
          {eyebrow}
        </p>
        <h2 className="mt-4 max-w-xl font-[var(--jk-font-display)] text-5xl leading-[1.05] font-normal tracking-[-0.03em] text-balance sm:text-6xl">
          {title}
        </h2>
        <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[color:var(--jk-ember-muted)]">
          {description}
        </p>
        <div className="mt-9">
          <WaitlistInput
            buttonLabel={submitLabel}
            emailLabel={emailLabel}
            onSubscribe={onSubscribe}
            onSubmit={onSubmit}
            placeholder={emailPlaceholder}
            successMessage={successMessage}
          />
        </div>
        <div className="mt-24 flex w-full flex-col items-center gap-4 border-t border-foreground/10 pt-6 text-[13px] text-[color:var(--jk-ember-muted)] sm:flex-row sm:justify-between">
          <span className="font-[var(--jk-font-display)] text-sm italic">
            {brand}
          </span>
          <nav aria-label="Footer" className="flex items-center gap-5">
            {links.map((link) => (
              <a
                className="transition-colors focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                href={link.href}
                key={`${link.href}-${link.label}`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <span className="font-mono text-[11px] tracking-[0.08em]">
            {footnote}
          </span>
        </div>
      </div>
      {showEmber ? <FlameBand height={emberHeight} /> : null}
    </footer>
  );
}
