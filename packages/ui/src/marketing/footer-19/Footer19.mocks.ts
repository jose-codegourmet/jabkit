import type {
  Footer19LinkColumn,
  Footer19NavLink,
  Footer19Props,
} from "./Footer19.types";

export const footer19NavColumns: Footer19LinkColumn[] = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Guides", href: "#guides" },
      { label: "Careers", href: "#careers" },
      { label: "Blog", href: "#blog" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Software", href: "#software" },
      { label: "Hardware", href: "#hardware" },
      { label: "Accessories", href: "#accessories" },
      { label: "Licensing", href: "#licensing" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Email", href: "#email" },
      { label: "Phone", href: "#phone" },
      { label: "Locations", href: "#locations" },
      { label: "FAQ", href: "#faq" },
    ],
  },
];

export const footer19SocialLinks: Footer19NavLink[] = [
  { label: "Instagram", href: "#instagram" },
  { label: "Linkedin", href: "#linkedin" },
];

export const footer19Mocks = {
  default: {
    badgeText: "Trusted by Thousands",
    newsletterHeading:
      "The latest news,\narticles, and resources,\nin your inbox weekly.",
    newsletterPlaceholder: "Enter your email",
    newsletterButtonText: "Stay Updated",
    brandName: "Northline",
    navColumns: footer19NavColumns,
    copyright: "Copyright© Northline Studio",
    location: "Brooklyn, NY",
    time: "07:23:14 AM",
    socialLinks: footer19SocialLinks,
  },
  alternate: {
    badgeText: "Weekly studio notes",
    newsletterHeading:
      "Briefings, field notes,\nand product drops,\nonce a week.",
    newsletterPlaceholder: "Work email",
    newsletterButtonText: "Join the list",
    brandName: "Halden",
    navColumns: [
      {
        title: "Studio",
        links: [
          { label: "Practice", href: "#practice" },
          { label: "Journal", href: "#journal" },
          { label: "People", href: "#people" },
          { label: "Visit", href: "#visit" },
        ],
      },
      {
        title: "Platform",
        links: [
          { label: "Ledgers", href: "#ledgers" },
          { label: "Payouts", href: "#payouts" },
          { label: "Controls", href: "#controls" },
          { label: "Licensing", href: "#licensing" },
        ],
      },
      {
        title: "Support",
        links: [
          { label: "Help", href: "#help" },
          { label: "Status", href: "#status" },
          { label: "Offices", href: "#offices" },
          { label: "FAQ", href: "#faq" },
        ],
      },
    ],
    copyright: "Copyright© Halden Studio",
    location: "Portland, OR",
    time: "04:11:38 PM",
    socialLinks: [
      { label: "Instagram", href: "#instagram" },
      { label: "Behance", href: "#behance" },
    ],
  },
} satisfies Record<string, Footer19Props>;
