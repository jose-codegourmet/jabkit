import type {
  ChartGroup14Channel,
  ChartGroup14Day,
  ChartGroup14Page,
  ChartGroup14Person,
  ChartGroup14Preset,
  ChartGroup14Props,
} from "./ChartGroup14.types";

export const chartGroup14ReferenceDate = "2026-09-05";

export const chartGroup14Presets: ChartGroup14Preset[] = [
  { id: "7d", label: "Last 7 days", days: 7 },
  { id: "30d", label: "Last 30 days", days: 30 },
  { id: "90d", label: "Last 90 days", days: 90 },
];

function mulberry32(seed: number) {
  let state = seed;
  return () => {
    state += 0x6d2b79f5;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function addDays(iso: string, days: number) {
  const date = new Date(`${iso}T00:00:00.000Z`);
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}

export function buildChartGroup14Series(
  endDate = chartGroup14ReferenceDate,
  days = 90,
  seed = 14,
): ChartGroup14Day[] {
  const rand = mulberry32(seed);
  const start = addDays(endDate, -(days - 1));
  return Array.from({ length: days }, (_, index) => {
    const wave = Math.sin(index / 9) * 0.18 + Math.cos(index / 17) * 0.08;
    const climb = index / days;
    return {
      date: addDays(start, index),
      revenue: Math.round(18400 + climb * 9200 + wave * 5400 + rand() * 2100),
      users: Math.round(620 + climb * 280 + wave * 90 + rand() * 70),
      sessions: Math.round(1480 + climb * 640 + wave * 220 + rand() * 180),
      bounce: Number((0.41 - climb * 0.06 + (rand() - 0.5) * 0.04).toFixed(3)),
    };
  });
}

export const chartGroup14Channels: ChartGroup14Channel[] = [
  { id: "direct", label: "Direct", value: 38, tone: "chart-1" },
  { id: "organic", label: "Organic search", value: 27, tone: "chart-2" },
  { id: "product", label: "Product", value: 18, tone: "chart-3" },
  { id: "referral", label: "Referral", value: 11, tone: "chart-4" },
  { id: "social", label: "Social", value: 6, tone: "chart-5" },
];

export const chartGroup14Pages: ChartGroup14Page[] = [
  { path: "/pricing", views: 18420, share: 0.28 },
  { path: "/docs/start", views: 12680, share: 0.19 },
  { path: "/changelog", views: 9340, share: 0.14 },
  { path: "/blog/latency", views: 7120, share: 0.11 },
  { path: "/customers/northline", views: 5480, share: 0.08 },
];

export const chartGroup14People: ChartGroup14Person[] = [
  {
    id: "amara",
    name: "Amara Cole",
    role: "On call",
    lastActive: "2m ago",
    initials: "AC",
    src: "/assets/4132445424a19cc6.webp",
  },
  {
    id: "julian",
    name: "Julian Voss",
    role: "Reviewing",
    lastActive: "11m ago",
    initials: "JV",
    src: "/assets/8e9489842d5e2cdf.webp",
  },
  {
    id: "nori",
    name: "Nori Hale",
    role: "Shipping",
    lastActive: "24m ago",
    initials: "NH",
    src: "/assets/9b8fa9955b8bd54f.webp",
  },
  {
    id: "ines",
    name: "Ines Caetano",
    role: "Idle",
    lastActive: "1h ago",
    initials: "IC",
  },
  {
    id: "reed",
    name: "Reed Lang",
    role: "On call",
    lastActive: "3h ago",
    initials: "RL",
    src: "/assets/8c18989537b833e8.webp",
  },
];

const defaultSeries = buildChartGroup14Series();

export const chartGroup14Mocks = {
  default: {
    title: "Analytics",
    description:
      "Revenue, traffic, and the pages that are carrying the week. Change the range and the board follows.",
    presets: chartGroup14Presets,
    defaultPresetId: "30d",
    referenceDate: chartGroup14ReferenceDate,
    series: defaultSeries,
    channels: chartGroup14Channels,
    pages: chartGroup14Pages,
    people: chartGroup14People,
    pagesHref: "#pages",
    peopleHref: "#people",
  },
  alternate: {
    title: "Commerce pulse",
    description:
      "A tighter board for the shop: checkout yield, catalog traffic, and who is still in the queue.",
    presets: chartGroup14Presets,
    defaultPresetId: "7d",
    referenceDate: chartGroup14ReferenceDate,
    series: buildChartGroup14Series(chartGroup14ReferenceDate, 90, 41),
    channels: [
      { id: "ads", label: "Paid ads", value: 34, tone: "chart-1" },
      { id: "email", label: "Email", value: 24, tone: "chart-2" },
      { id: "shop", label: "Shop home", value: 21, tone: "chart-3" },
      { id: "affiliate", label: "Affiliate", value: 13, tone: "chart-4" },
      { id: "social", label: "Social", value: 8, tone: "chart-5" },
    ],
    pages: [
      { path: "/shop/jackets", views: 22140, share: 0.31 },
      { path: "/checkout", views: 14890, share: 0.21 },
      { path: "/collections/spring", views: 10120, share: 0.14 },
      { path: "/account/orders", views: 6840, share: 0.1 },
      { path: "/gift-cards", views: 4210, share: 0.06 },
    ],
    people: [
      {
        id: "mina",
        name: "Mina Park",
        role: "Packing",
        lastActive: "4m ago",
        initials: "MP",
        src: "/assets/bd48582e630a15fa.webp",
      },
      {
        id: "otto",
        name: "Otto Brel",
        role: "Support",
        lastActive: "18m ago",
        initials: "OB",
      },
      {
        id: "sasha",
        name: "Sasha Iyer",
        role: "Merch",
        lastActive: "41m ago",
        initials: "SI",
        src: "/assets/8d9df3eb6166e07f.webp",
      },
      {
        id: "leo",
        name: "Leo Maren",
        role: "Idle",
        lastActive: "2h ago",
        initials: "LM",
      },
    ],
    pagesHref: "#catalog",
    peopleHref: "#crew",
  },
} satisfies Record<"default" | "alternate", ChartGroup14Props>;
