"use client";
import { ALL_FAQS } from "@/config/faqs";
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

const FAQ = ({
  id,
  locale,
  langName,
}: {
  id: string;
  locale: any;
  langName: string;
}) => {
  const FAQS = ALL_FAQS[`FAQS_${langName.toUpperCase()}`];
  const FAQSGAME = ALL_FAQS_GAME[`FAQS_${langName.toUpperCase()}`];

  return (
    <section
      id={id}
      className="flex flex-col justify-center max-w-[70%] items-center py-16 gap-12"
    >
      <div className="flex flex-col text-center gap-4">
        <h2 className="text-center text-white">
          <RoughNotation type="highlight" show={true} color="#2563EB">
            {locale.title}
          </RoughNotation>
        </h2>
        <p className="text-large text-default-500">{locale.description}</p>
      </div>
      {/* <div className="flex items-center">
        <h3>Geometry Dash FAQ</h3>
        <span className="cursor-pointer ml-6 text-blue-700">more&gt;</span>
      </div> */}
      <h3>Geometry Dash FAQ</h3>
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
      <h3>Website FAQ</h3>
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
        items={FAQS}
        selectionMode="multiple"
        variant="splitted"
        onSelectionChange={triggerResizeEvent}
      >
        {FAQS?.map((item) => (
          <AccordionItem
            key={item.title}
            indicator={<PlusIcon />}
            title={item.title}
            HeadingComponent="h3"
          >
            {item.content}
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQ;

