/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  basePath: '', // Required if hosting at username.github.io/repo-name
  images: {
    unoptimized: true, // Static export doesn't support Next.js Image Optimization
  },
};

module.exports = nextConfig;