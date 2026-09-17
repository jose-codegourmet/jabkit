import type { Meta, StoryObj } from "@storybook/react";
import { AudioLinesIcon, MinusIcon, PlusIcon } from "lucide-react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Button } from "@/atoms/button";
import { Input } from "@/atoms/input";
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "./ButtonGroup";
import { buttonGroupMocks } from "./ButtonGroup.mocks";

const meta = {
  title: "Atoms/ButtonGroup",
  component: ButtonGroup,
  parameters: { layout: "centered" },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="secondary">{buttonGroupMocks.default.first}</Button>
      <Button variant="secondary">{buttonGroupMocks.default.second}</Button>
    </ButtonGroup>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-8">
      <ButtonGroup orientation="vertical">
        <Button variant="secondary" size="sm" aria-label="Increase">
          <PlusIcon />
        </Button>
        <Button variant="secondary" size="sm" aria-label="Decrease">
          <MinusIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <ButtonGroup>
          <Button variant="secondary" size="sm">
            {buttonGroupMocks.archive.first}
          </Button>
          <Button variant="secondary" size="sm">
            {buttonGroupMocks.archive.second}
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="secondary" size="sm" aria-label="Voice Mode">
            <AudioLinesIcon />
          </Button>
        </ButtonGroup>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="ghost">{buttonGroupMocks.archive.first}</Button>
        <ButtonGroupSeparator />
        <Button variant="ghost">{buttonGroupMocks.archive.second}</Button>
      </ButtonGroup>
      <ButtonGroup>
        <ButtonGroupText>{buttonGroupMocks.text.label}</ButtonGroupText>
        <Input placeholder={buttonGroupMocks.input.placeholder} />
        <Button variant="secondary">{buttonGroupMocks.input.action}</Button>
      </ButtonGroup>
    </div>
  ),
};

export const ThemeComparison: Story = {
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-8">
        <ButtonGroup>
          <Button variant="secondary">{buttonGroupMocks.default.first}</Button>
          <Button variant="secondary">{buttonGroupMocks.default.second}</Button>
        </ButtonGroup>
      </div>
      <div className="dark bg-background p-8">
        <ButtonGroup>
          <Button variant="secondary">{buttonGroupMocks.default.first}</Button>
          <Button variant="secondary">{buttonGroupMocks.default.second}</Button>
        </ButtonGroup>
      </div>
    </div>
  ),
};
