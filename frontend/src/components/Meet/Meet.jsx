import React from "react";
import Banner from "./Banner";
import Card from "./Card";
import SecondCard from "./SecondCard";
import { meetMainTwoCards , meetMainThreeCards} from "../../constants";
import { Reveal } from "../../utils/Reveal";

const Meet = () => {
  return (
    <>
      <section>
        <div
          className="w-full min-h-screen bg-no-repeat bg-cover bg-center  border-b border-neutral-800 md:py-20 sm:py-10"
          style={{
            backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/gais-f3e13.appspot.com/o/assets%2Finvestors_background.png?alt=media&token=ff5896d7-bd83-49b0-9854-dc8dd126ca45') `,
          }}
        >
          <div className="flex flex-col justify-end items-end pt-10 text-end mx-2">
            <h1 className="text-3xl md:text-5xl lg:text-6xl md:max-w-2xl max-w-52 right-0 font-bold text-blue-950  mb-3 tracking-wide animate-slidein [--slidein-delay:300ms]  opacity-0">
              GLOBAL INVESTORS MEET
            </h1>
            <p className="lg:text-4xl md:text-3xl md:mt-7 mt-5 text-xl  text-blue-950 md:w-1/2 animate-slidein [--slidein-delay:400ms]  opacity-0">
              WHERE AI INNOVATION MEETS INVESTMENT POWERHOUSE
            </p>
            <p className="lg:text-3xl md:text-3xl text-lg md:mt-7 mt-5 md:max-w-3xl max-w-56 font-semibold  text-white animate-slidein [--slidein-delay:500ms]  opacity-0">
              BE AMONG THE FIRST TO DISCOVER THE NEXT BIG AI-POWERED REVOLUTION
              BEFORE IT EXPLODES ONTO THE SCENE.
            </p>
          </div>
        </div>
      </section>
      <section>
        <section className="border-y border-neutral-500">
          <div className="w-full h-[320px] bg-gradient-to-r from-orange-700 to-purple-600">
            <div className=" flex-col text-center   content-center  w-full h-full ">
              <Reveal>
              <p className="mt-2  bg-transparent md:w-2/3 sm:w-full mx-auto p-3 md:text-xl text-neutral-200 ">
                Welcome to the
                <span className="font-bold"> Global Investors Meet</span>, the
                pivotal networking event at the world's largest Al summit in the
                Netherlands! This exclusive gathering connects{" "}
                <span className="font-bold">visionary investors</span> like
                venture{" "}
                <span className="font-bold">
                  capitalists, angel investors, and private equity firms with
                  the most promising Al-powered startups
                </span>{" "}
                brimming with game-changing solutions.
              </p>
              </Reveal>
            </div>
          </div>
        </section>
      </section>
      <section className=" bg-white">
        <Reveal width="">
        <h1 className="md:mx-auto md:w-4/5  w-full pt-20 text-2xl lg:text-5xl md:text-4xl text-center font-semibold tracking-wide text-neutral-900 ">
          WHY IS THIS A MUST-ATTEND EVENT FOR INVESTORS?
        </h1>
        </Reveal>
        <div className="md:p-10 p-5  place-content-center place-items-center grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-2 gap-0 ">
          {meetMainTwoCards.map((main, index) => (
            <Card
              className=""
              key={index}
              image={main.imgURL}
              title={main.title}
              desc={main.discription}
            />
          ))}
        </div>
      </section>
      <section className=" bg-white">
        <div className="md:px-14 p-5  pb-20 md:items-stretch   place-content-center place-items-center grid sm:grid-cols-1  md:grid-cols-3  gap-0">
            {meetMainThreeCards.map((main, index) => (
              <SecondCard
              key={index}
              title={main.title}
              desc={main.discription}
              image={main.imgURL}
              orderStyle={index === 1 ? 'order-2' : ''}
              style={index === 1 ? 'rounded-t-none rounded-b-xl  md:mt-6  ' : ''}
              />
            ))}
        </div>
      </section>
      <Banner />
    </>
  );
};

export default Meet;
