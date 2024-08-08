/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imgur.com",
        pathname: "/a/XU4w76x",
      },
    ],
  },
};

module.exports = nextConfig;
