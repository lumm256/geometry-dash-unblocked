import GameDetail from "@/components/game/GameDetail";
import { ALL_INSTRUCTIONS } from "@/config/game-details/geometry-dash-2.2-unblocked";
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
    title: siteConfig.name + " | Geometry Dash 2.2 Unblocked",
    alternates: {
      canonical: `${siteConfig.url}${lang}/geometry-dash-2.2-unblocked/`,
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
    title2: "2.2",
    title3: "Unblocked",
  };
  return (
    <GameDetail
      lang={lang}
      title={titleObj}
      allInstructions={ALL_INSTRUCTIONS}
      src="https://scratch.mit.edu/projects/245970184/embed"
    />
  );
}

