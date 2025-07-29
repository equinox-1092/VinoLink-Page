"use client";
import React, { useCallback } from "react";

export const Navbar = () => {
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id.toLowerCase().replace(" ", "-"));
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  }, []);
  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About us", id: "about" },
    { name: "Services", id: "services" },
    { name: "Plans", id: "plans" },
    { name: "FAQ", id: "faq" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <div className="w-full">
      <nav className="w-full">
        <ul className="flex flex-wrap justify-center items-center p-4 gap-x-6 gap-y-2">
          {menuItems.map((item) => {
            const handleClick = (e: React.MouseEvent) => {
              e.preventDefault();
              scrollToSection(item.id);
            };

            return (
              <li key={item.id} className="h-5 overflow-hidden group">
                <a
                  href={`#${item.id}`}
                  onClick={handleClick}
                  className="inline-flex flex-col h-5 leading-5"
                >
                  <span className="h-5 flex items-center transition-transform duration-300 group-hover:-translate-y-5">
                    {item.name}
                  </span>
                  <span className="h-5 flex items-center text-blue-600 transition-transform duration-300 group-hover:-translate-y-5">
                    {item.name}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
