import React from "react";
import Hero from "../components/Hero";
import WeWorkWith from "../components/WeWorkWith";
import MakingHiring from "../components/MakingHiring";
import WhyChoose from "../components/WhyChoose";
import Discover from "../components/Discover";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="relative">
        <Hero />
        <div className="relative">
          <WeWorkWith />
          <MakingHiring />
          <img
            src="/leftSideBlueSemiCircle.svg"
            alt=""
            className="hidden sm:block absolute top-0 sm:top-[-80px]"
            width={130}
          />
        </div>
        <img src="/lightPinkCircle.svg" alt="" className="hidden sm:block absolute left-[5px] sm:left-[140px] top-[0px] sm:top-[130px]" width={180} />
        <img src="/lightGrayFullCircle.svg" alt="" className="hidden sm:block absolute left-[580px] top-[650px]" width={180} />
        <div className="absolute top-[50px] right-0 hidden sm:flex flex-col gap-[350px]">
          <img src="graySIdeHalfCircle.svg" alt="" />
          <img src="sideBlueCircle.svg" alt="" />
        </div>
      </div>
      <WhyChoose />
      <Discover />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default Home;
