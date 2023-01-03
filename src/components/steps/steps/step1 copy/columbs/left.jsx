import React from "react";

function Left(props) {
  return (
    <div className=" font-poppins text-white text-left lg:mb-auto mb-28">
      <div className=" font-medium text-[30px] leading-[45px] mb-20">
        Create & Share
      </div>
      <h1 className=" font-semibold text-[75px] lg:text-[55px] xl:text-[75px] leading-[112px]">
        Reach Your
        <br />
        Audience <span className=" text-[#3C82F4]">Directly.</span>
      </h1>
      <p className=" mt-7 mb-3 text-[23px] leading-[34px] flex">
        <div className=" mr-3 font-medium text-lg leading-[27px] w-8 h-8 bg-[#2D2D2D] flex justify-center items-center rounded-full">
          1
        </div>
        Embed content or create something new to share.
      </p>
      <p className=" mb-16 text-[23px] leading-[34px] flex">
        <div className=" mr-3 font-medium text-lg leading-[27px] w-8 h-8 bg-[#2D2D2D] flex justify-center items-center rounded-full">
          2
        </div>
        Share content over email, text message or your homepage.
      </p>

      <div className="flex text-[20px] leading-[30px] font-medium">
        <a
          href=""
          className=" text-white px-[22px] py-[16px] bg-[#326CF9] rounded-md duration-300 hover:bg-[#0048ff]"
        >
          Get Started Now
        </a>
        <a
          href=""
          className=" px-[37px] py-[16px] rounded-lg border-2 border-[#707070] text-[#707070] hover:border-[#bdbdbd] hover:text-[#bdbdbd] hover:bg-[#f6f6f626] ml-[25px] duration-300"
        >
          View A Demo
        </a>
      </div>
    </div>
  );
}

export default Left;
