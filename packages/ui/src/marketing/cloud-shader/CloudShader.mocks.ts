import type { CloudShaderProps } from "./CloudShader.types";

interface CloudShaderLink {
  label: string;
  href: string;
}

interface CloudShaderMetric {
  label: string;
  value: string;
  delta: string;
}

interface CloudShaderHeroCopy {
  brand: CloudShaderLink;
  mark: string;
  navItems: CloudShaderLink[];
  signIn: CloudShaderLink;
  headerAction: CloudShaderLink;
  heading: string;
  description: string;
  primaryAction: CloudShaderLink;
  secondaryAction: CloudShaderLink;
  helper: string;
  metrics: CloudShaderMetric[];
}

export const cloudShaderMocks = {
  default: {
    speed: 1,
    count: 6,
    cloudColor: "#fbf8f2",
    skyTopColor: "#3876ba",
    skyBottomColor: "#8cbfe8",
  },
  alternate: {
    speed: 1.4,
    count: 3,
    cloudColor: "#f6e6c8",
    skyTopColor: "#1b3358",
    skyBottomColor: "#d47a4a",
  },
} satisfies Record<"default" | "alternate", CloudShaderProps>;

export const cloudShaderHero = {
  brand: { label: "Altitude", href: "#top" },
  mark: "A",
  navItems: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Docs", href: "#docs" },
    { label: "Blog", href: "#blog" },
  ],
  signIn: { label: "Sign in", href: "#signin" },
  headerAction: { label: "Get started", href: "#start" },
  heading: "Banking above the clouds",
  description:
    "Altitude gives your finance team one home for cards, payments, and forecasting. Close the books in hours, not weeks, with automation that works while you sleep.",
  primaryAction: { label: "Start for free", href: "#start" },
  secondaryAction: { label: "Book a demo", href: "#demo" },
  helper: "No credit card required · Free 14-day trial",
  metrics: [
    { label: "Cash on hand", value: "$4.8M", delta: "+6.2%" },
    { label: "Cards issued", value: "1,284", delta: "+18" },
    { label: "Close time", value: "6h", delta: "-41%" },
  ],
} satisfies CloudShaderHeroCopy;
