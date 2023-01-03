import React from 'react';
import logo from '../../../img/logo.png'

function Bottom(props) {
    return (
        <div className=' pt-10  font-poppins text-white flex justify-between mt-52 mb-24'>
            <div className=" text-4xl font-extrabold leading-10 flex items-center">
                <img src={logo} alt="" /><span className=' px-4' >Marico</span>
            </div>
            <div className=" font-medium text-xl text-[#707070] leading-8 my-auto">
                <span className=' px-[19px] hover:text-[#3C82F4] transition-all duration-300 cursor-pointer'>About</span>
                <span className=' px-[19px] hover:text-[#3C82F4] transition-all duration-300 cursor-pointer'>Pricing</span>
                <span className=' px-[19px] hover:text-[#3C82F4] transition-all duration-300 cursor-pointer'>Blog</span>
                <span className=' px-[19px] hover:text-[#3C82F4] transition-all duration-300 cursor-pointer'>Sign in</span>
            </div>
        </div>
    );
}

export default Bottom;