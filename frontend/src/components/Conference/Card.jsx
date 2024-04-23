import React from "react";
import { cards } from "../../constants";
import ImageCard from "./ImageCard";
const Card = () => {
  return (
    <div className="mt-20">
      <div className="md:m-10 mt-20 m-5  grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4  ">
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
