import React from "react";
import { gaisCards } from "../../constants";
import Card from "./Card";
import Banner from "./Banner";

const Gais = () => {
  return (
    <>
      <section>
        <div
          className="w-full h-screen bg-no-repeat bg-cover  border-b border-neutral-800 "
          style={{
            backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/gais-f3e13.appspot.com/o/assets%2Flanding_img.png?alt=media&token=a104f4b6-ac45-4187-a3c9-e230cc496f0a')`,
          }}
        >
          <div className="w-full h-full backdrop-blur-[1px] backdrop-brightness-40">
          <div className="max-w-6xl mx-auto pt-20  md:pt-40 lg:pt-48  ">
            <div className="flex flex-col items-start mt-6 ">
              <h2 className="text-2xl px-3  md:text-4xl lg:text-5xl text-start tracking-wide font-bold">
                DON'T LEFT BEHIND IN YOUR BUSINESS WHEN THE ENTIRE WORLD
                IMPLEMENTING AI IN THEIR OPERATIONS. JOIN US TO LEARN THE LATEST
                ADVANCEMENTS OR TRENDS OF AI.
              </h2>
              <p className="pt-5 px-3  text-lg md:text-1xl lg:text-2xl font-semibold  text-neutral-200 ">
                18th-19th June, 2024.
              </p>
              <p className="pt-2 px-3 text-lg md:text-1xl lg:text-2xl font-semibold    text-neutral-200 ">
                Amsterdam, Netherlands.
              </p>
              <hr className="h1   mt-3 divide-x font-bold  w-1/3  mx-3" />
              <p className="pt-3 px-3 text-lg md:text-1xl lg:text-2xl  text-neutral-200 ">
                World's largest AI summit in true sense.
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>
      <section>
        <div className="h-[600px]  bg-neutral-300 text-blue-950">
          <div className="p-5 pt-20 md:p-32 text-center ">
            <div className="flex w-full ">
              <div className="w-1/2 font-extrabold text-8xl">
                0+
                <p className="text-3xl  md:text-4xl font-thin">
                  Expected Visitors
                </p>
              </div>
              <div className="w-1/2 font-extrabold text-8xl">
                0+
                <p className="text-3xl  md:text-4xl font-thin">
                  Networking & Meetings
                </p>
              </div>
            </div>
            <div className="flex w-full pt-24  ">
              <div className="w-1/2 font-extrabold text-8xl">
                0+
                <p className="text-3xl  md:text-4xl font-thin">Conferencess</p>
              </div>
              <div className="w-1/2 font-extrabold text-8xl">
                0+
                <p className="text-3xl  md:text-4xl font-thin">Speakers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full h-[520px] bg-gradient-to-r from-orange-700 to-purple-600">
          <div className=" flex-col text-center   content-center  w-full h-full  ">
            <h3 className=" max-w-5xl mx-auto text-4xl lg:text-6xl  tracking-wide ">
              ABOUT GAIS
            </h3>
            <p className="mt-2  bg-transparent md:w-2/3 sm:w-full mx-auto p-3 md:text-[18px] text-neutral-200 ">
              Global Artificial Intelligence Summit (GAIS) is the world's
              largest iconic platform that brings together the all leading AI
              businesses, Innovators, Consultancies, most desirable startups,
              several government agencies, investors, decision makers,
              technologists, academia, thought leaders and several associations
              - to stimulate the industry growth, change the investment
              landscape and share the practically proven innovative ideas. GAIS
              will have participants from 55+ countries that represents a wide
              range of industries includes food and agriculture, energy and
              manufacturing, financial services, healthcare, and transportation
              and logistics that offers an exclusive opportunity to directly
              hear from the senior leaders and C-suite speakers about industry
              leading solutions and interact with them in person.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div
          className="min-h-[800px] bg-cover"
          style={{
            backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/gais-f3e13.appspot.com/o/assets%2Fjoinbackground.png?alt=media&token=c5916a2c-a1f8-41cc-80f8-e9e08918f9eb')`,
          }}
        >
          <h1 className="mx-auto pt-20 text-neutral-900 text-3xl lg:text-5xl md:text-4xl text-center font-bold tracking-wide">
            WHY JOIN?
          </h1>
          <div className="px-20 py-10 grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8   ">
            {gaisCards.map((card,index)=>(
              <Card
              key={index}
              imgUrl={card.imgURL}
              head={card.title}
              desc={card.discription}
              />
            ))}
          </div>
        </div>
      </section>
      <Banner/>
    </>
  );
};

export default Gais;
