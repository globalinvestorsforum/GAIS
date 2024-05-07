import React from "react";
import { benefitListAwardPage, selectionListAwardPage } from "../../constants";
import { Link } from "react-router-dom";
const Award = () => {
  return (
    <section>
      <div className="w-full min-h-screen  bg-gradient-to-r from-slate-900 to-blue-900  border-b border-neutral-800  md:py-20 py-10">
        <div className="md:flex flex-wrap">
        <div className="md:px-10 px-5 pt-10 md:w-2/5 ">
          <h1 className="text-4xl md:text-5xl text-wrap lg:text-6xl md:max-w-2xl max-w-40  font-bold text-neutral-300 text-start mb-3 tracking-wide animate-slidein [--slidein-delay:300ms]  opacity-0">
            GAIS AWARD CEREMONY
          </h1>
          <h3 className=" text-xl font-bold  md:text-2xl py-8 animate-slidein [--slidein-delay:400ms]  opacity-0">
            Welcome to the pinnacle of AI excellence - The Innovative AI Powered
            Startup Award Ceremony!
          </h3>
          <p className="md:text-lg text-base  animate-slidein [--slidein-delay:600ms]  opacity-0">
            In the heart of the France, where innovation converges with
            technology, we proudly announce the launch of "The Innovative
            AI Powered Startup Award." This prestigious ceremony is a tribute to
            the trailblazing startups that have seamlessly integrated artificial
            intelligence into their business operations, propelling industries
            into the future with their groundbreaking solutions.
          </p>
        </div>
        <div className="md:w-3/5 flex justify-center items-center md:pt-0 pt-14">
          <div className=" md:h-[650px] md:w-[600px] w-full">
            <img src="https://firebasestorage.googleapis.com/v0/b/gais-f3e13.appspot.com/o/Tranparent%2FIMG_20240502_082609.png?alt=media&token=c0d36ab4-3039-4029-bc8e-9883cfb91699" alt="" />
          </div>
        </div>
        </div>
        
        <div className="md:px-10 px-5  w-full">
          <h2 className="text-2xl font-bold pt-8">
            Benefits of Participating:
          </h2>
          <div className="md:px-20 ps-10 ">
            <ul className="list-disc ">
              {benefitListAwardPage.map((list, index) => (
                <li className="pt-4 md:text-lg text-base">
                  <span className="font-bold">{list.head}</span>: {list.desc}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="md:px-10 px-5 pt-10">
          <h2 className="font-bold text-2xl">Opportunity to Register:</h2>
          <p className="py-5 md:text-lg text-base">
            Are you ready to be recognized as a trailblazer in the AI landscape?
            Seize the opportunity by registering for "The Innovative AI-Powered
            Startup Award" ceremony. To qualify, your startup must meet the
            following criteria:
          </p>
        </div>
        <div className="py-5 md:px-10 px-5">
          <h2 className="font-bold text-2xl">Selection Criteria:</h2>
          <div className="md:px-20 ps-10 ">
            <ul className="list-decimal ">
              {selectionListAwardPage.map((list, index) => (
                <li className="pt-4 md:text-lg text-base">
                  <span className="font-bold">{list.head}</span>: {list.desc}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="px-10 font-bold text-lg py-5">Don't miss this chance to be at the forefront of AI innovation. Register now and position your startup among the visionaries shaping the future of technology.</div>
        <Link to={"mailto: info@global-investors-forum.com"} className="bg-gradient-to-r my-8 mx-10 from-orange-500 to-purple-600  md:w-44 sm:w-40 py-3 px-3 font-semibold">
          REGISTER NOW
        </Link>
      </div>
    </section>
  );
};

export default Award;
