import type { ChartGroup14Props } from "@/dashboard/chart-group14";
import { buildChartGroup14Series } from "@/dashboard/chart-group14/ChartGroup14.mocks";
import type { About8Props } from "@/marketing/about8";
import type { CaseStudies13Props } from "@/marketing/case-studies13";
import type { CodeExample14Props } from "@/marketing/code-example14";
import type { Compare5Props } from "@/marketing/compare5";
import type { Content2Props } from "@/marketing/content2";
import type { Cta28Props } from "@/marketing/cta28";
import type { Faq12Props } from "@/marketing/faq12";
import type { HeroSection5Props } from "@/marketing/hero-section-5";

export const quarryBrand = {
  name: "Quarry",
  href: "#top",
} as const;

export const hero: HeroSection5Props = {
  brand: quarryBrand,
  navItems: [
    { label: "Product", href: "#instrument" },
    { label: "Customers", href: "#customers" },
    { label: "Company", href: "#company" },
    { label: "Help", href: "#help" },
  ],
  headerAction: { label: "Start a workspace", href: "#start" },
  kicker: "Product analytics",
  title: "Know which clicks actually pay the bills.",
  description:
    "Quarry ties product events to revenue so PMs stop arguing from screenshots.",
  primaryAction: { label: "Start a workspace", href: "#start" },
  secondaryAction: { label: "See a live board", href: "#board" },
  video: {
    src: "https://videos.pexels.com/video-files/3129957/3129957-hd_1280_720_25fps.mp4",
    poster:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    label: "Sunlit studio desks used as a stand-in for a product workspace",
  },
  logos: [
    { name: "Bramble" },
    { name: "Portico" },
    { name: "Nettle" },
    { name: "Ashford" },
    { name: "Vesper" },
    { name: "Kindling" },
    { name: "Redwood" },
    { name: "Sable" },
  ],
  autoplay: true,
};

export const compare: Compare5Props = {
  title: "Two ways to close the week.",
  description:
    "One still lives in a spreadsheet. The other is the board your standup already needed.",
  dividerLabel: "OR",
  left: {
    title: "Export, paste, hope",
    description:
      "Mixpanel in one tab, Stripe in another, a CSV from last Tuesday. The number changes depending on who built the pivot.",
    imageSrc:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1400&h=1800&q=80",
    imageAlt: "Paper notes and a crowded analog desk",
    action: { label: "Keep exporting CSVs", href: "#help" },
    accent: false,
  },
  right: {
    title: "One board, one number",
    description:
      "Events land with the charge attached. The standup reads the same revenue figure finance already booked.",
    imageSrc:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&h=1800&q=80",
    imageAlt: "Laptop and notebook on a clean modern workstation",
    action: { label: "Start a workspace", href: "#start" },
    accent: true,
  },
};

export const instrument: CodeExample14Props = {
  kicker: "",
  title: "Instrument once. Query revenue from the same event.",
  description:
    "The TypeScript client writes the click, the account, and the dollars. Open a call on the left to load the matching snippet.",
  primaryAction: { label: "Start a workspace", href: "#start" },
  secondaryAction: { label: "See a live board", href: "#board" },
  defaultItemId: "track",
  items: [
    {
      id: "track",
      title: "Track a charge",
      description:
        "Send a named event with the account and the amount. Quarry stores it as the source of truth for that week.",
      icon: "create",
      fileName: "track-charge.ts",
      language: "TypeScript",
      code: `import { Quarry } from "@quarry/events";

const quarry = new Quarry({ token: process.env.QUARRY_TOKEN });

await quarry.track({
  name: "checkout.paid",
  accountId: "acct_bramble",
  properties: { plan: "team", amountUsd: 2400 },
});`,
    },
    {
      id: "attach",
      title: "Attach the customer",
      description:
        "Identify the account once so later events inherit the plan, region, and owner without another lookup.",
      icon: "update",
      fileName: "identify-account.ts",
      language: "TypeScript",
      code: `import { Quarry } from "@quarry/events";

const quarry = new Quarry({ token: process.env.QUARRY_TOKEN });

await quarry.identify("acct_bramble", {
  name: "Bramble",
  plan: "team",
  region: "eu-west",
  ownerEmail: "ops@bramble.example",
});`,
    },
    {
      id: "query",
      title: "Read the week",
      description:
        "Ask for revenue by surface. The same event you tracked is the row the board charts.",
      icon: "folder",
      fileName: "query-revenue.ts",
      language: "TypeScript",
      code: `import { Quarry } from "@quarry/events";

const quarry = new Quarry({ token: process.env.QUARRY_TOKEN });

const week = await quarry.query({
  metric: "revenue",
  groupBy: "properties.plan",
  range: "last_7d",
});

console.log(week.rows);`,
    },
  ],
};

