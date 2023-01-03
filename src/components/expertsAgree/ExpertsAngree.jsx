import React from "react";
import img from '../../img/Image (16).png'

function ExpertsAngree(props) {
  return (
    <div className="mt-[100px] lg:mx-0 text-center font-poppins">
      <h1 className=" mb-[52px] font-semibold text-[75px] text-white leading-[112px]">
        Experts Agree
      </h1>
      <img src={img} alt="" />
    </div>
  );
}

export default ExpertsAngree;
