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
    title: `Privacy Policy - ${siteConfig.name}`,
    description:
      "Privacy Policy for Geometry Dash Unblocked - Learn how we collect, use, and protect your information.",
    alternates: {
      canonical: `${siteConfig.url}${lang}/privacy-policy/`,
    },
  };
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

      <div className="prose dark:prose-invert max-w-none">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          Last updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p>
            Welcome to Geometry Dash Unblocked (&quot;we,&quot; &quot;our,&quot;
            or &quot;us&quot;). We respect your privacy and are committed to
            protecting your personal data. This privacy policy explains how we
            handle your information when you visit our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Information We Collect
          </h2>
          <h3 className="text-xl font-semibold mb-2">
            Automatically Collected Information:
          </h3>
          <ul className="list-disc pl-6 mb-4">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Device information</li>
            <li>Operating system</li>
            <li>Usage data and gameplay statistics</li>
            <li>Referring website addresses</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">
            Cookies and Similar Technologies:
          </h3>
          <p>
            We use cookies and similar tracking technologies to enhance your
            gaming experience and analyze website usage. These technologies help
            us:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Remember your preferences</li>
            <li>Analyze site traffic and usage patterns</li>
            <li>Understand how you interact with our game</li>
            <li>Provide targeted advertisements</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            How We Use Your Information
          </h2>
          <p>We use the collected information to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide and maintain our gaming service</li>
            <li>Improve and optimize our website performance</li>
            <li>Analyze usage patterns and trends</li>
            <li>Detect and prevent technical issues</li>
            <li>Serve relevant advertisements</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
          <p>We use the following third-party services:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Google Analytics - for website traffic analysis</li>
            <li>Google AdSense - for advertising</li>
            <li>Scratch Platform - for game embedding</li>
          </ul>
          <p>
            These services may collect and process your data according to their
            own privacy policies. We encourage you to review their respective
            privacy policies for more information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Children&apos;s Privacy
          </h2>
          <p>
            Our service is intended for general audiences and does not knowingly
            collect personal information from children under 13. If you are a
            parent or guardian and believe your child has provided us with
            personal information, please contact us, and we will take steps to
            remove such information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p>Depending on your location, you may have the following rights:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to data processing</li>
            <li>Data portability</li>
            <li>Withdraw consent</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p>
            We implement appropriate security measures to protect your
            information. However, no method of transmission over the Internet is
            100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Changes to This Policy
          </h2>
          <p>
            We may update this privacy policy from time to time. We will notify
            you of any changes by posting the new policy on this page and
            updating the &quot;Last updated&quot; date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our
            practices, please contact us at:{" "}
            <a
              href="mailto:contact@geometry-dash-unblocked.com"
              className="text-blue-600 dark:text-blue-400"
            >
              contact@geometry-dash-unblocked.com
            </a>
          </p>
        </section>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mt-8">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            This privacy policy was created to be as transparent as possible
            about our data collection and use practices. We encourage you to
            read it carefully and contact us if you have any concerns.
          </p>
        </div>
      </div>
    </div>
  );
}

