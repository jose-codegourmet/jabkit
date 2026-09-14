import type { Content1Section } from "@/marketing/content1";
import type { Content4Author, Content4Block } from "@/marketing/content4";
import type { Pricing28Plan } from "@/marketing/pricing28";
import { sampleImage } from "../assets";
import { contributorHref, displayedAmount, membershipHref } from "../content";
import type {
  ArticleRecord,
  BillingInterval,
  ContributorRecord,
  MembershipPlan,
} from "../types";

export function toContent4Blocks(article: ArticleRecord): Content4Block[] {
  const standfirst: Content4Block = {
    type: "paragraph",
    id: `${article.slug}-standfirst`,
    text: article.standfirst,
  };
  const rest = article.blocks.map((block): Content4Block => {
    if (block.type === "paragraph") {
      return { type: "paragraph", id: block.id, text: block.text };
    }
    if (block.type === "heading") {
      return { type: "heading", id: block.id, title: block.title };
    }
    const image = sampleImage(block.imageId, block.alt);
    return {
      type: "image",
      id: block.id,
      src: image.src,
      alt: block.alt,
      caption: block.caption,
    };
  });
  return [standfirst, ...rest];
}

export function toContent4Author(
  article: ArticleRecord,
  author: ContributorRecord,
): Content4Author {
  const portrait = sampleImage(author.portraitId, author.portraitAlt);
  return {
    name: author.name,
    role: author.role,
    date: article.publishedOn,
    avatarSrc: portrait.src,
    avatarAlt: author.portraitAlt,
    fallback: author.fallback,
    href: contributorHref(author.slug),
  };
}

export function toPricing28Plans(
  plans: MembershipPlan[],
  interval: BillingInterval,
): Pricing28Plan[] {
  return plans.map((plan) => {
    const amount = displayedAmount(plan, interval);
    return {
      id: plan.id,
      name: plan.name,
      popular: plan.popular,
      popularLabel: plan.popular ? "Most chosen" : undefined,
      monthlyPrice: plan.monthlyPrice,
      yearlyPrice: plan.yearlyPrice,
      monthlyPeriod: plan.monthlyPeriod,
      yearlyPeriod: plan.yearlyPeriod,
      tagline: `${plan.tagline} Currently ${amount.price} ${amount.period}.`,
      ctaLabel: `Choose ${plan.name}`,
      href: membershipHref({ plan: plan.id, interval }),
      ctaVariant: plan.popular ? "primary" : "secondary",
      groups: [
        {
          title: "In this sample",
          items: plan.features.map((text) => ({
            icon: "check" as const,
            text,
          })),
        },
      ],
    };
  });
}

export function toAboutSections(): Content1Section[] {
  return [
    {
      id: "point-of-view",
      title: "What the journal is for",
      blocks: [
        {
          type: "paragraph",
          text: "Common Hours looks at ordinary civic life: rooms that open, people who keep a craft, and weekly practices that do not need a campaign. Membership is a secondary, clearly simulated choice.",
        },
        {
          type: "list",
          items: [
            {
              title: "Places",
              text: "Streets, benches, windows, and public tables.",
            },
            {
              title: "People",
              text: "Workers whose jobs still happen in rooms you can point at.",
            },
            {
              title: "Rituals",
              text: "Repeats that hold a district without becoming a brand.",
            },
          ],
        },
        {
          type: "callout",
          callout: {
            badge: "Demo",
            title: "Fictional throughout",
            body: "The journal, the district, the contributors, and the prices are invented for this JabKit sample. No partnership, inbox, or legal claim is attached.",
          },
        },
      ],
    },
    {
      id: "issue",
      title: "How an issue is built",
      blocks: [
        {
          type: "paragraph",
          text: "Late Light collects nine stories in one week of an invented district. Three longer pieces set the pace. Six shorter ones keep the issue from becoming a single essay with extra headings.",
        },
        {
          type: "list",
          items: [
            {
              title: "Cover",
              text: "One lead, two secondary stories, then a compact topic index.",
            },
            {
              title: "Archive",
              text: "All nine, filterable by topic, searchable by title and standfirst.",
            },
            {
              title: "Longread",
              text: "Byline, outline, figures, and two related stories that are not the one you are in.",
            },
          ],
        },
      ],
    },
    {
      id: "how-to-read",
      title: "How to move through it",
      blocks: [
        {
          type: "paragraph",
          text: "Start at Stories, filter to a topic, and open a piece. Author names lead to bibliographies. Membership compares two demo tiers and previews a signup without sending data.",
        },
      ],
    },
  ];
}
