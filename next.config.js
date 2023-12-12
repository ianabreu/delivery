/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "uploads.metropoles.com",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;
