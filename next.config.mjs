/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
   output: "export", // 👈 replaces next export
  images: {
    unoptimized: true, // needed for static hosting like Hostinger
  },
}

export default nextConfig
