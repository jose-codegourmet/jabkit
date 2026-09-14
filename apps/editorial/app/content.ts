import { articles } from "./articles";
import type {
  ArticleRecord,
  AssetSlot,
  BillingInterval,
  ContributorId,
  ContributorRecord,
  FaqCategory,
  MembershipPlan,
  PlanId,
  Topic,
  TopicFilter,
} from "./types";
import {
  billingIntervals,
  contributorIds,
  planIds,
  sampleRoot,
  topicFilters,
} from "./types";

export { articles } from "./articles";

export const brand = {
  name: "Common Hours",
  tagline: "A journal of places, people, and rituals.",
  statement: "What a street still holds when nobody is selling it.",
  intro:
    "An independent journal about everyday rooms, the people who keep them, and the rituals that hold a neighborhood together.",
} as const;

export const demoNote =
  "Common Hours is a fictional JabKit sample. Membership prices are illustrative. Nothing is sent or charged.";

export const currentIssue = {
  label: "Vol. 12 · Late Light",
  dateLine: "September 2026",
  note: "Nine stories from one invented district. Places, people, and rituals in the same week.",
} as const;

export const navItems = [
  { href: `${sampleRoot}stories`, label: "Stories" },
  { href: `${sampleRoot}about`, label: "About" },
  { href: `${sampleRoot}membership`, label: "Membership" },
] as const;

export const contributors: ContributorRecord[] = [
  {
    slug: "mira-ellison",
    name: "Mira Ellison",
    role: "Places editor",
    shortBio:
      "Writes about rooms, streets, and the furniture that keeps them public.",
    biography: [
      "Mira Ellison is the fictional places editor of Common Hours. She came to the journal after years of writing building notes for a civic paper that no longer exists in this story.",
      "She is interested in thresholds, benches, and windows — the parts of a street that do not need a ticket. She lives, in this telling, two bus stops from Binder Street and prefers to arrive before a room opens.",
    ],
    portraitId: "edt-author01",
    portraitAlt: "Illustrated portrait of Mira Ellison, a fictional editor",
    fallback: "ME",
  },
  {
    slug: "jonah-voss",
    name: "Jonah Voss",
    role: "People editor",
    shortBio:
      "Profiles workers whose jobs are still done in rooms you can point at.",
    biography: [
      "Jonah Voss is the fictional people editor. He writes portraits that stay with the work: presses, desks, shutters, and the ordinary tools that make a person visible.",
      "He does not invent endorsements or famous sitters. The printers, choristers, and night librarians in this issue are characters in a closed sample, not public figures.",
    ],
    portraitId: "edt-author02",
    portraitAlt: "Illustrated portrait of Jonah Voss, a fictional editor",
    fallback: "JV",
  },
  {
    slug: "adele-park",
    name: "Adele Park",
    role: "Rituals editor",
    shortBio:
      "Follows weekly practices that hold a district together without becoming a brand.",
    biography: [
      "Adele Park is the fictional rituals editor. She looks for repeats: soup on a Tuesday, a dusk walk, a dish of keys that never becomes an app.",
      "She treats membership, in this journal, as a simulated way to keep reading — never as a real subscription sold from the page.",
    ],
    portraitId: "edt-author03",
    portraitAlt: "Illustrated portrait of Adele Park, a fictional editor",
    fallback: "AP",
  },
];

export const membershipPlans: MembershipPlan[] = [
  {
    id: "reader",
    name: "Reader",
    tagline: "The current issue on the day it is set, plus the archive.",
    monthlyPrice: "$6",
    yearlyPrice: "$60",
    monthlyPeriod: "per month, demo only",
    yearlyPeriod: "per year, demo only",
    features: [
      "All nine stories in this sample issue",
      "Topic archive with saved filters in the URL",
      "Contributor pages and related reading",
    ],
  },
  {
    id: "patron",
    name: "Patron",
    tagline: "Reader, plus a print-letter facsimile in the colophon.",
    monthlyPrice: "$12",
    yearlyPrice: "$120",
    monthlyPeriod: "per month, demo only",
    yearlyPeriod: "per year, demo only",
    popular: true,
    features: [
      "Everything in Reader",
      "A monthly letter composed as sample copy",
      "Name listed in the fictional colophon",
    ],
  },
];

