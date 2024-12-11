import WebsiteCard from "@/components/WebsiteCard";
import { showcases } from "@/config/showcases";
import { createModernMetaScraper, ModernMetaScraper } from "@/lib/metaScraper";
import { Spacer } from "@nextui-org/react";
import { ExternalLink } from "lucide-react";
import { RoughNotation } from "react-rough-notation";

const scraper: ModernMetaScraper = createModernMetaScraper();

const Showcase = async ({
  id,
  locale,
  langName,
}: {
  id: string;
  locale: any;
  langName: string;
}) => {
  const sites = showcases;

  return (
    <section
      id={id}
      className="flex flex-col justify-center max-w-7xl items-center py-8"
    >
      <div className="flex flex-col text-center max-w-xl gap-4">
        <h2 className="text-center text-white">
          <RoughNotation type="highlight" show={true} color="#2563EB">
            {locale.title}
          </RoughNotation>
        </h2>
        {/* <p className="text-large text-default-500">{locale.description}</p>  */}
      </div>
      <a
        href="https://www.playxia.com/"
        target="_blank"
        aria-label="PlayXia Games"
        title="PlayXia Games"
        rel="noopener"
        data-description="PlayXia | Free Online Games - Play 10,000+ Games Instantly"
        className="tracking-wide transition-colors duration-200 font-normal flex items-center text-blue-500"
      >
        More Games <ExternalLink className="h-4 w-4 ml-1" />
      </a>
      <Spacer y={8} />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 justify-items-center">
        {sites.map((site) => (
          <WebsiteCard langName={langName} key={site.url} {...site} />
        ))}
      </div>
    </section>
  );
};

export default Showcase;

