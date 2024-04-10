import React from "react";

const Hero = () => {
  return (
    <div className="hero w-full h-screen bg-no-repeat bg-scroll">
      <div className="max-w-7xl mx-auto pt-20 px-6 bg-transparent">
        <div className="flex flex-col items-center mt-6 lg:m-20 bg-transparent ">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide bg-transparent">
            Global AI Summit (
            <span className="bg-gradient-to-r from-orange-500 to-purple-600 text-transparent bg-clip-text bg-transparent">
              GAIS
            </span>
            ) Conference
          </h1>
          <p className="mt-10 text-lg text-center text-neutral-500 max-w-2xl bg-transparent">
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
