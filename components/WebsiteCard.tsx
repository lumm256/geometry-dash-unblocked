import Image from "next/image";
import Link from "next/link";

const WebsiteCard = ({
  langName,
  title,
  description,
  og,
  url,
}: {
  langName: string;
  title: string;
  description: string;
  og?: string;
  url: string;
}) => {
  const href = "/" + langName + url;
  return (
    <Link href={href} title={title} aria-label={title} target="_blank">
      <div className="w-[330px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 px-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary">
        <Image
          src={og || "/og.png"}
          alt={title}
          width={330}
          height={180}
          className="w-full h-44 object-cover rounded-lg mt-4"
        ></Image>
        <div className="py-4">
          <h3 className="font-bold text-xl mb-2 whitespace-nowrap overflow-hidden text-ellipsis text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-base whitespace-nowrap overflow-hidden text-ellipsis">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default WebsiteCard;

