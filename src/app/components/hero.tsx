import React from "react";
import { Button } from "./button";
import wine from "../assets/hero.png";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-4 md:p-8 max-w-7xl mx-auto w-full animate-fade-in-down animate-duration-1000">
      {/* Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left p-4">
        <h1 className="text-7xl md:text-7xl font-bold py-7">
          Vino <span className="text-blue-600">Link</span>
        </h1>
        
        <div className="space-y-4">
          <p className="text-lg md:text-xl">
            Join the VinoLink community and start connecting with wineries today!
          </p>
          <p className="text-gray-500 dark:text-gray-400 italic">
            The best tool at your disposal for perfect business management.
          </p>
        </div>
        
        <div className="pt-4">
          <Button>Get Started</Button>
        </div>
      </div>
      
      {/* Image */}
      <div className="w-full md:w-1/2 p-4">
        <div className="relative w-full h-[50vh] md:h-[70vh]">
          <Image 
            src={wine} 
            alt="Wine and grapes" 
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};