export const membershipFaqs: FaqCategory[] = [
  {
    id: "offer",
    label: "The offer",
    items: [
      {
        question: "Is Common Hours a real journal I can subscribe to?",
        answer:
          "No. Common Hours is a fictional JabKit sample. The stories, people, and prices exist to demonstrate an editorial website. Nothing is billed.",
      },
      {
        question: "What do the two plans include in this demo?",
        answer:
          "Reader is the archive and current issue. Patron adds a sample monthly letter and a colophon mention. Both are illustrative copy, not entitlements.",
      },
    ],
  },
  {
    id: "billing",
    label: "Billing display",
    items: [
      {
        question: "Why is yearly ten times monthly?",
        answer:
          "The yearly figures are the monthly amounts times ten, shown as a simple demo convention. There is no hidden discount percentage and no real invoice.",
      },
      {
        question: "Can I pay or enter a card?",
        answer:
          "No. Plan buttons only move you to an on-page preview. There is no payment field, processor, or secure-checkout claim.",
      },
    ],
  },
  {
    id: "preview",
    label: "Local preview",
    items: [
      {
        question: "What happens when I preview a signup?",
        answer:
          "The page shows the plan, interval, displayed amount, and the name and email you typed. The values stay in this tab. Reload clears them. Nothing is sent.",
      },
      {
        question: "Will you email me?",
        answer:
          "No. There is no mailing list, account, or confirmation message that claims delivery.",
      },
    ],
  },
];

export const aboutPrinciples = [
  {
    title: "Read the room before the theme",
    body: "A story starts with a place that can be stood in, even when the place is invented. Atmosphere is not a substitute for a door, a table, or a job.",
  },
  {
    title: "Name the work, not the vibe",
    body: "People in these pages have tasks: opening a room, setting type, keeping a pot. We do not borrow celebrity or real-world endorsements.",
  },
  {
    title: "Keep the ritual small",
    body: "Repeats matter because they are repeatable. If a practice needs a brand campaign, it is probably not a ritual in our sense.",
  },
] as const;

export const unknownSlugCopy = {
  story: {
    title: "This story is not in the issue",
    body: "Common Hours is a closed set of nine stories. Return to the archive or to the current issue.",
    actionLabel: "View stories",
    actionHref: `${sampleRoot}stories`,
  },
  contributor: {
    title: "This contributor is not on the masthead",
    body: "The journal has three fictional editors in this sample. Return to About for the directory.",
    actionLabel: "About the journal",
    actionHref: `${sampleRoot}about`,
  },
} as const;

export const assetMatrix: AssetSlot[] = [
  ...articles.map((article) => ({
    route: `${sampleRoot}stories/${article.slug}`,
    section: "lead",
    recordId: article.slug,
    imageId: article.leadImageId,
  })),
  ...contributors.map((person) => ({
    route: `${sampleRoot}contributors/${person.slug}`,
    section: "portrait",
    recordId: person.slug,
    imageId: person.portraitId,
  })),
];

export const topicLabels: Record<Topic | "all", string> = {
  all: "All",
  places: "Places",
  people: "People",
  rituals: "Rituals",
};

export function isTopicFilter(value: string | undefined): value is TopicFilter {
  return (
    value !== undefined && (topicFilters as readonly string[]).includes(value)
  );
}

export function parseTopicFilter(value: string | undefined): TopicFilter {
  return isTopicFilter(value) ? value : "all";
}

export function isPlanId(value: string | undefined): value is PlanId {
  return value !== undefined && (planIds as readonly string[]).includes(value);
}

