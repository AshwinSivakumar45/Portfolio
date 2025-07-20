/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Customize webpack config if necessary
    return config;
  },

  images: {
    domains: ["cdn.sanity.io"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: true, // Add this for cPanel compatibility
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/",
      },
    ],
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
