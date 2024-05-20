import  React,{ useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";

const Numbers = () => {
  const [counterOn, setcounterOn] = useState(false);

  return (
    <section>
      <ScrollTrigger
        onEnter={() => setcounterOn(true)}
        onExit={() => setcounterOn(false)}
      >
        <div className="min-h-[600px]  bg-white text-blue-950">
          <div className="p-5 pt-20 md:p-32 md:text-center ">
            <div className="md:flex flex-wrap  w-full ">
              <div className="md:w-1/2  font-bold md:text-7xl text-5xl">
                {counterOn && <span><CountUp start={0} end={5000} duration={2} />+</span>}
                <hr className="w-full h-[2.5px] my-1 border-[1px] border-black md:hidden" />
                <p className="text-xl  md:text-3xl ">Expected Visitors</p>
              </div>
              <div className="md:w-1/2 pt-10 md:p-0 font-bold md:text-7xl text-5xl">
                {counterOn && <span><CountUp start={0} end={10000} duration={2} />+</span>}
                <hr className="w-full h-[2.5px] my-1 border-[1px] border-black md:hidden" />
                <p className="text-xl  md:text-3xl ">Networking & Meetings</p>
              </div>
            </div>
            <div className="md:flex flex-wrap  w-full md:pt-24 pt-10  ">
              <div className="md:w-1/2 font-bold md:text-7xl text-5xl">
                {counterOn && <span><CountUp start={0} end={100} duration={2} />+</span>}
                <hr className="w-full h-[2.5px] my-1 border-[1px] border-black md:hidden" />
                <p className="text-xl  md:text-3xl ">Conferences</p>
              </div>
              <div className="md:w-1/2 md:py-0 py-10 font-bold  md:text-7xl text-5xl">
                {counterOn &&  <span><CountUp start={0} end={200} duration={3} />+</span>}
                <hr className="w-full h-[2.5px] my-1 border-[1px] border-black md:hidden" />
                <p className="text-xl  md:text-3xl ">Speakers</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </section>
  );
};

export default Numbers;
