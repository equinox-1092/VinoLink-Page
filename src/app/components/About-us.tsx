import React from "react";
import Image from "next/image";
import about from "../assets/about.webp";
export const AboutUs = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 p-4 md:p-8 max-w-7xl mx-auto">
      <div className="w-full md:w-1/2">
        <Image 
          src={about} 
          alt="About" 
          className="w-full rounded-lg h-auto max-h-[500px] object-cover" 
        />
      </div>
      <div className="w-full md:w-1/2 space-y-6">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-lg">
          Vino Link is the platform that unites producers, distributors, and
          wine enthusiasts in a collaborative environment. Winegrowers showcase
          their wineries and harvests, distributors manage catalogs and orders,
          and users receive personalized recommendations and share reviews. Each
          bottle comes to life by directly connecting the person who makes it
          with the person who enjoys it. Thus, Vino Link becomes the starting
          point for discovering, connecting, and celebrating the world of wine.
        </p>
      </div>
    </div>
  );
};
