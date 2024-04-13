import React from "react";

const Banner2 = () => {
  return (
    <div
      className="relative border-b border-neutral-800 min-h-[450px] bg-cover "
      style={{
        backgroundImage: `url('https://www.global-investors-forum.com/GAIS/assets/images/people.png')`,
      }}
    >
      <div className="bg-transparent absolute flex-col text-center flex-wrap  content-center rounded-xl w-full h-full   backdrop-blur-[3px] backdrop-brightness-50">
        <h3 className=" bg-transparent max-w-5xl mx-auto text-4xl lg:text-6xl  tracking-wide ">
          GAIS INCORPORATED SUMMIT
        </h3>
        <p className="mt-2  bg-transparent md:w-2/3 sm:w-full mx-auto p-3 md:text-[18px] text-neutral-200 ">Experience the unprecedented: A global AI summit unlike any other, where the future of every industry unfolds before your eyes. We've woven a tapestry of meticulously curated AI experiences, each thread dedicated to a specific field, ready to ignite your vision and propel you forward. No matter your domain – healthcare, finance, retail, manufacturing, transportation, or beyond – your journey starts here.</p>
      </div>
    </div>
  );
};

export default Banner2;
