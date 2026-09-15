// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { JollyChickenProps } from "./JollyChicken.types";

const sizes = {
  sm: "jk-jolly-chicken-sm",
  md: "jk-jolly-chicken-md",
  lg: "jk-jolly-chicken-lg",
} as const;

const starPath =
  "M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z";

function CircleMark({ className }: { className: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="50" />
    </svg>
  );
}

function StarMark({ className }: { className: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 20 20">
      <path d={starPath} />
    </svg>
  );
}

export function JollyChicken({
  className,
  size = "md",
  label = "Toggle night mode",
  disabled,
  ...props
}: JollyChickenProps) {
  return (
    <label
      className={cn(
        "jk-jolly-chicken",
        sizes[size],
        disabled && "jk-jolly-chicken-disabled",
        className,
      )}
      data-size={size}
      data-slot="jolly-chicken"
    >
      <style href="jk-jolly-chicken" precedence="default">{`
        .jk-jolly-chicken {
          --jk-jolly-chicken-day: var(--jk-chart-1);
          --jk-jolly-chicken-night: color-mix(
            in oklab,
            var(--jk-foreground) 92%,
            var(--jk-background)
          );
          --jk-jolly-chicken-sun: var(--jk-warning);
          --jk-jolly-chicken-moon: color-mix(
            in oklab,
            var(--jk-card) 72%,
            var(--jk-primary-foreground)
          );
          --jk-jolly-chicken-crater: var(--jk-muted-foreground);
          --jk-jolly-chicken-ray: color-mix(
            in oklab,
            var(--jk-card) 55%,
            var(--jk-primary-foreground)
          );
          --jk-jolly-chicken-cloud-light: color-mix(
            in oklab,
            var(--jk-card) 88%,
            var(--jk-primary-foreground)
          );
          --jk-jolly-chicken-cloud-dark: color-mix(
            in oklab,
            var(--jk-muted) 62%,
            var(--jk-card)
          );
          --jk-jolly-chicken-star: color-mix(
            in oklab,
            var(--jk-card) 70%,
            var(--jk-primary-foreground)
          );
          position: relative;
          display: inline-block;
          width: 60px;
          height: 34px;
          flex-shrink: 0;
          cursor: pointer;
        }
        .jk-jolly-chicken-sm {
          width: 48px;
          height: 27.2px;
        }
        .jk-jolly-chicken-lg {
          width: 75px;
          height: 42.5px;
        }
        .jk-jolly-chicken-sm .jk-jolly-chicken-switch {
          transform: scale(0.8);
          transform-origin: top left;
        }
        .jk-jolly-chicken-lg .jk-jolly-chicken-switch {
          transform: scale(1.25);
          transform-origin: top left;
        }
        .jk-jolly-chicken-disabled {
          cursor: not-allowed;
          opacity: 0.5;
        }
        .jk-jolly-chicken-input {
          position: absolute;
          width: 0;
          height: 0;
          margin: 0;
          opacity: 0;
        }
        .jk-jolly-chicken-switch {
          position: absolute;
          inset: 0;
          width: 60px;
          height: 34px;
        }
        .jk-jolly-chicken-slider {
          position: absolute;
          inset: 0;
          overflow: hidden;
          border-radius: 34px;
          background: var(--jk-jolly-chicken-day);
          z-index: 0;
        }
        .jk-jolly-chicken-input:checked + .jk-jolly-chicken-switch
          .jk-jolly-chicken-slider {
          background: var(--jk-jolly-chicken-night);
        }
        .jk-jolly-chicken-input:focus-visible + .jk-jolly-chicken-switch
          .jk-jolly-chicken-slider {
          outline: 2px solid var(--jk-ring);
          outline-offset: 3px;
        }
        .jk-jolly-chicken-sun-moon {
          position: absolute;
          left: 4px;
          bottom: 4px;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: var(--jk-jolly-chicken-sun);
        }
        .jk-jolly-chicken-input:checked + .jk-jolly-chicken-switch
          .jk-jolly-chicken-sun-moon {
          transform: translateX(26px);
          background: var(--jk-jolly-chicken-moon);
        }
        .jk-jolly-chicken-moon-dot {
          position: absolute;
          z-index: 4;
          fill: var(--jk-jolly-chicken-crater);
          opacity: 0;
        }
        .jk-jolly-chicken-input:checked + .jk-jolly-chicken-switch
          .jk-jolly-chicken-moon-dot {
          opacity: 1;
        }
        .jk-jolly-chicken-moon-dot-1 {
          left: 10px;
          top: 3px;
          width: 6px;
          height: 6px;
        }
        .jk-jolly-chicken-moon-dot-2 {
          left: 2px;
          top: 10px;
          width: 10px;
          height: 10px;
        }
        .jk-jolly-chicken-moon-dot-3 {
          left: 16px;
          top: 18px;
          width: 3px;
          height: 3px;
        }
        .jk-jolly-chicken-light-ray {
          position: absolute;
          z-index: -1;
          fill: var(--jk-jolly-chicken-ray);
          opacity: 0.1;
        }
        .jk-jolly-chicken-light-ray-1 {
          left: -8px;
          top: -8px;
          width: 43px;
          height: 43px;
        }
        .jk-jolly-chicken-light-ray-2 {
          left: -50%;
          top: -50%;
          width: 55px;
          height: 55px;
        }
        .jk-jolly-chicken-light-ray-3 {
          left: -18px;
          top: -18px;
          width: 60px;
          height: 60px;
        }
        .jk-jolly-chicken-cloud-light,
        .jk-jolly-chicken-cloud-dark {
          position: absolute;
        }
        .jk-jolly-chicken-cloud-light {
          fill: var(--jk-jolly-chicken-cloud-light);
        }
        .jk-jolly-chicken-cloud-dark {
          fill: var(--jk-jolly-chicken-cloud-dark);
        }
        .jk-jolly-chicken-cloud-1 {
          left: 30px;
          top: 15px;
          width: 40px;
        }
        .jk-jolly-chicken-cloud-2 {
          left: 44px;
          top: 10px;
          width: 20px;
        }
        .jk-jolly-chicken-cloud-3 {
          left: 18px;
          top: 24px;
          width: 30px;
        }
        .jk-jolly-chicken-cloud-4 {
          left: 36px;
          top: 18px;
          width: 40px;
        }
        .jk-jolly-chicken-cloud-5 {
          left: 48px;
          top: 14px;
          width: 20px;
        }
        .jk-jolly-chicken-cloud-6 {
          left: 22px;
          top: 26px;
          width: 30px;
        }
        .jk-jolly-chicken-stars {
          position: absolute;
          inset: 0;
          transform: translateY(-32px);
          opacity: 0;
        }
        .jk-jolly-chicken-input:checked + .jk-jolly-chicken-switch
          .jk-jolly-chicken-stars {
          transform: translateY(0);
          opacity: 1;
        }
        .jk-jolly-chicken-star {
          position: absolute;
          fill: var(--jk-jolly-chicken-star);
        }
        .jk-jolly-chicken-star-1 {
          width: 20px;
          top: 2px;
          left: 3px;
        }
        .jk-jolly-chicken-star-2 {
          width: 6px;
          top: 16px;
          left: 3px;
        }
        .jk-jolly-chicken-star-3 {
          width: 12px;
          top: 20px;
          left: 10px;
        }
        .jk-jolly-chicken-star-4 {
          width: 18px;
          top: 0;
          left: 18px;
        }
        @keyframes jk-jolly-chicken-rotate {
          0% {
            transform: translateX(26px) rotate(0deg);
          }
          100% {
            transform: translateX(26px) rotate(360deg);
          }
        }
        @keyframes jk-jolly-chicken-cloud {
          0% {
            transform: translateX(0);
          }
          40% {
            transform: translateX(4px);
          }
          80% {
            transform: translateX(-4px);
          }
          100% {
            transform: translateX(0);
          }
        }
        @keyframes jk-jolly-chicken-twinkle {
          0% {
            transform: scale(1);
          }
          40% {
            transform: scale(1.2);
          }
          80% {
            transform: scale(0.8);
          }
          100% {
            transform: scale(1);
          }
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-jolly-chicken-slider,
          .jk-jolly-chicken-sun-moon,
          .jk-jolly-chicken-moon-dot,
          .jk-jolly-chicken-stars,
          .jk-jolly-chicken-star {
            transition: 0.4s;
          }
          .jk-jolly-chicken-input:checked + .jk-jolly-chicken-switch
            .jk-jolly-chicken-sun-moon {
            animation: jk-jolly-chicken-rotate 0.6s ease-in-out both;
          }
          .jk-jolly-chicken-cloud-light,
          .jk-jolly-chicken-cloud-dark {
            animation: jk-jolly-chicken-cloud 6s infinite;
          }
          .jk-jolly-chicken-cloud-dark {
            animation-delay: 1s;
          }
          .jk-jolly-chicken-star {
            animation: jk-jolly-chicken-twinkle 2s infinite;
          }
          .jk-jolly-chicken-star-1 {
            animation-delay: 0.3s;
          }
          .jk-jolly-chicken-star-3 {
            animation-delay: 0.6s;
          }
          .jk-jolly-chicken-star-4 {
            animation-delay: 1.3s;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-jolly-chicken-slider,
          .jk-jolly-chicken-sun-moon,
          .jk-jolly-chicken-moon-dot,
          .jk-jolly-chicken-stars,
          .jk-jolly-chicken-star,
          .jk-jolly-chicken-cloud-light,
          .jk-jolly-chicken-cloud-dark {
            transition: none;
            animation: none;
          }
        }
      `}</style>
      <input
        aria-label={label}
        className="jk-jolly-chicken-input"
        disabled={disabled}
        type="checkbox"
        {...props}
      />
      <span aria-hidden="true" className="jk-jolly-chicken-switch">
        <span className="jk-jolly-chicken-slider">
          <span className="jk-jolly-chicken-sun-moon">
            <CircleMark className="jk-jolly-chicken-moon-dot jk-jolly-chicken-moon-dot-1" />
            <CircleMark className="jk-jolly-chicken-moon-dot jk-jolly-chicken-moon-dot-2" />
            <CircleMark className="jk-jolly-chicken-moon-dot jk-jolly-chicken-moon-dot-3" />
            <CircleMark className="jk-jolly-chicken-light-ray jk-jolly-chicken-light-ray-1" />
            <CircleMark className="jk-jolly-chicken-light-ray jk-jolly-chicken-light-ray-2" />
            <CircleMark className="jk-jolly-chicken-light-ray jk-jolly-chicken-light-ray-3" />
            <CircleMark className="jk-jolly-chicken-cloud-dark jk-jolly-chicken-cloud-1" />
            <CircleMark className="jk-jolly-chicken-cloud-dark jk-jolly-chicken-cloud-2" />
            <CircleMark className="jk-jolly-chicken-cloud-dark jk-jolly-chicken-cloud-3" />
            <CircleMark className="jk-jolly-chicken-cloud-light jk-jolly-chicken-cloud-4" />
            <CircleMark className="jk-jolly-chicken-cloud-light jk-jolly-chicken-cloud-5" />
            <CircleMark className="jk-jolly-chicken-cloud-light jk-jolly-chicken-cloud-6" />
          </span>
          <span className="jk-jolly-chicken-stars">
            <StarMark className="jk-jolly-chicken-star jk-jolly-chicken-star-1" />
            <StarMark className="jk-jolly-chicken-star jk-jolly-chicken-star-2" />
            <StarMark className="jk-jolly-chicken-star jk-jolly-chicken-star-3" />
            <StarMark className="jk-jolly-chicken-star jk-jolly-chicken-star-4" />
          </span>
        </span>
      </span>
    </label>
  );
}
