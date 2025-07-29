/** @type {import('next').NextConfig} */
const nextConfig = {
  // 添加这个来处理站点地图
  trailingSlash: true, // 添加这个配置
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.geometry-dash-lite.org",
      },
    ],
  },
};

export default nextConfig;

