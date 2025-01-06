import GameFrame from "@/components/game/GameFrame";
import CTA from "@/components/home/CTA";
import FAQ from "@/components/home/FAQ";
import Hero from "@/components/home/Hero";
import Instructions from "@/components/home/Instructions";
import Showcase from "@/components/home/Showcase";
import { ALL_INSTRUCTIONS } from "@/config/instructions";
import { defaultLocale, getDictionary } from "@/lib/i18n";

export default async function HomeIndex({ lang }: { lang: string }) {
  const langName = lang || defaultLocale;
  const dict = await getDictionary(langName);

  return (
    <>
      {/* Hero Section */}
      <Hero locale={dict.Hero} />

      {/* game iframe */}
      <GameFrame src="https://scratch.mit.edu/projects/105500895/embed" />

      {/* Showcase */}
      <Showcase id="Series" locale={dict.Showcase} langName={langName} />

      {/* FAQ (Frequently Asked Questions) */}
      <FAQ id="FAQ" locale={dict.FAQ} langName={langName} />

      {/* Instructions */}
      <Instructions
        id="Instructions"
        locale={dict.Instructions}
        langName={langName}
        allInstructions={ALL_INSTRUCTIONS}
      />

      {/* CTA (Call to Action) */}
      <CTA locale={dict.CTA} CTALocale={dict.CTAButton} />
    </>
  );
}

