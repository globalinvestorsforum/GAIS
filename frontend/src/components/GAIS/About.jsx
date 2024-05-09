import React from 'react'
import { Reveal } from '../../utils/Reveal'
const About = () => {
  return (
    <section className="border-y border-neutral-500">
    <div className="w-full min-h-[520px] bg-gradient-to-r from-orange-700 to-purple-600 py-10 md:py-14">
      <div className=" flex-col text-center   content-center  w-full h-full ">
        <Reveal width=''>
        <h3 className=" max-w-5xl  mx-auto text-3xl md:text-4xl lg:text-5xl font-bold "> 
          ABOUT GAIS 
        </h3>
        </Reveal>
       
        <div className="pt-2  bg-transparent md:w-2/3 sm:w-full mx-auto p-3 md:text-[18px] text-neutral-200 ">
        <Reveal >
          <p className="py-2">
            The future is calling, and it's gathering in the City of Lights!
            The{" "}
            <strong>Global Artificial Intelligence Summit (GAIS)</strong> is
            landing in Paris, France, bringing together the brightest minds
            from over 170+ countries for an unprecedented AI extravaganza.
          </p>{" "}
          </Reveal>
          <Reveal >
          <p className="py-2">
            Imagine a vibrant hub where the{" "}
            <strong>most desirable AI-powered startups</strong> and industry
            giants converge. Here, you'll witness a showcase of the most{" "}
            <strong>revolutionary AI solutions</strong> tackling today's
            biggest challenges and shaping the future of tomorrow. Dive deep
            into the latest advancements in AI, from groundbreaking research
            to real-world applications that are transforming industries at
            an unprecedented pace. But GAIS goes beyond the technical. We
            also recognize the importance of{" "}
            <strong>responsible AI development.</strong>
            Join critical discussions about{" "}
            <strong>ethical adoption</strong> and how to ensure AI benefits
            all of humanity.
          </p>{" "}
          </Reveal>
          <Reveal >
          <p className="py-2">
            <strong>This is your chance to be a part of history.</strong>{" "}
            Network with leading experts, discover the future of AI, and
            gain the insights you need to navigate this transformative era.
            GAIS offers a vibrant mix of keynote sessions, insightful panel
            discussions, expansive networking opportunities, and hands-on
            workshops. Whether you're a seasoned AI professional, an
            aspiring entrepreneur, or simply curious about the future, GAIS
            is your platform to{" "}
            <strong>learn, connect, and be empowered.</strong>
          </p>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About