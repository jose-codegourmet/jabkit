import type { Route } from "next";
import { AgentHandoff } from "../components/home/AgentHandoff";
import { ComicStrip } from "../components/home/ComicStrip";
import { CurtainCall } from "../components/home/CurtainCall";
import {
  FindableSection,
  type TagSticker,
} from "../components/home/FindableSection";
import { HeroSection } from "../components/home/HeroSection";
import { MenuBoard, type MenuShelf } from "../components/home/MenuBoard";
import {
  type MarqueeStat,
  StatsMarquee,
} from "../components/home/StatsMarquee";
import { ThemeSplit } from "../components/home/ThemeSplit";
import { SiteShell } from "../components/SiteShell";
import { mcpToolNames } from "../lib/mcp-tools";
import { type RegistryIndexItem, registryIndex } from "../lib/registry";
import { hasOnlyBaselineDependencies } from "../lib/site";

const HERO_INSTALL = "hero307";

const shelves = [
  { label: "Heroes", tag: "hero", image: "/art/cat-hero.webp" },
  { label: "Pricing", tag: "pricing", image: "/art/cat-pricing.webp" },
  { label: "Case studies", tag: "case-studies", image: "/art/cat-case.webp" },
  { label: "Compare", tag: "compare", image: "/art/cat-compare.webp" },
  { label: "Code examples", tag: "code", image: "/art/cat-code.webp" },
] as const;

const stickerTags = [
  "hero",
  "form",
  "background",
  "chart",
  "pricing",
  "cta",
  "navigation",
  "footer",
] as const;

export default async function Home() {
  const components = await registryIndex().catch(
    () => [] as RegistryIndexItem[],
  );
  const countTag = (tag: string) =>
    components.filter((item) => item.tags.includes(tag)).length;
  const countCategory = (category: RegistryIndexItem["category"]) =>
    components.filter((item) => item.category === category).length;

  const stats: MarqueeStat[] = [
    { value: String(components.length), label: "components" },
    { value: String(countCategory("atoms")), label: "atoms" },
    { value: String(countCategory("marketing")), label: "marketing blocks" },
    { value: String(countCategory("dashboard")), label: "dashboard blocks" },
    {
      value: String(
        components.filter((item) =>
          hasOnlyBaselineDependencies(item.dependencies),
        ).length,
      ),
      label: "with no extra deps",
    },
    { value: String(mcpToolNames.length), label: "MCP tools" },
    { value: "2", label: "themes, one source" },
    { value: "1", label: "command to install" },
    { value: "0", label: "lock-in" },
  ];

  const menuShelves: MenuShelf[] = shelves
    .map((shelf) => ({
      label: shelf.label,
      image: shelf.image,
      count: countTag(shelf.tag),
      href: `/components?tag=${shelf.tag}` as Route,
    }))
    .filter((shelf) => shelf.count > 0);

  const tagStickers: TagSticker[] = stickerTags
    .map((tag) => ({ tag, count: countTag(tag) }))
    .filter((sticker) => sticker.count > 0);

  const installName = components.some((item) => item.name === HERO_INSTALL)
    ? HERO_INSTALL
    : (components[0]?.name ?? "button");

  return (
    <SiteShell>
      <main>
        <HeroSection installName={installName} />
        <StatsMarquee stats={stats} />
        <ComicStrip />
        {menuShelves.length > 0 ? <MenuBoard shelves={menuShelves} /> : null}
        <FindableSection tags={tagStickers} />
        <AgentHandoff />
        <ThemeSplit />
        <CurtainCall />
      </main>
    </SiteShell>
  );
}
