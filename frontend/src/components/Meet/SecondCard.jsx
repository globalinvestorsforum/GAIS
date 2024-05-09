import React from "react";
import { Reveal } from "../../utils/Reveal";
const SecondCard = ({ image, title, desc, orderStyle, style }) => {
  return (
    <div className="border flex flex-col w-full mt-6  md:w-[90%] lg:min-h-[510px] border-neutral-700 rounded-xl  bg-gradient-to-r from-orange-700 to-purple-600 hover:border-white hover:shadow-md transition ease-in-out delay-150 hover:-translate-xy-2 hover:scale-105 duration-300 cursor-pointer">
      <div className={`${orderStyle}`}>
        <img
          src={image}
          alt=""
          className={`object-cover w-full h-[350px] rounded-t-xl   ${style}`}
        />
      </div>
      <div className="bg-transparent w-full p-4 text-wrap  content-center rounded-l-xl ">
        <Reveal>
          <h4 className="sm:text-xl font-bold text-neutral-200">{title}</h4>
        </Reveal>
        <Reveal>
          <p className="mt-2 text-neutral-300">{desc}</p>
        </Reveal>
      </div>
    </div>
  );
};

export default SecondCard;
