import React from "react";
import { gaisCards } from "../../constants";
import Card from "./Card";
import { Reveal } from "../../utils/Reveal";
import { RevealLeft } from "../../utils/RevealLeft";
import { RevealRight } from "../../utils/RevealRight";

const Join = () => {
  return (
    <section>
      <div
        className="min-h-[500px]  bg-cover md:bg-top bg-center "
        style={{
          backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/gais-f3e13.appspot.com/o/assets%2Fwhyjoinback.jpg?alt=media&token=983994a9-1d19-4119-b7dc-0aa7e397471d')`,
        }}
      >
        <div className="backdrop-blur-[1px]  w-full h-full backdrop-brightness-50 ">
          <h1 className="mx-auto pt-10  text-3xl lg:text-5xl md:text-4xl text-center font-bold tracking-wide">
            WHY JOIN?
          </h1>
          <div className="lg:px-20 md:px-10 px-5  md:py-10 py-5 grid lg:grid-cols-2  gap-8   ">
            {gaisCards.map((card, index) =>
              index % 2 === 0 ? (
                <RevealLeft key={index}>
                  <Card
                    imgUrl={card.imgURL}
                    head={card.title}
                    desc={card.discription}
                  />
                </RevealLeft>
              ) : (
                <RevealRight key={index}>
                  <Card
                    imgUrl={card.imgURL}
                    head={card.title}
                    desc={card.discription}
                  />
                </RevealRight>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
