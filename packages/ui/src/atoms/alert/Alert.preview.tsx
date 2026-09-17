import { CheckCircle2Icon, CircleAlertIcon, InfoIcon } from "lucide-react";
// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Button } from "../button/Button";
import { Alert, AlertAction, AlertDescription, AlertTitle } from "./Alert";
import { alertMocks } from "./Alert.mocks";

export default {
  Default: () => (
    <div className="flex w-full max-w-lg flex-col gap-4">
      <Alert>
        <CheckCircle2Icon />
        <AlertTitle>{alertMocks.default.title}</AlertTitle>
        <AlertDescription>{alertMocks.default.description}</AlertDescription>
      </Alert>
      <Alert>
        <InfoIcon />
        <AlertTitle>{alertMocks.feature.title}</AlertTitle>
        <AlertDescription>{alertMocks.feature.description}</AlertDescription>
      </Alert>
    </div>
  ),
  Variants: () => (
    <div className="flex w-full max-w-lg flex-col gap-4">
      <Alert>
        <CheckCircle2Icon />
        <AlertTitle>{alertMocks.basic.title}</AlertTitle>
        <AlertDescription>{alertMocks.basic.description}</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <CircleAlertIcon />
        <AlertTitle>{alertMocks.destructive.title}</AlertTitle>
        <AlertDescription>
          {alertMocks.destructive.description}
        </AlertDescription>
      </Alert>
      <Alert>
        <InfoIcon />
        <AlertTitle>{alertMocks.action.title}</AlertTitle>
        <AlertDescription>{alertMocks.action.description}</AlertDescription>
        <AlertAction>
          <Button size="sm" variant="secondary">
            {alertMocks.action.actionLabel}
          </Button>
        </AlertAction>
      </Alert>
    </div>
  ),
};
