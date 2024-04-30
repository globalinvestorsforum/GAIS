import React from "react";
import Banner from "./Banner";
import Card from "./Card";
import { meetMainTwoCards } from "../../constants";

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
            <p className="mt-2  bg-transparent md:w-2/3 sm:w-full mx-auto p-3 md:text-xl text-neutral-200 ">
              Welcome to the
              <span className="font-bold"> Global Investors Meet</span>, the
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
        </div>
      </section>
      </section>
      <section className=" bg-white">
          <h1 className="md:mx-auto md:w-4/5  w-full pt-20 text-2xl lg:text-5xl md:text-4xl text-center font-semibold tracking-wide text-neutral-900 ">
            WHY IS THIS A MUST-ATTEND EVENT FOR INVESTORS?
          </h1>
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
        <div className="md:px-20 p-5  pb-20  md:flex    md:justify-center md:items-center   gap-8 min-">
        <div className="border mt-2  flex flex-col w-full md:w-5/6 md:h-6/7 border-neutral-700 rounded-xl  bg-gradient-to-r from-orange-700 to-purple-600 hover:border-white hover:shadow-md transition ease-in-out delay-150 hover:-translate-xy-2 hover:scale-105 duration-300 cursor-pointer">
          
          <div className="bg-transparent w-full  p-4 text-wrap  content-center rounded-l-xl ">
            <h4 className="sm:text-xl font-bold text-neutral-200">INVEST IN THE FUTURE</h4>
            <p className="mt-2 text-neutral-300">Be at the forefront of the AI revolution. Network with industry leaders, gain insights into emerging trends, and shape the future of technology by supporting pioneering AI businesses.</p>
          </div>
          <div className="">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/gais-f3e13.appspot.com/o/assets%2Fmeetbackdrop1.png?alt=media&token=120db925-51c9-4b2c-830a-d0ea10807a05"
              alt=""
              className="object-cover w-full h-[330px] rounded-b-xl "
            />
          </div>
        </div>
        <div className="border mt-5 flex flex-col w-full md:w-5/6 md:h-6/7 border-neutral-700 rounded-xl  bg-gradient-to-r from-orange-700 to-purple-600 hover:border-white hover:shadow-md transition ease-in-out delay-150 hover:-translate-xy-2 hover:scale-105 duration-300 cursor-pointer">
          <div className="">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/gais-f3e13.appspot.com/o/assets%2Fmeetbackdrop2.png?alt=media&token=6d957964-7203-410b-8895-1de7adadfde1"
              alt=""
              className="object-cover w-full h-[350px] rounded-t-xl "
            />
          </div>
          <div className="bg-transparent w-full p-4 text-wrap  content-center rounded-l-xl ">
            <h4 className="sm:text-xl font-bold text-neutral-200">STRATEGIC COLLABORATION</h4>
            <p className="mt-2 text-neutral-300">Foster valuable connections with fellow investors, build strategic partnerships, and leverage collective expertise to navigate the dynamic AI landscape.</p>
          </div>
        </div>
        <div className="border mt-5 flex flex-col w-full md:w-5/6 md:h-6/7 border-neutral-700 rounded-xl  bg-gradient-to-r from-orange-700 to-purple-600 hover:border-white hover:shadow-md transition ease-in-out delay-150 hover:-translate-xy-2 hover:scale-105 duration-300 cursor-pointer">
          <div className="order-2">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/gais-f3e13.appspot.com/o/assets%2Fmeetbackdrop3.png?alt=media&token=878d7f6d-3e5f-41a9-b19b-4334d9dfc3b7"
              alt=""
              className="object-cover w-full h-[350px] rounded-b-xl "
            />
          </div>
          <div className="bg-transparent w-full p-4 text-wrap  content-center rounded-l-xl ">
            <h4 className="sm:text-xl font-bold text-neutral-200">INSIGHTS FROM THE EXPERTS</h4>
            <p className="mt-2 text-neutral-300">Gain invaluable knowledge through panel discussions, workshops, and keynotes featuring leading figures in the AI industry.</p>
          </div>
        </div>
        </div>
      </section>
      <Banner />
    </>
  );
};

export default Meet;
