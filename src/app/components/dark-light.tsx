"use client"
import React, { useState, useEffect } from "react";
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";

export const DarkLight = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = resolvedTheme === "dark";
  
  return (
    <div className="flex justify-end p-6 ">
      <button
        aria-label="Dark/Light"
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className={`flex items-center p-2 rounded cursor-pointer 
          ${isDark ? "hover:border hover:border-[#363636] hover:bg-[#272727]" : "hover:shadow-lg hover:shadow-[#9b9b9b]"}
        `}
      >
        {isDark ? <IoSunny size={28} /> : <FaMoon size={22} />}
      </button>
    </div>
  );
};
