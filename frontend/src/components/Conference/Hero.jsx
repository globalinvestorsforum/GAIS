import React from "react";

const Hero = () => {
  return (
    <div className="hero w-full h-screen bg-no-repeat bg-cover  border-b border-neutral-800  ">
      <div className="max-w-7xl mx-auto pt-20 px-6 ">
        <div className="flex flex-col items-center mt-6 lg:m-20  animate-slidein opacity-0 [--slidein-delay:300ms]">
          <h1 className=" text-3xl md:text-5xl  lg:text-7xl text-center tracking-wide ">
            Global AI Summit (
            <span className="bg-gradient-to-r from-orange-500 to-purple-600 text-transparent bg-clip-text ">
              GAIS
            </span>
            ) Conference
          </h1>
          <p className="mt-10 text-lg text-center text-neutral-200 max-w-2xl animate-slidein [--slidein-delay:400ms]  opacity-0  ">
            Welcome to the epicenter of innovation, the launchpad for
            groundbreaking ideas, and the gateway to the future of AI – GAIS
            Conferences. As the world's largest AI summit, we bring together the
            brightest minds, the boldest thinkers, and the most determined
            builders, all united by a shared passion: accelerating the progress
            of artificial intelligence.
          </p>
        </div>
      </div>
      </div>
  );
};

export default Hero;
