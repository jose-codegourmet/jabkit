import type { GridlineDashboardProps } from "./GridlineDashboard.types";

const defaultNavItems: NonNullable<GridlineDashboardProps["navItems"]> = [
  { id: "dashboard", label: "Dashboard", shortLabel: "Dashboard" },
  {
    id: "modelling",
    label: "System modelling and data",
    shortLabel: "Modelling",
  },
  { id: "flexibility", label: "Flexibility", shortLabel: "Flexibility" },
  {
    id: "planning",
    label: "Planning and investment",
    shortLabel: "Planning",
  },
  {
    id: "operations",
    label: "Operations interface",
    shortLabel: "Operations",
  },
  {
    id: "stakeholders",
    label: "Stakeholders and public",
    shortLabel: "Stakeholders",
  },
  {
    id: "connections",
    label: "Connections and queue",
    shortLabel: "Connections",
  },
];

const defaultWorkspaces: NonNullable<GridlineDashboardProps["workspaces"]> = [
  {
    id: "modelling",
    title: "System Modelling and Data",
    icon: "database",
    details: [
      "Validate model quality and coverage",
      "Prepare publish packs and audit",
    ],
  },
  {
    id: "flexibility",
    title: "Flexibility",
    icon: "flexibility",
    details: [
      "Build stakeholder story packs",
      "Generate briefings with traceable evidence",
    ],
  },
  {
    id: "planning",
    title: "Planning & Investment",
    icon: "planning",
    details: [
      "Stress-test scenarios and constraints",
      "Track reinforcement options and assumptions",
    ],
  },
  {
    id: "operations",
    title: "Operations Interface",
    icon: "operations",
    details: [
      "Operational context for switching and outage",
      "Link events back to model",
    ],
  },
  {
    id: "stakeholders",
    title: "Stakeholder & Public",
    icon: "stakeholders",
    details: [
      "Publish model-anchored views",
      "Generate briefings with traceable evidence",
    ],
  },
  {
    id: "connections",
    title: "Connections & Queue",
    icon: "connections",
    details: [
      "Queue context and constraints",
      "Application tracking linked to the model",
    ],
  },
];

const defaultModel: NonNullable<GridlineDashboardProps["model"]> = {
  title: "System Modelling and Data",
  description:
    "Validate and publish the latest network model used across DSO workflows",
  version: "Model v2.4.2",
  latestVersion: "v2.4.2",
  currentModel: "Electrical Grid Company",
  currentVersion: "v2.4.1",
  latestUpdate: "Coverage gap analysis completed",
  coverage: "94%",
  lastPublished: "3 days ago",
  openIssues: 2,
  publication: "Published",
  validation: "Validated",
  review: "In Review",
};

const defaultActions: NonNullable<GridlineDashboardProps["modellingActions"]> =
  [
    {
      title: "LTDS Table Generator",
      description: "Generate and export LTDS tables from CIM data",
      icon: "database",
    },
    {
      title: "CIM Comparison",
      description: "Compare CIM model versions and track changes",
      icon: "comparison",
    },
    {
      title: "ClearView",
      description: "Asset enrichment and reinforcement data",
      icon: "clearview",
    },
  ];

const defaultRegions: NonNullable<GridlineDashboardProps["regions"]> = [
  {
    id: "east-midlands",
    name: "East Midlands",
    legendName: "East Midlands",
    tone: "chart-1",
    position: "north-east",
  },
  {
    id: "west-midlands",
    name: "West Midlands",
    legendName: "West Midlands",
    tone: "chart-4",
    position: "central",
  },
  {
    id: "south-wales",
    name: "South Wales",
    legendName: "South Wales",
    tone: "chart-3",
    position: "west",
  },
  {
    id: "south-west",
    name: "South West",
    legendName: "South West",
    tone: "chart-2",
    position: "south-east",
  },
];

const defaultFlexibility: NonNullable<GridlineDashboardProps["flexibility"]> = {
  regionName: "South West",
  assetType: "Substation",
  substationCount: 621,
  mappedSubstationCount: 379,
  locationCount: 2072,
  attributionCompany: "Large Grid Company",
  attributionProduct: "Squid",
  voltageLevels: ["33kV", "11kV"],
};

