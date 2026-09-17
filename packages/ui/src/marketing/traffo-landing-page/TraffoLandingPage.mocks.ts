import { infographicNodeGraphMocks } from "@/marketing/infographic-node-graph/InfographicNodeGraph.mocks";
import { traffoFeaturesSectionMocks } from "@/marketing/traffo-features-section/TraffoFeaturesSection.mocks";
import { traffoFooterMocks } from "@/marketing/traffo-footer/TraffoFooter.mocks";
import { traffoHeaderMocks } from "@/marketing/traffo-header/TraffoHeader.mocks";
import type { TraffoLandingPageProps } from "./TraffoLandingPage.types";

export const traffoLandingPageMocks = {
  default: {
    header: traffoHeaderMocks.default,
    hero: {
      titleLines: ["Convert traffic", "and get better", "conversions"],
      subtitle:
        "No more lost data. From now you can get the best output of your traffic and maximize every conversion rate.",
      ctaLabel: "Start for free",
      ctaHref: "#start",
      featuresLabel: "Workspace features",
      featuresHref: "#features",
      featuresLinkLabel: "Learn more",
    },
    graph: infographicNodeGraphMocks.default,
    stats: [
      { value: "+546", suffix: "k", label: "Active customers" },
      { value: "99", suffix: "%", label: "Uptime guarantee" },
      { value: "+2.4k", suffix: "M", label: "Events tracked daily" },
      { value: "42", suffix: "x", label: "Faster than the rest" },
    ],
    features: traffoFeaturesSectionMocks.default,
    testimonial: {
      quote:
        "We replaced four tools with Traffo and our conversion rate went up 38% in a quarter. The data finally tells a story we can act on.",
      attribution: "Trinette Eckard, Head of Growth at Makebelief",
    },
    cta: {
      title: "Stop losing the good ones.",
      emphasis: "good ones",
      body: "Free for the first 10,000 events a month. No credit card. No sales call. Just better data, today.",
      actionLabel: "Start for free",
      actionHref: "#start",
    },
    footer: traffoFooterMocks.default,
  },
  alternate: {
    header: traffoHeaderMocks.alternate,
    hero: {
      titleLines: ["See the path", "from click to cash"],
      subtitle: "Instrument once. Read the story without a SQL queue.",
      ctaLabel: "Book a demo",
      ctaHref: "#start",
    },
    graph: infographicNodeGraphMocks.alternate,
    stats: [
      { value: "18", suffix: "ms", label: "Median ingest" },
      { value: "7", suffix: "d", label: "To first insight" },
    ],
    features: traffoFeaturesSectionMocks.alternate,
    footer: traffoFooterMocks.alternate,
  },
} satisfies Record<string, TraffoLandingPageProps>;
