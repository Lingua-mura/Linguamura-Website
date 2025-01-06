"use client";

import React from 'react';
import Image from 'next/image'; // Import Next.js Image component
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

// Sample FAQ data
const faqData = [
  {
    question: "What is ShadCN UI?",
    answer: "ShadCN UI is a modern UI toolkit for building React components with Radix UI and Tailwind CSS."
  },
  {
    question: "How do I install it?",
    answer: "You can install it using npm or yarn: `npm install @radix-ui/react-accordion`."
  },
  {
    question: "Is it customizable?",
    answer: "Yes! ShadCN UI is built with Tailwind CSS, so you can easily customize the components to fit your needs."
  },
  {
    question: "Can I use it in Next.js?",
    answer: "Absolutely! ShadCN UI works seamlessly with Next.js and other React-based frameworks."
  }
];

const FAQSection: React.FC = () => {
  return (
    <div className="max-w-screen-lg mx-auto flex items-start space-x-10 py-8">
      {/* Left Column - Image and Chat Button */}
      <div className="relative">
        <Image
          src="/images/education-landing.png"
          alt="FAQ Image"
          width={350}
          height={550}
          className="object-cover w-full h-full rounded-lg"
        />
        {/* "Let's Chat" Button */}
        <div className="absolute bottom-4 -left-5 bg-primary text-white px-4 py-2 rounded-full text-lg">
          Let's Chat
        </div>
      </div>

      {/* Right Column - Accordion with FAQ content */}
      <div className="flex-grow space-y-4">
        <Accordion type="multiple" className="space-y-4">
          {faqData.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className='border-none'>
                <AccordionTrigger className="w-full p-4 text-lg text-black font-semibold text-left bg-primary-foreground rounded-md focus:outline-none hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
              <AccordionContent className="px-4 py-2 bg-gray-50 text-gray-700 rounded-b-md">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQSection;
