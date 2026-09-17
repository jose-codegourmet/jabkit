// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Label } from "@/atoms/label";
import { RadioGroup, RadioGroupItem } from "./RadioGroup";
import { radioGroupMocks } from "./RadioGroup.mocks";

export default {
  Default: () => (
    <RadioGroup defaultValue={radioGroupMocks.defaultValue}>
      {radioGroupMocks.options.map((option) => (
        <div className="flex items-center gap-3" key={option.value}>
          <RadioGroupItem id={option.value} value={option.value} />
          <Label htmlFor={option.value}>{option.label}</Label>
        </div>
      ))}
    </RadioGroup>
  ),
  Variants: () => (
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
