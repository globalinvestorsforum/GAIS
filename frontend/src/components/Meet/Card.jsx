import React from "react";

// let image = "https://www.global-investors-forum.com/GAIS/assets/images/meet1.png"
// let title = "UNPARALLELED DEAL FLOW"
// let desc = "Gain exclusive access to a meticulously curated selection of pre-vetted, high-growth AI startups across diverse industries. Uncover the next breakthrough ventures poised to disrupt the market and generate exponential returns."

const Card = ({image , title , desc}) => {
  return (
    <div className="border flex flex-col w-full mt-6  md:w-[90%] md:h-[600px] lg:h-[500px] border-neutral-700 rounded-xl  bg-gradient-to-r from-orange-700 to-purple-600 hover:border-white hover:shadow-md transition ease-in-out delay-150 hover:-translate-xy-2 hover:scale-105 duration-300 cursor-pointer"> 
      <div className="">
        <img
          src={image}
          alt=""
          className="object-cover w-full h-[350px] rounded-t-xl "
        />
      </div>
      <div className="bg-transparent w-full p-4 text-wrap  content-center rounded-l-xl ">
        <h4 className="sm:text-xl font-bold text-neutral-200">{title}</h4>
        <p className="mt-2 text-neutral-300">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
