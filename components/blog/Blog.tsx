"use client";
import { ALL_FAQS_GAME } from "@/config/faqs-game";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { PlusIcon } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { RoughNotation } from "react-rough-notation";
import gfm from "remark-gfm";

// update rough notation highlight
function triggerResizeEvent() {
  const event = new Event("resize");
  window.dispatchEvent(event);
}

const Blog = ({ lang }: { lang: string }) => {
  const FAQSGAME = ALL_FAQS_GAME[`FAQS_${lang.toUpperCase()}`];

  return (
    <div className="w-full py-8 px-[10%]">
      <h2 className="text-center text-white">
        <RoughNotation type="highlight" show={true} color="#2563EB">
          Blog
        </RoughNotation>
      </h2>
      <p className="text-large text-default-500 my-4 text-center">
        Questions and issues explained here
      </p>
      <Accordion
        fullWidth
        keepContentMounted
        className="gap-3"
        itemClasses={{
          base: "px-6 !bg-default-100 !shadow-none hover:!bg-default-200/50",
          title: "font-medium",
          trigger: "py-4",
          content: "pt-0 pb-6 text-base text-default-500",
        }}
        items={FAQSGAME}
        selectionMode="multiple"
        variant="splitted"
        onSelectionChange={triggerResizeEvent}
      >
        {FAQSGAME?.map((item) => (
          <AccordionItem
            key={item.title}
            indicator={<PlusIcon />}
            title={item.title}
            HeadingComponent="h3"
          >
            <ReactMarkdown remarkPlugins={[gfm]}>{item.content}</ReactMarkdown>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Blog;
