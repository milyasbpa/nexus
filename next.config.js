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
  webpack: (config) => {
    config.externals = [...config.externals, { canvas: "canvas" }];  // required to make Konva & react-konva work
    return config;
  },
};

module.exports = nextConfig;
