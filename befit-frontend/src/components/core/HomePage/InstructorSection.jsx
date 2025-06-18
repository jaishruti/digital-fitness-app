import { FaArrowRight } from "react-icons/fa";
import Instructor from "../../../assets/Images/Instructor.png";
import CTAButton from "./Button";
import HighlightText from "./HighlightText";
const InstructorSection = () => {
  return (
    <div className="bg-amber-800 w-[80%] flex flex-col md:flex-row gap-4 justify-evenly items-center">
      <div className="h-[50px] w-[50px] flex items-center">
        <img src={Instructor} alt="instructor.png" className="shadow-white" />
      </div>
      <div className="w-[50%] flex flex-col gap-10">
        <div className="w-[50%] text-4xl font-semibold">
          Become an
          <HighlightText text={"Trainer"} />
        </div>
        <p className="font-medium text-[16px] w-[80%] text-richblack-300">
          Trainers from around the world train millions of people on BeFit. We
          provide the tools and skills to train.
        </p>
        <div className="w-fit">
          <CTAButton active={false} linkto={"/signup"}>
            <div className="flex flex-row gap-2 items-center">
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
