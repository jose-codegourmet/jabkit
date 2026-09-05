import {
  BookOpenIcon,
  BriefcaseIcon,
  CameraIcon,
  FileTextIcon,
  HomeIcon,
  MailIcon,
  SparklesIcon,
  UserIcon,
} from "lucide-react";
import type { TubelightNavbarProps } from "./TubelightNavbar.types";

export const tubelightNavbarMocks = {
  default: {
    items: [
      { name: "Home", href: "#home", icon: HomeIcon },
      { name: "About", href: "#about", icon: UserIcon },
      { name: "Projects", href: "#projects", icon: BriefcaseIcon },
      { name: "Notes", href: "#notes", icon: FileTextIcon },
    ],
    defaultActiveName: "Home",
  },
  alternate: {
    items: [
      { name: "Studio", href: "#studio", icon: SparklesIcon },
      { name: "Work", href: "#work", icon: CameraIcon },
      { name: "Journal", href: "#journal", icon: BookOpenIcon },
      { name: "Contact", href: "#contact", icon: MailIcon },
    ],
    defaultActiveName: "Work",
  },
} satisfies Record<"default" | "alternate", TubelightNavbarProps>;