export const signals: Content2Props = {
  kicker: "",
  title: "Four signals. One shelf.",
  description:
    "Charges, funnel steps, experiments, and accounts live in the same catalog so a PM can find the next cut without a new tool.",
  types: [
    {
      kind: "project",
      title: "Charges",
      description:
        "Paid events with an amount, a plan, and the account that closed.",
    },
    {
      kind: "gallery",
      title: "Funnel steps",
      description: "Named surfaces in order, from first visit to the invoice.",
    },
    {
      kind: "event",
      title: "Experiments",
      description:
        "Flag keys tied to the same revenue query the board already runs.",
    },
    {
      kind: "social",
      title: "Accounts",
      description:
        "The company record every later event inherits after identify.",
    },
  ],
  createGuide: {
    title: "Send the first event",
    description: "Start from a name, then attach only what the board needs.",
    steps: [
      "Create a workspace and copy the write token.",
      "Track one paid event with an account id and amount.",
      "Open the board. The charge should land in the current week.",
    ],
  },
  manageGuide: {
    title: "Keep the catalog honest",
    description:
      "Retire names that no longer ship, and lock the ones finance reads.",
    steps: [
      "Filter events by owner, status, or last seen.",
      "Rename in place when a surface ships under a new path.",
      "Archive test traffic so the standup number stays clean.",
    ],
  },
  tip: {
    title: "Start with checkout.paid",
    description:
      "If you only send one event this week, send the charge. Funnels can wait until the dollars are trustworthy.",
  },
};

export const customers: CaseStudies13Props = {
  title: "Teams that stopped arguing about the number.",
  description:
    "Four workspaces, four surfaces, one shared rule: the board has to match the ledger.",
  allWork: { label: "See all notes", href: "#customers" },
  studies: [
    {
      href: "#customers",
      image: {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=900&q=80",
        alt: "Laptop showing charts on a wooden desk",
      },
      metric: "3x",
      category: "Checkout",
      client: "Bramble",
      title: "Checkout recovered without a war room.",
      description:
        "Tied drop-off on /checkout to the same day's billed revenue, then shipped one field change.",
    },
    {
      href: "#customers",
      image: {
        src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&h=900&q=80",
        alt: "Collaborative workshop around a table",
      },
      metric: "18d",
      category: "Onboarding",
      client: "Portico",
      title: "Time-to-value the board believed.",
      description:
        "Replaced a slide of activation guesses with a funnel that closed into paid seats.",
    },
    {
      href: "#customers",
      image: {
        src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&h=900&q=80",
        alt: "Quiet desk with a laptop and coffee",
      },
      metric: "27%",
      category: "Pricing",
      client: "Nettle",
      title: "A pricing page that funded itself.",
      description:
        "Grouped plan clicks with invoice amounts so the experiment ended on cash, not CTR.",
    },
    {
      href: "#customers",
      image: {
        src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&h=900&q=80",
        alt: "Team gathered around laptops in a bright workspace",
      },
      metric: "2k",
      category: "Self-serve",
      client: "Ashford",
      title: "Self-serve that sales could quote.",
      description:
        "Put workspace creation and first charge on one tile before the weekly forecast call.",
    },
  ],
};

export const board: ChartGroup14Props = {
  title: "This week's Quarry board",
  description:
    "Revenue, people, and the product paths carrying the week. Change the range and the board follows.",
  presets: [
    { id: "7d", label: "Last 7 days", days: 7 },
    { id: "30d", label: "Last 30 days", days: 30 },
    { id: "90d", label: "Last 90 days", days: 90 },
  ],
  defaultPresetId: "30d",
  referenceDate: "2026-09-05",
  series: buildChartGroup14Series("2026-09-05", 90, 14),
  channels: [
    { id: "product", label: "Product", value: 34, tone: "chart-1" },
    { id: "direct", label: "Direct", value: 24, tone: "chart-2" },
    { id: "docs", label: "Docs", value: 18, tone: "chart-3" },
    { id: "sales", label: "Sales assist", value: 15, tone: "chart-4" },
    { id: "referral", label: "Referral", value: 9, tone: "chart-5" },
  ],
  pages: [
    { path: "/checkout", views: 18420, share: 0.28 },
    { path: "/pricing", views: 12680, share: 0.19 },
    { path: "/docs/events", views: 9340, share: 0.14 },
    { path: "/onboarding", views: 7120, share: 0.11 },
    { path: "/customers/bramble", views: 5480, share: 0.08 },
  ],
  people: [
    {
      id: "mara",
      name: "Mara Chen",
      role: "On call",
      lastActive: "2m ago",
      initials: "MC",
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80",
    },
    {
      id: "julian",
      name: "Julian Voss",
      role: "Reviewing",
      lastActive: "11m ago",
      initials: "JV",
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80",
    },
    {
      id: "nori",
      name: "Nori Hale",
      role: "Shipping",
      lastActive: "24m ago",
      initials: "NH",
      src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=160&h=160&q=80",
    },
    {
      id: "reed",
      name: "Reed Lang",
      role: "Idle",
      lastActive: "1h ago",
      initials: "RL",
    },
  ],
  pagesHref: "#board",
  peopleHref: "#board",
};

