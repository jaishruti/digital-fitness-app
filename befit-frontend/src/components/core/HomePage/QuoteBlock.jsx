import CTAButton from "./Button";
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const QuoteBlock = ({
  position,
  heading,
  subheading,
  ctabtn1,
  ctabtn2,
  codeblock,
  codecolor,
}) => {
  return (
    <div
      className={`flex flex-col lg:flex-row ${position} my-10 sm:my-16 lg:my-20 gap-10 lg:gap-6 justify-between px-4 sm:px-6 lg:px-8`}
    >
      {/* section1 */}
      <div className="flex flex-col w-full lg:w-[50%] gap-6 lg:gap-8">
        <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
          {heading}
        </div>
        <div className="text-slate-800 font-bold text-base sm:text-lg">
          {subheading}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 mt-4 sm:mt-7">
          <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
            <div className="flex gap-2 items-center justify-center">
              {ctabtn1.btnText}
              <FaArrowRight />
            </div>
          </CTAButton>
          <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
            {ctabtn2.btnText}
          </CTAButton>
        </div>
      </div>

      {/* section2 */}
      <div className="h-fit flex flex-row text-xs sm:text-sm w-full lg:w-[50%] py-4 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 rounded-lg border border-gray-300 shadow-lg overflow-hidden">
        <div className="text-center flex flex-col w-[8%] sm:w-[10%] text-gray-400 font-inter font-bold text-xs sm:text-sm py-2">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
        </div>
        <div
          className={`w-[92%] sm:w-[90%] flex flex-col gap-2 text-gray-500 font-bold font-mono ${codecolor} pr-2 py-2 overflow-x-auto`}
        >
          <TypeAnimation
            sequence={[codeblock, 2000, ""]}
            repeat={Infinity}
            cursor={true}
            style={{
              whiteSpace: "pre-line",
              display: "block",
              fontSize: "inherit",
              lineHeight: "1.5",
            }}
            omitDeletionAnimation={true}
          />
        </div>
      </div>
    </div>
  );
};

export default QuoteBlock;
