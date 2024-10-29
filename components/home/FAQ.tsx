"use client";
import { ALL_FAQS } from "@/config/faqs";
import { ALL_FAQS_GAME } from "@/config/faqs-game";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { PlusIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
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
  let FAQSGAME = ALL_FAQS_GAME[`FAQS_${langName.toUpperCase()}`];

  // 首页展示前 5 条
  FAQSGAME = FAQSGAME?.slice(0, 5);

  const pathname = usePathname();
  const router = useRouter();

  const toBlog = () => {
    let newPath;
    if (pathname === "/") {
      newPath = "/en/blog";
    } else {
      newPath = pathname + "blog";
    }
    router.push(newPath);
  };

  return (
    <section
      id={id}
      className="flex flex-col justify-center max-w-[70%] items-center py-8 gap-12"
    >
      <div className="flex flex-col text-center gap-4">
        <h2 className="text-center text-white">
          <RoughNotation type="highlight" show={true} color="#2563EB">
            {locale.title}
          </RoughNotation>
        </h2>
        <p className="text-large text-default-500">{locale.description}</p>
      </div>
      <div className="flex items-center">
        <h3>Geometry Dash FAQs</h3>
        <span
          className="cursor-pointer ml-6 text-blue-700 font-bold"
          onClick={toBlog}
        >
          more&gt;
        </span>
      </div>
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
            HeadingComponent="h4"
          >
            <ReactMarkdown remarkPlugins={[gfm]}>{item.content}</ReactMarkdown>
          </AccordionItem>
        ))}
      </Accordion>
      <h3>Website FAQs</h3>
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
            HeadingComponent="h4"
          >
            {item.content}
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQ;

