import React from "react";
import Left from "./columbs/left";
import Right from "./columbs/right";

function Step1(props) {
  return (
    <div className="mx-[4%] lg:mx-0 text-center font-poppins">
      <span className=" font-semibold leading-[38px] text-[25px] text-[#3D82F2]">
        STEP 1
      </span>
      <h1 className=" font-semibold text-[75px] text-white leading-[112px]">
        Connect Your Content
      </h1>
      <p className=" text-[30px] text-[#707070] font-normal mb-8 ">
        Bring all of your content together and get a Homepage that
        <br/>
        automatically updates whenever you create anywhere online.
      </p>
      <button
        href=""
        className="px-[72px] py-[22px] rounded-lg mb-24 border-2 border-[#707070] text-[#707070] hover:border-[#bdbdbd] hover:text-[#bdbdbd] hover:bg-[#f6f6f626] mx-[13px] duration-300"
      >
        View Avaliable Sources
      </button>


      <div className=" mt-[190px] lg:flex justify-between">
        <Left />
        <Right />
      </div>
    </div>
  );
}

export default Step1;
