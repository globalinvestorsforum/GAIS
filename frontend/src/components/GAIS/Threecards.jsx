import React from "react";
import { Reveal } from "../../utils/Reveal";
import { RevealLeft } from "../../utils/RevealLeft";
import { RevealRight } from "../../utils/RevealRight";

const Threecards = () => {
  return (
    <section className="border-y border-neutral-500">
      <div className=" min-h-screen bg-gradient-to-r from-orange-700 to-purple-600 md:py-5 ">
        <div className=" lg:flex md:m-5">
          <div className="lg:w-1/3  pt-5">
            <div className="flex-wrap">
              <RevealLeft>
                <h1 className="md:px-10 px-5 md:pb-3 md:py-0 py-3 text-3xl md:text-4xl lg:text-4xl  font-bold ">
                  Workshops
                </h1>
              </RevealLeft>
              <RevealLeft>
                <p className="md:px-10 px-5  pb-5  md:text-lg text-base ">
                  Dive deeper than theory. Get your hands dirty with immersive,
                  industry-specific workshops led by AI pioneers. Master
                  practical skills and unlock the true potential of AI in your
                  field. From healthcare to finance, marketing to robotics,
                  there's a workshop to ignite your AI journey.
                </p>
              </RevealLeft>
              <Reveal>
                <div className=" flex justify-center pt-3">
                  <img
                    className="lg:w-[85%] md:w-[95%] w-[100%]"
                    src="https://firebasestorage.googleapis.com/v0/b/gais-f3e13.appspot.com/o/assets%2FWorkshops-img.jpg?alt=media&token=073237b3-bbb2-4bda-a4b8-6c05fe2404da"
                    alt=""
                  />
                </div>
              </Reveal>
            </div>
          </div>
          <div className="lg:w-1/3  flex flex-wrap  pt-5">
            <div className=" md:p-5 p-0  lg:order-none order-1">
              <Reveal>
                <img
                  className=""
                  src="https://firebasestorage.googleapis.com/v0/b/gais-f3e13.appspot.com/o/assets%2FStartup-img.jpg?alt=media&token=0911cd41-c005-4487-86ee-9f9b8488d835"
                  alt=""
                />
              </Reveal>
            </div>

            <Reveal>
              <h1 className="md:px-5 text-3xl md:text-4xl lg:text-4xl px-5 md:pb-3 md:py-0 py-3  font-bold ">
                Startup pitches
              </h1>
            </Reveal>
            <Reveal>
              <p className="md:px-5 px-5 pb-5 md:text-lg text-base ">
                Witness the future unfold before your eyes. Witness the
                brightest AI-powered startups pitch their groundbreaking
                solutions, from healthcare to finance to climate change. Get a
                front-row seat to disruptive innovation, spot the next unicorn,
                and network with the trailblazers shaping tomorrow.
              </p>
            </Reveal>
          </div>

          <div className="lg:w-1/3  pt-5">
            <RevealRight>
              <h1 className="md:px-10 text-3xl md:text-4xl lg:text-4xl  px-5 md:pb-3 md:py-0 py-3  font-bold ">
                Innovative AI solutions
              </h1>
            </RevealRight>
            <RevealRight>
              <p className="md:px-10 px-5 pb-5 md:text-lg text-base ">
                <strong>See the future,</strong> now. Explore a showcase of
                cutting-edge AI applications and trends that are transforming
                industries.{" "}
                <strong>
                  Learn from experts, uncover hidden opportunities to leverage
                  AI in your business,
                </strong>{" "}
                and gain the competitive edge you need to thrive in the age of
                intelligence. From groundbreaking medical breakthroughs to
                groundbreaking marketing strategies, the future is here, waiting
                to be unlocked.
              </p>
            </RevealRight>
            <Reveal>
              <div className=" p-0 flex lg:justify-end justify-center bottom-0  lg:order-none order-1">
                <img
                  className="w-[60%]"
                  src="https://firebasestorage.googleapis.com/v0/b/gais-f3e13.appspot.com/o/Tranparent%2FIMG_20240502_082807.png?alt=media&token=98209504-f5ba-459a-808a-01597fa9c0f1"
                  alt=""
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Threecards;
