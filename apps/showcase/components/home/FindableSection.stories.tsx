import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { tagStickersFixture } from "../../.storybook/fixtures";
import { FindableSection } from "./FindableSection";

const meta = {
  title: "Home/FindableSection",
  component: FindableSection,
  args: { tags: tagStickersFixture },
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof FindableSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FewTags: Story = {
  args: { tags: tagStickersFixture.slice(0, 3) },
};
