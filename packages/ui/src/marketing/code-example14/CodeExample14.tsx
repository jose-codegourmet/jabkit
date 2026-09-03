"use client";

import {
  type KeyboardEvent,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useState,
} from "react";
import { Button } from "@/atoms/button";
import { cn } from "@/lib/cn";
import type {
  CodeExample14Action,
  CodeExample14Icon,
  CodeExample14Item,
  CodeExample14Props,
} from "./CodeExample14.types";

const DEFAULT_KICKER = "File operations";
const DEFAULT_TITLE = "One client for create, update, and delete.";
const DEFAULT_DESCRIPTION =
  "Walk a file through its full lifecycle with a single TypeScript SDK. Open a flow on the left to load the matching snippet.";
const DEFAULT_PRIMARY: CodeExample14Action = {
  label: "Start with files",
  href: "#start",
};
const DEFAULT_SECONDARY: CodeExample14Action = {
  label: "Read the SDK",
  href: "#docs",
};

const DEFAULT_ITEMS: CodeExample14Item[] = [
  {
    id: "create",
    title: "Create a file",
    description:
      "Write a new object with a path, mime type, and body. The client returns a durable id you can pass to later calls.",
    icon: "create",
    fileName: "create-file.ts",
    language: "TypeScript",
    code: `import { Files } from "@northline/storage";

const files = new Files({ token: process.env.NORTHLINE_TOKEN });

const created = await files.create({
  path: "briefs/q3-launch.md",
  mime: "text/markdown",
  body: "# Q3 launch\\nDraft the customer email first.",
});

console.log(created.id);`,
  },
  {
    id: "update",
    title: "Update a file",
    description:
      "Patch the path or body in place. Each write bumps a revision so you can audit what changed.",
    icon: "update",
    fileName: "update-file.ts",
    language: "TypeScript",
    code: `import { Files } from "@northline/storage";

const files = new Files({ token: process.env.NORTHLINE_TOKEN });

const revised = await files.update("file_18c2", {
  path: "briefs/q3-launch.md",
  body: "# Q3 launch\\nReady for legal review.",
});

console.log(revised.revision);`,
  },
  {
    id: "delete",
    title: "Delete a file",
    description:
      "Remove an object with a reason code. Set purge when the bytes should leave the vault immediately.",
    icon: "delete",
    fileName: "delete-file.ts",
    language: "TypeScript",
    code: `import { Files } from "@northline/storage";

const files = new Files({ token: process.env.NORTHLINE_TOKEN });

await files.remove("file_18c2", {
  reason: "superseded",
  purge: true,
});`,
  },
];

function ActionButton({
  action,
  variant,
}: {
  action: CodeExample14Action;
  variant: "primary" | "secondary";
}) {
  if (action.href) {
    return (
      <Button variant={variant} size="lg" asChild>
        <a href={action.href}>{action.label}</a>
      </Button>
    );
  }
  return (
    <Button variant={variant} size="lg" onClick={action.onClick}>
      {action.label}
    </Button>
  );
}

function IconGlyph({
  name,
  className,
}: {
  name: CodeExample14Icon;
  className?: string;
}) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
  };
  if (name === "update") {
    return (
      <svg aria-hidden="true" {...common}>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
      </svg>
    );
  }
  if (name === "delete") {
    return (
      <svg aria-hidden="true" {...common}>
        <path d="M4 7h16" />
        <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
        <path d="M18 7v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7" />
        <path d="M10 11v6" />
        <path d="M14 11v6" />
      </svg>
    );
  }
  if (name === "folder") {
    return (
      <svg aria-hidden="true" {...common}>
        <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5Z" />
      </svg>
    );
  }
  return (
    <svg aria-hidden="true" {...common}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

function CopyIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="9" y="9" width="12" height="12" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12.5 10 17.5 19 7" />
    </svg>
  );
}

