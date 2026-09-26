import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, within } from "storybook/test";
import { HeroSection } from "./HeroSection";

const meta = {
  title: "Home/HeroSection",
  component: HeroSection,
  args: { installName: "hero307" },
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof HeroSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AgentMode: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: "I'm an agent" }));
    await expect(canvas.getByText("/jabkit-component hero307")).toBeVisible();
  },
};

export const Mobile: Story = {
  globals: { viewport: { value: "mobile1" } },
};
