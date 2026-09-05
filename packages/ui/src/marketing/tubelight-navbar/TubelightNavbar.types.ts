import type { LucideIcon } from "lucide-react";
import type { HTMLAttributes } from "react";

export interface TubelightNavbarItem {
  name: string;
  href: string;
  icon: LucideIcon;
}

export interface TubelightNavbarProps
  extends Omit<HTMLAttributes<HTMLElement>, "onChange"> {
  items?: TubelightNavbarItem[];
  activeName?: string;
  defaultActiveName?: string;
  onActiveChange?: (name: string) => void;
}
