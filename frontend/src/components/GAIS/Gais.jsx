import { React } from "react";


import { Link } from "react-router-dom";

import Hero from "./Hero";
import About from "./About";
import Numbers from "./Numbers";
import Join from "./Join";
import Summit from "./Summit";
import Threecards from "./Threecards";
import Partners from "./Partners";
import Banner from "./Banner";

const Gais = () => {
  return (
    <>
      <Hero />
      <Numbers />
      <About />
      <Join/>
      <Summit/>
      {/* <Threecards/> */}
      <Partners/>
      <Banner />
      
    </>
  );
};

export default Gais;
