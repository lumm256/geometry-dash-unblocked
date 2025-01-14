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
    title: `About - ${siteConfig.name}`,
    description:
      "Learn more about Geometry Dash Unblocked - Our story, mission, and commitment to providing free browser-based gaming.",
    alternates: {
      canonical: `${siteConfig.url}${lang}/about/`,
    },
  };
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">About Geometry Dash Unblocked</h1>

      <section className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-semibold mb-4">👋 Hey there!</h2>
        <p className="mb-6">
          Welcome to Geometry Dash Unblocked! We&apos;re stoked you&apos;re
          interested in learning more about what we do.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          🎮 What We&apos;re All About
        </h2>
        <p className="mb-6">
          We built this platform with a simple goal in mind: to make Geometry
          Dash accessible to everyone, anywhere, right in their browser. No
          downloads, no installations, just pure rhythm-based platforming fun.
          Whether you&apos;re killing time during lunch break or looking for a
          quick gaming session, we&apos;ve got you covered.
        </p>

        <h2 className="text-2xl font-semibold mb-4">💡 Our Mission</h2>
        <p className="mb-6">
          Our mission is to break down barriers to gaming accessibility. We
          believe great games should be available to everyone, regardless of
          their device or location. That&apos;s why we&apos;ve created this
          free, browser-based version of the beloved Geometry Dash game.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          🚀 What Makes Us Different
        </h2>
        <ul className="list-disc pl-6 mb-6">
          <li>100% browser-based - no downloads required</li>
          <li>Completely free to play</li>
          <li>No account registration needed</li>
          <li>Regular updates and improvements</li>
          <li>Multi-language support</li>
          <li>Optimized for all devices</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">🤝 Join Our Community</h2>
        <p className="mb-6">
          We&apos;re more than just a gaming platform - we&apos;re a community
          of rhythm game enthusiasts. Whether you&apos;re a seasoned pro or just
          starting out, you&apos;ll find a welcoming space here. Got
          suggestions? We&apos;d love to hear them!
        </p>

        <h2 className="text-2xl font-semibold mb-4">☕ Support Us</h2>
        <p className="mb-6">
          If you enjoy what we do and want to support our mission, consider
          buying us a coffee! Every contribution helps us maintain and improve
          the platform, keeping it free and accessible for everyone.
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-2">🎯 Quick Facts</h3>
          <ul className="list-disc pl-6">
            <li>Launched in 2024</li>
            <li>100% free-to-play platform</li>
            <li>Supporting players worldwide</li>
            <li>Regular updates and maintenance</li>
          </ul>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 mt-8">
          Thanks for being part of our journey! If you have any questions or
          just want to say hi, don&apos;t hesitate to reach out.
        </p>
      </section>
    </div>
  );
}

