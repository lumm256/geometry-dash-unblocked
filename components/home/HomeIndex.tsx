import GameFrame from "@/components/GameFrame";
import CTA from "@/components/home/CTA";
import FAQ from "@/components/home/FAQ";
import Hero from "@/components/home/Hero";
import Instructions from "@/components/home/Instructions";
import { defaultLocale, getDictionary } from "@/lib/i18n";

export default async function HomeIndex({ lang }: { lang: string }) {
  const langName = lang || defaultLocale;
  const dict = await getDictionary(langName);

  return (
    <>
      {/* Hero Section */}
      <Hero locale={dict.Hero} CTALocale={dict.CTAButton} />
      {/* game iframe */}
      <GameFrame
        src="https://game.geometry-dash-unblocked.com/Geometry-Dash-Unblocked.html"
        width={"600"}
        height={"450"}
      />

      {/* Instructions */}
      <Instructions
        id="Instructions"
        locale={dict.Instructions}
        langName={langName}
      />

      {/* FAQ (Frequently Asked Questions) */}
      <FAQ id="FAQ" locale={dict.FAQ} langName={langName} />

      {/* CTA (Call to Action) */}
      <CTA locale={dict.CTA} CTALocale={dict.CTAButton} />
    </>
  );
}

