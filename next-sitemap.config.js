/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  alternateRefs: [
    {
      href: 'https://geometry-dash-unblocked.com/ar',
      hreflang: 'ar',
    },
    {
      href: 'https://geometry-dash-unblocked.com/es',
      hreflang: 'es',
    },
    {
      href: 'https://geometry-dash-unblocked.com/ja',
      hreflang: 'ja',
    },
    {
      href: 'https://geometry-dash-unblocked.com/ru',
      hreflang: 'ru',
    },
    {
      href: 'https://geometry-dash-unblocked.com/zh',
      hreflang: 'zh',
    }
  ],
};
