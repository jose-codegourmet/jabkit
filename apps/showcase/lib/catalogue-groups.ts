import type { RegistryIndexItem } from "./registry";

export type CatalogueGroup = {
  id: string;
  label: string;
  kind: "component" | "block";
  matches: (item: RegistryIndexItem) => boolean;
};

const hasAnyTag = (item: RegistryIndexItem, tags: string[]) =>
  tags.some((tag) => item.tags.includes(tag));
const isAtom = (item: RegistryIndexItem) => item.category === "atoms";
const isBackground = (item: RegistryIndexItem) =>
  item.sectionCategory === "background" ||
  hasAnyTag(item, ["background", "pattern"]);

export const catalogueGroups: CatalogueGroup[] = [
  {
    id: "actions",
    label: "Actions & buttons",
    kind: "component",
    matches: (item) =>
      isAtom(item) && hasAnyTag(item, ["button", "action", "cta"]),
  },
  {
    id: "forms",
    label: "Inputs & form controls",
    kind: "component",
    matches: (item) =>
      isAtom(item) &&
      hasAnyTag(item, [
        "input",
        "textarea",
        "label",
        "checkbox",
        "radio",
        "switch",
        "form",
        "calendar",
      ]),
  },
  {
    id: "navigation",
    label: "Navigation & overlays",
    kind: "component",
    matches: (item) =>
      isAtom(item) &&
      hasAnyTag(item, [
        "navigation-menu",
        "dialog",
        "dropdown-menu",
        "tooltip",
        "scroll",
        "stepper",
      ]),
  },
  {
    id: "feedback",
    label: "Feedback & status",
    kind: "component",
    matches: (item) =>
      isAtom(item) &&
      hasAnyTag(item, [
        "toast",
        "loader",
        "spinner",
        "skeleton",
        "badge",
        "feedback",
      ]),
  },
  {
    id: "backgrounds",
    label: "Backgrounds",
    kind: "component",
    matches: (item) => isAtom(item) && isBackground(item),
  },
  {
    id: "content",
    label: "Content & utility",
    kind: "component",
    matches: (item) => isAtom(item) && !isBackground(item),
  },
  {
    id: "background-blocks",
    label: "Backgrounds",
    kind: "block",
    matches: (item) => !isAtom(item) && isBackground(item),
  },
  {
    id: "heroes",
    label: "Hero & call to action",
    kind: "block",
    matches: (item) =>
      !isAtom(item) &&
      !isBackground(item) &&
      hasAnyTag(item, ["hero", "cta", "announcement", "coming-soon"]),
  },
  {
    id: "marketing-content",
    label: "Content & proof",
    kind: "block",
    matches: (item) =>
      !isAtom(item) &&
      !isBackground(item) &&
      hasAnyTag(item, [
        "feature",
        "about",
        "case-studies",
        "awards",
        "faq",
        "testimonial",
        "content",
      ]),
  },
  {
    id: "site-chrome",
    label: "Navigation & footers",
    kind: "block",
    matches: (item) =>
      !isAtom(item) &&
      hasAnyTag(item, ["navbar", "navigation", "header", "footer", "menu"]),
  },
  {
    id: "commerce",
    label: "Commerce & conversion",
    kind: "block",
    matches: (item) =>
      !isAtom(item) &&
      hasAnyTag(item, [
        "ecommerce",
        "pricing",
        "form",
        "gallery",
        "product",
        "booking",
      ]),
  },
  {
    id: "dashboard",
    label: "Dashboard & data",
    kind: "block",
    matches: (item) => item.category === "dashboard",
  },
];

export function itemKind(item: RegistryIndexItem) {
  return isAtom(item) ? "component" : "block";
}
