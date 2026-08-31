"use client";

import {
  DesktopIcon,
  ExternalLinkIcon,
  MobileIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";
import type { ComponentPreviewMeta } from "../lib/registry";
import { SourceViewer } from "./SourceViewer";

type Device = "desktop" | "tablet" | "mobile";
type Tab = "preview" | "code";

const deviceMaxWidth: Record<Device, string | undefined> = {
  desktop: undefined,
  tablet: "1024px",
  mobile: "600px",
};

const fitHeights: Record<Device, number> = {
  desktop: 900,
  tablet: 1024,
  mobile: 844,
};

const ATOM_HEIGHT = 440;

function TabletIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="2.5"
        y="1.5"
        width="10"
        height="12"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle cx="7.5" cy="11.25" r="0.75" fill="currentColor" />
    </svg>
  );
}

export function ComponentPreview({
  name,
  story = "Default",
  files = [],
  preview,
}: {
  name: string;
  story?: string;
  files?: Array<{ path: string; type?: string; content: string }>;
  preview?: ComponentPreviewMeta;
}) {
  const [tab, setTab] = useState<Tab>("preview");
  const [dark, setDark] = useState(false);
  const [device, setDevice] = useState<Device>("desktop");
  const previewHref = `/preview/${name}/${story}?theme=${dark ? "dark" : "light"}`;
  const fit = preview?.layout === "fit";
  const frameHeight = fit
    ? device === "desktop"
      ? (preview?.height ?? fitHeights.desktop)
      : fitHeights[device]
    : ATOM_HEIGHT;

  return (
    <section className="overflow-hidden rounded-[--radius] border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-2 sm:px-3">
        <div className="flex">
          {(
            [
              ["preview", "Preview"],
              ["code", "Code"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setTab(id)}
              className={`px-3 py-3 text-sm transition ${
                tab === id
                  ? "border-b-2 border-primary font-medium text-foreground"
                  : "border-b-2 border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1 pb-0.5">
          {(
            [
              ["desktop", DesktopIcon, "Desktop preview"],
              ["tablet", TabletIcon, "Tablet preview"],
              ["mobile", MobileIcon, "Mobile preview"],
            ] as const
          ).map(([id, Icon, label]) => (
            <button
              key={id}
              type="button"
              aria-label={label}
              aria-pressed={device === id}
              onClick={() => setDevice(id)}
              className={`grid size-8 place-items-center rounded-md border transition ${
                device === id
                  ? "border-primary bg-accent text-foreground"
                  : "border-transparent text-muted-foreground hover:border-border hover:bg-accent"
              }`}
            >
              <Icon />
            </button>
          ))}
          <button
            type="button"
            aria-label="Toggle preview theme"
            onClick={() => setDark((current) => !current)}
            className="grid size-8 place-items-center rounded-md border border-border text-muted-foreground hover:bg-accent"
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
          <a
            href={previewHref}
            target="_blank"
            rel="noreferrer"
            aria-label="Open preview in new tab"
            className="grid size-8 place-items-center rounded-md border border-border text-muted-foreground hover:bg-accent"
          >
            <ExternalLinkIcon />
          </a>
        </div>
      </div>

      {tab === "preview" ? (
        <div className="overflow-hidden bg-muted/30">
          <div
            className="mx-auto overflow-auto bg-background transition-[max-width] duration-300 ease-out"
            style={{
              maxWidth: deviceMaxWidth[device],
              height: frameHeight,
            }}
          >
            <iframe
              title={`${name} ${story} preview`}
              aria-hidden="true"
              className="h-full w-full border-0"
              src={previewHref}
              loading="lazy"
            />
          </div>
        </div>
      ) : (
        <SourceViewer files={files} embedded />
      )}
    </section>
  );
}
