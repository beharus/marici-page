import React from "react";
import Left from "./columbs/left";
import Right from "./columbs/right";

function Step3(props) {
  return (
    <div className="mx-[4%] mt-20 lg:mx-0 text-center font-poppins">
      <span className=" font-semibold leading-[38px] text-[25px] text-[#3D82F2]">
        STEP 3
      </span>
      <h1 className=" font-semibold text-[75px] text-white leading-[112px]">
        Send Emails & Text MessagesА
      </h1>
      <p className=" text-[30px] text-[#707070] font-normal mb-8 ">
        No more going through a social platform. Reach and engage your audience
        <br />
        directly over email and text massage.
      </p>

      <div className=" mt-[190px] lg:flex justify-between">
        <Left />
        <Right />
      </div>
    </div>
  );
}

export default Step3;