const defaultAssets: NonNullable<GridlineDashboardProps["assets"]> = [
  {
    id: "tavistock",
    name: "Tavistock",
    voltage: "33/11kV",
    equipmentCount: 30,
    mapPosition: { x: 40, y: 64 },
  },
  {
    id: "st-tudy",
    name: "St Tudy",
    voltage: "33/11kV",
    equipmentCount: 24,
    mapPosition: { x: 35, y: 52 },
  },
  {
    id: "st-tudy-bsp",
    name: "St Tudy BSP",
    voltage: "132/33kV",
    equipmentCount: 24,
    mapPosition: { x: 32, y: 46 },
  },
  {
    id: "stancombe",
    name: "Stancombe Quarry",
    voltage: "33kV",
    equipmentCount: 24,
    mapPosition: { x: 65, y: 72 },
  },
  {
    id: "staplegrove",
    name: "Staplegrove",
    voltage: "33/11kV",
    equipmentCount: 24,
    mapPosition: { x: 55, y: 35 },
  },
  {
    id: "stentaway",
    name: "Stentaway",
    voltage: "33/11kV",
    equipmentCount: 24,
    mapPosition: { x: 72, y: 58 },
  },
  {
    id: "stoke-bishop",
    name: "Stoke Bishop",
    voltage: "33/11kV",
    equipmentCount: 24,
    mapPosition: { x: 61, y: 42 },
  },
  {
    id: "stokenham",
    name: "Stokenham",
    voltage: "33/11kV",
    equipmentCount: 24,
    mapPosition: { x: 48, y: 75 },
  },
  {
    id: "street-bsp",
    name: "Street BSP",
    voltage: "132/33kV",
    equipmentCount: 24,
    mapPosition: { x: 53, y: 23 },
  },
  {
    id: "stratton",
    name: "Stratton",
    voltage: "33/11kV",
    equipmentCount: 24,
    mapPosition: { x: 24, y: 30 },
  },
  {
    id: "tale-lane",
    name: "Tale Lane PV",
    voltage: "132/33kV",
    equipmentCount: 24,
    mapPosition: { x: 76, y: 26 },
  },
  {
    id: "st-catherines",
    name: "St Catherines",
    voltage: "33/11kV",
    equipmentCount: 12,
    mapPosition: { x: 43, y: 39 },
  },
  {
    id: "south-molton",
    name: "South Molton",
    voltage: "33/11kV",
    equipmentCount: 18,
    mapPosition: { x: 58, y: 55 },
  },
  {
    id: "plymouth",
    name: "Plymouth North",
    voltage: "132/33kV",
    equipmentCount: 30,
    mapPosition: { x: 37, y: 80 },
  },
  {
    id: "exeter",
    name: "Exeter East",
    voltage: "33/11kV",
    equipmentCount: 24,
    mapPosition: { x: 68, y: 47 },
  },
];

const defaultVoltageFilters: NonNullable<
  GridlineDashboardProps["voltageFilters"]
> = [
  { id: "132-66", label: "132kV / 66kV", tone: "foreground" },
  { id: "33", label: "33kV", tone: "success" },
  { id: "22-25", label: "22kV - 25kV", tone: "warning" },
  { id: "11", label: "11kV", tone: "destructive" },
  { id: "6", label: "6kV - 6.6kV", tone: "chart-1" },
  { id: "unknown", label: "Unknown", tone: "chart-3" },
];

export const gridlineDashboardMocks = {
  default: {
    brand: "Gridline",
    company: "Electrical Grid Company",
    date: "16 March 2026",
    searchPlaceholder: "Search the network model...",
    initialPage: "dashboard",
    user: {
      name: "Priya Nair",
      email: "priya.nair@gridline.ops",
    },
    navItems: defaultNavItems,
    workspaces: defaultWorkspaces,
    model: defaultModel,
    modellingActions: defaultActions,
    regions: defaultRegions,
    flexibility: defaultFlexibility,
    assets: defaultAssets,
    voltageFilters: defaultVoltageFilters,
  },
  alternate: {
    brand: "Gridline",
    company: "Harbor Transmission",
    date: "4 April 2026",
    searchPlaceholder: "Find a circuit, region, or pack...",
    initialPage: "flexibility",
    user: {
      name: "Owen Hale",
      email: "owen.hale@harbor.grid",
    },
    navItems: defaultNavItems,
    workspaces: defaultWorkspaces.map((workspace) =>
      workspace.id === "flexibility"
        ? {
            ...workspace,
            details: [
              "Map flexibility zones against live load",
              "Share evidence packs with operators",
            ],
          }
        : workspace,
    ),
    model: {
      ...defaultModel,
      currentModel: "Harbor Transmission",
      currentVersion: "v3.1.0",
      latestVersion: "v3.1.4",
      version: "Model v3.1.4",
      coverage: "88%",
      latestUpdate: "Constraint heat map refreshed",
      lastPublished: "yesterday",
      openIssues: 5,
    },
    modellingActions: defaultActions,
    regions: defaultRegions,
    flexibility: {
      ...defaultFlexibility,
      regionName: "South Wales",
      substationCount: 412,
      mappedSubstationCount: 301,
      attributionCompany: "Harbor Transmission",
    },
    assets: defaultAssets.slice(0, 8),
    voltageFilters: defaultVoltageFilters,
  },
} satisfies Record<string, GridlineDashboardProps>;
