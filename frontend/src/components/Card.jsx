import React from "react";
import { cards } from "../constants";
import ImageCard from "./ImageCard";
const Card = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Domains
      </h2>
      <div className="m-10 mt-20  grid sm:grid-cols-1 sm:m-10 md:grid-cols-2 lg:grid-cols-3 gap-4  ">
        {cards.map((domain, index) => (
          <div key={index} className="w-full  ">
            <ImageCard
              image={domain.backImgURL}
              title={domain.title}
              desc={domain.discription}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
