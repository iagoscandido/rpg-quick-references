import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    ppr: "incremental",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "5e.tools",
        port: "",
        pathname: "/img/covers/",
      },
    ],
  },
};

export default nextConfig;
