// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
    ],
    unoptimized: true, // Disable optimization for remote images
  },
};

module.exports = nextConfig; // Use module.exports instead of export default
