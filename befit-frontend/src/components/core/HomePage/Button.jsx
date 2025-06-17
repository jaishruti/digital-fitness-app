import React from "react";
import { Link } from "react-router-dom";
const Button = ({ children, active, linkto }) => {
  return (
    <Link linkto={linkto}>
      <div
        className={`w-full max-w-xs py-3 px-6 text-center text-black rounded-md 
      shadow-md hover:bg-gray-300 hover:scale-95 focus:ring-2 focus:ring-blue-400 transition-all duration-200 
  ${active ? "bg-amber-600 text-black" : "border-0 border-black"}`}
      >
        {children}
      </div>
    </Link>
  );
};

export default Button;
