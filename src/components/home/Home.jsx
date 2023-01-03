import React from "react";
import text from "../../img/Main_heading.png";
import WhyCreatorsLoveMarico from "./WhyCreatorsLoveMarico/WhyCreatorsLoveMarico";

function Home(props) {
  return (
    <div className=" font-poppins text-white mt-[230px]">
      <div className=" flex justify-center">
        <img src={text} className=" w-[85%]" alt="" />
      </div>
      <div className=" font-poppins font-medium text-center text-[40px] leading-[60px] mt-32 mb-12">
        Turn your audience into email and
        <br />
        text message subscribers.
      </div>
      <div className="flex text-xl justify-center leading-[30px] font-medium">
        <a
          href=""
          className=" text-white px-[74px] py-[24px] bg-[#326CF9] rounded-md duration-300 hover:bg-[#0048ff] mx-[13px]"
        >
          Get Started Now
        </a>
        <a
          href=""
          className="px-[72px] py-[22px] rounded-lg border-2 border-[#707070] text-[#707070] hover:border-[#bdbdbd] hover:text-[#bdbdbd] hover:bg-[#f6f6f626] mx-[13px] duration-300"
        >
          View A Demo
        </a>
      </div>
      <div className=" text-[#707070] text-[25px] leading-[38px] flex justify-center items-center my-5">
        <div className=" relative rounded-full w-7 h-7 bg-[#0fc65b25]">
          <div className=" absolute rounded-full mx-auto my-auto top-0 left-0 right-0 bottom-0 bg-[#0FC65C] h-4 w-4"></div>
        </div>
        <p>
          <span className=" text-white font-bold px-[10px]">1000+</span>creators
          have already started
        </p>
      </div>
      <div className=" py-44">
        <WhyCreatorsLoveMarico />
      </div>
    </div>
  );
}

export default Home;
