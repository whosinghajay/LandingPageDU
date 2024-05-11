import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const WebDev = () => {
  return (
    <>
      {/* next hero section */}

      <div className="max-w-full bg-gradient-to-b from-[#E0FBE2] to-white">
        <div className="h-[700px] max-w-fit mr-auto ml-auto flex">
          <div className="w-[50%] pl-[22rem] pt-[10rem]">
            <p className="font-semibold text-xl mb-[18px]">
              Marketing Solutions
            </p>
            <p className="font-bold text-6xl mb-[30px]">Email Marketing</p>
            <p className="font-semibold text-xl mb-[30px] pr-[6rem]">
              Struggling to find PPC experts who really understand your business
              and can actually drive long term results? Our world-class
              marketers would love to help your business thrive!
            </p>

            <button className="flex place-items-center gap-1 text-white bg-black p-2 pl-4 pr-4 border rounded-xl">
              Get A Free Audit <FaArrowRight />
            </button>
          </div>
          <div className="w-[50%] pl-[12rem] pt-[6rem]">
            <img
              src="/nextHero.jpg"
              alt="nextHeroImage"
              className="border rounded-[40px] w-[500px]"
            />
          </div>
        </div>
      </div>

      {/* <div className="h-[700px] flex flex-col sm:flex-row bg-gradient-to-b from-[#E0FBE2] to-white">
        <div className="m-10 sm:m-[10rem] sm:ml-[350px]">
          <p className="font-semibold text-xl mb-[18px]">Marketing Solutions</p>
          <p className="font-bold text-6xl mb-[30px]">Email Marketing</p>
          <p className="font-semibold text-xl mb-[30px]">
            Struggling to find PPC experts who really understand your business
            and can actually drive long term results? Our world-class marketers
            would love to help your business thrive!
          </p>

          <button className="flex place-items-center gap-1 text-white bg-black p-2 pl-4 pr-4 border rounded-xl">
            Get A Free Audit <FaArrowRight />
          </button>
        </div>
        <div className="m-6 sm:m-[10rem] sm:mr-[350px]">
          <img
            src="/nextHero.jpg"
            alt="nextHeroImage"
            className="border rounded-[40px] w-[1000px] sm:w-[1500px] "
          />
        </div>
      </div> */}

      {/* second section */}

      <div className="max-w-full">
        <div className="max-w-fit mr-auto ml-auto flex">
          <div className="w-[60%] pl-[22rem] pr-1">
            <p className="text-5xl font-bold">
              ROI-Driven paid search optimization
            </p>
            <p className="text-md pr-[13rem] pt-[2rem]">
              Our relationship with you relies on getting results, and paid
              search marketing results are measured in ROI. Each and every day,
              our primary focus is building ROI by interpreting real data and
              creating campaigns that convert. This includes:
            </p>
          </div>
          <div className="w-[40%] border-l-2 pl-[5rem]">
            <ul className="text-md leading-10">
              <li className="flex place-items-center gap-2">
                <FaCheckCircle size={22} />
                Keyword and competitor research
              </li>
              <li className="flex place-items-center gap-2">
                <FaCheckCircle size={22} />
                SKAGS: single keyword ad groups
              </li>
              <li className="flex place-items-center gap-2">
                <FaCheckCircle size={22} />
                Negative keyword pruning
              </li>
              <li className="flex place-items-center gap-2">
                <FaCheckCircle size={22} />
                Ad copy optimization
              </li>
              <li className="flex place-items-center gap-2">
                <FaCheckCircle size={22} />
                Landing page creation & optimization
              </li>
              <li className="flex place-items-center gap-2">
                <FaCheckCircle size={22} />
                Search engine retargeting
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebDev;
