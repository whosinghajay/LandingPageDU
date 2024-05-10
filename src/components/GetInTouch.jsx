import React from "react";

const GetInTouch = () => {
  return (
    // bg-blue-950
    //text-[#0A80DA]
    <div className="mt-10 sm:mt-[100px] pt-10 sm:pt-[100px]  bg-gradient-to-r from-[#000428] to-[#004e92]">
      <p className="max-w-fit mr-auto ml-auto text-[#0A80DA] font-semibold text-lg sm:text-2xl">
        \Get in Touch\
      </p>
      <p className="max-w-fit mr-auto ml-auto text-white font-bold text-2xl sm:text-4xl">
        Hey! Let's Talk
      </p>

      <div className="flex max-w-fit mr-auto ml-auto mt-10 gap-[5px] sm:gap-[40px]">
        <div className="bg-white border rounded-xl mb-[100px]">
          <form action="" className="flex flex-col p-8">
            <input
              type="text"
              placeholder="Name"
              className="mb-2 border-2 rounded-md bg-slate-50 pt-2 pb-2 pl-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="mb-2 border-2 rounded-md bg-slate-50 pt-2 pb-2 pl-2"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="mb-2 border-2 rounded-md bg-slate-50 pt-2 pb-2 pl-2"
            />
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              className="hidden sm:block mb-2 border-2 rounded-md bg-slate-50 pt-2 pl-2"
              cols={80}
              rows={6}
            ></textarea>
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              className="sm:hidden block mb-2 border-2 rounded-md bg-slate-50 pt-2 pl-2"
              cols={30}
              rows={4}
            ></textarea>
          </form>
          <button className="bg-blue-600 ml-8 mb-8 mt-[-20px] text-md text-white pl-4 pr-4 pt-2 pb-2 border rounded-[10px]">
            Send Now
          </button>
        </div>
        <div>
          <div>{/* <img src="/callIcon.svg" alt="" /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
