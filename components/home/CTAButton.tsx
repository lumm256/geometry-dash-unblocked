"use client";

import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";

const CTAButton = ({ locale }: { locale: any }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Button
      variant="default"
      className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white"
      aria-label="Get Boilerplate"
      onClick={scrollToTop}
    >
      <RocketIcon />
      {locale.title}
    </Button>
  );
};

export default CTAButton;

