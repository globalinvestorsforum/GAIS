import React from "react";
import { partnersLogo } from "../../constants";
import { Reveal } from "../../utils/Reveal";

const Partners = () => {
  return (
    <section className="border-b border-neutral-500">
      <div className="relative bg-gradient-to-r from-orange-700 to-purple-600 min-h-[700px] py-10">
        <Reveal width="">
          <h1 className="pt-5 text-3xl md:text-4xl lg:text-5xl  font-bold text-neutral-50 text-center mb-3 tracking-wide">
            OUR PARTNERS
          </h1>
        </Reveal>
        <div className="md:p-10 p-5">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2  gap-6 justify-center place-content-center place-items-center">
            {partnersLogo.map((logo, index) => (
              <Reveal>
                <div className="lg:h-[150px] lg:w-[250px] md:h-[120px] md:w-[220px] h-[100px] w-[150px] bg-slate-50 content-center  ">
                  <img src={logo.imgURL} className="md:p-5 p-3" alt="" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
