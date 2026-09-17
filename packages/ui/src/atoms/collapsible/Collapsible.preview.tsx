import {
  ChevronDownIcon,
  ChevronsUpDownIcon,
  MaximizeIcon,
} from "lucide-react";
import { Button } from "@/atoms/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/atoms/card";
import { Input } from "@/atoms/input";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./Collapsible";
import { collapsibleMocks } from "./Collapsible.mocks";

function OrderDetails({ defaultOpen = false }: { defaultOpen?: boolean }) {
  return (
    <Collapsible
      className="flex w-[350px] flex-col gap-2"
      defaultOpen={defaultOpen}
    >
      <div className="flex items-center justify-between gap-4 px-4">
        <h4 className="text-sm font-semibold">
          {collapsibleMocks.default.title}
        </h4>
        <CollapsibleTrigger
          render={
            <Button className="size-8 p-0" size="sm" variant="ghost">
              <ChevronsUpDownIcon />
              <span className="sr-only">
                {collapsibleMocks.default.toggleLabel}
              </span>
            </Button>
          }
        />
      </div>
      <div className="flex items-center justify-between rounded-md border border-border px-4 py-2 text-sm">
        <span className="text-muted-foreground">
          {collapsibleMocks.default.statusLabel}
        </span>
        <span className="font-medium">{collapsibleMocks.default.status}</span>
      </div>
      <CollapsibleContent className="flex flex-col gap-2">
        <div className="rounded-md border border-border px-4 py-2 text-sm">
          <p className="font-medium">
            {collapsibleMocks.default.shippingTitle}
          </p>
          <p className="text-muted-foreground">
            {collapsibleMocks.default.shippingAddress}
          </p>
        </div>
        <div className="rounded-md border border-border px-4 py-2 text-sm">
          <p className="font-medium">{collapsibleMocks.default.itemsTitle}</p>
          <p className="text-muted-foreground">
            {collapsibleMocks.default.items}
          </p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

function SettingsPanel() {
  return (
    <Card className="mx-auto w-full max-w-xs" size="sm">
      <CardHeader>
        <CardTitle>{collapsibleMocks.settings.title}</CardTitle>
        <CardDescription>
          {collapsibleMocks.settings.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Collapsible className="flex items-start gap-2">
          <div className="grid w-full grid-cols-2 gap-2">
            <div>
              <label className="sr-only" htmlFor="preview-radius-x">
                {collapsibleMocks.settings.radiusX}
              </label>
              <Input defaultValue={0} id="preview-radius-x" placeholder="0" />
            </div>
            <div>
              <label className="sr-only" htmlFor="preview-radius-y">
                {collapsibleMocks.settings.radiusY}
              </label>
              <Input defaultValue={0} id="preview-radius-y" placeholder="0" />
            </div>
            <CollapsibleContent className="col-span-full grid grid-cols-subgrid gap-2">
              <div>
                <label className="sr-only" htmlFor="preview-radius-x-extra">
                  {collapsibleMocks.settings.radiusX}
                </label>
                <Input
                  defaultValue={0}
                  id="preview-radius-x-extra"
                  placeholder="0"
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="preview-radius-y-extra">
                  {collapsibleMocks.settings.radiusY}
                </label>
                <Input
                  defaultValue={0}
                  id="preview-radius-y-extra"
                  placeholder="0"
                />
              </div>
            </CollapsibleContent>
          </div>
          <CollapsibleTrigger
            render={
              <Button className="size-8 p-0" size="sm" variant="secondary">
                <MaximizeIcon />
                <span className="sr-only">
                  {collapsibleMocks.settings.toggleLabel}
                </span>
              </Button>
            }
          />
        </Collapsible>
      </CardContent>
    </Card>
  );
}

export default {
  Default: () => <OrderDetails />,
  Variants: () => (
    <div className="flex w-full max-w-sm flex-col gap-8">
      <Card className="mx-auto w-full max-w-sm">
        <CardContent>
          <Collapsible className="rounded-md data-open:bg-muted">
            <CollapsibleTrigger
              render={
                <Button className="group/button w-full" variant="ghost">
                  {collapsibleMocks.basic.trigger}
                  <ChevronDownIcon className="ml-auto group-data-panel-open/button:rotate-180" />
                </Button>
              }
            />
            <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
              <div>{collapsibleMocks.basic.content}</div>
              <Button size="sm">{collapsibleMocks.basic.action}</Button>
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>
      <SettingsPanel />
    </div>
  ),
};
