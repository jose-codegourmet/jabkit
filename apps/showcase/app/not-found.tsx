import type { Metadata } from "next";
import {
  NotFoundRecovery,
  type RecoveryItem,
} from "../components/NotFoundRecovery";
import { SiteShell } from "../components/SiteShell";
import { previewStillMap } from "../lib/preview-assets";
import { registryIndex } from "../lib/registry";

export const metadata: Metadata = {
  title: "Not found - JabKit",
};

export default async function NotFound() {
  const [index, stills] = await Promise.all([
    registryIndex().catch(() => []),
    previewStillMap(),
  ]);
  const items: RecoveryItem[] = index.map((item) => ({
    name: item.name,
    displayName: item.displayName,
    category: item.category,
    previewSrc: stills[item.name],
  }));
  return (
    <SiteShell>
      <NotFoundRecovery items={items} />
    </SiteShell>
  );
}
