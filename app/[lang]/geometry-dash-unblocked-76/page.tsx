import GameDetail from "@/components/game/GameDetail";
import { ALL_INSTRUCTIONS } from "@/config/game-details/geometry-dash-unblocked-76";
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
    title: siteConfig.name + " | Geometry Dash Unblocked 76",
    alternates: {
      canonical: `${siteConfig.url}${lang}/geometry-dash-unblocked-76/`,
    },
  };
}

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const titleObj = {
    title1: "Geometry Dash Unblocked",
    title2: "76",
    title3: "",
  };
  return (
    <GameDetail
      lang={lang}
      title={titleObj}
      allInstructions={ALL_INSTRUCTIONS}
      src="https://scratch.mit.edu/projects/915587918/embed"
    />
  );
}

