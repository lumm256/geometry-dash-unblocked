import GameDetail from "@/components/game/GameDetail";
import { ALL_INSTRUCTIONS } from "@/config/game-details/geometry-dash";
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
    title: siteConfig.name + " | Geometry-Dash",
    alternates: {
      canonical: `${siteConfig.url}${lang}/geometry-dash/`,
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
    title2: "",
    title3: "",
  };
  return (
    <>
      <GameDetail
        lang={lang}
        title={titleObj}
        allInstructions={ALL_INSTRUCTIONS}
        src="https://game.geometry-dash-unblocked.com/Geometry-Dash.html"
      />
    </>
  );
}

