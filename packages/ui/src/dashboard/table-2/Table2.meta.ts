import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "table-2",
  displayName: "Table2",
  version: "1.1.0",
  addedAt: "2026-09-15",
  description:
    "Filterable invoices table with client search, row selection, bulk actions, status badges, and pagination.",
  sectionCategory: "billing",
  purpose:
    "Lets operators filter invoices by client, select rows, and run mark-paid, reminder, and download actions.",
  bestFor: [
    "billing dashboards",
    "accounts receivable queues",
    "invoice ledgers",
  ],
  avoidFor: ["marketing pricing tables", "spreadsheet-style cell editing"],
  tone: ["professional", "structured"],
  industries: ["saas", "finance", "logistics"],
  contentDensity: "high",
  visualWeight: "medium",
  layout: {
    type: "stack",
    alignment: "left",
  },
  slots: [
    "pageHeader",
    "outstanding",
    "search",
    "bulkActions",
    "invoiceRows",
    "status",
    "pagination",
  ],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: true,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  tags: [
    "dashboard",
    "table",
    "invoices",
    "billing",
    "pagination",
    "filter",
    "selection",
  ],
  dependencies: ["lucide-react"],
  registryDependencies: ["avatar", "badge", "dropdown-menu"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
