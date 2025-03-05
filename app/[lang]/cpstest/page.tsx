import CPSTest from "@/components/cpsTest";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const { lang } = params;
  return {
    title: `CPS Test - ${siteConfig.name}`,
    description:
      "Test your clicking speed with our CPS (Clicks Per Second) test tool.",
    alternates: {
      canonical: `${siteConfig.url}${lang}/cpstest/`,
    },
  };
}

export default function CPSTestPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">CPS Test</h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Test your clicking speed! Select your preferred time duration and
          click as fast as you can to measure your CPS (Clicks Per Second).
        </p>
      </div>

      <div className="flex justify-center mb-12">
        <CPSTest />
      </div>

      <div className="max-w-2xl mx-auto space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">What is CPS Test?</h2>
          <p className="text-gray-400 leading-relaxed">
            A CPS Test (Clicks Per Second Test) is a tool designed to measure
            how quickly you can click your mouse or tap your screen. This CPS
            Test tool provides accurate measurements of your clicking speed,
            helping you understand and improve your clicking abilities. Whether
            you&apos;re a gamer looking to enhance your performance or simply
            curious about your clicking speed, our CPS Test offers precise
            results.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Why Take a CPS Test?</h2>
          <p className="text-gray-400 leading-relaxed">
            Regular CPS Test practice can help improve your clicking speed and
            accuracy, which is essential for various gaming scenarios. Many
            popular games require fast clicking abilities, and our CPS Test can
            help you track your progress. By measuring your CPS (Clicks Per
            Second) regularly, you can set benchmarks and work towards improving
            your score.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            How Our CPS Test Works
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Our CPS Test offers multiple time durations to suit different needs.
            You can choose between 1-second tests for quick measurements,
            5-second tests for standard evaluation, or longer 10 and 15-second
            tests for endurance assessment. The tool automatically calculates
            your CPS rate and provides instant feedback on your performance.
            This versatility makes our CPS Test suitable for both casual users
            and competitive gamers.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Select your preferred test duration (1s, 5s, 10s, or 15s)</li>
            <li>Click the button to start the test</li>
            <li>Click as fast as you can until the timer ends</li>
            <li>Your CPS will be calculated automatically</li>
            <li>Try to beat your highest score!</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Tips for Better CPS Test Results
          </h2>
          <p className="text-gray-400 leading-relaxed">
            To achieve better results in the CPS Test, try different clicking
            techniques such as butterfly clicking or jitter clicking. Make sure
            you&apos;re using a responsive mouse and a comfortable mouse pad.
            Regular practice with our CPS Test tool can help improve your
            clicking speed over time. Remember to take breaks between tests to
            avoid strain and maintain accuracy in your CPS measurements.
          </p>
        </div>
      </div>
    </div>
  );
}

