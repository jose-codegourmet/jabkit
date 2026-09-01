import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Hero230 } from "./Hero230";
import { hero230EditorialMocks, hero230Mocks } from "./Hero230.mocks";

const meta = {
  title: "Marketing/Hero230",
  component: Hero230,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Hero230>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...hero230Mocks },
  render: () => (
    <Hero230
      kicker={hero230Mocks.kicker}
      title={hero230Mocks.title}
      description={hero230Mocks.description}
      primaryAction={hero230Mocks.primaryAction}
      secondaryAction={hero230Mocks.secondaryAction}
      logos={hero230Mocks.logos}
      slides={hero230Mocks.slides}
    />
  ),
};

export const Variants: Story = {
  args: { ...hero230EditorialMocks },
  render: () => (
    <Hero230
      kicker={hero230EditorialMocks.kicker}
      title={hero230EditorialMocks.title}
      description={hero230EditorialMocks.description}
      primaryAction={hero230EditorialMocks.primaryAction}
      secondaryAction={hero230EditorialMocks.secondaryAction}
      logos={hero230EditorialMocks.logos}
      slides={hero230EditorialMocks.slides}
      autoplay={hero230EditorialMocks.autoplay}
    />
  ),
};

export const ThemeComparison: Story = {
  args: { ...hero230Mocks },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <Hero230 title="Light mode launch" />
      </div>
      <div className="dark bg-background">
        <Hero230 title="Dark mode launch" />
      </div>
    </div>
  ),
};
