import { locales } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.filter(l => l !== "").map((lang) => ({ lang }));
}

export default function LangLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
