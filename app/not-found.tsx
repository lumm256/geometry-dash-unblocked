import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="text-center max-w-lg mx-auto px-4">
        <div className="text-8xl mb-6">🎮</div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          404
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Oops! This page doesn&apos;t exist. Maybe it jumped over a spike?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            🏠 Back to Home
          </Link>
          <Link
            href="/en/#Series"
            className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            🎮 Browse Games
          </Link>
        </div>
      </div>
    </div>
  );
}
