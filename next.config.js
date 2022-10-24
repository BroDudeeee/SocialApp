/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "wildfiresocial.com",
      "upload.wikimedia.org",
      "images.pexels.com",
      "fakestoreapi.com",
    ],
  },
};

module.exports = nextConfig;
