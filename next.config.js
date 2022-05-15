/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: "/campaigns/view/:address",
        destination: "/campaigns/view",
        locale: false,
      },
      {
        source: "/campaigns/view/transferRequests/:address",
        destination: "/campaigns/view/transferRequest",
        locale: false,
      },
    ];
  },
};

module.exports = nextConfig;
