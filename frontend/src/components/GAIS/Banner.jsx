import React from "react";
import { Link } from "react-router-dom";
import { Reveal } from "../../utils/Reveal";
import { RevealLeft } from "../../utils/RevealLeft";

const Banner = () => {
  return (
    <div
      className="relative border-b  border-neutral-800 min-h-[800px] bg-cover bg-center"
      style={{
        backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/gais-f3e13.appspot.com/o/assets%2Fconcpic.png?alt=media&token=6498945a-8816-462d-90db-4f8bf93c0e07')`,
      }}
    >
      <div className="absolute flex  flex-col justify-center items-start  lg:px-44 md:px-20 px-5 w-full h-full text-start  backdrop-blur-[1px] backdrop-brightness-90">
        <Reveal>
          <p className="md:text-2xl mx-auto w-full  text-lg ">
            Get ready to dive into the cutting edge of AI innovation at the
            world's premier event, hosted in the heart of Berlin, Germany..
            <strong>
              This isn't just a summit; it's a launchpad for groundbreaking
              ideas, a catalyst for collaboration, and a platform to shape the
              future of AI together.
            </strong>{" "}
            Register now and{" "}
            <strong>secure your place at the world's largest AI summit!</strong>
          </p>
        </Reveal>

        <Link
          to={"/ticket"}
          className="bg-gradient-to-r my-8 from-orange-500 to-purple-600 md:w-44 sm:w-40 text-center py-2 px-3 font-semibold"
        >
          <RevealLeft width="">REGISTER NOW</RevealLeft>
        </Link>

        <Reveal>
          <p className="pt-10  md:text-2xl mx-auto w-full text-lg ">
            Opportunity for <strong>speakers</strong> and{" "}
            <strong>workshop leaders.</strong> Amplify your impact with speaking
            slots & workshops demos. Join the world's biggest AI stage. Apply
            now!
          </p>
        </Reveal>
        <Link
          to={"mailto: info@global-investors-forum.com"}
          className="bg-gradient-to-r my-8 from-orange-500 to-purple-600 text-center  md:w-40 sm:w-36 mx-0 py-2 px-3  font-semibold"
        >
          <RevealLeft width="">APPLY NOW</RevealLeft>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
