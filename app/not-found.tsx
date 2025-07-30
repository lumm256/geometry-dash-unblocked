import CompactGameCard from "@/components/CompactGameCard";
import FollowButton from "@/components/FollowButton";
import { showcases } from "@/config/showcases";
import { siteConfig } from "@/config/site";
import { defaultLocale, getDictionary } from "@/lib/i18n";
import { Home, MessageCircle, Search } from "lucide-react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

export default async function NotFound() {
  // Get language from URL path
  const headersList = headers();
  const pathname = headersList.get("x-pathname") || "/";
  const langMatch = pathname.match(/^\/([a-z]{2})(\/|$)/);
  const currentLang = langMatch ? langMatch[1] : defaultLocale;

  // Get dictionary for current language
  const dict = await getDictionary(currentLang);
  const notFoundDict = dict.NotFound;

  // Get popular games (first 6)
  const popularGames = showcases
    .filter((game) => game.og) // Only games with images
    .slice(0, 6);

  // Quick links based on site config
  const langPrefix = currentLang === defaultLocale ? "/en" : `/${currentLang}`;
  const quickLinks = [
    { name: "Blog", href: `${langPrefix}/blog` },
    { name: "About", href: `${langPrefix}/about` },
    { name: "Privacy Policy", href: `${langPrefix}/privacy-policy` },
    { name: "Terms of Service", href: `${langPrefix}/terms-of-service` },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="relative inline-block mb-6">
            <Image
              src="/404.webp"
              alt="404"
              width={200}
              height={200}
              className="mx-auto opacity-80"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            {notFoundDict.title}
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            {notFoundDict.subtitle}
          </p>

          <p className="text-gray-500 dark:text-gray-400 mb-8">
            {notFoundDict.description}
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <Home className="w-5 h-5" />
              {notFoundDict.backHome}
            </Link>

            <Link
              href={`/#Series`}
              className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <Search className="w-5 h-5" />
              {notFoundDict.searchSuggestion}
            </Link>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Popular Games Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              🎮 {notFoundDict.popularGames}
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {popularGames.map((game) => (
                <CompactGameCard
                  key={game.url}
                  langName={currentLang}
                  title={game.title}
                  og={game.og}
                  url={game.url}
                />
              ))}
            </div>

            <div className="mt-6 text-center">
              <Link
                href={`/#Series`}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
              >
                View All Games →
              </Link>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              🔗 {notFoundDict.quickLinks}
            </h2>

            <div className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* SEO Keywords */}
            <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                {notFoundDict.searchSuggestion}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {notFoundDict.gameKeywords}
              </p>
            </div>

            {/* Report Issue */}
            <div className="mt-6 text-center">
              <Link
                href={siteConfig.authors[0].twitter || "#"}
                className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                {notFoundDict.reportIssue}
              </Link>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {siteConfig.authors[0].twitter && (
              <FollowButton
                name="Twitter/X"
                href={siteConfig.authors[0].twitter}
              />
            )}
            {siteConfig.openSourceURL && (
              <FollowButton name="Github" href={siteConfig.openSourceURL} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

