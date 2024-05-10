import React from "react";

const MakingHiring = () => {
  return (
    <div className="mt-10 sm:mt-[100px]">
      <p className="max-w-fit mr-auto ml-auto text-[#0A80DA] font-semibold text-lg sm:text-2xl">
        \Making Hiring\
      </p>
      <p className="max-w-fit mr-auto ml-auto text-[#0E1F51] font-bold text-2xl sm:text-4xl">
        A Breeze With Dutech
      </p>

      <div className="flex flex-col sm:flex-row max-w-fit mr-auto ml-auto mt-10 gap-[12px]">
        <p className="h-[254px] w-[370px] flex place-items-center justify-center text-white font-semibold text-xl bg-[url('/specificationImage.svg')]">
          Specification
        </p>
        <p className="h-[254px] w-[370px] flex place-items-center justify-center text-white font-semibold text-xl bg-[url('/discussionImage.svg')]">
          Discussion
        </p>
        <p className="h-[254px] w-[370px] flex place-items-center justify-center text-white font-semibold text-xl bg-[url('/deploymentImage.svg')]">
          Deployment
        </p>
      </div>
    </div>
  );
};

export default MakingHiring;
