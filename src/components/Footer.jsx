import React from "react";

const Footer = () => {
  return (
    <div className="mt-[100px] bg-[#E2E2E2] flex sm:flex-row flex-col justify-between pr-[20px] sm:pr-[180px] pl-[20px] sm:pl-[180px] pt-[20px] sm:pt-[6rem] pb-4 sm:pb-0">
      {/* for bigger scrren */}
      <div className="hidden sm:block">
        <img src="/logo.svg" alt="logo" />
        <p className="mt-4">
          It is a long established <br />
          fact that a reader will be distracted <br /> by the readable content
          of a page <br />
          when looking at
        </p>
      </div>
      {/* for smaller scrren */}
      <div className="block sm:hidden">
        <img src="/logo.svg" alt="logo" />
        <p className="mt-2">
          It is a long established <br />
          fact that a reader will be distracted by the readable content of a
          page when looking at
        </p>
      </div>

      {/* for bigger scrren */}
      <div className="hidden sm:block mb-[80px]">
        <p className="font-bold text-2xl">Services</p>
        <img src="/underBreakLine.svg" alt="" className="mt-2 mb-8" />
        <p className="mt-4">Web Design/Development</p>
        <p className="mt-4">App Development</p>
        <p className="mt-4">UI / UX Design</p>
        <p className="mt-4">Hubspot Integration</p>
        <p className="mt-4">Email Marketing</p>
        <p className="mt-4">Website Migration</p>
      </div>

      <div className="hidden sm:block">
        <p className="font-bold text-2xl">Career</p>
        <img src="/underBreakLine.svg" alt="" className="mt-2" />
        <div className="flex gap-4 mt-8">
          <div className="">
            <img
              src="/react.svg"
              alt=""
              className="bg-blue-600 p-2 border rounded-xl"
            />
          </div>
          <div>
            <p className="text-blue-600 font-bold text-lg">ReactJs Dev.</p>
            <p>1-5 Years of exp</p>
          </div>
        </div>

        <div className="flex gap-4 mt-8">
          <div className="">
            <img
              src="/wordpress.svg"
              alt=""
              className="bg-blue-600 p-2 border rounded-xl"
            />
          </div>
          <div>
            <p className="text-blue-600 font-bold text-lg">Wordpress Dev.</p>
            <p>1-5 Years of exp</p>
          </div>
        </div>

        <div className="flex gap-4 mt-8">
          <div className="">
            <img
              src="/wix.svg"
              alt=""
              className="bg-blue-600 p-2 pt-5 pb-5 border rounded-xl"
            />
          </div>
          <div>
            <p className="text-blue-600 font-bold text-lg">Python Developer</p>
            <p>1-5 Years of exp</p>
          </div>
        </div>
      </div>

      {/* for smaller scrren */}
      <div className="flex gap-1">
        <div className="sm:hidden block mt-10 mb-[80px]">
          <p className="font-bold text-2xl">Services</p>
          <img src="/underBreakLine.svg" alt="" className="mt-2 mb-8" />
          <p className="mt-4">Web Development</p>
          <p className="mt-4">App Development</p>
          <p className="mt-4">UI / UX Design</p>
          <p className="mt-4">Hubspot Integration</p>
          <p className="mt-4">Email Marketing</p>
          <p className="mt-4">Website Migration</p>
        </div>

        <div className="sm:hidden block mt-10">
          <p className="font-bold text-2xl">Career</p>
          <img src="/underBreakLine.svg" alt="" className="mt-2" />
          <div className="flex gap-4 mt-8">
            <div className="">
              <img
                src="/react.svg"
                alt=""
                className="bg-blue-600 p-2 border rounded-xl"
              />
            </div>
            <div>
              <p className="text-blue-600 font-bold text-lg">ReactJs Dev.</p>
              <p>1-5 Years of exp</p>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <div className="">
              <img
                src="/wordpress.svg"
                alt=""
                className="bg-blue-600 p-2 border rounded-xl"
              />
            </div>
            <div>
              <p className="text-blue-600 font-bold text-lg">Wordpress</p>
              <p>1-5 Years of exp</p>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <div className="">
              <img
                src="/wix.svg"
                alt=""
                className="bg-blue-600 p-2 pt-5 pb-5 border rounded-xl"
              />
            </div>
            <div>
              <p className="text-blue-600 font-bold text-lg">
                Python Developer
              </p>
              <p>1-5 Years of exp</p>
            </div>
          </div>
        </div>
      </div>

      {/* for bigger screen */}
      <div className="sm:block hidden">
        <p className="font-bold text-2xl">Subscribe Us</p>
        <img src="/underBreakLine.svg" alt="" className="mt-2" />
        <p className="mt-4 font-medium text-lg">
          It is a long established <br /> fact that a reader will be distracted{" "}
          <br /> by the readable
        </p>

        <div>
          <input
            type="text"
            placeholder="Email"
            className="mt-6 pl-4 pr-4 bg-[#E2E2E2] border-black border-2 pt-2 pb-2 rounded-xl"
          />
        </div>
        <button className="bg-blue-600 text-white p-2 border rounded-xl pr-4 pl-4 mt-4 ml-[140px]">
          Submit
        </button>
      </div>

      {/* for smaller screen */}
      <div className="block sm:hidden">
        <p className="font-bold text-2xl">Subscribe Us</p>
        <img src="/underBreakLine.svg" alt="" className="mt-2" />
        <p className="mt-2 font-normal text-lg">
          It is a long established fact that a reader will be distracted by the
          readable
        </p>

        <div>
          <input
            type="text"
            placeholder="Email"
            className="mt-2 pl-4 pr-4 bg-[#E2E2E2] border-black border-2 pt-2 pb-2 rounded-xl"
          />
        </div>
        <button className="bg-blue-600 text-white p-2 border rounded-xl pr-4 pl-4 mt-2 ml-[2px]">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Footer;
