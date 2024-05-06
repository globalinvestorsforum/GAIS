import React from "react";
import { Link } from "react-router-dom";
import Button from "../../utils/Button";

const NotFound = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-r from-orange-700 to-purple-600 flex justify-center items-center">
      <div>
        <h1 className="text-center text-white md:text-7xl text-6xl tracking-wide mx-auto ">
          Page Not Found !
        </h1>
        <div className="text-center pt-20">
         <Button link={"/"} name={"Go to Homepage !!"} className={"md:w-44 px-4 py-3"}/>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
