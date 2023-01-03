import React from "react";
import Logo from "../../../img/Logo (1).png";

function Top(props) {
  return (
    <div className=" font-poppins text-white mx-auto text-center">
      <img className=" mx-auto md:py-0 py-8" src={Logo} alt="" />
      <h1 className="xl:text-[100px] lg:text-[85px] md:text-[70px] text-[60px] font-bold lg:leading-[150px] leading-[80px]">
        Get Started Now
      </h1>
      <p className="xl:text-[43px] lg:text-[35px] md:text-[28px] text-[22px] leading-[64px]">
        Setup is easy and takes under 5 minutes.
      </p>
      <button
        href=""
        className=" mt-5 text-[24px] lg:text-[30px] font-semibold text-white lg:px-[74px] lg:py-[24px] xl:px-[112px] xl:py-[28px] md:px-[54px] md:py-[22px] px-[44px] py-[20px] bg-[#326CF9] rounded-md duration-300 hover:bg-[#0048ff] mx-[13px]"
      >
        Get Started Now
      </button>
      <div className=" text-[#707070] text-[20px] lg:text-[25px] leading-[38px] flex justify-center items-center my-5">
        <div className=" relative rounded-full w-7 h-7 bg-[#0fc65b25]">
          <div className=" absolute rounded-full mx-auto my-auto top-0 left-0 right-0 bottom-0 bg-[#0FC65C] h-4 w-4"></div>
        </div>
        <p>
          <span className=" text-white font-bold px-[10px]">1000+</span>creators
          have already started
        </p>
      </div>
    </div>
  );
}

export default Top;
