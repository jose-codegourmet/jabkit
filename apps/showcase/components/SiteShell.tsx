import type { ReactNode } from "react";
import { registryIndex } from "../lib/registry";
import { RayMotion } from "./RayMotion";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

/**
 * Vaudeville chrome for catalogue pages. `.vd` scopes the showcase palette so
 * samples and `/preview` iframes keep the library's default tokens.
 */
export async function SiteShell({ children }: { children: ReactNode }) {
  const componentCount = await registryIndex()
    .then((items) => items.length)
    .catch(() => undefined);
  return (
    <div className="vd">
      <SiteHeader />
      {children}
      <SiteFooter componentCount={componentCount} />
      <RayMotion />
    </div>
  );
}
