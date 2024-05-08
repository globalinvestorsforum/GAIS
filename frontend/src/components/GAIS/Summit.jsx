import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowAltCircleRight } from "react-icons/fa";
import {  gaisLogos } from "../../constants";


const Summit = () => {
  return (
    <section className="border-t border-neutral-500">
    <div className=" bg-gradient-to-r from-orange-700 to-purple-600 min-h-[700px]">
      <h1 className="py-10 px-2  text-3xl md:text-4xl lg:text-5xl   font-bold text-neutral-50 text-center  tracking-wide">
        SUMMIT DEMOGRAPHY
      </h1>
      <div className=" flex-wrap md:flex justify-center  ">
        <div className="md:w-1/2 flex justify-center ">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/gais-f3e13.appspot.com/o/assets%2Fimage1.png?alt=media&token=a1a876d7-451b-4ebb-9f43-db180a213de2"
            alt=""
            className="w-[100%]"
          />
        </div>
        <div></div>
        <div className="md:w-1/2 md:p-10 p-5 md:text-lg text-base  flex flex-wrap justify-center items-center">
          <div>
            <p>
              GAIS attracts a broad range of people who are interested in
              learning about the latest advancements, networking with
              like-minded individuals, and exploring potential business
              opportunities related to AI. Our visitor profile can vary, but
              typically includes professionals and enthusiasts from diverse
              backgrounds, such as:
            </p>
            <ul className="list-disc p-5 md:text-lg text-base ">
              <li>
                Innovative AI-Powered Startups and Fortune 500 companies.
              </li>
              <li>Researchers and academics in the field of AI.</li>
              <li>
                Associations, Chamber of commerce and business bodies.
              </li>
              <li>
                Industry professionals and executives interested in AI
                applications and trends.
              </li>
              <li>
                Entrepreneurs and startup founders developing AI-based
                products and services.
              </li>
              <li>
                Government officials and policymakers involved in AI
                regulation and policy-making.
              </li>
              <li>
                Investors and venture capitalists seeking to fund AI-related
                projects.
              </li>
              <li>
                Tech enthusiasts and students interested in learning more
                about AI and its potential impact on various industries.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className=" min-h-[400px] bg-gradient-to-r from-purple-600 to-orange-700 ">
      <div className="flex-wrap p-10 md:flex">
        <div className="w-1/2 flex flex-wrap md:justify-end justify-normal items-center">
          <h1 className="md:p-10 pb-5 lg:text-5xl md:text-4xl text-3xl mx-auto w-full font-bold md:w-4/5">
            GIAS INCORPORATED SUMMIT & CONFERENCES
          </h1>
          <div className="md:text-7xl text-6xl  md:px-12 py-5">
            <Link to={"/conference"}>
              <FaArrowAltCircleRight className="fill-black" />
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 md:p-5 py-2">
          <div className="grid md:grid-cols-3 grid-cols-2 gap-6  content-between items-center ">
            {gaisLogos.map((logo, index) => (
              <div className="flex items-center" key={index}>
                <div className="text-4xl me-3">{logo.logo}</div>
                <div className="md:text-lg text-base ">{logo.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className=" min-h-[400px] ">
      <div className="flex-wrap mp-10 md:flex bg-gradient-to-r from-orange-700 to-purple-600 ">
        <div className="md:w-1/2  flex-wrap  order-2">
          <h1 className="md:p-10 pt-10 lg:text-5xl md:text-4xl text-3xl px-5  font-bold ">
            AWARD CEREMONY
          </h1>
          <p className="md:px-12 p-5 pb-5 md:text-lg text-base ">
            Join us in celebrating trailblazing AI-powered startups that
            have transformed industries! Be part of{" "}
            <strong>
              The Innovative AI-Powered Startup Award ceremony,
            </strong>{" "}
            where we honor those who've integrated AI into business
            operations, offering groundbreaking solutions.
            <strong>
              {" "}
              Don't miss your chance to witness innovation at its peak –
              join us!
            </strong>
          </p>
          <div className="flex">
            <div className="md:text-7xl text-6xl md:px-12 p-5 ">
              <Link to={"/award"}>
                <FaArrowAltCircleRight className="fill-black" />
              </Link>
            </div>
            <div className="lg:w-[60%] md:w-[30%] mx-auto  ">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gais-f3e13.appspot.com/o/Tranparent%2FIMG_20240502_082609.png?alt=media&token=c0d36ab4-3039-4029-bc8e-9883cfb91699"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center items-center ">
          <img
            className="w-[100%] "
            src="https://firebasestorage.googleapis.com/v0/b/gais-f3e13.appspot.com/o/assets%2Faward_pic.png?alt=media&token=5d82b0a4-977c-45fe-8589-8dbda6fc0da7"
            alt=""
          />
        </div>
      </div>
    </div>

    <div className=" min-h-[400px] bg-gradient-to-r from-purple-600 to-orange-700 ">
      <div className="flex-wrap  md:flex">
        <div className="md:w-2/3 ">
          <h1 className="md:p-10 pt-10 text-3xl md:text-4xl lg:text-4xl px-5 font-bold ">
            GLOBAL INVESTORS MEET
          </h1>
          <p className="md:px-12 p-5 md:text-lg text-base ">
            Unite with the investment elite –{" "}
            <strong>VC's, Angel funds, Private Equity, and more.</strong>{" "}
            Forge direct connections between startups and investors in a
            face-to-face convergence, fostering collaboration, empowering
            startups to <strong>secure investments</strong> and fueling the
            next wave of AI-driven success.
          </p>
          <div className="md:text-7xl text-6xl px-5 md:px-12 py-5">
            <Link to={"/meet"}>
              <FaArrowAltCircleRight className="fill-black" />
            </Link>
          </div>
        </div>
        <div className="md:w-1/3 md:pt-0 pt-6  flex justify-center">
          <img
            className="w-[100%] "
            src="https://firebasestorage.googleapis.com/v0/b/gais-f3e13.appspot.com/o/assets%2Finvestors_pic.png?alt=media&token=bd653498-f8c7-4bd2-b6c8-2a6ab5bdcb07"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Summit