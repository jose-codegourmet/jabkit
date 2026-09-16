import type { CloudShaderProps } from "./CloudShader.types";

export const cloudShaderMocks = {
  default: {
    layout: "saas",
    speed: 1,
    count: 6,
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
  },
  alternate: {
    layout: "window",
    speed: 1,
    count: 6,
    brand: { label: "Skyline", href: "#top" },
    navItems: [
      { label: "Flights", href: "#flights" },
      { label: "Hotels", href: "#hotels" },
      { label: "Deals", href: "#deals" },
      { label: "Support", href: "#support" },
    ],
    signIn: { label: "Sign in", href: "#signin" },
    heading: "Your window seat to anywhere on Earth",
    description:
      "Search 400+ airlines, watch fares drop in real time, and book in under a minute. No hidden fees, no fine print, just you and the clouds.",
    primaryAction: { label: "Book a flight", href: "#book" },
    secondaryAction: { label: "Explore destinations", href: "#explore" },
    proof: [
      { name: "Manu", src: "/assets/bd48582e630a15fa.webp" },
      { name: "Imani", src: "/assets/2a364f729e4f7c09.webp" },
      { name: "Noor", src: "/assets/d111cc60a8f2bf68.webp" },
      { name: "Jules", src: "/assets/040bd026249d7af9.webp" },
      { name: "Rafi", src: "/assets/bd48582e630a15fa.webp" },
    ],
    proofLabel: "Manu and 5 others saved 30% on their last trip",
  },
} satisfies Record<"default" | "alternate", CloudShaderProps>;
