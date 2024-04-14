import React from "react";

const ImageCard = ({ image, title, desc }) => {
  return (
    <div className="border flex border-neutral-700 rounded-xl  h-[250px] bg-gradient-to-r from-orange-700 to-purple-600 hover:border-white hover:shadow-md transition ease-in-out delay-150 hover:-translate-xy-2 hover:scale-105 duration-300 cursor-pointer">
      <div className="bg-transparent w-1/2 p-4 text-wrap  content-center rounded-xl ">
        <h4 className="sm:text-xl font-bold text-neutral-200">{title}</h4>
        <p className="mt-2 text-neutral-300">{desc}</p>
      </div>
      <div className="w-1/2">
        <img src={image} alt="" className="object-cover w-full h-full rounded-xl" />
      </div>
      
    </div>
  );
};

export default ImageCard;
