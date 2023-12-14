/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "uploads.metropoles.com",
        protocol: "https",
      },
      {
        hostname: "blog.biglar.com.br",
        protocol: "https",
      },
      {
        hostname: "images.tcdn.com.br",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;
