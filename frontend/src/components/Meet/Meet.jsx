import React from "react";
import Banner from "./Banner";

const Meet = () => {
  return (
    <>
      <section>
        <div
          className="w-full min-h-screen bg-no-repeat bg-cover border-b border-neutral-800 md:py-20 sm:py-10"
          style={{
            backgroundImage: `url('https://www.global-investors-forum.com/GAIS/assets/images/investors_background.png') `,
          }}
        >
          <div className="flex flex-col md:justify-end md:items-end sm:justify-center pt-2 me-3 ">
            <h1 className="text-3xl md:text-5xl lg:text-6xl  font-bold text-blue-950 text-end mb-3 tracking-wide">
              GLOBAL INVESTORS MEET
            </h1>
            <p className="lg:text-4xl md:text-3xl mt-3 sm:text-sm text-end text-blue-950 md:w-1/2 sm:w-full md:me-3">
              WHERE AI INNOVATION MEETS INVESTMENT POWERHOUSE
            </p>
          </div>
          <div className="flex flex-col space-y-0 items-end text-end my-7 text-xl font-medium text-white">
            <p className="md:w-2/3 sm:w-full sm:pe-4 sm:justify-center md:justify-end  text-neutral-900">
              Welcome to the{" "}
              <span className="font-bold">Global Investors Meet</span>, the
              pivotal networking event at the world's largest Al summit in the
              Netherlands! This exclusive gathering connects{" "}
              <span className="font-bold">visionary investors</span> like
              venture{" "}
              <span className="font-bold">
                capitalists, angel investors, and private equity firms with the
                most promising Al-powered startups
              </span>{" "}
              brimming with game-changing solutions.
            </p>
          </div>
          <div className="mx-auto pt-5 w-2/3">
            <p className="text-xl md:text-2xl lg:text-3xl text-blue-950  font-bold tracking-wide ">
              "BE AMONG THE FIRST TO DISCOVER THE NEXT BIG AI-POWERED REVOLUTION
              BEFORE IT EXPLODES ONTO THE SCENE."
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="min-h-screen">
          <h1 className="mx-auto w-4/5 text-3xl lg:text-6xl md:text-5xl text-center tracking-wide">WHY IS THIS A MUST-ATTEND EVENT FOR INVESTORS?</h1>
        </div>
      </section>
      <Banner />
    </>
  );
};

export default Meet;
