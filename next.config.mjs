/** @type {import('next').NextConfig} */
const nextConfig = {
  // 添加这个来处理站点地图
  trailingSlash: true, // 添加这个配置
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["uploads.scratch.mit.edu", "cdn2.scratch.mit.edu"],
  },
};

export default nextConfig;

