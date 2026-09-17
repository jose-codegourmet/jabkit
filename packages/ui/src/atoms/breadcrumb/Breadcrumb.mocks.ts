export const breadcrumbMocks = {
  default: {
    home: "Home",
    homeHref: "/",
    section: "Components",
    sectionHref: "/components",
    page: "Breadcrumb",
  },
  collapsed: {
    home: "Home",
    homeHref: "/",
    docs: "Documentation",
    docsHref: "/docs",
    building: "Building Your Application",
    buildingHref: "/docs/building-your-application",
    page: "Data Fetching",
  },
  dropdown: {
    home: "Home",
    homeHref: "/",
    documentation: "Documentation",
    themes: "Themes",
    github: "GitHub",
    section: "Components",
    sectionHref: "/components",
    page: "Breadcrumb",
  },
} as const;
