import { AudioLinesIcon, MinusIcon, PlusIcon } from "lucide-react";
// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Button } from "@/atoms/button";
import { Input } from "@/atoms/input";
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "./ButtonGroup";
import { buttonGroupMocks } from "./ButtonGroup.mocks";

export default {
  Default: () => (
    <ButtonGroup>
      <Button variant="secondary">{buttonGroupMocks.default.first}</Button>
      <Button variant="secondary">{buttonGroupMocks.default.second}</Button>
    </ButtonGroup>
  ),
  Variants: () => (
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
