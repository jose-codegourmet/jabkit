import type {
  Footer18LinkColumn,
  Footer18NavLink,
  Footer18Props,
} from "./Footer18.types";

export const footer18FeatureColumn: Footer18LinkColumn = {
  title: "Features",
  links: [
    { label: "Accounts payable", href: "#payable" },
    { label: "Approval workflows", href: "#approvals" },
    { label: "Bulk payments", href: "#bulk" },
    { label: "Global receivables", href: "#receivables" },
    { label: "Currency conversions", href: "#currency" },
    { label: "Corporate cards", href: "#cards" },
    { label: "Integrations", href: "#integrations" },
  ],
};

export const footer18ReciteColumn: Footer18LinkColumn = {
  title: "Recites",
  links: [
    { label: "Journal", href: "#journal" },
    { label: "Masterclass", href: "#masterclass" },
    { label: "Tools", href: "#tools" },
    { label: "Changelog", href: "#changelog" },
  ],
};

export const footer18PricingColumn: Footer18LinkColumn = {
  title: "Pricing",
  links: [{ label: "Security", href: "#security" }],
};

export const footer18BottomNav: Footer18NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "Studio", href: "#studio" },
  { label: "Services", href: "#services" },
  { label: "Partnerships", href: "#partnerships" },
  { label: "Monopage", href: "#monopage" },
  { label: "Contact", href: "#contact" },
];

export const footer18SocialLinks: Footer18NavLink[] = [
  { label: "Instagram", href: "#instagram" },
  { label: "Facebook", href: "#facebook" },
  { label: "Twitter", href: "#twitter" },
  { label: "Behance", href: "#behance" },
];

export const footer18Mocks = {
  default: {
    newsletterHeading: "Subscribe to our\nnewsletter",
    newsletterPlaceholder: "Email address",
    brandName: "Kestrel",
    featureColumn: footer18FeatureColumn,
    reciteColumn: footer18ReciteColumn,
    pricingColumn: footer18PricingColumn,
    exploreText: "Explore",
    exploreHref: "#explore",
    trialText: "Start free trial",
    trialHref: "#trial",
    address:
      "18 Harbor Lane, Suite 400\n\nPortland, Oregon\n97204, United States",
    bottomNav: footer18BottomNav,
    socialLinks: footer18SocialLinks,
  },
  alternate: {
    newsletterHeading: "Notes from the\nledger floor",
    newsletterPlaceholder: "Work email",
    brandName: "Halden",
    featureColumn: {
      title: "Platform",
      links: [
        { label: "Ledgers", href: "#ledgers" },
        { label: "Payouts", href: "#payouts" },
        { label: "Controls", href: "#controls" },
        { label: "Audit trails", href: "#audit" },
      ],
    },
    reciteColumn: {
      title: "Studio",
      links: [
        { label: "Briefings", href: "#briefings" },
        { label: "Guides", href: "#guides" },
        { label: "Library", href: "#library" },
      ],
    },
    pricingColumn: {
      title: "Plans",
      links: [
        { label: "Teams", href: "#teams" },
        { label: "Enterprise", href: "#enterprise" },
      ],
    },
    exploreText: "Explore Halden",
    exploreHref: "#explore",
    trialText: "Book a walkthrough",
    trialHref: "#walkthrough",
    address:
      "220 Canal Street, Floor 6\n\nBrooklyn, New York\n11201, United States",
    bottomNav: [
      { label: "Index", href: "#index" },
      { label: "Practice", href: "#practice" },
      { label: "Visit", href: "#visit" },
    ],
    socialLinks: [
      { label: "Instagram", href: "#instagram" },
      { label: "LinkedIn", href: "#linkedin" },
    ],
  },
} satisfies Record<string, Footer18Props>;
