import React from "react";
import bg from "../../img/Image (17).png";

function NumberCreators(props) {
  return (
    <div className="relative -mx-[5%] my-44">
      <img className=" w-screen -z-0" src={bg} alt="" />
      <p className=" mx-[5%] font-poppins text-white z-10 font-semibold text-[40px] lg:text-[50px] xl:text-[60px] text-center leading-[105px] absolute left-0 right-0 top-[40%] ">
        We've helped over 1,000 creatorsre
        <br />
        claim control of their audience.
      </p>
    </div>
  );
}

export default NumberCreators;
