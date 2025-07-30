import CompactGameCard from "@/components/CompactGameCard";
import GameFrame from "@/components/game/GameFrame";
import { showcases } from "@/config/showcases";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface GameSectionProps {
  mainGameSrc: string;
  langName: string;
}

const GameSection: React.FC<GameSectionProps> = ({ mainGameSrc, langName }) => {
  // Filter out the main game and get other games for sidebar
  const otherGames = showcases
    .filter((game) => !mainGameSrc.includes(game.url.split("/").pop() || ""))
    .filter((game) => game.og) // Only show games with images
    .slice(0, 6); // Show 8 games in sidebar

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-0">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Main Game Area */}
        <div className="flex-1">
          <GameFrame src={mainGameSrc} />
        </div>

        {/* Game Sidebar */}
        <div className="lg:flex-[1] lg:max-w-[320px] xl:max-w-[350px]">
          <div className="lg:sticky lg:top-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                More Games
              </h2>
              <Link
                href={`/${langName === "en" ? "" : langName}#Series`}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium flex items-center gap-1 transition-colors"
              >
                View All <ExternalLink className="w-3 h-3" />
              </Link>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-2 gap-3">
              {otherGames.map((game) => (
                <CompactGameCard
                  key={game.url}
                  langName={langName}
                  title={game.title}
                  og={game.og}
                  url={game.url}
                />
              ))}
            </div>

            {/* Additional Info */}
            {/* <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                🎮 Game Tips
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Use spacebar or click to jump. Practice makes perfect in
                Geometry Dash!
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameSection;

