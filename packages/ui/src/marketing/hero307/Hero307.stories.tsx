import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Hero307 } from "./Hero307";
import { hero307EditorialMocks, hero307Mocks } from "./Hero307.mocks";

const meta = {
  title: "Marketing/Hero307",
  component: Hero307,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Hero307>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { title: hero307Mocks.title },
  render: () => (
    <Hero307
      kicker={hero307Mocks.kicker}
      title={hero307Mocks.title}
      description={hero307Mocks.description}
      primaryAction={hero307Mocks.primaryAction}
      secondaryAction={hero307Mocks.secondaryAction}
      dashboard={hero307Mocks.dashboard}
    />
  ),
};

export const Variants: Story = {
  args: { title: hero307EditorialMocks.title },
  render: () => (
    <Hero307
      kicker={hero307EditorialMocks.kicker}
      title={hero307EditorialMocks.title}
      description={hero307EditorialMocks.description}
      primaryAction={hero307EditorialMocks.primaryAction}
      secondaryAction={hero307EditorialMocks.secondaryAction}
      dashboard={hero307EditorialMocks.dashboard}
    />
  ),
};

export const ThemeComparison: Story = {
  args: { title: hero307Mocks.title },
  render: () => (
    <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <Hero307 title="Light mode console" />
      </div>
      <div className="dark bg-background">
        <Hero307 title="Dark mode console" />
      </div>
    </div>
  ),
};
