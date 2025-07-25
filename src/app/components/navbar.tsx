import React from "react";

export const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className="flex gap-4 justify-center items-center p-4 m-4 space-x-4">
          {["Home", "About us", "Services", "Plans", "FAQ", "Contact"].map(
            (item) => (
              <li
                key={item}
                className="overflow-hidden group cursor-pointer"
                style={{ height: "20px" }}
              >
                <div
                  className="h-[20px] flex flex-col transition-transform duration-300"
                  style={{ willChange: "transform" }}
                >
                  {/*texts of the navbar */}
                  <span className="flex h-[20px] items-center group-hover:-translate-y-[20px] transition-transform duration-300">
                    {item}
                  </span>
                  {/* with the effect of the hover and the color of the text */}
                  <span className="flex h-[20px] items-center text-blue-600 group-hover:-translate-y-[20px] transition-transform duration-300">
                    {item}
                  </span>
                </div>
              </li>
            )
          )}
        </ul>
      </nav>
    </div>
  );
};
