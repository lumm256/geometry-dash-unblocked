import GameSection from "@/components/game/GameSection";
import Hero from "@/components/home/Hero";
import Instructions from "@/components/home/Instructions";
import { defaultLocale, getDictionary } from "@/lib/i18n";
import { INSTRUCTIONSCollection } from "@/types/siteConfig";

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

