import React from "react";
import { Button } from "./button";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Vino <span className="text-blue-600">Link</span></h1>
        <Button>Get Started</Button>
      </div>
    </div>
  );
};
