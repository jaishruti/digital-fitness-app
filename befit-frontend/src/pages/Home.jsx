import React from "react";
import CTAButton from "../components/core/HomePage/Button";
import HighlightText from "../components/core/HomePage/HighlightText";

const Home = () => {
  return (
    <div>
      {/* Section-1 - Responsive */}
      <div
        className="relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center 
text-black justify-between px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mt-5 w-full sm:w-[95%] md:w-[80%] leading-relaxed">
          <div>Honoring your wisdom in</div>
          <HighlightText text={"Wellness and Work"} />
        </div>
        <div className="flex flex-row gap-3 mt-6 justify-center items-center">
          <CTAButton active={true} linkto={"/"}>
            Join us
          </CTAButton>
          <CTAButton active={false} linkto={"/"}>
            Leave us
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default Home;
