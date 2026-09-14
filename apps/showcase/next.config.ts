import type { NextConfig } from "next";
import {
  designSystemSiteUrl,
  designSystemSlugs,
} from "./common/design-system-sites";

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
      ...designSystemSlugs.flatMap((slug) => {
        const origin = designSystemSiteUrl(slug);
        const routes = ["samples", "design-systems"].flatMap((prefix) => [
          {
            source: `/${prefix}/${slug}`,
            destination: origin || "/design-systems",
            permanent: false,
          },
          {
            source: `/${prefix}/${slug}/:path*`,
            destination: origin ? `${origin}/:path*` : "/design-systems",
            permanent: false,
          },
        ]);
        return origin
          ? [
              ...routes,
              {
                source: `/assets/design-systems/${slug}/:path*`,
                destination: `${origin}/assets/design-systems/${slug}/:path*`,
                permanent: false,
              },
            ]
          : routes;
      }),
    ];
  },
};
export default nextConfig;
