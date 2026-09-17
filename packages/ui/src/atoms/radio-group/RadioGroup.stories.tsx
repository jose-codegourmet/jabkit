import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Label } from "@/atoms/label";
import { RadioGroup, RadioGroupItem } from "./RadioGroup";
import { radioGroupMocks } from "./RadioGroup.mocks";

const meta = {
  title: "Atoms/RadioGroup",
  component: RadioGroup,
  parameters: { layout: "centered" },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue={radioGroupMocks.defaultValue}>
      {radioGroupMocks.options.map((option) => (
        <div className="flex items-center gap-3" key={option.value}>
          <RadioGroupItem id={option.value} value={option.value} />
          <Label htmlFor={option.value}>{option.label}</Label>
        </div>
      ))}
    </RadioGroup>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex w-64 flex-col gap-8">
      <RadioGroup defaultValue={radioGroupMocks.plans[0].value}>
        {radioGroupMocks.plans.map((option) => (
          <div className="flex items-center gap-3" key={option.value}>
            <RadioGroupItem id={`plan-${option.value}`} value={option.value} />
            <Label htmlFor={`plan-${option.value}`}>{option.label}</Label>
          </div>
        ))}
      </RadioGroup>
      <RadioGroup defaultValue={radioGroupMocks.defaultValue} disabled>
        {radioGroupMocks.options.map((option) => (
          <div className="flex items-center gap-3" key={option.value}>
            <RadioGroupItem
              id={`disabled-${option.value}`}
              value={option.value}
            />
            <Label htmlFor={`disabled-${option.value}`}>{option.label}</Label>
          </div>
        ))}
      </RadioGroup>
      <RadioGroup defaultValue={radioGroupMocks.defaultValue}>
        {radioGroupMocks.options.map((option) => (
          <div className="flex items-center gap-3" key={option.value}>
            <RadioGroupItem
              aria-invalid
              id={`invalid-${option.value}`}
              value={option.value}
            />
            <Label htmlFor={`invalid-${option.value}`}>{option.label}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  ),
};

export const ThemeComparison: Story = {
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-8">
        <RadioGroup defaultValue={radioGroupMocks.defaultValue}>
          {radioGroupMocks.options.map((option) => (
            <div className="flex items-center gap-3" key={option.value}>
              <RadioGroupItem id={`light-${option.value}`} value={option.value} />
              <Label htmlFor={`light-${option.value}`}>{option.label}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
      <div className="dark bg-background p-8">
        <RadioGroup defaultValue={radioGroupMocks.defaultValue}>
          {radioGroupMocks.options.map((option) => (
            <div className="flex items-center gap-3" key={option.value}>
              <RadioGroupItem id={`dark-${option.value}`} value={option.value} />
              <Label htmlFor={`dark-${option.value}`}>{option.label}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  ),
};
