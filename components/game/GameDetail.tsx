import GameSection from "@/components/game/GameSection";
import Hero from "@/components/home/Hero";
import Instructions from "@/components/home/Instructions";
import { defaultLocale, getDictionary } from "@/lib/i18n";
import { INSTRUCTIONSCollection } from "@/types/siteConfig";
import { Home } from "lucide-react";
import Link from "next/link";

async function GameDetail({
  lang,
  src,
  title,
  allInstructions,
}: {
  lang: string;
  src: string;
  title: any;
  allInstructions: INSTRUCTIONSCollection;
}) {
  const langName = lang || defaultLocale;
  const dict = await getDictionary(langName);
  return (
    <>
      {/* Hero Section */}
      <Hero locale={title} />

      {/* game iframe */}
      {/* <GameFrame src={src} /> */}

      <div className="w-full max-w-7xl mx-auto px-4 py-0">
        <Link
          href="/"
          aria-label="geometry dash unblocked"
          title="geometry dash unblocked"
          className="flex items-center gap-1 pb-2"
        >
          <Home className="w-4 h-4" /> Home
        </Link>
      </div>

      {/* Game Section with sidebar */}
      <GameSection mainGameSrc={src} langName={langName} />

      {/* Instructions */}
      <Instructions
        id="Instructions"
        locale={dict.Instructions}
        langName={langName}
        allInstructions={allInstructions}
      />
    </>
  );
}

export default GameDetail;

