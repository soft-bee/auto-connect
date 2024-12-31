import { Button } from "@/components/ui/button";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faq = [
  {
    question: "What is Auto Connect?",
    answer:
      "Sodales posuere facilisi metus elementum ipsum egestas amet amet mattis commodo Nunc tempor amet massa diam mauris. Risus sodales interdum magna felis adipiscing consectetur sed consectetur.",
  },
  {
    question: "How does Auto Connect monitor my EV's battery health?",
    answer:
      "Sodales posuere facilisi metus elementum ipsum egestas amet amet mattis commodo Nunc tempor amet massa diam mauris. Risus sodales interdum magna felis adipiscing consectetur sed consectetur.",
  },
  {
    question: "Is Auto Connect free to use?",
    answer:
      "Sodales posuere facilisi metus elementum ipsum egestas amet amet mattis commodo Nunc tempor amet massa diam mauris. Risus sodales interdum magna felis adipiscing consectetur sed consectetur.",
  },
  {
    question: "How does Auto Connect compare my EV's battery to others?",
    answer:
      "Sodales posuere facilisi metus elementum ipsum egestas amet amet mattis commodo Nunc tempor amet massa diam mauris. Risus sodales interdum magna felis adipiscing consectetur sed consectetur.",
  },
  {
    question:
      "How will Auto Connect help me understand my EV's battery degradation?",
    answer:
      "Sodales posuere facilisi metus elementum ipsum egestas amet amet mattis commodo Nunc tempor amet massa diam mauris. Risus sodales interdum magna felis adipiscing consectetur sed consectetur.",
  },
];

export default function Faq() {
  return (
    <section className="container px-5 lg:px-[70px] xl:px-[137px]">
      <h2 className="mt-10 text-center text-[22px] font-bold lg:mt-[87px] lg:text-[55px]">
        Frequently Asked Questions
      </h2>
      <div className="mt-10 px-5 lg:px-[42px]">
        <Accordion type="single" collapsible>
          {faq.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-[20px] font-semibold">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="mx-2.5 text-[22px] font-normal text-[#929191] lg:mx-20">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="flex justify-center">
        <Button
          asChild
          className="mt-[40px] h-[42px] w-[131px] bg-primary text-2xl font-medium text-black lg:h-[65px] lg:w-[230px]"
        >
          <Link href="/login">Read More</Link>
        </Button>
      </div>
    </section>
  );
}
