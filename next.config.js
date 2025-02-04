/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'purecatamphetamine.github.io',
        pathname: '/country-flag-icons/**',
      },
    ],
  },
}

module.exports = nextConfig 