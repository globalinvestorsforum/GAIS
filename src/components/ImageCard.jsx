import React from "react";

const ImageCard = ({ image, title, desc }) => {
  return (
    <div
      className="border relative border-neutral-700 rounded-xl  h-[250px]  
                 bg-clip-border bg-center bg-cover   hover:border-white   hover:shadow-md transition  ease-in-out delay-150 hover:-translate-xy-2 hover:scale-105 duration-300 ...  "
      style={{ backgroundImage: `url(${image})` }}
    >

      <div className="bg-transparent absolute flex-col text-center flex-wrap content-center rounded-xl w-full h-full   hover:backdrop-blur-[5px] hover:backdrop-brightness-50 duration-200 ">
        <h4 className="sm:text-xl  font-bold bg-transparent  ">
          {title}
        </h4>
        <p className="mt-2  bg-transparent ">{desc}</p>
      </div>
    </div>
  );
};

export default ImageCard;
