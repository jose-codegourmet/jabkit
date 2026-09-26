import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { marqueeStatsFixture } from "../../.storybook/fixtures";
import { StatsMarquee } from "./StatsMarquee";

const meta = {
  title: "Home/StatsMarquee",
  component: StatsMarquee,
  args: { stats: marqueeStatsFixture },
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof StatsMarquee>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Short: Story = {
  args: { stats: marqueeStatsFixture.slice(0, 3) },
};
