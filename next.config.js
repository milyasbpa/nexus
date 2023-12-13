/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: `/nexus/:path*`,
        destination: `${process.env.NEXT_PUBLIC_NEXUS_SERVICE_URL}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
