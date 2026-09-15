"use client";
import { motion, useScroll } from "motion/react";
import { NavbarWithAnimatedMegaDropdown } from "@/marketing/navbar-with-animated-mega-dropdown";
import n from "../navigation.module.css";
export function SiteHeader() {
  const { scrollYProgress } = useScroll();
  return (
    <div className={n.shell}>
      <NavbarWithAnimatedMegaDropdown
        className={n.mega}
        defaultValue={null}
        brand={{ name: "Common Hours", href: "/" }}
        navItems={[
          {
            kind: "mega",
            label: "Stories",
            value: "stories",
            columns: [
              {
                title: "Explore by subject",
                links: [
                  {
                    title: "Places",
                    href: "/stories?filter=places",
                    description: "Rooms, streets, and places to linger.",
                  },
                  {
                    title: "People",
                    href: "/stories?filter=people",
                    description: "Meet the people who make a neighborhood.",
                  },
                  {
                    title: "Rituals",
                    href: "/stories?filter=rituals",
                    description: "The everyday things worth keeping.",
                  },
                ],
              },
              {
                title: "From the journal",
                links: [
                  { title: "All stories", href: "/stories" },
                  { title: "About Common Hours", href: "/about" },
                ],
              },
            ],
            featured: {
              title: "Late Light",
              description:
                "Nine stories. One neighborhood. Open the current issue.",
              href: "/stories",
            },
          },
          { kind: "link", label: "About", href: "/about" },
        ]}
        secondaryCta={{ label: "The archive", href: "/stories" }}
        cta={{ label: "Membership", href: "/membership" }}
      />
      <motion.div
        className={n.progress}
        style={{ scaleX: scrollYProgress }}
        aria-hidden="true"
      />
    </div>
  );
}
