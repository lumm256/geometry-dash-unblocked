"use client";
import { INSTRUCTIONSCollection } from "@/types/siteConfig";
import ReactMarkdown from "react-markdown";
import { RoughNotation } from "react-rough-notation";

function Instructions({
  id,
  locale,
  langName,
  allInstructions,
}: {
  id: string;
  locale: any;
  langName: string;
  allInstructions: INSTRUCTIONSCollection;
}) {
  const INSTRUCTIONS =
    allInstructions[`INSTRUCTIONS_${langName.toUpperCase()}`];
  return (
    <section
      id={id}
      className="flex flex-col justify-center max-w-[88%] items-center py-8 gap-10"
    >
      <div className="flex flex-col text-center gap-4">
        <h2 className="text-center text-white">
          <RoughNotation type="highlight" show={true} color="#2563EB">
            {locale.title}
          </RoughNotation>
        </h2>
      </div>
      {INSTRUCTIONS?.map((item) => (
        <div className="flex flex-col gap-3 w-3/4" key={item.title}>
          <div>
            <ReactMarkdown>{item.content}</ReactMarkdown>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Instructions;

