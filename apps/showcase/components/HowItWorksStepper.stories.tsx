import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, within } from "storybook/test";
import { stepperSamplesFixture } from "../.storybook/fixtures";
import { HowItWorksStepper } from "./HowItWorksStepper";

const meta = {
  title: "Chrome/HowItWorksStepper",
  component: HowItWorksStepper,
  args: { samples: stepperSamplesFixture },
  parameters: { layout: "padded" },
} satisfies Meta<typeof HowItWorksStepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Add: Story = {};

export const Describe: Story = { args: { initialStep: 0 } };

export const Own: Story = { args: { initialStep: 2 } };

export const SwitchComponent: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: "hero307" }));
    await expect(
      canvas.getByText(/src\/components\/jabkit\/hero307\/Hero307.tsx/),
    ).toBeVisible();
  },
};
