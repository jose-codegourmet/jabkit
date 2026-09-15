// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { ShyRattlesnakeProps } from "./ShyRattlesnake.types";

const defaultTitle = (
  <>
    Syntax
    <br />
    Error '26
  </>
);

const defaultDetails = [
  { label: "Name", value: "Alex Developer" },
  { label: "Date", value: "Oct 24, 2026" },
  { label: "Venue", value: "Neon Nexus Arena" },
  { label: "Gateway", value: "Sector 7G" },
] as const;

function LayersMark() {
  return (
    <svg aria-hidden="true" className="jk-shy-rattlesnake-mark" viewBox="0 0 24 24">
      <path
        d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export function ShyRattlesnake({
  className,
  brand = "UIVERSE",
  badge = "Dev Pass",
  title = defaultTitle,
  subtitle = "Global Developer Conference",
  details,
  barcode = "UI-77-9X04-DEV",
  seatLabel = "Seat",
  seat = "42",
  animate = true,
  ...props
}: ShyRattlesnakeProps) {
  const rows = details ?? defaultDetails;

  return (
    <article
      className={cn("jk-shy-rattlesnake", className)}
      data-animate={animate ? "true" : "false"}
      data-slot="shy-rattlesnake"
      {...props}
    >
      <style href="jk-shy-rattlesnake" precedence="default">{`
        .jk-shy-rattlesnake {
          --jk-shy-rattlesnake-face: var(--jk-card);
          --jk-shy-rattlesnake-stub: var(--jk-muted);
          --jk-shy-rattlesnake-ink: var(--jk-card-foreground);
          --jk-shy-rattlesnake-muted: var(--jk-muted-foreground);
          --jk-shy-rattlesnake-accent: var(--jk-primary);
          --jk-shy-rattlesnake-hi: var(--jk-primary-foreground);
          display: inline-block;
          font-size: 10px;
          perspective: 1000px;
        }
        .jk-shy-rattlesnake-ticket {
          position: relative;
          width: 22em;
          color: var(--jk-shy-rattlesnake-ink);
          background: transparent;
          filter: drop-shadow(
            0 0 1em color-mix(in oklab, var(--jk-foreground) 50%, transparent)
          );
          box-shadow:
            0 2em 4em color-mix(in oklab, var(--jk-foreground) 80%, transparent),
            0 0 0 0.1em color-mix(in oklab, var(--jk-shy-rattlesnake-hi) 5%, transparent);
          transform-style: preserve-3d;
        }
        .jk-shy-rattlesnake-ticket::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 10;
          pointer-events: none;
          border-radius: 1em;
          background: linear-gradient(
            115deg,
            transparent 0%,
            transparent 40%,
            color-mix(in oklab, var(--jk-shy-rattlesnake-hi) 10%, transparent) 45%,
            color-mix(in oklab, var(--jk-shy-rattlesnake-hi) 30%, transparent) 50%,
            color-mix(in oklab, var(--jk-shy-rattlesnake-hi) 10%, transparent) 55%,
            transparent 60%,
            transparent 100%
          );
          background-size: 250% 250%;
          background-position: 100% 100%;
          mix-blend-mode: overlay;
        }
        .jk-shy-rattlesnake:hover .jk-shy-rattlesnake-ticket {
          transform: rotateX(5deg) rotateY(-10deg) scale(1.02);
          box-shadow:
            2em 2em 4em color-mix(in oklab, var(--jk-foreground) 60%, transparent),
            0 0 0 0.1em color-mix(in oklab, var(--jk-shy-rattlesnake-hi) 10%, transparent),
            -0.5em -0.5em 2em color-mix(in oklab, var(--jk-shy-rattlesnake-accent) 50%, transparent);
        }
        .jk-shy-rattlesnake:hover .jk-shy-rattlesnake-ticket::after {
          background-position: 0% 0%;
        }
        .jk-shy-rattlesnake:active .jk-shy-rattlesnake-ticket {
          transform: rotateX(15deg) rotateY(-5deg) scale(0.98);
        }
        .jk-shy-rattlesnake:active .jk-shy-rattlesnake-stub {
          transform: translateY(0.5em) rotateZ(2deg);
          opacity: 0.8;
        }
        .jk-shy-rattlesnake-main {
          position: relative;
          overflow: hidden;
          padding: 2em;
          border-top-left-radius: 1em;
          border-top-right-radius: 1em;
          background:
            radial-gradient(
              circle at bottom left,
              transparent 1em,
              var(--jk-shy-rattlesnake-face) 1.05em
            ),
            radial-gradient(
              circle at bottom right,
              transparent 1em,
              var(--jk-shy-rattlesnake-face) 1.05em
            );
          background-repeat: no-repeat;
          background-size: 51% 100%;
          background-position: bottom left, bottom right;
        }
        .jk-shy-rattlesnake-main::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          opacity: 0.6;
          background-image:
            linear-gradient(
              color-mix(in oklab, var(--jk-shy-rattlesnake-accent) 15%, transparent) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              color-mix(in oklab, var(--jk-shy-rattlesnake-accent) 15%, transparent) 1px,
              transparent 1px
            );
          background-size: 2em 2em;
          transform: perspective(500px) rotateX(20deg) scale(1.5);
        }
        .jk-shy-rattlesnake-body {
          position: relative;
          z-index: 1;
        }
        .jk-shy-rattlesnake-head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 2em;
        }
        .jk-shy-rattlesnake-brand {
          display: flex;
          align-items: center;
          gap: 0.5em;
          color: var(--jk-shy-rattlesnake-ink);
          font-size: 1.2em;
          font-weight: 900;
          letter-spacing: -0.05em;
        }
        .jk-shy-rattlesnake-mark {
          width: 1.5em;
          height: 1.5em;
          color: var(--jk-shy-rattlesnake-accent);
          filter: drop-shadow(
            0 0 0.5em color-mix(in oklab, var(--jk-shy-rattlesnake-accent) 80%, transparent)
          );
        }
        .jk-shy-rattlesnake-badge {
          border: 1px solid var(--jk-shy-rattlesnake-accent);
          border-radius: 99em;
          padding: 0.4em 0.8em;
          color: var(--jk-shy-rattlesnake-accent);
          font-size: 0.6em;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }
        .jk-shy-rattlesnake-title {
          margin: 0 0 0.2em;
          font-size: 2.5em;
          font-weight: 900;
          line-height: 1.1;
          text-transform: uppercase;
          background: linear-gradient(
            135deg,
            var(--jk-shy-rattlesnake-ink) 0%,
            color-mix(
              in oklab,
              var(--jk-shy-rattlesnake-accent) 42%,
              var(--jk-shy-rattlesnake-hi)
            ) 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .jk-shy-rattlesnake-subtitle {
          margin: 0 0 2.5em;
          color: var(--jk-shy-rattlesnake-muted);
          font-size: 0.9em;
        }
        .jk-shy-rattlesnake-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5em;
          margin-bottom: 1em;
        }
        .jk-shy-rattlesnake-item {
          display: flex;
          flex-direction: column;
          gap: 0.2em;
        }
        .jk-shy-rattlesnake-label {
          color: var(--jk-shy-rattlesnake-muted);
          font-size: 0.6em;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .jk-shy-rattlesnake-value {
          margin: 0;
          color: var(--jk-shy-rattlesnake-ink);
          font-size: 1.1em;
          font-weight: 700;
        }
        .jk-shy-rattlesnake-perf {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 1em;
          transform: translateY(50%);
        }
        .jk-shy-rattlesnake-perf-line {
          flex-grow: 1;
          height: 0;
          margin: 0 1.5em;
          border-top: 2px dashed
            color-mix(in oklab, var(--jk-shy-rattlesnake-hi) 20%, transparent);
        }
        .jk-shy-rattlesnake-stub {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 2em;
          border-bottom-left-radius: 1em;
          border-bottom-right-radius: 1em;
          background:
            radial-gradient(
              circle at top left,
              transparent 1em,
              var(--jk-shy-rattlesnake-stub) 1.05em
            ),
            radial-gradient(
              circle at top right,
              transparent 1em,
              var(--jk-shy-rattlesnake-stub) 1.05em
            );
          background-repeat: no-repeat;
          background-size: 51% 100%;
          background-position: top left, top right;
        }
        .jk-shy-rattlesnake-code-wrap {
          display: flex;
          flex-direction: column;
          gap: 0.5em;
        }
        .jk-shy-rattlesnake-bars {
          width: 10em;
          height: 3em;
          background: repeating-linear-gradient(
            90deg,
            var(--jk-shy-rattlesnake-hi) 0,
            var(--jk-shy-rattlesnake-hi) 2px,
            transparent 2px,
            transparent 4px,
            var(--jk-shy-rattlesnake-hi) 4px,
            var(--jk-shy-rattlesnake-hi) 5px,
            transparent 5px,
            transparent 8px,
            var(--jk-shy-rattlesnake-hi) 8px,
            var(--jk-shy-rattlesnake-hi) 12px,
            transparent 12px,
            transparent 15px,
            var(--jk-shy-rattlesnake-hi) 15px,
            var(--jk-shy-rattlesnake-hi) 16px,
            transparent 16px,
            transparent 18px
          );
          opacity: 0.8;
        }
        .jk-shy-rattlesnake-code {
          color: var(--jk-shy-rattlesnake-muted);
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 0.7em;
          letter-spacing: 0.2em;
          text-align: justify;
        }
        .jk-shy-rattlesnake-admit {
          text-align: right;
        }
        .jk-shy-rattlesnake-admit-label {
          color: var(--jk-shy-rattlesnake-muted);
          font-size: 0.7em;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .jk-shy-rattlesnake-admit-num {
          color: var(--jk-shy-rattlesnake-accent);
          font-size: 3em;
          font-weight: 900;
          line-height: 1;
          text-shadow: 0 0 1.5em
            color-mix(in oklab, var(--jk-shy-rattlesnake-accent) 50%, transparent);
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-shy-rattlesnake[data-animate="true"] .jk-shy-rattlesnake-ticket,
          .jk-shy-rattlesnake[data-animate="true"] .jk-shy-rattlesnake-ticket::after {
            transition:
              transform 0.6s cubic-bezier(0.23, 1, 0.32, 1),
              box-shadow 0.6s ease,
              background-position 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          }
          .jk-shy-rattlesnake[data-animate="true"] .jk-shy-rattlesnake-stub {
            transition:
              transform 0.2s ease,
              opacity 0.2s ease;
          }
          .jk-shy-rattlesnake[data-animate="true"] .jk-shy-rattlesnake-main::after {
            animation: jk-shy-rattlesnake-grid 20s linear infinite;
          }
          .jk-shy-rattlesnake[data-animate="true"] .jk-shy-rattlesnake-mark {
            animation: jk-shy-rattlesnake-pulse 3s ease-in-out infinite alternate;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-shy-rattlesnake-ticket,
          .jk-shy-rattlesnake-ticket::after,
          .jk-shy-rattlesnake-stub,
          .jk-shy-rattlesnake-mark,
          .jk-shy-rattlesnake-main::after {
            animation: none;
            transition: none;
          }
          .jk-shy-rattlesnake:hover .jk-shy-rattlesnake-ticket,
          .jk-shy-rattlesnake:active .jk-shy-rattlesnake-ticket {
            transform: none;
            box-shadow:
              0 2em 4em color-mix(in oklab, var(--jk-foreground) 80%, transparent),
              0 0 0 0.1em color-mix(in oklab, var(--jk-shy-rattlesnake-hi) 5%, transparent);
          }
          .jk-shy-rattlesnake:active .jk-shy-rattlesnake-stub {
            transform: none;
            opacity: 1;
          }
        }
        @keyframes jk-shy-rattlesnake-grid {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 0 4em;
          }
        }
        @keyframes jk-shy-rattlesnake-pulse {
          from {
            filter: drop-shadow(
              0 0 0.2em color-mix(in oklab, var(--jk-shy-rattlesnake-accent) 80%, transparent)
            );
          }
          to {
            filter: drop-shadow(
              0 0 1em color-mix(in oklab, var(--jk-shy-rattlesnake-accent) 80%, transparent)
            )
            brightness(1.2);
          }
        }
      `}</style>
      <div className="jk-shy-rattlesnake-ticket">
        <div className="jk-shy-rattlesnake-main">
          <div className="jk-shy-rattlesnake-body">
            <div className="jk-shy-rattlesnake-head">
              <div className="jk-shy-rattlesnake-brand">
                <LayersMark />
                {brand}
              </div>
              <span className="jk-shy-rattlesnake-badge">{badge}</span>
            </div>
            <h3 className="jk-shy-rattlesnake-title">{title}</h3>
            <p className="jk-shy-rattlesnake-subtitle">{subtitle}</p>
            <dl className="jk-shy-rattlesnake-details">
              {rows.map((row) => (
                <div className="jk-shy-rattlesnake-item" key={`${row.label}-${row.value}`}>
                  <dt className="jk-shy-rattlesnake-label">{row.label}</dt>
                  <dd className="jk-shy-rattlesnake-value">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div aria-hidden="true" className="jk-shy-rattlesnake-perf">
            <div className="jk-shy-rattlesnake-perf-line" />
          </div>
        </div>
        <div className="jk-shy-rattlesnake-stub">
          <div className="jk-shy-rattlesnake-code-wrap">
            <div aria-hidden="true" className="jk-shy-rattlesnake-bars" />
            <div className="jk-shy-rattlesnake-code">{barcode}</div>
          </div>
          <div className="jk-shy-rattlesnake-admit">
            <div className="jk-shy-rattlesnake-admit-label">{seatLabel}</div>
            <div className="jk-shy-rattlesnake-admit-num">{seat}</div>
          </div>
        </div>
      </div>
    </article>
  );
}
