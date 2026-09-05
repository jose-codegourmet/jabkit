import type { TubelightNavbarProps } from "./TubelightNavbar.types";

export const tubelightNavbarMocks = {
  default: {
    items: [
      { name: "Home", href: "#home", icon: "home" },
      { name: "About", href: "#about", icon: "user" },
      { name: "Projects", href: "#projects", icon: "briefcase" },
      { name: "Notes", href: "#notes", icon: "file-text" },
    ],
    defaultActiveName: "Home",
  },
  alternate: {
    items: [
      { name: "Studio", href: "#studio", icon: "sparkles" },
      { name: "Work", href: "#work", icon: "camera" },
      { name: "Journal", href: "#journal", icon: "book-open" },
      { name: "Contact", href: "#contact", icon: "mail" },
    ],
    defaultActiveName: "Work",
  },
} satisfies Record<"default" | "alternate", TubelightNavbarProps>;
