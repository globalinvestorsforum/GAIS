import React from "react";
import FooterItem from "./FooterItem";
import { footerItems } from "../../constants";
import { AiOutlineGlobal, AiOutlineLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="w-full pt-10 border-t border-neutral-800">
      <div className=" max-w-[1240px] mx-auto py-15 px-4 grid lg:grid-cols-3 gap-8  ">
        <div className="mx-auto">
          <div className="flex  md:justify-center lg:justify-start items-center  ">
            <span>
              <AiOutlineGlobal className="fill-yellow-600 text-8xl me-2" />
            </span>
            <h3 className="text-wrap w-40 text-3xl  font-bold ">
              Global Investors Forum
            </h3>
          </div>
          <p className="py-4 lg:text-start md:text-center sm:text-center text-neutral-400">
            Connecting world through one platform.
          </p>
          <div className="flex justify-between md:w-[65%] sm:w-[50%] mt-3 sm:mx-auto lg:mx-0 hover:cursor-pointer ">
            <AiOutlineLinkedin size={30} className=" hover:fill-blue-800 ..." />
            <BsMedium size={30} className="hover:fill-neutral-800" />
            <BiLogoGmail size={30} className=" hover:fill-red-900 ..." />
            <FaGithubSquare size={30} className=" hover:fill-blue-800 " />
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6 ">
          {footerItems.map((category, index) => (
            <FooterItem key={index} category={category} />
          ))}
        </div>
      </div>
      <p className="text-center pt-3 pb-7 font-medium mx-2 text-wrap text-neutral-400">
        Global Investors Forum &copy; 2024 All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
