import React from "react";
import { Link } from "react-router-dom";
const CTAButton = ({ children, active, linkto }) => {
  return (
    <Link linkto={linkto}>
      <div
        className={`max-w-xs py-3 px-3 text-center text-black rounded-md font-semibold
      shadow-md hover:bg-gray-300 hover:scale-95 focus:ring-2 focus:ring-blue-400 transition-all duration-200 
  ${active ? "bg-amber-400 text-black" : "border-0 border-black bg-white"}`}
      >
        {children}
      </div>
    </Link>
  );
};

export default CTAButton;
