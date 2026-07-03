/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Allow next/image to load the live screenshot thumbnails.
    remotePatterns: [
      { protocol: "https", hostname: "image.thum.io" },
      { protocol: "https", hostname: "s.wordpress.com" },
    ],
  },
};

export default nextConfig;
