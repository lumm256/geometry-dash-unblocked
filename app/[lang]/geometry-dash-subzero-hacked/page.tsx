import GameDetail from "@/components/game/GameDetail";
import { ALL_INSTRUCTIONS } from "@/config/game-details/geometry-dash-subzero-hacked";
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
    title: siteConfig.name + " | Geometry Dash Subzero HACKED",
    alternates: {
      canonical: `${siteConfig.url}${lang}/geometry-dash-subzero-hacked/`,
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
    title2: "Subzero Hacked",
    title3: "",
  };
  return (
    <GameDetail
      lang={lang}
      title={titleObj}
      allInstructions={ALL_INSTRUCTIONS}
      src="https://scratch.mit.edu/projects/301411780/embed"
    />
  );
}

