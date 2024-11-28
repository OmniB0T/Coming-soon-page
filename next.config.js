/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: ["cdn.builder.io", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;