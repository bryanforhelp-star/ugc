import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/link", destination: "/links", permanent: true },
      {
        source: "/guides/fake-matcha",
        destination: "/guides/arcads",
        permanent: true,
      },
      {
        source: "/kits/editing-mini-course",
        destination: "/kits/editing-mini-guide",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
