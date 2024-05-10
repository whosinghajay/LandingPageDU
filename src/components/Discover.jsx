import React from "react";

const Discover = () => {
  return (
    <div className="mt-10 sm:mt-[100px]">
      <p className="max-w-fit mr-auto ml-auto text-[#0A80DA] font-semibold text-lg sm:text-2xl">
        \Discover\
      </p>
      <p className="max-w-fit mr-auto ml-auto text-[#0E1F51] font-bold text-2xl sm:text-4xl">
        What you're looking for
      </p>

      {/* for bigger scrren */}
      <div className="hidden sm:flex flex-col max-w-fit mr-auto ml-auto mt-10 gap-[40px]">
        <div className="flex gap-8 mb-[0.05rem]">
          <div className="bg-[#F7F7F7] p-8">
            <img src="/frontEnd.svg" alt="" className="mb-4" />
            <p className="mb-4">Front End</p>
            <img src="/underBreakLine.svg" alt="" className="mb-4" />
            <p>
              It is a long established fact that a reader <br /> will be distra
              by the readable content of <br /> a page when looking at its
              layout, when <br /> looking at its layout
            </p>
          </div>
          <div className="bg-[#F7F7F7] p-8">
            <img src="/uiux.svg" alt="" className="mb-4" />
            <p className="mb-4">UI / UX Design</p>
            <img src="/underBreakLine.svg" alt="" className="mb-4" />
            <p>
              It is a long established fact that a reader <br /> will be distra
              by the readable content of <br /> a page when looking at its
              layout, when <br /> looking at its layout
            </p>
          </div>
          <div className="bg-[#F7F7F7] p-8">
            <img src="/backend.svg" alt="" className="mb-4" />
            <p className="mb-4">Back End</p>
            <img src="/underBreakLine.svg" alt="" className="mb-4" />
            <p>
              It is a long established fact that a reader <br /> will be distra
              by the readable content of <br /> a page when looking at its
              layout, when <br /> looking at its layout
            </p>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="bg-[#F7F7F7] p-8">
            <img src="/mobileDev.svg" alt="" className="mb-4" />
            <p className="mb-4">Mobile Developer</p>
            <img src="/underBreakLine.svg" alt="" className="mb-4" />
            <p>
              It is a long established fact that a reader <br /> will be distra
              by the readable content of <br /> a page when looking at its
              layout, when <br /> looking at its layout
            </p>
          </div>
          <div className="bg-[#F7F7F7] p-8">
            <img src="/mobileAssu.svg" alt="" className="mb-4" />
            <p className="mb-4">Quality Assurance</p>
            <img src="/underBreakLine.svg" alt="" className="mb-4" />
            <p>
              It is a long established fact that a reader <br /> will be distra
              by the readable content of <br /> a page when looking at its
              layout, when <br /> looking at its layout
            </p>
          </div>
          <div className="bg-[#F7F7F7] p-8">
            <img src="/devops.svg" alt="" className="mb-4" />
            <p className="mb-4">DevOps</p>
            <img src="/underBreakLine.svg" alt="" className="mb-4" />
            <p>
              It is a long established fact that a reader <br /> will be distra
              by the readable content of <br /> a page when looking at its
              layout, when <br /> looking at its layout
            </p>
          </div>
        </div>
      </div>

      {/* for smaller screen */}
      <div className="sm:hidden flex flex-col max-w-fit mr-auto ml-auto mt-10 gap-[40px]">
          <div className="bg-[#F7F7F7] p-8">
            <img src="/frontEnd.svg" alt="" className="mb-4" />
            <p className="mb-4">Front End</p>
            <img src="/underBreakLine.svg" alt="" className="mb-4" />
            <p>
              It is a long established fact that a reader <br /> will be distra
              by the readable content of <br /> a page when looking at its
              layout, when <br /> looking at its layout
            </p>
          </div>
          <div className="bg-[#F7F7F7] p-8">
            <img src="/uiux.svg" alt="" className="mb-4" />
            <p className="mb-4">UI / UX Design</p>
            <img src="/underBreakLine.svg" alt="" className="mb-4" />
            <p>
              It is a long established fact that a reader <br /> will be distra
              by the readable content of <br /> a page when looking at its
              layout, when <br /> looking at its layout
            </p>
          </div>
          <div className="bg-[#F7F7F7] p-8">
            <img src="/backend.svg" alt="" className="mb-4" />
            <p className="mb-4">Back End</p>
            <img src="/underBreakLine.svg" alt="" className="mb-4" />
            <p>
              It is a long established fact that a reader <br /> will be distra
              by the readable content of <br /> a page when looking at its
              layout, when <br /> looking at its layout
            </p>
          </div>

          <div className="bg-[#F7F7F7] p-8">
            <img src="/mobileDev.svg" alt="" className="mb-4" />
            <p className="mb-4">Mobile Developer</p>
            <img src="/underBreakLine.svg" alt="" className="mb-4" />
            <p>
              It is a long established fact that a reader <br /> will be distra
              by the readable content of <br /> a page when looking at its
              layout, when <br /> looking at its layout
            </p>
          </div>
          <div className="bg-[#F7F7F7] p-8">
            <img src="/mobileAssu.svg" alt="" className="mb-4" />
            <p className="mb-4">Quality Assurance</p>
            <img src="/underBreakLine.svg" alt="" className="mb-4" />
            <p>
              It is a long established fact that a reader <br /> will be distra
              by the readable content of <br /> a page when looking at its
              layout, when <br /> looking at its layout
            </p>
          </div>
          <div className="bg-[#F7F7F7] p-8">
            <img src="/devops.svg" alt="" className="mb-4" />
            <p className="mb-4">DevOps</p>
            <img src="/underBreakLine.svg" alt="" className="mb-4" />
            <p>
              It is a long established fact that a reader <br /> will be distra
              by the readable content of <br /> a page when looking at its
              layout, when <br /> looking at its layout
            </p>
          </div>
      </div>
    </div>
  );
};

export default Discover;
