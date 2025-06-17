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
  bgradient,
  codecolor,
}) => {
  return (
    <div className={`flex ${position} my-20 gap-5`}>
      {/* section1 */}
      <div>
        <div>
          <div></div>
        </div>
        <div>
          <CTAButton></CTAButton>
          <CTAButton></CTAButton>
        </div>
      </div>
      {/* section2 */}
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
