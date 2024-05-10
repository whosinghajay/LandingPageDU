import React from "react";

const Hero = () => {
  return (
    <div className="h-[262px] sm:h-[700px] flex justify-between">
      <div className="p-[26px] sm:p-[180px] leading-normal sm:leading-loose">
        <p className="text-[#0A80DA] font-semibold text-lg sm:text-xl mb-0 sm:mb-2">
          \Hire Prominent\
        </p>
        <p className="font-bold text-3xl sm:text-4xl mb-0 sm:mb-3">
          DYNAMIC Engineers
        </p>
        <p className="hidden sm:block text-md sm:text-xl mb-4">
          We are a Wealth of Experience To Provide You <br /> With Efficient
          Talent
        </p>
        <p className="sm:hidden block text-md sm:text-xl mb-4 mt-1">
          We are a Wealth of Experience <br />
          To Provide You With
          <br /> Efficient Talent
        </p>
        {/* for bigger screen */}
        <div className="hidden sm:flex justify-between border-2 rounded-full sm:p-1 sm:pl-3">
          <input type="text" placeholder="Your work mail id" className="pl-2" />
          <img
            src="/hireButton.svg"
            alt="hireNowButton"
            className="border rounded-full"
          />
        </div>
        {/* for smaller screen */}
        <div className="sm:hidden flex justify-between border-2 rounded-full mt-10">
          <input type="text" placeholder="Your work mail id" className="pl-2" />
          <img
            src="/hireButton.svg"
            alt="hireNowButton"
            className="border rounded-full"
          />
        </div>

        <div className="hidden sm:flex flex-col mt-[200px] transform scale-125 pl-[60px]">
          <div className="flex flex-row ml-6 mb-1 gap-1">
            <img src="/starImg.svg" alt="starImg" />
            20,000+ reviews
          </div>
          <img src="/googleClutch.svg" alt="googleClutchImage" width={200} />
        </div>
      </div>
      <div className="hidden sm:block relative pr-[220px]">
        <img src="/heroSectionImg1.svg" alt="heroSectionImageOne" />
        <img
          src="/nameNexp.svg"
          alt="nameNexp"
          className="absolute top-[500px] left-[350px]"
        />
        <img
          src="/peopleNlike.svg"
          alt="peopleNlike"
          className="absolute top-4 left-[570px]"
        />
      </div>

      <div className="sm:hidden block">
        <img
          src="/heroSectionImg1.svg"
          width={200}
          className="absolute left-[240px]"
        />
      </div>
    </div>
  );
};

export default Hero;
