import React from "react";

const WhyChoose = () => {
  return (
    <div className="mt-10 sm:mt-[120px] max-w-fit ml-auto mr-auto flex">
      <div className="hidden sm:block">
        <img src="/groupP.svg" alt="" />
      </div>
      {/* for bigger screen */}
      <div className="hidden sm:block pl-8">
        <p className="text-[#0A80DA] font-semibold text-2xl">\We Choose\</p>
        <p className="text-[#0E1F51] font-bold text-4xl mt-2">Our Company</p>

        <p className="mt-6">
          We are invested in our people for the long term, supporting them{" "}
          <br /> to imagine and build towards the meaningful careers they aspire{" "}
          <br /> to. We support the development of our people, providing them{" "}
          <br /> with opportunities and tools for them to continuously develop
          and <br /> reinvent their skills and careers
        </p>

        <div className="pt-6">
          <div className="flex gap-[6rem]">
            <div className="flex">
              <div>
                <img src="/potTalent.svg" alt="topConv" />
              </div>
              <div className="ml-2 text-sm">
                <p className="font-semibold text-[#0A80DA]">Top-Conveyance</p>
                <p className="">
                  Proven Track record <br /> of delivering
                </p>
              </div>
            </div>

            <div className="flex">
              <div>
                <img src="/potTalent.svg" alt="topConv" />
              </div>
              <div className="ml-2 text-sm">
                <p className="font-semibold text-[#0A80DA]">Potential-Talent</p>
                <p className="">
                  Proven Track record <br /> of delivering
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-6">
          <div className="flex gap-[6rem]">
            <div className="flex ">
              <div>
                <img src="/potTalent.svg" alt="topConv" />
              </div>
              <div className="ml-2 text-sm">
                <p className="font-semibold text-[#0A80DA]">Screening</p>
                <p className="">
                  Proven Track record <br /> of delivering
                </p>
              </div>
            </div>

            <div className="flex ">
              <div>
                <img src="/potTalent.svg" alt="topConv" />
              </div>
              <div className="ml-2 text-sm">
                <p className="font-semibold text-[#0A80DA]">Ethical</p>
                <p className="">
                  Proven Track record <br /> of delivering
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* for smaller screen */}
      <div className="sm:hidden block pl-3 max-w-fit mr-auto ml-auto">
        <p className="text-[#0A80DA] font-semibold text-lg pl-[130px]">\We Choose\</p>
        <p className="text-[#0E1F51] font-bold text-2xl mt-0 pl-[105px]">Our Company</p>

        <p className="mt-4">
          We are invested in our people for the long term, supporting them to
          imagine and build towards the meaningful careers they aspire to. We
          support the development of our people, providing them with
          opportunities and tools for them to continuously develop and reinvent
          their skills and careers
        </p>

        <div className="pt-6 sm:pt-6">
          <div className="flex gap-[0rem]">
            <div className="flex">
              <div>
                <img src="/potTalent.svg" alt="topConv" />
              </div>
              <div className="ml-2 text-sm">
                <p className="font-semibold text-[#0A80DA]">Top-Conveyance</p>
                <p className="">
                  Proven Track record of delivering
                </p>
              </div>
            </div>

            <div className="flex">
              <div>
                <img src="/potTalent.svg" alt="topConv" />
              </div>
              <div className="ml-2 text-sm">
                <p className="font-semibold text-[#0A80DA]">Potential-Talent</p>
                <p className="">
                  Proven Track record of delivering
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-6">
          <div className="flex gap-[0rem]">
            <div className="flex ">
              <div>
                <img src="/potTalent.svg" alt="topConv" />
              </div>
              <div className="ml-2 text-sm">
                <p className="font-semibold text-[#0A80DA]">Screening</p>
                <p className="">
                  Proven Track record of delivering
                </p>
              </div>
            </div>

            <div className="flex ">
              <div>
                <img src="/potTalent.svg" alt="topConv" />
              </div>
              <div className="ml-2 text-sm">
                <p className="font-semibold text-[#0A80DA]">Ethical</p>
                <p className="">
                  Proven Track record of delivering
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
