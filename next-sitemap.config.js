/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://geometry-dash-unblocked.com",
  sitemapSize: 7000,
  trailingSlash: true,
  outDir: "./out",
  generateIndexSitemap: true,
  alternateRefs: [
    { href: "https://geometry-dash-unblocked.com/en/", hreflang: "en" },
    { href: "https://geometry-dash-unblocked.com/zh/", hreflang: "zh" },
    { href: "https://geometry-dash-unblocked.com/ja/", hreflang: "ja" },
    { href: "https://geometry-dash-unblocked.com/es/", hreflang: "es" },
    { href: "https://geometry-dash-unblocked.com/ru/", hreflang: "ru" },
  ],
};
