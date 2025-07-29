import Image from "next/image";
import Link from "next/link";

const CompactGameCard = ({
  langName,
  title,
  og,
  url,
}: {
  langName: string;
  title: string;
  og?: string;
  url: string;
}) => {
  const href = "/" + langName + url;
  
  return (
    <Link href={href} title={title} aria-label={title}>
      <div className="group relative overflow-hidden rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-lg">
        <div className="aspect-[4/3] overflow-hidden">
          <Image
            src={og || "/og.png"}
            alt={title}
            width={160}
            height={120}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-2">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white leading-tight h-8 overflow-hidden">
            {title}
          </h3>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-blue-600 dark:text-blue-400 font-medium text-sm bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-full">
            Play Now
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CompactGameCard;