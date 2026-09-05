// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Avatar, AvatarFallback, AvatarGroup } from "./Avatar";

export default {
  Default: () => (
    <AvatarGroup>
      <Avatar size="lg">
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback>MK</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback>AL</AvatarFallback>
      </Avatar>
    </AvatarGroup>
  ),
  Variants: () => (
    <AvatarGroup>
      <Avatar size="lg">
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback>MK</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback>AL</AvatarFallback>
      </Avatar>
    </AvatarGroup>
  ),
};
