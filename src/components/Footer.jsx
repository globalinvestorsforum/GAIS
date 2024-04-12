import React from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import FooterItem from "./FooterItem";
import { footerItems } from "../constants";


const Footer = () => {
  return (
    <div className="w-full pt-10 border-t border-neutral-800">
      <div className=" max-w-[1240px] mx-auto py-15 px-4 grid lg:grid-cols-3 gap-8  text-white">
        <div>
        <div className="flex sm:justify-center md:justify-center lg:justify-start items-center ">
        <span><AiOutlineGlobal className='fill-yellow-600 text-8xl me-2'/></span>
          <h3 className="text-wrap w-40 text-3xl  font-bold ">
            Global Investors Forum
          </h3>
        </div>
          
          <p className="py-4 lg:text-start md:text-center sm:text-center ">
            Connecting world through one platform.
          </p>
          <div className="flex justify-between md:w-[75%] my-6">
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6 ">  
            {footerItems.map((category, index) => (
              <FooterItem key={index} category={category} />
            ))}
        </div>
      </div>
      <p className="text-center pt-3 pb-7 font-medium mx-2 text-wrap">Global Investors Forum &copy; 2024 All Rights Reserved</p>
    </div>
  );
};

export default Footer;
