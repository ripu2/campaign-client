/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/campaigns/view/:address",
        destination: "/campaigns/view",
        locale: false,
      },
    ];
  },
};

module.exports = nextConfig;
