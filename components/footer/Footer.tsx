"use client";
import FooterProducts from "@/components/footer/FooterProducts";
import LangLinks from "@/components/footer/LangLinks";
import { siteConfig } from "@/config/site";
import Link from "next/link";

const Footer = () => {
  const d = new Date();
  const currentYear = d.getFullYear();
  const { authors } = siteConfig;

  return (
    <footer>
      <div className="mt-16 space-y-2 pt-6 pb-4 flex flex-col items-center bg-black text-sm text-gray-400 border-t">
        {/* <FooterLinks /> */}
        <a
          href="https://www.playxia.com/"
          target="_blank"
          aria-label="PlayXia Games"
          title="PlayXia Games"
          rel="noopener"
          data-description="PlayXia | Free Online Games - Play 10,000+ Games Instantly"
          className="tracking-wide transition-colors duration-200 font-normal flex items-center"
        >
          PlayXia Games
        </a>
        <FooterProducts />
        <LangLinks />
        <div className="flex space-x-2">
          <div>{`©${currentYear}`}</div>{" "}
          <Link
            href={authors[0].twitter || authors[0].url}
            target="_blank"
            prefetch={false}
          >
            {authors[0].name}
          </Link>{" "}
          <div>All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

