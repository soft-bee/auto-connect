import { Button } from "@/components/ui/button";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <section className="section px-[137px]">
      <h2 className="text-[55px] text-center mt-[87px] font-bold">
        Frequently Asked Questions
      </h2>
      <div className="mt-[40px] px-[42px]">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className=" text-[20px] font-semibold">
              What is Auto Connect?
            </AccordionTrigger>
            <AccordionContent className=" ml-20 text-[22px] text-[#929191] font-normal">
              Sodales posuere facilisi metus elementum ipsum egestas amet amet
              mattis commodo Nunc tempor amet massa diam mauris. Risus sodales
              interdum magna felis adipiscing consectetur sed consectetur.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className=" text-[20px] font-semibold">
              How does Auto Connect monitor my EV&apos;s battery health?
            </AccordionTrigger>
            <AccordionContent className=" ml-20 text-[22px] text-[#929191] font-normal">
              Sodales posuere facilisi metus elementum ipsum egestas amet amet
              mattis commodo Nunc tempor amet massa diam mauris. Risus sodales
              interdum magna felis adipiscing consectetur sed consectetur.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className=" text-[20px] font-semibold">
              Is Auto Connect free to use?
            </AccordionTrigger>
            <AccordionContent className=" ml-20 text-[22px] text-[#929191] font-normal">
              Sodales posuere facilisi metus elementum ipsum egestas amet amet
              mattis commodo Nunc tempor amet massa diam mauris. Risus sodales
              interdum magna felis adipiscing consectetur sed consectetur.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className=" text-[20px] font-semibold">
              How does Auto Connect compare my EV&apos;s battery to others?
            </AccordionTrigger>
            <AccordionContent className=" ml-20 text-[22px] text-[#929191] font-normal">
              Sodales posuere facilisi metus elementum ipsum egestas amet amet
              mattis commodo Nunc tempor amet massa diam mauris. Risus sodales
              interdum magna felis adipiscing consectetur sed consectetur.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className=" text-[20px] font-semibold">
              How will Auto Connect help me understand my EV&apos;s battery
              degradation?
            </AccordionTrigger>
            <AccordionContent className=" ml-20 text-[22px] text-[#929191] font-normal">
              Sodales posuere facilisi metus elementum ipsum egestas amet amet
              mattis commodo Nunc tempor amet massa diam mauris. Risus sodales
              interdum magna felis adipiscing consectetur sed consectetur.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="flex  justify-center ">
        <Button
          variant="secondary"
          className="w-[230px] h-[65px] mt-[40px] bg-[#FEBD1A] text-2xl  font-medium"
        >
          <Link href="/more" className="text-black">
            Read More
          </Link>
        </Button>
      </div>
    </section>
  );
}
