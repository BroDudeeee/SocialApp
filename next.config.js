/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "cdn4.vectorstock.com",
      "images.pexels.com",
      "cdn-icons-png.flaticon.com",
      "lh3.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