export function isBillingInterval(
  value: string | undefined,
): value is BillingInterval {
  return (
    value !== undefined &&
    (billingIntervals as readonly string[]).includes(value)
  );
}

export function isContributorId(
  value: string | undefined,
): value is ContributorId {
  return (
    value !== undefined && (contributorIds as readonly string[]).includes(value)
  );
}

export function getArticle(slug: string): ArticleRecord | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getContributor(slug: string): ContributorRecord | undefined {
  return contributors.find((person) => person.slug === slug);
}

export function getPlan(id: string | undefined): MembershipPlan | undefined {
  if (!isPlanId(id)) return undefined;
  return membershipPlans.find((plan) => plan.id === id);
}

export function articlesByAuthor(authorId: ContributorId): ArticleRecord[] {
  return articles.filter((article) => article.authorId === authorId);
}

export function filterArticles(
  topic: TopicFilter,
  query = "",
): ArticleRecord[] {
  const needle = query.trim().toLowerCase();
  return articles.filter((article) => {
    if (topic !== "all" && article.topic !== topic) return false;
    if (!needle) return true;
    const haystack = `${article.title} ${article.standfirst}`.toLowerCase();
    return haystack.includes(needle);
  });
}

export function homeLead(): ArticleRecord {
  const lead = articles.find((article) => article.selectedOnHome === "lead");
  if (!lead) throw new Error("Home lead story missing");
  return lead;
}

export function homeSecondary(): ArticleRecord[] {
  return articles.filter((article) => article.selectedOnHome === "secondary");
}

export function homeMore(): ArticleRecord[] {
  return articles.filter((article) => article.selectedOnHome === "more");
}

export function relatedArticles(article: ArticleRecord): ArticleRecord[] {
  return article.relatedSlugs.map((slug) => {
    const related = getArticle(slug);
    if (!related || related.slug === article.slug) {
      throw new Error(`Invalid related story for ${article.slug}: ${slug}`);
    }
    return related;
  });
}

export function storyHref(slug: string): string {
  return `${sampleRoot}stories/${slug}`;
}

export function contributorHref(slug: ContributorId): string {
  return `${sampleRoot}contributors/${slug}`;
}

export function storiesHref(topic: TopicFilter = "all", q = ""): string {
  const params = new URLSearchParams();
  if (topic !== "all") params.set("filter", topic);
  const query = q.trim();
  if (query) params.set("q", query);
  const search = params.toString();
  return search ? `${sampleRoot}stories?${search}` : `${sampleRoot}stories`;
}

export function membershipHref(query?: {
  plan?: string;
  interval?: BillingInterval;
}): string {
  const params = new URLSearchParams();
  if (query?.plan && isPlanId(query.plan)) params.set("plan", query.plan);
  if (query?.interval && query.interval !== "yearly") {
    params.set("interval", query.interval);
  }
  const search = params.toString();
  const path = `${sampleRoot}membership`;
  return search ? `${path}?${search}#signup` : `${path}#signup`;
}

export function articleWordCount(article: ArticleRecord): number {
  const fromBlocks = article.blocks.reduce((sum, block) => {
    if (block.type === "paragraph") {
      return sum + countWords(block.text);
    }
    if (block.type === "heading") {
      return sum + countWords(block.title);
    }
    return sum;
  }, 0);
  return (
    fromBlocks + countWords(article.title) + countWords(article.standfirst)
  );
}

export function readingMinutes(article: ArticleRecord): number {
  return Math.max(1, Math.round(articleWordCount(article) / 220));
}

export function displayedAmount(
  plan: MembershipPlan,
  interval: BillingInterval,
): { price: string; period: string } {
  if (interval === "yearly") {
    return { price: plan.yearlyPrice, period: plan.yearlyPeriod };
  }
  return { price: plan.monthlyPrice, period: plan.monthlyPeriod };
}

function countWords(value: string): number {
  return value.trim().split(/\s+/).filter(Boolean).length;
}
