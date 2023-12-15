/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "muffatosupermercados.vteximg.com.br",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;
