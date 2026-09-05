import type {
  EcommerceNavbar2Link,
  EcommerceNavbar2NavItem,
  EcommerceNavbar2Props,
} from "./EcommerceNavbar2.types";

const defaultNav: EcommerceNavbar2NavItem[] = [
  {
    kind: "mega",
    label: "Shop",
    href: "#shop",
    columns: [
      {
        title: "Apparel",
        links: [
          { label: "Outerwear", href: "#outerwear" },
          { label: "Knitwear", href: "#knitwear" },
          { label: "Denim", href: "#denim" },
          { label: "Footwear", href: "#footwear" },
        ],
      },
      {
        title: "Home",
        links: [
          { label: "Bedding", href: "#bedding" },
          { label: "Table", href: "#table" },
          { label: "Lighting", href: "#lighting" },
          { label: "Storage", href: "#storage" },
        ],
      },
      {
        title: "Outdoor",
        links: [
          { label: "Trail kits", href: "#trail" },
          { label: "Camp kitchen", href: "#camp-kitchen" },
          { label: "Rain gear", href: "#rain" },
          { label: "Packs", href: "#packs" },
        ],
      },
    ],
    featured: {
      href: "#spring-drop",
      imageSrc: "/assets/e5ee9abd8e719085.webp",
      imageAlt: "Model walking in a wool coat with a leather tote",
      title: "Spring drop",
      description: "Wool coats and field bags, in store this week.",
    },
  },
  {
    kind: "menu",
    label: "Collections",
    href: "#collections",
    items: [
      {
        label: "House lines",
        href: "#house",
        children: [
          { label: "Marlow Core", href: "#marlow-core" },
          { label: "Atelier", href: "#atelier" },
          { label: "Workwear", href: "#workwear" },
        ],
      },
      { label: "Collaborations", href: "#collabs" },
      { label: "Archive sale", href: "#archive" },
      {
        label: "By season",
        href: "#season",
        children: [
          { label: "Spring", href: "#spring" },
          { label: "Fall", href: "#fall" },
        ],
      },
    ],
  },
  { kind: "link", label: "New", href: "#new" },
  { kind: "link", label: "Sale", href: "#sale", badge: "24" },
  { kind: "link", label: "Stories", href: "#stories" },
];

const defaultAccount: EcommerceNavbar2Link[] = [
  { label: "Sign in", href: "#sign-in" },
  { label: "Orders", href: "#orders" },
  { label: "Addresses", href: "#addresses" },
  { label: "Rewards", href: "#rewards" },
];

const defaultHelp: EcommerceNavbar2Link[] = [
  { label: "Shipping", href: "#shipping" },
  { label: "Returns", href: "#returns" },
  { label: "Size guide", href: "#size-guide" },
  { label: "Contact", href: "#contact" },
];

export const ecommerceNavbar2Mocks = {
  default: {
    brand: { name: "Marlow", href: "#home" },
    navItems: defaultNav,
    searchPlaceholder: "Search the shop",
    wishlistHref: "#wishlist",
    wishlistLabel: "Wishlist",
    wishlistCount: 2,
    cartHref: "#cart",
    cartLabel: "Cart",
    cartCount: 3,
    accountLabel: "Account",
    accountLinks: defaultAccount,
    helpTitle: "Help",
    helpLinks: defaultHelp,
  },
  alternate: {
    brand: { name: "Northline", href: "#home" },
    navItems: [
      {
        kind: "mega",
        label: "Gear",
        columns: [
          {
            title: "Climb",
            links: [
              { label: "Harnesses", href: "#harnesses" },
              { label: "Rope", href: "#rope" },
              { label: "Helmets", href: "#helmets" },
            ],
          },
          {
            title: "Camp",
            links: [
              { label: "Tents", href: "#tents" },
              { label: "Sleep systems", href: "#sleep" },
              { label: "Stoves", href: "#stoves" },
            ],
          },
        ],
        featured: {
          href: "#ridge-series",
          imageSrc: "/assets/6b8c835b77cf6ca8.webp",
          imageAlt: "Hiker on a ridgeline with a loaded pack",
          title: "Ridge series",
          description: "Packs built for long approaches.",
        },
      },
      {
        kind: "menu",
        label: "Brands",
        items: [
          {
            label: "Northline",
            href: "#northline",
            children: [
              { label: "Trail", href: "#northline-trail" },
              { label: "Alpine", href: "#northline-alpine" },
            ],
          },
          { label: "Guest makers", href: "#guests" },
        ],
      },
      { kind: "link", label: "Guides", href: "#guides" },
      { kind: "link", label: "Outlet", href: "#outlet", badge: "New" },
    ],
    searchPlaceholder: "Find gear",
    wishlistHref: "#saved",
    wishlistLabel: "Saved",
    wishlistCount: 0,
    cartHref: "#bag",
    cartLabel: "Bag",
    cartCount: 1,
    accountLabel: "Profile",
    accountLinks: [
      { label: "Log in", href: "#login" },
      { label: "Trip lists", href: "#trips" },
      { label: "Garage", href: "#garage" },
    ],
    helpTitle: "Support",
    helpLinks: [
      { label: "Repairs", href: "#repairs" },
      { label: "Warranty", href: "#warranty" },
      { label: "Stores", href: "#stores" },
    ],
  },
} satisfies Record<"default" | "alternate", EcommerceNavbar2Props>;
