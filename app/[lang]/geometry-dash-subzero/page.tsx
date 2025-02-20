import GameDetail from "@/components/game/GameDetail";
import { ALL_INSTRUCTIONS } from "@/config/game-details/geometry-dash-subzero";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

// 定义 generateMetadata 函数
export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const { lang } = params;
  return {
    title: siteConfig.name + " | Geometry Dash Subzero",
    description:
      "Play Geometry Dash SubZero unblocked - 3 unique ice-themed levels with new challenges! Free browser version with practice mode, secret coins, and mobile support.",
    alternates: {
      canonical: `${siteConfig.url}${lang}/geometry-dash-subzero/`,
    },
  };
}

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const titleObj = {
    title1: "Geometry Dash",
    title2: "Subzero",
    title3: "",
  };
  return (
    <GameDetail
      lang={lang}
      title={titleObj}
      allInstructions={ALL_INSTRUCTIONS}
      src="https://scratch.mit.edu/projects/216343253/embed"
    />
  );
}

