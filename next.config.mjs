/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: 'export',  // Correct way to configure static export in newer versions
  experimental: {
    // Ensure all keys here are supported by Next.js
  }
};

export default nextConfig;