export const company: About8Props = {
  title:
    "Built for teams who ship weekly and still have to explain the number.",
  description:
    "Quarry is a small product-analytics company. We sell a board that finance will sit through, and an SDK that PMs can ship without a platform team.",
  stats: [
    { value: "140", label: "Workspaces live" },
    { value: "11 min", label: "Median time to first event" },
    { value: "SOC 2", label: "Type II" },
    { value: "12", label: "People on the floor" },
  ],
  mission: {
    title: "Make revenue as inspectable as a pull request.",
    paragraphs: [
      "Standups should not start by reconstructing last week's funnel from three exports. We treat a paid event as a product surface: named, timed, and owned by the same client that wrote it.",
      "That means idempotent writes, a catalog you can query, and operators who can explain a mismatch without opening a war room.",
    ],
  },
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&h=1200&q=80",
      alt: "Sunlit studio desks with plants and open notebooks",
    },
    {
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&h=1200&q=80",
      alt: "Two colleagues reviewing a screen together",
    },
    {
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&h=1200&q=80",
      alt: "Team gathered around laptops in a bright workspace",
    },
  ],
  product: {
    title: "The board is the product.",
    description:
      "One contract for events, accounts, and charges. Partners integrate once, then read revenue by surface from the same numbered events.",
  },
  team: {
    title: "Founding operators, still on the floor.",
    description:
      "The first twelve people still own incidents, partner reviews, and the weekly board walkthrough. We hire people who can read a funnel as fluently as a pull request.",
    image: {
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&h=900&q=80",
      alt: "Collaborative workshop around a table",
    },
  },
};

export const help: Faq12Props = {
  kicker: "",
  title: "Questions we hear before the first event lands.",
  description:
    "Billing, access, and the write path. Pick a topic on the rail. The list on the right jumps with you.",
  categories: [
    {
      id: "product",
      label: "Product",
      items: [
        {
          question: "What counts as an event?",
          answer:
            "A named write with an account id. Charges also send an amount. Funnel steps can omit dollars until you are ready.",
        },
        {
          question: "Can we keep Mixpanel for a while?",
          answer:
            "Yes. Dual-write from the same client until the board matches last month's invoice, then drop the extra sink.",
        },
        {
          question: "How fresh is the board?",
          answer:
            "Paid events show within a minute on the 7-day view. The 90-day rollup updates every hour.",
        },
      ],
    },
    {
      id: "billing",
      label: "Billing",
      items: [
        {
          question: "When does the monthly invoice close?",
          answer:
            "Invoices close on the first weekday after your billing date. The PDF lands in Billing within a few hours.",
        },
        {
          question: "Can we pay by wire instead of a card?",
          answer:
            "Annual plans can pay by wire. Send the invoice number with the transfer so finance can match it.",
        },
        {
          question: "What happens if a seat sits unused?",
          answer:
            "Unused seats stay on the invoice until you remove them. Proration applies on the next cycle.",
        },
      ],
    },
    {
      id: "access",
      label: "Access",
      items: [
        {
          question: "Who can publish a catalog change?",
          answer:
            "Owners and editors can rename or archive events. Viewers can read the board but cannot ship a catalog edit.",
        },
        {
          question: "How do SSO logins work?",
          answer:
            "Turn on SSO in Access, then map groups to roles. Existing passwords stop working on the next login.",
        },
        {
          question: "Can I revoke a write token without downtime?",
          answer:
            "Create the replacement token first, update the client, then revoke the old one. Revokes take effect immediately.",
        },
      ],
    },
    {
      id: "support",
      label: "Support",
      items: [
        {
          question: "How quickly do you reply?",
          answer:
            "Weekday tickets get a first reply within one business day. Priority plans get a same-day window.",
        },
        {
          question: "Do you offer a live onboarding call?",
          answer:
            "Yes, for teams of five or more. Book it from Support after you send the first paid event.",
        },
        {
          question: "Where do we check service status?",
          answer:
            "Status notes live at status.quarry.example. Incidents also post in the in-app banner until they clear.",
        },
      ],
    },
  ],
};

export const close: Cta28Props = {
  title: "Give the next standup\na number it can trust.",
  description:
    "Start a workspace, send one paid event, and read revenue by surface before Friday.",
  features: [
    { icon: "workflow", label: "One client for track and query" },
    { icon: "gauge", label: "Board that matches the ledger" },
    { icon: "users", label: "Seats for PM, eng, and finance" },
    { icon: "lock", label: "SSO and token rotation" },
    { icon: "shield", label: "SOC 2 Type II" },
    { icon: "sparkles", label: "Catalog you can archive" },
  ],
  action: { label: "Start a workspace", href: "#start" },
  photos: [
    {
      src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&h=1500&q=80",
      alt: "Operators gathered around a long table during a planning session",
    },
    {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&h=1000&q=80",
      alt: "Bright open studio with a communal work table",
    },
    {
      src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&h=900&q=80",
      alt: "Close crop of a laptop and notes on a desk",
    },
  ],
};
