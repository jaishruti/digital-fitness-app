import React from "react";
// import "./App.css";
import CTAButton from "../components/core/HomePage/Button";
import HighlightText from "../components/core/HomePage/HighlightText";
import Banner from "../assets/Images/banner.mp4";
import QuoteBlock from "../components/core/HomePage/QuoteBlock";
import ExploreMore from "../components/core/HomePage/ExploreMore";

const Home = () => {
  return (
    <div>
      {/* Section-1 - Responsive */}
      <div
        className="relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center 
text-black justify-between px-4 sm:px-6 lg:px-8"
      >
        {/* hero section */}
        <div className="text-center text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mt-5 w-full sm:w-[95%] md:w-[80%] leading-relaxed">
          <div>Honoring your wisdom in</div>
          <HighlightText text={"Wellness and Work"} />
        </div>

        {/* buttons call to action */}
        <div className="flex flex-row gap-3 mt-6 justify-center items-center">
          <CTAButton active={true} linkto={"/"}>
            Join us
          </CTAButton>
          <CTAButton active={false} linkto={"/"}>
            Leave us
          </CTAButton>
        </div>

        {/* video section */}
        <div className="mx-3 my-12 shadow-blue-200">
          <video muted loop autoPlay>
            <source src={Banner} alt="banner.mp4" type="video/mp4" />
          </video>
        </div>

        {/* code sect 1 */}
        <div>
          <QuoteBlock
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock Your
                <HighlightText text={" true potential "} />
                with our Bhagvat Gita sessions
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in fitness and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "try it yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "learn more",
              linkto: "/login",
              active: false,
            }}
            codeblock={`The Bhagavad Gita is an ancient scripture\n that narrates part of the story of Hinduism.\n When you begin practicing yoga, \nit is genuinely like the start of a whole other journey,\n especially the deeper connection to the self. 
`}
            codecolor={"text-orange-25"}
          />
        </div>

        {/* code sect 2 */}
        <div>
          <QuoteBlock
            position={"lg:flex-row-reverse"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock Your
                <HighlightText text={" ultimate strength "} />
                with our Yoga sessions
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "try it yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "learn more",
              linkto: "/login",
              active: false,
            }}
            codeblock={`Yoga is not a work-out \nit is a work-in, and this is the point of spiritual \npractice to make us teachable to open up our \nhearts and focus our awareness \nso that we can know what we already \nknow and be who we already are.`}
            codecolor={"text-orange-25"}
          />
        </div>
      </div>
      <ExploreMore />
    </div>
  );
};

export default Home;
