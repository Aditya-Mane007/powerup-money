/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "powerup.onerooftechnologiesllp.com"
      }
    ],
  },
  async redirects() {
    return [
      {
        source: "/blog/:slug",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
