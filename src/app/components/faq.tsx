"use client";
import React, { useState } from "react";
import { IoChevronForward } from "react-icons/io5";

const accordionData = [
  {
    id: 1,
    title: "What is VinoLink and how can it help my winery?",
    content:
      "VinoLink is a platform that unites producers, distributors, and wine enthusiasts in a collaborative environment. Producers showcase their wineries and vintages, distributors manage catalogs and orders, and users receive personalized recommendations and share reviews. Each bottle is brought to life by directly connecting the person who makes it with the person who enjoys it. Thus, VinoLink becomes the starting point for discovering, connecting, and celebrating the world of wine.",
  },
  {
    id: 2,
    title: "What is the difference between the Free and Plus plans?",
    content:
      "The Free plan includes inventory management limited to 50 products, basic winemaking process control (up to 2 forms), management of up to 50 customers, and email support. The Plus plan offers expanded capabilities, including unlimited inventory, advanced winemaking process tracking, and customer management without limits, advanced reporting, and priority support.",
  },
  {
    id: 3,
    title: "How does VinoLink ensure the security of my data?",
    content:
      "At VinoLink, the security of your data is our top priority. We use end-to-end encryption to protect all sensitive information. We perform regular backups and adhere to industry security standards. You retain full control over your data at all times.",
  },
  {
    id: 4,
    title: "Can I try VinoLink before committing to a paid plan?",
    content:
      "Of course! We offer a free version of VinoLink that allows you to explore the basic features of our platform. This version includes limited inventory management, basic control of the winemaking process, and management of up to 50 customers. You can upgrade at any time to our Plus plan to access advanced features.",
  },
];

function AccordionItem({
  title,
  content,
  isExpanded,
  onToggle,
}: {
  title: string;
  content: string;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`w-full max-w-[100vw] flex flex-col justify-center items-center p-4 mx-auto my-4 border border-[#0035FB] dark:border dark:border-[#0035FB] rounded-3xl overflow-hidden transition-all duration-300 ${
        isExpanded ? "max-h-[500px]" : "max-h-24"
      }`}
    >
      <div
        className="w-full flex justify-between items-center p-4 cursor-pointer dark:text-white"
        onClick={onToggle}
      >
        <div className="text-lg pr-4">{title}</div>
        <IoChevronForward
          className={`text-4xl transform transition-transform duration-300 ease-in-out ${
            isExpanded ? "rotate-90" : "rotate-0"
          }`}
        />
      </div>
      <div
        className={`w-full px-6 pb-4 overflow-hidden transition-all duration-300 text-black dark:text-white ${
          isExpanded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div>{content}</div>
      </div>
    </div>
  );
}

export const Faq = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold text-center">FAQ</h1>
      </div>
      <div className="flex justify-center items-center p-4 m-auto">
        <div className="flex flex-col gap-3 max-w-[30vw] mx-auto text-black">
          {accordionData.map((item) => (
            <AccordionItem
              key={item.id}
              title={item.title}
              content={item.content}
              isExpanded={expandedId === item.id}
              onToggle={() => toggleExpand(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
