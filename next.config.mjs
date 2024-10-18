/** @type {import('next').NextConfig} */
const nextConfig = {
  // 添加这个来处理站点地图
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'game.geometry-dash-unblocked.com',
        port: '',
        pathname: '/*.png',
      },
    ],
  },
};

export default nextConfig;
