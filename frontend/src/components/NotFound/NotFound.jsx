import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="h-[400px]">
      <h2 className="text-center text-white text-5xl mx-auto pt-20">
        Page Not Found !
      </h2>
      <p className="text-center mx-auto pt-10">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, non
        possimus ratione fuga atque neque Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Facilis, eaque!
      </p>

      <div className="text-center pt-20">
        <Link class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-3  mx-auto rounded">
          Go to the Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
