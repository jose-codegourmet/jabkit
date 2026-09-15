// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { ShyRattlesnakeProps } from "./ShyRattlesnake.types";

export function ShyRattlesnake({
  className,
  brand = "JabKit",
  badge = "Dev Pass",
  title = "North Loop 26",
  subtitle = "Global developer conference",
  details,
  barcode = "JK-77-9X04-DEV",
  seatLabel = "Seat",
  seat = "42",
  animate = true,
  ...props
}: ShyRattlesnakeProps) {
  const rows = details ?? [
    { label: "Name", value: "Mira Chen" },
    { label: "Date", value: "Oct 24, 2026" },
    { label: "Venue", value: "Harbor Pier Hall" },
    { label: "Gate", value: "Dock 7" },
  ];

  return (
    <article
      className={cn("jk-shy-rattlesnake inline-block", className)}
      data-animate={animate ? "true" : "false"}
      data-slot="shy-rattlesnake"
      {...props}
    >
      <style href="jk-shy-rattlesnake" precedence="default">{`
        .jk-shy-rattlesnake {
          font-size: 10px;
          perspective: 64em;
        }
        .jk-shy-rattlesnake-pass {
          position: relative;
          width: 22em;
          color: var(--jk-card-foreground);
          transform-style: preserve-3d;
          filter: drop-shadow(
            0 1.2em 2em color-mix(in oklab, var(--jk-foreground) 28%, transparent)
          );
        }
        .jk-shy-rattlesnake-pass::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 4;
          pointer-events: none;
          border-radius: 1em;
          background: linear-gradient(
            115deg,
            transparent 0 40%,
            color-mix(in oklab, var(--jk-card) 18%, transparent) 48%,
            color-mix(in oklab, var(--jk-card) 55%, transparent) 50%,
            color-mix(in oklab, var(--jk-card) 18%, transparent) 52%,
            transparent 60% 100%
          );
          background-size: 250% 250%;
          background-position: 100% 100%;
          mix-blend-mode: overlay;
        }
        .jk-shy-rattlesnake:hover .jk-shy-rattlesnake-pass {
          transform: rotateX(5deg) rotateY(-10deg) scale(1.02);
        }
        .jk-shy-rattlesnake:hover .jk-shy-rattlesnake-pass::after {
          background-position: 0% 0%;
        }
        .jk-shy-rattlesnake:active .jk-shy-rattlesnake-pass {
          transform: rotateX(12deg) rotateY(-4deg) scale(0.98);
        }
        .jk-shy-rattlesnake:active .jk-shy-rattlesnake-stub {
          transform: translateY(0.4em) rotate(1.5deg);
          opacity: 0.85;
        }
        .jk-shy-rattlesnake-face {
          position: relative;
          overflow: hidden;
          padding: 2em;
          border-top-left-radius: 1em;
          border-top-right-radius: 1em;
          background:
            radial-gradient(
              circle at bottom left,
              transparent 1em,
              var(--jk-card) 1.05em
            ),
            radial-gradient(
              circle at bottom right,
              transparent 1em,
              var(--jk-card) 1.05em
            );
          background-repeat: no-repeat;
          background-size: 51% 100%;
          background-position: bottom left, bottom right;
        }
        .jk-shy-rattlesnake-grid {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          opacity: 0.45;
          background-image:
            linear-gradient(
              color-mix(in oklab, var(--jk-primary) 22%, transparent) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              color-mix(in oklab, var(--jk-primary) 22%, transparent) 1px,
              transparent 1px
            );
          background-size: 2em 2em;
          transform: perspective(32em) rotateX(18deg) scale(1.45);
          transform-origin: center bottom;
        }
        .jk-shy-rattlesnake-body {
          position: relative;
          z-index: 1;
        }
        .jk-shy-rattlesnake-head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 1.8em;
        }
        .jk-shy-rattlesnake-brand {
          display: inline-flex;
          align-items: center;
          gap: 0.5em;
          font-weight: 800;
          font-size: 1.2em;
          letter-spacing: -0.04em;
        }
        .jk-shy-rattlesnake-mark {
          width: 1.35em;
          height: 1.35em;
          border-radius: 0.28em;
          background: var(--jk-primary);
          box-shadow: 0 0 0.7em color-mix(in oklab, var(--jk-primary) 55%, transparent);
        }
        .jk-shy-rattlesnake-badge {
          border: 1px solid var(--jk-primary);
          border-radius: 99em;
          padding: 0.35em 0.75em;
          color: var(--jk-primary);
          font-size: 0.62em;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }
        .jk-shy-rattlesnake-title {
          margin: 0 0 0.25em;
          font-size: 2.35em;
          font-weight: 900;
          line-height: 1.08;
          text-transform: uppercase;
          background: linear-gradient(
            135deg,
            var(--jk-card-foreground) 0%,
            color-mix(in oklab, var(--jk-primary) 55%, var(--jk-card-foreground)) 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .jk-shy-rattlesnake-subtitle {
          margin: 0 0 2em;
          color: var(--jk-muted-foreground);
          font-size: 0.92em;
        }
        .jk-shy-rattlesnake-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.35em 1.2em;
        }
        .jk-shy-rattlesnake-label {
          display: block;
          color: var(--jk-muted-foreground);
          font-size: 0.6em;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .jk-shy-rattlesnake-value {
          display: block;
          margin-top: 0.2em;
          font-size: 1.08em;
          font-weight: 700;
        }
        .jk-shy-rattlesnake-perf {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          height: 1em;
        }
        .jk-shy-rattlesnake-perf::before {
          content: "";
          flex: 1;
          border-top: 2px dashed color-mix(in oklab, var(--jk-border) 80%, transparent);
          margin: 0 1.4em;
        }
        .jk-shy-rattlesnake-stub {
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
              var(--jk-muted) 1.05em
            ),
            radial-gradient(
              circle at top right,
              transparent 1em,
              var(--jk-muted) 1.05em
            );
          background-repeat: no-repeat;
          background-size: 51% 100%;
          background-position: top left, top right;
        }
        .jk-shy-rattlesnake-bars {
          width: 10em;
          height: 3em;
          background: repeating-linear-gradient(
            90deg,
            var(--jk-foreground) 0 0.14em,
            transparent 0.14em 0.28em,
            var(--jk-foreground) 0.28em 0.36em,
            transparent 0.36em 0.58em,
            var(--jk-foreground) 0.58em 0.86em,
            transparent 0.86em 1.08em,
            var(--jk-foreground) 1.08em 1.16em,
            transparent 1.16em 1.3em
          );
          opacity: 0.72;
        }
        .jk-shy-rattlesnake-code {
          margin-top: 0.45em;
          color: var(--jk-muted-foreground);
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 0.7em;
          letter-spacing: 0.18em;
        }
        .jk-shy-rattlesnake-admit {
          text-align: right;
        }
        .jk-shy-rattlesnake-admit-label {
          color: var(--jk-muted-foreground);
          font-size: 0.68em;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .jk-shy-rattlesnake-admit-num {
          color: var(--jk-primary);
          font-size: 2.8em;
          font-weight: 900;
          line-height: 1;
          text-shadow: 0 0 0.8em color-mix(in oklab, var(--jk-primary) 45%, transparent);
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-shy-rattlesnake[data-animate="true"] .jk-shy-rattlesnake-pass,
          .jk-shy-rattlesnake[data-animate="true"] .jk-shy-rattlesnake-pass::after,
          .jk-shy-rattlesnake[data-animate="true"] .jk-shy-rattlesnake-stub,
          .jk-shy-rattlesnake[data-animate="true"] .jk-shy-rattlesnake-mark {
            transition:
              transform 600ms cubic-bezier(0.23, 1, 0.32, 1),
              background-position 600ms cubic-bezier(0.23, 1, 0.32, 1),
              box-shadow 600ms ease,
              opacity 200ms ease,
              filter 1.6s ease;
          }
          .jk-shy-rattlesnake[data-animate="true"] .jk-shy-rattlesnake-grid {
            animation: jk-shy-rattlesnake-grid 18s linear infinite;
          }
          .jk-shy-rattlesnake[data-animate="true"] .jk-shy-rattlesnake-mark {
            animation: jk-shy-rattlesnake-pulse 3s ease-in-out infinite alternate;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-shy-rattlesnake-pass,
          .jk-shy-rattlesnake-pass::after,
          .jk-shy-rattlesnake-stub,
          .jk-shy-rattlesnake-mark,
          .jk-shy-rattlesnake-grid {
            animation: none;
            transition: none;
          }
          .jk-shy-rattlesnake:hover .jk-shy-rattlesnake-pass,
          .jk-shy-rattlesnake:active .jk-shy-rattlesnake-pass {
            transform: none;
          }
          .jk-shy-rattlesnake:active .jk-shy-rattlesnake-stub {
            transform: none;
            opacity: 1;
          }
        }
        @keyframes jk-shy-rattlesnake-grid {
          to {
            background-position: 0 4em;
          }
        }
        @keyframes jk-shy-rattlesnake-pulse {
          from {
            box-shadow: 0 0 0.25em color-mix(in oklab, var(--jk-primary) 40%, transparent);
          }
          to {
            box-shadow: 0 0 0.9em color-mix(in oklab, var(--jk-primary) 70%, transparent);
          }
        }
      `}</style>
      <div className="jk-shy-rattlesnake-pass">
        <div className="jk-shy-rattlesnake-face">
          <span aria-hidden="true" className="jk-shy-rattlesnake-grid" />
          <div className="jk-shy-rattlesnake-body">
            <div className="jk-shy-rattlesnake-head">
              <div className="jk-shy-rattlesnake-brand">
                <span aria-hidden="true" className="jk-shy-rattlesnake-mark" />
                {brand}
              </div>
              <span className="jk-shy-rattlesnake-badge">{badge}</span>
            </div>
            <h3 className="jk-shy-rattlesnake-title">{title}</h3>
            <p className="jk-shy-rattlesnake-subtitle">{subtitle}</p>
            <dl className="jk-shy-rattlesnake-details">
              {rows.map((row) => (
                <div key={`${row.label}-${row.value}`}>
                  <dt className="jk-shy-rattlesnake-label">{row.label}</dt>
                  <dd className="jk-shy-rattlesnake-value m-0">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div aria-hidden="true" className="jk-shy-rattlesnake-perf" />
        <div className="jk-shy-rattlesnake-stub">
          <div>
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
