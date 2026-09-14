"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const SHEET_SRC = "/logo-avatar.webp";
const COLUMNS = 4;
const ROWS = 3;
const SETTLE_MS = 900;
const IDLE_MS = 12_000;
const SCROLL_THROTTLE_MS = 400;
const ANGRY_WINDOW_MS = 1_200;
const ANGRY_CLICKS = 4;
const INTERACTIVE_SELECTOR = "a,button,[role=button],[role=link]";

type Expression =
  | "neutral"
  | "smile"
  | "surprised"
  | "laugh"
  | "sad"
  | "angry"
  | "wink"
  | "confused"
  | "thinking"
  | "excited"
  | "worried"
  | "bored";

const CELL: Record<Expression, readonly [number, number]> = {
  neutral: [0, 0],
  smile: [0, 1],
  surprised: [0, 2],
  laugh: [0, 3],
  sad: [1, 0],
  angry: [1, 1],
  wink: [1, 2],
  confused: [1, 3],
  thinking: [2, 0],
  excited: [2, 1],
  worried: [2, 2],
  bored: [2, 3],
};

function joinClassName(...parts: Array<string | undefined>) {
  return parts.filter(Boolean).join(" ");
}

function closestInteractive(target: EventTarget | null) {
  if (!(target instanceof Element)) return null;
  return target.closest(INTERACTIVE_SELECTOR);
}

function isTypingTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;
  if (target.isContentEditable) return true;
  const tag = target.tagName;
  return tag === "INPUT" || tag === "TEXTAREA";
}

function isInvalidTarget(target: EventTarget | null) {
  if (!(target instanceof Element)) return false;
  return Boolean(target.closest('[aria-invalid="true"]'));
}

function interactiveKind(element: Element) {
  const role = element.getAttribute("role");
  if (element.tagName === "A" || role === "link") return "link" as const;
  if (element.tagName === "BUTTON" || role === "button")
    return "button" as const;
  return "other" as const;
}

export function LogoAvatar({ className }: { className?: string }) {
  const [expression, setExpression] = useState<Expression>("neutral");
  const [sheetFailed, setSheetFailed] = useState(false);
  const rootRef = useRef<HTMLSpanElement>(null);
  const expressionRef = useRef<Expression>("neutral");
  const settleTimer = useRef(0);
  const idleTimer = useRef(0);
  const lastScrollAt = useRef(0);
  const clickTimes = useRef<number[]>([]);

  const react = useCallback((next: Expression) => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.clearTimeout(idleTimer.current);
    if (!reduced) {
      idleTimer.current = window.setTimeout(() => {
        expressionRef.current = "bored";
        setExpression("bored");
      }, IDLE_MS);
    }

    window.clearTimeout(settleTimer.current);
    settleTimer.current = window.setTimeout(() => {
      if (expressionRef.current === "bored") return;
      expressionRef.current = "neutral";
      setExpression("neutral");
    }, SETTLE_MS);

    if (expressionRef.current === next) return;
    expressionRef.current = next;
    setExpression(next);
  }, []);

  useEffect(() => {
    const image = new window.Image();
    image.onload = () => setSheetFailed(false);
    image.onerror = () => setSheetFailed(true);
    image.src = SHEET_SRC;
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const armIdle = () => {
      window.clearTimeout(idleTimer.current);
      if (media.matches) return;
      idleTimer.current = window.setTimeout(() => {
        expressionRef.current = "bored";
        setExpression("bored");
      }, IDLE_MS);
    };
    armIdle();
    media.addEventListener("change", armIdle);
    return () => {
      media.removeEventListener("change", armIdle);
      window.clearTimeout(settleTimer.current);
      window.clearTimeout(idleTimer.current);
    };
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const root = rootRef.current;

    const onPointerOver = (event: PointerEvent) => {
      if (closestInteractive(event.target)) react("wink");
    };
    const onClick = (event: MouseEvent) => {
      const now = Date.now();
      clickTimes.current = clickTimes.current.filter(
        (time) => now - time < ANGRY_WINDOW_MS,
      );
      clickTimes.current.push(now);
      if (clickTimes.current.length >= ANGRY_CLICKS) {
        react("angry");
        return;
      }
      const interactive = closestInteractive(event.target);
      if (!interactive) {
        react("confused");
        return;
      }
      const kind = interactiveKind(interactive);
      react(kind === "link" ? "excited" : "laugh");
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (isTypingTarget(event.target)) react("thinking");
    };
    const onScroll = () => {
      const now = Date.now();
      if (now - lastScrollAt.current < SCROLL_THROTTLE_MS) return;
      lastScrollAt.current = now;
      react("surprised");
    };
    const onCopy = () => react("excited");
    const onFocusIn = (event: FocusEvent) => {
      if (isInvalidTarget(event.target)) react("sad");
    };
    const onVisibility = () => {
      if (document.visibilityState === "visible") react("worried");
    };
    const onLogoPointerEnter = () => react("wink");
    const onLogoClick = () => react("excited");

    const attachGlobal = () => {
      document.addEventListener("pointerover", onPointerOver, true);
      document.addEventListener("click", onClick, true);
      document.addEventListener("keydown", onKeyDown, true);
      document.addEventListener("copy", onCopy, true);
      document.addEventListener("focusin", onFocusIn, true);
      document.addEventListener("visibilitychange", onVisibility);
      window.addEventListener("scroll", onScroll, { passive: true });
    };
    const detachGlobal = () => {
      document.removeEventListener("pointerover", onPointerOver, true);
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("keydown", onKeyDown, true);
      document.removeEventListener("copy", onCopy, true);
      document.removeEventListener("focusin", onFocusIn, true);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("scroll", onScroll);
    };
    const attachLocal = () => {
      root?.addEventListener("pointerenter", onLogoPointerEnter);
      root?.addEventListener("click", onLogoClick);
    };
    const detachLocal = () => {
      root?.removeEventListener("pointerenter", onLogoPointerEnter);
      root?.removeEventListener("click", onLogoClick);
    };

    const sync = () => {
      detachGlobal();
      detachLocal();
      if (media.matches) attachLocal();
      else attachGlobal();
    };

    sync();
    media.addEventListener("change", sync);
    return () => {
      media.removeEventListener("change", sync);
      detachGlobal();
      detachLocal();
    };
  }, [react]);

  if (sheetFailed) {
    return (
      <span
        className={joinClassName(
          "grid place-items-center rounded-md bg-primary font-mono text-sm text-primary-foreground",
          className,
        )}
        aria-hidden="true"
      >
        J
      </span>
    );
  }

  const [row, column] = CELL[expression];

  return (
    <span
      ref={rootRef}
      className={joinClassName(
        "inline-block shrink-0 bg-transparent bg-no-repeat",
        className,
      )}
      style={{
        backgroundImage: `url(${SHEET_SRC})`,
        backgroundSize: `${COLUMNS * 100}% ${ROWS * 100}%`,
        backgroundPosition: `${(column / (COLUMNS - 1)) * 100}% ${(row / (ROWS - 1)) * 100}%`,
      }}
      aria-hidden="true"
    />
  );
}
