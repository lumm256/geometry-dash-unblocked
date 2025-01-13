import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Terms of Service - ${siteConfig.name}`,
  description:
    "Terms of Service for Geometry Dash Unblocked - Please read these terms carefully before using our service.",
};

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

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
          <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
          <p>
            By accessing and using Geometry Dash Unblocked (the
            &quot;Service&quot;), you agree to be bound by these Terms of
            Service. If you disagree with any part of these terms, you may not
            access the Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            2. Description of Service
          </h2>
          <p>
            Geometry Dash Unblocked is a browser-based gaming platform that
            provides access to a free, online version of the rhythm-based
            platformer game. The Service includes:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Browser-based gameplay</li>
            <li>Game-related content and features</li>
            <li>Associated website functionalities</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            3. Intellectual Property
          </h2>
          <p>
            The Service and its original content, features, and functionality
            are owned by us and are protected by international copyright,
            trademark, patent, trade secret, and other intellectual property
            laws.
          </p>
          <p className="mt-4">
            We acknowledge that Geometry Dash is a trademark of RobTop Games AB.
            This Service is not affiliated with, endorsed by, or connected to
            RobTop Games AB.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. User Conduct</h2>
          <p>By using our Service, you agree not to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Use the Service for any illegal purpose</li>
            <li>
              Attempt to gain unauthorized access to any part of the Service
            </li>
            <li>Interfere with or disrupt the Service or servers</li>
            <li>
              Circumvent any technological measures used to protect the Service
            </li>
            <li>Use any type of automated systems to access the Service</li>
            <li>
              Redistribute, sell, or attempt to monetize any part of the Service
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            5. Disclaimer of Warranties
          </h2>
          <p>
            The Service is provided &quot;as is&quot; and &quot;as
            available&quot; without any warranties of any kind, either express
            or implied. We do not guarantee that the Service will be
            uninterrupted, secure, or error-free.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            6. Limitation of Liability
          </h2>
          <p>
            To the fullest extent permitted by law, we shall not be liable for
            any indirect, incidental, special, consequential, or punitive
            damages, or any loss of profits or revenues, whether incurred
            directly or indirectly, or any loss of data, use, goodwill, or other
            intangible losses.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            7. Third-Party Services
          </h2>
          <p>
            Our Service may contain links to third-party websites or services
            that are not owned or controlled by us. We have no control over, and
            assume no responsibility for, the content, privacy policies, or
            practices of any third-party websites or services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Advertisements</h2>
          <p>
            The Service may include advertisements. You understand and agree
            that the Service may include advertising necessary to support the
            Service. The manner, mode, and extent of advertising on the Service
            are subject to change without specific notice to you.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
          <p>
            We reserve the right to modify or replace these Terms at any time.
            If a revision is material, we will try to provide at least 30
            days&apos; notice prior to any new terms taking effect.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Termination</h2>
          <p>
            We may terminate or suspend access to our Service immediately,
            without prior notice or liability, for any reason whatsoever,
            including without limitation if you breach the Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">11. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of the United States, without regard to its conflict of law
            provisions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:{" "}
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
            By using our Service, you acknowledge that you have read and
            understood these Terms of Service and agree to be bound by them.
          </p>
        </div>
      </div>
    </div>
  );
}
