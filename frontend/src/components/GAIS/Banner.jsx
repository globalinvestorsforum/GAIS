import React from "react";

const Banner = () => {
  return (
    <div
      className="relative border-b  border-neutral-800 min-h-[800px] bg-cover bg-center"
      style={{
        backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/gais-f3e13.appspot.com/o/assets%2Fconcpic.png?alt=media&token=6498945a-8816-462d-90db-4f8bf93c0e07')`,
      }}
    >
      <div className="absolute flex  flex-col justify-center items-center px-4 w-full h-full text-start  backdrop-blur-[1px] backdrop-brightness-50">
        <p className="md:text-xl lg:text-2xl text-xl mx-auto md:w-5/6 w-full  ">
          Get ready to dive into the cutting edge of AI innovation at the
          world's premier event, hosted in the heart of Amsterdam, Netherlands.
          This isn't just a summit; it's a launchpad for groundbreaking ideas, a
          catalyst for collaboration, and a platform to shape the future of AI
          together. Register now and secure your place at the world's largest AI
          summit!
        </p>
        <button className="bg-gradient-to-r my-8 from-orange-500 to-purple-600 lg:w-52 md:w-44 sm:w-40 mx-auto py-2 px-3 rounded-md border">
          REGISTER NOW
        </button>
        <p className="pt-10 md:text-xxl lg:text-2xl text-xl mx-auto md:w-5/6 w-full ">
          Opportunity for speakers and workshop leaders. Amplify your impact
          with speaking slots & workshops demos. Join the world's biggest AI
          stage. Apply now!
        </p>
        <button className="bg-gradient-to-r my-8 from-orange-500 to-purple-600 lg:w-52 md:w-44 sm:w-40 mx-0 py-2 px-3 rounded-md border">
          APPLY NOW
        </button>
      </div>
    </div>
  );
};

export default Banner;
