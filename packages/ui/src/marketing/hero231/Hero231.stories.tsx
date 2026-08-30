import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Hero231 } from "./Hero231";
import { hero231EditorialMocks, hero231Mocks } from "./Hero231.mocks";

const meta = {
  title: "Marketing/Hero231",
  component: Hero231,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Hero231>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { title: hero231Mocks.title },
  render: () => (
    <Hero231
      kicker={hero231Mocks.kicker}
      title={hero231Mocks.title}
      description={hero231Mocks.description}
    />
  ),
};

export const Variants: Story = {
  args: { title: hero231EditorialMocks.title },
  render: () => (
    <Hero231
      kicker={hero231EditorialMocks.kicker}
      title={hero231EditorialMocks.title}
      description={hero231EditorialMocks.description}
      primaryAction={hero231EditorialMocks.primaryAction}
      secondaryAction={hero231EditorialMocks.secondaryAction}
    />
  ),
};

export const ThemeComparison: Story = {
  args: { title: hero231Mocks.title },
  render: () => (
    <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <Hero231 title="Light mode studio" />
      </div>
      <div className="dark bg-background">
        <Hero231 title="Dark mode studio" />
      </div>
    </div>
  ),
};
