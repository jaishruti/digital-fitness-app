import { FaArrowRight } from "react-icons/fa";
import Instructor from "../../../assets/Images/Instructor.png";
import CTAButton from "./Button";
import HighlightText from "./HighlightText";
const InstructorSection = () => {
  return (
    <div className=" w-[80%] mt-20 flex flex-col md:flex-row gap-8 justify-between items-center">
      <div className="h-[50] w-[50] flex items-center">
        <img src={Instructor} alt="instructor.png" className="shadow-white" />
      </div>
      <div className="w-[60%] flex flex-col gap-10">
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl flex flex-col font-semibold leading-tight text-center sm:text-left max-w-4xl">
          Become a
          <HighlightText text={" Trainer"} />
        </div>
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed lg:text-left max-w-2xl lg:flex-1 text-white">
          Trainers from around the world train millions of people on BeFit. We
          provide the tools and skills to train.
        </p>
        <div className="w-fit">
          <CTAButton active={false} linkto={"/signup"}>
            <div className="flex flex-row gap-2 items-center ">
              Apply Now
              <FaArrowRight />
            </div>
          </CTAButton>
        </div>
      </div>
    </div>
  );
};
export default InstructorSection;
