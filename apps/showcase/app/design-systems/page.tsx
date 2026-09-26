import type { Metadata } from "next";
import Link from "next/link";
import { DesignSystemSwitcher } from "../../components/DesignSystemSwitcher";
import { SiteShell } from "../../components/SiteShell";
import { designSystems, isReadyDesignSystem } from "./catalog";

export const metadata: Metadata = {
  title: "Design systems - JabKit",
  description:
    "Five website style directions, each as a complete fictional site: Minimal, Neo-brutalism, Editorial, Luxury, and Retro.",
};

export default function DesignSystemsPage() {
  const systems = designSystems.map((entry) => ({
    slug: entry.slug,
    designSystem: entry.designSystem,
    brand: entry.brand,
    description: entry.description,
    routes: entry.routes,
    href: isReadyDesignSystem(entry) ? entry.href : undefined,
  }));

  return (
    <SiteShell>
      <main className="mx-auto max-w-[1280px] px-5 py-14 tab:px-8 tab:py-16">
        <p className="vd-kicker mb-4">Design systems</p>
        <h1 className="vd-h1 max-w-[22ch] desk:text-5xl">
          Five websites. One component library.
        </h1>
        <p className="mt-4 max-w-[42rem] text-[17px] leading-7 text-muted-foreground">
          Each direction is a full fictional website with its own tokens, type,
          and routes, deployed as an independent app. Product compositions
          assembled from registry blocks live on{" "}
          <Link
            href="/samples"
            className="font-semibold text-foreground underline-offset-4 hover:underline"
          >
            Samples
          </Link>
          .
        </p>
        <DesignSystemSwitcher systems={systems} />
      </main>
    </SiteShell>
  );
}
