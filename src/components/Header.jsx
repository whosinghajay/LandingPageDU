import React from "react";

const Header = () => {
  return (
    <div className="h-[50px] sm:h-[100px] pt-6 sm:pt-[30px] pl-8 sm:pl-[150px] pr-0 sm:pr-[150px] flex justify-between items-center text-center border-b-4 pb-6">
      <div className="hidden sm:block">
        <img src="/logo.svg" alt="" />
      </div>
      <div className="flex font-[600] justify-center items-center text-center gap-[40px] ">
        <div>
          <ol className="flex text-[#0E1F51] gap-4 sm:gap-[30px]">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Reviews</li>
            <li className="cursor-pointer">Apply for jobs</li>
            <li className="cursor-pointer">Schedule a call</li>
          </ol>
        </div>
        <div className="hidden sm:block">
            <img src="/hireButton.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
