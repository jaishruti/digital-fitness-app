import React from "react";
import CTAButton from "../components/core/HomePage/Button";

const Home = () => {
  return (
    <div>
      <CTAButton active={true} linkto={"/"}>
        Join us
      </CTAButton>
      <CTAButton active={false} linkto={"/"}>
        Leave us
      </CTAButton>
    </div>
  );
};

export default Home;
