import { SiteConfig } from "@/types/siteConfig";
import { SiBuymeacoffee } from "react-icons/si";

const baseSiteConfig = {
  name: "Geometry Dash Unblocked",
  description:
    "Geometry Dash Unblocked: Free online rhythm platformer. No downloads. Challenge levels, beat rhythms in-browser. Ad-free, unlimited fun. Play now!",
  url: "https://geometry-dash-unblocked.com/",
  ogImage: "https://geometry-dash-unblocked.com/og.png",
  metadataBase: '/',
  keywords: [],
  alternates: {
    canonical: "https://geometry-dash-unblocked.com/",
  },
  authors: [
    {
      name: "lumm",
      url: "https://lummstudio.com",
      twitter: 'https://twitter.com/lumm996',
    }
  ],
  creator: '@lumm',
  themeColors: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  nextThemeColor: 'dark', // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/logo.png",
  },
  headerLinks: [
    { name: 'buyMeCoffee', href: "https://www.buymeacoffee.com/lumm", icon: SiBuymeacoffee }
  ],
  footerLinks: [
    {
      name: "PlayXia Games",
      href: "https://www.playxia.com"
    }
  ],
  footerProducts: []
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    images: [`${baseSiteConfig.url}og.png`],
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    site: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}og.png`],
    creator: baseSiteConfig.creator,
  },
}
