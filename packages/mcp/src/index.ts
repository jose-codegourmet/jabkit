export const jabkitTools = [
  "list_components",
  "search_components",
  "get_component",
  "get_install_plan",
  "get_conventions",
  "get_category_overview",
] as const;

export type JabkitTool = (typeof jabkitTools)[number];
