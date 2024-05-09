import React from "react";
import MyForm from "./MyForm";
import { Reveal } from "../../utils/Reveal";

const Ticket = () => {
  return (
    <div className="bg-gradient-to-r text-center from-orange-500 to-purple-600 h-full w-full min-h-[500px]">
      <Reveal width="">
        <div className="md:text-5xl text-2xl pt-10 font-bold">
          Get Notified When Registration is Open!
        </div>
      </Reveal>
      <Reveal width="">
        <div className="md:text-xl text-lg  pt-10">
          Enter your details below to be notified once registration has opened.
        </div>
      </Reveal>
      <div className="flex justify-center items-center text-start">
        <MyForm />
      </div>
    </div>
  );
};

export default Ticket;
