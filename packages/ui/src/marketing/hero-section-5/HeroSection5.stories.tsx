import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { HeroSection5 } from "./HeroSection5";
import {
  heroSection5EditorialMocks,
  heroSection5Mocks,
} from "./HeroSection5.mocks";

const meta = {
  title: "Marketing/HeroSection5",
  component: HeroSection5,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof HeroSection5>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { title: heroSection5Mocks.title },
  render: () => (
    <HeroSection5
      kicker={heroSection5Mocks.kicker}
      title={heroSection5Mocks.title}
      description={heroSection5Mocks.description}
    />
  ),
};

export const Variants: Story = {
  args: { title: heroSection5EditorialMocks.title },
  render: () => (
    <HeroSection5
      brand={heroSection5EditorialMocks.brand}
      navItems={heroSection5EditorialMocks.navItems}
      headerAction={heroSection5EditorialMocks.headerAction}
      kicker={heroSection5EditorialMocks.kicker}
      title={heroSection5EditorialMocks.title}
      description={heroSection5EditorialMocks.description}
      primaryAction={heroSection5EditorialMocks.primaryAction}
      secondaryAction={heroSection5EditorialMocks.secondaryAction}
      video={heroSection5EditorialMocks.video}
    />
  ),
};

export const ThemeComparison: Story = {
  args: { title: heroSection5Mocks.title },
  render: () => (
    <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <HeroSection5 title="Light mode observatory" />
      </div>
      <div className="dark bg-background">
        <HeroSection5 title="Dark mode observatory" />
      </div>
    </div>
  ),
};
