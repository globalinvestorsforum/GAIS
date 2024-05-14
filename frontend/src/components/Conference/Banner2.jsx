import React from "react";
import { Reveal } from "../../utils/Reveal";
const Banner2 = () => {
  return (
    <div
      className="relative border-b border-neutral-800 min-h-[450px] bg-cover "
      style={{
        backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/gais-f3e13.appspot.com/o/assets%2Fpeople.png?alt=media&token=a69f33b6-83b8-45e6-a2a2-223770729eb5')`,
      }}
    >
      <div className=" absolute flex-col text-center flex-wrap  content-center rounded-xl w-full h-full   backdrop-blur-[3px] backdrop-brightness-50">
        <Reveal width="">
        <h3 className="  max-w-6xl mx-auto text-3xl md:text-5xl lg:text-6xl  tracking-wide ">
          GAIS INCORPORATED SUMMIT
        </h3>
        </Reveal>
        <Reveal width="">
        <p className="mt-2  md:w-2/3 sm:w-full mx-auto p-3 md:text-[18px] text-neutral-200 ">
          Experience the unprecedented: A global AI summit unlike any other,
          where the future of every industry unfolds before your eyes. We've
          woven a tapestry of meticulously curated AI experiences, each thread
          dedicated to a specific field, ready to ignite your vision and propel
          you forward. No matter your domain – healthcare, finance, retail,
          manufacturing, transportation, or beyond – your journey starts here.
        </p>
        </Reveal>
      </div>
    </div>
  );
};

export default Banner2;
