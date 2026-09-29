"use client";

import { type ReactNode, useRef } from "react";
import { cn } from "@/lib/cn";
import { JkPortalContainerProvider } from "@/lib/portal-container";
import type { SampleDesignSystemId } from "./design-systems";

export type SampleColorMode = "inherit" | "light" | "dark";

export function SampleScope({
  system,
  colorMode = "inherit",
  className,
  children,
}: {
  system: SampleDesignSystemId;
  colorMode?: SampleColorMode;
  className?: string;
  children: ReactNode;
}) {
  const scopeRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={scopeRef}
      className={cn(colorMode === "dark" && "dark", className)}
      data-jk-color-mode={colorMode === "inherit" ? undefined : colorMode}
      data-jk-design-system={system}
    >
      <JkPortalContainerProvider container={scopeRef}>
        {children}
      </JkPortalContainerProvider>
    </div>
  );
}
