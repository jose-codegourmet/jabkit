import type { Bento19Props } from "./Bento19.types";

export const bento19Mocks = {
  default: {},
  alternate: {
    kicker: "Field ops",
    title: "The board the site lead actually opens.",
    description:
      "Same six tiles, rewritten for crews who live in punch lists instead of model dashboards.",
    cards: [
      {
        id: "crew",
        title: "Crew load forecast",
        description:
          "See which trade overruns tomorrow before the trucks leave the yard.",
        visual: "pills" as const,
        aspect: "compact" as const,
        integrations: [
          { name: "Procore", initial: "Pr" },
          { name: "PlanGrid", initial: "Pg" },
          { name: "Slack", initial: "Sl" },
          { name: "Drive", initial: "Dr" },
          { name: "Twilio", initial: "Tw" },
          { name: "Dropbox", initial: "Db" },
        ],
      },
      {
        id: "materials",
        title: "Material draw analysis",
        description:
          "Compare takeoff to what actually left the lockup this week.",
        visual: "chart" as const,
        aspect: "standard" as const,
        series: [30, 42, 38, 55, 49, 67, 72, 64],
      },
      {
        id: "punch",
        title: "Punch-list routing",
        description:
          "Close items by trade and floor without forwarding the same photo twice.",
        visual: "dashboard" as const,
        aspect: "portrait" as const,
        metric: "41 open",
        metricLabel: "Today",
      },
      {
        id: "weather",
        title: "Weather-aware schedule",
        description:
          "Shift exterior work when the model sees a two-day rain window.",
        visual: "spark" as const,
        aspect: "compact" as const,
        series: [40, 36, 44, 48, 42, 55, 62, 58, 70],
        metric: "2 days",
        metricLabel: "Hold",
      },
      {
        id: "signoff",
        title: "Sign-off support",
        description:
          "One packet per zone: photos, notes, and the name who can approve.",
        visual: "chart" as const,
        aspect: "standard" as const,
        series: [24, 36, 44, 40, 58, 61, 74],
      },
      {
        id: "safety",
        title: "Safety anomaly alerts",
        description:
          "Flag missing PPE stills and near-miss notes before the next toolbox talk.",
        visual: "alerts" as const,
        aspect: "compact" as const,
        alerts: [
          {
            label: "Missing harness still",
            detail: "Level 4 · 11m",
            tone: "warning",
          },
          {
            label: "Gate left unlatched",
            detail: "North hoist · now",
            tone: "destructive",
          },
          { label: "Cleared", detail: "Scaffold tag · 1h", tone: "success" },
        ],
      },
    ],
  },
} satisfies Record<"default" | "alternate", Bento19Props>;
