import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import img from "../../img/logo.png";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="fixed w-screen px-[5%] -mx-[5%] bg-black">
        <div className="">
          <div className=" flex justify-between items-center h-16">
            <div className="flex items-center ">
              <div className=" text-white text-4xl font-extrabold leading-10 flex items-center">
                <img src={img} alt="" />
                <span className=" px-4">Marico</span>
              </div>
              <div className="hidden lg:flex justify-between">
                <div className=" font-medium text-xl text-[#707070] leading-8 my-auto">
                  <span className=" px-[19px] hover:text-[#3C82F4] transition-all duration-300 cursor-pointer">
                    Use Cases
                  </span>
                  <span className=" px-[19px] hover:text-[#3C82F4] transition-all duration-300 cursor-pointer">
                    About
                  </span>
                  <span className=" px-[19px] hover:text-[#3C82F4] transition-all duration-300 cursor-pointer">
                    Pricing
                  </span>
                  <span className=" px-[19px] hover:text-[#3C82F4] transition-all duration-300 cursor-pointer">
                    Blog
                  </span>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center border-none justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-slate-500"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>

            <div className=" text-right hidden md:block">
              <a href="">
                <span className="font-medium text-xl text-[#707070] leading-8 px-[19px] hover:text-[#3C82F4] transition-all duration-300 cursor-pointer">
                  Sign in
                </span>
              </a>
              <a
                href=""
                className="font-medium text-xl text-white leading-8 px-5 py-3 bg-[#306EF7] hover:bg-[#0051ff] duration-300 rounded-lg"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-150 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
          className="h-screen"
        >
          {(ref) => (
            <div
              className="md:hidden bg-slate-800 w-1/2 rounded-lg mx-auto mt-[30vh]"
              id="mobile-menu"
            >
              <div ref={ref} className="px-6 pt-6 pb-8 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Dashboard
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Team
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Calendar
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Reports
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
