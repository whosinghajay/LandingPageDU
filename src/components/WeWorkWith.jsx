import React from "react";

const WeWorkWith = () => {
  return (
    <div className="mt-[25px] sm:mt-[180px]">
      <p className="max-w-fit mr-auto ml-auto text-[#0A80DA] font-semibold text-lg sm:text-2xl">
        \We Work with\
      </p>
      <p className="max-w-fit mr-auto ml-auto text-[#0E1F51] font-bold text-2xl sm:text-4xl">
        The best companies in the world
      </p>

      {/* for bigger scrren */}
      <div className="hidden sm:flex max-w-fit mr-auto ml-auto mt-10 gap-[40px]">
        <img src="/view.svg" alt="" />
        <img src="/seguoia.svg" alt="" />
        <img src="/eicher.svg" alt="" />
        <img src="/swiggy.svg" alt="" />
        <img src="/view.svg" alt="" />
        <img src="/seguoia.svg" alt="" />
      </div>
      {/* for smaller screen */}
      <div className="sm:hidden flex max-w-fit mr-auto ml-auto mt-10 gap-[40px]">
        <div>
          <img src="/view.svg" alt="" />
          <img src="/seguoia.svg" alt="" />
          <img src="/eicher.svg" alt="" />
        </div>
        <div>
          <img src="/swiggy.svg" alt="" />
          <img src="/view.svg" alt="" />
          <img src="/seguoia.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default WeWorkWith;
