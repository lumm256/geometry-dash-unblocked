import GameDetail from "@/components/game/GameDetail";
import { ALL_INSTRUCTIONS } from "@/config/game-details/geometry-dash-meltdown";
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
    title: siteConfig.name + " | Geometry Dash Meltdown",
    alternates: {
      canonical: `${siteConfig.url}${lang}/geometry-dash-meltdown/`,
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
    title2: "Meltdown",
    title3: "",
  };
  return (
    <GameDetail
      lang={lang}
      title={titleObj}
      allInstructions={ALL_INSTRUCTIONS}
      src="https://scratch.mit.edu/projects/319667603/embed"
    />
  );
}