export function CodeExample14({
  className,
  kicker = DEFAULT_KICKER,
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  primaryAction = DEFAULT_PRIMARY,
  secondaryAction = DEFAULT_SECONDARY,
  items = DEFAULT_ITEMS,
  defaultItemId,
  ...props
}: CodeExample14Props) {
  const headingId = useId();
  const listId = useId();
  const initialId =
    defaultItemId && items.some((item) => item.id === defaultItemId)
      ? defaultItemId
      : (items[0]?.id ?? "");
  const [openId, setOpenId] = useState(initialId);
  const [copied, setCopied] = useState(false);

  const openItem = useMemo(
    () => items.find((item) => item.id === openId) ?? items[0],
    [items, openId],
  );

  const selectItem = useCallback((id: string) => {
    setOpenId(id);
    setCopied(false);
  }, []);

  useEffect(() => {
    if (items.length === 0) return;
    const first = items[0];
    if (first && !items.some((item) => item.id === openId)) {
      setOpenId(first.id);
      setCopied(false);
    }
  }, [items, openId]);

  const copyCode = useCallback(async () => {
    const source = openItem?.code ?? "";
    if (!source) return;
    try {
      await navigator.clipboard.writeText(source);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }, [openItem?.code]);

  const onAccordionKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const enabled = items.map((item) => item.id);
    const current = event.currentTarget.id.slice(`${listId}-`.length);
    const index = enabled.indexOf(current);
    if (index < 0) return;
    let next: string | undefined;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      event.preventDefault();
      next = enabled[(index + 1) % enabled.length];
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      event.preventDefault();
      next = enabled[(index - 1 + enabled.length) % enabled.length];
    } else if (event.key === "Home") {
      event.preventDefault();
      next = enabled[0];
    } else if (event.key === "End") {
      event.preventDefault();
      next = enabled[enabled.length - 1];
    }
    if (next) document.getElementById(`${listId}-${next}`)?.focus();
  };

  return (
    <section
      data-slot="code-example14"
      aria-labelledby={headingId}
      className={cn(
        "relative overflow-hidden bg-background text-foreground",
        className,
      )}
      {...props}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_85%_60%_at_50%_0%,var(--jk-foreground)_28%,transparent_78%)]"
        style={{
          backgroundImage: `radial-gradient(circle, color-mix(in oklab, var(--jk-border), transparent 18%) 1.15px, transparent 1.2px)`,
          backgroundSize: "18px 18px",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="max-w-2xl">
          {kicker ? (
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
              <span className="grid size-5 place-items-center text-foreground">
                <IconGlyph name="folder" className="size-3.5" />
              </span>
              {kicker}
            </p>
          ) : null}
          <h2
            id={headingId}
            className="mt-5 text-3xl leading-[1.12] font-semibold tracking-[-0.04em] text-balance sm:text-4xl lg:text-5xl"
          >
            {title}
          </h2>
          {description ? (
            <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {description}
            </p>
          ) : null}
          {primaryAction || secondaryAction ? (
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {primaryAction ? (
                <ActionButton action={primaryAction} variant="primary" />
              ) : null}
              {secondaryAction ? (
                <ActionButton action={secondaryAction} variant="secondary" />
              ) : null}
            </div>
          ) : null}
        </div>

        <div className="mt-12 grid items-start gap-6 lg:mt-16 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-8">
          <div className="flex flex-col gap-3" role="presentation">
            {items.map((item) => {
              const open = item.id === openItem?.id;
              const panelId = `${listId}-panel-${item.id}`;
              const triggerId = `${listId}-${item.id}`;
              return (
                <div
                  key={item.id}
                  className={cn(
                    "rounded-[calc(var(--radius)+0.15rem)] border bg-card transition-[border-color,box-shadow] duration-200 motion-reduce:transition-none",
                    open
                      ? "border-primary shadow-[0_18px_36px_-28px_color-mix(in_oklab,var(--jk-primary),transparent_35%)]"
                      : "border-border",
                  )}
                >
                  <h3 className="m-0">
                    <button
                      id={triggerId}
                      type="button"
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => selectItem(item.id)}
                      onKeyDown={onAccordionKeyDown}
                      className="flex w-full items-center gap-3 px-4 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      <span
                        className={cn(
                          "grid size-10 shrink-0 place-items-center rounded-[--radius] border",
                          open
                            ? "border-primary/40 bg-primary/10 text-primary"
                            : "border-border bg-muted text-foreground",
                        )}
                      >
                        <IconGlyph
                          name={item.icon ?? "create"}
                          className="size-4"
                        />
                      </span>
                      <span className="flex-1 text-base font-medium tracking-[-0.02em]">
                        {item.title}
                      </span>
                      <span
                        aria-hidden="true"
                        className={cn(
                          "text-muted-foreground transition-transform duration-200 motion-reduce:transition-none",
                          open && "rotate-180 text-foreground",
                        )}
                      >
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          className="size-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <section
                    id={panelId}
                    aria-labelledby={triggerId}
                    className={cn(
                      "grid transition-[grid-template-rows] duration-200 ease-out motion-reduce:transition-none",
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-4 pt-0 pb-4 text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </section>
                </div>
              );
            })}
          </div>

          <div className="overflow-hidden rounded-[calc(var(--radius)+0.2rem)] border border-border bg-card shadow-[0_28px_60px_-40px_color-mix(in_oklab,var(--jk-foreground),transparent_45%)]">
            <div className="flex items-center justify-between gap-3 border-b border-border bg-muted/60 px-4 py-2.5">
              <div className="min-w-0">
                <p className="truncate font-mono text-xs text-foreground">
                  {openItem?.fileName ?? "example.ts"}
                </p>
                <p className="text-[11px] text-muted-foreground">
                  {openItem?.language ?? "TypeScript"}
                </p>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => void copyCode()}
                aria-label={copied ? "Copied" : "Copy code"}
                className="h-8 gap-1.5 px-2.5 text-xs"
              >
                {copied ? (
                  <CheckIcon className="size-3.5" />
                ) : (
                  <CopyIcon className="size-3.5" />
                )}
                {copied ? "Copied" : "Copy"}
              </Button>
            </div>
            <pre className="max-h-[28rem] overflow-auto p-4 font-mono text-[13px] leading-6 text-foreground">
              <code className="block min-w-max whitespace-pre">
                {openItem?.code ?? ""}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
