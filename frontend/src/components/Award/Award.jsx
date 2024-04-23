import React from "react";
import { benefitListAwardPage, selectionListAwardPage } from "../../constants";
const Award = () => {
  return (
    <section>
      <div className="w-full min-h-screen  bg-gradient-to-r from-slate-900 to-blue-900  border-b border-neutral-800 md:py-20 sm:py-10">
        <div className="md:flex flex-wrap">
        <div className="md:px-10 px-5 pt-3 md:w-2/5 ">
          <h1 className="text-3xl md:text-5xl lg:text-6xl  font-bold text-neutral-300 text-start mb-3 tracking-wide">
            GAIS AWARD CEREMONY
          </h1>
          <h3 className="font-bold text-2xl py-8">
            Welcome to the pinnacle of AI excellence - The Innovative AI-Powered
            Startup Award Ceremony!
          </h3>
          <p className="text-xl  ">
            In the heart of the Netherlands, where innovation converges with
            technology, we proudly announce the launch of "The Innovative
            AI-Powered Startup Award." This prestigious ceremony is a tribute to
            the trailblazing startups that have seamlessly integrated artificial
            intelligence into their business operations, propelling industries
            into the future with their groundbreaking solutions.
          </p>
        </div>
        <div className="md:w-3/5 flex justify-center items-center pt-5">
          <div className="bg-gradient-to-r from-red-400 to-blue-500 h-[350px] w-[300px] flex justify-center items-center">
            <p className="text-4xl  font-bold p-5">THE INNOVATIVE AI-POWERED STARTUP AWARD.</p>
          </div>
        </div>
        </div>
        
        <div className="md:px-10 px-5  mt-3 w-full">
          <h2 className="text-2xl font-bold pt-8">
            Benefits of Participating:
          </h2>
          <div className="md:px-20 ps-10">
            <ul className="list-disc ">
              {benefitListAwardPage.map((list, index) => (
                <li className="pt-4 text-xl">
                  <span className="font-bold">{list.head}</span>: {list.desc}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="md:px-10 px-5 pt-10">
          <h2 className="font-bold text-2xl">Opportunity to Register:</h2>
          <p className="py-5 text-xl">
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
                <li className="pt-4 text-xl">
                  <span className="font-bold">{list.head}</span>: {list.desc}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="px-10 font-bold text-xl py-5">Don't miss this chance to be at the forefront of AI innovation. Register now and position your startup among the visionaries shaping the future of technology.</div>
        <button className="bg-gradient-to-r my-8 mx-10 from-orange-500 to-purple-600 lg:min-w-60 md:w-44 sm:w-40 py-3 px-3 rounded-md border">
          REGISTER YOUR INTEREST
        </button>
      </div>
    </section>
  );
};

export default Award;
