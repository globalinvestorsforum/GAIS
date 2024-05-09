import React from "react";
import { Reveal } from "../../utils/Reveal";

const ImageCard = ({ image, title, desc }) => {
  return (
    <Reveal >
    <div className="border flex border-neutral-700 rounded-xl h-[250px] bg-gradient-to-r from-orange-700 to-purple-600 hover:border-white hover:shadow-md transition ease-in-out delay-150 hover:-translate-xy-2 hover:scale-105 duration-300 cursor-pointer">
      <div className=" w-1/2 md:p-4 p-2  text-wrap  content-center rounded-l-xl ">
        <h4 className="text-lg md:text-xl font-bold text-neutral-100">{title}</h4>
        <p className="mt-2 text-base text-neutral-300">{desc}</p>
      </div>
      <div className="w-1/2">
        <img
          src={image}
          alt=""
          className="object-cover w-full h-full rounded-r-xl"
        />
      </div>
    </div>
    </Reveal>
  );
};

export default ImageCard;
