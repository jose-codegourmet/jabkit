import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  minimalRegistryEntry,
  registryEntryFixture,
} from "../.storybook/fixtures";
import { ComponentData } from "./ComponentData";

const meta = {
  title: "Chrome/ComponentData",
  component: ComponentData,
  parameters: { layout: "padded" },
} satisfies Meta<typeof ComponentData>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { entry: registryEntryFixture },
};

export const Minimal: Story = {
  args: { entry: minimalRegistryEntry },
};
