import React from "react";
import img from "../../../../img/Mobile.png";

function Step2(props) {
  return (
    <div className="mx-[4%] lg:mx-0 text-center font-poppins mt-[70px]">
      <span className=" font-semibold leading-[38px] text-[25px] text-[#3D82F2]">
        STEP 2
      </span>
      <h1 className=" font-semibold text-[75px] text-white leading-[112px]">
        Share Your Homepage
      </h1>
      <p className=" text-[30px] text-[#707070] font-normal mb-8 ">
        Share your Wavium homepage link with your followers, and we'll handle
        <br />
        the rest.
      </p>

      <div className="flex flex-wrap gap-6 text-left mb-12">
        <div className=" bg-[#0D0D0D] pt-8 px-11 h-[666px] w-full lg:w-[48%] relative">
          <div className="text-[#0FC65C] mb-6 text-[30px] leading-[45px]">
            One Link
          </div>
          <div className=" text-[#919191] text-[80px] font-semibold leading-[120px]">
            ALL You Create.
          </div>
          <div className=" text-[#fff] text-[80px] font-semibold leading-[120px]">
            One Link
          </div>
          <img className=" bottom-0 absolute" src={img} alt="" />
        </div>
        <div className=" bg-[#0D0D0D] pt-8 px-11 h-[666px] w-full lg:w-[48%]">
          <div className="text-[#0FC65C] mb-6 text-[30px] leading-[45px]">
            Collect Subscribers
          </div>
          <div className=" text-[#919191] text-[80px] font-semibold leading-[120px]">
            Emails. <br />
            Phone #s.
          </div>
          <div className=" text-[#fff] text-[80px] font-semibold leading-[120px]">
            All Yours.
          </div>
        </div>
      </div>

      <button
        href=""
        className=" font-medium font-poppins text-xl text-white px-[74px] py-[24px] bg-[#326CF9] rounded-md duration-300 hover:bg-[#0048ff] mx-[13px]"
      >
        Get Started Now
      </button>
    </div>
  );
}

export default Step2;
