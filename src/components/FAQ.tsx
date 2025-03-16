"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

function FAQ({ items }: FAQProps): React.ReactElement {
  return (
    <div className="w-full max-w-[750px] mx-auto">
      <Accordion className="w-full" type="single" collapsible>
        {items.map((item) => (
          <AccordionItem 
            key={item.question} 
            className="mb-4 w-full" 
            value={item.question}
          >
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default FAQ;
