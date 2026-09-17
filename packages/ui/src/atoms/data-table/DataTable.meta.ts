import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "data-table",
  displayName: "DataTable",
  version: "1.0.0",
  addedAt: "2026-09-17",
  description:
    "Sortable, filterable, and paginated data table built with TanStack Table.",
  sectionCategory: "content",
  purpose:
    "Presents tabular records with selection, column visibility, email filtering, and row actions.",
  bestFor: [
    "payment and invoice lists",
    "admin record tables",
    "sortable filtered datasets",
  ],
  avoidFor: [
    "simple static key-value tables",
    "spreadsheet-scale editing grids",
  ],
  tone: ["clean", "professional"],
  contentDensity: "high",
  visualWeight: "medium",
  layout: {
    type: "stack",
    alignment: "left",
  },
  slots: ["toolbar", "columns", "rows", "pagination", "rowActions"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: true,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  inspoUrl: "https://ui.shadcn.com/docs/components/base/data-table",
  tags: ["data-table", "table", "tanstack", "pagination", "sorting", "atom"],
  dependencies: ["@tanstack/react-table", "lucide-react"],
  registryDependencies: ["button", "checkbox", "dropdown-menu", "input"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
    width: 840,
    height: 520,
    capture: { viewport: { width: 900, height: 560 } },
  },
} satisfies ComponentMeta;
