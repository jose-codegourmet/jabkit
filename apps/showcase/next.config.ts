import type { NextConfig } from "next";

// Redeploy trigger so Production picks up TubelightNavbar registry.
const nextConfig: NextConfig = {
  typedRoutes: true,
  outputFileTracingIncludes: {
    "/**": ["./public/r/**", "./public/previews/**"],
  },
  async redirects() {
    return [
      {
        source: "/samples/conventions",
        destination: "/samples",
        permanent: true,
      },
      {
        source: "/samples/conventions/:path*",
        destination: "/samples",
        permanent: true,
      },
      {
        source: "/samples/minimal",
        destination: "/design-systems/minimal",
        permanent: true,
      },
      {
        source: "/samples/minimal/:path*",
        destination: "/design-systems/minimal/:path*",
        permanent: true,
      },
      {
        source: "/samples/neo-brutalism",
        destination: "/design-systems/neo-brutalism",
        permanent: true,
      },
      {
        source: "/samples/neo-brutalism/:path*",
        destination: "/design-systems/neo-brutalism/:path*",
        permanent: true,
      },
      {
        source: "/samples/editorial",
        destination: "/design-systems/editorial",
        permanent: true,
      },
      {
        source: "/samples/editorial/:path*",
        destination: "/design-systems/editorial/:path*",
        permanent: true,
      },
      {
        source: "/samples/luxury",
        destination: "/design-systems/luxury",
        permanent: true,
      },
      {
        source: "/samples/luxury/:path*",
        destination: "/design-systems/luxury/:path*",
        permanent: true,
      },
      {
        source: "/samples/retro",
        destination: "/design-systems/retro",
        permanent: true,
      },
      {
        source: "/samples/retro/:path*",
        destination: "/design-systems/retro/:path*",
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
