"use client";

import { Button } from "@/atoms/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/atoms/dialog";
import { Input } from "@/atoms/input";
import { Label } from "@/atoms/label";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/atoms/navigation-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/atoms/tooltip";

export function ScopeControlSet({
  pressClassName,
}: {
  pressClassName?: string;
}) {
  return (
    <TooltipProvider>
      <div className="flex flex-col gap-[var(--jk-space-lg)]">
        <div className="flex flex-wrap items-end gap-[var(--jk-space-md)]">
          <Button className={pressClassName}>Primary action</Button>
          <Button className={pressClassName} variant="secondary">
            Secondary
          </Button>
          <div className="grid min-w-56 flex-1 gap-2">
            <Label htmlFor="scope-studio">Studio name</Label>
            <Input defaultValue="West Room" id="scope-studio" name="studio" />
          </div>
        </div>

        <NavigationMenu delay={0}>
          <NavigationMenuList>
            <NavigationMenuItem value="work">
              <NavigationMenuTrigger>Work</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[min(20rem,calc(100vw-3rem))] gap-1 p-3">
                  <li>
                    <NavigationMenuLink className="px-3 py-2" href="#interiors">
                      Interiors
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink className="px-3 py-2" href="#housing">
                      Housing
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex flex-wrap items-center gap-[var(--jk-space-md)]">
          <Dialog>
            <DialogTrigger
              render={<Button variant="secondary">Open dialog</Button>}
            />
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Inquiry preview</DialogTitle>
                <DialogDescription>
                  Overlay surfaces inherit this sample scope, including radius
                  and fonts.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose
                  render={<Button variant="secondary">Close</Button>}
                />
                <Button className={pressClassName}>Continue</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Tooltip>
            <TooltipTrigger render={<Button variant="ghost">Tooltip</Button>} />
            <TooltipContent>Scoped help text</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  );
}
