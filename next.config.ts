import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'purecatamphetamine.github.io',
        pathname: '/country-flag-icons/**',
      },
    ],
  },
};

export default nextConfig;
