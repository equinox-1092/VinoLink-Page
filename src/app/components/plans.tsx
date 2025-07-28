import React from "react";
import { AnimatedButton } from "@/components/magicui/animated-button";
import { ChevronRightIcon, CheckIcon } from "lucide-react";

export const Plans = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center p-4 m-auto">
        <h1 className="text-4xl font-bold">Plans</h1>
      </div>
      <div className="flex justify-center items-stretch p-6 mx-6 gap-8 w-[1200px]">
        <div className="border border-[#0035FB] rounded-[20px] p-6 flex-1 flex flex-col hover:scale-[1.02] transition-all 0.3s ease-in-out duration-300 hover:border-[#0035FB] hover:shadow-[0_0_10px_#0035FB]">
          <h2 className="text-2xl font-bold p-1">Free</h2>
          <p className="text-lg pb-6">Optimize and increase productivity in production and sales processes.</p>
          <ul className="list-none">
            <li className="flex items-center mb-2">
              <CheckIcon className="mr-2 size-4" />
              Inventory management: control of inputs and finished products
              limited to 50 products
            </li>
            <li className="flex items-center mb-2">
              <CheckIcon className="mr-2 size-4" />
              Control of the vinification process: basic management of up to 2
              forms of the process.
            </li>
            <li className="flex items-center mb-2">
              <CheckIcon className="mr-2 size-4" />
              Customer portfolio administration: up to 50 customers with basic
              orders history.
            </li>
            <li className="flex items-center">
              <CheckIcon className="mr-2 size-4" />
              Support: Electronic email.
            </li>
          </ul>
          <div className="mt-auto pt-6">
            <AnimatedButton className="w-40 flex justify-center items-center">
            <span className="group inline-flex items-center">
              Free version
              <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <span className="group inline-flex items-center">
              <CheckIcon className="mr-2 size-4" />
              Get Started
            </span>
            </AnimatedButton>
          </div>
        </div>
        <div className="border border-[#0035FB] rounded-[20px] p-6 flex-1 flex flex-col hover:scale-[1.02] transition-all 0.3s ease-in-out duration-300 hover:border-[#0035FB] hover:shadow-[0_0_10px_#0035FB]">
          <h2 className="text-2xl font-bold p-1">Plus</h2>
          <p className="text-lg pb-6">Better customer management and robust productivity solutions.</p>
          <ul className="list-none">
            <li className="flex items-center mb-2">
              <CheckIcon className="mr-2 size-4" />
              Inventory management: Control of up to 500 products, with
              automatic alerts for low or excess stock.
            </li>
            <li className="flex items-center mb-2">
              <CheckIcon className="mr-2 size-4" />
              Winemaking process control: Complete management of all phases,
              adaptable to different types of wines.
            </li>
            <li className="flex items-center mb-2">
              <CheckIcon className="mr-2 size-4" />
              Client portfolio management: Up to 100 clients.
            </li>
            <li className="flex items-center">
              <CheckIcon className="mr-2 size-4" />
              Order tracking: Simultaneous monitoring of up to 50 orders.
            </li>
            <li className="flex items-center">
              <CheckIcon className="mr-2 size-4" />
              Support: Email and live chat support.
            </li>
          </ul>
          <div className="mt-auto pt-6">
            <AnimatedButton className="w-40 flex justify-center items-center">
            <span className="group inline-flex items-center">
              Plus version
              <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <span className="group inline-flex items-center">
              <CheckIcon className="mr-2 size-4" />
              Get Started
            </span>
            </AnimatedButton>
          </div>
        </div>
        <div className="border border-[#0035FB] rounded-[20px] p-6 flex-1 flex flex-col hover:scale-[1.02] transition-all 0.3s ease-in-out duration-300 hover:border-[#0035FB] hover:shadow-[0_0_10px_#0035FB]">
          <h2 className="text-2xl font-bold p-1">Pro</h2>
          <p className="text-lg pb-6">Complete control and management of your business.</p>
          <ul className="list-none">
            <li className="flex items-center mb-2">
              <CheckIcon className="mr-2 size-4" />
              Inventory Management: Unlimited product control with advanced
              reporting and stock forecasts.
            </li>
            <li className="flex items-center mb-2">
              <CheckIcon className="mr-2 size-4" />
              Winemaking Process Control: Complete and customized management at
              every stage, with historical data integration for quality
              optimization.
            </li>
            <li className="flex items-center mb-2">
              <CheckIcon className="mr-2 size-4" />
              Customer Portfolio Management: Unlimited management with
              behavioral analytics and advanced segmentation.
            </li>
            <li className="flex items-center">
              <CheckIcon className="mr-2 size-4" />
              Order Tracking: Unlimited tracking, with integration to
              distribution systems and real-time tracking..
            </li>
            <li className="flex items-center">
              <CheckIcon className="mr-2 size-4" />
              Support: 24/7 priority support with personalized attention.
            </li>
          </ul>
          <div className="mt-auto pt-6">
            <AnimatedButton className="w-40 flex justify-center items-center">
            <span className="group inline-flex items-center">
              Pro version
              <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <span className="group inline-flex items-center">
              <CheckIcon className="mr-2 size-4" />
              Get Started
            </span>
            </AnimatedButton>
          </div>
        </div>
      </div>
    </div>
  );
};
